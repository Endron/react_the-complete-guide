import React from 'react';
import './App.scss';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import TextLengthInput from './TextLengthInput/TextLengthInput';


class App extends React.Component {

  state = {
    username: 'admin'
  }

  changeUserNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <TextLengthInput/>
        <p/>
        <p/>
        <UserInput handler={this.changeUserNameHandler} initialValue={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
