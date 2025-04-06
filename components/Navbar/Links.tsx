import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Briefcase, Code, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const Links = () => {
  const pathname = usePathname();

  const links = [
    {
      href: '/blog',
      label: 'Blog',
      icon: Book,
    },
    {
      href: '/experience',
      label: 'Experience',
      icon: Briefcase,
    },
    {
      href: '/projects',
      label: 'Projects',
      icon: Code,
    },
    {
      href: '/resume',
      label: 'Resume',
      icon: FileText,
    },
  ];

  return (
    <div className='flex items-center gap-6'>
      {links.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'flex items-center gap-2.5 px-3 py-2 text-base font-medium transition-colors',
            'hover:text-blue-600',
            pathname === href ? 'text-blue-600' : 'text-gray-600'
          )}>
          <Icon className='h-5 w-5' />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Links;
