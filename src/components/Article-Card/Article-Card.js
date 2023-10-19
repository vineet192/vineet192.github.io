import './Article-Card.css';

function ArticleCard(props) {
  return (
    <div
      className="article-card"
      onClick={() => {
        window.open(props.url);
      }}>
      <h1 className="article-title">{props.articleTitle}</h1>
      <p className="tags">{props.tags.map((tag) => `#${tag} `)}</p>
    </div>
  );
}

export default ArticleCard;
