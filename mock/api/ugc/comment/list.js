module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      commentList:  [
        {
          "commentId": 15507,
          "dakaId": 311,
          "commentNickName": "zhangsan",
          "commentAvatar": "dadada",
          "commentTime": 1551160867000,
          "comment": "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "parentCommentId": "父评论id",
          "parentCommentNickName": "父评论用户昵称",
          "parentCommentAvatar": "父评论用户头像",
          "thumbCount": 1111,
          "isThumb": 27799
        },
        {
          "commentId": 15507,
          "dakaId": 311,
          "commentNickName": "zhangsan",
          "commentAvatar": "dadada",
          "commentTime": 1551160867000,
          "comment": "评论内容",
          "parentCommentId": "父评论id",
          "parentCommentNickName": "父评论用户昵称",
          "parentCommentAvatar": "父评论用户头像",
          "thumbCount": 1111,
          "isThumb": 98933
        },
        {
          "commentId": 15507,
          "dakaId": 311,
          "commentNickName": "zhangsan",
          "commentAvatar": "dadada",
          "commentTime": 1551160867000,
          "comment": "评论内容",
          "parentCommentId": "父评论id",
          "parentCommentNickName": "父评论用户昵称",
          "parentCommentAvatar": "父评论用户头像",
          "thumbCount": 1111,
          "isThumb": 11584
        }
      ],
      page: 1,
      size: 10,
      total: 101
    }
  })
}
