"use client";
import { FC, ReactNode, Suspense, useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
