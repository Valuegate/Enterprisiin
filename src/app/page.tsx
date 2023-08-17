"use client";
import { useEffect } from "react";
import Image from "next/image";
import { GoogleIcon } from "../icons";
import Button from "../components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/register");
  }, [router]);

  return (
    <>
      {/* <GetStarted /> */}
      {/* <Button
        type="button"
        className="border-r-amber-400 rounded-md"
        // disabled={true}
        colorType="secondary"
        loading={load}
        handleClick={() => setLoad(!load)}
      >
        Submit
      </Button> */}
    </>
  );
}
