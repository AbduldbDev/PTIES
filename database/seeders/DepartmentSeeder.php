<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Department;
use App\Models\DepartmentMembers;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        // Main Tourism Department (Top Level)
        $tourismDept = Department::create([
            'title' => 'Tourism Department',
            'subtitle' => 'Local Government of Pakil',
            'description' => 'Oversees all tourism operations, policies, and development initiatives for Pakil.',
            'icon' => 'fas fa-landmark',
            'parent_id' => null,
        ]);

        // Department Head (Top Level Leader)
        DepartmentMembers::create([
            'department_id' => $tourismDept->id,
            'name' => 'Juan Dela Cruz',
            'position' => 'Tourism Officer',
            'is_leader' => true,
        ]);

        // Deputy Head (Another leader at top level)
        DepartmentMembers::create([
            'department_id' => $tourismDept->id,
            'name' => 'Maria Santos',
            'position' => 'Deputy Tourism Officer',
            'is_leader' => true,
        ]);

        // Marketing Division (Sub-department)
        $marketing = Department::create([
            'title' => 'Marketing Division',
            'subtitle' => 'Promotions & Communications',
            'description' => 'Handles tourism promotions, branding, digital presence, and marketing campaigns.',
            'icon' => 'fas fa-bullhorn',
            'parent_id' => $tourismDept->id,
        ]);

        // Marketing Division Head
        DepartmentMembers::create([
            'department_id' => $marketing->id,
            'name' => 'Carlos Reyes',
            'position' => 'Marketing Division Head',
            'is_leader' => true,

        ]);

        // Marketing Team Members
        DepartmentMembers::insert([
            [
                'department_id' => $marketing->id,
                'name' => 'Andrea Torres',
                'position' => 'Digital Marketing Officer',
                'is_leader' => false,
            ],
            [
                'department_id' => $marketing->id,
                'name' => 'Michael Lim',
                'position' => 'Graphic Designer',
                'is_leader' => false,

            ],
        ]);

        // Digital Marketing Unit (Sub-unit of Marketing)
        $digitalMarketing = Department::create([
            'title' => 'Digital Marketing Unit',
            'subtitle' => 'Online Presence & Campaigns',
            'description' => 'Manages all digital marketing efforts including social media, website, and online campaigns.',
            'icon' => 'fas fa-hashtag',
            'parent_id' => $marketing->id,
        ]);

        // Digital Marketing Unit Head
        DepartmentMembers::create([
            'department_id' => $digitalMarketing->id,
            'name' => 'Sofia Martinez',
            'position' => 'Digital Marketing Manager',
            'is_leader' => true,
        ]);

        Department::create([
            'title' => 'Digital Marketing Unit',
            'subtitle' => 'Online Presence & Campaigns',
            'description' => 'Manages all digital marketing efforts including social media, website, and online campaigns.',
            'icon' => 'fas fa-hashtag',
            'parent_id' => $digitalMarketing->id,
        ]);
        // Operations Division
        $operations = Department::create([
            'title' => 'Operations Division',
            'subtitle' => 'Tourism Services & Facilities',
            'description' => 'Manages tourism sites, facilities, and daily operations.',
            'icon' => 'fas fa-cogs',
            'parent_id' => $tourismDept->id,
        ]);

        // Operations Division Head
        DepartmentMembers::create([
            'department_id' => $operations->id,
            'name' => 'Robert Lim',
            'position' => 'Operations Division Head',
            'is_leader' => true,
        ]);

        // Operations Team Members
        DepartmentMembers::insert([
            [
                'department_id' => $operations->id,
                'name' => 'Lourdes Garcia',
                'position' => 'Visitor Services Officer',
                'is_leader' => false,
            ],
            [
                'department_id' => $operations->id,
                'name' => 'Mark Tan',
                'position' => 'Facilities Coordinator',
                'is_leader' => false,
            ],
        ]);

        // Events Division
        $events = Department::create([
            'title' => 'Events Division',
            'subtitle' => 'Festivals & Special Activities',
            'description' => 'Plans and executes tourism-related events and festivals.',
            'icon' => 'fas fa-calendar-alt',
            'parent_id' => $tourismDept->id,
        ]);

        // Events Division Head
        DepartmentMembers::create([
            'department_id' => $events->id,
            'name' => 'James Wilson',
            'position' => 'Events Division Head',
            'is_leader' => true,
        ]);

        // Events Team Members
        DepartmentMembers::insert([
            [
                'department_id' => $events->id,
                'name' => 'Patricia Lee',
                'position' => 'Community Liaison',
                'is_leader' => false,
            ],
            [
                'department_id' => $events->id,
                'name' => 'David Kim',
                'position' => 'Logistics Coordinator',
                'is_leader' => false,

            ],
        ]);
    }
}
