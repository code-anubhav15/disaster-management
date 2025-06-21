'use client';

import { useRouter, usePathname } from 'next/navigation';

const HomeLink = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // Already on home page: just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className="h-12 w-12 flex items-center justify-center border-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-gray-600"
      title="Home"
    >
      <i className="fas fa-home" />
    </a>
  );
};

export default HomeLink;
