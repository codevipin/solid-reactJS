var React = require('react');
var ReactRouter = require('react-router');
var Prompt = require('../components/Prompt');

var promptContainer = React.createClass({

	contextTypes: {

		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
			return {
				username: 'vipin'
			}
		},

	handleUpdateState: function (e) {
		this.setState({
			username: e.target.value
		})
	},	

	handleSubmitUser: function (e) {
		e.preventDefault();

		var username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerOne) {
			// Go to Battle
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username
				}
			})
		} else {

			// Go to player Two
			this.context.router.push('/playerTwo/' + this.state.username);
		}

	},


	render: function() {
		
		return (
			<Prompt 
			onSubmitUser = {this.handleSubmitUser} 
			onUpdateState = {this.handleUpdateState}
			header = {this.props.route.header}
			username = {this.state.username}/>
		);
	}

});

module.exports = promptContainer;