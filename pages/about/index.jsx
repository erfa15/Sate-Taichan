import React from "react";
import { Layout } from "@/src/components";
import { About } from "@/src/containers";

export default function AboutPage() {
  return (
    <Layout title="About" active="About">
      <About />
    </Layout>
  );
}
