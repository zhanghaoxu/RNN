import Config from "react-native-config";

function Request(options, { $loading, $toast }) {
  let url = Config.BASE_URL + options.url;
  delete options.url;
  if (options.loading && $loading) {
    $loading.show();
  }

  return fetch(url, {
    method: options.method
  })
    .then(res => {
      //转换json格式
      return res.json();
    })
    .then(res => {
      options.loading && $loading && $loading.hide();
      if (res.code === 200) {
        return new Promise(function(resolve, reject) {
          resolve(res.data);
        });
      } else {
        return new Promise(function(resolve, reject) {
          $toast && $toast.show("服务端错误");
          reject(res.data);
        });
      }
    })
    .catch(e => {
      return new Promise(function(resolve, reject) {
        console.log("error");
        options.loading && $loading && $loading.hide();
        $toast && $toast.show("网络错误");
        reject();
      });
    });
}

Request.post = function(options) {
  return Request(
    Object.assign(options, {
      method: "POST"
    })
  );
};

Request.get = function(options) {
  return Request(
    Object.assign(options, {
      method: "GET"
    })
  );
};

export default Request;
