import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {
    const loadedVisas = useLoaderData();
    const [sortOption, setSortOption] = useState("default");
    const [visas, setVisas] = useState(loadedVisas);

    //! Sorting handler start
    const handleSort = (option) => {
        setSortOption(option);
        let sortedVisas = [...loadedVisas];
        
        switch(option) {
            // Price sorting
            case "fee-low-high":
                sortedVisas.sort((a, b) => a.fee - b.fee);
                break;
            case "fee-high-low":
                sortedVisas.sort((a, b) => b.fee - a.fee);
                break;
            
            // Country name sorting
            case "country-asc":
                sortedVisas.sort((a, b) => a.countryName.localeCompare(b.countryName));
                break;
            case "country-desc":
                sortedVisas.sort((a, b) => b.countryName.localeCompare(a.countryName));
                break;
            
                      
            
        }
        
        setVisas(sortedVisas);
    };

     //! Sorting handler end

    return (
        <div>
            {/* Enhanced Sorting Controls */}
            <div className=" flex flex-wrap justify-between items-center gap-4 my-4 px-4">
                <h2 className="text-xl font-semibold">Sort By:</h2>
                <div className="flex flex-wrap gap-2">
                    <select 
                        value={sortOption}
                        onChange={(e) => handleSort(e.target.value)}
                        className="border rounded p-2 bg-white shadow-sm dark:bg-gray-700 dark:text-white"
                    >
                        
                        
                            <option value="country-asc">A-Z</option>
                            <option value="country-desc">Z-A</option>
                       
                            <option value="fee-low-high">Low to High</option>
                            <option value="fee-high-low">High to Low</option>
                        
                       
                        
                    </select>
                </div>
            </div>

            {/* Visa Cards Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 px-4">
                {visas.map(visa => (
                    <VisaCard key={visa._id} visa={visa}></VisaCard>
                ))}
            </div>
        </div>
    );
};

export default AllVisas;