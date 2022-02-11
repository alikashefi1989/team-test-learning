import React, { useEffect, useState } from "react";

interface IResponse<T> {
    loading: boolean;
    data: Array<T>;
    error: any;
}

function useFetch<T>(url: string): IResponse<T> {

    const [loader, setLoader] = useState<boolean>(false);
    const [data, setData] = useState<Array<T>>([]);
    const [error, setError] = useState<any>();

    useEffect(() => {
        if (url === '') return;
        setLoader(true);
        setData([]);
        setError(undefined);

        async function fetchUsers() {
            console.log('fetch callled')
            try {
                const res = await fetch(url);
                if (res.status !== 200) throw new Error(res.status + '');
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

