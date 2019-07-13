const getCorrectPath = require('../getCorrectPath')
const fs = require('fs')

let allApis = {}
try {
  const list = fs.readdirSync(__dirname)
  list.forEach(name => {
    const path = `${__dirname}/${name}`
    const stat = fs.statSync(path)
    if (stat && stat.isDirectory()) {
      fs.access(`${path}/index.js`, function(err) {
        if (!err) {
          const apis = require(path)
          const apiObj = getCorrectPath(name, apis)
          allApis = Object.assign(allApis, apiObj)
        }
      })
    }
  })
} catch (error) {
  console.error(error)
}

module.exports = allApis
