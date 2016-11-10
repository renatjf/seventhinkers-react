import React from 'react';

var testeNome = "Renato Freitas";


class Style extends React.Component{
  constructor(){
    super();
    this.state = {};
    this.nome = testeNome;
  }


  render(){
    return <div>
    { this.nome }
    </div>;
  }
}
export default Style;