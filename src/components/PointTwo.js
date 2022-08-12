import { useEffect, useState } from "react";
import { fetchData } from "./Institutions";


const PointTwo = () => {
    const [articles, setArticles] = useState([]);
    useEffect (() => {
        const getArticles = async () => {
            const data = await fetchData("literature?colombia");
            setArticles(data.hits.hits); 
        };
        getArticles();
    }, []);
    
   const filteredArticles = articles.filter(article => {
    return article.metadata.author_count < 10;
   });
  return (
    <div>
      {filteredArticles.map((article) =>  {
        return <h3>{article.metadata.titles[0].title}</h3>;})}
    </div>
  );
};
export default PointTwo;