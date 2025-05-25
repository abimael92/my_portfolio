import { AuthProvider } from '../context/AuthContext';
import Theme from '../styles/theme';


export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </AuthProvider>
  );
}
