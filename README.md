# 🏫 USTP-CDO Centralized Information & Communication Platform

> **Group 7 Project** - A comprehensive platform designed for USTP-CDO students to connect, share information, and stay updated with campus life.

![Platform Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [System Functions](#-system-functions)
- [Contributing](#-contributing)
- [Support](#-support)

---

## 🎯 Overview

The USTP-CDO Centralized Information & Communication Platform serves as a one-stop hub for students to:

- **Connect** with fellow students through a robust friend system
- **Share** important information and updates
- **Stay informed** about campus events and activities
- **Report and recover** lost items efficiently

This platform centralizes campus communication by providing dedicated sections tailored to specific student needs.

---

## ✨ Features

### 🔐 **Secure Account Management**
- Login system for existing students
- Registration process for new users
- Account verification and security

### 🏠 **Organized Content Sections**
- **Lost and Found Page** - Report missing items or help others recover theirs
- **Event Page** - Stay updated with official school events
- **Academic Page** - Share academic resources, discussions, and updates

### 💬 **Interactive Communication**
- Post updates and information
- Comment on posts from other students
- Reply to comments for detailed discussions
- Real-time interaction capabilities

### 🎉 **Controlled Event Management**
- Restricted posting rights for Event Page
- Only verified Organization Heads can post events
- Admin verification system to prevent misinformation
- Maintains accountability and authenticity

### 👥 **Social Networking**
- Send and receive friend requests
- Accept or reject connection requests
- Build your student network

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A modern web browser

### Quick Start

1. **Clone the repository**
2. **Install dependencies**
3. **Run the development server**
4. **Access the platform**

That's it! Follow the detailed installation steps below.

---

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/ustp-cdo-platform.git
cd ustp-cdo-platform
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Setup (if applicable)

```bash
# Copy environment variables template
cp .env.example .env

# Edit the .env file with your configuration
```

### Step 4: Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or as shown in your terminal).

### Step 5: Build for Production

```bash
npm run build
```

---

## 📖 Usage Guide

### For Students

1. **Registration/Login**
   - New students: Create an account using your student credentials
   - Existing users: Login with your username and password

2. **Navigation**
   - After login, you'll be directed to the Homepage
   - Use the navigation menu to access different sections

3. **Posting Content**
   - **Academic Page**: Share study materials, ask questions, post updates
   - **Lost and Found**: Report lost items or claim found items
   - **Event Page**: View events (posting restricted)

4. **Social Features**
   - Send friend requests to connect with classmates
   - Comment and reply to engage in discussions

### For Organization Heads

1. **Event Posting**
   - Request verification from admin for posting rights
   - Once verified, you can post official events on the Event Page

---

## ⚙️ System Functions

### 🔑 Account Access
```
├── Login System
│   ├── Existing student authentication
│   └── Session management
└── Registration Process
    ├── New student signup
    └── Account verification
```

### 🏠 Platform Sections
```
Homepage
├── Lost and Found Page
│   ├── Report lost items
│   └── Claim found items
├── Event Page
│   ├── View official events
│   └── Restricted posting (Organization Heads only)
└── Academic Page
    ├── Academic discussions
    ├── Resource sharing
    └── Student updates
```

### 💬 Interaction Features
```
User Interactions
├── Post Creation
├── Comment System
├── Reply Functionality
└── Friend System
    ├── Send requests
    ├── Accept/Reject requests
    └── Manage connections
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run code linting |
| `npm test` | Run test suite |

---

## 👨‍💻 Contributing

We welcome contributions from the USTP-CDO community! Here's how you can help:

### For Group 7 Members
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow JavaScript ES6+ conventions
- Use meaningful variable and function names
- Comment your code where necessary
- Test your changes before submitting

---

## 📞 Support

### Getting Help

- **Technical Issues**: Create an issue in the GitHub repository
- **Feature Requests**: Submit via GitHub Issues with the "enhancement" label
- **General Questions**: Contact Group 7 members

### Contact Information

**Group 7 - USTP-CDO**
- 📧 Email: Coming soon! Please check back later for contact information
- 🌐 University: University of Science and Technology of Southern Philippines - Cagayan de Oro

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- USTP-CDO Administration for supporting student innovation
- All beta testers who provided valuable feedback
- The USTP-CDO student community for their input and suggestions

---

## 📊 Project Status

- ✅ Core functionality implemented
- ✅ User authentication system
- ✅ Basic CRUD operations
- 🚧 Advanced features in development
- 📋 Testing and optimization ongoing

---

<div align="center">

**Made with ❤️ by Group 7 for the USTP-CDO Community**

[🔗 Live Demo](https://your-demo-link.com) | [📖 Documentation](https://your-docs-link.com) | [🐛 Report Bug](https://github.com/your-username/ustp-cdo-platform/issues)

</div>