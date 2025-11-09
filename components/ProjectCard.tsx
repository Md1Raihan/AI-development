interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl: string
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <div className="text-primary-600 text-4xl font-bold">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center btn-primary text-sm"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center btn-secondary text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

