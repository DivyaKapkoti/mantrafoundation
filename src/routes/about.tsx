import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Target, Users, Trophy, Coffee } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-hero overflow-hidden">
        <FloatingBlobs />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.2em] text-primary font-semibold"
          >
            About Mantra Foundation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-gradient">15 Years. One Powerful Mantra:</span>
            <br />
            <span className="text-foreground">"You Can."</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground"
          >
            For the last 15 years, Mantra Foundation has been a home of hope, learning, and dignity for individuals with special needs in Rajkot, Gujarat.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
              Our Story Begins with Love
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                We were founded by the proud parents of Mantra Harkhani — a graduate, an international para-swimmer, and an individual honored by Hon. Shri Narendra Modiji. Mantra has Down Syndrome. His journey taught us one truth: ability has no single definition.
              </p>
              <p>
                Named after him, "Mantra" means a powerful chant that transforms lives. That's exactly what we do every day.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative rounded-3xl bg-card border border-border shadow-elegant p-8 flex items-center justify-center min-h-[300px]">
              <Heart className="w-24 h-24 text-primary animate-pulse" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section className="bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Philosophy</Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
              Our Approach: Life Beyond Books
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Inspired by Mantra's journey, our founder created a research-based Functional Curriculum. It focuses on real-life skills — communication, self-care, work-readiness, and independence. Because education should prepare our students for life, not just exams.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">What We Do</h2>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Special Education", desc: "Personalized learning for every mind" },
            { icon: Heart, title: "Therapies", desc: "Occupational, Speech & Behavioral support" },
            { icon: Target, title: "Skill Training", desc: "For employment and self-reliance" },
            { icon: Trophy, title: "Sports Training", desc: "Building confidence, discipline, and champions" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border shadow-soft p-6 hover:shadow-elegant hover:-translate-y-1 transition-all group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mantra Cafe Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl bg-card border border-border shadow-elegant p-10 flex flex-col items-center justify-center min-h-[350px]">
              <Coffee className="w-20 h-20 text-primary mb-4" />
              <p className="font-display text-2xl font-semibold text-gradient">Mantra Café</p>
              <p className="mt-2 text-sm text-muted-foreground">Coming Soon</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
              Our Dream: Mantra Café
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Our next step is to launch an inclusive café/restaurant run entirely by our students. Here, they won't receive charity — they will earn with pride as chefs, servers, and hosts. We believe in giving opportunity, not sympathy.
              </p>
              <p className="font-medium text-foreground">
                Because when the world gives them a chance, our students show the world what they're capable of.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
      {children}
    </p>
  );
}

function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-20 animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.2 247 / 0.4), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full opacity-15 animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.18 280 / 0.3), transparent 70%)", animationDelay: "-4s" }}
      />
    </div>
  );
}
