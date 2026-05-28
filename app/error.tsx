"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[PJJ App Error]", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-display text-3xl font-bold">Ops, algo saiu do ritmo</h1>
      <p className="max-w-md text-muted">
        Encontramos um erro inesperado. Recarregue a página ou tente novamente em instantes.
      </p>
      <Button type="button" onClick={reset} size="lg">
        Tentar novamente
      </Button>
    </div>
  );
}
