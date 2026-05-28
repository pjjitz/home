"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { acamps2026Config } from "@/config/acamps";
import { Button } from "@/components/ui/button";
const LOAD_TIMEOUT_MS = 4000;

export function AcampsFormEmbed() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowLoader(false), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  const handleLoad = () => setShowLoader(false);

  return (
    <div className="glass glow-border overflow-hidden rounded-2xl shadow-card">
      <div className="flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          Preencha todos os campos. Ao enviar, sua resposta vai direto para a equipe.
        </p>
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <a
            href={acamps2026Config.form.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir em nova aba
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </Button>
      </div>

      <div className="relative w-full bg-background-elevated">
        {showLoader ? (
          <div
            className="absolute inset-0 z-10 flex min-h-[800px] flex-col items-center justify-center gap-3 bg-background-elevated"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader2 className="h-8 w-8 animate-spin text-accent" aria-hidden />
            <p className="text-sm text-muted">Carregando formulário…</p>
          </div>
        ) : null}

        <iframe
          src={acamps2026Config.form.embedUrl}
          title="Formulário de inscrição Acamps 2026"
          className="block w-full border-0"
          style={{ minHeight: "1073px", height: "1073px" }}
          onLoad={handleLoad}
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <p className="border-t border-border px-4 py-3 text-center text-xs text-muted-foreground sm:px-6">
        O formulário não carregou?{" "}
        <a
          href={acamps2026Config.form.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-2 hover:underline"
        >
          Abra direto no Google Forms
        </a>
      </p>
    </div>
  );
}
