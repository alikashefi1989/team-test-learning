import { Post } from "../../../models/post.model";
import { REDUX_ACTIONS } from "../../reduxActionEnum.enum";
import { AddPostAction, ClearPostsAction, RemovePostAction } from "./postsAction";

export function addPost(post: Post): AddPostAction {
    return {
        type: REDUX_ACTIONS.ADD_POST,
        payload: post,
    }
}

export function removePost(post: Post): RemovePostAction {
    return {
        type: REDUX_ACTIONS.REMOVE_POST,
        payload: post,
    }
}

export function clearPosts(): ClearPostsAction {
    return {
        type: REDUX_ACTIONS.CLEAR_POSTS,
    }
}