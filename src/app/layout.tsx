import type { Metadata } from "next";
import ContextProvider from "@/contexts/contexts";
import { ToastContainer } from "react-toastify";
import { SubscribeProvider } from "@/contexts/subscribeContext";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
};

export default RootLayout;
