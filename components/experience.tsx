import { EXPERIENCE_DATA } from "@/data/experience";
import SectionHeading from "@/components/section-heading";


export default function Experience() {
  return (
    <section className="experience-section flex flex-col items-center gap-3">
      <SectionHeading mainText="Experience" outerClassName="me-auto h-[1em]" />
      <div className="w-full flex flex-col gap-y-12">
        {Object.keys(EXPERIENCE_DATA).map((company) => (
          <div key={company} className="flex flex-col">
            <div key={company} className="w-full flex flex-col sm:flex-row items-start sm:items-center">
              <div className="w-35 lg:w-75 flex-shrink-0 lg:px-3 lg:text-right text-xs font-medium uppercase content-start">{EXPERIENCE_DATA[company].duration}</div>
              <div className="text-base lg:text-2xl font-medium">
                <span>{company}</span>
                <span className="mx-1">•</span>
                <span>{EXPERIENCE_DATA[company].role}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-35 lg:w-75 flex-shrink-0" />
              <div className="p-0 lg:pe-32 flex flex-col gap-1 lg:gap-3">
                {(EXPERIENCE_DATA[company].responsibilities) && (
                  <div className="text-sm lg:text-base">
                    <ul className="list-disc pl-5">
                      {EXPERIENCE_DATA[company].responsibilities.map((resp, index) => (
                        typeof resp === "string" ? (
                          <li key={index}>{resp}</li>
                        ) : (
                          <li key={index}>
                            {resp.text}
                            {resp.subpoints && (
                              <ul className="list-disc pl-5">
                                {resp.subpoints.map((subpoint, subIndex) => (
                                  <li key={subIndex}>{subpoint}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  {EXPERIENCE_DATA[company].skills && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {EXPERIENCE_DATA[company].skills!.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs px-2 py-1 bg-[#9C858D] rounded-full">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}