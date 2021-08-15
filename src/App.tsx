import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './cat/Top';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;