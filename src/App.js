import MultiStepForm from './containers/MultiStepForm'

import logo from './assets/images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-3xl font-bold underline">
      <img src={logo} alt="logo kodakmafia" width={200} />
      </h1>
      </header>
      <main>
        <MultiStepForm />
      </main>
    </div>
  );
}

export default App;
