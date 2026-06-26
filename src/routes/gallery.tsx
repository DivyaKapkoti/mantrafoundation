import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery – Mantra Foundation" },
      { name: "description", content: "Glimpses of Mantra Foundation's facilities, events and educational activities for differently abled learners." },
      { property: "og:title", content: "Gallery – Mantra Foundation" },
      { property: "og:description", content: "Facilities, programs and events at Mantra Foundation, Rajkot." },
    ],
  }),
  component: GalleryPage,
});

type GalleryItem = { src: string; label: string; tag: string };

const items: GalleryItem[] = [
  { src: "/gallery/exterior.png", label: "Exterior View", tag: "Exterior View" },
  { src: "/gallery/facilities.png", label: "Facilities by Foundation", tag: "Facilities" },
  { src: "/about/initiatives.png", label: "Initiatives", tag: "Foundation Programs" },
  { src: "/about/establishment.png", label: "Year of Establishment", tag: "Foundation Programs" },
  { src: "/about/mission-vision.png", label: "Mission & Vision", tag: "Foundation Programs" },
  { src: "/about/objectives.png", label: "Objectives", tag: "Educational Activities" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null;

  const next = () => setActive((i) => (i === null ? 0 : (i + 1) % items.length));
  const prev = () => setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));

  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Gallery</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Moments from <span className="text-gradient">Mantra Foundation</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Facilities, programs, events and everyday learning at Mantra Foundation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((it, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group mb-5 block w-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft hover:shadow-elegant transition-all break-inside-avoid text-left"
            >
              <div className="overflow-hidden">
                <img src={it.src} alt={it.label} loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{it.tag}</p>
                <p className="mt-1 font-medium text-foreground">{it.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass text-foreground flex items-center justify-center shadow-elegant hover:scale-105 transition-transform" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass text-foreground flex items-center justify-center shadow-elegant hover:scale-105 transition-transform" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 h-11 w-11 rounded-full glass text-foreground flex items-center justify-center shadow-elegant" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              src={items[active].src}
              alt={items[active].label}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elegant object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
