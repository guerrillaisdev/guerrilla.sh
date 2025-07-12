'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

export default function ProductsPage() {
  const t = useTranslations('ProductsPage');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCheckout = async (product: Product) => {
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const session = await response.json();

    const result = await stripe!.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col">
            <div className="relative w-full h-48 mb-4">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mt-auto">
              {product.price} {product.currency}
            </p>
            <button
              onClick={() => handleCheckout(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            >
              {t('buyNow')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}