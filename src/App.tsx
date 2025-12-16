import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  User,
  Briefcase,
  GraduationCap,
  Settings,
  Globe,
  Heart,
  Moon,
  Sun,
  ExternalLink,
  Calendar,
  Code,
  Database,
  GitBranch,
  Shield,
  Zap,
  Wrench,
  Target,
} from "lucide-react";
import { useMemo, useState } from "react";

// NOTE: Replace with your own photo (recommended)
// - If you're using the same environment as the sample, you can upload a PNG and reference it.
// - Otherwise, remove the <img /> and keep the initials avatar.
import profileImage from "../src/assets/img.png";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const me = useMemo(
    () => ({
      name: "MOHAMMAD JAFARIYAN KHOSROSHAHI",
      title: "Software Engineer",
      subtitle: "Full-Stack Developer (8+ yrs) • DevOps Engineer (1 yr)",
      location:
        "Armenia - Azerbaijan - Turkey -  Iran - etc - (Open to relocating)",
      email: "Mohammad.jafariyan7@gmail.com",
      phones: ["+98 914 898 0692", "+98 901 040 9293"],
      whatsapp: "https://wa.me/989148980692",
      telegram: "https://t.me/+9148980692",
      linkedin: "https://www.linkedin.com/in/mohammad-jafariyan7/",
      github: "https://github.com/Mohammadjafariyan",
      about:
        "I’m a highly skilled Full-Stack Developer with 8+ years of experience designing, developing, and deploying scalable, high-performance web applications. I’m also a motivated DevOps Engineer with 1 year of hands-on experience building and automating CI/CD pipelines, container deployments, and cloud infrastructure. My full-stack background helps me bridge development and operations to deliver reliable, secure, and scalable applications. I like automation, infrastructure as code, and continuous improvement — and I enjoy fast-paced, collaborative teams.",
      highlights: [
        "Full-stack: .NET + React/Next/Angular",
        "DevOps: CI/CD, Docker, Kubernetes, AWS",
        "Quality: Clean Architecture, TDD/DDD, E2E tests",
        "Built systems: CRM/ERP, payments, chat, KYC",
      ],
      skills: {
        "DevOps & Cloud": [
          "Docker",
          "Kubernetes",
          "AWS",
          "Jenkins",
          "GitHub Actions",
          "Grafana",
          "Prometheus",
          "Elasticsearch",
          "Linux",
        ],
        Backend: [
          "C#",
          ".NET Core",
          "ASP.NET MVC",
          "Microservices",
          "Node.js",
          "SignalR",
        ],
        Frontend: [
          "React",
          "Next.js",
          "Angular",
          "TypeScript",
          "JavaScript",
          "Razor Pages",
          "jQuery",
        ],
        Databases: ["MSSQL", "MySQL", "Oracle", "PostgreSQL"],
        Testing: ["NUnit", "xUnit", "Jest", "Cypress", "Playwright"],
        "Architecture & Practices": [
          "OOP",
          "Clean Architecture",
          "DDD",
          "TDD",
          "Agile/Scrum",
        ],
      },
      languages: [
        { label: "English", level: "Fluent" },
        { label: "Persian", level: "Fluent" },
        { label: "Turkish & Azerbaijani", level: "Native" },
      ],
      hobbies: [
        "Gym",
        "Books & library",
        "Learning new things",
        "Swimming",
        "Mountaineering",
      ],
      education: [
        {
          school: "Payame Noor University (Distance Education)",
          degree: "B.Sc. Computer Engineering",
          period: "Apr 2021 – May 2023",
        },
        {
          school: "University of Bonab",
          degree: "B.Sc. Computer Software Engineering",
          period: "Mar 2013 – Mar 2017",
        },
      ],
      experience: [
        {
          company: "Talavest",
          role: "Full stack developer and Devops Engineer",
          period: "Apr 2025 – Present",
          links: [
            {
              label: "Website",
              href: "https://talavest.com/",
            },
            {
              label: "Shop",
              href: "https://shop.talavest.com/",
            },
            {
              label: "Customers Dashboard",
              href: "https://my.talavest.com/",
            },
            {
              label: "Admin Panel",
              href: "https://panel.talavest.com/",
            },
          ],
          points: [
            "We developed a full Gold Investment Ecosystem",
            "talavest.com – Public website and brand presence",
            "shop.talavest.com – Online gold marketplace (e-commerce)",
            "my.talavest.com – User dashboard for investment management",
            "panel.talavest.com – Admin and operations panel",
            "AI-powered gold anti-spoofing system – Detects fraudulent activity and enhances platform security",
          ],
          stack: [
            ".NET Core",
            "Next.js",
            "React",
            "Vue",
            "Microservices",
            "DDD",
            "TDD",
            "E2E tests",
            "MSSQL",
            "Docker",
            "Jenkins",
            "PHP",
            "WordPress",
          ],
          accent:
            "from-green-50 dark:from-green-950/30 border-green-200 dark:border-green-800",
          dot: "bg-blue-600",
          icon: Code,
        },
        {
          company: "Ifa Sanat Gharb Co",
          role: "Research And Development Engineer",
          period: "Aug 2024 – 2025",
          links: [
            {
              label: "Website",
              href: "https://ifasanat.com/",
            },
          ],
          points: [
            "Developed multiple software solutions across different projects, including a responsive e-commerce website.",
            "Created real-time backend solutions for remote-controlled flowmeters.",
            "Delivered ERP modules, including CRM system.",
          ],
          stack: [
            ".NET Core",
            "Next.js",
            "React",
            "Microservices",
            "DDD",
            "TDD",
            "E2E tests",
            "MSSQL",
            "Docker",
            "Jenkins",
            "PHP",
            "WordPress",
          ],
          accent:
            "from-blue-50 dark:from-blue-950/30 border-blue-200 dark:border-blue-800",
          dot: "bg-blue-600",
          icon: Code,
        },
        {
          company: "Freelance (Self-employed)",
          role: "Freelance Web Developer",
          period: "Jan 2021 – Oct 2022",
          links: [],
          points: [
            "Built a feature-rich chat plugin similar to Crisp (support chat).",
            "Developed a crypto payment gateway provider integration for custom use cases.",
            "Created web scrapers for specific business needs.",
          ],
          stack: [
            ".NET Core",
            "Razor Pages",
            "React",
            "ASP.NET MVC",
            "SignalR",
            "TDD",
            "TypeScript",
            "JavaScript",
            "MSSQL",
          ],
          accent:
            "from-purple-50 dark:from-purple-950/30 border-purple-200 dark:border-purple-800",
          dot: "bg-purple-600",
          icon: Zap,
        },
        {
          company: "Iknow",
          role: "Software Engineer (ERP Systems)",
          period: "(Project-based)",
          links: [{ label: "Website", href: "http://iknow.ir/" }],
          points: [
            "Worked on ERP modules, including payroll.",
            "Built a dynamic report generator.",
          ],
          stack: [
            "ASP.NET MVC",
            "Razor Pages",
            "Angular",
            "TypeScript",
            "jQuery",
            "MSSQL",
          ],
          accent:
            "from-green-50 dark:from-green-950/30 border-green-200 dark:border-green-800",
          dot: "bg-green-600",
          icon: Wrench,
        },
        {
          company: "Arka Data Mining",
          role: "Intelligence Software Engineer",
          period: "Mar 2016 – Mar 2017",
          links: [
            { label: "Company", href: "https://arkadml.com/" },
            { label: "System", href: "https://hamta.ntsw.ir/" },
          ],
          points: [
            "Worked on admin-side tools and systems.",
            "Built features in CRM/BPM style modules.",
          ],
          stack: [
            "ASP.NET MVC",
            "Razor Pages",
            "Angular/AngularJS",
            "TypeScript",
            "JavaScript",
            "jQuery",
            "WordPress",
          ],
          accent:
            "from-orange-50 dark:from-orange-950/30 border-orange-200 dark:border-orange-800",
          dot: "bg-orange-600",
          icon: Shield,
        },
      ],
      projects: [
        {
          title: "Talavest platforms",
          subtitle: "Fintech websites & panels (Freelance)",
          icon: ExternalLink,
          items: [
            { label: "talavest.com", href: "https://talavest.com/" },
            { label: "my.talavest.com", href: "https://my.talavest.com/" },
            {
              label: "panel.talavest.com",
              href: "https://panel.talavest.com/",
            },
          ],
        },
        {
          title: "CRM & BPM + KYC",
          subtitle: "Enterprise modules (TCI Company)",
          icon: GitBranch,
          items: [],
        },
        {
          title: "Ifasanat CRM",
          subtitle: "CRM + WordPress website",
          icon: Database,
          items: [{ label: "ifasanat.com", href: "https://ifasanat.com/" }],
        },
        {
          title: "Crisp-like support chat",
          subtitle: "Customer support chat system",
          icon: Code,
          items: [],
        },
        {
          title: "Crypto payment gateway",
          subtitle: "Provider integration + custom use cases",
          icon: Zap,
          items: [],
        },
      ],
    }),
    []
  );

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 p-4 md:p-8 transition-colors duration-500">
        <div className="max-w-lvw mx-auto bg-background rounded-2xl shadow-2xl overflow-hidden border border-border relative">
          {/* Dark Mode Toggle */}
          <div className="absolute top-4 right-4 z-20">
            <Button
              onClick={() => setIsDarkMode((v) => !v)}
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-indigo-700 dark:via-purple-800 dark:to-slate-900 text-white p-8 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-indigo-400 rounded-full transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white dark:bg-purple-400 rounded-full transform -translate-x-24 translate-y-24" />
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white dark:bg-blue-400 rounded-full transform -translate-y-16" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              {/* Photo + name */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center">
                    {/* If you have an image, uncomment and use it */}
                    <img src={profileImage} alt={me.name} className="w-full h-full object-cover" />
                    {/* <div className="text-3xl font-semibold">MJ</div> */}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs text-white"
                      onClick={() => window.open(`${me.whatsapp}`, "_blank")}
                    >
                      <Target className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-4xl mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    {me.name}
                  </h1>
                  <p className="text-xl text-blue-100 mb-2">{me.title}</p>
                  <p className="text-sm text-blue-100/90 mb-4">{me.subtitle}</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      8+ yrs Full-Stack
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      1 yr DevOps
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      .NET
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      React / Next / Angular
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3 text-sm bg-white/10 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/20 w-full md:w-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{me.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs break-all">
                    {me.email}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs text-white"
                      onClick={() =>
                        window.open(`mailto:${me.email}`, "_blank")
                      }
                    >
                      Email
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs">
                    {me.phones[0]} • {me.phones[1]}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs text-white"
                      onClick={() => window.open(`${me.whatsapp}`, "_blank")}
                    >
                      Whatsapp
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs text-white"
                      onClick={() => window.open(`${me.telegram}`, "_blank")}
                    >
                      Telegram
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-white"
                    onClick={() => window.open(me.linkedin, "_blank")}
                  >
                    LinkedIn
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-white"
                    onClick={() => window.open(me.github, "_blank")}
                  >
                    GitHub
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Left */}
            <div className="md:col-span-1 space-y-6">
              {/* Profile */}
              <Card className="p-6 shadow-lg border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300 bg-card dark:bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Profile</h2>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                    <div className="text-lg text-blue-600 dark:text-blue-400">
                      8+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Years Full-Stack
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg text-center border border-green-200 dark:border-green-800">
                    <div className="text-lg text-green-600 dark:text-green-400">
                      1
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Year DevOps
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {me.about}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    Strong points
                  </h4>
                  <div className="space-y-2">
                    {me.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-muted-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Skills */}
              <Card className="p-6 shadow-lg border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Technical skills</h2>
                </div>

                <div className="space-y-4">
                  <SkillBlock
                    title="DevOps & Cloud"
                    icon={<Shield className="w-4 h-4 text-green-600" />}
                    items={me.skills["DevOps & Cloud"]}
                  />
                  <SkillBlock
                    title="Backend"
                    icon={<Code className="w-4 h-4 text-blue-600" />}
                    items={me.skills.Backend}
                  />
                  <SkillBlock
                    title="Frontend"
                    icon={<Zap className="w-4 h-4 text-orange-600" />}
                    items={me.skills.Frontend}
                  />
                  <SkillBlock
                    title="Databases"
                    icon={<Database className="w-4 h-4 text-emerald-600" />}
                    items={me.skills.Databases}
                  />
                  <SkillBlock
                    title="Testing & QA"
                    icon={<Wrench className="w-4 h-4 text-indigo-600" />}
                    items={me.skills.Testing}
                  />
                  <SkillBlock
                    title="Architecture & Practices"
                    icon={<GitBranch className="w-4 h-4 text-purple-600" />}
                    items={me.skills["Architecture & Practices"]}
                  />
                </div>
              </Card>

              {/* Languages */}
              <Card className="p-6 shadow-lg border-l-4 border-l-indigo-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Languages</h2>
                </div>

                <div className="space-y-2">
                  {me.languages.map((l) => (
                    <div
                      key={l.label}
                      className="flex items-center justify-between gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800"
                    >
                      <div className="text-sm text-foreground">{l.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {l.level}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Hobbies */}
              <Card className="p-6 shadow-lg border-l-4 border-l-rose-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Hobbies</h2>
                </div>

                <div className="space-y-2">
                  {me.hobbies.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-2 h-2 bg-rose-500 rounded-full" />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right */}
            <div className="md:col-span-2 space-y-6">
              {/* Experience */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Work experience</h2>
                </div>

                <div className="space-y-6 relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300 dark:to-gray-600" />

                  {me.experience.map((job) => {
                    const Icon = job.icon;
                    return (
                      <div
                        className="relative"
                        key={`${job.company}-${job.role}`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-8 h-8 ${job.dot} rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10`}
                          >
                            <Icon className="w-3 h-3 text-white" />
                          </div>

                          <div
                            className={`flex-1 bg-gradient-to-r ${job.accent} to-transparent p-4 rounded-lg border`}
                          >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                              <h3 className="text-base text-foreground">
                                {job.role}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                                <Calendar className="w-4 h-4" />
                                <span>{job.period}</span>
                              </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                              <p className="text-sm text-blue-700 dark:text-blue-400">
                                {job.company}
                              </p>
                              {job.links?.length ? (
                                <div className="flex flex-wrap gap-2">
                                  {job.links.map((l) => (
                                    <Button
                                      key={l.href}
                                      size="sm"
                                      variant="outline"
                                      className="h-7 px-3 text-xs"
                                      onClick={() =>
                                        window.open(l.href, "_blank")
                                      }
                                    >
                                      <ExternalLink className="w-3 h-3 mr-1" />
                                      {l.label}
                                    </Button>
                                  ))}
                                </div>
                              ) : null}
                            </div>

                            <ul className="text-sm text-muted-foreground space-y-2 mb-3">
                              {job.points.map((p) => (
                                <li key={p} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                  {p}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1">
                              {job.stack.map((s) => (
                                <Badge
                                  key={s}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {s}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Education */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Education</h2>
                </div>

                <div className="space-y-4">
                  {me.education.map((e) => (
                    <div
                      key={e.school}
                      className="flex items-start gap-4 bg-gradient-to-r from-emerald-50 dark:from-emerald-950/30 to-transparent p-4 rounded-lg border border-emerald-200 dark:border-emerald-800"
                    >
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                        <GraduationCap className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                          <h3 className="text-base text-foreground">
                            {e.degree}
                          </h3>
                          <div className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border inline-flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{e.period}</span>
                          </div>
                        </div>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400">
                          {e.school}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Projects */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">Projects</h2>

                  <div className="ml-auto flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 text-xs"
                      onClick={() => window.open(me.github, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 text-xs"
                      onClick={() => window.open(me.linkedin, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {me.projects.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.title}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 dark:from-orange-950/30 to-transparent rounded-lg border border-orange-200 dark:border-orange-800"
                      >
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground mb-1">
                            {p.title}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            {p.subtitle}
                          </p>

                          {p.items?.length ? (
                            <div className="flex flex-wrap gap-2">
                              {p.items.map((i) => (
                                <Button
                                  key={i.href}
                                  size="sm"
                                  variant="outline"
                                  className="h-7 px-3 text-xs"
                                  onClick={() => window.open(i.href, "_blank")}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  {i.label}
                                </Button>
                              ))}
                            </div>
                          ) : (
                            <div className="text-xs text-muted-foreground">
                              (Links or screenshots can be added)
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Separator className="my-6" />

                <div className="text-xs text-muted-foreground">
                  Tip: Replace "(Links or screenshots can be added)" with real
                  links, or add a gallery section.
                </div>
              </Card>

              {/* Short Bio (optional) */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">More about me</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I was born on September 29, 1994, in Tabriz, Iran. I studied
                  mathematics in high school and then studied Computer
                  Engineering. Since 2016, I have been working professionally.
                  I’m open to challenges and I work well with different types of
                  people.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBlock({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div>
      <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <div className="flex flex-wrap gap-1">
        {items.map((it) => (
          <Badge key={it} variant="secondary" className="text-xs">
            {it}
          </Badge>
        ))}
      </div>
    </div>
  );
}
