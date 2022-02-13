import React, { useEffect, useState } from "react";

interface IResponse<T> {
    loading: boolean;
    data:any| Array<T>;
    error: any;
}

function useFetch<T>(url: string): IResponse<T> {

    const [loader, setLoader] = useState<boolean>(false);
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();

    useEffect(() => {
        if (url === '') return;
        setLoader(true);
        setData([]);
        setError(undefined);

        async function fetchUsers() {
            try {
                const res = await fetch(url);
                const data = await res.json();

                setLoader(false);
                setData(data);
            } catch (error) {
                setLoader(false);
                setError(error);
            }
        }
        fetchUsers();
    }, [url]);

    return {
        loading: loader,
        data: data,
        error: error
    }
}

export default useFetch

