<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // anyone can register
    }

    public function rules(): array
    {
        return [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email:rfc,dns', 'max:255', 'unique:users,email'],
            'password' => [
                'required',
                'string',
                'min:8',
                'max:64',
                'regex:/[A-Z]/',      // at least one uppercase
                'regex:/[a-z]/',      // at least one lowercase
                'regex:/[0-9]/',      // at least one digit
                'regex:/[@$!%*?&]/',  // at least one special char
                'confirmed'           // matches password_confirmation
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'email.required'    => 'We need your email to create your account.',
            'email.email'       => 'Please enter a valid email address.',
            'email.unique'      => 'This email is already registered. Try logging in.',
            'password.required' => 'You must choose a password.',
            'password.confirmed' => 'Password confirmation does not match.',
            'password.*' => 'Password must be at least 8 characters long, include uppercase, lowercase, a number, and not appear in known data breaches.',
        ];
    }
}
