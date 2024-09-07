// src/pages/Shop.tsx
import React from 'react';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Luxury Carpet', price: '$200', image: 'https://imgs.search.brave.com/eO8Jo46_PQi_Qf_xvquX_WpOgzkb27DAaFoVkws6gx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjQ3NjQ3L3Bob3Rv/L2NhcnBldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUM2/SXRWcE01ZGJKdzlC/THA3MVExXzRqMFBR/NzVuaUJ3M1RGQ3dX/TzR6RGs9' },
    { id: 2, name: 'Modern Mat', price: '$50', image: 'https://imgs.search.brave.com/eO8Jo46_PQi_Qf_xvquX_WpOgzkb27DAaFoVkws6gx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjQ3NjQ3L3Bob3Rv/L2NhcnBldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUM2/SXRWcE01ZGJKdzlC/THA3MVExXzRqMFBR/NzVuaUJ3M1RGQ3dX/TzR6RGs9' },
    // Add more products
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
