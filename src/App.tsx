import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { PriceCard } from './components/PriceCard';
import { MarketTrends } from './components/MarketTrends';
import { MarketInsights } from './components/MarketInsights';
import { Footer } from './components/Footer/Footer';
import { About } from './pages/About';
import { products } from './data/products';
import { LanguageProvider } from './context/LanguageContext';

function Home({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (query: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = 
        product.name.bn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.en.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <MarketInsights products={products} />
      <MarketTrends products={products} />
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <PriceCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} onSearchChange={setSearchQuery} />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}