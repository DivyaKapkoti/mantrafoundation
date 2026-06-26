import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, Heart, Users, ChevronDown, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { books, CONTACT } from "@/data/books";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mantra Foundation – An Institute for Differently Abled" },
      { name: "description", content: "Educational trust in Rajkot publishing inclusive books and resources for differently abled learners." },
      { property: "og:title", content: "Mantra Foundation – An Institute for Differently Abled" },
      { property: "og:description", content: "Educational trust in Rajkot publishing inclusive books and resources for differently abled learners." },
    ],
  }),
  component: Home,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Home() {
  const featured = books.slice(0, 6);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <FloatingBlobs />
        <div className="relative mx-auto max-w-5xl px-4 py-24 sm:py-32 lg:py-44 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5" /> Empowering Through Education
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-foreground">An Institute for </span>
            <span className="text-gradient">Differently Abled</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
          >
            Mantra Foundation is an educational trust based in Rajkot, publishing inclusive books
            and learning resources that make education joyful and accessible for every child.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/books"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Explore Books <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground shadow-soft hover:bg-white"
            >
              Our Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 inline-flex flex-col items-center text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5 mt-1 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 rounded-3xl glass p-6 sm:p-8 shadow-card">
          {[
            { n: books.length, s: "+", l: "Published Books" },
            { n: 7, s: "", l: "Subjects" },
            { n: 5, s: "+", l: "Reading Levels" },
            { n: 100, s: "%", l: "Inclusive" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO CARDS */}
      <Section title="Who We Are" eyebrow="Introduction">
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground">
          Mantra Foundation is a Rajkot-based educational trust dedicated to differently abled
          learners. We publish carefully designed books across English, Hindi, Gujarati, Mathematics,
          General Knowledge, Pre-Vocational skills and Art &amp; Craft — across multiple reading
          levels — so that every child can learn at their own pace.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: BookOpen, t: "Inclusive Books", d: "Multi-level books crafted for differently abled learners across seven subjects." },
            { icon: Users, t: "Authors & Contributors", d: "Educators, specialists and volunteers shaping every page with care." },
            { icon: Heart, t: "Compassionate Mission", d: "Education as a right — joyful, accessible and dignified for every child." },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FEATURED BOOKS */}
      <Section title="Featured Books" eyebrow="Library" action={<Link to="/books" className="text-sm font-medium text-primary hover:underline">View all →</Link>}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {featured.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <Link to="/books" className="block">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-secondary shadow-soft transition-all duration-300 group-hover:shadow-elegant group-hover:-translate-y-1">
                  <img src={b.cover} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground truncate">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.subject}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT CTA */}
      <Section title="Get in Touch" eyebrow="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl p-8 text-primary-foreground shadow-elegant" style={{ background: "var(--gradient-primary)" }}>
            <h3 className="font-display text-2xl font-semibold">Visit, call or write to us</h3>
            <p className="mt-2 text-primary-foreground/90 text-sm">{CONTACT.address}</p>
            <div className="mt-6 space-y-1 text-sm">
              <p>📞 {CONTACT.phones.join(" / ")}</p>
              <p>✉️ {CONTACT.email}</p>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/25 transition-colors">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft">
            <h3 className="font-display text-2xl font-semibold">Join our journey</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow Mantra Foundation on social media to see new books, programs and events for
              differently abled learners.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://youtube.com/@supermom8507?si=B25falsP30uokQbF" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-soft px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">YouTube</a>
              <a href="https://www.instagram.com/mantrafoundationrajkot?igsh=MTV4azgzdmtoYmk0cQ==" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-soft px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

function Section({ title, eyebrow, children, action }: { title: string; eyebrow?: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{eyebrow}</p>}
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-40 animate-float" style={{ background: "radial-gradient(circle, oklch(0.72 0.16 240 / 0.35), transparent 70%)" }} />
      <div className="absolute top-20 -right-20 h-96 w-96 rounded-full opacity-30 animate-float" style={{ background: "radial-gradient(circle, oklch(0.7 0.18 320 / 0.25), transparent 70%)", animationDelay: "-3s" }} />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full opacity-30 animate-float" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 80 / 0.25), transparent 70%)", animationDelay: "-6s" }} />
    </div>
  );
}
