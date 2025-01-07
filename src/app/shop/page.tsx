'use client';

import React from 'react';
import ShopClient from '../components/ShopClient';
import CheckoutPage from '../checkout/page';

const ShopPage = () => {
  return (
    <div>
    <ShopClient />
    <CheckoutPage />
    </div>
    
  );
};

export default ShopPage;