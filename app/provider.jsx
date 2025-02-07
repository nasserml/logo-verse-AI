"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import { Header } from "./_components/header";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    user && CheckUserAuth();
  }, [user]);
  // Save user data
  const CheckUserAuth = async () => {
    // Save User to Database
    const result = await axios.post("/api/users", {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });

    setUserDetail(result.data);
  };
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <Header />
        <div className="">{children}</div>
      </UserDetailContext.Provider>
    </ThemeProvider>
  );
}

export default Provider;
