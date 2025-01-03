import React from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">IoTs Marketplace</h1>
      <ProductList />
    </div>
  );
};

export default App;
