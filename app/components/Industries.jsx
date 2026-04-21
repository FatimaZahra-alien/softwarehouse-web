import Image from "next/image";

export default function Industries() {
  const industries = [
    {
      title: "Automotive",
      desc: "Smart solutions for connected vehicles and automotive systems.",
    },
    {
      title: "Industrial Automation",
      desc: "Efficient automation software for manufacturing and production.",
    },
    {
      title: "Telecom",
      desc: "Reliable systems for communication networks and services.",
    },
    {
      title: "Medical Electronics",
      desc: "Innovative software and embedded solutions for healthcare devices.",
    },
    {
      title: "Avionics",
      desc: "High-performance software for aviation and aerospace systems.",
    },
    {
      title: "Retail",
      desc: "Optimized digital solutions for e-commerce and stores.",
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-gradient-to-b from-gray-100 via-[#3D3D3D] to-[#1C1C1C]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Industries We Serve
          </h2>
          <p className="mt-4 text-[#3D3D3D] max-w-2xl mx-auto">
            We deliver tailored software solutions across multiple industries.
          </p>
        </div>

        {/* First Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-20">
          {/* Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/rr.jpg"
              alt="Industries illustration"
              fill
              className="object-cover"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            {industries.slice(0, 3).map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#3D3D3D] shadow-md
                           hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Block (FIXED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 order-2 md:order-1">
            {industries.slice(3, 6).map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#3D3D3D]/80 shadow-md
                           hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Image — HEIGHT NOW MATCHES CARDS */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
            <Image
              src="/images/av.jpg"
              alt="Industries illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

