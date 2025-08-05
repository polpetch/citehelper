import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "citehelper" }, { name: "description", content: "Citation Helper for Academic References" }];
}

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMoreInfomation, setShowMoreInfomation] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-normal text-orange">citehelper</h1>
            <div className="flex items-center gap-12">
              {!showSearch ? (
                <button
                  type="button"
                  onClick={() => setShowSearch(!showSearch)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  ค้นหา
                </button>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    ค้นหา
                  </label>
                </div>
              )}

              <div className="relative">
                <button 
                  type="button" 
                  onClick={() => setShowLoginCard(!showLoginCard)}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  เข้าสู่ระบบ
                </button>
                
                {/* Login Card */}
                {showLoginCard && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg border border-gray-200 shadow-lg p-6 z-50">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">เข้าสู่ระบบ</h3>
                      
                      <div className="space-y-4">
                        <div className="relative">
                          <input
                            type="email"
                            className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                          />
                          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">
                            อีเมล
                          </label>
                        </div>
                        
                        <div className="relative">
                          <input
                            type="password"
                            className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                            placeholder=" "
                          />
                          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">
                            รหัสผ่าน
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                          <input type="checkbox" className="mr-2 w-4 h-4" />
                          จำฉันไว้
                        </label>
                        <a href="#" className="text-sm text-orange-600 hover:underline">
                          ลืมรหัสผ่าน?
                        </a>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full px-4 py-3 bg-orange text-white rounded-md text-sm font-medium hover:bg-orange-700"
                      >
                        เข้าสู่ระบบ
                      </button>
                      
                      <div className="text-center text-sm text-gray-600">
                        ยังไม่มีบัญชี? <a href="#" className="text-orange-600 hover:underline">สมัครสมาชิก</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Expandable Search Bar */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-8">
        {" "}
        <div className="space-y-8">
          {/* Citation Form */}
          <div className="bg-white rounded-lg border border-gray-900 p-8">
            {/* Format Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-normal text-black">American Psychological Association (APA 6.0)</h2>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">
                APA หรอ (American Psychological Association) พฒนามาจากกฎเกณฑมาตรฐานทนหญงมาในการ...
              </p>
            </div>

            {/* Citation Type Tags */}
            <div className="flex gap-3 mb-8">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-red-100 font-medium"
                style={{ background: "#FF7D63" }}
              >
                📔 หนังสือ
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
                🍃 วารสาร
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
                📰 วิทยานพนธ
              </span>
            </div>

            {/* Form Fields */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  ชื่อเรื่อง
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  ผู้แต่ง
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  สำนักพิมพ์
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  ปีที่พิมพ์
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  URL
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none dark:text-white
                  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 
                  peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  เลขหน้า
                </label>
              </div>
            </div>

            {/* Action Section */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <label className="bg-white flex items-center text-sm text-gray-600 underline">
                  <button type="button" className="mr-2 w-4 h-4" />
                  ใส่ข้อมูลเพิ่มเติม
                </label>
                <label className="flex items-center text-sm text-orange-600 underline">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  เสนอรายการอ้างอิงเข้าสู่ระบบ
                </label>
              </div>
              <button
                type="submit"
                className="px-8 py-2 bg-orange text-white rounded-md text-sm font-medium hover:cursor-pointer:"
              >
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
              <p className="text-gray-400 text-2xl">ว่าง</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
