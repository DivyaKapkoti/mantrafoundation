import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Target, Eye, ListChecks, Users, Sparkles, Calendar } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us – Mantra Foundation" },
      { name: "description", content: "Foundation history, mission, vision, objectives, founders and initiatives of Mantra Foundation, Rajkot." },
      { property: "og:title", content: "About Mantra Foundation" },
      { property: "og:description", content: "An educational trust and institute for differently abled learners in Rajkot." },
    ],
  }),
  component: About,
});

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
    </div>
  );
}

function About() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Mantra Foundation</p>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-bold leading-tight">
              Education that <span className="text-gradient">includes everyone</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">
              A Rajkot-based educational trust dedicated to differently abled learners — publishing
              books, designing learning resources and running initiatives that put inclusion first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE / ESTABLISHMENT */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
              <Calendar className="h-3.5 w-3.5" /> Foundation History
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Year of Establishment</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mantra Foundation was established as a registered educational trust in Rajkot,
              Gujarat. From its earliest days, the foundation has focused on building learning
              resources that meet differently abled children where they are.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Trust Registration No. <span className="font-semibold text-foreground">E / 10454 / Rajkot</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageCard src="/about/establishment.png" alt="Year of establishment" />
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <ImageCard src="/about/mission-vision.png" alt="Mission and vision" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <div className="rounded-3xl bg-card border border-border/60 p-7 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><Target className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-2xl font-semibold">Mission</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  To create accessible, joyful and dignified learning experiences for differently
                  abled children through carefully designed books and educational initiatives.
                </p>
              </div>
              <div className="rounded-3xl bg-card border border-border/60 p-7 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><Eye className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-2xl font-semibold">Vision</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  A world where every child — regardless of ability — has access to learning that
                  unlocks their full potential.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
              <ListChecks className="h-3.5 w-3.5" /> Objectives
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">What we set out to do</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our objectives guide every book we publish and every program we run — from designing
              multi-level curricula to creating inclusive classroom experiences.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageCard src="/about/objectives.png" alt="Objectives" />
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Profile of Founders</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">The people behind Mantra</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal><ImageCard src="/about/founder-1.png" alt="Founder profile 1" /></Reveal>
          <Reveal delay={0.1}><ImageCard src="/about/founder-2.png" alt="Founder profile 2" /></Reveal>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <ImageCard src="/about/initiatives.png" alt="Initiatives by Mantra Foundation" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Initiatives
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Initiatives by Mantra Foundation</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mantra Foundation runs a portfolio of programs — from publishing inclusive textbooks
              across seven subjects to hands-on educational activities for differently abled
              learners and their families.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AUTHORS & CONTRIBUTORS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft h-full">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><Users className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Authors</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Our books are authored by educators and specialists with deep experience teaching
                differently abled children — translating that experience into clear, level-wise
                learning material.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft h-full">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary"><Users className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Contributors</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                A wider circle of volunteers, illustrators, reviewers and supporters contribute to
                every title — helping us keep books inclusive, accurate and beautifully produced.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
