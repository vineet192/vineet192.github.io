import './Blog.css';
import '../../Article-Card/Article-Card';

import { useEffect, useState } from 'react';
import ArticleCard from '../../Article-Card/Article-Card';

function Blog() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://dev.to/api/articles?username=vineet192')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch(err=> {
        alert("There was an error fetching the blogs, redirecting to homepage")
        window.location.href = '/'
      });
  }, []);
  return (
    <div className="blog">
      <h1>I love to write</h1>
      <div className="blog-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            articleTitle={article.title}
            tags={article.tag_list}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
