#!/usr/bin/env node
console.clear()
const { Command } = require('commander')
const fs = require('fs')
const path = require('path')
const { findRootDirectory } = require(`./getRootDir`)
const program = new Command()
// 用于获取vue的版本号
const getVersionType = str => {
  return str ? Number(str.replace(/^.*?(\d+\.\d+).*$/, '$1')) : new Throw(`获取版本号失败，请确认项目中是否安装了vue/react`)
}
const creatTemplate = vueType => {}
// 定义命令，如果有参数则直接创建文件，否则
program
  .option('-c, --component', '创建组件')
  .option('-p, --page', '创建页面')
  .option('-r, --react', '创建react类型文件')
  .option('-vv, --vue', '创建vue类型文件')
  .option('-n, --name <name>', '设置名称')
program.parse(process.argv)
const options = program.opts()
console.log('options', options)
/**
 * only -c   找到@/comp下的文件自动创建相似
 *
 *
 */
if (options.component) {
  // 执行创建组件的操作
  console.log('正在创建组件...')
} else if (options.page) {
  // 执行创建页面的操作
  console.log('正在创建页面...')
} else {
  console.log('options', options)
  console.log('program', program.args)
  console.log('请选择要创建的内容 (-c 或 -p)。')
  throw new Error(`请选择要创建的内容 (-c 或 -p)。'`)
}
//
// // 查找项目的根目录
const currentDirectory = __dirname
const rootDirectory = findRootDirectory(currentDirectory)
if (rootDirectory) {
  // 读取项目根目录下的 package.json 文件
  const packageJsonPath = path.join(rootDirectory, 'package.json')
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8')
  try {
    // 获取到当前目录下的package.json并读取里面的vue/react配置
    const packageJson = JSON.parse(packageJsonContent)
    const iframeType = packageJson.dependencies
    // 是否支持用户命令行输入？待定
    const isVue = `vue` in iframeType
    let createType = ``
    if (isVue) {
      const vueType = getVersionType(iframeType[`vue`])
      creatTemplate(vueType)
    } else if (`react` in iframeType) {
    } else new Throw(`当前仅支持创建VUE/REACT模板！`)
  } catch (error) {
    console.error('解析 package.json 文件失败：', error)
  }
} else {
  console.error('未找到项目的根目录。')
}
