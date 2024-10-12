// app/login/page.tsx
"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [chessId, setChessId] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // Sign in using NextAuth
    const result = await signIn('credentials');
    if (result?.ok) {
      localStorage.setItem('chess_id', chessId);
      router.push('/profile');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your Chess.com ID"
        value={chessId}
        onChange={(e) => setChessId(e.target.value)}
      />
      <button onClick={handleLogin}>Log in with Chess.com ID</button>
    </div>
  );
};

export default Login;
