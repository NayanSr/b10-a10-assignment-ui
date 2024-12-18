import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {
    const loadedVisas= useLoaderData();
    // const [visas, setVisas]= useState([]);

    return (
        <div>
           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
           {
            loadedVisas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
           }

           </div>


          7. All visas page: On this page, a user can see all the visas added by all
users.Create a 4 column grid layout using cards. Each card will contain this
informationa. <br />
a. 3-4 information about the visa <br />
b. “See Details” button – will redirect to the Visa details page.(see
requirement 8) <br />
        </div>
    );
};

export default AllVisas;