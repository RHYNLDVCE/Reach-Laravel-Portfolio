<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('tagline');
            $table->text('description');
            $table->string('category')->default('Full Stack'); // Full Stack, Backend API, Frontend UI
            $table->json('tags'); // ["Laravel", "React", "PostgreSQL", ...]
            $table->boolean('featured')->default(true);
            $table->string('demo_url')->nullable();
            $table->string('github_url')->nullable();
            $table->string('metrics')->nullable();
            $table->string('image_url')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category'); // Frontend, Backend, Database & Cloud, Architecture & Tools
            $table->integer('proficiency')->default(90); // 1-100
            $table->string('icon')->default('code');
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('subject')->nullable();
            $table->text('message');
            $table->string('ip_address')->nullable();
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_messages');
        Schema::dropIfExists('skills');
        Schema::dropIfExists('projects');
    }
};
