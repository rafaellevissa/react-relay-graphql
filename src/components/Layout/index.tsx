import { FunctionComponent, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-zinc-300 flex items-center justify-center">
      {children}
    </div>
  );
};
