module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: [
      {
        id: 1, // 小组
        createUserId: '53839', // 创建者id
        title: '半山夜跑小分队', // 小组名称
        description: '这是一只勇敢的小分队', // 小组描述
        communityId: 53960, // 圈子id
        periodType: 1916, // 周期类型 1有限 2无限
        endTime: '2019-03-16', // 对于有限周期小组的结束时间
        frequency: 1, // 打卡频率：1每日打卡，2每周打卡
        validationId: 12, // 规则表id
        privateOption: 27612,
        dakaUserCount: 10,
        regulationDesc: 'tiQWUFSz2J',
        dakaed: false,
        groupMemberCount: 25,
        groupMemberLimit: 50,
        rule: {
          step: 0,
          location: 0,
          time: '',
          image: 1,
          video: 0,
          audio: 0
        },
        recentJoinedUsers: [
          {
            nickName: 'warden',
            avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132"
          },
          {
            nickName: 'kathleen',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLg5mdb3W7XmBRw7r7IibbVf2F07qLDn0R6WtK50thZ7I9hxiaeH0ZCpXpichI946YV2ibiaJIsmicBykVQ/132'
          },
          {
            nickName: 'fangsheng',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLg5mdb3W7XmBRw7r7IibbVf2F07qLDn0R6WtK50thZ7I9hxiaeH0ZCpXpichI946YV2ibiaJIsmicBykVQ/132'
          }
        ]
      },
      {
        id: 1000, // 小组
        createUserId: '53839', // 创建者id
        title: '西湖天山漫道', // 小组名称
        description: '勇敢者的游戏', // 小组描述
        communityId: 53960, // 圈子id
        periodType: 1916, // 周期类型 1有限 2无限
        endTime: '2019-03-16', // 对于有限周期小组的结束时间
        frequency: 1, // 打卡频率：1每日打卡，2每周打卡
        validationId: 12, // 规则表id
        privateOption: 27612,
        regulationDesc: 'tiQWUFSz2J',
        dakaed: false,
        dakaUserCount: 8,
        groupMemberCount: 12,
        groupMemberLimit: 50,
        rule: {
          step: 0,
          location: '',
          time: '',
          image: 0,
          video: 0,
          audio: 0
        },
        recentJoinedUsers: [
          {
            nickName: 'kathleen',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLg5mdb3W7XmBRw7r7IibbVf2F07qLDn0R6WtK50thZ7I9hxiaeH0ZCpXpichI946YV2ibiaJIsmicBykVQ/132'
          },
          {
            nickName: 'warden',
            avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132"
          }
        ]
      },
      {
        id: 44, // 小组
        createUserId: '53839', // 创建者id
        title: '呵呵呵呵呵😑', // 小组名称
        description: '这是一只傻逼的小分队', // 小组描述
        communityId: 53960, // 圈子id
        periodType: 1916, // 周期类型 1有限 2无限
        endTime: '2019-03-16', // 对于有限周期小组的结束时间
        frequency: 1, // 打卡频率：1每日打卡，2每周打卡
        validationId: 12, // 规则表id
        privateOption: 27612,
        regulationDesc: 'tiQWUFSz2J',
        dakaed: true,
        dakaUserCount: 25,
        groupMemberCount: 40,
        groupMemberLimit: 50,
        rule: {
          step: 12002,
          location: '浙江衢州',
          time: '1553851328221',
          image: 0,
          video: 0,
          audio: 0
        },
        recentJoinedUsers: [
          {
            nickName: 'kathleen',
            avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLg5mdb3W7XmBRw7r7IibbVf2F07qLDn0R6WtK50thZ7I9hxiaeH0ZCpXpichI946YV2ibiaJIsmicBykVQ/132'
          },
          {
            nickName: 'warden',
            avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6DL1BCibQ7pMoWoZbEtpv5ylAh873viaUWSlTT3Aiaq1qFlqz2UwH0wkiaIG4qLaGTuaUcTFsQp3FGA/132"
          }
        ]
      }
    ]
  })
}
