module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      step: null,
      location: 1,
      time: '1;08:00:00,5;10:00:00',
      // image: 1,
      // video: 1
      // audio: 1
    }
  })
}
