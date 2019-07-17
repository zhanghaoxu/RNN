import { queryDakaList } from "src/apis/base";

export function getJoinedListStart() {
  return {
    type: "GET_JOINED_LIST_START"
  };
}

export const getJoinedListHttp = () => {
  return function(dispatch) {
    dispatch(getJoinedListStart());

    queryDakaList()
      .then(data => {
        console.log("get joined list");
        dispatch(getJoinedListEnd(data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export function getJoinedListEnd(data) {
  return {
    type: "GET_JOINED_LIST_END",
    data
  };
}
