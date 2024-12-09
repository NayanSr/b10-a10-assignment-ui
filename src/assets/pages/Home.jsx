import Banner from "../../components/Banner";
import ExtraSection1 from "../../components/ExtraSection1";
import ExtraSection2 from "../../components/ExtraSection2";
import LatestVisa from "../../components/LatestVisa";

const Home = () => {
    return (
        <div>
          
           <Banner/>
           <LatestVisa/>
           <br />
           <ExtraSection1/>
           <br />
           <ExtraSection2/>
        </div>
    );
};

export default Home;