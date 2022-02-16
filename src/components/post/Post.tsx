import { useEffect } from "react";
import { useSelector } from "react-redux"
import useFetch from "../../hooks/useFetch/useFetch";
import { Post as IPost } from "../../models/post.model";
import { ReduxStateModel } from "../../redux/reduxState.model"

export default function Post() {
    const posts = useSelector<ReduxStateModel, ReduxStateModel['posts']>((s: ReduxStateModel) => s.posts);
    const { loading, data, error } = useFetch<IPost>('http://localhost:5004/posts');

    return <div className="p-10 flex justify-center">
        <table className="border-separate border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300">Id</th>
                    <th className="border border-slate-300">Author</th>
                    <th className="border border-slate-300">Title</th>
                    <th className="border border-slate-300">Content</th>
                </tr>
            </thead>
            <tbody>
                {(data || []).map((post: IPost) => <tr key={post.id}>
                    <td className="border border-slate-300">{post.id}</td>
                    <td className="border border-slate-300">{post.author}</td>
                    <td className="border border-slate-300">{post.title}</td>
                    <td className="border border-slate-300">{post.content}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
}
