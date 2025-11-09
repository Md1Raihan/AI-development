interface Skill {
  name: string
  level: number
  category: string
}

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      
      <p className="text-sm text-gray-500">{skill.category}</p>
    </div>
  )
}

