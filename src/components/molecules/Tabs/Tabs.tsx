import clsx from "clsx";
import { memo, useCallback, useEffect, useRef, useState } from "react";

export default function Tabs({ items, activeKey, onChange }: TabsProps) {
  const panels = items.map(({ key, label }) => ({ key, label }));

  const activeIndex = items.findIndex(({ key }) => key === activeKey);

  const handleSetActiveKey = useCallback(
    (key: string) => {
      if (key === activeKey) return;
      onChange?.(key);
    },
    [activeKey, onChange]
  );

  return (
    <div className="h-full flex flex-col space-y-2.5">
      <TabNavigation
        activeKey={activeKey}
        setActiveKey={handleSetActiveKey}
        panels={panels}
        activeIndex={activeIndex}
      />

      <div className="h-full shadow">
        {items.map(({ key, children }, index) => {
          return (
            <div key={`${key}-${index}`}>{key === activeKey && children}</div>
          );
        })}
      </div>
    </div>
  );
}

const TabNavigation = memo(
  ({
    activeKey,
    setActiveKey,
    panels,
    activeIndex,
  }: TabNavigationProps & { activeIndex: number }) => {
    const navigationRef = useRef<HTMLDivElement>(null);
    const [widthIndicator, setWidthIndicator] = useState<number>(0);

    useEffect(() => {
      if (navigationRef?.current) {
        setWidthIndicator(navigationRef.current.offsetWidth);
      }
    }, [activeIndex, panels]);

    return (
      <div className="relative flex flex-row overflow-auto">
        {panels.map(({ label, key }, idx) => (
          <div
            ref={navigationRef}
            key={`${key}-${idx}`}
            className={clsx(
              "w-[14.5rem] flex justify-center items-center h-10 !border-b cursor-pointer z-20",
              "transition duration-200 ease-in-out",
              activeKey === key ? "text-blue-800" : "text-black-40"
            )}
            onClick={() => setActiveKey(key)}
          >
            <span>{label}</span>
          </div>
        ))}

        <div
          className="absolute inset-0  bg-blue-100 transition-transform duration-300 border-b-2 border-red-950 z-10"
          style={{
            width: widthIndicator || 1,
            transform: `translateX(${activeIndex * (widthIndicator || 1)}px)`,
          }}
        />
      </div>
    );
  }
);
