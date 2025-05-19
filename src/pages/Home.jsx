import ExtraSection2 from "../components/ExtraSection2";
import LatestVisa from "../components/LatestVisa";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import DarkTheam from "../components/DarkTheam";
import Success from "../components/Success";
import Reviews from "../components/Reviews";

const Home = () => {
    const loadedData= useLoaderData()
    return (
        <div className=" mb-6">
          
           <Banner/>
           <div className='px-4'
           >
            
           <LatestVisa  data={loadedData}/>
           </div>
           <Success/>
           <br />
           <Reviews/>
           {/* <br />
           <ExtraSection1/>
           <br />
           <ExtraSection2/> */}
        </div>
    );
};

export default Home;