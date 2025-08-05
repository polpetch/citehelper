import { useState } from "react";
import type { Route } from "./+types/admin";
import { AdminLayout } from "../utils/AdminLayout";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Admin - citehelper" }, { name: "description", content: "Admin Panel for Citation Helper" }];
}

export default function Admin() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemSelect = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <AdminLayout>
      <div>
        {/* Section Header with Actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-black">อนุมัติรายการอ้างอิง</h2>
          <div className="flex items-center gap-3">
            <button className="px-4 py-1 text-sm text-gray-700 border border-gray-300 rounded">
              เมื่อนูน
            </button>
            <button 
              className="px-4 py-1 text-sm text-white rounded"
              style={{ backgroundColor: "#FF7D63" }}
            >
              อนุมัติ
            </button>
          </div>
        </div>

        {/* Bibliography Items Container */}
        <div className="bg-white border border-gray-300 rounded-lg">
          {/* Item 1 - Pending */}
          <div className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={selectedItems.includes("item1")}
                onChange={() => handleItemSelect("item1")}
                className="mt-1 w-4 h-4"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-black">รายการอ้างอิงที่ 01</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">ถูกส่งเมื่อ 04/22</span>
                    <button 
                      className="px-3 py-1 text-xs text-white rounded"
                      style={{ backgroundColor: "#FF7D63" }}
                    >
                      แก้ไข
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Ramalho, L. (2015). Fluent python (First edition). Sebastopol, CA: O'Reilly.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 - Approved */}
          <div className="px-4 py-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={selectedItems.includes("item2")}
                onChange={() => handleItemSelect("item2")}
                className="mt-1 w-4 h-4"
              />
              <div className="flex-1">
                {/* Approved Banner */}
                <div className="mb-3 px-3 py-2 bg-blue-500 rounded flex items-center gap-2">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-500 text-xs font-bold">i</span>
                  </div>
                  <span className="text-white text-sm">
                    รายการอ้างอิงนี้ถูกอนุมัติกับ รายการอ้างอิงที่ 01
                  </span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-black">รายการอ้างอิงที่ 02</h3>
                    <div className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">ถูกส่งเมื่อ 04/22</span>
                    <button className="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded">
                      แก้ไข
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Ramalho, L. (2015). Fluent python (First edition). Sebastopol, CA: O'Reilly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}