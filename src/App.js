import React, { Component } from 'react';
import './App.css';
import NotiziaPrincipale from './components/notiziaPrincipale';
import NotizieSecondarie from './components/notizieSecondarie';
import Menu from './components/header';
import Footer from './components/footer';

type Props = {
  newsData: Array<any>
}

class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      SecondaryNews: []
    }
    this.notizie()
  }

  notizie = () => {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(res => this.setState({ SecondaryNews: res.data }))
  }

  render() {
    return (
      <div>
        <Menu />
        <NotiziaPrincipale />
        <NotizieSecondarie newsData={this.state.SecondaryNews} />
        <Footer />
      </div>
    );
  }
}

export default App;
