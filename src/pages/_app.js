import { useState, useEffect } from 'react';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const allowed = localStorage.getItem('access_granted');
    setAccessGranted(Boolean(allowed));
  }, []);

  return (
    <Theme>
      <Component {...pageProps} accessGranted={accessGranted} />
    </Theme>
  );
}
