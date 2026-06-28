import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Instagram, Youtube, Check } from "lucide-react";
import { CONTACT, SOCIAL } from "@/data/books";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us – Mantra Foundation" },
      { name: "description", content: "Visit, call or write to Mantra Foundation in Rajkot. Address, phone, email and a contact form." },
      { property: "og:title", content: "Contact Mantra Foundation" },
      { property: "og:description", content: "Address, phone, email and contact form for Mantra Foundation, Rajkot." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  }

  const cards = [
    { icon: MapPin, label: "Address", value: CONTACT.address },
    { icon: Phone, label: "Phone", value: CONTACT.phones.join(" / ") },
    { icon: Mail, label: "Email", value: CONTACT.email },
  ];

  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-5xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contact</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Get in <span className="text-gradient">touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We'd love to hear from you — for queries about our books, programs or to volunteer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
              <p className="mt-1 font-medium text-foreground break-words">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-5 gap-8">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 rounded-3xl bg-card border border-border/60 p-6 sm:p-8 shadow-soft"
        >
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We'll get back to you via email.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" />
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-primary)" }}
          >
            {sent ? <><Check className="h-4 w-4" /> Opening mail…</> : <><Send className="h-4 w-4" /> Send Message</>}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 rounded-3xl bg-card border border-border/60 p-6 sm:p-8 shadow-soft"
        >
          <h2 className="font-display text-2xl font-bold">Follow Us</h2>
          <p className="mt-1 text-sm text-muted-foreground">Stay connected on social media.</p>
          <div className="mt-5 flex gap-3">
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer"
              className="group flex-1 rounded-2xl border border-border bg-background p-4 hover:border-primary/40 hover:shadow-soft transition-all">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF0033]/10 text-[#FF0033] group-hover:scale-110 transition-transform">
                <Youtube className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold">YouTube</p>
              <p className="text-xs text-muted-foreground">@supermom8507</p>
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
              className="group flex-1 rounded-2xl border border-border bg-background p-4 hover:border-primary/40 hover:shadow-soft transition-all">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white group-hover:scale-110 transition-transform">
                <Instagram className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold">Instagram</p>
              <p className="text-xs text-muted-foreground">@mantrafoundationrajkot</p>
            </a>
          </div>
          <div className="mt-6 rounded-2xl bg-primary-soft p-5">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Trust Reg. No.</p>
            <p className="mt-1 font-semibold text-foreground">{CONTACT.trustReg}</p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-border/60 shadow-card"
        >
          <iframe
            title="Mantra Foundation on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
            width="100%" height="420" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </motion.div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
