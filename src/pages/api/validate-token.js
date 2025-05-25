import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, cert } from 'firebase-admin/app';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY); // Store this as env var

if (!getFirestore.apps?.length) {
    initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { token } = req.body;
    if (!token) return res.status(400).json({ success: false, message: 'Missing token' });

    const snapshot = await db.collection('accessRequests').where('code', '==', token).limit(1).get();

    if (snapshot.empty) return res.status(401).json({ success: false, message: 'Invalid token' });

    const doc = snapshot.docs[0];
    const expiresAt = doc.data().expiresAt?.toDate?.() || new Date(doc.data().expiresAt);

    if (new Date() > expiresAt) {
        return res.status(403).json({ success: false, message: 'Token expired' });
    }

    res.status(200).json({ success: true });
}
