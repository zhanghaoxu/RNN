module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      groupId: 0,
      showRed: false,
      canUpload: false,
      mermberable: true,
      hostable: true,
      talkDisable: false,
      memberDakaCount: 20,
      hostDakaCount: 10,
      memberDakaCountBound: 100,
      hostDakaCountBound: 20,
      talkUrl: 'https://loan-star-moon-test.nos-jd.163yun.com/1552617929451501170',
      newTalkUrl: ''
    }
  })
}
