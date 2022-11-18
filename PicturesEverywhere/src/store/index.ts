import {combineReducers, configureStore} from '@reduxjs/toolkit';
import picturesState from './slices/pictures';

const rootReducer = combineReducers({
  picturesState,
});

export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
    // preloadedState,
    devTools: true,
  });

  return store;
}

const store = configureAppStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
