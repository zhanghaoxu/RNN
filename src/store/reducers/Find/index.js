const initialState = {
  communityList: [],
  isFetchingCommunityList: false,
  feedList: {
    end: true,
    feeds: []
  },
  isFetchingFeedList: false
};

const FindReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMUNITY_LIST_END":
      return Object.assign({}, state, {
        isFetchingCommunityList: false,
        communityList: action.data
      });
    case "GET_COMMUNITY_LIST_START":
      return Object.assign({}, state, {
        isFetchingCommunityList: true
      });
    case "GET_FEED_LIST_END":
      return Object.assign({}, state, {
        isFetchingFeedList: false,
        feedList: action.data
      });
    case "GET_FEED_LIST_START":
      return Object.assign({}, state, {
        isFetchingFeedList: true
      });
    default:
      return state;
  }
};

export default FindReducers;
