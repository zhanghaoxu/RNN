module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: "success",
    data: {
      dakaStatistics: {
        maxSeriesCount: 233,
        dakaRatio: 0.5623,
        dakaGroupCount: 26,
        thumbCount: 12345,
        totalDakaCount: 111111
      },
      ugcList: [
        {
          userId: "12",
          dakaId: 22,
          dakaGroupId: 123,
          dakaRule: "image",
          content:
            "[{\"size\":94319,\"name\":\"1556591196222963248\",\"url\":\"https://loan-star-moon-test.nos-jd.163yun.com/1556591196222963248\",\"width\":1080,\"height\":1080,\"type\":\"jpeg\"}]"
        },
        {
          userId: "12",
          dakaId: 22,
          dakaGroupId: 123,
          dakaRule: "video",
          content:
            "https://loan-star-moon-test.nos-jd.163yun.com/1553504159195735889"
        },
        {
          userId: "22",
          dakaId: 123,
          dakaGroupId: 222,
          dakaRule: "description",
          content:
            "打卡好累每天都需要坚持，总感觉做到了就养成了了不得的习惯，做到我直播吃屎，老铁…"
        },
        {
          userId: "22",
          dakaId: 123,
          dakaGroupId: 222,
          dakaRule: "description",
          content:
            "打卡好累每天都需要坚持，总感觉做到了就养成了了不得的习惯，做到我直播吃屎，老铁…"
        },
        {
          userId: "22",
          dakaId: 123,
          dakaGroupId: 222,
          dakaRule: "description",
          content:
            "打卡好累每天都需要坚持，总感觉做到了就养成了了不得的习惯，做到我直播吃屎，老铁…"
        }
      ],
      groupList: [
        {
          dakaStatus: 0,
          title: "皓旭的健身小组"
        },
        {
          dakaStatus: 1,
          title: "美容小组"
        },
        {
          dakaStatus: 2,
          title: "每天一生水"
        },
        {
          dakaStatus: 0,
          title: "皓旭的健身小组2"
        },
        {
          dakaStatus: 1,
          title: "美容小组3"
        },
        {
          dakaStatus: 2,
          title: "每天一生水3"
        }
      ]
    }
  });
};
