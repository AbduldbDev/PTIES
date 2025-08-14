<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ColorTheme extends Model
{
    protected $table = 'layout_colors';
    protected $fillable = ['key', 'value'];
}
