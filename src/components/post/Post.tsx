import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import useFetch from "../../hooks/useFetch/useFetch";
import { Post as IPost } from "../../models/post.model";
import { ReduxStateModel } from "../../redux/reduxState.model"

export default function Post() {
    const posts = useSelector<ReduxStateModel, ReduxStateModel['posts']>((s: ReduxStateModel) => s.posts);
    const { loading, data, error } = useFetch<IPost>('http://localhost:5004/posts');
    
    const [Url, setUrl] = useState('')

    const dispatch = useDispatch()

    const deletePost =async(id:number)=>{
        await fetch(`http://localhost:5004/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        //update redux dispatch remove id 

    }
    useEffect(()=>{
        if(data.length){
            // update redux global state set All  
        }
    },[data])

    return <div className="p-10 flex justify-center">
        <table className="border-separate border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300">Id</th>
                    <th className="border border-slate-300">Author</th>
                    <th className="border border-slate-300">Title</th>
                    <th className="border border-slate-300">Content</th>
                    <th className="border border-slate-300">action</th>
                </tr>
            </thead>
            <tbody>
                {(data || []).map((post: IPost) => <tr key={post.id}>
                    <td className="border border-slate-300">{post.id}</td>
                    <td className="border border-slate-300">{post.author}</td>
                    <td className="border border-slate-300">{post.title}</td>
                    <td className="border border-slate-300"><button onClick={()=>deletePost(post.id)} className="text-red-500">Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
}
