import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authslice";
import { apiv1 } from "../api/authRtk";
import { apiv2 } from "../api/quotesRtk";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiv1.reducerPath]: apiv1.reducer,
        [apiv2.reducerPath]: apiv2.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiv1.middleware)
            .concat(apiv2.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };