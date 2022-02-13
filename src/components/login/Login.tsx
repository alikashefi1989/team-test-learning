import { useEffect, useRef } from "react"

export default function Login() {
    const username = useRef<any>(null);
    const password = useRef<any>(null);

    useEffect(() => {
        username.current.focus();
    }, []);

    async function submitForm() {
        const data = {
            id: new Date().getTime(),
            username: username.current.value,
            password: password.current.value
        }
        console.log(data);

        try {
            const res = await fetch('http://localhost:5004/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log('resss', res);
        } catch (error) {
            console.log('erorrrr', error);
        }

    }

    return <div>
        <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username"
                ref={username}
            />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="text" id="password" name="password"
                ref={password}
            />
        </div>

        <div>
            <button type="submit" onClick={submitForm}>submit</button>
        </div>
    </div>
}
