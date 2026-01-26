import { ToolCard } from "@/components/tool-card"
import { Sparkles, Database, Workflow, Palette, Cloud, Code } from "lucide-react"

const toolCategories = [
  {
    title: "Storage & Databases",
    icon: Database,
    description: "Data storage, management, and retrieval solutions",
    color: "from-blue-500/20 to-cyan-500/20",
    tools: [
      {
        name: "Supabase",
        description: "Open-source Firebase alternative with PostgreSQL database and authentication",
        url: "https://supabase.com",
        logo: "https://img.logo.dev/supabase.com?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
      },
      {
        name: "Airtable",
        description: "Flexible database and spreadsheet hybrid for organizing work and data",
        url: "https://airtable.com",
        logo: "https://img.logo.dev/airtable.com?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
      },
      {
        name: "ChromaDB",
        description: "Vector database for embeddings and AI applications with semantic search",
        url: "https://trychroma.com",
        logo: "https://img.logo.dev/trychroma.com?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
      }
    ]
  },
  {
    title: "AI Workflows & Agents",
    icon: Workflow,
    description: "Orchestration and automation for AI-powered processes",
    color: "from-purple-500/20 to-pink-500/20",
    tools: [
      {
        name: "n8n",
        description: "Workflow automation platform connecting apps and services with visual programming",
        url: "https://n8n.io",
        logo: "https://img.logo.dev/n8n.io?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-rose-500/20 to-pink-500/20"
      },
      {
        name: "CrewAI",
        description: "Multi-agent AI workflows and orchestration framework for complex tasks",
        url: "https://crewai.com",
        logo: "https://img.logo.dev/crewai.com?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
      },
      {
        name: "OpenRouter",
        description: "Unified API gateway for accessing multiple AI models from different providers",
        url: "https://openrouter.ai",
        logo: "https://img.logo.dev/openrouter.ai?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
      }
    ]
  },
  {
    title: "Content Generation",
    icon: Palette,
    description: "Tools for creating, converting, and visualizing content",
    color: "from-orange-500/20 to-red-500/20",
    tools: [
      {
        name: "V0",
        description: "AI-powered generative UI tool for creating React components with prompts",
        url: "https://v0.dev",
        logo: "https://img.logo.dev/v0.dev?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-slate-500/20 to-zinc-500/20"
      },
      {
        name: "Streamlit",
        description: "Python framework for building interactive data science and ML web applications",
        url: "https://streamlit.io",
        logo: "https://img.logo.dev/streamlit.io?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-red-500/20 to-rose-500/20"
      },
      {
        name: "APITemplate",
        description: "Automated image and PDF generation API from templates for dynamic content",
        url: "https://apitemplate.io",
        logo: "https://img.logo.dev/apitemplate.io?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
      },
      {
        name: "QuickChart",
        description: "Chart generation API creating beautiful visualizations from data instantly",
        url: "https://quickchart.io",
        logo: "https://img.logo.dev/quickchart.io?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20"
      }
    ]
  },
  {
    title: "Data Processing & APIs",
    icon: Code,
    description: "Extract, parse, and process data from various sources",
    color: "from-green-500/20 to-emerald-500/20",
    tools: [
      {
        name: "Firecrawl",
        description: "Web scraping API that converts websites into clean markdown for AI applications",
        url: "https://firecrawl.dev",
        logo: "https://img.logo.dev/firecrawl.dev?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
      },
      {
        name: "LlamaParse",
        description: "Document parsing service for converting complex PDFs into structured data",
        url: "https://cloud.llamaindex.ai",
        logo: "https://img.logo.dev/llamaindex.ai?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
      },
      {
        name: "Serper",
        description: "Fast and reliable Google Search API for retrieving search results programmatically",
        url: "https://serper.dev",
        logo: "https://img.logo.dev/serper.dev?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-sky-500/20 to-blue-500/20"
      },
      {
        name: "Alpha Vantage",
        description: "Real-time and historical financial market data API for stocks and cryptocurrencies",
        url: "https://alphavantage.co",
        logo: "https://img.logo.dev/alphavantage.co?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20"
      }
    ]
  },
  {
    title: "Infrastructure & Deployment",
    icon: Cloud,
    description: "Platforms for hosting, deploying, and scaling applications",
    color: "from-cyan-500/20 to-blue-500/20",
    tools: [
      {
        name: "Vercel",
        description: "Frontend cloud platform for deploying and hosting modern web applications",
        url: "https://vercel.com",
        logo: "https://img.logo.dev/vercel.com?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-gray-500/20 to-slate-500/20"
      },
      {
        name: "Railway",
        description: "Infrastructure platform for deploying apps with instant provisioning and scaling",
        url: "https://railway.app",
        logo: "https://img.logo.dev/railway.app?token=pk_Qzgj49QfRWuBhsTm3deRKQ",
        bgColor: "bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20"
      }
    ]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Dominant Header */}
      <header className="border-b-2 border-border bg-gradient-to-r from-card via-card/95 to-card">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex items-center gap-5 lg:gap-6">
            <div className="flex h-16 w-16 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30">
              <Sparkles className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" />
            </div>
            <h1 className="text-6xl font-black tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              AI Tool Repertoire
            </h1>
          </div>
        </div>
      </header>

      {/* Tools by Category */}
      <main className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {toolCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <section key={category.title} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${category.color}`}>
                    <IconComponent className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {category.tools.map((tool) => (
                    <ToolCard
                      key={tool.name}
                      name={tool.name}
                      description={tool.description}
                      url={tool.url}
                      logo={tool.logo}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground">
            Click any tool card to visit its official website and explore more features
          </p>
        </div>
      </footer>
    </div>
  )
}
