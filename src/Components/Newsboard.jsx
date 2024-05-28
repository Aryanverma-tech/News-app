// import { useEffect } from "react";
// import{useState} from "react" ;
// import Newsitem from "./Newsitem";


// const Newsboard = ({category}) => {

//     const [articles,setArticles]=useState([]);

//     useEffect(()=>{
//       let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1bd6def437d34b31b1cd58f246f51295`;
    
//         fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
//     },[category])
//   return (
//     <div>
//         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//         {articles.map((news,index)=>{
//             return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />

//         })};
      
//     </div>
//   )
// }

// export default Newsboard;



// import { useEffect, useState } from "react";
// import Newsitem from "./Newsitem";

// const Newsboard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = process.env.REACT_APP_NEWSAPI_KEY;
//         const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchNews();
//   }, [category]);

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2>
//       {error && <p className="text-center text-danger">{error}</p>}
//       {articles.map((news, index) => (
//         <Newsitem
//           key={index}
//           title={news.title}
//           description={news.description}
//           src={news.urlToImage}
//           url={news.url}
//         />
//       ))}
//     </div>
//   );
// };

// export default Newsboard;












import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWSAPI_KEY;
        if (!apiKey) {
          throw new Error("API key is missing");
        }
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error && <p className="text-center text-danger">{error}</p>}
      {articles.map((news, index) => (
        <Newsitem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default Newsboard;








