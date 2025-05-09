
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer A.',
    text: 'The care I received at MediCare was exceptional. The doctors were knowledgeable, and the staff was caring and attentive throughout my treatment.',
    rating: 5
  },
  {
    name: 'Robert M.',
    text: 'After my surgery, the rehabilitation team helped me recover quickly. Their expertise and encouragement made a huge difference in my healing process.',
    rating: 5
  },
  {
    name: 'Sophia L.',
    text: 'As a new mother, I was nervous about my baby\'s first checkup. The pediatric team was patient, thorough, and made us both feel comfortable.',
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Patient Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our patients have to say about their experiences at MediCare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
