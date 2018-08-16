import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "normalize.css/normalize.css";
import "./App.css";
import { bindActionCreators } from "redux";
import { setApi, getQuery } from "./actions/index";

class App extends Component {
  componentDidMount() {
    const { setApi } = this.props;
    setApi();
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    const { queryString } = this.props;
    if (queryString === "") {
      // const queryStringDefault =
    }
    console.log(nextProps);
  }
  handleInputChange = inputProp => {
    const { getQuery } = this.props;
    const queryString = inputProp.target.value;
    getQuery(queryString);
  };
  handleFormSubmit(e) {
    e.preventDefault();
    const inputSubmitted = e.target.elements.input_query.value.trim();

    console.log(inputSubmitted);
  }
  render() {
    const { queryString, setApiReducer } = this.props;
    const filteredShit = setApiReducer.car_details.filter(data => {
      return data.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
    });
    const emptyQuery = queryString === "";
    console.log(emptyQuery);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Filtering JSON Data</h1>
        </header>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="input_query"
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          <b> {queryString} </b>
        </p>
        {emptyQuery
          ? ""
          : filteredShit.map(element => (
              <p key={element.id}> {element.name} </p>
            ))}
      </div>
    );
  }
}

App.defaultProps = {
  setApiReducer: {}
};

App.propTypes = {
  setApi: PropTypes.func.isRequired,
  queryString: PropTypes.string.isRequired,
  setApiReducer: PropTypes.shape({
    car_details: PropTypes.array
  })
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setApi,
      getQuery
    },
    dispatch
  );
const mapStateToProps = state => {
  const { queryString, setApiReducer } = state;

  return {
    queryString,
    setApiReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
