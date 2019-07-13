const initialState = {
  loadingUserCount: 0
};

const GlobalReducers = (state, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return Object.assign({}, initialState, {
        loadingUserCount: state.loadingUserCount + 1
      });
    case "HIDE_LOADING":
      return Object.assign({}, initialState, {
        loadingUserCount: state.loadingUserCount - 1
      });
    default:
      return initialState;
  }
};

export default GlobalReducers;
