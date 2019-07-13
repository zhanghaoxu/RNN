var Mock = require('mockjs')

module.exports = function(req, res) {
  const page = req.body.page
  res.json({
    code: 200,
    msg: '请求成功',
    data: Mock.mock({
      rewardList: [],
      page: 1,
      size: 200
    })
  })
}

// 'rewardList|100': [
//   {
//     'id|+10': 0,
//     'number|+1': 1,
//     taskSubject: '页码' + page + '关注公众号' + '@number',
//     taskTime: function() {
//       return Date.now() - this.id * 1000 * 60 * 20
//     },
//     operatorType: 'plus',
//     amount: 100
//   }
// ],
