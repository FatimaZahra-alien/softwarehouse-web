"use client";

import { useState } from "react";

export default function Careers() {
  const jobs = [
    {
      code: "ED007",
      designation: "Senior Software Developer",
      eligibility: "3-6 years Experience, BE/MSC Electronics/Electrical/Computers/Biomedical",
      skills: [
        "Strong in C/oops using C++",
        "Driver development on WINCE/Windows OS",
        "Windows Display Driver Model",
        "Windows Internals & Drivers",
        "Unit Testing",
        "Debugging using WinDBG",
      ],
    },
    {
      code: "ED008",
      designation: "Embedded Developer",
      eligibility: "6 months-2 years Experience in Embedded Systems, BE/MSC Electronics/Electrical/Computers/Biomedical",
      skills: [
        "C/C++",
        "8051/PIC/ARM 7/ARM 9",
        "PCB Designing",
        "Linux Kernel Programming, Network Programming, Device Driver Programming",
      ],
    },
    {
      code: "ET-009",
      designation: "Embedded Trainer",
      eligibility: "6 months-15 years Experience in Embedded Systems",
      skills: [
        "C/C++",
        "8051/PIC/ARM 7/ARM 9/AVR",
        "Linux/Vxworks",
        "Linux Device Drivers, Porting Linux to ARM, BSP",
        "Permanent and Part Time Roles",
      ],
    },
    {
      code: "EX12",
      designation: "Senior Software Engineer - Embedded",
      eligibility: "6-10 years Experience, BE/ME/PhD Electronics/Electrical/Computers/Biomedical",
      skills: [
        "C/C++",
        "ARM 9/PowerPC",
        "Linux 2.6/Android",
        "Layer 2 protocols, TCP/IP Stack",
        "Device Drivers, BSP, Printer Drivers",
        "Permanent and Freelance Roles",
      ],
    },
    {
      code: "WD008",
      designation: "Software Developer",
      eligibility: "6 months-3 years Experience in Web Designing",
      skills: [
        "Photoshop, CSS, XHTML, FLASH",
        "JAVA/J2EE",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Careers</h1>

        {jobs.map((job, index) => (
          <div key={index} className="mb-4 border rounded-xl bg-white shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-gray-900">{job.designation} ({job.code})</span>
              <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                <p className="mb-2"><strong>Eligibility:</strong> {job.eligibility}</p>
                <p className="mb-2"><strong>Skills:</strong></p>
                <ul className="list-disc list-inside mb-2">
                  {job.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <p><strong>To Apply:</strong> Send your resume to <a href="mailto:hr@softwareshouse.com" className="text-accent hover:underline">hr@softwareshouse.com</a></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
