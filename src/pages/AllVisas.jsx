import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {
    const loadedVisas= useLoaderData();
    // const [visas, setVisas]= useState([]);

    return (
        <div>
           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
           {
            loadedVisas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
           }

           </div>


        </div>
    );
};

export default AllVisas;