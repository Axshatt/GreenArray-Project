import Navigation from "../Navbar";
import { CrowdCanvas, Skiper39 } from "../ui/skiper-ui/skiper39";

// Using the complete component
export const DemoSkiper39 = () => {
  return <Skiper39 />;
};

// Using just the crowd canvas
export const Landing = () => {
  return (
    <div className="relative h-screen w-full ">
         <div className="text-5xl font-bold  ">Green Array</div>  
        <Navigation/>
      <CrowdCanvas src="/" rows={15} cols={7} />
    </div>
  );
};
