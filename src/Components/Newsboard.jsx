

// import { useEffect, useState } from "react";
// import Newsitem from "./Newsitem";

// const Newsboard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = import.meta.env.VITE_NEWSAPI_KEY;
//         if (!apiKey) {
//           throw new Error("API key is missing");
//         }
//         const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
  
//         const response = await fetch(url);
//         console.log("Response status:", response.status); // Add this line to log the response status
        
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} - ${response.statusText}`);
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

        const response = await fetch(url, {
          headers: {
            // Add any additional headers here if needed
            // Example:
            // 'Upgrade': 'HTTP/2.0',
            // 'Connection': 'upgrade'
          }
        });
        console.log("Response status:", response.status); // Add this line to log the response status
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
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



