import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import NewsFeed from './View/NewsFeed';

// ZERO

/*let hello = 'Hello Hacker News';

const element = 
  <div
    style={{fontSize: 36, color: 'green'}}
    onClick={() => window.alert({hello})}
  >  
    {hello}
  </div>

/*const element = React.createElement(
  'div',
  {style: {fontSize: 36, color: 'green' }},
  hello
);*/

const LOREM_IPSUM = 
`
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.
`
const ARTICLES = [
  {
    description: LOREM_IPSUM,
    id: 1,
    link: 'https://google.com',
    title: 'Article 1',
  },
  {
    description: LOREM_IPSUM,
    id: 2,
    link: 'https://google.com',
    title: 'Article 2',
  },
  {
    description: LOREM_IPSUM,
    id: 3,
    link: 'https://google.com',
    title: 'Article 3',
  },
]

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.loadArticles = this.loadArticles.bind(this);
    this.state = { articles: []};
  }

  loadArticles() {
    return getArticles().then(articles => {
      this.setState({articles});
    });
  }

  render() {
    return (
      <NewsFeed articles = {this.state.articles} onMount = {this.loadArticles} /> 
    );
  }
}

// TWO
/*
const element = 
  <div>
    <Article 
      title="Article 1"
      description="Curabitur tincidunt posuere justo, a interdum ipsum tincidunt scelerisque. Vestibulum nec purus ac erat vehicula egestas eget ac augue. Praesent varius diam et nisl tincidunt mattis sit amet eget ex. Suspendisse facilisis pulvinar odio, ac sollicitudin nunc interdum at. Curabitur auctor feugiat efficitur. Duis condimentum vulputate mollis. Donec semper ligula nec orci congue blandit nec quis nisi. Ut sit amet pretium purus, sit amet lacinia nisi. Quisque ac luctus justo, sed faucibus purus. Aliquam ut consectetur orci. Nulla pretium ipsum augue, sed aliquet sapien fringilla consectetur."
      link="https://www.google.com"
    />
    <Article 
      title="Article 2"
      description="Curabitur tincidunt posuere justo, a interdum ipsum tincidunt scelerisque. Vestibulum nec purus ac erat vehicula egestas eget ac augue. Praesent varius diam et nisl tincidunt mattis sit amet eget ex. Suspendisse facilisis pulvinar odio, ac sollicitudin nunc interdum at. Curabitur auctor feugiat efficitur. Duis condimentum vulputate mollis. Donec semper ligula nec orci congue blandit nec quis nisi. Ut sit amet pretium purus, sit amet lacinia nisi. Quisque ac luctus justo, sed faucibus purus. Aliquam ut consectetur orci. Nulla pretium ipsum augue, sed aliquet sapien fringilla consectetur."
      link="https://www.google.com"
    />
    <Article 
      title="Article 3"
      description="Curabitur tincidunt posuere justo, a interdum ipsum tincidunt scelerisque. Vestibulum nec purus ac erat vehicula egestas eget ac augue. Praesent varius diam et nisl tincidunt mattis sit amet eget ex. Suspendisse facilisis pulvinar odio, ac sollicitudin nunc interdum at. Curabitur auctor feugiat efficitur. Duis condimentum vulputate mollis. Donec semper ligula nec orci congue blandit nec quis nisi. Ut sit amet pretium purus, sit amet lacinia nisi. Quisque ac luctus justo, sed faucibus purus. Aliquam ut consectetur orci. Nulla pretium ipsum augue, sed aliquet sapien fringilla consectetur."
      link="https://www.google.com"
    />
  </div> */


ReactDOM.render(<Container />, document.getElementById('root'));