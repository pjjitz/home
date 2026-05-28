"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[PJJ ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 p-8 text-center">
            <h2 className="font-display text-xl font-semibold">Algo deu errado</h2>
            <p className="max-w-md text-sm text-muted">
              Não foi possível carregar esta seção. Tente recarregar a página.
            </p>
            <Button type="button" onClick={() => this.setState({ hasError: false })}>
              Tentar novamente
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
