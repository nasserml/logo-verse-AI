"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { db } from "@/configs/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

function LogoList() {
  const { userDetail, setUserDetails } = useContext(UserDetailContext);
  const [logoList, setLogoList] = useState([]);
  useEffect(() => {
    userDetail && GetUSerLogos();
  }, [userDetail]);

  const GetUSerLogos = async () => {
    const querySnapshot = await getDocs(
      collection(db, "users", userDetail?.email, "logos")
    );
    setLogoList([]);

    querySnapshot.forEach((doc) => {
      setLogoList((prev) => [...prev, doc.data()]);
    });
  };

  const ViewImage = (image) => {
    const imageWindow = window.open();
    imageWindow.document.write(`<img src="${image}" alt="Logo" />`);
  };

  return (
    <div className="mt-10 mb-40">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {logoList?.length > 0
          ? logoList?.map((logo, index) => (
              <div
                key={index}
                className="hover:scale-105 transition-all cursor-pointer"
                onClick={() => ViewImage(logo?.image)}
              >
                <Image
                  src={logo?.image}
                  width={400}
                  height={200}
                  className="w-full rounded-xl"
                  alt="Logo"
                />
                <h2 className="text-center text-lg font-medium mt-2">
                  {logo?.title}
                </h2>
                <p className="text-sm text-slate-400 text-center">
                  {logo?.desc}
                </p>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="w-full h-[200px] bg-slate-700 animate-pulse rounded-xl "></div>
            ))}
      </div>
    </div>
  );
}

export default LogoList;
