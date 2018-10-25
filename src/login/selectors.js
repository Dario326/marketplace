export const getUserData = (state) => {
    return state.LOGIN.userData;
};
export const getSettingsData = (state) => {
    return state.LOGIN.settingsData;
};

export const getAuthenticated = (state) => {
    return state.LOGIN.isAuthentcated;
};