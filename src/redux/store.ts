import { AnyAction, ReducersMapObject, Reducer, combineReducers, createStore } from "redux";
import { ReduxStateModel } from "./reduxState.model"
import { reducer as TokenReducer } from "./reducer/token/index"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";

const reducer: ReducersMapObject<ReduxStateModel, AnyAction> = {
    token: TokenReducer as Reducer<ReduxStateModel["token"], AnyAction>,
}

const combinedReducer = combineReducers(reducer);

const config = {
    key: 'app-root',
    storage
};

const persistedCombinedReducer = persistReducer(config, combinedReducer);

export const store = createStore(persistedCombinedReducer);

export const persistedStore = persistStore(store);
