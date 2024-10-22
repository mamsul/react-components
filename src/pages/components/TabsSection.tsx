import { useState } from "react";
import Tabs from "../../components/molecules/Tabs/Tabs";

export default function TabsSection() {
  const [activeKey, setActiveKey] = useState<string>("1");
  const tabsItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Tabs 1",
      children: <div>Tabs 1</div>,
    },
    {
      key: "2",
      label: "Tabs 2",
      children: "Tabs 2",
    },
    {
      key: "3",
      label: "Tabs 3",
      children: "Tabs 3",
    },
    {
      key: "4",
      label: "Tabs 4",
      children: "Tabs 4",
    },
  ];

  return (
    <div className="mt-5 pl-2.5">
      <Tabs
        items={tabsItems}
        activeKey={activeKey}
        onChange={(key: string) => setActiveKey(key)}
      />
    </div>
  );
}
