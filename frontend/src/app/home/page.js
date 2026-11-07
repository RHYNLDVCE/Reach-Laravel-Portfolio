import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-16">
      {/* Intro Section */}
      <section className="space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-800 rounded-full px-3 py-1 bg-neutral-100 dark:bg-neutral-900/50">
          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
          <span>Available for full-stack engineering</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-tight">
          Rhyn &mdash; Full-stack software engineer building minimal web applications with React and Laravel.
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Specializing in clean user interfaces, performant RESTful APIs, and reliable database architectures. Working across modern React ecosystems and robust Laravel application backends.
        </p>

        <div className="pt-2 flex items-center gap-5 text-xs font-medium">
          <Link
            href="/projects"
            className="text-neutral-900 dark:text-white hover:text-black dark:hover:text-neutral-300 transition-colors border-b border-neutral-400 dark:border-neutral-700 pb-0.5"
          >
            Explore Projects &rarr;
          </Link>
          <Link
            href="/about"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            About &amp; Stack &rarr;
          </Link>
          <Link
            href="/contact"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Overview */}
      <section className="border-t border-neutral-200 dark:border-neutral-900 pt-12 space-y-4">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
            Selected Work Preview
          </h2>
          <Link
            href="/projects"
            className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-800 transition-colors">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
              Full Stack
            </span>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">CloudFlow</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              High-throughput asynchronous task orchestrator with real-time job monitoring and webhook dispatching.
            </p>
            <div className="flex gap-1.5 mt-4 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">Laravel 13</span>
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">React 19</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-800 transition-colors">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
              Backend API
            </span>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">NexusPay</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              Double-entry bookkeeping ledger and webhook consensus engine with automated reconciliation.
            </p>
            <div className="flex gap-1.5 mt-4 text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">Laravel 13</span>
              <span className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">PHP 8.5</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
