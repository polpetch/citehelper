import { Link, useLocation } from "react-router";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  
  const tabs = [
    { path: "/admin", label: "อนุมัติรายการอ้างอิง" },
    { path: "/admin/manage", label: "จัดการรายการอ้างอิง" },
    { path: "/admin/format", label: "จัดการรูปแบบรายการอ้างอิง" },
    { path: "/admin/users", label: "จัดการข้อมูลผู้ใช้" },
  ];

  const isActiveTab = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f7f4" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-light" style={{ color: "#FF7D63" }}>admin</h1>
          <Link to="/" className="text-gray-600 hover:text-gray-800 text-sm">
            กลับสู่หน้าหลัก
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 mb-6">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={`pb-2 text-sm ${
                  isActiveTab(tab.path)
                    ? "font-medium border-b-2"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                style={isActiveTab(tab.path) ? { 
                  color: "#FF7D63", 
                  borderBottomColor: "#FF7D63" 
                } : {}}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6">
          {children}
        </div>
      </div>
    </div>
  );
}