import { useState } from "react";

interface FormatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormatDialog({ isOpen, onClose }: FormatDialogProps) {
  const [previewItems, setPreviewItems] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index?: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (typeof index === "number") {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex?: number) => {
    e.preventDefault();
    if (!draggedItem) return;

    setPreviewItems((prev) => {
      // Check if it's a reorder within preview items
      const draggedItemIndex = prev.indexOf(draggedItem);

      if (draggedItemIndex !== -1) {
        // Reordering existing item
        const newItems = [...prev];
        newItems.splice(draggedItemIndex, 1); // Remove from current position

        if (typeof dropIndex === "number") {
          // Adjust drop index if moving item forward
          const adjustedIndex = dropIndex > draggedItemIndex ? dropIndex - 1 : dropIndex;
          newItems.splice(adjustedIndex, 0, draggedItem);
        } else {
          newItems.push(draggedItem);
        }

        return newItems;
      } else {
        // Adding new item from outside
        const newItems = prev.filter((item) => item !== draggedItem);

        if (typeof dropIndex === "number") {
          newItems.splice(dropIndex, 0, draggedItem);
        } else {
          newItems.push(draggedItem);
        }

        return newItems;
      }
    });

    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const removePreviewItem = (itemToRemove: string) => {
    setPreviewItems((prev) => prev.filter((item) => item !== itemToRemove));
  };

  if (!isOpen) return null;

  return (
    <div className="relative z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-300 ease-out"
        onClick={onClose}
      />

      {/* Dialog Container */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          {/* Dialog Panel */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-out w-full max-w-4xl">
            {/* Dialog Header */}
            <div className="bg-blue-500 text-white px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white">ℹ️</span>
                <span className="text-sm font-medium">ลากและจัดเรียงฟรีเซชั่นพอรังรูปแบบรายการอ้างอิง</span>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Dialog Content */}
            <div className="bg-white px-6 py-6">
              {/* Title Section */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium underline">untitled_style</span>
                  <span className="text-blue-500">ℹ️</span>
                </div>
                <button className="text-sm text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50">
                  แก้ไขข้อมูลคิทใช้
                </button>
              </div>

              {/* Citation Preview */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">ตัวอย่างฟอร์แมต</p>
                <p className="text-base font-medium mb-4">
                  Mannan, F. A. (2016). Lana Del Rey: Her life in 94 songs.
                </p>
                <p className="text-xs text-gray-500 mb-4">ฟรีจิดองค์โปรแกรม</p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {["ชื่อเรื่อง", "ผู้เขียน", "บทคัดย่อ", "นักพิมพ์", "ชื่อสำนักพิมพ์", "URL", "DOI", "ISBN"].map((field) => (
                  <div
                    key={field}
                    draggable
                    onDragStart={(e) => handleDragStart(e, field)}
                    className="flex items-center cursor-move hover:bg-blue-50 hover:border-blue-300 p-2 rounded border border-gray-200 transition-all duration-200 bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">⋮⋮</span>
                      <label className="text-sm select-none font-medium">{field}</label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Fields */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["จุดจง", "บริพบการ", "อัตยการ", "กวคคา", "( วงเล็บเปิด", ") วงเล็บปิด"].map((field) => (
                  <div
                    key={field}
                    draggable
                    onDragStart={(e) => handleDragStart(e, field)}
                    className="flex items-center cursor-move hover:bg-blue-50 hover:border-blue-300 p-2 rounded border border-gray-200 transition-all duration-200 bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">⋮⋮</span>
                      <label className="text-sm select-none font-medium">{field}</label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Date Fields */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['" อัญประกาศเปิด', '" อัญประกาศปิด'].map((field) => (
                  <div
                    key={field}
                    draggable
                    onDragStart={(e) => handleDragStart(e, field)}
                    className="flex items-center cursor-move hover:bg-blue-50 hover:border-blue-300 p-2 rounded border border-gray-200 transition-all duration-200 bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">⋮⋮</span>
                      <label className="text-sm select-none font-medium">{field}</label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Preview Section */}
              <div className="mb-6">
                <label className="text-sm text-gray-600 block mb-2">ตัวอย่างฟอร์แมต</label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[200px] bg-gray-50"
                  onDragOver={(e) => handleDragOver(e)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e)}
                >
                  {previewItems.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      ลากและวางรายการที่นี่เพื่อสร้างฟอร์แมต
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {previewItems.map((item, index) => (
                        <div key={`${item}-${index}`} className="relative">
                          {/* Drop zone before item */}
                          <div
                            className={`absolute -left-1 top-0 w-2 h-full ${dragOverIndex === index ? "bg-blue-400" : "bg-transparent"
                              } transition-colors`}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                          />

                          {/* Preview Item */}
                          <div
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                            className={`bg-white border border-gray-300 rounded px-3 py-1 text-sm flex items-center gap-2 shadow-sm cursor-move hover:bg-gray-50 transition-colors ${draggedItem === item ? "opacity-50" : ""
                              }`}
                          >
                            <span className="select-none">{item}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removePreviewItem(item);
                              }}
                              className="text-orange-500 hover:text-orange-700 text-xs"
                            >
                              ✕
                            </button>
                          </div>

                          {/* Drop zone after last item */}
                          {index === previewItems.length - 1 && (
                            <div
                              className={`absolute -right-1 top-0 w-2 h-full ${dragOverIndex === previewItems.length ? "bg-blue-400" : "bg-transparent"
                                } transition-colors`}
                              onDragOver={(e) => handleDragOver(e, previewItems.length)}
                              onDrop={(e) => handleDrop(e, previewItems.length)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dialog Footer */}
            <div className="bg-gray-50 px-6 py-3 flex flex-row-reverse gap-3">
              <button
                className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
                style={{ backgroundColor: "#FF7D63" }}
              >
                บันทึก
              </button>
              <button className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                จัดเก็บ
              </button>
              <button
                onClick={onClose}
                className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}