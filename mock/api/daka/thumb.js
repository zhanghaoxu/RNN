module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      code: 1,
      thumbResult: {
        commentId: 11,
        thumbCount: 100
      }
    }
  })
}
