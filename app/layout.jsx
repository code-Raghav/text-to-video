import Provider from "@/components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Press information Bureau",
  description: "Latest Press Release",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
