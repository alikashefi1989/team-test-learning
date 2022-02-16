import { REDUX_ACTIONS } from "../../reduxActionEnum.enum";
import { TokenAction } from "./tokenAction";

export function setToken(token: string): TokenAction {
    return {
        type: REDUX_ACTIONS.SET_TOKEN,
        payload: token,
    }
}

export function emptyToken(): TokenAction {
    return {
        type: REDUX_ACTIONS.SET_TOKEN,
        payload: null,
    }
}