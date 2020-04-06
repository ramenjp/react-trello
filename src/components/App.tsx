import * as React from 'react';
import BoardContainer from './boards/BoardContainer';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ShowActiveBoard from './boards/CreatedBoards/ShowActiveBoard';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={BoardContainer} />
                    <Route path="/b/:id" component={ShowActiveBoard} />
                </Switch>
            </div>
        );
    }
}

export default App;