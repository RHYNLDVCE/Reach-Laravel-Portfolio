export default function AboutPage() {
  const stackGroups = [
    {
      category: "Frontend",
      items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Component Systems"],
    },
    {
      category: "Backend",
      items: ["Laravel 13", "PHP 8.5", "REST APIs", "Sanctum Auth", "Asynchronous Queues"],
    },
    {
      category: "Database & Infra",
      items: ["SQLite", "PostgreSQL", "MySQL", "Redis Caching", "Docker"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-12">
      <div className="space-y-4">
        <h1 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
          About
        </h1>
        <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Engineering Mindset &amp; Craft
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I am a software engineer focused on building clean, dependable web applications. By pairing React on the client with Laravel on the server, I create systems that are fast to interact with, secure by default, and straightforward to maintain.
        </p>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-900 pt-8 space-y-4">
        <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
          Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Simplicity First</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Resisting over-engineering. Writing clear code, selecting dependable libraries, and prioritizing performance.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">End-to-End Ownership</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              From database schema migrations and SQL indexing to responsive UI states and smooth client interactions.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-900 pt-8 space-y-6">
        <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stackGroups.map((group) => (
            <div key={group.category} className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
