const getProjectType = type => {
  // const vueType = {
  //   vue3: vue,
  //   vue2: vue,
  //   react:
  // }
  return {
    REACT: `jsx`,
    VUE2: `vue2`,
    VUE3: `vue3`
  }[type]
}
module.exports = {
  getProjectType
}
