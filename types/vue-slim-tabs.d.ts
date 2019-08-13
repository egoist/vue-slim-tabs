import { PluginFunction, VueConstructor } from 'vue';

export const Tabs: TabsConstructor;
export const Tab: TabConstructor;
export const install: PluginFunction<{}>;

export interface TabsProps {
  defaultIndex?: number;
  onSelect?: (val: any) => void;
}

export interface TabsData {
  selectedIndex: number;
}

export interface TabsMethods {
  switchTab: (e: Event, index: number, isDisabled: boolean) => void;
}

export interface TabProps {
  title?: string;
  titleSlot?: string;
  disabled?: boolean;
}

export interface TabsConstructor extends VueConstructor {
  props: TabsProps;
  data: () => TabsData;
  methods: TabsMethods;
}

export interface TabConstructor extends VueConstructor {
  props: TabProps;
}
