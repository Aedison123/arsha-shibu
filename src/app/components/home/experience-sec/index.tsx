import React from "react";

const TechnicalSkillSec = () => {
  const skills = [
    {
      year: "Accounting",
      title: "Financial Accounting",
      company: "Core Skill",
      type: "Strong Foundation",
      description:
        "Knowledge of journal entries, ledger posting, trial balance, final accounts, and basic financial statements."
    },
    {
      year: "Costing",
      title: "Cost Accounting",
      company: "CMA Curriculum",
      type: "Intermediate Level",
      description:
        "Understanding of cost concepts, cost sheets, marginal costing, and basic cost analysis techniques."
    },
    {
      year: "Management",
      title: "Management Accounting",
      company: "CMA Curriculum",
      type: "Basic Level",
      description:
        "Exposure to budgeting, ratio analysis, and decision-making concepts used in management accounting."
    },
    {
      year: "Software",
      title: "Computerised Accounting",
      company: "Practical Skill",
      type: "Beginner – Intermediate",
      description:
        "Basic understanding of computerized accounting systems and practical accounting workflows."
    },
    {
      year: "Tools",
      title: "MS Excel & Office",
      company: "Technical Tools",
      type: "Working Knowledge",
      description:
        "Proficient in MS Excel basics including formulas and formatting, along with MS Word and PowerPoint."
    }
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">

          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Technical Skills</h2>
            <p className="text-xl text-primary">( 03 )</p>
          </div>

          {/* Skills Timeline */}
          <div className="space-y-7 md:space-y-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                {/* Left */}
                <div>
                  <h3 className="font-bold mb-2 text-black">{skill.year}</h3>
                  <h4 className="text-lg font-normal">{skill.title}</h4>
                </div>

                {/* Middle */}
                <div className="relative">
                  {index < skills.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < skills.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full border border-black bg-white"></div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <span className="text-xl text-black font-normal">
                      {skill.company}
                    </span>
                    <p className="text-base font-normal">{skill.type}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillSec;
