export default function WhyChooseUs() {
  const statements = [
    {
      title: "Built to Scale",
      desc: "We engineer software that grows with your business, not against it.",
    },
    {
      title: "Process Driven",
      desc: "Clear workflows, predictable timelines, and zero guesswork.",
    },
    {
      title: "Industry Ready",
      desc: "Solutions designed for real-world use, not just demos.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-28 bg-[#1C1C1C] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We don’t just build software — we build systems that last.
          </p>
        </div>

        {/* Statement Circles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
          {statements.map((item, index) => (
            <div
              key={index}
              className="w-72 h-72 md:w-80 md:h-80 rounded-full
                         bg-gradient-to-br from-white/10 to-white/5
                         border border-white/10
                         flex flex-col items-center justify-center
                         text-center px-8
                         hover:scale-105 hover:border-accent
                         transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


