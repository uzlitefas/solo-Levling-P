import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t("hero.title")}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleEnd")}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                {t("hero.enrollButton")}
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                {t("hero.watchVideo")}
              </button>
            </div>
          </div>

          <div className="relative max-[400px]:hidden">
            <div className="bg-card rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 text-green-400 font-mono text-sm">
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-xs">
                  {`function welcomeToTogaragim() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB'
  ];
  
  return skills.map(skill => 
    console.log(\`Learning \${skill}...\`)
  );
}

welcomeToTogaragim();`}
                </pre>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
