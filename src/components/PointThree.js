import { useEffect, useState } from "react";
import { fetchData } from "./Institutions";



const PointThree = () => {
    const [articles, setArticles] = useState([]);
    useEffect (() => {
        const getArticles = async () => {
            const data = await fetchData("literature?colombia");
            setArticles(data.hits.hits); 
        };
        getArticles();
    }, []);

    const authors = [];
    articles.map(article => {
        article.metadata.authors.map(author => {
            authors.push(author);
        });
    });
  return (
      <div>
            {authors.map(author => {
                return <h3>{author.full_name} : {author.hasOwnProperty('record') ? author.record.$ref : 'ref is missing'}</h3>;
            } )}
     </div>
  );
};
export default PointThree;