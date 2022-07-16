import React, { Component } from "react";
import PersonList from "./components/people/PersonList";
import Counter from "./components/counter/Counter";
import Details from "./components/mindforce/Details";
import Cards from "./components/mindforce/Cards";
import HooksForm1 from "./components/react-testing-lib/context/hooksform/HooksForm1";
import TestAxios from "./components/react-testing-lib/testaxios/TestAxios";

class App extends Component {
  state={
    people:{firstName: 'Dennis', lastName:'Kiplangat'}
  }
  render(){
    return (
      <div className="App">
        {/* <Cards amount={4}/> */}
        <Counter />
        <PersonList people={this.state.people}/>
        {/* <HooksForm1 /> */}
        <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
      </div>
    );
  }
}

export default App;
