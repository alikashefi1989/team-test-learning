import { Action } from "redux";
import { Post } from "../../../models/post.model";
import { REDUX_ACTIONS } from "../../reduxActionEnum.enum"

export interface AddPostAction extends Action<REDUX_ACTIONS> {
    payload: Post;
}

export interface RemovePostAction extends Action<REDUX_ACTIONS> {
    payload: Post;
}

export interface ClearPostsAction extends Action<REDUX_ACTIONS> { }

export type PostActions = AddPostAction | RemovePostAction | ClearPostsAction;