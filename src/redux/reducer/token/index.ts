import { TokenAction } from "../../actions/token/tokenAction";
import { ReduxStateModel } from "../../reduxState.model"
import { REDUX_ACTIONS } from "../../reduxActionEnum.enum";
export function reducer(
    preState: ReduxStateModel["token"],
    action: TokenAction
): ReduxStateModel["token"] {
    switch (action.type) {
        case REDUX_ACTIONS.SET_TOKEN:
            return action.payload;
        case REDUX_ACTIONS.EMPTY_TOKEN:
            return action.payload;
        default:
            return null;
    }
    return preState ? preState : null
}