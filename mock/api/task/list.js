module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: [
      {
        "type": "新手任务",
        "foldOnFinish":true,
        "allFinish": false,
        "taskList": [
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "关注公众号",
            "finish": false,
            "todoText": "去关注",
            "rewardPoint": 10,
            "leftText": null,
            "internalName": "subscribeSA"
          },
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "绑定手机号",
            "finish": false,
            "todoText": "去绑定",
            "rewardPoint": 6,
            "leftText": null,
            "internalName": "bindMobile"
          },
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "邀请好友",
            "finish": false,
            "todoText": "去邀请",
            "rewardPoint": 6,
            "leftText": "还可以邀请50个好友登录注册",
            "internalName": "invite"
          },
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "创建一次小组",
            "finish": false,
            "todoText": "去创建",
            "rewardPoint": 6,
            "leftText": null,
            "internalName": "createGroup"
          }
        ]
      },
      {
        "type": "每日任务",
        "allFinish": true,
        "foldOnFinish":false,
        "taskList": [
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "每日首次登陆",
            "finish": true,
            "todoText": null,
            "rewardPoint": 10,
            "leftText": null,
            "internalName": "firstLogin",
            "internalName": "daka"
          },
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "每日打卡",
            "finish": false,
            "todoText": "去打卡",
            "rewardPoint": 6,
            "leftText": "今日还有2次打卡机会",
            "internalName": "daka"
          },
          {
            "iconUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132",
            "taskName": "评论",
            "finish": false,
            "todoText": "去评论",
            "rewardPoint": 6,
            "leftText": "今日还有3次打卡机会",
            "internalName": "comment"
          }
        ]
      }
    ]
  })
}
