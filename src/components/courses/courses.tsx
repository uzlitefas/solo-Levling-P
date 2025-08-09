import React from "react";
import { Code, Globe, Database, Users, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Courses: React.FC = () => {
  const { t } = useTranslation();

  const courses = [
    {
      icon: <Code className="h-12 w-12 text-blue-500" />,
      title: t("courses.frontend.title"),
      description: t("courses.frontend.description"),
      duration: t("courses.frontend.duration"),
      students: t("courses.frontend.students"),
      level: t("courses.frontend.level"),
      price: t("courses.frontend.price"),
      features: [
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "React.js",
        "Responsive Design",
        "Git & GitHub",
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: t("courses.backend.title"),
      description: t("courses.backend.description"),
      duration: t("courses.backend.duration"),
      students: t("courses.backend.students"),
      level: t("courses.backend.level"),
      price: t("courses.backend.price"),
      features: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "API Development",
        "Authentication",
      ],
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-700" />,
      title: t("courses.fullstack.title"),
      description: t("courses.fullstack.description"),
      duration: t("courses.fullstack.duration"),
      students: t("courses.fullstack.students"),
      level: t("courses.fullstack.level"),
      price: t("courses.fullstack.price"),
      features: [
        "MERN Stack",
        "Full Project",
        "Deployment",
        "Team Work",
        "Portfolio",
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("courses.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("courses.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div>
              <div className="mb-6">{course.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-muted-foreground">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-muted-foreground">
                    {course.students}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">
                  {t("courses.technologies")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div></div>
            <div className="">
              <div className="mb-6">
                <div className="text-3xl font-bold">{course.price}</div>
                <div className="text-sm text-muted-foreground">
                  {t("courses.perMonth")}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                {t("courses.enrollButton")}
              </button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
