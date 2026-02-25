
# tcd-django-next

## Overview

`tcd-django-next` is a full-stack template combining **Next.js** for the frontend and **Django** for the backend, designed for modern web applications requiring a robust API and dynamic user interface.

## Tech Stack

- **Frontend**: Next.js (React framework)
- **Backend**: Django (Python web framework)
- **Database**: PostgreSQL (default) or SQLite (lightweight alternative)
- **API Communication**: REST/GraphQL

## Project Structure

```
tcd-django-next/
├── frontend/              # Next.js application
│   ├── pages/
│   ├── components/
│   └── package.json
├── backend/               # Django application
│   ├── manage.py
│   ├── settings.py
│   ├── apps/
│   └── requirements.txt
└── README.md
```

## Best Use Cases

- Full-featured SaaS applications
- Real-time collaborative tools
- Content management systems with modern UIs
- Rapid prototyping of production-ready applications
- Microservice architectures with separate frontend/backend deployment

## Database Configuration

### PostgreSQL (Default)
Production-ready relational database with advanced features.

### SQLite (Alternative)
Lightweight option ideal for development or small-scale applications. In `settings.py`:

```python
# SQLite configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Switch to PostgreSQL for production by updating `DATABASES` with your connection credentials.

## Getting Started

1. Clone the repository
2. Install backend dependencies: `pip install -r backend/requirements.txt`
3. Install frontend dependencies: `npm install` (from `frontend/`)
4. Configure your database in `settings.py`
5. Run migrations: `python manage.py migrate`
6. Start both servers in development mode
