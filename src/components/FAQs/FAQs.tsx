import { Accordion } from "@mantine/core";
import { FC } from "react";

interface iFAQs {
  heading: string;
  subHeading: string;
  topic: string;
  subTopic: string;
  subTopics: string;
  topic2: string;
  subTopic2: string;
  subTopics2: string;
  topic3: string;
  subTopic3: string;
  subTopics3: string;
  topic4: string;
  subTopic4: string;
  subTopics4: string;
}

const FAQs: FC<iFAQs> = ({ heading, subHeading, topic, subTopic, subTopics, topic2, subTopic2, subTopics2, topic3, subTopic3, subTopics3, topic4, subTopic4, subTopics4, }) => {
  return (
    <>
      <div className="px-4 pb-4">
        <h2 className="text-xl font-semibold text-black pb-4">
          {heading}
        </h2>
        <p className="text-base font-medium text-light-black-5 pb-6">
          {subHeading}
        </p>

        <Accordion variant="separated" defaultValue="consulting">
          <Accordion.Item value="item1" className="custom-accordion-item">
            <Accordion.Control>
              {" "}
              <h2 className="text-base text-light-black-5 font-semibold">
                {topic}
              </h2>
            </Accordion.Control>
            <Accordion.Panel>
              {" "}
              <p className="font-medium text-base text-light-black-5">
                {subTopic}{" "}
                <br /> <br /> 
                {subTopics}
              </p>{" "}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item2" className="custom-accordion-item">
            <Accordion.Control>
              {" "}
              <h2 className="text-base text-light-black-5 font-semibold">
              {topic2}
              </h2>
            </Accordion.Control>
            <Accordion.Panel>
              {" "}
              <p className="font-medium text-base text-light-black-5">
                {subTopic2}{" "}
                <br /> <br /> 
                {subTopics2}
              </p>{" "}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item3" className="custom-accordion-item">
            <Accordion.Control>
              {" "}
              <h2 className="text-base text-light-black-5 font-semibold">
              {topic3}
              </h2>
            </Accordion.Control>
            <Accordion.Panel>
              {" "}
              <p className="font-medium text-base text-light-black-5">
                {subTopic3}{" "}
                <br /> <br /> 
                {subTopics3}
              </p>{" "}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item4" className="custom-accordion-item">
            <Accordion.Control>
              {" "}
              <h2 className="text-base text-light-black-5 font-semibold">
              {topic4}
              </h2>
            </Accordion.Control>
            <Accordion.Panel>
              {" "}
              <p className="font-medium text-base text-light-black-5">
                {subTopic4}{" "}
                <br /> <br /> 
                {subTopics4}
              </p>{" "}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default FAQs;
