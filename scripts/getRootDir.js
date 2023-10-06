const fs = require('fs')
const path = require('path')

// 获取当前文件所在的目录
// const currentDirectory =
// 逐级向上查找项目的根目录
function findRootDirectory(directory) {
  const packageJsonPath = path.join(directory, 'package.json')

  // 如果找到了 package.json 文件，则认为该目录是项目的根目录
  if (fs.existsSync(packageJsonPath)) {
    return directory
  }

  // 如果未找到 package.json 文件，并且已经达到文件系统的根目录，则返回 null
  if (directory === path.parse(directory).root) {
    return null
  }

  // 否则，继续向上查找
  const parentDirectory = path.dirname(directory)
  return findRootDirectory(parentDirectory)
}

module.exports = {
  findRootDirectory
}
