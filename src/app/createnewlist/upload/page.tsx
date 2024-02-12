"use client";
import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import { UploadIcon } from "@/public/icons";
import Link from "next/link";
import { FileButton, Group, Text } from "@mantine/core";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="relative">
      <div className="">
        <ProgressBar progress={65} />
      </div>

      <div className="pt-8 overflow-y-scroll h-[85vh]">
        <div className="text-center px-[12rem]">
          <h1 className="text-[36px] font-semibold leading-[52px] pb-2">
          Upload the overview pictures
          </h1>
          <p className="text-base font-medium">
            Make sure the picture is an overview of the business you want to
            sell.
          </p>
        </div>

        <div className="pt-6 px-[12rem] pb-20">
          <div className="text-center border-dashed rounded-lg border-black-1 border-2 w-[631px] h-[296px] ">
            <span className="pt-[5rem] pb-[1rem] flex flex-col px-[6rem] gap-2 items-center justify-center">
              <UploadIcon width="16" height="16" color="#313734" />
              <p className="text-base font-medium text-light-black-5">
                Drag and drop files to upload to your media library. For photos,
                ise JPG or PNG.{" "}
              </p>
            </span>

            <Group
            
            >
              <FileButton onChange={setFile} accept="image/png,image/jpeg">
                {(props) => <button className=" border border-black-1 rounded-3xl w-[205px] h-[48px] text-light-black-5 font-semibold text-[16px] leading-[32px] " {...props}>Browse your device</button>}
              </FileButton>
            </Group>

            {file && (
              <Text size="sm"  mt="sm">
                Picked file: {file.name}
              </Text>
            )}
          </div>
        </div>
      </div>
      
      <div className="w-full absolute bottom-0 right-0 left-0 h-[50px] bg-light-black-12 border-t-[1px] border-t-light-black-1">
        <div className="flex justify-between pt-3 px-6">
          <Link href="../../createnewlist/duration">
            <IBackButton />
          </Link>
          <Link href="../../createnewlist/imagesupload">
            <NextButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
