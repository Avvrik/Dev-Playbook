import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Zap, Shield, Globe, Star, FileCode, ExternalLink } from 'lucide-react'

// Template for new resource pages (like code-examples, courses, etc.)
// Replace the content below with your specific resources

const resources = [
  {
    category: 'Category Name',
    description: 'Description of this category of resources',
    examples: [
      {
        title: 'Resource Title',
        description: 'Brief description of the resource',
        language: 'Language/Framework',
        complexity: 'Beginner/Intermediate/Advanced',
        githubUrl: 'https://github.com/example/repo',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        icon: Code,
      },
      // Add more resources as needed
    ],
  },
  // Add more categories as needed
]

export default function ResourceTemplatePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#73FDEA] hover:text-[#FF00AA] mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-4">Resource Page Title</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Brief description of what this resource page contains and how it helps developers.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((category) => (
            <div key={category.category} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-white mb-2">{category.category}</h2>
                <p className="text-white/80">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.examples.map((example) => (
                  <a
                    key={example.title}
                    href={example.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-white/20 rounded-lg hover:border-white/40 hover:bg-[#2a2a2a] transition-all duration-300 bg-[#2a2a2a] group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#FF00AA] to-[#8E1CF1] rounded-lg flex items-center justify-center">
                        <example.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-[#73FDEA] transition-colors duration-300 mb-2">
                          {example.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-3">
                          {example.description}
                        </p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 text-xs text-white/70">
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {example.language}
                            </span>
                            <span className="inline-block bg-[#1a1a1a] text-white/70 px-2 py-1 rounded border border-white/20">
                              {example.complexity}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {example.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-[#1a1a1a] text-white/60 text-xs px-2 py-1 rounded border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-[#73FDEA] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#8E1CF1] to-[#FF00AA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Share Your Resources</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Have a great resource to share? Help other developers by contributing to our collection.
          </p>
          <a
            href="https://github.com/Avvrik/Dev-Playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#8E1CF1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
          >
            Submit Resource
            <Code className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
} 