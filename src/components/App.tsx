import * as React from 'react';
import BoardContainer from './boards/BoardContainer';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ShowActiveBoard from './boards/CreatedBoards/ShowActiveBoard';

import { DndProvider } from "react-dnd"
import ReactDnDHTML5Backend from "react-dnd-html5-backend"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <DndProvider backend={ReactDnDHTML5Backend}>
                <Switch>
                    <Route exact path="/" component={BoardContainer} />
                    <Route path="/b/:id" component={ShowActiveBoard} />
                </Switch>
                </DndProvider>
            </div>
        );
    }
}

export default App;