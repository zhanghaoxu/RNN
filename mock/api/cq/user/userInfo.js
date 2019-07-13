module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: {
      userId:'213423',
      nickName: 'Neo Chang',
      moodDesc: null,
      chainHash: null,
      avatarUrl:
        'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132',
      bindTime: 1551947148000
    }
  })
}
