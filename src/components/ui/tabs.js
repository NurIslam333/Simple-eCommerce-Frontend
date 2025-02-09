"use client";
import { useState } from "react";

export const CustomTabs = ({
  tabs,
  className = "p-5",
  tabHeader,
  mainDivCss = "flex flex-col gap-5",
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={`${mainDivCss}`}>
      {/* Tab Headers */}
      <div className={`flex items-center flex-wrap gap-3 ${tabHeader}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 tab:px-5 rounded text-sm tab:text-base ${
              activeTab === tab.id
                ? "bg-golden-color text-white"
                : " bg-gray-100 text-body-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`${className}`}>
        {tabs.map(
          (tab) => activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};
