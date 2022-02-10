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
        function fetchUsers() {
            fetch(url)
                .then(response => response.json())
                .then(list => { setLoader(false); setData(list) })
                .catch(e => { setLoader(false); setError(e) })
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

