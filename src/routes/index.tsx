import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import paper from "@/assets/paper.jpg";
import { ActionBar } from "@/components/invite/ActionBar";
import { AddToCalendar } from "@/components/invite/AddToCalendar";
import { Countdown } from "@/components/invite/Countdown";
import { Envelope } from "@/components/invite/Envelope";
import { EventsTimeline } from "@/components/invite/EventsTimeline";
import { Hero } from "@/components/invite/Hero";
import { InviteFooter } from "@/components/invite/InviteFooter";
import { MusicPlayer } from "@/components/invite/MusicPlayer";
import { Note } from "@/components/invite/Note";
import { ScrollThread } from "@/components/invite/ScrollThread";
import { Venue } from "@/components/invite/Venue";
import { invite } from "@/config/invite";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = `${invite.bride} & ${invite.groom} — ${invite.dayLine}`;
const description = `With the divine blessings of our elders, the Sahu family cordially invites you to celebrate the wedding festivities of ${invite.bride} & ${invite.groom} on ${invite.dayLine}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} · Wedding Invitation` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} · Wedding Invitation` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Invitation,
});

function Invitation() {
  useSmoothScroll();
  const [opened, setOpened] = useState(false);
  const [playMusicTrigger, setPlayMusicTrigger] = useState(false);

  return (
    <>
      <Envelope
        onOpenStart={() => setPlayMusicTrigger(true)}
        onOpen={() => {
          setOpened(true);
          setPlayMusicTrigger(true);
        }}
      />
      <MusicPlayer autoPlayTrigger={playMusicTrigger} />
      <ScrollThread />
      <main
        className="grain relative min-h-screen bg-paper text-ink"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "480px" }}
      >
        <Hero ready={opened} />
        <Note />
        <EventsTimeline />
        <Countdown />
        <Venue />
        <AddToCalendar />
        <InviteFooter />
      </main>
      <ActionBar />
    </>
  );
}
