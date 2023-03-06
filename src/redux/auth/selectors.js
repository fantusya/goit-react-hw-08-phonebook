export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectNeedToVerify = state => state.auth.needToVerify;

export const selectError = state => state.auth.error;
