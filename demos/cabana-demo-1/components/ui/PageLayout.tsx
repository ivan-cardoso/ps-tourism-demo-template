import type { ReactNode } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar variant={"secondary"} />
      {/* <main className="pt-16 lg:pt-20">{children}</main> */}
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
