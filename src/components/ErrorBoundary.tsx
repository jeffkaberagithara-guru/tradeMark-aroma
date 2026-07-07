import React, { Component, ErrorInfo, ReactNode } from "react";
import { Home, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0B] text-[#F4EADE] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            {/* Error Icon */}
            <div className="text-6xl mb-6">😕</div>

            <h1 className="font-heading text-3xl font-bold text-[#F4EADE] mb-3">
              Something Went Wrong
            </h1>

            <p className="font-body text-[#888888] leading-relaxed mb-6">
              We apologize for the inconvenience. Please try reloading the page
              or return to the homepage.
            </p>

            {/* Error Details (only in development) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="bg-[#1C1A14] rounded-lg border border-[#2A2519] p-4 mb-6 text-left overflow-auto max-h-40">
                <p className="font-body text-[#FF6B6B] text-sm font-mono">
                  {this.state.error.message}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={this.handleReload}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A94A] text-[#0B0B0B] font-body font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
              >
                <RefreshCw size={18} />
                Reload Page
              </button>
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#2A2519] text-[#F4EADE] font-body font-semibold uppercase tracking-[0.08em] hover:border-[#C9A94A] hover:text-[#C9A94A] transition-colors"
              >
                <Home size={18} />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}