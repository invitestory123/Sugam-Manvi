// ─────────────────────────────────────────────────────────────
// Wedding Invitation Configuration: Manvi & Sugam
// Bride's side invitation details
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Manvi",
  brideFull: "Manvi Sahu",
  brideParents: "Mrs. Sarika Sahu & Mr. Naresh Sahu",
  groom: "Sugam",
  groomFull: "Sugam Gupta",
  groomParents: "Mrs. Dimple Gupta & Mr. Anoop Gupta",
  grandparents: "Late Sh. Rajkumar Sahu & Smt. Meera Devi",
  blessings: "With the divine blessings of Late Sh. Rajkumar Sahu & Smt. Meera Devi",
  family: "Sahu Family & Gupta Family",
  ganeshMantra: "॥ श्री गणेशाय नमः ॥",
  quote: "Destiny brought them together and now love will seal their bond forever",

  /** Shown below 'Save the Date' in Hero & Envelope (only 24th Nov per bride's invite) */
  dateLabel: "24.11.2026",
  weddingDayLabel: "Wedding Day",

  /** Local start / end of celebrations */
  start: "2026-11-23T12:00:00",
  end: "2026-11-25T02:00:00",
  weddingStart: "2026-11-24T20:30:00",

  /** IANA timezone */
  timeZoneOffset: "+05:30",
  dayLine: "23rd & 24th November 2026",
  timeLine: "Celebrations begin Monday, 12:00 PM onwards",
  eventTitle: "Wedding Celebrations of Manvi & Sugam",
  invitationNote:
    "With the divine blessings of Late Sh. Rajkumar Sahu & Smt. Meera Devi, Mrs. Sarika Sahu & Mr. Naresh Sahu cordially invite you to celebrate the wedding ceremony of their beloved daughter Manvi with Sugam (S/o Mrs. Dimple Gupta & Mr. Anoop Gupta).",

  /** Primary Wedding Venue */
  venue: {
    name: "Palms Banquet",
    address: "Zirakpur, Punjab",
    query: "Palms Banquet, Zirakpur",
    lat: 30.6425,
    lng: 76.8173,
  },

  /** All celebration events (Bride's invite view) */
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
      note: "Haldi, Happiness & You! · With love, Sahu & Gupta Family",
      mapQuery: "Mohali Golf Range, Sector 65, Mohali",
      icon: "sun",
      accent: "from-amber-400 to-yellow-500",
    },
    {
      id: "cocktail",
      day: "Day 01",
      title: "Cocktail",
      theme: "Raise a Glass with Us!",
      subtitle: "Before the big vows and the happily-ever-after, let's toast to love, laughter, and a little bit of mischief!",
      hostLine: "In honour of the Ring Ceremony of Manvi & Sugam",
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
      subtitle: "Mrs. Sarika Sahu & Mr. Naresh Sahu cordially invite you to the Wedding Ceremony of their beloved daughter Manvi with Sugam (S/o Mrs. Dimple Gupta & Mr. Anoop Gupta)",
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

  closing: "With Love, Sahu & Gupta Family",
  music: {
    title: "Mai Heer Teri",
    artist: "Shambhavi Thakur, Shubham Agrawal & Yash Tiwari",
    src: "/music.m4a",
  },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  invite.venue.query,
)}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  invite.venue.query,
)}`;
