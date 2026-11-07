<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::truncate();
        Skill::truncate();

        // Seed Projects
        $projects = [
            [
                'title' => 'CloudFlow - Enterprise Workflow Orchestrator',
                'slug' => 'cloudflow-orchestrator',
                'tagline' => 'High-throughput distributed task runner with real-time job monitoring and webhook dispatching.',
                'description' => 'A mission-critical automation engine powering distributed background jobs, retry policies, and granular audit trails. Built with a responsive React frontend and a rock-solid Laravel API backend leveraging asynchronous queues.',
                'category' => 'Full Stack',
                'tags' => ['Laravel 13', 'React 19', 'Redis', 'Tailwind CSS', 'PostgreSQL', 'WebSockets'],
                'featured' => true,
                'demo_url' => 'https://cloudflow-demo.example.com',
                'github_url' => 'https://github.com/rhyn/cloudflow-orchestrator',
                'metrics' => 'Processes 1.2M jobs/day with <25ms p99 latency',
                'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                'order' => 1,
            ],
            [
                'title' => 'PulseMetrics - SaaS Analytics & Telemetry Engine',
                'slug' => 'pulse-metrics',
                'tagline' => 'Real-time telemetry and user behavior analytics with interactive funnel projections and cohort tracking.',
                'description' => 'Engineered for high-volume product teams needing instant visibility into user conversion funnels and platform retention. Combines lightning-fast Laravel aggregation pipelines with interactive React data visualizations.',
                'category' => 'Full Stack',
                'tags' => ['React', 'Laravel API', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'SQLite'],
                'featured' => true,
                'demo_url' => 'https://pulse-metrics.example.com',
                'github_url' => 'https://github.com/rhyn/pulse-metrics',
                'metrics' => '35% query latency improvement via denormalized pipelines',
                'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                'order' => 2,
            ],
            [
                'title' => 'NexusPay - Multi-Provider Payment Gateway & Ledger',
                'slug' => 'nexuspay-ledger',
                'tagline' => 'Double-entry bookkeeping ledger and webhook consensus engine with automated reconciliation.',
                'description' => 'A tamper-proof payment integration service handling card processing, subscription billing cycles, and idempotent third-party webhook ingestions. Built for zero data-loss guarantees and strict regulatory compliance.',
                'category' => 'Backend API',
                'tags' => ['Laravel 13', 'PHP 8.5', 'Stripe API', 'MySQL', 'Sanctum', 'Pest PHP'],
                'featured' => true,
                'demo_url' => null,
                'github_url' => 'https://github.com/rhyn/nexuspay-ledger',
                'metrics' => 'Zero reconciliation errors across $4.2M processed volume',
                'image_url' => 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
                'order' => 3,
            ],
            [
                'title' => 'DevLab - Peer Code Review & Mentorship Portal',
                'slug' => 'devlab-review',
                'tagline' => 'Interactive collaborative code review hub with line-level diff annotations and merit scoring.',
                'description' => 'A community-driven review and knowledge exchange portal for engineering teams. Features real-time syntax highlighted diffs, inline discussion threads, and peer reputation metrics.',
                'category' => 'Full Stack',
                'tags' => ['React 19', 'Laravel API', 'Tailwind CSS', 'PrismJS', 'SQLite'],
                'featured' => true,
                'demo_url' => 'https://devlab-demo.example.com',
                'github_url' => 'https://github.com/rhyn/devlab-portal',
                'metrics' => '1,800+ peer reviews completed with 4.9/5 satisfaction',
                'image_url' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                'order' => 4,
            ],
            [
                'title' => 'Synthetix UI - Accessible Design System',
                'slug' => 'synthetix-ui',
                'tagline' => 'WCAG AAA compliant component primitives for enterprise React applications.',
                'description' => 'Production-ready headless and styled UI components with complete keyboard navigation, aria announcements, and theme synchronization across light and dark modes.',
                'category' => 'Frontend UI',
                'tags' => ['React 19', 'Tailwind CSS v4', 'Radix UI', 'CSS Variables'],
                'featured' => false,
                'demo_url' => 'https://synthetix-ui.example.com',
                'github_url' => 'https://github.com/rhyn/synthetix-ui',
                'metrics' => '100% WCAG AAA accessibility audit pass score',
                'image_url' => 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
                'order' => 5,
            ],
            [
                'title' => 'FastCache Edge - High-Concurrency Micro-Caching API',
                'slug' => 'fastcache-edge',
                'tagline' => 'Sub-millisecond dynamic response caching middleware for peak flash sale traffic.',
                'description' => 'A lightweight caching proxy built into Laravel that intercepts database queries for high-frequency reads, delivering consistent 8ms response times under thousands of concurrent requests.',
                'category' => 'Backend API',
                'tags' => ['Laravel 13', 'Redis', 'PHP 8.5', 'REST API', 'Rate Limiting'],
                'featured' => false,
                'demo_url' => null,
                'github_url' => 'https://github.com/rhyn/fastcache-edge',
                'metrics' => '88% database load reduction during peak traffic events',
                'image_url' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
                'order' => 6,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        // Seed Skills
        $skills = [
            // Frontend
            ['name' => 'React 19 & Next.js', 'category' => 'Frontend', 'proficiency' => 96, 'icon' => 'react', 'order' => 1],
            ['name' => 'TypeScript & JavaScript (ESNext)', 'category' => 'Frontend', 'proficiency' => 94, 'icon' => 'code', 'order' => 2],
            ['name' => 'Tailwind CSS v4 & Responsive UI', 'category' => 'Frontend', 'proficiency' => 95, 'icon' => 'palette', 'order' => 3],
            ['name' => 'Component Architecture & State', 'category' => 'Frontend', 'proficiency' => 92, 'icon' => 'layers', 'order' => 4],

            // Backend
            ['name' => 'Laravel 13 & PHP 8.5', 'category' => 'Backend', 'proficiency' => 96, 'icon' => 'server', 'order' => 5],
            ['name' => 'RESTful API Design & OpenAPI', 'category' => 'Backend', 'proficiency' => 95, 'icon' => 'network', 'order' => 6],
            ['name' => 'Sanctum Auth & Security Protocols', 'category' => 'Backend', 'proficiency' => 90, 'icon' => 'shield', 'order' => 7],
            ['name' => 'Background Jobs & Event Queues', 'category' => 'Backend', 'proficiency' => 88, 'icon' => 'cpu', 'order' => 8],

            // Database & Cloud
            ['name' => 'PostgreSQL & MySQL Optimization', 'category' => 'Database & Cloud', 'proficiency' => 92, 'icon' => 'database', 'order' => 9],
            ['name' => 'SQLite & Embedded Storage', 'category' => 'Database & Cloud', 'proficiency' => 94, 'icon' => 'hard-drive', 'order' => 10],
            ['name' => 'Redis Caching & Pub/Sub', 'category' => 'Database & Cloud', 'proficiency' => 86, 'icon' => 'zap', 'order' => 11],
            ['name' => 'Docker & Microservices Setup', 'category' => 'Database & Cloud', 'proficiency' => 85, 'icon' => 'box', 'order' => 12],

            // Architecture & Tools
            ['name' => 'Git Workflow & CI/CD Pipelines', 'category' => 'Architecture & Tools', 'proficiency' => 94, 'icon' => 'git-branch', 'order' => 13],
            ['name' => 'Automated Testing (Pest / Jest)', 'category' => 'Architecture & Tools', 'proficiency' => 89, 'icon' => 'check-circle', 'order' => 14],
            ['name' => 'Web Performance & Core Web Vitals', 'category' => 'Architecture & Tools', 'proficiency' => 93, 'icon' => 'gauge', 'order' => 15],
            ['name' => 'Vite & Modern Build Toolchains', 'category' => 'Architecture & Tools', 'proficiency' => 91, 'icon' => 'wrench', 'order' => 16],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
