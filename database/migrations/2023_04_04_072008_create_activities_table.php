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
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('max_participants');
            $table->dateTime('start_datetime');
            $table->integer('duration');
            $table->text('adress');
            $table->string('city');
            $table->string('country');
            $table->string('longitude');
            $table->string('latitude');
            $table->text('description');
            $table->foreignId('category_id')
                  ->references('id')
                  ->on('categories')
                  ->onDelete('cascade');
            $table->foreignId('author_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
            $table->string('photo', 2048)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};
