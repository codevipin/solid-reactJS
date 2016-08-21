var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var GithubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {

    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;

    var self = this;
    // Fetch info from github then update state
    GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    	.then(function (players) {
    		console.log(players);
    		self.setState({
    			isLoading: false,
    			playersInfo: [players[0], players[1]]
    		})
    	})
  },

  handleInitiateBattle: function () {

  	this.context.router.push({

  		pathname: '/results',

  		state: {

  			playersInfo: this.state.playersInfo
  		}
  	})
  },

  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} 
        onInitiateBattle={this.handleInitiateBattle}/>
    )
  }
});

module.exports = ConfirmBattleContainer;