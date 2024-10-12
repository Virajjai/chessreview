// /app/components/Header.tsx
'use client'; // Mark this component as a client component

import React from 'react';
import { useRouter } from 'next/navigation';


const Header = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login'); // Redirect to login page
    };

    const handleSignup = () => {
        router.push('/signup'); // Redirect to signup page
    };

    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#000000', // Dark gray background
                color: 'white',
                padding: '1px 5px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
            }}
        >
            {/* Logo Section */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img
                    src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-chess-knight-role-logo-vector-png-image_4694174.png" 
                    alt="Chess Review Logo"
                    width={70}
                    height={50}
                    style={{ marginRight: '1rem' }}
                />
                <h1
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        margin: 0,
                    }}
                >
                    Chess Review
                </h1>
            </div>

            {/* Login/Signup Buttons */}
            <div>
                <button
                    onClick={handleLogin}
                    style={{
                        backgroundColor: '#2563eb', // Blue button color
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        marginRight: '1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
                <button
                    onClick={handleSignup}
                    style={{
                        backgroundColor: '#10b981', // Green button color
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Signup
                </button>
            </div>
        </header>
    );
};

export default Header;
