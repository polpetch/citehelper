import { useState, useEffect, useRef } from "react";
import type { Route } from "./+types/admin.format";
import { AdminLayout } from "../utils/AdminLayout";
import { FormatDialog } from "../components/FormatDialog";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "จัดการรูปแบบรายการอ้างอิง - Admin" }];
}

export default function AdminFormat() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMainDropdown, setShowMainDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState<number | null>(null);
  const [selectedFormat, setSelectedFormat] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setShowMainDropdown(false);
        setShowTypeDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const citationTypes = [
    { icon: "📖", name: "หนังสือ", checked: false },
    { icon: "📄", name: "ปีเล่ม", checked: true },
    { icon: "🌐", name: "เว็บ", checked: false },
    { icon: "📰", name: "รีสิส", checked: false },
    { icon: "🎵", name: "เพลง", checked: false },
    { icon: "🎧", name: "พอดแคสต์", checked: false },
  ];

  return (
    <AdminLayout>
      <div ref={containerRef}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-black">จัดการรูปแบบรายการอ้างอิง</h2>
          <div className="flex items-center gap-3">
            <button className="px-4 py-1 text-sm text-gray-700 border border-gray-300 rounded">ลบ</button>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-1 text-sm text-white rounded"
              style={{ backgroundColor: "#FF7D63" }}
            >
              เพิ่มรูปแบบรายการอ้างอิง
            </button>
          </div>
        </div>

        <FormatDialog 
          isOpen={showAddModal} 
          onClose={() => setShowAddModal(false)} 
        />

        <div className="bg-white border border-gray-300 rounded-lg p-6">
          {/* APA Format Section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <input
                type="checkbox"
                checked={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-base font-medium">American Psychological Association (APA 6.0)</span>
              <div className="relative">
                <button
                  onClick={() => setShowMainDropdown(!showMainDropdown)}
                  className="text-gray-400 text-sm hover:text-gray-600"
                >
                  •••
                </button>

                {showMainDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded shadow-lg z-20">
                    <div className="p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">จัดเก่าล่าสุด 04/22</span>
                        <button className="text-xs text-gray-600 hover:text-gray-800">ลบ</button>
                      </div>

                      <div className="border-t pt-2">
                        <button className="w-full text-left px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 rounded">
                          แก้ไขฟอร์แมต
                        </button>
                        <button className="w-full text-left px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 rounded">
                          ดูรายละเอียด
                        </button>
                        <button className="w-full text-left px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 rounded">
                          ส่งออก
                        </button>
                        <button className="w-full text-left px-2 py-1 text-xs text-orange-600 hover:bg-orange-50 rounded">
                          ลบ
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Citation Types */}
            <div className="ml-7 space-y-3">
              {citationTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={type.checked} className="w-4 h-4" />
                    <span className="text-sm">{type.icon}</span>
                    <span className="text-sm">{type.name}</span>
                    <div className="relative">
                      <button
                        onClick={() => setShowTypeDropdown(showTypeDropdown === index ? null : index)}
                        className="text-gray-400 text-sm hover:text-gray-600"
                      >
                        •••
                      </button>

                      {showTypeDropdown === index && (
                        <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                          <div className="p-2 space-y-1">
                            <button className="w-full text-left px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 rounded">
                              แก้ไขฟอร์แมต
                            </button>
                            <button className="w-full text-left px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 rounded">
                              ดูตัวอย่าง
                            </button>
                            <button className="w-full text-left px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 rounded">
                              คัดลอก
                            </button>
                            <div className="border-t pt-1">
                              <button className="w-full text-left px-2 py-1 text-xs text-orange-600 hover:bg-orange-50 rounded">
                                ลบ
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {type.name === "ปีเล่ม" && (
                      <div className="relative">
                        <button
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded bg-white"
                        >
                          แก้ไขฟอร์แมต
                        </button>

                        {showDropdown && (
                          <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                            <div className="p-2 space-y-1">
                              <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50">
                                <input type="checkbox" className="w-3 h-3" />
                                <span className="text-xs">ใช้ Template เดียวกับ Style</span>
                              </div>
                              <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50">
                                <input type="checkbox" className="w-3 h-3" />
                                <span className="text-xs">สามารถสง่อย์ระบบอีก</span>
                              </div>
                              <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50">
                                <input type="checkbox" className="w-3 h-3" />
                                <span className="text-xs">แก้ไขฟอร์แมต</span>
                              </div>
                              <div className="px-2 py-1">
                                <span className="text-xs text-gray-500">ลบ</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {type.name !== "ปีเล่ม" && (
                      <button className="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded">
                        แก้ไขฟอร์แมต
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">จัดเก่าล่าสุด 04/22</span>
                      <button className="text-xs text-gray-600">ลบ</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Format Description */}
            <div className="ml-7 mt-4">
              <p className="text-xs text-gray-500">- สร้าง format ใหม่...</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

