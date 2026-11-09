import { useState } from 'react';
import { ShoppingBag, Check, Eye, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full font-sf">
      
      {/* Product Image & Badges */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="bg-[#153e25] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          )}
          {product.exportGrade && (
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
              <ShieldCheck className="w-3 h-3" /> Fitosanitari
            </span>
          )}
        </div>

        {/* Quick View Link */}
        <Link
          to={`/product/${product.id}`}
          className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#153e25] hover:text-white shadow-md"
          title="Lihat Detail"
        >
          <Eye className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-1 block">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-bold text-[#0D0D0D] line-clamp-2 hover:text-emerald-700 transition-colors leading-snug">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Mulai Dari</span>
            <span className="text-base font-extrabold text-[#0D0D0D]">
              Rp {product.price.toLocaleString('id-ID')}
              <span className="text-[10px] font-normal text-gray-500"> / {product.unit || 'batang'}</span>
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#153e25] hover:bg-[#0f2e1b] text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Masuk</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>+ Keranjang</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;