const initialState = {
  joinedList: [],
  isFetchingJoinedList: false
};

const GlobalReducers = (state, action) => {
  switch (action.type) {
    case "GET_JOINED_LIST_END":
      return Object.assign({}, initialState, {
        isFetchingJoinedList: false,
        joinedList: action.data
      });
    case "GET_JOINED_LIST_START":
      return Object.assign({}, initialState, {
        isFetchingJoinedList: true
      });
    default:
      return initialState;
  }
};

export default GlobalReducers;
