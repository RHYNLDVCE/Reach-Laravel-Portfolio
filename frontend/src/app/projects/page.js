"use client";

import { useEffect, useState } from "react";

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "CloudFlow",
    tagline: "High-throughput asynchronous task orchestrator with real-time job monitoring and webhook dispatching.",
    category: "Full Stack",
    tags: ["Laravel 13", "React 19", "Redis", "Tailwind CSS"],
    github_url: "https://github.com/rhyn/cloudflow-orchestrator",
    demo_url: "https://cloudflow-demo.example.com",
  },
  {
    id: 2,
    title: "PulseMetrics",
    tagline: "Real-time telemetry and user behavior analytics with interactive funnel projections and cohort tracking.",
    category: "Full Stack",
    tags: ["React", "Laravel API", "TypeScript", "SQLite"],
    github_url: "https://github.com/rhyn/pulse-metrics",
    demo_url: "https://pulse-metrics.example.com",
  },
  {
    id: 3,
    title: "NexusPay",
    tagline: "Double-entry bookkeeping ledger and webhook consensus engine with automated reconciliation.",
    category: "Backend API",
    tags: ["Laravel 13", "PHP 8.5", "Stripe API", "Pest PHP"],
    github_url: "https://github.com/rhyn/nexuspay-ledger",
  },
  {
    id: 4,
    title: "DevLab",
    tagline: "Collaborative code review network with line-level diff annotations and peer mentorship.",
    category: "Full Stack",
    tags: ["React 19", "Laravel API", "Tailwind CSS", "SQLite"],
    github_url: "https://github.com/rhyn/devlab-portal",
    demo_url: "https://devlab-demo.example.com",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          setProjects(data.data);
        }
      })
      .catch(() => {
        // Keeps fallback
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-10">
      <div className="space-y-2">
        <h1 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
          Projects
        </h1>
        <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Production Systems &amp; Experiments
        </p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          A selection of full-stack web applications and backend services built with React and Laravel.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id || project.slug}
            className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-800 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-3 self-start text-xs font-mono">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    code ↗
                  </a>
                )}
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-white hover:underline transition-colors font-medium"
                  >
                    live ↗
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mt-2 mb-4">
              {project.tagline || project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {(Array.isArray(project.tags) ? project.tags : []).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
