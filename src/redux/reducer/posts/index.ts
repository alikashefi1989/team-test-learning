import { AddPostAction, PostActions, RemovePostAction } from "../../actions/posts/postsAction";
import { REDUX_ACTIONS } from "../../reduxActionEnum.enum";
import { ReduxStateModel } from "../../reduxState.model";

export function reducer(
    prevState: ReduxStateModel["posts"],
    action: PostActions
): ReduxStateModel["posts"] {
    switch (action.type) {
        case REDUX_ACTIONS.ADD_POST:
            return [...prevState, (action as AddPostAction).payload]
        case REDUX_ACTIONS.CLEAR_POSTS:
            return []
        case REDUX_ACTIONS.REMOVE_POST:
            return [...prevState.filter(p => p.id !== (action as RemovePostAction).payload.id)]
        default:
            return prevState || [];
    }
}