import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  User,
  Briefcase,
  GraduationCap,
  Settings,
  Award,
  Globe,
  Lightbulb,
  Calendar,
  Code,
  TestTube,
  Database,
  GitBranch,
  Music,
  Gamepad2,
  Trophy,
  Heart,
  Moon,
  Sun,
  ExternalLink,
  Target,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import profileImage from "figma:asset/918942778e493ef96389e64b05b2a7be345002d8.png";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 p-4 md:p-8 transition-colors duration-500">
        <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Dark Mode Toggle */}
          <div className="absolute top-4 right-4 z-20">
            <Button
              onClick={toggleDarkMode}
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

          {/* Header with geometric background */}
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-indigo-700 dark:via-purple-800 dark:to-slate-900 text-white p-8 overflow-hidden">
            {/* Geometric background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-indigo-400 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white dark:bg-purple-400 rounded-full transform -translate-x-24 translate-y-24"></div>
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white dark:bg-blue-400 rounded-full transform -translate-y-16"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              {/* Photo and main info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm">
                    <img
                      src={profileImage}
                      alt="Arnaud Salingue"
                      className="w-full h-full object-cover grayscale-0"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <TestTube className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    Arnaud Salingue
                  </h1>
                  <p className="text-xl text-blue-100 mb-4">
                    Testeur QA Automation certifié ISTQB
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      9+ ans IT
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      3 ans QA
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      Scrum
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-3 text-sm bg-white/10 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Caumont-sur-Durance (84)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>arnaud-s@live.fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>06 19 98 46 40</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-xs">
                    linkedin.com/in/arnaud-salingue-a792b1206
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-6">
              {/* Profil amélioré */}
              <Card className="p-6 shadow-lg border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300 bg-card dark:bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Profil
                  </h2>
                </div>

                {/* Statistiques rapides */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                    <div className="text-lg text-blue-600 dark:text-blue-400">
                      9+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Années IT
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg text-center border border-green-200 dark:border-green-800">
                    <div className="text-lg text-green-600 dark:text-green-400">
                      3
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Années QA
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Testeur QA certifié ISTQB avec plus de 9 ans
                  d'expérience dans l'IT, dont 3 ans en qualité
                  logicielle. Spécialisé en automatisation de
                  tests fonctionnels (Playwright + Cucumber)
                  dans un environnement Scrum.
                </p>

                {/* Points forts */}
                <div className="space-y-2">
                  <h4 className="text-sm text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-600" />
                    Points forts
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground">
                        Autonome et rigoureux
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground">
                        Orienté amélioration continue
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-muted-foreground">
                        Specialisation en automatisation
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Compétences */}
              <Card className="p-6 shadow-lg border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Compétences
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
                      <TestTube className="w-4 h-4 text-green-600" />
                      QA
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
                      >
                        Tests manuels
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
                      >
                        Tests fonctionnels
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
                      >
                        TNR
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
                      >
                        API
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      Automatisation
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                      >
                        Playwright
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                      >
                        TypeScript
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                      >
                        Cucumber
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                      >
                        Gherkin
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
                      <Settings className="w-4 h-4 text-orange-600" />
                      Outils
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                      >
                        Postman
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                      >
                        Git
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                      >
                        JIRA
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                      >
                        API Platform
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
                      <Code className="w-4 h-4 text-purple-600" />
                      Développement
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                      >
                        PHP
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                      >
                        HTML/CSS
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                      >
                        SQL
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-indigo-600" />
                      Méthodes
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
                      >
                        Scrum
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
                      >
                        UML
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
                      >
                        Merise
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Centres d'intérêt */}
              <Card className="p-6 shadow-lg border-l-4 border-l-rose-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Centres d'intérêt
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-foreground">
                      Football
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Music className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm text-foreground">
                      Musique
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Gamepad2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-foreground">
                      Jeux vidéo
                    </span>
                  </div>
                </div>
              </Card>

              {/* Certifications */}
              <Card className="p-6 shadow-lg border-l-4 border-l-green-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Certifications
                  </h2>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <TestTube className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-foreground">
                      ISTQB® – Niveau Fondation
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Novembre 2024
                    </p>
                  </div>
                </div>
              </Card>

              {/* Langues */}
              <Card className="p-6 shadow-lg border-l-4 border-l-indigo-500 hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Langues
                  </h2>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="text-lg">🇬🇧</span>
                  <div>
                    <p className="text-sm text-foreground">
                      Anglais
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Très bon à l'écrit, bon à l'oral
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Expérience Professionnelle */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Expérience professionnelle
                  </h2>
                </div>

                <div className="space-y-6 relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300 dark:to-gray-600"></div>

                  {/* CBA Informatique Libérale – Testeur QA */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
                        <TestTube className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-blue-50 dark:from-blue-950/30 to-transparent p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h3 className="text-base text-foreground">
                            Testeur QA
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                            <Calendar className="w-4 h-4" />
                            <span>Mai 2022 – Aujourd'hui</span>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">
                          CBA Informatique Libérale
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            Rédaction de tests en Gherkin
                            (Cucumber) et automatisation via
                            Playwright (TypeScript)
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            Tests API automatisés (Postman +
                            JS), génération de données de test
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            Travail en Scrum, gestion des
                            tickets via JIRA, versioning avec
                            Git
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            Mise en place en autonomie du projet
                            d'automatisation TNR
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CBA Informatique Libérale – Technicien Help Desk */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
                        <Settings className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-purple-50 dark:from-purple-950/30 to-transparent p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h3 className="text-base text-foreground">
                            Technicien Help Desk
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                            <Calendar className="w-4 h-4" />
                            <span>
                              Février 2016 – Avril 2022
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-purple-700 dark:text-purple-400 mb-3">
                          CBA Informatique Libérale
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            Support logiciel et matériel aux
                            professionnels de santé
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            Diagnostic, résolution d'incidents,
                            accompagnement utilisateurs
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            Amélioration continue des procédures
                            de support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Développeur Web Freelance */}
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
                        <Code className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-green-50 dark:from-green-950/30 to-transparent p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h3 className="text-base text-foreground">
                            Développeur Web Freelance
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                            <Calendar className="w-4 h-4" />
                            <span>
                              Janvier 2011 – Février 2016
                            </span>
                          </div>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            Création de sites dynamiques
                            PHP/MySQL, front-end HTML/CSS/JS
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            Réalisation d'un site e-commerce
                            pour cartouches d'imprimante laser
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            Déploiement, hébergement et support
                            client
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Autres expériences */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center border-2 border-background shadow z-10">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-muted p-3 rounded-lg border border-border">
                          <h3 className="text-sm text-foreground">
                            Vendeur
                          </h3>
                          <p className="text-xs text-blue-700 dark:text-blue-400">
                            Micromania
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Janvier 2015 – Février 2016
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center border-2 border-background shadow z-10">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-muted p-3 rounded-lg border border-border">
                          <h3 className="text-sm text-foreground">
                            Employé Polyvalent
                          </h3>
                          <p className="text-xs text-blue-700 dark:text-blue-400">
                            McDonald's
                          </p>
                          <p className="text-xs text-muted-foreground">
                            2012 – 2015
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Formation */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Formation
                  </h2>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-emerald-50 dark:from-emerald-950/30 to-transparent p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-base text-foreground">
                        BTS Informatique de Gestion
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                        <Calendar className="w-4 h-4" />
                        <span>2009 – 2011</span>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">
                      Option Développeur d'Applications – Lycée
                      Aubanel, Avignon
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Développement PHP, SQL, JavaScript,
                      UML/Merise, projets web et bases de
                      données
                    </p>
                    <div className="bg-emerald-100 dark:bg-emerald-950/30 p-2 rounded text-xs text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <strong>Stage :</strong> création d'un
                      site e-commerce pour cartouches
                      d'imprimante laser
                    </div>
                  </div>
                </div>
              </Card>

              {/* Projets avec liens */}
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg text-foreground">
                    Projets
                  </h2>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 px-3 text-xs"
                    onClick={() =>
                      window.open(
                        "http://arnaudsalingue.free.fr/",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Voir le portfolio
                  </Button>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 dark:from-purple-950/30 to-transparent rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">
                        Mise en place d'une automatisation QA
                        complète
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Playwright + Cucumber
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 dark:from-green-950/30 to-transparent rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">
                        Site e-commerce cartouches d'imprimante
                        laser
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Projet de stage BTS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 dark:from-orange-950/30 to-transparent rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">
                        Site événementiel « La run des filles »
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Création web
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 px-3 text-xs"
                        onClick={() =>
                          window.open(
                            "http://bamsudest.com/larundesfilles/",
                            "_blank",
                          )
                        }
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Voir le site
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}