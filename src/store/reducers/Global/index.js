const initialState = {
  joinedList: [],
  isFetchingJoinedList: false
};

const GlobalReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOINED_LIST_END":
      return Object.assign({}, state, {
        isFetchingJoinedList: false,
        joinedList: action.data
      });
    case "GET_JOINED_LIST_START":
      return Object.assign({}, state, {
        isFetchingJoinedList: true
      });
    default:
      return state;
  }
};

export default GlobalReducers;
