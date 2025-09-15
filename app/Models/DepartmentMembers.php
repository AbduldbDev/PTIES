<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DepartmentMembers extends Model
{
    protected $table = 'department_members';
    protected $fillable = [
        'department_id',
        'name',
        'position',
        'is_leader'
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
