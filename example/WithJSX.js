import { Tabs, Tab } from '../src';

export default {
  name: 'WithJSXExample',
  data() {
    return { currentTabIndex: 0 };
  },
  methods: {
    handleTabSelected(e, index) {
      console.log(e, index);
      this.currentTabIndex = index;
    }
  },
  render() {
    const secondTabTitle = <span>Second tab <em>(click me!)</em></span>

    return (
      <div>
        <h2>Example with JSX</h2>
        <h3>
          Selected tab index is: {this.currentTabIndex}
        </h3>
        <Tabs onSelect={this.handleTabSelected}>
          <Tab title="First tab">
            <p>JSX is awesome!</p>
            <p>When you change tab, displayed index ⬆️ should update.</p>
          </Tab>
          <Tab title={secondTabTitle}>
            <p>Well, the index displayed should be 1, now.</p>
            <p>Oh, and check the console, it must have logged a <code>MouseEvent</code>.</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
};
