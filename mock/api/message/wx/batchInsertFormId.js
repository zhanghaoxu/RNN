var Mock = require('mockjs')

module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      "result": true,
      "remainingTimes": 21429,
    }
  })
}
