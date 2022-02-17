import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";

interface pageMode {
    create: "create";
    edit: "edit";
}

export default function SavePost() {
    const title = useRef<any>("");
    const author = useRef<any>("");
    const content = useRef<any>("");
    const navigate = useNavigate()
    const params = useParams()
    const [URL, setURL] = useState("");
    const { loading, data, error } = useFetch(URL)

    useEffect(() => {
        if (params.id) {
            setURL(`http://localhost:5004/posts/${params.id}`)
        }
        title.current?.focus();


    }, [])

    const dataToForm = (data: any) => {
        title.current.value = data.title
        author.current.value = data.author
        content.current.value = data.content

    }
    useEffect(() => {
        if (!data?.id) {
            return
        }
        dataToForm(data)

    }, [data])

    async function submitForm() {
        const data = {
            id: params.id || new Date().getTime(),
            title: title.current.value,
            author: author.current.value,
            content: content.current.value
        }

        try {
            const res = await fetch(`http://localhost:5004/posts${params.id ? `/${params.id}` : ''}`, {
                // method: 'POST',
                method: !params.id ? 'POST' : "PUT",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (params.id) {
                navigate('/post')
            } else {
                dataToForm({title:"",content:"",author:""})
            }
        } catch (error) {
        }

    }

    return (
        <>
            {loading ? <span>...loading </span> :
                <>
                    <div>
                        <div>
                            <label htmlFor="title">title</label>
                            <input type="text" name="title" id="title"
                                ref={title}
                                data-testid="title-input"
                                className="border "
                            //    value={title.current.value}

                            />
                        </div>
                        <div>
                            <label htmlFor="author">author</label>
                            <input type="text" id="author" name="author"
                                ref={author}
                                data-testid="author-input"
                                className="border "

                            />
                        </div>
                        <div>
                            <label htmlFor="content">content</label>
                            <input type="text" id="content" name="content"
                                ref={content}
                                data-testid="content-input"
                                className="border "

                            />
                        </div>

                        <div>
                            <button type="submit" onClick={submitForm}
                                data-testid="submit-button"
                            >submit</button>
                        </div>

                        <br /><br />
                    </div>
                </>
            }
        </>
    )
}