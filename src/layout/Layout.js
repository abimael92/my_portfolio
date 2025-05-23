import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const allowed = localStorage.getItem('access_granted');
    setAuthenticated(Boolean(allowed));
  }, []);

  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer authenticated={authenticated} />
    </Container>
  );
};
