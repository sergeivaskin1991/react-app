import React from 'react';
import ArticleList from '../ArticleList/index';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';



class App extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			reverted: false
		}
	}

	revert = () => {
		this.setState({ 
		reverted: !this.state.reverted 
	})
}

	render() {
		return(
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-3">
						App name
						<button className="btn" onClick={this.revert}>Revert</button>
					</h1>	
				</div>
				<ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
			</div>
		)
	}

}

export default App;