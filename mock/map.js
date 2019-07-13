const allApi = require('./api')
const getCorrectPath = require('./getCorrectPath')

const NEJB = {
  // 辅助开发的 fake login 接口
  '/my-test/isLogin': './NEJB/login',
  // 下面放/NEJB/cmd 地址映射 Hybrid bridge 的返回接口
  '/NEJB/login': './NEJB/login', // 登录
  '/NEJB/getStepCounts': './NEJB/getStepCounts', // 获取步数
  '/NEJB/uploadStepCounts': './NEJB/uploadStepCounts', // 上报步数
  '/NEJB/reqHealthAuth': './NEJB/reqHealthAuth', // 请求健康权限
  '/NEJB/checkSupportFeatures': './NEJB/checkSupportFeatures', // 检查是否支持功能
  '/NEJB/saveData': './NEJB/saveData', // 保存数据
  '/NEJB/getData': './NEJB/getData' // 获取数据
}

const allApiObj = getCorrectPath('./api', allApi)
const apis = Object.assign({}, NEJB, allApiObj)

module.exports = apis
