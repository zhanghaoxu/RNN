module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: [
      {
        id:14, // 小组
        createUserId: '53839', // 创建者id
        title: '半山夜跑小分队', // 小组名称
        description: '这是一只勇敢的小分队', // 小组描述
        communityId: 53960, // 圈子id
        periodType: 1, // 周期类型 1有限 2无限
        endTime: '2019-03-16', // 对于有限周期小组的结束时间
        frequency: 1, // 打卡频率：1每日打卡，2每周打卡
        validationId: 12, // 规则表id
        privateOption: 0, // 隐私设置 0公开，1私有
        regulationDesc: '非常完美的一次打卡体验', // 本场规则描述
        dakaed: false, // 当前周期是否已经打卡
        groupMemberCount: 88
      },
      {
        id: 90, // 小组
        createUserId: '213', // 创建者id
        title: '钱江新城打卡圈', // 小组名称
        description: '钱江打卡，再创辉煌', // 小组描述
        communityId: 102, // 圈子id
        periodType: 2, // 周期类型 1有限 2无限
        endTime: '2019-03-16', // 对于有限周期小组的结束时间
        frequency: 1, // 打卡频率：1每日打卡，2每周打卡
        validationId: 12, // 规则表id
        privateOption: 0, // 隐私设置 0公开，1私有
        regulationDesc: '非常完美的一次打卡体验', // 本场规则描述
        dakaed: false, // 当前周期是否已经打卡
        groupMemberCount: 200,
        groupMemberLimit: 250
      }
    ]
  })
}
