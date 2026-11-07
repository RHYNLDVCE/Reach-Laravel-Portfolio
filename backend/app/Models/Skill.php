<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category',
        'proficiency',
        'icon',
        'order',
    ];

    protected $casts = [
        'proficiency' => 'integer',
        'order' => 'integer',
    ];

    public function scopeByCategory($query, $category)
    {
        if ($category && $category !== 'All') {
            return $query->where('category', $category);
        }

        return $query;
    }
}
