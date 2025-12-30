"use client";

import { getDataPath } from "@/utils/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="border-t border-softGray">
      <div className="container py-16 md:py-32">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-black pb-6 mb-12">
          <h2>Education & Skills</h2>
          <span className="text-xl text-orange-500">( 03 )</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* EDUCATION */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Education</h4>

            {educationData?.education?.map((item: any, index: number) => (
              <div
                key={index}
                className="border border-softGray rounded-lg p-5 hover:shadow-md transition"
              >
                <h5 className="font-medium">{item.title}</h5>
                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Skills</h4>

            {educationData?.skills?.map((skill: any, index: number) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">
                    {skill.rating}/5
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${(skill.rating / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
