import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';

export default function App() {
  // user = null -> show Login, else show Dashboard
  const [user, setUser] = useState(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {user ? (
        <Dashboard user={user} onLogout={() => setUser(null)} />
      ) : (
        <LoginScreen onLogin={(userData) => setUser(userData)} />
      )}
    </>
  );
}
