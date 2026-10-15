// components/Testimonials.jsx
export default function Testimonials() {
  const reviews = [
    {
      name: 'Tanvir Ahmed',
      role: 'Business Traveler',
      comment: 'Booking a car on DriveHub was seamless. The vehicle was clean, well-serviced, and delivered right on time!',
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'Farhana Rahman',
      role: 'Weekend Explorer',
      comment: 'Great rates with zero hidden fees. DriveHub is definitely my go-to choice for road trips.',
      rating: '⭐⭐⭐⭐⭐',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Drivers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-100 bg-slate-50 shadow-sm">
              <div className="text-sm mb-2">{rev.rating}</div>
              <p className="text-gray-700 italic mb-4">"{rev.comment}"</p>
              <div>
                <h4 className="font-bold text-gray-900">{rev.name}</h4>
                <span className="text-xs text-gray-500">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}