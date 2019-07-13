module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      bannerCardList: [
        {
          sortOrder: 1,
          imageUrl: 'https://placem.at/places?w=710&h=250&random=1&txt=富强&overlay_color=eee',
          linkUrl: '/package/pages/detail/group?groupId=1',
          innerable: 0
        },
        {
          sortOrder: 2,
          imageUrl: 'https://placem.at/places?w=710&h=250&random=2&txt=和谐&overlay_color=eee',
          linkUrl: 'https://github.com/',
          innerable: 1
        },
        {
          sortOrder: 3,
          imageUrl: 'https://placem.at/places?w=710&h=250&random=3&txt=爱国&overlay_color=eee',
          linkUrl: 'https://www.bilibili.com/',
          innerable: 1
        },
        {
          sortOrder: 4,
          imageUrl: 'https://placem.at/places?w=710&h=250&random=4&txt=敬业&overlay_color=eee',
          linkUrl: 'https://www.douyu.com/',
          innerable: 1
        },
        {
          sortOrder: 5,
          imageUrl: 'https://placem.at/places?w=710&h=250&random=5&txt=友善&overlay_color=eee',
          linkUrl: 'https://www.taobao.com/',
          innerable: 1
        }
      ]
    }
  })
}
