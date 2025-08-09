# Pakil Tourism Information System

A modern web-based tourism information system for Pakil, Laguna, designed to provide tourists and locals with easy access to information, events, and attractions through an interactive and user-friendly platform. Built with Laravel 12 and Inertia.js using React for the frontend.

---

## Features

- Dynamic content management for tourist spots and events
- User authentication and role-based access control
- Responsive and interactive UI with React and Inertia.js
- QR code integration for easy access and engagement
- Gamification features for enhanced tourism experience
- Admin dashboard for managing content, events, and users

---

## System Requirements

- **Operating System:** Windows, macOS, Linux (Any OS that supports PHP & Node.js)
- **Web Server:** Apache, Nginx, or built-in PHP server
- **PHP:** 8.1 or higher (compatible with Laravel 12)
- **Composer:** Latest version for managing PHP dependencies
- **Node.js:** v18.x or higher
- **NPM/Yarn:** Latest version
- **Database:** MySQL 8.x or MariaDB 10.5 or higher
- **Browser:** Modern browsers (Chrome, Firefox, Edge, Safari)

---

## Installation

Follow these steps to set up the Pakil Tourism Information System on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/AbduldbDev/PTIES.git
cd PTIES
```

### 2. Install PHP dependencies with Composer

```
composer install
```

### 3. Install Node.js dependencies

```
npm install
# or
yarn install
```

### 4. Configure Environment

Copy the example environment file and update with your configuration:
```
cp .env.example .env
```
Edit .env file and set your database credentials and other environment variables:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
```

### 5. Generate application key

```
php artisan key:generate
```

### 6. Run database migrations and seeders

```
php artisan migrate --seed
```

### 7. Run the application

```
composer run dev
```