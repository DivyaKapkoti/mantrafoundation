import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { books, SUBJECTS, type Subject } from "@/data/books";
import { Eye, Download, Search, X } from "lucide-react";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books Library – Mantra Foundation" },
      { name: "description", content: "Browse Mantra Foundation's inclusive books across English, Hindi, Gujarati, Mathematics, GK, Pre-Vocational and Art & Craft." },
      { property: "og:title", content: "Books Library – Mantra Foundation" },
      { property: "og:description", content: "Inclusive multi-level books for differently abled learners." },
    ],
  }),
  component: BooksPage,
});

function BooksPage() {
  const [filter, setFilter] = useState<Subject | "All">("All");
  const [q, setQ] = useState("");
  const [viewing, setViewing] = useState<{ title: string; pdf: string } | null>(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return books.filter((b) => {
      if (filter !== "All" && b.subject !== filter) return false;
      if (term && !b.title.toLowerCase().includes(term) && !b.subject.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [filter, q]);

  const grouped = useMemo(() => {
    const map = new Map<Subject, typeof books>();
    for (const s of SUBJECTS) map.set(s, []);
    for (const b of filtered) map.get(b.subject)?.push(b);
    return map;
  }, [filtered]);

  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Books Library</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Explore our <span className="text-gradient">inclusive books</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Carefully designed across seven subjects and multiple levels — view or download the
            index of any title.
          </p>

          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title or subject…"
              className="w-full rounded-full bg-white border border-border shadow-soft pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {(["All", ...SUBJECTS] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                filter === s
                  ? "text-primary-foreground border-transparent shadow-soft"
                  : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
              style={filter === s ? { background: "var(--gradient-primary)" } : undefined}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* GROUPED LIST */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        {SUBJECTS.map((subject) => {
          const list = grouped.get(subject) ?? [];
          if (list.length === 0) return null;
          return (
            <div key={subject}>
              <div className="flex items-end justify-between mb-6">
                <h2 className="font-display text-2xl sm:text-3xl font-bold">{subject}</h2>
                <span className="text-sm text-muted-foreground">{list.length} {list.length === 1 ? "book" : "books"}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {list.map((b, i) => (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.04 }}
                    className="group rounded-3xl bg-card border border-border/60 p-4 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                      <img src={b.cover} alt={b.title} loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-foreground line-clamp-2 min-h-[2.5rem]">{b.title}</h3>
                    <p className="text-xs text-muted-foreground">{b.subject}</p>
                    <div className="mt-3 flex gap-2">
                      <button
                        disabled={!b.pdf}
                        onClick={() => b.pdf && setViewing({ title: b.title, pdf: b.pdf })}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold px-3 py-2 hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Eye className="h-3.5 w-3.5" /> View
                      </button>
                      {b.pdf ? (
                        <a
                          href={b.pdf}
                          download
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full text-xs font-semibold px-3 py-2 text-primary-foreground transition-transform hover:scale-[1.03]"
                          style={{ background: "var(--gradient-primary)" }}
                        >
                          <Download className="h-3.5 w-3.5" /> PDF
                        </a>
                      ) : (
                        <span className="flex-1 inline-flex items-center justify-center rounded-full text-xs font-medium px-3 py-2 bg-secondary text-muted-foreground">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No books match your search.</p>
        )}
      </section>

      {/* PDF VIEWER */}
      <AnimatePresence>
        {viewing && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setViewing(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-card rounded-3xl shadow-elegant w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card">
                <p className="font-semibold text-sm truncate pr-3">{viewing.title}</p>
                <div className="flex items-center gap-2">
                  <a href={viewing.pdf} download className="rounded-full bg-primary-soft text-primary text-xs font-semibold px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors">Download</a>
                  <button onClick={() => setViewing(null)} className="rounded-full p-2 hover:bg-secondary" aria-label="Close">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <iframe src={viewing.pdf} className="flex-1 w-full" title={viewing.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
