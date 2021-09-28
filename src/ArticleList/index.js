import React, { useState } from 'react';
import Article from '../components/Article';
import './style.css'


class ArticleList extends React.PureComponent {
    state = {
        openArticleId: null
    }

    handleClick = openArticleId => {
      this.setState({ 
          openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
      })
    }

    render() {
        const articleElements = this.props.articles.map((article) => 
        <li key={article.id} className="article-list__li">
            <Article article={article} 
            isOpen={this.state.openArticleId === article.id}
            onButtonClick={this.handleClick.bind(this, article.id)}
            />
        </li>
      )
      return(
        <ul>
            {articleElements}
        </ul>
      )
    }
}

export default ArticleList;