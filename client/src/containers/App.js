import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import {Provider} from 'react-redux';
import Main from './Main';
import Footer from '../components/footer/Footer';
import {configureStore} from '../store'
import {setAuthorizationHeader, setCurrentUser} from '../store/action/auth';
import jwtDecode from 'jwt-decode';


const store = configureStore();

if (localStorage.jwtToken) {
	setAuthorizationHeader(localStorage.jwtToken);
	// prevent someone from manually tampering with the key of jwtToken in localStorage
	try {
	  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (e) {
	  store.dispatch(setCurrentUser({}));
	}
  }

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="onboarding">
				<Navbar/>
				<Main/>
			</div>
		<Footer/>
		</Router>
	</Provider>
)	

export default App;
