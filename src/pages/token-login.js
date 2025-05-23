import { useState } from 'react';
import { validateToken } from '../auth/tokenUtils';
import { useRouter } from 'next/router';

export default function TokenLoginPage() {
    const [token, setToken] = useState('');
    const router = useRouter();

    const handleTokenSubmit = async () => {
        const valid = await validateToken(token);
        if (valid) {
            localStorage.setItem('access_granted', 'true');
            router.push('/');
        } else {
            alert('Token expired or invalid');
        }
    };

    return (
        <>
            <input placeholder="Enter Access Token" onChange={(e) => setToken(e.target.value)} />
            <button onClick={handleTokenSubmit}>Submit</button>
        </>
    );
}
