import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('us');

    const fetchNews = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                params: {
                    category,
                    country,
                    q: query,
                    apiKey: 'YOUR_API_KEY',
                },
            });
            setArticles(response.data.articles);
        } catch (err) {
            setError('Failed to fetch news');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [query, category, country]);

    return (
        <NewsContext.Provider value={{ articles, loading, error, setQuery, setCategory, setCountry }}>
            {children}
        </NewsContext.Provider>
    );
};
