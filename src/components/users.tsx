import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch/useFetch";

function Users() {

    const [url, setUrl] = useState('');
    const { loading, data, error } = useFetch<any>(url);
    const MyUrl = 'https://jsonplaceholder.typicode.com/users';

    return (
        <>
            <div onClick={() => { }}></div>
            <div>jhkh</div>
            <button
                data-testid="custom-element"
                onClick={() => {
                    setUrl(MyUrl)
                }}
            >
                load
            </button>
            <button
                data-testid="custom-element2"
                onClick={() => {
                    setUrl(MyUrl + "sss")
                }}
            >
                load fail
            </button>
            {
                loading
                    ? <span>Loading...</span>
                    : error
                        ? 'Error...'
                        : <div>
                            data...
                            {data.map((item: any, i: number) => {
                                return <pre>

                                    {JSON.stringify(item)}
                                </pre>
                            })}
                        </div>
            }
        </>
    )
}

export default Users
