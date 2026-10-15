// components/FAQSection.jsx
export default function FAQSection() {
  const faqs = [
    {
      q: 'What documents do I need to rent a car?',
      a: 'You will need a valid driving license, a national ID / passport, and a verified booking confirmation.',
    },
    {
      q: 'Can I cancel or modify my reservation?',
      a: 'Yes, reservations can be modified or canceled directly from your dashboard up to 24 hours before pickup.',
    },
    {
      q: 'Is insurance included with the rental?',
      a: 'All DriveHub rentals include standard third-party insurance coverage with options for full damage waivers.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}