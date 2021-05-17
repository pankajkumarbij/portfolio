import Appbar from './components/appbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import Educations from './components/educations';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Opensource from './components/opensource';

function App() {
  return (
  	<>
  		<Router>
  			<Appbar/>
  			<Switch>
  				<Route path="/" exact component={Home} />
  				<Route path="/skills" component={Skills} />
  				<Route path="/educations" component={Educations} />
  				<Route path="/experiences" component={Experiences} />
  				<Route path="/projects" component={Projects} />
  				<Route path="/opensource" component={Opensource} />
  				<Route path="/contactme" component={Projects} />
  			</Switch>
  		</Router>
  	</>
  );
}

export default App;
