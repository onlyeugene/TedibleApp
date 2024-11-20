import { BackButton } from "./back-button";
import { Social } from "../authenticate/social";
import { Card, CardContent,CardFooter, CardHeader } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  content?: React.ReactNode;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  content,
}: CardWrapperProps) => {
  return (
    <Card className="border-none bg-transparent text-white">
      <CardHeader>
        <h2 className="md:text-[32px] text-2xl font-medium text-center">{headerLabel}</h2>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <div className="flex items-center justify-center">
        <CardFooter>
          <BackButton content={content} label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </div>
      <hr className="mx-16 mb-5"/>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
    </Card>
  );
};
