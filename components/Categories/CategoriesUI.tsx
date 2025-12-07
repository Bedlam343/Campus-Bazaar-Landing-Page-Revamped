import { motion } from 'motion/react';
import Marquee from 'react-fast-marquee';
import { BookOpen, Laptop, Shirt, ShoppingBag } from 'lucide-react';

type Props = {
  clothingImages: string[];
  electronicsImages: string[];
  suppliesImages: string[];
};

const CategoriesUI = ({
  clothingImages,
  electronicsImages,
  suppliesImages,
}: Props) => {
  const categories = [
    { name: 'Textbooks', icon: <BookOpen />, color: 'bg-blue-500' },
    { name: 'Electronics', icon: <Laptop />, color: 'bg-purple-500' },
    { name: 'Clothing', icon: <Shirt />, color: 'bg-pink-500' },
    { name: 'Dorm Essentials', icon: <ShoppingBag />, color: 'bg-emerald-500' },
  ];

  return (
    <section className="py-20 bg-slate-900 w-full flex justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white select-none">
            Everything You Need
            <br />
            All In One Place
          </h2>
        </div>

        <div
          className="px-6 py-2 rounded-4xl bg-slate-800/50
            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
        >
          <p className="text-gray-300 text-lg select-none">Clothing & Shoes</p>
        </div>
        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#0f172b"
            gradientWidth="100px"
            direction="left"
            autoFill
          >
            {clothingImages.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center
                mr-[10px] w-[150px]"
              >
                <img
                  src={src}
                  className="grayscale-100 hover:grayscale-0
                    duration-300 ease-in-out w-auto h-[150px]"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div
          className="mt-[25px] px-6 py-2 rounded-4xl bg-slate-800/50
            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
        >
          <p className="text-gray-300 text-lg select-none">Electronics</p>
        </div>
        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#0f172b"
            gradientWidth="100px"
            direction="right"
            autoFill
          >
            {electronicsImages.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center
                  mr-[10px] w-auto"
              >
                <img
                  src={src}
                  className="grayscale-100 hover:grayscale-0
                    duration-300 ease-in-out w-auto h-[150px]"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div
          className="mt-[30px] px-6 py-2 rounded-4xl bg-slate-800/50
            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
        >
          <p className="text-gray-300 text-lg select-none">Supplies</p>
        </div>
        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#0f172b"
            gradientWidth="100px"
            direction="left"
            autoFill
          >
            {suppliesImages.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center
                  mr-[10px] w-[150px]"
              >
                <img
                  src={src}
                  className="grayscale-100 hover:grayscale-0
                        duration-300 ease-in-out w-auto h-[150px]"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CategoriesUI;
