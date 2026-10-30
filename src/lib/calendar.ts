import { invite } from "@/config/invite";

/** "2026-11-23T12:00:00" + "+05:30" -> "20261123T063000Z" */
function toUtcStamp(local: string, offset: string): string {
  const d = new Date(`${local}${offset}`);
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export const startStamp = toUtcStamp(invite.start, invite.timeZoneOffset);
export const endStamp = toUtcStamp(invite.end, invite.timeZoneOffset);

export const googleCalendarUrl = [
  "https://calendar.google.com/calendar/render?action=TEMPLATE",
  `text=${encodeURIComponent(invite.eventTitle)}`,
  `dates=${startStamp}/${endStamp}`,
  `details=${encodeURIComponent(
    `${invite.invitationNote}\n\nSchedule:\n• Haldi: Mon 23 Nov, 12:00 PM @ Mohali Golf Range\n• Cocktail & Ring Ceremony: Mon 23 Nov, 7:00 PM @ Mohali Golf Range\n• Wedding & Baraat: Tue 24 Nov, 8:30 PM @ Palms Banquet, Zirakpur`,
  )}`,
  `location=${encodeURIComponent(`${invite.venue.name}, ${invite.venue.address}`)}`,
].join("&");

export function downloadIcs() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//wedding-invite//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${startStamp}-wedding@manvi-sugam`,
    `DTSTAMP:${startStamp}`,
    `DTSTART:${startStamp}`,
    `DTEND:${endStamp}`,
    `SUMMARY:${invite.eventTitle}`,
    `DESCRIPTION:${invite.invitationNote} - Haldi (23 Nov 12 PM), Cocktail (23 Nov 7 PM) & Wedding Ceremony (24 Nov 8:30 PM Baraat)`,
    `LOCATION:${invite.venue.name}\\, ${invite.venue.address}`,
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    "DESCRIPTION:Wedding Reminder",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const blob = new Blob([lines.join("\r\n")], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Manvi-Sugam-Wedding.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
