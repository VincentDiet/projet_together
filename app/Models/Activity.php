<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Participation;
use App\Models\Category;
use App\Models\Image;
use App\Models\User;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Activity extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'duration',
        'max_participants',
        'start_datetime',
        'adress',
        'city',
        'country',
        'description',
        'photo',
        'latitude',
        'longitude',
        'category_id',
        'author_id'
    ];

    public function images(): HasMany
    {
        return $this->hasMany(Image::class, 'activity_id');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function participations(): HasMany
    {
        return $this->hasMany(Participation::class, 'activity_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}