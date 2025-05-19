import { useState, useEffect } from "react";
import { Search, Check, Wine, ListChecks } from "lucide-react";

export default function ItemSelector({
  title = "Sélection d'un élément",
  placeholder = "Rechercher...",
  icon = <ListChecks size={18} className="mr-2 text-gray-700" />,
  editMode = false,
  items = [],
  selectedItem = null,
  onSelect = () => {},
  display = (item) => <span>{item.nom}</span>,
  itemInfo = () => null,
  filterFn = (item, searchTerm) =>
    item.nom?.toLowerCase().includes(searchTerm.toLowerCase()),
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items.filter((item) => filterFn(item, searchTerm)));
  }, [searchTerm, items, filterFn]);

  return (
    <div className="lg:col-span-1 bg-white shadow rounded-lg p-4">
      <h2 className="font-semibold text-gray-800 mb-4 flex items-center">
        {icon}
        {title}
        {editMode && (
          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            Mode Modification
          </span>
        )}
      </h2>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder={placeholder}
          className="pl-8 border p-2 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search size={16} className="absolute left-2 top-3 text-gray-400" />
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded border cursor-pointer hover:opacity-90 ${
              selectedItem?.id === item.id ? "ring-2 ring-red-900" : ""
            }`}
            onClick={() => onSelect(item)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{display(item)}</h3>
                {itemInfo(item)}
              </div>
              {selectedItem?.id === item.id && (
                <Check size={18} className="text-green-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
