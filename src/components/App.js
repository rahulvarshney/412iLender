import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import Navbar from './Navbar'
import Contact from './Contact'
import LoanApplication from './LoanApplication'
import LoanDisclosures from './LoanDisclosures'
import Appointment from './Appointment'
import Directions from './Directions'
import LoanInfo from './LoanInfo'
import LoanCalculators from './LoanCalculators'
import Quote from './Quote'
import Testimonials from './Testimonials'
import Glossary from './Glossary'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/players' component={Players} />
            <Route path='/teams' component={Teams} />
            <Route path='/contact' component={Contact} />
            <Route path='/loan/application' component={LoanApplication} />
            <Route path='/loan/disclosures' component={LoanDisclosures} />
            <Route path='/appointment' component={Appointment} />
            <Route path='/directions' component={Directions} />
            <Route path='/loan/info' component={LoanInfo} />
            <Route path='/loan/calculators' component={LoanCalculators} />
            <Route path='/quote' component={Quote} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/glossary' component={Glossary} />
            <Route render={() => <h1 className='text-center'>404 AJDL</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App