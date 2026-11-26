import WorkPage from "@/components/pages/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Work | Lavanya Sharma",
  description:
    "Projects, client work, requirement gathering and proposals by Lavanya Sharma.",
};

const Page = () => {
  return <WorkPage />;
};

export default Page;
