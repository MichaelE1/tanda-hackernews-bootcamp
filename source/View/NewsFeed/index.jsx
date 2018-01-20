import React from 'react';
import Article from '../../Component/Article';
import Loadable from '../../Util/Loadable';

export function NewsFeed(props) {
    const articles = props.articles.map(article => 
      <Article
        description={article.description}
        key={article.id}
        link={article.link}
        title={article.title}
      />
    )
    return (
      <div>{articles}</div>
    )
  }

  export default Loadable(NewsFeed)