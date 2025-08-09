import React from "react";
import { features, stats } from "@/constants";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-500/20 to-background/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground/90 mb-4">
            Biz haqimizda
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Togaragim IT markazi 2019 yildan beri professional web dasturchilar
            tayyorlashda faoliyat yuritmoqda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map(({ Icon, label, number }) => (
            <div
              key={label}
              className="bg-background rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground/90 mb-2">
                {number}
              </div>
              <div className="text-foreground/60">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground/90 mb-6">
              Nima uchun aynan Togaragim?
            </h3>

            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Biz faqat nazariya emas, balki amaliy ko'nikmalarni o'rgatamiz.
              Har bir o'quvchi kurs davomida o'z portfoliosini yaratadi va real
              loyihalarda ishtirok etadi.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground/90 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-background rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground/90 mb-4">
                  Bizning missionimiz
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  O'zbekistonda IT sohasini rivojlantirishga hissa qo'shish va
                  yoshlarimizni zamonaviy kasblar bilan ta'minlash.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground/90 mb-4">
                  Bizning vizionimiz
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  Mintaqaning eng yaxshi IT ta'lim markazi bo'lish va xalqaro
                  standartlarga mos mutaxassislar tayyorlash.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
                <p className="font-semibold">
                  "Har bir o'quvchi bizning g'ururimiz!"
                </p>
                <p className="text-sm opacity-90 mt-1">- Togaragim jamoasi</p>
              </div>
            </div>

            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-foreground/20 to-foreground/20 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
