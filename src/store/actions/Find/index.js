import { getCommunityAllList, queryHomeList } from "src/apis/base";

export function getCommunityListStart() {
  return {
    type: "GET_COMMUNITY_LIST_START"
  };
}

export function getCommunityListEnd(data) {
  return {
    type: "GET_COMMUNITY_LIST_END",
    data
  };
}

export function getFeedListStart() {
  return {
    type: "GET_FEED_LIST_START"
  };
}

export function getFeedListEnd(data) {
  return {
    type: "GET_FEED_LIST_END",
    data
  };
}

export const getCommunityListHttp = () => {
  return function(dispatch) {
    dispatch(getCommunityListStart());

    getCommunityAllList()
      .then(data => {
        console.warn("get tabs");
        dispatch(getCommunityListEnd(data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const getFeedListHttp = () => {
  return function(dispatch) {
    dispatch(getFeedListStart());
    queryHomeList()
      .then(data => {
        dispatch(getFeedListEnd(data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
