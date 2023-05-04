import { configureStore } from "@reduxjs/toolkit";
import filmReducer from './reducers/filmSlice';
import authReducer from "./reducers/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: {
            film: filmReducer,
            auth: authReducer,
        },
        middleware: [sagaMiddleware],
    }
);


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export default store;