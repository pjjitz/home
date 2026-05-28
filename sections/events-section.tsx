import { EventCard } from "@/components/shared/event-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerGrid } from "@/components/motion";
import { events } from "@/data/events";

export function EventsSection() {
  const sorted = [...events].sort((a, b) => {
    if (a.status === "past" && b.status !== "past") return 1;
    if (a.status !== "past" && b.status === "past") return -1;
    const aTime = a.date ? new Date(a.date).getTime() : Number.MAX_SAFE_INTEGER;
    const bTime = b.date ? new Date(b.date).getTime() : Number.MAX_SAFE_INTEGER;
    return aTime - bTime;
  });

  return (
    <section
      id="eventos"
      className="section-padding border-t border-border/50"
      aria-labelledby="eventos-heading"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Agenda"
            title="Próximos encontros"
            description="Acamps, reencontros e lazeres: a agenda viva da juventude Shalom em Imperatriz."
          />
        </Reveal>

        <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sorted.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
