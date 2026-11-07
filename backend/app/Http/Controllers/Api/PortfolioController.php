<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PortfolioController extends Controller
{
    /**
     * Get consolidated portfolio payload.
     */
    public function index(): JsonResponse
    {
        $profile = [
            'name' => 'Rhyn',
            'role' => 'Full-Stack Software Engineer',
            'headline' => 'Architecting resilient Web2 platforms with Laravel & React',
            'bio' => 'Full-stack software engineer dedicated to building high-performance web applications, robust REST APIs, and fluid, intuitive user interfaces. Combining Laravel backend precision with modern React component systems.',
            'location' => 'Available Worldwide / Remote',
            'email' => 'contact@rhyn.dev',
            'availability' => 'Open for High-Impact Projects & Opportunities',
            'social' => [
                'github' => 'https://github.com/rhyn',
                'linkedin' => 'https://linkedin.com/in/rhyn-dev',
                'twitter' => 'https://x.com/rhyn_dev',
            ],
            'stats' => [
                [
                    'label' => 'Years Experience',
                    'value' => '5+',
                    'subtext' => 'Full-stack web engineering',
                ],
                [
                    'label' => 'Shipped Projects',
                    'value' => '25+',
                    'subtext' => 'Production web apps & APIs',
                ],
                [
                    'label' => 'Uptime Guarantee',
                    'value' => '99.9%',
                    'subtext' => 'Resilient cloud architecture',
                ],
                [
                    'label' => 'Client Satisfaction',
                    'value' => '100%',
                    'subtext' => 'Quality & on-time delivery',
                ],
            ],
        ];

        $skills = Skill::orderBy('order', 'asc')->get()->groupBy('category');
        $projects = Project::orderBy('order', 'asc')->get();

        $backendInfo = [
            'status' => 'connected',
            'framework' => 'Laravel ' . app()->version(),
            'php_version' => PHP_VERSION,
            'database' => config('database.default'),
            'timestamp' => now()->toIso8601String(),
        ];

        return response()->json([
            'success' => true,
            'profile' => $profile,
            'skills' => $skills,
            'projects' => $projects,
            'backend_info' => $backendInfo,
        ]);
    }

    /**
     * Get projects list with optional category filter.
     */
    public function projects(Request $request): JsonResponse
    {
        $category = $request->query('category');

        $query = Project::query()->orderBy('order', 'asc');

        if ($category && $category !== 'All') {
            $query->where('category', $category);
        }

        return response()->json([
            'success' => true,
            'data' => $query->get(),
        ]);
    }

    /**
     * Handle incoming contact form message.
     */
    public function submitContact(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'subject' => 'nullable|string|max:150',
            'message' => 'required|string|min:5|max:3000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please verify the submitted information.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $validated = $validator->validated();

        $contact = ContactMessage::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'] ?? 'Portfolio Direct Inquiry',
            'message' => $validated['message'],
            'ip_address' => $request->ip(),
        ]);

        return response()->json([
            'success' => true,
            'message' => "Thank you, {$contact->name}! Your message has been safely saved to the Laravel database.",
            'reference_id' => 'MSG-' . str_pad((string) $contact->id, 5, '0', STR_PAD_LEFT),
            'timestamp' => $contact->created_at->toIso8601String(),
        ], 201);
    }

    /**
     * Retrieve all submitted contact messages.
     */
    public function messages(): JsonResponse
    {
        $messages = ContactMessage::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'count' => $messages->count(),
            'data' => $messages,
        ]);
    }
}
