var Mock = require('mockjs')
module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: Mock.mock({
      'userList|500': [
        {
          avatar:
            'https://wx.qlogo.cn/mmopen/vi_32/J2hXoOYL2J0dRAQYoYFI2m7M0q3bk2ov84BibNticbZbFkUB4VUXMxTLbqq8tL6JT4NLFZj4GPAepAvUHxulCaicw/132',
          nickName: '@cname',
          userId: '@uuid'
        }
      ]
    })
  })
}
