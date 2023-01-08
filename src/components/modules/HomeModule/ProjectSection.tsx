import { ProjectCard, TitleHeading } from '@elements'
import { PROJECT_DATA } from './constant'

export const ProjectSection: React.FC = () => (
  <div className="mx-8 mb-8 flex flex-col items-center ">
    <div className="max-w-[1800px] w-full">
      <div className="flex flex-col">
        <TitleHeading> Project </TitleHeading>
        <div className="flex flex-wrap gap-x-8 md:justify-around justify-center gap-y-8">
          {PROJECT_DATA.map(({ title, description, foto, children }, key) => (
            <ProjectCard
              title={title}
              description={description}
              foto={foto}
              key={key}
            >
              {children}
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  </div>
)
