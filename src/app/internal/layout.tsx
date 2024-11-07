import InternalLayout from "./internal-layout";

export const metadata = {
  title: "Tedible",
  description: "Internal Page for Tedible.",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <InternalLayout>{children}</InternalLayout>;
};

export default Layout;
