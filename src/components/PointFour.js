import { useEffect, useState } from "react";
import { fetchData } from "./Institutions";


const PointFour = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const getArticles = async () => {
            const data = await fetchData("literature?colombia");
            setArticles(data.hits.hits);
        };
        getArticles();
    }, []);


    const ref = [];
    articles.map(article => {
        article.metadata.authors.map(author => {
            if (author.hasOwnProperty('record')) {
                ref.push(author.record.$ref);
            }
        });
    });
    //const authors = [];

    /*const texts = await Promise.all(urls.map(async url => {
        const resp = await fetch(url);
        return resp.text();
      }));*/
      
        var authors = [];
        async function getAuthors() {
        authors =  Promise.all(ref.map(async ref => {
        const resp = await fetch(ref);
        return resp.json();
    }));
    }
    getAuthors();


    /*Promise.all(ref.map(url => fetch(url)
        .then(response => response.json()).then(data => {
            authors.push(data);
        }
        )));*/
    console.log(authors);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rango</th>
                        <th>Institución</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha de Finalización</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => {
                        return (
                            <tr key={author.id}>
                                <td>{author.metadata.name.value}</td>
                                <td>{author.metadata.email_addresses[0].value}</td>
                                <td>{author.metadata.positions[0].rank}</td>
                                <td>{author.metadata.positions[0].institution}</td>
                                <td>{author.metadata.positions[0].start_date}</td>
                                <td>{author.metadata.positions[0].hasOwnProperty('end_date') ? author.metadata.positions[0].end_date : 'Actualmente en el cargo'}</td>

                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default PointFour;