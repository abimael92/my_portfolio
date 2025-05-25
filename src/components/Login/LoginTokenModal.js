import { useState } from 'react';

import {
    Backdrop,
    Modal,
    Label,
    Input,
    Textarea,
    Button,
    CloseButton,
} from './LoginTokenModalStyles';

import {

    ModalTitle,
} from '../../styles/GlobalComponents';

export default function LoginTokenModal({ onClose }) {
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);
    const [submitting, setSubmitting] = useState(false);


    const handleTokenSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        const res = await fetch('/api/validate-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });

        const data = await res.json();
        setSubmitting(false);

        if (data.success) {
            localStorage.setItem('accessToken', token); // Save token for next load
            setValidated(true);
            onClose(); // Close modal
        } else {
            setError(data.message || 'Invalid token');
        }
    };

    return (
        <Backdrop>
            <Modal>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ModalTitle>Enter Access Token</ModalTitle>
                <form onSubmit={handleTokenSubmit}>
                    <Label htmlFor="token">Enter Access Token</Label>
                    <Input
                        id="token"
                        value={token}
                        onChange={e => setToken(e.target.value)}
                        required
                        placeholder="Enter token you received"
                    />
                    <Button type="submit" disabled={submitting}>
                        {submitting ? 'Validating...' : 'Access'}
                    </Button>
                    {error && <p role="alert" style={{ color: '#e53935', marginTop: '1rem' }}>{error}</p>}
                </form>
            </Modal>
        </Backdrop>
    );

}
