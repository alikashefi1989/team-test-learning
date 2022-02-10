import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch/useFetch";

function Users() {

    const [url, setUrl] = useState('');
    const { loading, data, error } = useFetch<any>(url);


    return (
        <>
            <div onClick={() => { }}></div>
            <button
                data-testid="custom-element"
                onClick={() => {
                    setUrl('https://jsonplaceholder.typicode.com/users')
                }}
            >
                load
            </button>
            {
                loading
                    ? 'Loading...'
                    : error
                        ? 'Error'
                        : data.map((item: any, i: number) => {
                            return <pre>
                                {JSON.stringify(item)}
                            </pre>
                        })
            }
        </>
    )
}

export default Users
