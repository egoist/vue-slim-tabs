export const Tabs = {
  name: 'tabs',
  props: {
    defaultIndex: {
      default: 0,
      type: Number
    },
    onSelect: {
      type: Function
    }
  },
  data() {
    return {
      selectedIndex: this.defaultIndex
    }
  },
  methods: {
    switchTab(e, index) {
      this.selectedIndex = index
      this.onSelect && this.onSelect(e, index)
    }
  },
  render() {
    const children = this.$slots.default.filter(child => {
      return child.componentOptions && child.componentOptions.tag === 'tab'
    })

    const tabList = []
    children.forEach((child, index) => {
      tabList.push(
        <li
          class="vue-tab"
          role="tab"
          onClick={e => this.switchTab(e, index)}
          aria-selected={this.selectedIndex === index ? 'true' : 'false'}
        >
          {child.componentOptions.propsData.title}
        </li>
      )
    })

    return (
      <div class="vue-tabs" role="tabs">
        <ul class="vue-tablist" role="tablist">
          {this.$slots.left}{tabList}{this.$slots.right}
        </ul>
        {children[this.selectedIndex]}
      </div>
    )
  }
}

export const Tab = {
  name: 'tab',
  props: ['title'],
  render() {
    return (
      <div class="vue-tabpanel" role="tabpanel">
        {this.$slots.default}
      </div>
    )
  }
}

export function install(Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tab.name, Tab)
}
