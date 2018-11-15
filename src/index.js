import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authenticate from './routes/Authenticate';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducers/index'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Authenticate />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
