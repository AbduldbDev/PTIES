<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CMSContent extends Model
{
    protected $table = 'cms_contents';
    protected $fillable = [
        'page_key',
        'section_key',
        'content_key',
        'content_value'
    ];
}
