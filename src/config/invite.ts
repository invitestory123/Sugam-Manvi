// ─────────────────────────────────────────────────────────────
// Wedding Invitation Configuration: Sugam & Manvi
// Groom's side invitation details
// ─────────────────────────────────────────────────────────────

export const invite = {
  groom: "Sugam",
  groomFull: "Sugam Gupta",
  groomParents: "Mrs. Dimple Gupta & Mr. Anoop Gupta",
  bride: "Manvi",
  brideFull: "Manvi Sahu",
  brideParents: "Mrs. Sarika Sahu & Mr. Naresh Sahu of Kanpur",
  blessings: "With the divine Blessings of Late Sh. Vinod Gupta & Late Smt. Kanta Gupta",
  brothers: "Dhruv & Suvan",
  family: "Gupta Family",
  ganeshMantra: "॥ श्री गणेशाय नमः ॥",
  quote: "Destiny brought them together and now love will seal their bond forever",
  
  /** Shown big in the hero */
  dateLabel: "23 · 24.11.2026",
  
  /** Local start / end of the celebrations (Haldi starts at 12:00 PM on 23rd Nov) */
  start: "2026-11-23T12:00:00",
  end: "2026-11-25T02:00:00",
  weddingStart: "2026-11-24T20:30:00",
  
  /** IANA timezone of the venue */
  timeZoneOffset: "+05:30",
  dayLine: "23rd & 24th November 2026",
  timeLine: "Celebrations begin Monday, 12:00 PM onwards",
  eventTitle: "Wedding Celebrations of Sugam & Manvi",
  invitationNote:
    "With the divine Blessings of Late Sh. Vinod Gupta & Late Smt. Kanta Gupta, Mrs. Dimple Gupta & Mr. Anoop Gupta cordially invite you to celebrate the wedding festivities of their beloved son Sugam with Manvi.",
  
  /** Primary Wedding Venue */
  venue: {
    name: "Palms Banquet",
    address: "Zirakpur, Punjab",
    query: "Palms Banquet, Zirakpur",
    lat: 30.6425,
    lng: 76.8173,
  },

  /** All celebration events from groom's invite cards (Sehra Bandi omitted as requested) */
  events: [
    {
      id: "haldi",
      day: "Day 01",
      title: "Haldi Ceremony",
      theme: "Suraj Ki Baahon Mein",
      subtitle: "Let's paint the beginning of their forever in the brightest shade of yellow",
      date: "Monday, 23rd November 2026",
      time: "12:00 PM Onwards",
      venueName: "Mohali Golf Range",
      venueAddress: "Sector 65, Mohali",
      dressCode: "Sunny Vibes",
      note: "Haldi, Happiness & You! · With love, Gupta Family",
      mapQuery: "Mohali Golf Range, Sector 65, Mohali",
      icon: "sun",
      accent: "from-amber-400 to-yellow-500",
    },
    {
      id: "cocktail",
      day: "Day 01",
      title: "Brother's Cocktail",
      theme: "Raise a Glass with Us!",
      subtitle: "Before the big vows and the happily-ever-after, let's toast to love, laughter, and a little bit of mischief!",
      hostLine: "Dhruv & Suvan cordially invite you all to their Brother's Cocktail in honour of the Ring Ceremony of Sugam & Manvi",
      date: "Monday, 23rd November 2026",
      time: "7:00 PM Onwards",
      venueName: "Mohali Golf Range",
      venueAddress: "Sector 65, Mohali",
      note: "Your presence will make the evening even more special!",
      mapQuery: "Mohali Golf Range, Sector 65, Mohali",
      icon: "glass",
      accent: "from-amber-500 to-amber-700",
    },
    {
      id: "wedding",
      day: "Day 02",
      title: "The Wedding Ceremony",
      theme: "Destiny brought them together and now love will seal their bond forever",
      subtitle: "With the divine Blessings of Late Sh. Vinod Gupta & Late Smt. Kanta Gupta, we cordially invite you to the Wedding Ceremony of our beloved son Sugam with Manvi",
      date: "Tuesday, 24th November 2026",
      time: "Assembly of Baraat — 8:30 PM",
      venueName: "Palms Banquet",
      venueAddress: "Zirakpur, Punjab",
      note: "Assembly of Baraat at 8:30 PM",
      mapQuery: "Palms Banquet, Zirakpur",
      icon: "heart",
      accent: "from-rose-500 to-amber-600",
    },
  ],

  closing: "With Love, Gupta Family",
  music: {
    title: "Main Heer Teri",
    artist: "Ashwini Vocals",
    src: "/music.m4a",
  },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  invite.venue.query,
)}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  invite.venue.query,
)}`;
