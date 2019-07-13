import React from "react";
import Request from "./request";

let PowerRequest = function(options) {
  return Request(options, {
    $toast: React.Component.prototype.$toast,
    $loading: React.Component.prototype.$loading
  });
};

PowerRequest.post = function(options) {
  return PowerRequest(
    Object.assign(options, {
      method: "POST"
    })
  );
};

PowerRequest.get = function(options) {
  return PowerRequest(
    Object.assign(options, {
      method: "GET"
    })
  );
};
export default PowerRequest;
