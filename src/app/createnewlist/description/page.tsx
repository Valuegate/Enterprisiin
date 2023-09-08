"use client";
import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import TextAreaWithCounter from "@/public/components/TextAreaWithCounter/TextAreaWithCounter";
import UploadBtn from "@/public/components/UploadBtn/UploadBtn";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import Link from "next/link";
import { useState } from "react";

const Description = () => {
  const [text, setText] = useState("");
  const maxLength = 30; // Define your desired maximum character limit

  const handleChange = (e: { target: { value: any } }) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={30} />
      </div>

      <div className="pt-8 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[36px] font-semibold leading-[52px] pb-2">
            Present your business to buyers
          </h1>
          <p className="text-base font-medium">
            Showcase your business strengths and value proposition to the
            buyers.
          </p>
        </div>

        <div className="pt-6 px-40 pb-20">
          <div className="pb-4">
            <label
              htmlFor="headline"
              className="font-semibold text-base text-light-green-17"
            >
              Headline
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Capture attention that summarizes your business&apos;s essence.
            </p>
            <div className="">
              <input
                className="search placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
                // rows={4}
                placeholder="Business caption"
                value={text}
                onChange={handleChange}
              ></input>
              <div className="font-medium text-base text-light-black-5 text-right">
                {maxLength - text.length} characters remaining
              </div>
            </div>
          </div>

          <div className="pb-4">
            <label
              htmlFor="business"
              className="font-semibold text-base text-light-green-17"
            >
              Business Description
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Provide an overview of your business&apos;s products, services,
              and mission.
            </p>
            <TextAreaWithCounter placeholder={"Business overview..."} />
          </div>

          <div className="pb-4">
            <label
              htmlFor="product"
              className="font-semibold text-base text-light-green-17"
            >
              Product and Services Description
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Detail the features, benefits, and value of your products and
              services.
            </p>
            <TextAreaWithCounter
              placeholder={"Product and services overview..."}
            />
          </div>

          <div className="pb-4">
            <label
              htmlFor="assets"
              className="font-semibold text-base text-light-green-17"
            >
              Assets Description
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Decribe any physical assets, equipments, or inventories.
            </p>
            <TextAreaWithCounter placeholder={"Assets overview..."} />
          </div>

          <div className="pb-4">
            <label
              htmlFor="facilities"
              className="font-semibold text-base text-light-green-17"
            >
              Facilities Description
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Highlight the unique facilities and amenities that set your
              business apart.
            </p>
            <TextAreaWithCounter placeholder={"Facilities overview..."} />
          </div>

          <div className="pb-4">
            <label
              htmlFor="capital"
              className="font-semibold text-base text-light-green-17"
            >
              Capitalization Description
            </label>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5">
              Explain the financial foundation of your business.
            </p>
            <TextAreaWithCounter placeholder={"Capital overview..."} />
          </div>

          <div className="pb-4">
            <label
              htmlFor="upload"
              className="font-semibold text-base text-light-green-17"
            >
              Upload your business plan documents
            </label>
            <p className="font-normal text-base text-light-black-5">
              Information including on market analysis, competitive advantage,
              growth strategies, financial projections, and the intended return
              on investment.
            </p>
            <div className="flex justify-start pt-4 ">
              <UploadBtn />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
        <div className="flex justify-between pt-3 px-6">
          <Link href="../../createnewlist/details">
            <IBackButton />
          </Link>
          <Link href="../../createnewlist/duration">
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
