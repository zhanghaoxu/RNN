const initialState = {
  userInfo: {
    weight: 0
  }
};

const MyReducers = (state, action) => {
  switch (action.type) {
    case "CHANGE_WEIGHT":
      return Object.assign({}, initialState, {
        userInfo: {
          weight: action.weight
        }
      });
    default:
      return initialState;
  }
};

export default MyReducers;
