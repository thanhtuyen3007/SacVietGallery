import type { ReactNode } from "react";
import { SideBars } from "../SideBars/SideBars";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <SideBars />
      </header>
      <main>{children}</main>
    </div>
  );
};
