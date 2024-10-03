import HomePageLayout from "./(homepage)/layout";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomePageLayout>{children}</HomePageLayout>
    </>
  );
}
