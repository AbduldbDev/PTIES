<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CMSBanner extends Model
{
    protected $table = 'cms_color';
    protected $fillable = [
        'key',
        'title',
        'subtitle',
        'desc',
        'image'
    ];
}
