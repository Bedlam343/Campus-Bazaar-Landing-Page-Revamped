import fs from 'fs';
import path from 'path';
import CategoriesUI from './CategoriesUI';

const getCarouselImages = (finalDir: string) => {
  // Get the absolute path to the public directory
  const directoryPath = path.join(
    process.cwd(),
    `public/images/carousel/${finalDir}`,
  );

  // Read filenames from the directory
  const files = fs.readdirSync(directoryPath);

  // Map to public URLs (e.g., '/images/carousel/clothing/shirt.png')
  return files.map((file) => `/images/carousel/${finalDir}/${file}`);
};

const Categories = () => {
  const electronics = getCarouselImages('electronics');
  const clothing = getCarouselImages('clothing');
  const supplies = getCarouselImages('supplies');

  return (
    <CategoriesUI
      electronicsImages={electronics}
      clothingImages={clothing}
      suppliesImages={supplies}
    />
  );
};

export default Categories;
