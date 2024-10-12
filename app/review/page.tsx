// app/page.tsx
"use client"
import React from 'react';
import GameReview from '../components/GameReview';

const Page: React.FC = () => {
  return (
    <div>
      <h1>Chess Review App</h1>
      <GameReview />
    </div>
  );
};

export default Page;
