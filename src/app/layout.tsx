import theme from "@/utils/styles/theme";
import { ThemeProvider } from "@mui/material";
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
                <ContextProvider>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </ContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
