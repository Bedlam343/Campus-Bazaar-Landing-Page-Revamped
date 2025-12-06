import { motion } from 'motion/react';
import { BookOpen, Laptop, Shirt, ShoppingBag } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Textbooks', icon: <BookOpen />, color: 'bg-blue-500' },
    { name: 'Electronics', icon: <Laptop />, color: 'bg-purple-500' },
    { name: 'Clothing', icon: <Shirt />, color: 'bg-pink-500' },
    { name: 'Dorm Essentials', icon: <ShoppingBag />, color: 'bg-emerald-500' },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Everything You Need</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              className="bg-slate-800 rounded-2xl p-6 cursor-pointer group hover:bg-slate-750 border border-slate-700 hover:border-indigo-500/50 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-slate-400 text-sm">Browse 100+ items</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
