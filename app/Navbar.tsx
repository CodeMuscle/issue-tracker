'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classnames from 'classnames';


import { AiFillBug } from 'react-icons/ai'


const Navbar = () => {

  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={'/'}>
        <AiFillBug className="w-5 h-5 text-zinc-800 hover:text-zinc-900 transition-colors" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label} className={classnames({
            'text-zinc-900' : link.href === currentPath,
            'text-zinc-500' : link.href !== currentPath,
            'hover:text-zinc-800 transition-colors': true
          })}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar