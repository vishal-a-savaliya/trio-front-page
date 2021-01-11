import Header from "./components/Header";
import Whatistrio from "./components/Whatistrio";
import Tuitionsondemand from "./components/Tuitionsondemand";
import Whatweoffer from "./components/Whatweoffer";
import Quotes from "./components/Quotes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>here we go!</h1> */}
       <Header></Header>
       <Whatistrio></Whatistrio>
       <Tuitionsondemand></Tuitionsondemand>
       <Whatweoffer></Whatweoffer>
       <Quotes></Quotes>
       {/* <Helpfull></Helpfull> */}
       {/* <Whytrio></Whytrio> */}
       {/* <Methodology></Methodology> */}
       {/* <Vision></Vision> */}
       {/* <Footer></Footer> */}
      </header>
    </div>
  );
}

export default App;
