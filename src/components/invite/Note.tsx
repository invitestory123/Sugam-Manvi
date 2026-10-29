import { Heart, Sparkles } from "lucide-react";
import { invite } from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function Note() {
  return (
    <section className="px-6 py-20 text-center sm:py-28">
      <Reveal>
        <Divider className="mb-10" />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-serif text-sm tracking-widest text-gold sm:text-base">
          {invite.ganeshMantra}
        </p>
        <p className="mx-auto mt-4 max-w-md font-serif text-base italic leading-relaxed text-sepia sm:text-lg">
          &ldquo;{invite.quote}&rdquo;
        </p>
      </Reveal>

      {/* Divine Blessings */}
      <Reveal delay={0.2}>
        <div className="mx-auto mt-8 inline-block rounded-full border border-gold/30 bg-paper-deep/50 px-5 py-2">
          <p className="caps text-[0.55rem] text-olive sm:text-[0.6rem]">
            {invite.blessings}
          </p>
        </div>
      </Reveal>

      {/* Groom & Bride Parentage Details Card */}
      <Reveal delay={0.3}>
        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border/80 bg-paper/60 p-7 sm:p-9 shadow-[0_16px_36px_-24px_rgba(60,45,25,0.25)] backdrop-blur-xs">
          <p className="caps text-[0.58rem] text-sepia">
            Cordially invited by
          </p>
          <p className="font-serif text-xl sm:text-2xl text-ink font-medium mt-1">
            {invite.groomParents}
          </p>

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/40" />
            <Heart className="size-3.5 fill-gold/40 text-gold" />
            <span className="h-px w-12 bg-gold/40" />
          </div>

          <div className="space-y-4">
            <div>
              <p className="script text-3xl sm:text-4xl text-ink">{invite.groom}</p>
              <p className="text-xs text-sepia font-serif mt-0.5">
                Beloved Son of {invite.groomParents}
              </p>
            </div>

            <p className="caps text-[0.52rem] text-gold font-semibold tracking-widest">
              with
            </p>

            <div>
              <p className="script text-3xl sm:text-4xl text-ink">{invite.bride}</p>
              <p className="text-xs text-sepia font-serif mt-0.5">
                Beloved Daughter of {invite.brideParents}
              </p>
            </div>
          </div>

          {/* Brothers */}
          <div className="mt-8 pt-5 border-t border-border/60">
            <p className="caps text-[0.52rem] text-olive font-medium">With warm regards from brothers</p>
            <p className="font-serif text-base text-ink mt-1 font-medium">{invite.brothers}</p>
            <p className="caps text-[0.48rem] text-sepia/75 mt-1">&amp; Entire {invite.family}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="script mt-10 text-3xl text-sepia sm:text-4xl">{invite.dayLine}</p>
        <p className="caps mt-3 text-[0.6rem] text-sepia">{invite.timeLine}</p>
      </Reveal>
    </section>
  );
}
