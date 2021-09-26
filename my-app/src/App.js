import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";

function App() {


  
  return ( 
    <div className="container">
      <h1 style={{ textAlign: "center", color: "lightgray" }}>โปรแกรม</h1>
      <FormComponent />

      <Transaction />
    </div>
  );
}

export default App;
