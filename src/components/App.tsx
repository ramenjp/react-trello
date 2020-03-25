import * as React from 'react';
import BoardContainer from './boards/BoardContainer';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <BoardContainer/>
            </div>
            
        );
    }
}

export default App;