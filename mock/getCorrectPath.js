const path = require('path')

function getCorrectPath(parentPath, output) {
  const newObj = {}
  try {
    for (let key in output) {
      newObj[key] = path.join(parentPath, output[key])
    }
    return newObj
  } catch (error) {
    console.error(error)
    return newObj
  }
}

module.exports = getCorrectPath
