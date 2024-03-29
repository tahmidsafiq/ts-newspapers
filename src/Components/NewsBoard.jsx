import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";


const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4fd7c3e1da7b4463adca0a02d9be549d`;

    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

  },[category])
  return (
    <div>
      <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
