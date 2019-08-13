import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Route ,Switch} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';


class App extends Component {
  // state= {
  //   show: true
  // };

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({show:false});
  //   },5000)
  // };

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          <BurgerBuilder/>
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
