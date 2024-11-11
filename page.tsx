"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, BarChart, PieChart, TrendingUp, Database, FileSpreadsheet, Brain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart as BarChartComponent, LineChart } from '@/components/ui/chart'

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    { 
      title: "Intelligent Machine Learning Script Generator (MLAutoGen)", 
      description: "Developed MLAutoGen using LLaMA 3.1 8B Instruct, accelerating model selection, training, and evaluation by 60%.",
      image: "/placeholder.svg?height=200&width=300&text=MLAutoGen",
      tags: ["Python", "LLaMA 3.1 8B Instruct", "Streamlit", "Gen AI"],
      category: "machine-learning"
    },
    { 
      title: "Innovative Data Analysis Suite: ExploraGen", 
      description: "Engineered ExploraGen, reducing exploratory data analysis and pre-processing time by 70%.",
      image: "/placeholder.svg?height=200&width=300&text=ExploraGen",
      tags: ["Python", "LLaMA 3.1 8B Instruct", "Streamlit", "Gen AI"],
      category: "data-analysis"
    },
    { 
      title: "Sentiment Analysis of Amazon Alexa Reviews", 
      description: "Utilized NLP models to analyze 3,150 Amazon Alexa reviews, achieving 93% accuracy in sentiment classification.",
      image: "/placeholder.svg?height=200&width=300&text=Sentiment+Analysis",
      tags: ["Word Cloud", "NLTK", "Naive Bayes", "Logistic Regression"],
      category: "machine-learning"
    },
    { 
      title: "Data-Driven Retail Growth", 
      description: "Enhanced sales forecasting accuracy by 25% through predictive models, aiding better inventory management.",
      image: "/placeholder.svg?height=200&width=300&text=Retail+Growth",
      tags: ["Python", "Plotly", "Facebook Prophet"],
      category: "data-analysis"
    },
    { 
      title: "Customer Segmentation Analysis", 
      description: "Conducted customer segmentation using K-Means clustering on 8,950 records for personalized marketing strategies.",
      image: "/placeholder.svg?height=200&width=300&text=Customer+Segmentation",
      tags: ["K-Means Clustering", "Pandas", "NumPy"],
      category: "data-analysis"
    },
    { 
      title: "Employee Attrition Analysis", 
      description: "Supplied a predictive model with 95% accuracy in forecasting employee departures.",
      image: "/placeholder.svg?height=200&width=300&text=Employee+Attrition",
      tags: ["Random Forest", "Neural Networks", "Logistic Regression"],
      category: "machine-learning"
    },
  ]

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <Avatar className="w-32 h-32 mb-8">
          <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Ankit Kumar" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Ankit Kumar
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-4">
          Data Analyst | Turning complex data into actionable insights
        </p>
        <div className="flex mt-8 space-x-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">About Me</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>My Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As a Data Analyst with a strong foundation in Python, SQL, and machine learning, I specialize in transforming complex datasets into clear, actionable insights. 
                My experience spans from web scraping and data preprocessing to advanced analytics and predictive modeling.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>My Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I believe in a data-driven approach to problem-solving, combining technical skills with business acumen. 
                My goal is to not just analyze data, but to tell compelling stories that drive strategic decision-making and create tangible value for organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 sm:py-32 bg-muted/50">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">My Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Data Analysis", icon: <BarChart className="h-8 w-8 mb-2" /> },
            { name: "Machine Learning", icon: <Brain className="h-8 w-8 mb-2" /> },
            { name: "Data Visualization", icon: <PieChart className="h-8 w-8 mb-2" /> },
            { name: "Statistical Modeling", icon: <TrendingUp className="h-8 w-8 mb-2" /> },
            { name: "Database Management", icon: <Database className="h-8 w-8 mb-2" /> },
            { name: "Excel", icon: <FileSpreadsheet className="h-8 w-8 mb-2" /> },
            "Python", "SQL", "Power BI", "Web Scraping",
            "Generative AI", "Prompt Engineering", "Cluster Analysis", "Regression Modelling",
            "Forecasting", "Decision Trees", "Time Series Analysis", "Research"
          ].map((skill, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-4">
              <CardContent className="text-center font-semibold">
                {typeof skill === 'string' ? skill : (
                  <>
                    {skill.icon}
                    {skill.name}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>
        <Card>
          <CardHeader>
            <CardTitle>Data Intern</CardTitle>
            <CardDescription>NYXify Technologies, Bengaluru, India | March 2024 - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Managed a team of six interns in a web scraping project, achieving 95% data extraction efficiency and meeting deadlines.</li>
              <li>Engineered Python scripts to automate dataset collection and pre-processing, cutting manual labor by 86%.</li>
              <li>Implemented real-time data collection from 10 websites, doubling data freshness with over a million images and videos.</li>
              <li>Oversaw product quality and performance throughout development, surpassing performance benchmarks.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Charts Section */}
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Data Visualization Samples</h2>
        <Tabs defaultValue="bar" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="line">Line Chart</TabsTrigger>
          </TabsList>
          <TabsContent value="bar">
            <Card>
              <CardHeader>
                <CardTitle>Project Efficiency Improvement</CardTitle>
                <CardDescription>Comparison of efficiency gains across different projects</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BarChartComponent
                  config={{
                    mlautogen: {
                      label: "MLAutoGen",
                      color: "hsl(var(--chart-1))",
                    },
                    exploragen: {
                      label: "ExploraGen",
                      color: "hsl(var(--chart-2))",
                    },
                    webScraping: {
                      label: "Web Scraping",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  data={[
                    { project: "MLAutoGen", mlautogen: 60, exploragen: 0, webScraping: 0 },
                    { project: "ExploraGen", mlautogen: 0, exploragen: 70, webScraping: 0 },
                    { project: "Web Scraping", mlautogen: 0, exploragen: 0, webScraping: 86 },
                  ]}
                  className="h-[400px]"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="line">
            <Card>
              <CardHeader>
                <CardTitle>Model Accuracy Trends</CardTitle>
                <CardDescription>Accuracy improvements over time for different models</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart
                  config={{
                    sentimentAnalysis: {
                      label: "Sentiment Analysis",
                      color: "hsl(var(--chart-1))",
                    },
                    employeeAttrition: {
                      label: "Employee Attrition",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  data={[
                    { month: "Jan", sentimentAnalysis: 85, employeeAttrition: 88 },
                    { month: "Feb", sentimentAnalysis: 88, employeeAttrition: 90 },
                    { month: "Mar", sentimentAnalysis: 90, employeeAttrition: 92 },
                    { month: "Apr", sentimentAnalysis: 92, employeeAttrition: 93 },
                    { month: "May", sentimentAnalysis: 93, employeeAttrition: 95 },
                  ]}
                  className="h-[400px]"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Featured Projects</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="data-analysis">Data Analysis</TabsTrigger>
            <TabsTrigger value="machine-learning">Machine Learning</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Education and Certifications Section */}
      <section className="container py-24 sm:py-32 bg-muted/50">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Education & Certifications</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Bachelors in Computer Applications</h3>
                  <p>Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu</p>
                  <p>CGPA: 7, 2021 - 2024</p>
                </li>
                <li>
                  <h3 className="font-semibold">PGP in Data Science and Machine Learning</h3>
                  <p>Intellipat, 2023 - 2024</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Google Data Analytics - Google</li>
                <li>MS SQL Developer Course - Intellipaat</li>
                <li>Machine Learning Specialization - Deeplearning.AI</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Interested in working together? Let's connect!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                <textarea id="message" placeholder="Your message here..." className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-12 flex justify-center space-x-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/Ankit-KK" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-8 h-8" />
                  <span className="sr-only">GitHub</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Check out my GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://linkedin.com/in/ankit-kumar-a8521a252" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="w-8 h-8" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect on LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="mailto:ankitashuk20@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="w-8 h-8" />
                  <span className="sr-only">Email</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send me an email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
    </div>
  )
}
