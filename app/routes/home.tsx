import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "citehelper" },
    { name: "description", content: "Citation Helper for Academic References" },
  ];
}

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="min-h-screen" >
      {/* Header */}
      <header className="px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-normal text-orange">citehelper</h1>
            <div className="flex items-center gap-12">
              {!showSearch ? (
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  ค้นหา
                </button>
              ) : (
                <input
                  type="text"
                  placeholder="ค้นหาเอกสารอ้างอิง..."
                  className="- px-4 py-3 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  autoFocus={showSearch}
                />
              )}

              <button className="text-gray-600 hover:text-gray-900 text-sm">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>

          {/* Expandable Search Bar */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-8">
        <div className="space-y-8">
          {/* Citation Form */}
          <div className="bg-white rounded-lg border border-gray-900 p-8">
            {/* Format Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-normal text-black">
                  American Psychological Association (APA 6.0)
                </h2>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">
                APA หรือ (American Psychological Association) พัฒนามาจากกฎเกณฑ์มาตรฐานที่นำหญิงมาในการ...
              </p>
            </div>

            {/* Citation Type Tags */}
            <div className="flex gap-3 mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-red-100 font-medium" style={{ background: "#FF7D63" }}>
                หนังสือ
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
                🍃 วารสาร
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
                📰 วิทยานิพนธ์
              </span>
            </div>

            {/* Form Fields */}
            <div className="space-y-2">
              <div>
                <input
                  type="text"
                  placeholder="ชื่อเรื่อง"
                  className="w-full  text-black px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ผู้แต่ง"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="สำนักพิมพ์"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ปีที่พิมพ์"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="URL"
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="เลขหน้า"
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Action Section */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <label className="bg-white flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  ใส่ข้อมูลพิมพ์เนิน
                </label>
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  เสนอรายการฯ่างล่างเข้าสู่ระบบ
                </label>
              </div>
              <button className="px-8 py-2 bg-orange text-white rounded-md text-sm font-medium hover:cursor-pointer:">
                บันทึก
              </button>
            </div>
          </div>

          {/* Bibliography Section */}
          <div className="bg-white rounded-lg border border-gray-900 p-8">
            <div className="flex items-center gap-2 mb-6">
              <h1 className="text-lg font-medium text-black">📚 รายการบรรณานุกรม</h1>
            </div>
            <div className="text-center py-16">
              <div className="text-gray-300 text-6xl mb-3">📖</div>
              <p className="text-gray-400 text-sm">ว่าง</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
