import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Junior Frontend Developer",
    feedback:
      "Be-A-Dev helped me land my first developer job! The hands-on projects and real-world focus made learning fun and effective.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajib Hasan",
    role: "Full Stack Developer",
    feedback:
      "The step-by-step roadmap and progress tracking kept me motivated. Highly recommend Be-A-Dev for aspiring developers!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Carter",
    role: "Freelance Web Designer",
    feedback:
      "I gained confidence building real projects. The community support was amazing throughout my learning journey.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className=" pt-20">
      <div>
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-10">
          What Our Students Say
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" p-6 rounded-2xl shadow-md shadow-orange-300 flex flex-col items-center text-center hover:scale-105 transition transform duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm mb-2">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
