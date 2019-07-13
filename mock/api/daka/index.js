module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      code: 1,
      msg: null,
      dakaResult: {
        seriesCount: 2,
        dakaCount: 12,
        dakaTime: 1551950902000,
        groupId: null,
        groupName: '胖子小组',
        wxCodeUrl: 'http://loan-star-moon-test.nos-jd.163yun.com/1551931045413252318',
        totalCount: 4,
        hasDaka: null
      }
    }
  })
}
