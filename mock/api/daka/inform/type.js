module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      informTypeList: [
        {
          type: 0,
          name: '低俗情色'
        },
        {
          type: 1,
          name: '广告'
        },
        {
          type: 2,
          name: '内容无意义'
        },
        {
          type: 3,
          name: '辱骂攻击'
        },
        {
          type: 4,
          name: '违法信息'
        },
        {
          type: 5,
          name: '侵犯隐私'
        },
        {
          type: 6,
          name: '抄袭我的内容'
        }
      ]
    }
  })
}
