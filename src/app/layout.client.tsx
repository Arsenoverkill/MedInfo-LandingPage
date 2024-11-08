"use client";
import React, { FC, ReactNode } from "react";
import "@/i18next";
import Layout from "@/component/layout/Layout";

interface LayoutClientType {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutClient;
