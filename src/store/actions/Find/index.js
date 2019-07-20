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

export function getCommunityListError() {
  return {
    type: "GET_COMMUNITY_LIST_ERROR"
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

export function getFeedListError() {
  return {
    type: "GET_FEED_LIST_ERROR"
  };
}

export const getCommunityListHttp = () => {
  return function(dispatch) {
    dispatch(getCommunityListStart());

    getCommunityAllList()
      .then(data => {
        dispatch(getCommunityListEnd(data));
      })
      .catch(e => {
        dispatch(getCommunityListError());
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
        dispatch(getFeedListError());
        console.log(e);
      });
  };
};
