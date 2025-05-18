import ExtraSection1 from "../components/ExtraSection1";
import ExtraSection2 from "../components/ExtraSection2";
import LatestVisa from "../components/LatestVisa";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedData= useLoaderData()
    return (
        <div className="">
          
           <Banner/>
           <div className='px-4'
           >
            
           <LatestVisa  data={loadedData}/>
           </div>
           {/* <br />
           <ExtraSection1/>
           <br />
           <ExtraSection2/> */}
        </div>
    );
};

export default Home;