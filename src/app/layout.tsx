import type { Metadata } from "next";
import ContextProvider from "@/contexts/contexts";

import "@/scss/global.scss";

export const metadata: Metadata = {
  title: "Lumos",
  description: "Lumos",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-br">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
