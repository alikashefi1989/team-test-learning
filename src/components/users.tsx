import { useState } from "react";
import useFetch from "../hooks/useFetch/useFetch";

function Users() {
    const [url, setUrl] = useState('');
    const { loading, data, error } = useFetch<any>(url);
    const MyUrl = 'https://jsonplaceholder.typicode.com/users';

    return (
        <>
            <button
                data-testid="custom-element"
                onClick={() => setUrl(MyUrl)}
            >load</button>

            <button
                data-testid="fail-button"
                onClick={() => setUrl(MyUrl + "sss")}
            >fail button</button>

            {loading ? <span data-testid="loading-element">Loading...</span>
                : error
                    ? <span data-testid="error-element">Error...</span>
                    : (!!data?.length) && <div>
                        data...
                        {data.map((item: any, i: number) => {
                            return <pre key={i}>

                                {JSON.stringify(item)}
                            </pre>
                        })}
                    </div>
            }
        </>
    )
}

export default Users
