import { Accordion } from "@mantine/core";
import { FC } from "react";

interface iFAQs {
  heading: string;
  subHeading: string;
  details: iFaqDetail[];
}

interface iFaqDetail {
  topic: string;
  subTopic: string;
}

const FAQs: FC<iFAQs> = ({ heading, subHeading, details }) => {
  return (
    <>
      <div className="px-4 pb-4">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          {heading}
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          {subHeading}
        </p>

        <Accordion variant="separated" defaultValue="consulting">
          {details.map((detail, i) => {
            return (
              <Accordion.Item
                key={i}
                value={"item" + (i + 1)}
                className="custom-accordion-item"
              >
                <Accordion.Control>
                  {" "}
                  <h2 className="semi-3 md:text-[14px] md:leading-[24px] text-contrast-100">
                    {detail.topic}
                  </h2>
                </Accordion.Control>
                <Accordion.Panel>
                  {" "}
                  <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base">
                    {detail.subTopic}
                  </p>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default FAQs;
