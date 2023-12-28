import Link from 'next/link'
import { ProjectCardProps } from 'src/components/elements/v1/ProjectCard/interface'
import {
  ExperienceComponentProps,
  ExperienceDescriptionProps,
  SocialMediaProps,
} from './interface'

export const NAME: string = 'Alvaro Austin'

export const DESCRIPTION_TEXT: string =
  'Inquisitive, energetic, skilled and knowledgeable computer science student with extensive knowledge of programming. Seeking to leverage solid skills in collaboration and communication. A committed programmer with the intention to contribute my expertise to be a dependable team member. Excited to find opportunities to improve myself.'

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    url: 'https://www.linkedin.com/in/alvaro-austin/',
    src: '/assets/icons/linkedin.svg',
    alt: 'linkedin',
  },
  {
    url: 'https://www.github.com/emilicos',
    src: '/assets/icons/github.svg',
    alt: 'github',
  },
  {
    url: 'https://www.gitlab.com/emilicos',
    src: '/assets/icons/gitlab.svg',
    alt: 'gitlab',
  },
]

export const WORK_EXPERIENCE: ExperienceComponentProps[] = [
  {
    logo: '/assets/icons/perak2023.svg',
    alt: 'perak2023',
    job: 'Senior Staff of Web Development PERAK 2023',
    workplace: 'PERAK 2023',
    interval: 'Desember 2022 - present',
    stack: 'Next.js, T3App, Tailwind CSS',
  },
  {
    logo: '/assets/icons/pemira2023.svg',
    alt: 'pemira2023',
    job: 'Web Developer PEMIRA 2022',
    workplace: 'PEMIRA 2022',
    interval: 'Oktober 2022 - Januari 2023',
    stack: 'Next.js, Material UI, NestJs',
  },
  {
    logo: '/assets/icons/educare2023.svg',
    alt: 'educare2023',
    job: 'VPIC of IT Development EDUCARE 2023',
    workplace: 'EDUCARE 2023',
    interval: 'September 2022 - Januari 2023',
    stack: 'Next.js, Material UI, Tailwind CSS, Django Rest Framework',
  },
  {
    logo: '/assets/icons/betis2023.svg',
    alt: 'betis2023',
    job: 'VPIC of Web Development BETIS 2023',
    workplace: 'BETIS 2023',
    interval: 'Oktober 2022 - Januari 2023',
    stack: 'Next.js, Tailwind CSS, Django Rest Framework',
  },
  {
    logo: '/assets/icons/oh2022.svg',
    alt: 'oh2022',
    job: 'Web Developer Open House Fasilkom UI 2022',
    workplace: 'Open House Fasilkom UI 2022',
    interval: 'Mei 2022 - Juli 2022',
    stack: 'React, Tailwind CSS, Express, Node.js, MongoDB',
  },
  {
    logo: '/assets/icons/okkui2022.svg',
    alt: 'okkui2022',
    job: 'Web Developer OKK UI 2022',
    workplace: 'OKK UI 2022',
    interval: 'Mei 2022 - Juli 2022',
    stack: 'React, Tailwind CSS, Express, Node.js, MongoDB',
  },
  {
    logo: '/assets/icons/bemfasilkomui.svg',
    alt: 'bemfasilkomui',
    job: 'Full Stack Developer BEM Fasilkom UI 2022',
    workplace: 'BEM Fasilkom UI 2022',
    interval: 'April 2022 - Januari 2023',
    stack:
      'React, Next.js, Styled Components, Tailwind CSS, Django Rest Framework, Go (golang), Chakra UI',
  },
]

export const EXPERIENCE_DESCRIPTION: ExperienceDescriptionProps = {
  'PERAK 2023': (
    <>
      <p>
        {' '}
        PERAK (Pesta Rakyat Komputer) is the largest internal event at Fasilkom
        which aims to maintain a sense of kinship between elements and as a
        place for refreshment from academic activities.{' '}
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://perak.cs.ui.ac.id/" target={'_blank'}>
          {' '}
          https://perak.cs.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
  'BETIS 2023': (
    <>
      <p>
        {' '}
        BETIS is an event initiated by BEM Fasilkom Community Service
        Department. BETIS is a free study course for those who wish to enter
        State Universities in the following year.{' '}
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://betis.cs.ui.ac.id/" target={'_blank'}>
          {' '}
          https://betis.cs.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
  'EDUCARE 2023': (
    <>
      <p>
        {' '}
        Educare is a collection of series of events that aim to help and
        facilitate students who are still confused in determining their career
        life.{' '}
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://educare.cs.ui.ac.id/" target={'_blank'}>
          {' '}
          https://educare.cs.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
  'PEMIRA 2022': (
    <>
      <p>
        {' '}
        Pemira is a forum for leadership regeneration of the executive and
        legislative institutions at the Fasilkom and UI levels. Pemira is held
        as a forum for prospective leaders in IKM Fasilkom to nominate
        themselves.{' '}
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://pemira.cs.ui.ac.id/" target={'_blank'}>
          {' '}
          https://pemira.cs.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
  'Open House Fasilkom UI 2022': (
    <>
      <p>
        {' '}
        The Fasilkom Open House is an external event that introduces Fasilkom to
        high school (or junior high school) friends and younger siblings who are
        still confused about choosing a major and want to know more about
        Fasilkom!{' '}
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://oh.cs.ui.ac.id/" target={'_blank'}>
          {' '}
          https://oh.cs.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
  'BEM Fasilkom UI 2022': (
    <>
      <p>
        BEM (Student Executive Body) of Fasilkom UI is a student organization at
        the University of Indonesia&apos;s Computer Science faculty level which
        carries out an executive role within Fasilkom UI.
        <br /> <br />
        This organization is a place for student actualization to maximize the
        potential interest in student talent and become the driving force for
        activities that fulfill the tridharma of higher education, as well as
        apply IT-based scientific disciplines.
        <br /> <br />
        This organization has a vision of building Fasilkom UI BEMs that are
        relevant and useful for Fasilkom UI, UI and Indonesia.
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://bem.cs.ui.ac.id/" target={'_blank'}>
          {' '}
          https://bem.cs.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
  'OKK UI 2022': (
    <>
      <p>
        OKK or Campus Life Orientation is an activity to introduce and develop
        campus life for new students at the University of Indonesia. <br />{' '}
        <br />
        OKK is the beginning of the creation of togetherness among all students
        to be able to get to know each other and to introduce the direction of
        contribution found at the University of Indonesia.
      </p>
      <p className="text-deepblue">
        {' '}
        Used Website: <br />{' '}
        <Link href="https://okk.ui.ac.id/" target={'_blank'}>
          {' '}
          https://okk.ui.ac.id/{' '}
        </Link>{' '}
      </p>
    </>
  ),
}

export const PROJECT_DATA: ProjectCardProps[] = [
  {
    identify: 'educare',
    title: 'EDUCARE 2023',
    description: `Website for software engineers enthusiast.`,
    children: <></>,
    foto: ['/assets/images/educare-landing.png'],
  },
  {
    identify: 'betis',
    title: 'BETIS 2023',
    description: `A free platform for students aiming for state university admission.`,
    children: <></>,
    foto: ['/assets/images/betis-landing.png'],
  },
  {
    identify: 'open-house',
    title: 'Open House CS UI 2022',
    description: `Website endorsing Open House Fasilkom UI 2022`,
    children: <></>,
    foto: ['/assets/images/oh-landing.png'],
  },
  {
    identify: 'okk',
    title: 'OKK UI 2022',
    description: `OKK UI is a really popular event done by Univeristy of Indonesia commitees. For this website we used MERN stack to develop our website. My job is to deal with front end and integrating backend`,
    children: <></>,
    foto: ['/assets/images/okk-landing.png'],
  },
  {
    identify: 'pemira',
    title: 'PEMIRA 2022',
    description: `Our job is to make e-voting for Fasilkom UI students to vote for new candidate of BEM Fasilkom UI. NestJs and Next.Js were used as stack. I managed both frontend and backend to make e-voting feature. `,
    children: <></>,
    foto: ['/assets/images/pemira-landing.png'],
  },
  {
    identify: 'bem',
    title: 'BEM Fasilkom UI 2022',
    description: `Bunch of projects were created and mainly used React JS and Next.js for frontend and DRF and Golang for Backend. In this organization I tried both frontend and backend. `,
    children: <></>,
    foto: ['/assets/images/bem-landing.png'],
  },
]
