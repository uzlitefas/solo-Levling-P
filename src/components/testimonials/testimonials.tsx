import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/constants";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground/90 mb-4">
            O'quvchilarimiz fikri
          </h2>
          <p className="text-xl text-foreground/60">
            Bizning bitiruvchilar nima deyishadi
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-foreground/20"
            >
              <div className="">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                </div>

                <p className="text-foreground/60 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground/90">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-foreground/50">
                      {testimonial.role} - {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
