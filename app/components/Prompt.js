var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

var Prompt = React.createClass({

PropTypes: {

	header:PropTypes.string.isRequired,
	onUpdateState: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired 
},	
	render: function() {
		return (
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}> 
				<h1>{this.props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={this.props.onSubmitUser}>
						<div className="form-group">
							<input 
								className="form-control"
								placeholder="Github Username"
								onChange={this.props.onUpdateState}
								value={this.props.username}
								type="text" />	
						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
							<button 
								className="btn btn-block btn-success"
								type="submit">
								continue
							</button>	
						</div>
					</form>
				</div>
			</div>
		);
	}

});

module.exports = Prompt;