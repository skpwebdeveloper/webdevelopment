import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#03060E] px-6 text-center text-slate-100">
          <h1 className="font-display text-2xl font-bold text-white">Web Development</h1>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Something went wrong while displaying the page. Please refresh your browser or contact
            us directly on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Reload Page
            </button>
            <a
              href="https://wa.me/923270798352"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-[#0A1328] px-5 py-2.5 text-sm font-semibold text-white hover:border-cyan-400"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
