//     /**
// 	 * type只有两个一个是 forward ， 一个是share
// 	 */
// 	private String type;
// 	/**
// 	 * 对于forward的type，scene：textDaka,videoDaka,groupCreateFinish,group.
// 	 * 对于share的type,scene: daka,group,dakaFinish
// 	 */
// 	private String scene;

// 	/**
// 	 * type:forward scene：textDaka context={"text":"用户打卡的文字"} <br/>
// 	 * type:forward scene：videoDaka context={"videoUrl":"视频url"} <br/>
// 	 * type:forward scene:groupCreateFinish
// 	 * context={"avatarUrl":"https://用户头像地址","nick":"用户昵称",
// 	 * "groupTitle":"小组名称" , "groupQrCodeUrl":"小组分享二维码"}<br/>
// 	 * type:forward scene:group context={"groupTitle"="小组名称"}<br/>
// 	 *
// 	 * type:share scene:group context={"groupId":"小组id"}<br/>

// 	 * type:share scene:dakaFinish context=

//      {"avatarUrl":"头像url","nick":"用户昵称",
//      "continuesDakaTimes":"连续打卡次数","dakaTime":"打卡时间戳","groupTitle":"小组名称" ,
//      "totalDakaCount":"总打卡次数","groupQrCodeUrl":"小组二维码"}<br/>

// 	 * type:share scene:daka context={"dakaId":"打卡id"}<br/>
// 	 *
// 	 */
// 	private Map<String, String> context;
module.exports = function(req, res) {
  res.json({
    code: 200,
    msg: '请求成功',
    data: 'http://loan-star-moon.nos-jd.163yun.com/1553826126164764625'
  })
}
