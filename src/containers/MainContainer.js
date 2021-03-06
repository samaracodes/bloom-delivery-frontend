import { Component }from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import NavBar from '../components/NavBar'
import Login from '../components/Login'
import About from '../components/About'
import Signup from '../components/Signup'
import Home from '../components/Home'
import { getCurrentUser } from '../actions/currentUser'
import { Redirect } from 'react-router-dom'


class MainContainer extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        const {loggedIn} = this.props
        return(
            <div>
                <NavBar currentUser={loggedIn} />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
      loggedIn: state.currentUser
    })
}
  
export default connect(mapStateToProps, { getCurrentUser })(MainContainer);
