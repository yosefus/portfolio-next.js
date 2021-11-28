import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div>
      <h1>not found</h1>
    </div>
  );
}
