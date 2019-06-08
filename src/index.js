export const Tabs = {
  name: "tabs",
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
    };
  },
  methods: {
    switchTab(e, index, isDisabled) {
      if (!isDisabled) {
        this.selectedIndex = index;
        this.onSelect && this.onSelect(e, index);
      }
    }
  },
  render() {
    const tabs = this.$slots.default.filter(
      component => component.componentOptions
    );

    const tabList = [];
    tabs.forEach((child, index) => {
      const { title, titleSlot, disabled } = child.componentOptions.propsData;
      const content = titleSlot ? this.$slots[titleSlot] : title;
      const isDisabled = disabled === true || disabled === "";

      tabList.push(
        <li
          class="vue-tab"
          role="tab"
          onClick={e => this.switchTab(e, index, isDisabled)}
          aria-selected={this.selectedIndex === index ? "true" : "false"}
          aria-disabled={isDisabled ? "true" : "false"}
        >
          {content}
        </li>
      );
    });

    return (
      <div class="vue-tabs" role="tabs">
        <ul class="vue-tablist" role="tablist">
          {this.$slots.left}
          {tabList}
          {this.$slots.right}
        </ul>
        {tabs[this.selectedIndex]}
      </div>
    );
  }
};

export const Tab = {
  name: "tab",
  props: ["title", "titleSlot", "disabled"],
  render() {
    return (
      <div class="vue-tabpanel" role="tabpanel">
        {this.$slots.default}
      </div>
    );
  }
};

export function install(Vue) {
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tab.name, Tab);
}
