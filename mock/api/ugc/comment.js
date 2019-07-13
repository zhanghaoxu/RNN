module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      code: 1,
      commentList: [
        {
          commentId: 15507,
          dakaId: 311,
          commentNickName: '太真洞人',
          commentAvatar: '/static/imgs/img_test2.png',
          commentTime: 1551702657000,
          comment: '评论内容',
          parentCommentId: '父评论id',
          parentCommentNickName: '父评论用户昵称',
          parentCommentAvatar: '父评论用户头像',
          thumbCount: 1111
        }
      ]
    }
  })
}
