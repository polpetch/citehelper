import type { Route } from "./+types/admin.users";
import { AdminLayout } from "../utils/AdminLayout";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "จัดการข้อมูลผู้ใช้ - Admin" }];
}

export default function AdminUsers() {
  return (
    <AdminLayout>
      <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-black">จัดการข้อมูลผู้ใช้</h2>
        <div className="flex items-center gap-3">
          <button 
            className="px-4 py-1 text-sm text-white rounded"
            style={{ backgroundColor: "#FF7D63" }}
          >
            เพิ่มผู้ใช้ใหม่
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-8">
        <div className="text-center py-16">
          <p className="text-gray-500">เนื้อหาสำหรับจัดการข้อมูลผู้ใช้</p>
        </div>
        </div>
      </div>
    </AdminLayout>
  );
}