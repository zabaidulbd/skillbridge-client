import Footer from "@/src/components/shared/Footer/Footer";
import Navbar from "@/src/components/shared/Navbar/Navbar";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Commonlayout;
