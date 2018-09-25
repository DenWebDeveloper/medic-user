/* eslint-disable none-unused-vars */
import React, {Component, StrictMode} from 'react'
import Root from './components/Root'
import store from './redux'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import history from './history'
import {DragDropContextProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import 'materialize-css/dist/css/materialize.min.css'

/*eslint-enable no-unused-vars*/

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<DragDropContextProvider backend={HTML5Backend}>
						<StrictMode>
							<Root/>
						</StrictMode>
					</DragDropContextProvider>
				</ConnectedRouter>
			</Provider>
		)
	}

}

export default App
