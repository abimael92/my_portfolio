// hooks/usePortfolioData.js
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseConfig';

const useMainData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'portfolio', 'main_data');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    // Access nested 'data' field here
                    setData(docSnap.data().data || {});
                } else {
                    console.warn("No such document!");
                    setData({});
                }
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
                setData({});
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
};

export const useProjects = () => {
    const { data, loading } = useMainData();
    return { projects: data.projects || [], loading };
};

export const useTimeline = () => {
    const { data, timeloading } = useMainData();
    const sortedTimeline = (data.experience || []).sort((a, b) => b.year - a.year);
    return { timeline: sortedTimeline, timeloading };
};

export const useSkills = () => {
    const { data, loading } = useMainData();
    return { skills: data.skills || [], loading };
};

export const useEducation = () => {
    const { data, eduloading } = useMainData();
    return { education: data.education || [], eduloading };
};

export const useAchievements = () => {
    const { data, loading } = useMainData();
    return { achievements: data.achievements || [], loading };
};
