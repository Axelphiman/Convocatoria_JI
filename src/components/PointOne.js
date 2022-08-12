import { useEffect, useState } from "react";
import { fetchData } from "./Institutions";



const PointOne = () => { 
    const [institutions, setInstitutions] = useState([]);
    useEffect (() => {
        const getInstitutions = async () => {
            const data = await fetchData("institutions?q=colombia");
            setInstitutions(data.hits.hits); 
        };
        getInstitutions();
    }, []);
    const filteredInstitutions = institutions.filter(institution => institution.metadata.number_of_papers > 0);
    
  return (
    <div>
      {filteredInstitutions.map((institution) =>  {
        return <h3>{institution.metadata.legacy_ICN}</h3>;
      })}
    </div>
  );
};
export default PointOne;