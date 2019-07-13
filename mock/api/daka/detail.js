module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      video: '',
      nickName: '太真洞人',
      dakaTime: 1551181243809,
      seriesCount: 21213,
      description: '连续打卡7天，今天休息一天。连续打卡7天今天休 息一天。',
      image: JSON.stringify([
        {
          url: 'http://loan-star-moon-test.nos-jd.163yun.com/b882510c9ff84799b896260d4c786382',
          width: 100,
          height: 100,
          name: 'lall'
        },
        {
          url: 'http://loan-star-moon-test.nos-jd.163yun.com/b882510c9ff84799b896260d4c786382',
          width: 100,
          height: 100,
          name: 'lall'
        }
      ]),
      avatar: 'http://loan-star-moon-test.nos-jd.163yun.com/b882510c9ff84799b896260d4c786382',
      step: '1000',
      location: '澳门',
      commentCount: 800,
      thumbCount: 1000,
      isThumb: 0,
      nowTime: 1551184035437
    }
  })
}
