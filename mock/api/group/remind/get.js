module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      "time": "08:00",
      "dayOfWeek": [
        1,
        3,
        5
      ],
      "status": 0
    }
  })
}
