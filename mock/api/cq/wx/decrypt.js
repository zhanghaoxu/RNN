module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      decryptData: {
        stepInfoList: [
          {
            timestamp: 1445866601,
            step: 5000
          }
        ]
      }
    }
  })
}
