import { useState } from "react";
import type { Route } from "./+types/admin.manage";
import { AdminLayout } from "../utils/AdminLayout";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "จัดการรายการอ้างอิง - Admin" }];
}

export default function AdminManage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const citations = [
    {
      id: "0000001",
      title: "Python for Beginner",
      author: "Lena del Rey",
      publisher: "Sebastopol",
      category: "หนังสือ"
    },
    {
      id: "0000002", 
      title: "Java for Dummy",
      author: "Wimpy the Kid",
      publisher: "-",
      category: "หนังสือ"
    }
  ];

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === citations.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(citations.map(c => c.id));
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-black">จัดการรายการอ้างอิง</h2>
          <div className="flex items-center gap-3">
            <button className="px-4 py-1 text-sm text-gray-700 border border-gray-300 rounded">
              ลบ
            </button>
            <button 
              className="px-4 py-1 text-sm text-white rounded"
              style={{ backgroundColor: "#FF7D63" }}
            >
              เพิ่ม
            </button>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ค้องค์มก"
                className="px-3 py-1 text-sm border border-gray-300 rounded w-32"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="w-12 px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === citations.length && citations.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">รหัสอ้างอิง</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ชื่อเรื่อง</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ผู้วิจัยเขียน</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">สำนักพิมพ์</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ประกาศ</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">แก้ไขข้อมูล</th>
              </tr>
            </thead>
            <tbody>
              {citations.map((citation, index) => (
                <tr key={citation.id} className={index > 0 ? "border-t border-gray-200" : ""}>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(citation.id)}
                      onChange={() => handleSelectItem(citation.id)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{citation.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{citation.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{citation.author}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{citation.publisher}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{citation.category}</td>
                  <td className="px-4 py-3">
                    <button className="text-sm text-gray-600 hover:text-gray-800">
                      แก้ไข
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}