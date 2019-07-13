const initialState = {
  userInfo: {
    name: "",
    age: 0
  }
};

const HomeReducers = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return Object.assign({}, initialState, {
        userInfo: {
          name: action.name
        }
      });
    case "CHANGE_AGE":
      return Object.assign({}, initialState, {
        userInfo: {
          age: action.age
        }
      });
    default:
      return initialState;
  }
};

export default HomeReducers;
