import ReactDOM from 'react-dom/client'
import './main.css'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import { GlobalStyle } from './styles/StyledComponents'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
)
