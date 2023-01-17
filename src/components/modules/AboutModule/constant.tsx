import { TechStackProps } from './interface'

export const ABOUT_DESCRIPTION: React.ReactNode = (
  <p className="md:leading-10 min-[426px]:leading-8 leading-6 md:text-xl text-justify min-[426px]:text-base text-xs">
    {' '}
    I&apos;m a university student studying computer science in University of
    Indonesia. I joined as a student in 2021. Although, I&apos;m intrigued on
    every branch in computer science career path, I started began my interest in
    Web Development on April 2022. After the spark of my interest, I started
    developing my skill as Web Developer in Frontend and Backend. At this point
    of time, I crave to be a full stack developer but the future career remain
    unsure. <br /> <br />
    Through my experience, I am considered a pretty{' '}
    <span className="font-bold"> fast learner </span>. Not only that, I&apos;m
    also an <span className="font-bold"> ambitious </span> and{' '}
    <span className="font-bold"> committed person </span>. Evidence of these
    qualities can be found from my experience being a best staff in BEM Fasilkom
    UI in just a month of doing web development. I was also offered several
    position as{' '}
    <span className="font-bold text-deepblue"> person in charge </span> in
    different commiitees. However I chose to be vice person in charge due to
    tight schedule and academics. <br /> <br />I believe I could prove more of
    my qualities if more opportunities were given to me. I&apos;m really open
    for collaborations. Hence, to know me more,{' '}
    <span className="font-bold text-deepblue"> you can checkout my CV </span>{' '}
    below!{' '}
  </p>
)

export const URL_CV: string =
  'https://docs.google.com/document/d/1xgvwySOpI_65RMAPcY_YEb49E-zEvtbhZItHfwxG8RI/edit?usp=sharing'
export const URL_PIC: string = '/assets/images/ProfilePict2.jpg'
export const ALT_PIC: string = 'ProfileAbout'

export const TECH_STACK: TechStackProps[] = [
  {
    url: 'https://reactjs.org/',
    stackName: 'React',
    icon: '/assets/icons/reactjs.svg',
    alt: 'reactjs',
  },
  {
    url: 'https://nextjs.org/',
    stackName: 'Next.js',
    icon: '/assets/icons/nextjs.svg',
    alt: 'nextjs',
  },
  {
    url: 'https://nestjs.com/',
    stackName: 'NestJs',
    icon: '/assets/icons/nestjs.svg',
    alt: 'nestjs',
  },
  {
    url: 'https://laravel.com/',
    stackName: 'Laravel',
    icon: '/assets/icons/laravel.svg',
    alt: 'laravel',
  },
  {
    url: 'https://create.t3.gg/',
    stackName: 'T3App',
    icon: '/assets/icons/t3app.svg',
    alt: 't3app',
  },
  {
    url: 'https://www.typescriptlang.org/',
    stackName: 'Typescript',
    icon: '/assets/icons/typescript.svg',
    alt: 'typescript',
  },
  {
    url: 'https://chakra-ui.com/',
    stackName: 'Chakra UI',
    icon: '/assets/icons/chakraui.svg',
    alt: 'chakraui',
  },
  {
    url: 'https://mui.com/',
    stackName: 'Material UI',
    icon: '/assets/icons/materialui.svg',
    alt: 'materialui',
  },
  {
    url: 'https://tailwindcss.com/',
    stackName: 'Tailwind CSS',
    icon: '/assets/icons/tailwind.svg',
    alt: 'tailwind',
  },
  {
    url: 'https://www.django-rest-framework.org/',
    stackName: 'Django Rest Framework',
    icon: '/assets/icons/drf.svg',
    alt: 'drf',
  },
  {
    url: 'https://www.mongodb.com/',
    stackName: 'MongoDB',
    icon: '/assets/icons/mongodb.svg',
    alt: 'mongodb',
  },
  {
    url: 'https://nodejs.org/en/',
    stackName: 'Node.js',
    icon: '/assets/icons/nodejs.svg',
    alt: 'nodejs',
  },
  {
    url: 'https://go.dev/',
    stackName: 'Go (golang)',
    icon: '/assets/icons/golang.svg',
    alt: 'golang',
  },
  {
    url: 'https://getbootstrap.com/',
    stackName: 'Bootstrap',
    icon: '/assets/icons/bootstrap.svg',
    alt: 'bootstrap',
  },
]
