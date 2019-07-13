module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: 'success',
    data: {
      newCount: 1,
      commentCount: 1,
      thumbCount: 2
    }
  })
}
