const initialState = {
  userInfo: {
    weight: 0
  }
};

const MyReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_WEIGHT":
      return Object.assign({}, state, {
        userInfo: {
          weight: action.weight
        }
      });
    default:
      return state;
  }
};

export default MyReducers;
