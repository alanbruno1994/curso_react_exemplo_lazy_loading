import './App.css';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
//Isso usamos para fazer o carregamento lento
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
function App() {
  //Esse suspense e necessario e sera mostrado o que tem fallback enquanto os componentes nao forem carregados
  return <Suspense
    fallback={
      <div className='centered'>
       Loading...
      </div>
    }
  >
    <Switch>     
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
    </Switch>   
    </Suspense>
  
}

export default App;
