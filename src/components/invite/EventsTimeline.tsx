import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Sparkles, Sun, Wine, Heart, ExternalLink } from "lucide-react";
import { invite } from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const iconMap = {
  sun: Sun,
  glass: Wine,
  heart: Heart,
};

export function EventsTimeline() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Divider className="mb-10" />
        <p className="caps text-[0.62rem] text-olive font-medium tracking-widest text-center">
          Wedding Festivities
        </p>
        <h2 className="script mt-3 text-4xl text-ink text-center sm:text-5xl">
          The Celebrations
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm italic text-sepia/85 leading-relaxed">
          Join us as we celebrate love, laughter, and lifelong memories across three unforgettable gatherings.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-xl space-y-8">
        {invite.events.map((evt, idx) => {
          const Icon = iconMap[evt.icon as keyof typeof iconMap] || Sparkles;
          const isWedding = evt.id === "wedding";

          return (
            <Reveal key={evt.id} delay={0.15 * (idx + 1)}>
              <div
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isWedding
                    ? "border-gold/60 bg-paper-deep/80 shadow-[0_16px_36px_-20px_rgba(200,140,50,0.35)] ring-1 ring-gold/30"
                    : "border-border/90 bg-paper/70 shadow-[0_12px_28px_-18px_rgba(60,45,25,0.25)] hover:border-gold/40"
                } p-6 sm:p-8 backdrop-blur-xs`}
              >
                {/* Ornamental header tag */}
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex size-8 items-center justify-center rounded-full bg-gold/15 text-gold ${
                        isWedding ? "ring-2 ring-gold/40" : ""
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="caps text-[0.55rem] font-semibold text-olive tracking-widest">
                      {evt.day} · {evt.title}
                    </span>
                  </div>

                  {"dressCode" in evt && evt.dressCode && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1 text-[0.55rem] font-medium text-amber-800">
                      <Sun className="size-3 text-amber-600" />
                      <span>{evt.dressCode}</span>
                    </span>
                  )}
                </div>

                {/* Event Title / Slogan */}
                <div className="mt-5">
                  <h3 className="script text-3xl sm:text-4xl text-ink leading-tight">
                    {evt.theme}
                  </h3>
                  <p className="mt-2 text-sm text-sepia/90 leading-relaxed font-serif">
                    {evt.subtitle}
                  </p>
                  {"hostLine" in evt && evt.hostLine && (
                    <p className="mt-2 text-xs font-serif italic text-olive/90">
                      {evt.hostLine}
                    </p>
                  )}
                </div>

                {/* Date & Time details */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 rounded-xl bg-paper/60 p-4 border border-border/50 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="size-4 shrink-0 text-gold mt-0.5" />
                    <div>
                      <p className="caps text-[0.5rem] text-sepia/75">Date</p>
                      <p className="font-medium text-ink mt-0.5">{evt.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="size-4 shrink-0 text-gold mt-0.5" />
                    <div>
                      <p className="caps text-[0.5rem] text-sepia/75">Timing</p>
                      <p className="font-medium text-ink mt-0.5">{evt.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:col-span-2 pt-2 border-t border-border/40">
                    <MapPin className="size-4 shrink-0 text-gold mt-0.5" />
                    <div className="flex-1">
                      <p className="caps text-[0.5rem] text-sepia/75">Venue</p>
                      <p className="font-semibold text-ink mt-0.5">
                        {evt.venueName}
                        <span className="font-normal text-sepia ml-1.5">— {evt.venueAddress}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer notes & Map button */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/40">
                  <p className="text-[0.72rem] italic text-sepia/80 font-serif">
                    {evt.note}
                  </p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      evt.mapQuery,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="caps inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-3.5 py-1.5 text-[0.52rem] font-medium text-ink hover:bg-gold/15 hover:border-gold transition-colors"
                  >
                    <span>View Location</span>
                    <ExternalLink className="size-3 text-gold" />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

