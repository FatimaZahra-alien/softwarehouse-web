import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Enterprise Applications",
      desc: "Custom-built, scalable enterprise software designed to streamline operations and support long-term growth.",
      href: "/services/enterprise-applications",
    },
    {
      title: "IT Consulting",
      desc: "Strategic technology consulting to help you choose the right tools, architecture, and roadmap.",
      href: "/services/it-consulting",
    },
    {
      title: "Web & App Development",
      desc: "High-performance, responsive web and mobile applications built with modern frameworks.",
      href: "/services/web-app-development",
    },
    {
      title: "Embedded Systems & Training",
      desc: "Reliable embedded solutions with industry-focused training for real-world implementation.",
      href: "/services/embedded-systems-training",
    },
    {
      title: "Product Testing & QA",
      desc: "Comprehensive testing services to reduce risk, catch issues early, and ensure quality.",
      href: "/services/product-testing",
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support, monitoring, and updates to keep your systems secure and stable.",
      href: "/services/maintenance-support",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1C1C1C] via-[#3D3D3D]  to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Services Built to Solve Real Business Problems
          </h2>
          <p className="mt-4 text-gray-200 text-lg">
            We partner with businesses to design, build, and maintain software
            solutions that deliver measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block h-full"
            >
              <div
                className="h-full p-8 rounded-2xl border border-[#1C1C1C]
                           transition-all duration-300 ease-out
                           hover:-translate-y-2 hover:shadow-xl
                           hover:border-gray-500
                           bg-[#3D3D3D]"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-200 leading-relaxed">
                  {service.desc}
                </p>

                {/* CTA Indicator */}
                <div
                  className="mt-6 text-sm font-medium text-white
                             opacity-0 translate-y-1
                             transition-all duration-300
                             group-hover:opacity-100 group-hover:translate-y-0"
                >
                  View service →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
