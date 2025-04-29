# React Dashboard CRUD App

A modern React-based dashboard application with CRUD operations and static authentication. This template provides a solid foundation for building React dashboard applications with user management capabilities.

## Features

- 🔐 Static Authentication System
- 📊 Dashboard Interface
- 👥 Customer Management (CRUD Operations)
- 📝 Form validation using Zod
- 🎨 Modern UI with ShadCN components
- 💾 Local storage for data persistence
- 📱 Responsive design
- 🔍 Search and Filter functionality
- 📊 Data visualization capabilities
- 🔄 Real-time updates

## Tech Stack

- ⚛️ React 18+
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🎭 ShadCN UI Components
- 📝 React Hook Form
- ✅ Zod (Schema Validation)
- 💾 Local Storage API
- 🔄 React Router v6
- 📊 Chart.js (for data visualization)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
  ├── components/
  │   ├── auth/
  │   │   ├── login-form.tsx
  │   │   └── register-form.tsx
  │   ├── dashboard/
  │   │   ├── sidebar.tsx
  │   │   ├── header.tsx
  │   │   └── main-content.tsx
  │   ├── customers/
  │   │   ├── customer-form.tsx
  │   │   ├── customer-list.tsx
  │   │   └── customer-details.tsx
  │   └── ui/
  │       ├── button.tsx
  │       ├── input.tsx
  │       ├── textarea.tsx
  │       ├── select.tsx
  │       ├── radio-group.tsx
  │       ├── checkbox.tsx
  │       ├── switch.tsx
  │       ├── label.tsx
  │       └── table.tsx
  ├── routes/
  │   ├── auth/
  │   │   ├── login.tsx
  │   │   └── register.tsx
  │   └── dashboard/
  │       └── customers/
  │           ├── index.tsx
  │           ├── create.tsx
  │           └── [id].tsx
  ├── styles/
  │   └── globals.css
  ├── types/
  │   └── customer.ts
  ├── utils/
  │   ├── storage.ts
  │   ├── auth.ts
  │   └── validation.ts
  └── hooks/
      ├── use-auth.ts
      └── use-customers.ts
```

## Authentication

The application includes a static authentication system with the following features:

- Login/Register functionality
- Protected routes
- Session management
- Role-based access control (if needed)

## Customer Management

The customer management system includes:

- Create new customer records
- View customer details
- Update customer information
- Delete customer records
- Search and filter customers
- Export customer data

## Form Fields

- Name (text, required, min 3 chars)
- Email (email, required)
- Password (password, required, min 6 chars)
- Age (number, required, min 18)
- Gender (select: Male, Female, Other)
- Contact Preference (radio: Email, Phone, SMS)
- Hobbies (checkbox: Reading, Sports, Gaming, Traveling)
- Bio (textarea, optional, max 200 chars)
- Date of Birth (date, required)
- Profile Picture (file upload)
- Newsletter Subscription (toggle)

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run lint` - Run linter
- `npm run format` - Format code

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_AUTH_TOKEN_KEY=auth_token
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React and TypeScript
