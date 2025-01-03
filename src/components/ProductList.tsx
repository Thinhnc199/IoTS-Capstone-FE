import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setProducts } from '../store/slices/productSlice';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    // API gọi sản phẩm
    dispatch(setProducts([
      { id: '1', name: 'IoT Sensor A', price: 100, description: 'Sensor A', image: '../src/assets/connected-technology.jpg' },
      { id: '2', name: 'IoT Module B', price: 200, description: 'Module B', image: '../src/assets/connected-technology.jpg' },
    ]));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-blue-500">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
