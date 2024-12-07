# Commercial Real Estate OM Builder

A React-based web application for creating and managing secure Offering Memorandums (OMs) for commercial real estate properties.

## Features

- **User Authentication**: Secure email/password authentication using Firebase
- **Document Security**:
  - Visible and invisible watermarks
  - Document tracking
  - Access control
  - PDF security features
- **Modern UI**: Built with Material-UI components
- **Real-time Database**: Firebase Firestore integration
- **Responsive Design**: Works on desktop and mobile devices

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tony-42069/cre-om-builder.git
cd cre-om-builder
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm start
```

## Project Structure

```
src/
├── components/
│   ├── Auth.js             # Authentication component
│   └── SecureOMDownload.js # Secure PDF generation
├── firebaseConfig.js       # Firebase configuration
└── App.js                  # Main application component
```

## Security Features

- **Watermarking**: Each PDF includes both visible and invisible watermarks
- **Tracking**: Every document download is tracked with user information
- **Access Control**: Authentication required for document access
- **PDF Security**: Copy protection and document restrictions

## Environment Variables

Create a `.env` file with the following variables:

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [Material-UI](https://mui.com/)
- Backend services by [Firebase](https://firebase.google.com/)
- PDF generation using [pdf-lib](https://pdf-lib.js.org/)