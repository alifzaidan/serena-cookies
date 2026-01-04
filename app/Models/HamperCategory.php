<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HamperCategory extends Model
{
    protected $guarded = ['created_at', 'updated_at'];

    public function hampers()
    {
        return $this->hasMany(Hamper::class, 'category_id');
    }
}
