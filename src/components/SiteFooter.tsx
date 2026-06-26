import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { CONTACT, SOCIAL } from "@/data/books";
import { useEffect, useState } from "react";

export function SiteFooter() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="mt-24 border-t border-border/60 bg-gradient-to-b from-background to-primary-soft/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Mantra Foundation" className="h-14 w-auto" />
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Mantra Foundation is an educational trust and an institute for differently abled
              learners, publishing books and resources that make learning joyful, inclusive and
              accessible.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Trust Registration No. <span className="font-medium text-foreground">{CONTACT.trustReg}</span>
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: "/", l: "Home" },
                { to: "/about", l: "About Us" },
                { to: "/books", l: "Books Library" },
                { to: "/gallery", l: "Gallery" },
                { to: "/contact", l: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">Connect With Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />{CONTACT.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />{CONTACT.phones.join(" / ")}</li>
              <li className="flex gap-2 break-all"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />{CONTACT.email}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer noopener"
                aria-label="YouTube"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-soft border border-border transition-all hover:scale-110 hover:shadow-elegant hover:bg-[#FF0033] hover:text-white">
                <Youtube className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer noopener"
                aria-label="Instagram"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-soft border border-border transition-all hover:scale-110 hover:shadow-elegant hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white">
                <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Mantra Foundation. All rights reserved.</p>
            <p>Made with care for differently abled learners.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-elegant transition-all duration-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ background: "var(--gradient-primary)" }}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
