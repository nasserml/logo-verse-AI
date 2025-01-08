"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Info() {
  const { userDetail, setUserDetails } = useContext(UserDetailContext);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl text-primary">
          Hello {userDetail?.name}
        </h2>
        <div className="flex items-center gap-2">
          <Image src={"/coin.png"} width={40} height={40} alt="coin" />
          <h2 className="text-lg font-bold">{userDetail?.credits} credits left</h2>
        </div>
      </div>

<div className="flex justify-between items-center mt-5">
    <h2 className="font-bold text-2xl">Dashboard</h2>
    <Link href={"/create"}><Button>+ Create New Logo</Button></Link>

</div>

    </div>
  );
}

export default Info;
