import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
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

type GalleryCategory = "All" | "Education" | "Therapy" | "Vocational Training" | "Montessori Activities" | "Breakfast" | "Awards" | "Foundation";

type GalleryItem = { src: string; label: string; category: GalleryCategory };

const CATEGORIES: GalleryCategory[] = ["All", "Education", "Therapy", "Vocational Training", "Montessori Activities", "Breakfast", "Awards", "Foundation"];

const items: GalleryItem[] = [
  // Foundation & Facilities
  { src: "/gallery/exterior.png", label: "Exterior View", category: "Foundation" },
  { src: "/gallery/facilities.png", label: "Facilities by Foundation", category: "Foundation" },
  { src: "/about/establishment.png", label: "Year of Establishment", category: "Foundation" },
  { src: "/about/mission-vision.png", label: "Mission & Vision", category: "Foundation" },
  { src: "/about/objectives.png", label: "Objectives", category: "Foundation" },
  { src: "/about/initiatives.png", label: "Initiatives", category: "Foundation" },

  // Education
  { src: "/gallery/education/Education_(1).png", label: "Education Program 1", category: "Education" },
  { src: "/gallery/education/Education_(3).png", label: "Education Program 2", category: "Education" },
  { src: "/gallery/education/Education_(4).png", label: "Education Program 3", category: "Education" },
  { src: "/gallery/education/Education_(5).png", label: "Education Program 4", category: "Education" },
  { src: "/gallery/education/Education_(6).png", label: "Education Program 5", category: "Education" },

  // Therapy
  { src: "/images/therapy/Therapy_(3).png", label: "Therapy Session 1", category: "Therapy" },
  { src: "/images/therapy/Therapy_(4).png", label: "Therapy Session 2", category: "Therapy" },
  { src: "/images/therapy/Therapy_(6).png", label: "Therapy Session 3", category: "Therapy" },
  { src: "/images/therapy/Therapy_(7).png", label: "Therapy Session 4", category: "Therapy" },
  { src: "/images/therapy/Therapy_(8).png", label: "Therapy Session 5", category: "Therapy" },
  { src: "/images/therapy/Therapy_(10).png", label: "Therapy Session 6", category: "Therapy" },
  { src: "/images/therapy/Cognitive_therapy.png", label: "Cognitive Therapy", category: "Therapy" },
  { src: "/images/therapy/Visual_Stimulation.png", label: "Visual Stimulation", category: "Therapy" },
  { src: "/images/therapy/Speech_therapy_and_Brain_activities.png", label: "Speech Therapy & Brain Activities", category: "Therapy" },
  { src: "/images/therapy/Sensory_intigration_&_Mobility_Exercise.png", label: "Sensory Integration & Mobility Exercise", category: "Therapy" },
  { src: "/images/therapy/Balance,_Coordination_&_Hand_Writing.png", label: "Balance, Coordination & Hand Writing", category: "Therapy" },

  // Vocational Training
  { src: "/images/vocational-training/Chocolate_making_1.png", label: "Chocolate Making 1", category: "Vocational Training" },
  { src: "/images/vocational-training/Chocolate_making_2.png", label: "Chocolate Making 2", category: "Vocational Training" },
  { src: "/images/vocational-training/Seed_peeling_1.png", label: "Seed Peeling 1", category: "Vocational Training" },
  { src: "/images/vocational-training/Seed_peeling_2.png", label: "Seed Peeling 2", category: "Vocational Training" },
  { src: "/images/vocational-training/Cotton_wick_making_.png", label: "Cotton Wick Making", category: "Vocational Training" },

  // Montessori Activities
  { src: "/images/montessori-activities/M.A_1.png", label: "Montessori Activity 1", category: "Montessori Activities" },
  { src: "/images/montessori-activities/M.A_2.png", label: "Montessori Activity 2", category: "Montessori Activities" },
  { src: "/images/montessori-activities/M.A_3.png", label: "Montessori Activity 3", category: "Montessori Activities" },
  { src: "/images/montessori-activities/M.A_4.png", label: "Montessori Activity 4", category: "Montessori Activities" },
  { src: "/images/montessori-activities/M.A_5.png", label: "Montessori Activity 5", category: "Montessori Activities" },
  { src: "/images/montessori-activities/M.A_6.png", label: "Montessori Activity 6", category: "Montessori Activities" },
  { src: "/images/montessori-activities/M.A_7.png", label: "Montessori Activity 7", category: "Montessori Activities" },

  // Breakfast
  { src: "/images/breakfast/Breakfast_(1).png", label: "Breakfast Time", category: "Breakfast" },
  { src: "/images/breakfast/Breakfast_(all).png", label: "Breakfast Gathering", category: "Breakfast" },
  { src: "/images/breakfast/Breakfast_prayer_(1).png", label: "Breakfast Prayer", category: "Breakfast" },

  // Awards
  { src: "/gallery/awards/Awards_&_Achievements_(1).png", label: "Award Ceremony 1", category: "Awards" },
  { src: "/gallery/awards/Awards_&_Achievements_(2).png", label: "Award Ceremony 2", category: "Awards" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null;

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((item) => item.category === filter);
  }, [filter]);

  const next = () => setActive((i) => (i === null ? 0 : (i + 1) % filtered.length));
  const prev = () => setActive((i) => (i === null ? 0 : (i - 1 + filtered.length) % filtered.length));

  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Gallery</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Moments from <span className="text-gradient">Mantra Foundation</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our programs, therapy sessions, vocational training, and daily activities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setActive(null); }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                filter === cat
                  ? "text-primary-foreground border-transparent shadow-soft"
                  : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
              style={filter === cat ? { background: "var(--gradient-primary)" } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <motion.button
              key={`${it.src}-${i}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              className="group mb-5 block w-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft hover:shadow-elegant transition-all break-inside-avoid text-left"
            >
              <div className="overflow-hidden">
                <img src={it.src} alt={it.label} loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{it.category}</p>
                <p className="mt-1 font-medium text-foreground">{it.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No images in this category.</p>
        )}
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
            <motion.div
              key={active}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elegant flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[active].src}
                alt={filtered[active].label}
                className="max-h-[75vh] rounded-t-2xl object-contain"
              />
              <div className="bg-card/90 backdrop-blur-sm rounded-b-2xl px-6 py-3 text-center w-full">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{filtered[active].category}</p>
                <p className="mt-1 font-medium text-foreground">{filtered[active].label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
