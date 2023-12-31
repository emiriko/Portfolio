import Link from 'next/link'
import { menu, socialMedia } from './constant'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-dark" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="border-t lg:border-gray flex justify-center">
        <div className="container">
          <div className="flex flex-col space-y-4 py-6">
            <div className="flex items-center justify-center space-x-8">
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={'_blank'}
                  className="animated-underline inline-flex items-center justify-center text-xs font-semibold hover:text-white duration-200 sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-8">
              {socialMedia.map(({ icon, ...item }, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {<i> {icon} </i>}
                  <Link
                    href={item.href}
                    target={'_blank'}
                    className="animated-underline text-xs font-semibold hover:text-white duration-200 sm:text-sm"
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

      <div className="border-t lg:border-gray flex justify-center px-8">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-4 items-center justify-between py-6">
            <div className="flex items-center gap-x-2">
              <FaGithub />
              <Link
                href="https://www.github.com/emilicos"
                target={'_blank'}
                className="text-xs font-semibold sm:text-sm"
              >
                <span className="hidden md:block hover:text-white duration-200">
                  {' '}
                  github.com/emiriko{' '}
                </span>
                <span className="block md:hidden hover:text-white duration-200">
                  {' '}
                  My GitHub{' '}
                </span>
              </Link>
            </div>
            <p className="flex items-center justify-center text-xs font-semibold sm:text-sm">
              ©{new Date().getFullYear()} - Alvaro Austin . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
