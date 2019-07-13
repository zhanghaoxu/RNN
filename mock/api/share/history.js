module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      historyMemberCount: 520,
      historyDakaCount: 9999,
      highestDakaRate: '85.67%'
    }
  })
}
