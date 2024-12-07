import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { auth } from './firebaseConfig';
import Auth from './components/Auth';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          OM Builder
        </Typography>
        
        {user ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography variant="h6">
                Welcome, {user.email}
              </Typography>
              <Button variant="outlined" onClick={handleSignOut}>
                Sign Out
              </Button>
            </Box>
          </>
        ) : (
          <Auth />
        )}
      </Box>
    </Container>
  );
}