import { useState } from 'react';

const modalStyles = {
    position: 'fixed',
    top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#111',
    padding: '2rem',
    borderRadius: '8px',
    zIndex: 100000,
    color: 'white',
    width: '320px',
    boxShadow: '0 0 15px rgba(0,0,0,0.8)'
};

const backdropStyles = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 99999
};

function AccessRequestModal({ onClose }) {
    const [linkedIn, setLinkedIn] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');

        const res = await fetch("/api/request-access", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: linkedIn,         // si quieres usar LinkedIn como nombre
                email,
                message: reason,
            }),
        });

        const data = await res.json();
        setSubmitting(false);

        if (data.success) {
            setMessage("Request sent! You'll receive an access code via email.");
        } else {
            setMessage("Error sending request.");
        }
    };

    return (
        <>
            <div style={backdropStyles} onClick={onClose} />
            <div style={modalStyles}>
                <h2>Request Access</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        LinkedIn Profile URL
                        <input
                            type="url"
                            value={linkedIn}
                            onChange={(e) => setLinkedIn(e.target.value)}
                            required
                            style={{ width: '100%', marginBottom: '1rem' }}
                            placeholder="https://linkedin.com/in/yourprofile"
                        />
                    </label>
                    <label>
                        Work Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', marginBottom: '1rem' }}
                            placeholder="you@company.com"
                        />
                    </label>
                    <label>
                        Reason for Inquiry
                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                            rows={3}
                            style={{ width: '100%', marginBottom: '1rem' }}
                            placeholder="Why do you need access?"
                        />
                    </label>
                    <button type="submit" disabled={submitting} style={{ width: '100%', padding: '0.5rem' }}>
                        {submitting ? 'Sending...' : 'Submit'}
                    </button>
                    {message && <p style={{ marginTop: '1rem', color: 'lightgreen' }}>{message}</p>}
                </form>
                <button onClick={onClose} style={{ marginTop: '1rem', color: '#aaa', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Close
                </button>
            </div>
        </>
    );
}

export default AccessRequestModal;
