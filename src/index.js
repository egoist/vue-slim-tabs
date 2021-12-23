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
  mounted() {
    if (this.$route.query.tab) {
      const tabs = this.$slots.default
        .filter(component => component.componentOptions)
        .map(component => component.componentOptions.propsData.title);

      const index = tabs.findIndex(title => title === this.$route.query.tab);

      if (index) {
        this.switchTab(undefined, index);
      }
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

        const tabs = this.$slots.default
          .filter(component => {
            return component.componentOptions;
          })
          .map(component => {
            return component.componentOptions.propsData.title;
          });

        const query = {};
        for (const q of new URL(window.location).searchParams) {
          query[q[0]] = q[1];
        }

        this.$router.push({
          path: new URL(window.location).pathname,
          query: { ...query, tab: tabs[index] }
        });
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
