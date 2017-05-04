import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TweetBox from './components/TweetBox';
import ContactListContainer from './components/ContactListContainer';
import EditInvoice from './components/invoice/EditInvoice';

const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

class TweetBoxSender extends Component {
  constructor(props) {
    super(props);
    this.handleSend.bind(this);
  }

  render() {
    return <TweetBox onSend={this.handleSend} />
  }

  handleSend(message) {
    console.log(`Sending message... "${message}"`);
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tweet">Tweet</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/invoice">Invoice</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/tweet" component={TweetBoxSender}/>
          <Route path="/contacts" component={ContactListContainer}/>
          <Route path="/invoice" component={EditInvoice}/>
        </div>
      </Router>
    );
  }
}

export default App;
