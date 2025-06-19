How to install this project Steps:
-> Download My zip file or clone this using this command git clone : https://github.com/HarshaV45developer/Fama-Barber-Shop-Landing.git
-> After open the VS Code in this folder
-> Open terminal use this command's 
-> npm install 
-> npm run dev
-> after run this command there displays a some website URLS Open in brower
-> Local:   http://localhost:8080/


# ChatBot AI - Intelligent Conversation Platform

A modern, responsive web application built with React, TypeScript, and Tailwind CSS that provides an intelligent chatbot interface with advanced features like voice input, chat export, and real-time messaging.

## 🚀 Features

### Core Features
- **Real-time Chat Interface**: Seamless messaging experience with instant responses
- **User Authentication**: Secure JWT-based login and registration system
- **Voice Input**: Speech recognition for hands-free interaction
- **Chat Export**: Export conversations as text or HTML files
- **Message History**: Navigate through previous messages using arrow keys
- **Quick Prompts**: Pre-built conversation starters for easy interaction
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Design**: Mobile-first design that works on all devices

### Advanced Features
- **Protected Routes**: Secure access to chat functionality
- **Context Management**: Efficient state management for auth and chat
- **Toast Notifications**: User-friendly feedback system
- **Loading States**: Visual indicators for better UX
- **Error Handling**: Graceful error management throughout the app

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn/UI component library
- **Routing**: React Router DOM for navigation
- **State Management**: React Context API
- **Icons**: Lucide React for consistent iconography
- **Data Fetching**: TanStack Query for server state management
- **Notifications**: Sonner and custom toast system

## 📁 Project Structure

### Core Application Files

```
src/
├── App.tsx                 # Main application component with routing
├── main.tsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
└── types/
    └── index.ts           # TypeScript type definitions
```

### Pages
```
src/pages/
├── Index.tsx              # Landing page with features showcase
├── Login.tsx              # User authentication login form
├── Register.tsx           # User registration form
├── Chat.tsx               # Main chat interface
└── NotFound.tsx           # 404 error page
```

### Components

#### Core Components
```
src/components/
├── ChatInput.tsx          # Message input with voice recognition
├── ChatMessage.tsx        # Individual message display component
├── PromptTemplates.tsx    # Quick prompt buttons
├── ProtectedRoute.tsx     # Route protection wrapper
└── ThemeToggle.tsx        # Dark/light theme switcher
```

#### UI Components (Shadcn/UI)
```
src/components/ui/
├── button.tsx             # Customizable button component
├── textarea.tsx           # Enhanced textarea input
├── input.tsx              # Form input component
├── card.tsx               # Container card component
├── label.tsx              # Form label component
├── toast.tsx              # Toast notification system
├── toaster.tsx            # Toast container
├── sonner.tsx             # Alternative toast system
└── [other UI components]  # Additional Shadcn components
```

### Context Providers
```
src/contexts/
├── AuthContext.tsx        # Authentication state management
├── ChatContext.tsx        # Chat state and message handling
└── ThemeContext.tsx       # Theme preference management
```

### Utilities and Hooks
```
src/lib/
└── utils.ts               # Utility functions (cn, etc.)

src/hooks/
└── use-toast.ts           # Toast notification hook
```

## 🔧 Detailed Component Explanations

### Authentication System

#### AuthContext.tsx
- Manages user authentication state
- Handles login/logout functionality
- Stores JWT tokens securely
- Provides authentication status across the app

#### Login.tsx & Register.tsx
- Form validation with real-time error feedback
- Secure credential handling
- Responsive design with theme support
- Integration with AuthContext for state management

### Chat System

#### ChatContext.tsx
- Manages chat messages and state
- Handles message history navigation
- Provides loading states for better UX
- Implements message sending functionality

#### Chat.tsx
- Main chat interface with header, messages, and input
- Real-time message display with timestamps
- Chat export functionality
- Clear chat option with confirmation

#### ChatInput.tsx
- **Message Input**: Multi-line textarea with auto-resize
- **Voice Recognition**: Browser-based speech-to-text
- **History Navigation**: Arrow key navigation through previous messages
- **Send Functionality**: Enter to send, Shift+Enter for new line
- **Loading States**: Disabled during message processing

#### ChatMessage.tsx
- **Message Rendering**: User vs bot message styling
- **Timestamps**: Formatted time display
- **Responsive Design**: Adapts to different screen sizes
- **Animation**: Smooth fade-in effects

### UI Enhancement Components

#### PromptTemplates.tsx
- Pre-defined conversation starters
- Quick action buttons for common queries
- Disabled state during loading
- Easy expansion for new prompts

#### ThemeToggle.tsx
- Smooth transition between light/dark themes
- System preference detection
- Animated icon transitions
- Consistent styling across themes

### Routing and Protection

#### ProtectedRoute.tsx
- Wrapper component for authenticated routes
- Automatic redirect to login for unauthenticated users
- Seamless integration with AuthContext

#### App.tsx
- Central routing configuration
- Provider wrapper hierarchy
- Global component integration (Toaster, QueryClient)

## 🎨 Styling and Design

### Tailwind CSS Configuration
- Custom color scheme for dark/light themes
- Responsive breakpoints for mobile-first design
- Custom animations and transitions
- Component-specific utility classes

### Animation System
- Fade-in effects for new messages
- Loading spinners and pulse animations
- Smooth theme transitions
- Hover effects and interactive feedback

### Responsive Design
- Mobile-optimized chat interface
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactive elements

## 🔒 Security Features

### Authentication
- JWT token-based authentication
- Secure credential validation
- Protected route implementation
- Automatic session management

### Data Protection
- Client-side form validation
- Secure API communication patterns
- XSS prevention through proper escaping
- CSRF protection considerations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Required Packages
The project uses these key dependencies:
- `react` & `react-dom`: Core React framework
- `typescript`: Type safety and better development experience
- `vite`: Fast build tool and development server
- `tailwindcss`: Utility-first CSS framework
- `@radix-ui/*`: Accessible UI primitives for Shadcn
- `react-router-dom`: Client-side routing
- `@tanstack/react-query`: Server state management
- `lucide-react`: Beautiful icons
- `sonner`: Toast notifications

## 🔧 Configuration Files

### Core Configuration
- `vite.config.ts`: Vite build configuration
- `tailwind.config.ts`: Tailwind CSS customization
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Dependencies and scripts

### Component Configuration
- `components.json`: Shadcn/UI component configuration
- `postcss.config.js`: PostCSS processing setup

## 🌟 Key Features Breakdown

### Voice Input System
- Browser speech recognition API integration
- Real-time transcription display
- Visual feedback during recording
- Fallback for unsupported browsers

### Message Export System
- Text format export for easy sharing
- HTML format with styling preservation
- Timestamp inclusion for reference
- Download functionality

### Theme System
- System preference detection
- Manual theme switching
- Persistent theme storage
- Smooth transition animations

### State Management
- Context-based state management
- Efficient re-rendering optimization
- Type-safe state updates
- Centralized error handling

## 🔮 Future Enhancement Possibilities

- Real-time typing indicators
- Message reactions and emoji support
- File upload and sharing
- Chat room creation and management
- Advanced AI model integration
- Mobile app development
- Push notifications
- Multi-language support

## 📱 Browser Compatibility

- Chrome/Chromium browsers (full feature support)
- Firefox (limited voice input support)
- Safari (basic functionality)
- Edge (full feature support)
- Mobile browsers (responsive design)

## 🤝 Contributing

This project follows modern React development practices:
- Component composition over inheritance
- Custom hooks for reusable logic
- TypeScript for type safety
- Responsive design principles
- Accessibility best practices

## 📄 License

This project is built with modern web technologies and follows industry best practices for scalable React applications.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**




ZeroCode ChatBot Web App Architecture:

![image](https://github.com/user-attachments/assets/20ea2242-91ed-4782-9bce-8878d51933e0)






Before page:

![image](https://github.com/user-attachments/assets/2a1fa037-f4b8-46ad-b8a0-1b66e3f0548d)



Register Page:

![image](https://github.com/user-attachments/assets/e265a7bb-7d2b-44ac-9139-4753fcf429e9)

Login Page: 

![image](https://github.com/user-attachments/assets/54f2963a-1929-4ba3-ab1a-fafa2a428aa9)


Chat AI Page:

![image](https://github.com/user-attachments/assets/22187747-702f-40b7-8657-4c0f74ea8845)


live Link :
https://chithirala-harsha-vardhan-zerocode.vercel.app/
