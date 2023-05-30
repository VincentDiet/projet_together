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
        Schema::create('participations', function (Blueprint $table) {
            $table->foreignId('activity_id')
                  ->references('id')
                  ->on('activities')
                  ->onDelete('cascade');
            $table->foreignId('participant_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
            $table->integer('organizator_note')->nullable();
            $table->integer('participant_note')->nullable();
            $table->timestamps();
            //$table->unique(['activity_id', 'participant_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
