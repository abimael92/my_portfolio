import { useState } from 'react';

import {
    Backdrop,
    Modal,
    Label,
    Input,
    Textarea,
    Button,
    CloseButton,
} from './AccessRequestModalStyles';

import {

    ModalTitle,
} from '../../styles/GlobalComponents';

export default function AccessRequestModal({ onClose }) {
    const [linkedIn, setLinkedIn] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [inputFocusStates, setInputFocusStates] = useState({ linkedIn: false, email: false, reason: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');

        const res = await fetch('/api/request-access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: linkedIn, email, message: reason }),
        });

        const data = await res.json();
        setSubmitting(false);

        if (data.success) {
            setMessage("✅ Request sent! You'll receive an access code via email.");
            setLinkedIn('');
            setEmail('');
            setReason('');
        } else {
            setMessage("❌ Error sending request. Please try again.");
        }
    };

    const handleFocus = (field) => {
        setInputFocusStates(prev => ({ ...prev, [field]: true }));
    };
    const handleBlur = (field) => {
        setInputFocusStates(prev => ({ ...prev, [field]: false }));
    };

    return (
        <>
            <Backdrop onClick={onClose} aria-label="Close modal backdrop" tabIndex={-1} />
            <Modal
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <ModalTitle>Request Access</ModalTitle>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                    <Input
                        id="linkedin"
                        type="url"
                        value={linkedIn}
                        onChange={e => setLinkedIn(e.target.value)}
                        required
                        placeholder="https://linkedin.com/in/yourprofile"
                        $focused={inputFocusStates.linkedIn}
                        onFocus={() => handleFocus('linkedIn')}
                        onBlur={() => handleBlur('linkedIn')}
                    />

                    <Label htmlFor="email">Work Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="you@company.com"
                        $focused={inputFocusStates.email}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                    />

                    <Label htmlFor="reason">Reason for Inquiry</Label>
                    <Textarea
                        id="reason"
                        value={reason}
                        onChange={e => setReason(e.target.value)}
                        required
                        rows={3}
                        placeholder="Why do you need access?"
                        $focused={inputFocusStates.reason}
                        onFocus={() => handleFocus('reason')}
                        onBlur={() => handleBlur('reason')}
                    />

                    <Button type="submit" disabled={submitting}>
                        {submitting ? 'Sending...' : 'Submit'}
                    </Button>

                    {message && (
                        <p
                            role="alert"
                            style={{
                                marginTop: '1rem',
                                color: message.startsWith('✅') ? '#4caf50' : '#e53935',
                                fontWeight: '600',
                                userSelect: 'none',
                            }}
                        >
                            {message}
                        </p>
                    )}
                </form>
                <CloseButton
                    onClick={onClose}
                    aria-label="Close modal"
                    onKeyDown={e => e.key === 'Enter' && onClose()}
                >
                    x
                </CloseButton>
            </Modal>
        </>
    );
}
