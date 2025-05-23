import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebaseConfig';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
            alert("Access granted.");
        } catch {
            alert("Invalid credentials.");
        }
    };

    return (
        <>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPass(e.target.value)} />
            <button onClick={login}>Login</button>
        </>
    );
}
