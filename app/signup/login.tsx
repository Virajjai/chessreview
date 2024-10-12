// app/signup/page.tsx
"use client";

import { signIn } from 'next-auth/react';
import { FC } from 'react';

const Signup: FC = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <button onClick={() => signIn()}>Sign up with Chess.com ID</button>
    </div>
  );
};

export default Signup;
