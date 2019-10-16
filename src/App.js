import React from 'react';
import './App.css';
import {Route,Switch } from "react-router-dom"
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth ,creteUserProfileDocument} from "./firebase/firebase.util"
class App extends React.Component {
  constructor(){
    super()
    this.state  = {
      currentUser:null,
    }
  }
  unSubscribeFromAuth = null ;
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
          const userRef = await creteUserProfileDocument(userAuth)
          userRef.onSnapshot(snapchot=>{
            this.setState({
              currentUser:{
              id:snapchot.id,
              ...snapchot.data()
              }
             },()=>console.log(this.state))
          })
      }else{
        this.setState({currentUser:userAuth})
      }
    
    })
    //console.log(this.state.currentUser)
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){

  return (
    <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component ={Homepage}/>
        <Route exact path="/shop" component ={ShopPage}/>
        <Route exact path="/signin" component ={SignInAndSignUp}/>

        </Switch>    
    </div>
  );
}
}

export default App;
