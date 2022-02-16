import { Post } from "../models/post.model";

export interface ReduxStateModel {
    token: string | null;
    posts: Array<Post>;
}