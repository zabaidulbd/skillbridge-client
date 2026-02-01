import Navbar from "@/src/components/shared/Navbar/Navbar";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Commonlayout;
