"use client";

export default function Training() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Training @ SoftwareHouse
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Industry-oriented Embedded Systems & Software Training with real-time
            projects, expert trainers, and strong placement support.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            "18+ Years of Industry Experience",
            "Real-Time Consultants as Trainers",
            "Live Projects & Large Project Exposure",
            "100% Placement Record (6–30 LPA in MNCs)",
            "Work on Real Software & Hardware",
            "Classroom & Corporate Training",
            "Internships for Students & Professionals",
            "Industry-Based Course Curriculum",
            "Opportunities in India & Abroad",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>

        {/* Training Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <TrainingCard
            title="Embedded Systems"
            items={[
              "Advanced Diploma in Embedded Systems",
              "Embedded Testing",
              "Avionics Testing",
              "Linux Kernel & Device Drivers",
              "RTOS, VxWorks, Kernel Programming",
              "ARM, PIC, 8051",
              "PCB Designing",
              "Automotive / Robotics Testing",
              "WINCE",
              "C, C++, ADA, Python",
            ]}
          />

          <TrainingCard
            title="Java / J2EE"
            items={[
              "Advanced Diploma in Software Design",
              "Core Java",
              "J2EE",
              "Hibernate Framework",
              "Spring Framework",
              "Struts Framework",
              "UML Designing",
              "Web & Application Servers",
              "Enterprise Java Beans (EJB)",
              "CSS, Ajax, JavaScript",
            ]}
          />

          <TrainingCard
            title="PCB Designing"
            items={["Advanced Diploma in PCB Designing Training"]}
          />

          <TrainingCard
            title="Wireless"
            items={["Advanced Diploma in Wireless Technology"]}
          />
        </div>

        {/* CTA */}
        <div className="text-center bg-primary text-black p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Career with Industry-Focused Training
          </h2>
          <p className="mb-6">
            Get trained by experts and work on real-world projects.
          </p>
          <a
            href="mailto:hr@softwareshouse.com"
            className="inline-block bg-accent px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* Reusable Card */
function TrainingCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
