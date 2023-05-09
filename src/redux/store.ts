import { configureStore } from "@reduxjs/toolkit";
import filmReducer from './reducers/filmSlice';
import authReducer from "./reducers/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import themeReducer from "./reducers/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: {
            theme: themeReducer,
            film: filmReducer,
            auth: authReducer,
        },
        middleware: [sagaMiddleware],
    }
);


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export default store;