// /components/PrivateRoute.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';


const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return <>{children}</>;
};

export default PrivateRoute;
