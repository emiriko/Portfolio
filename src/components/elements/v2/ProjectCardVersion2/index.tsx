import Image from 'next/image'
import { ProjectCardProps } from './interface'
import { FaArrowsToDot } from 'react-icons/fa6'
import { Button } from '../../Button'
import { MdCached } from 'react-icons/md'

export const ProjectCardVersion2: React.FC<ProjectCardProps> = ({
  identify,
  title,
  description,
  foto,
}) => (
  <div className="w-full border border-gray flex-col justify-start items-start rounded-md drop-shadow-lg">
    <div className="relative w-full">
      <Image
        src={foto[0]}
        alt={identify}
        width={400}
        height={400}
        className="object-fill fill-inherit relative w-full h-fit border-b border-gray rounded-t-md"
        priority
      />
    </div>
    <div className="inline-flex gap-x-2 px-4 py-2">
      <span className="text-gray text-base font-normal">HTML</span>
    </div>
    <div className="p-4 border-t border-gray flex flex-col justify-start items-start gap-4">
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      <p className="text-gray text-base flex-1">{description}</p>
      <div className="flex gap-4 flex-wrap h-full">
        <Button icon={<FaArrowsToDot height={16} width={16} />}>Live</Button>
        <Button
          icon={<MdCached height={16} width={16} />}
          className="bg-transparent text-gray border-gray hover:bg-gray "
        >
          {' '}
          Cached{' '}
        </Button>
      </div>
    </div>
  </div>
)
