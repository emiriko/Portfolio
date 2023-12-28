import Link from 'next/link'
import Image from 'next/image'
import { MENU } from './constant'
import { useRouter } from 'next/router'
export const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between items-center py-4 max-w-7xl w-full px-16">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Image
              src="/assets/images/Logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <h1 className="font-bold text-white"> Alvaro&apos; Portfolio </h1>
        </div>
        <div className="flex gap-x-8">
          {MENU.map(({ label, href }, key) => (
            <Link
              href={href}
              key={key}
              className={`${
                href === router.asPath ? 'text-white' : 'text-gray'
              } font-bold hover:text-white hover:underline duration-300`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
