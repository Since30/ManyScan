import { useState, useEffect } from "react";

export default function useFetch<T>(url: string, options?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url, options);
          
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const jsonData = await response.json();
                setData(jsonData.data);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                }
                setLoading(false);
            }
        }
        fetchData();
    }, [url, options]);

    return { data, error, loading };
}