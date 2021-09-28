import React from 'react';

function Article(props) {
	const { article, isOpen, onButtonClick } = props;
	const body = isOpen && <section className="card-text">{article.text}</section>

	return(
		<div className="card mx-auto" style={{width: '50%'}}>
		  <div className="card-header">
		    <h2>
			  {article.title}
			  <button onClick={onButtonClick} className="btn btn-primary float-right">
			  {isOpen ? 'close' : 'open'}
			  </button>
			</h2>
		  </div>
		  <div className="card-body">
			<h6 className="card-subtitle text-muted" style={{marginTop: '0'}}>creating date: {(new Date(article.date)).toDateString()}</h6>
			  {body}
		  </div>
		</div>
	)
}

// class Article extends React.PureComponent {
// 	render() {
// 		const { article, isOpen, onButtonClick } = this.props;
// 		const body = isOpen && <section className="card-text">{article.text}</section>
	
// 		return(
// 		<div className="card mx-auto" style={{width: '50%'}}>
// 		  <div className="card-header">
// 		    <h2>
// 			  {article.title}
// 			  <button onClick={onButtonClick} className="btn btn-primary float-right">
// 			  {isOpen ? 'close' : 'open'}
// 			  </button>
// 			</h2>
// 		  </div>
// 		  <div className="card-body">
// 			<h6 className="card-subtitle text-muted" style={{marginTop: '0'}}>creating date: {(new Date(article.date)).toDateString()}</h6>
// 			  {body}
// 		  </div>
// 		</div>
// 		)
// 	}
// }


export default Article;