var Mock = require('mockjs')

module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      list: [
        {
          app: 'moon',
          requestSize: 1,
          bucket: 'loan-star-moon',
          object: '1543989448068493800',
          expires: 1859349448,
          objectSizeMax: 10485760,
          objectSizeMin: null,
          mimeLimit: null,
          overWrite: null,
          region: 'JD',
          token:
            'UPLOAD 8009a9f4a0824978bb2254676f530ebb:y6LO8fJTUh2lUI4lsguNIkmi8+eUtAIsF/VYjgeL1Ag=:eyJCdWNrZXQiOiJsb2FuLXN0YXItbW9vbiIsIk9iamVjdCI6IjE1NDM5ODk0NDgwNjg0OTM4MDAiLCJFeHBpcmVzIjoxODU5MzQ5NDQ4LCJPYmplY3RTaXplTWF4IjoxMDQ4NTc2MCwiUmVnaW9uIjoiSkQifQ=='
        }
      ]
    }
  })
}
