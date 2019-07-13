module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      totalAmount: 10111,
      todayAmount: 270
    }
  })
}
