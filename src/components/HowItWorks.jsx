// components/HowItWorks.jsx
export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Choose Location',
      description: 'Select your pickup location and travel dates easily.',
    },
    {
      step: '02',
      title: 'Pick Your Car',
      description: 'Browse our wide range of verified, well-maintained vehicles.',
    },
    {
      step: '03',
      title: 'Enjoy Your Ride',
      description: 'Confirm your booking and hit the road with full confidence.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">How <span className="text-blue-600">DriveHub</span> Works</h2>
        <p className="text-gray-600 mb-12">Rent your dream car in 3 simple steps</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left hover:-translate-y-2 hover:shadow-xl">
              <span className="text-4xl font-extrabold text-blue-600 block mb-4">{item.step}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}