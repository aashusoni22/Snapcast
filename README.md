# SnapCast - Video Sharing Platform

SnapCast is a modern video sharing platform built with Next.js, TypeScript, and Drizzle ORM. It allows users to upload, record, and share videos with customizable privacy settings.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-SnapCast-blue)](https://snapcast-eight.vercel.app/)

## Features

- 🎥 Video upload and recording
- 🔒 Public/Private video visibility
- 👤 User authentication and profiles
- 🎨 Modern, responsive UI
- 📱 Mobile-friendly design
- 🔍 Video search and filtering
- 📊 View tracking
- 🖼️ Custom video thumbnails
- ⏱️ Video duration tracking

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Video Storage**: Bunny.net
- **Video Recording**: MediaRecorder API
- **State Management**: React Hooks

## Prerequisites

- Node.js 18+
- PostgreSQL
- Bunny.net account
- Better Auth setup

## Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL=

# Bunny.net
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_STREAM_BASE_URL=
BUNNY_STORAGE_BASE_URL=
BUNNY_CDN_URL=
BUNNY_EMBED_URL=

# Auth
NEXT_PUBLIC_BASE_URL=

# App
NEXT_PUBLIC_APP_URL=
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aashusoni22/snapcast.git
cd snapcast
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database:

```bash
npm run db:generate
npm run db:push
```

4. Start the development server:

```bash
npm run dev
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
├── constants/            # Application constants
├── drizzle/              # Database schema and migrations
├── lib/                  # Utility functions and hooks
│   ├── actions/          # Server actions
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Helper functions
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Bunny.net](https://bunny.net/)
- [Better Auth](https://better-auth.com/)
- [Tailwind CSS](https://tailwindcss.com/)
