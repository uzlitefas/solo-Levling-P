import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg fixed w-full top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">IT Center</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground/80 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {t("nav.home")}
            </a>
            <a
              href="#courses"
              className="text-foreground/80 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {t("nav.courses")}
            </a>
            <a
              href="#about"
              className="text-foreground/80 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {t("nav.about")}
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {t("nav.contact")}
            </a>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground/80 hover:text-blue-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              <a
                href="#home"
                onClick={toggleMenu}
                className="block px-3 py-2 text-foreground/80 hover:text-blue-500 hover:bg-accent rounded-md transition-colors duration-200"
              >
                {t("nav.home")}
              </a>
              <a
                href="#courses"
                onClick={toggleMenu}
                className="block px-3 py-2 text-foreground/80 hover:text-blue-500 hover:bg-accent rounded-md transition-colors duration-200"
              >
                {t("nav.courses")}
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block px-3 py-2 text-foreground/80 hover:text-blue-500 hover:bg-accent rounded-md transition-colors duration-200"
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block px-3 py-2 text-foreground/80 hover:text-blue-500 hover:bg-accent rounded-md transition-colors duration-200"
              >
                {t("nav.contact")}
              </a>
              <div className="flex items-center space-x-2 px-3 py-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
