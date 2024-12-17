interface TabItems {
  key: string;
  label: string;
  children: React.ReactNode | string;
}

interface TabNavigationProps {
  activeKey: string;
  setActiveKey: (key: string) => void;
  panels: Omit<TabItems, 'children'>[];
}

interface TabsProps {
  items: TabItems[];
  activeKey: string;
  onChange?: (activeKey: string) => void;
  renderTabItem?: (panel: { key: string; label: string }) => React.ReactNode;
}
