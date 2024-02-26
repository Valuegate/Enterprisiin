"use client";
import ContactUs from "@/public/components/ContactUs/ContactUs";
import FAQs from "@/public/components/FAQs/FAQs";
import * as Tabs from "@radix-ui/react-tabs";

const HelpAndSupport = () => {
  return (
    <div className="px-6 pt-4 overflow-y-scroll h-[85vh] pb-8">
      <h2 className="text-3xl font-bold text-black pb-4">Help & Support</h2>
      <div className="w-full bg-white rounded pb-8">
        <h3 className="text-2xl font-bold text-black py-4 pl-4">Help & Support</h3>
        <hr className="border-none bg-light-black-1 h-[1px]" />

        <Tabs.Root className="" defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex gap-8 border-b-[1px] border-light-black-1"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="bg-white px-4 h-[45px] flex items-center text-base font-semibold select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab1"
            >
              FAQs
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-4 h-[45px] flex items-center text-base font-semibold select-none first:rounded-tl-md  last:rounded-tr-md data-[state=active]:text-blue-base data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
              value="tab2"
            >
              Contact Us
            </Tabs.Trigger>
           
           
          </Tabs.List>
          <Tabs.Content className="grow pt-8 bg-white rounded" value="tab1">
            <FAQs heading={"Frequently Asked Questions"} subHeading={"Update your information and manage your account settings."} topic={"What is Valuegate Consulting?"} subTopic={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit."} subTopics={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. "} topic2={"What is Valuegate Consulting?"} subTopic2={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit."} subTopics2={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. "} topic3={"What is Valuegate Consulting?"} subTopic3={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit."} subTopics3={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. "} topic4={"What is Valuegate Consulting?"} subTopic4={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit."} subTopics4={"Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. Lorem ipsum dolor sit amet, cons  piscing elit lorem ipsumsit. "} />
          </Tabs.Content>
          <Tabs.Content className="grow pt-8 bg-white rounded" value="tab2">
            <ContactUs heading={"Common say hello!"} subHeading={"Update your information and manage your account settings."} />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default HelpAndSupport;