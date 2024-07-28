// import React from 'react';
// import './TestimonialCarousel.css'; // Ensure this CSS file is created

// const testimonials = [
//   {
//     name: "John Doe",
//     text: "This is the first testimonial. The service was excellent and I highly recommend it!",
//     image: "https://assets.chaminade.edu/wp-content/uploads/2018/07/08074029/Testimonial-Photo-Circle-AngieM1a.png "
//   },
//   {
//     name: "Jane Smith",
//     text: "Amazing experience! The team was professional and very helpful.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_CeCQP2nXc8tXwVy0JZBXCm3YKgxP6-Fb-k998sqiRlXl5kFdR1LLIxOfbQyxm0yZbs&usqp=CAU "
//   },
//   {
//     name: "Alex Johnson",
//     text: "I couldn't be happier with the results. Highly recommended!",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNFUwQmH640OafdOvh-eIPRcB9ZeIBbYfew&s "
//   }
// ];

// const TestimonialCarousel = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-4xl mx-auto">
//         <div className="carousel relative overflow-hidden">
//           <div className="carousel-inner relative w-full overflow-hidden">
//             {testimonials.map((testimonial, index) => (
//               <input
//                 key={index}
//                 className="carousel-open"
//                 type="radio"
//                 id={`carousel-${index + 1}`}
//                 name="carousel"
//                 aria-hidden="true"
//                 hidden
//                 defaultChecked={index === 0}
//               />
//             ))}
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
//                 <div className="block h-full w-full flex flex-col items-center justify-center bg-white text-center p-6 rounded-lg shadow-lg">
//                   <img src={testimonial.image} alt={testimonial.name} className="rounded-full mb-4 w-24 h-24 object-cover" />
//                   <p className="text-lg italic text-gray-600 mb-4">"{testimonial.text}"</p>
//                   <p className="text-gray-800 font-semibold">- {testimonial.name}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="carousel-controls absolute w-full flex justify-between items-center">
//               {testimonials.map((_, index) => (
//                 <label key={index} htmlFor={`carousel-${index === 0 ? testimonials.length : index}`} className="control-prev absolute inset-y-0 left-0 ml-4 cursor-pointer">
//                   ‹
//                 </label>
//               ))}
//               {testimonials.map((_, index) => (
//                 <label key={index} htmlFor={`carousel-${(index + 1) % testimonials.length === 0 ? 1 : (index + 2)}`} className="control-next absolute inset-y-0 right-0 mr-4 cursor-pointer">
//                   ›
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;
import React from 'react';
import './TestimonialCarousel.css'; // Ensure this CSS file is created

const testimonials = [
  {
    name: "John Doe",
    text: "This is the first testimonial. The service was excellent and I highly recommend it!",
    image: "https://assets.chaminade.edu/wp-content/uploads/2018/07/08074029/Testimonial-Photo-Circle-AngieM1a.png"
  },
  {
    name: "Jane Smith",
    text: "Amazing experience! The team was professional and very helpful.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_CeCQP2nXc8tXwVy0JZBXCm3YKgxP6-Fb-k998sqiRlXl5kFdR1LLIxOfbQyxm0yZbs&usqp=CAU"
  },
  {
    name: "Alex Johnson",
    text: "I couldn't be happier with the results. Highly recommended!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNFUwQmH640OafdOvh-eIPRcB9ZeIBbYfew&s"
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full mb-4 w-24 h-24 object-cover mx-auto" />
              <p className="text-lg italic text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="text-gray-800 font-semibold text-center">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
