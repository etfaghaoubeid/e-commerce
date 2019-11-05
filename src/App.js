import React from 'react';
import {Route,Switch ,Redirect} from "react-router-dom"
import {connect } from "react-redux"
import  { createStructuredSelector} from "reselect"

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth ,creteUserProfileDocument,addCollectionAndDocuments} from "./firebase/firebase.util"
import {getCurrentUser} from "./redux/user/user.actions"
import {selectCollectionsForPreview} from "./redux/shop/shop.selectors"
import {selectCurrentUser} from "./redux/user/user.selectors"
import Chekout from './pages/checkout/checkout.component';
class App extends React.Component {
  constructor(){
    super()
    this.state  = {
      currentUser:null,
    }
  }
  unSubscribeFromAuth = null ;
  componentDidMount(){
    const {setCurrentUser,collectionArray} = this.props
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
          const userRef = await creteUserProfileDocument(userAuth)
          userRef.onSnapshot(snapchot=>{
            setCurrentUser({
              id:snapchot.id,
              ...snapchot.data()
            })
            
          })
      }else{
        setCurrentUser(userAuth)
        //console.log(this.state)
        addCollectionAndDocuments('collection' ,collectionArray.map(({title,items})=>({title,items})))
      }
    
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/"  render={()=>this.props.currentUser?(<Homepage/>):(<Redirect to="/signin"/>)}/>
        <Route  path="/shop" component ={ShopPage}/>
        <Route exact path="/checkout" component ={Chekout}/>

        <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to ="/"/>):(<SignInAndSignUp/>)}/>

        </Switch>    
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionArray : selectCollectionsForPreview
})
const mapDispatchToProps  = dispatch =>({ 
  setCurrentUser : user=>dispatch(getCurrentUser(user))
    
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
