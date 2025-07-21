# East Bay Blinds - Admin Authentication Setup

This project uses [Better Auth](https://www.better-auth.com) for secure admin authentication with a 2-user limit.

## 🔐 Authentication Features

- **Email/Password Authentication**: Secure login system
- **User Limit**: Maximum of 2 admin users allowed
- **Protected Routes**: `/admin/*` routes require authentication
- **Session Management**: 7-day sessions with automatic refresh
- **Middleware Protection**: Server-side route protection

## 📋 Setup Instructions

### 1. Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```env
# Database (Required)
DATABASE_URL="postgresql://user:password@host:port/database"

# Better Auth (Required)
BETTER_AUTH_SECRET="your-32-character-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Generate a secure secret:**
```bash
openssl rand -base64 32
```

### 2. Database Setup

Run the migration SQL in your Neon database:

```bash
# Copy the contents of drizzle/0001_auth_tables.sql
# Run in your Neon SQL Editor or via CLI
```

Or use Drizzle CLI:
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 3. Start Development

```bash
npm run dev
```

## 🚪 Access Points

### Sign Up (Limited to 2 users)
- **URL**: `/auth/signup`
- **Limit**: Only 2 accounts can be created
- **Auto-closes**: Shows "Signup Closed" when limit reached

### Sign In
- **URL**: `/auth/signin`
- **Redirects**: Successful login → `/admin`

### Admin Dashboard
- **URL**: `/admin`
- **Protected**: Requires authentication
- **Auto-redirect**: Unauthenticated users → `/auth/signin`

## 🛡️ Security Features

### Route Protection
- Middleware automatically protects `/admin/*` routes
- Unauthenticated users are redirected to sign-in
- Session validation on every request

### User Limit Enforcement
- Database query checks user count before signup
- Server-side validation prevents signup when limit reached
- Frontend shows appropriate messages

### Session Security
- Secure HTTP-only cookies
- 7-day expiration with refresh
- Automatic cleanup of expired sessions

## 🔧 System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   middleware.ts │ -> │  /admin routes   │ -> │  Admin Dashboard│
│  (Auth Check)   │    │   (Protected)    │    │   (Authorized)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                       │
         v                        v                       v
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  /auth/signin   │    │  Better Auth API │    │   Database      │
│  (Public)       │    │ /api/auth/[...] │    │  (User Storage) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 👥 User Management

### Current Users
Admin dashboard shows:
- Total users (X/2)
- User details
- Account creation dates

### Adding Users
1. Visit `/auth/signup` (only if < 2 users exist)
2. Fill registration form
3. Automatic sign-in and redirect to admin

### User Limit Details
- **Developer**: First admin account
- **Business Owner**: Second admin account  
- **System**: Automatically prevents additional signups

## 🔍 Troubleshooting

### Common Issues

**"Cannot find module" errors:**
```bash
npm install better-auth drizzle-orm @neondatabase/serverless
```

**Database connection issues:**
- Verify `DATABASE_URL` in `.env.local`
- Ensure Neon database is accessible
- Check database tables exist

**Authentication not working:**
- Verify `BETTER_AUTH_SECRET` is set
- Check API routes are accessible
- Ensure middleware is configured

**User limit not enforced:**
- Verify database migration ran successfully
- Check API endpoint `/api/auth/check-limit`
- Review server logs for errors

### Debug Mode

Add to `.env.local`:
```env
NODE_ENV=development
DEBUG=better-auth*
```

## 📚 Further Reading

- [Better Auth Documentation](https://www.better-auth.com)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Neon Database](https://neon.tech/docs) 