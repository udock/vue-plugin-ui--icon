import Icon from './components/icon.vue'

Icon.install = function (Vue, options = {}) {
  if (!options.scoped) {
    Vue.component(options.name || Icon.name, Icon)
  }
}
export default Icon
