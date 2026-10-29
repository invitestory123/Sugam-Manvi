import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
const mapImg = "https://media.invitestory.in/marigold-bhavan/src/assets/map.jpg";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const tapFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
};

const venues = [
  {
    id: "palms",
    name: "Palms Banquet",
    city: "Zirakpur",
    address: "Zirakpur, Punjab",
    events: "Wedding Ceremony & Baraat (24th Nov)",
    query: "Palms Banquet, Zirakpur",
  },
  {
    id: "golf-range",
    name: "Mohali Golf Range",
    city: "Mohali",
    address: "Sector 65, Mohali, Punjab",
    events: "Haldi & Brother's Cocktail (23rd Nov)",
    query: "Mohali Golf Range, Sector 65, Mohali",
  },
];

export function Venue() {
  const [activeVenue, setActiveVenue] = useState(0);
  const current = venues[activeVenue];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.query)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(current.query)}`;

  return (
    <section className="px-6 pb-20 text-center sm:pb-28">
      <Reveal>
        <Divider className="mb-10" />
        <p className="caps text-[0.6rem] text-olive font-medium">Locations</p>
        <h2 className="script mt-4 text-4xl text-ink sm:text-5xl">The Venues</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-sepia leading-relaxed">
          Find directions and maps to join us across our celebration venues.
        </p>

        {/* Venue Selector Pills */}
        <div className="mx-auto mt-7 flex max-w-xs items-center justify-center rounded-full border border-border bg-paper-deep/60 p-1">
          {venues.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => {
                tapFeedback();
                setActiveVenue(i);
              }}
              className={`caps flex-1 rounded-full py-2 text-[0.52rem] transition-all duration-300 ${
                activeVenue === i
                  ? "bg-ink text-paper shadow-sm"
                  : "text-sepia hover:text-ink"
              }`}
            >
              {v.city}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8">
          <h3 className="script text-3xl sm:text-4xl text-ink">{current.name}</h3>
          <p className="mx-auto mt-2 max-w-xs text-base leading-relaxed text-sepia font-serif">
            {current.address}
          </p>
          <span className="caps mt-2 inline-block rounded-full bg-gold/15 px-3 py-1 text-[0.52rem] font-semibold text-olive">
            {current.events}
          </span>
        </div>

        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          onClick={tapFeedback}
          whileTap={{ scale: 0.985 }}
          className="grain group mx-auto mt-8 block max-w-md overflow-hidden rounded-2xl border border-gold/30 shadow-[0_20px_40px_-34px_rgba(60,45,25,0.75)]"
        >
          <div className="relative">
            <img
              src={mapImg}
              alt={`Map showing location of ${current.name}`}
              width={1024}
              height={768}
              loading="lazy"
              className="h-52 w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] sm:h-60"
            />
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-8 ring-gold/20"
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.75, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="caps absolute bottom-3 left-1/2 flex min-h-10 -translate-x-1/2 items-center gap-1.5 rounded-full bg-paper/90 px-4 text-[0.5rem] font-medium text-ink backdrop-blur-sm border border-gold/30 shadow-sm">
              <MapPin className="size-3 text-gold" />
              <span>Open {current.name} in Maps</span>
            </span>
          </div>
        </motion.a>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            onClick={tapFeedback}
            whileTap={{ scale: 0.96 }}
            className="caps inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/25 bg-paper px-6 text-[0.55rem] text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper"
          >
            <Navigation className="size-3" />
            <span>Get directions</span>
          </motion.a>

          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            onClick={tapFeedback}
            whileTap={{ scale: 0.96 }}
            className="caps inline-flex min-h-12 items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-6 text-[0.55rem] text-ink transition-colors duration-500 hover:bg-gold/20"
          >
            <span>Google Maps</span>
            <ExternalLink className="size-3 text-gold" />
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
