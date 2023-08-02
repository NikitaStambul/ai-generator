'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Settings,
} from 'lucide-react';

import FreeCounter from '@/components/FreeCounter';
import { cn } from '@/lib/utils';
import { tools } from '@/constants';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  ...tools,
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

interface SidebarProps {
  apiLimitCount: number;
}

export default function Sidebar({ apiLimitCount }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-zinc-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn(montserrat.className, 'text-2xl font-bold')}>
            AI Generator
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400',
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  );
}
