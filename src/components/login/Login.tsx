import { useEffect, useRef, useState } from "react"

export default function Login() {
    const username = useRef<any>(null);
    const password = useRef<any>(null);
    const [loginData, setLoginData] = useState<any>(null);

    useEffect(() => {
        username.current?.focus();
    }, []);

    async function submitForm() {
        const data = {
            id: new Date().getTime(),
            username: username.current.value,
            password: password.current.value
        }

        try {
            const res = await fetch('http://localhost:5004/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setLoginData(await res.json());
        } catch (error) {
        }

    }

    return <div>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username"
                ref={username}
                data-testid="username-input"
            />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="text" id="password" name="password"
                ref={password}
                data-testid="password-input"
            />
        </div>

        <div>
            <button type="submit" onClick={submitForm}
                data-testid="submit-button"
            >submit</button>
        </div>

        <br /><br />
        {loginData && <pre data-testid="data-response">{JSON.stringify(loginData)}</pre>}
    </div>
}
