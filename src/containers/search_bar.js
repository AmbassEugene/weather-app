import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      error: ''
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange(event){
    let searchTerm = event.target.value;
    this.setState({term: searchTerm})
  }
  onFormSubmit(event){
    // first stop form submit
    event.preventDefault();
    // check if the submitted form is empty or not

    // then make the ajax call to fetch the data

    // console.log(this.state.term)
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <div className="input-field col s12 m8 offset-m2 ">
            <input id="last_name" type="search" className="validate col s9" value={this.state.term}
              onChange={this.onInputChange} />
            <label for="last_name" className={this.state.error}>Get a forecast for your fav cities</label>
            <button className="btn waves-effect circle col s3 " type="submit">Search
          </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);
