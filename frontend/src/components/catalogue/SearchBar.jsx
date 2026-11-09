import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const SearchBar = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories = []
}) => {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-6 font-sf sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari produk (contoh: Bambu Hoki Layer 3, Bonggol Suji)..."
            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-xs md:text-sm outline-none focus:border-[#153e25] focus:bg-white focus:ring-1 focus:ring-[#153e25] transition-all placeholder:text-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#153e25] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500 mr-2" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-semibold text-gray-700 outline-none cursor-pointer pr-2"
            >
              <option value="populer">Paling Populer</option>
              <option value="terbaru">Produk Terbaru</option>
              <option value="harga-rendah">Harga: Rendah ke Tinggi</option>
              <option value="harga-tinggi">Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;