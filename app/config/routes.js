var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory  = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var promptContainer = require('../containers/promptContainer'); 
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var resultsContainer = require('../containers/resultsContainer')

var routes = (

	<Router history={hashHistory}>
	
		<Route path='/' component = {Main}>
			
			<IndexRoute component = {Home}/>

			<Route path='playerOne' header="Player One" component={promptContainer} />

			<Route path='playerTwo/:playerOne' header="Player Two" component={promptContainer} />

			<Route path='battle' component= {ConfirmBattleContainer} />

			<Route path='results' component = {resultsContainer} />
			
		</Route>
	</Router>
	);



module.exports = routes; 