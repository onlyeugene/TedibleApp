import InternalLayout from "./internal-layout";


export const metadata = {
  title: 'Tedible',
  description: 'Internal Page for Tedible.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <InternalLayout>{children}</InternalLayout>;
};

export default Layout;
