import { useState } from "react";
import useFetch from "../../hooks/useFetch/useFetch";

function Users() {
    const [url, setUrl] = useState('');
    const { loading, data, error } = useFetch<any>(url);
    const MyUrl = 'https://randomuser.me/api';

    return (
        <>
            <button
                data-testid="load-button"
                onClick={() => setUrl(MyUrl)}
            >load</button>

            {loading ? <span data-testid="loading-element">Loading...</span>
                : error
                    ? <span data-testid="error-element">Error...</span>
                    : (!!data?.results?.length) && <div>
                        data...
                        {data.results.map((item: any, i: number) => {
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
