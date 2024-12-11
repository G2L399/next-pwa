'use client'
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import('../components/Map'), { ssr: false });

const MapPage = () => {
  return (
    <div>
      <h1>Our Outlets</h1>
      <Map />
    </div>
  );
};

export default MapPage;
