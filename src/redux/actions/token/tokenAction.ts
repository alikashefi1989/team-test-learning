import { Action } from "redux";
import { REDUX_ACTIONS } from "../../reduxActionEnum.enum"


export interface TokenAction extends Action<REDUX_ACTIONS> {
    payload: string | null
}