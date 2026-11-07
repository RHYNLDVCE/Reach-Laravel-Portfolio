<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'tagline',
        'description',
        'category',
        'tags',
        'featured',
        'demo_url',
        'github_url',
        'metrics',
        'image_url',
        'order',
    ];

    protected $casts = [
        'tags' => 'array',
        'featured' => 'boolean',
        'order' => 'integer',
    ];

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    public function scopeByCategory($query, $category)
    {
        if ($category && $category !== 'All') {
            return $query->where('category', $category);
        }

        return $query;
    }
}
