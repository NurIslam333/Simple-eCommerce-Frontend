"use client";
import { AnimatePresence, motion } from "framer-motion";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

import { useState } from "react";

export const CustomCollapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow mb-4">
      {/* Collapse Header */}
      <button
        onClick={toggleCollapse}
        className="w-full bg-fray-400 text-purple-color px-5 py-2 tab:py-3 focus:outline-none flex items-start text-left gap-2 justify-between"
      >
        {title}
        <span className="text-xl">
          {isOpen ? <HiMiniMinus /> : <HiMiniPlus />}
        </span>
      </button>

      {/* Collapse Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-3 tab:p-5 bg-gray-100 rounded-b-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
