import './App.css'
import HomePage from './Home'
import AddPiece from './AddPiece'
import PieceList from './PieceList'
import ComposerList from './ComposerList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'

function App() {

  return (
    <Router>
      <div className="App-header">
        <div className="App">
          <nav>
            <Sidebar />
          </nav>
          <main>
          <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path="/pieces" exact component={PieceList} />
              <Route path='/pieces/add' component={AddPiece} />
              <Route path="/composers" exact component={ComposerList} />
            </Switch>
          </main>
        </div >
      </div>
    </Router>
  );
}

export default App;
