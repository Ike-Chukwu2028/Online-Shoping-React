import React from "react";

class connectionExample extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    };
  }

  fetchData(){
    fetch('127.0.0.1:8000/api/')
    .then(respons=>respons.json())
    .then((data)=>{
      this.setState({
        data:data
      });
      console.log(data)
    });
  }

  componentDidMount(){
    this.fetchData();
  }
  render() {
    return <div>Example connection</div>;
  }
}
export default connectionExample;
