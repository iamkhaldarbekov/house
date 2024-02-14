import './index.css'

import {Header, Products, Benefits, Team, About, Partners, Footer} from './containers'

function App() {
  return (
    <div className="application">
      <Header />
      <Products />
      <Benefits />
      <Team />
      <About />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;