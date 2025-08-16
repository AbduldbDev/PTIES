<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CMSColor extends Model
{
    protected $table = 'cms_color';
    protected $fillable = [
        'key',
        'value'
    ];
}
