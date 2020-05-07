import React, {Component, ChangeEvent} from 'react';
import './App.scss';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import TextLengthInput from './TextLengthInput/TextLengthInput';

interface AppState {
  readonly username: string
}

class App extends Component<{}, AppState> {

  state: AppState = {
    username: 'admin'
  }

  changeUserNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
