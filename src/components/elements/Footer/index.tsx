import Image from 'next/image'
import Link from 'next/link'
import { menu, socialMedia } from './constant'

export const Footer = () => {
  return (
    <footer className="bg-white pt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="border-t lg:border-slate-200 flex justify-center">
        <div className="container">
          <div className="flex flex-col space-y-4 py-6">
            <div className="flex items-center justify-center space-x-8">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={'_blank'}
                  className="animated-underline inline-flex items-center justify-center text-xs font-semibold hover:text-slate-700 sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-8">
              {socialMedia.map(({ icon, ...item }, index) => (
                <div key={index} className="group flex items-center space-x-2">
                  <div className="relative cursor-pointer">
                    <Image
                      src={icon}
                      alt={'github'}
                      width={20}
                      height={20}
                      className="object-fill fill-inherit w-[20px] h-[20px]"
                      priority
                    />
                  </div>
                  <Link
                    href={item.href}
                    target={'_blank'}
                    className="animated-underline text-xs font-semibold hover:text-slate-700 sm:text-sm"
                  >
                    <span className="block md:hidden">{item.name}</span>
                    <span className="hidden md:block">{item.username}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t lg:border-slate-200 flex justify-center">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <Link
              href="https://www.github.com/emilicos"
              target={'_blank'}
              className="flex items-center justify-center space-x-2 text-xs font-semibold hover:text-slate-800 sm:text-sm gap-x-2"
            >
              <div className="relative cursor-pointer">
                <Image
                  src={'/assets/icons/github.svg'}
                  alt={'github'}
                  width={20}
                  height={20}
                  className="object-fill fill-inherit w-[20px] h-[20px]"
                  priority
                />
              </div>
              <span className="hidden md:block"> github.com/emilicos </span>
              <span className="block md:hidden"> My GitHub </span>
            </Link>

            <p className="flex items-center justify-center space-x-4 text-xs font-semibold sm:text-sm">
              © {new Date().getFullYear()} -
              <Link href="/" className="ml-1 text-slate-800">
                Alvaro Austin
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
