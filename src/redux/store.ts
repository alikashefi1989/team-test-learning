import { AnyAction, ReducersMapObject, Reducer, combineReducers, createStore } from "redux";
import { ReduxStateModel } from "./reduxState.model"
import { reducer as TokenReducer } from "./reducer/token"
import { reducer as PostsReducer } from "./reducer/posts"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";

const reducer: ReducersMapObject<ReduxStateModel, AnyAction> = {
    token: TokenReducer as Reducer<ReduxStateModel["token"], AnyAction>,
    posts: PostsReducer as Reducer<ReduxStateModel["posts"], AnyAction>,
}

const combinedReducer = combineReducers(reducer);

const config = {
    key: 'app-root',
    storage
};

const persistedCombinedReducer = persistReducer(config, combinedReducer);

export const store = createStore(persistedCombinedReducer);

export const persistedStore = persistStore(store);
