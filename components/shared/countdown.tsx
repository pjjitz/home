"use client";

import { useCountdown } from "@/hooks/use-countdown";

interface CountdownProps {
  targetDate: string;
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-background/60 px-3 py-2 backdrop-blur-sm">
      <span className="font-mono text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-muted">{label}</span>
    </div>
  );
}

export function Countdown({ targetDate }: CountdownProps) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  if (isComplete) {
    return (
      <p className="text-sm font-medium text-accent" role="status">
        Evento em andamento ou encerrado
      </p>
    );
  }

  return (
    <div
      className="flex gap-2"
      role="timer"
      aria-live="polite"
      aria-label="Contagem regressiva para o evento"
    >
      <Unit value={days} label="dias" />
      <Unit value={hours} label="hrs" />
      <Unit value={minutes} label="min" />
      <Unit value={seconds} label="seg" />
    </div>
  );
}
