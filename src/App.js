import { useEffect, useState } from "react";
import './App.css'

function App() {

  const [cuenta, setCuenta] = useState('');
  const [propina, setPropina] = useState('10%');
  const [dividir, setDividir] = useState(1);
  const [divisionTotal, setDivisionTotal] = useState(0);

  const handlePropinaChange = (e) => {
    let value = e.target.value.replace('%', '');
    const element = '%'
    if(value.indexOf(element) === -1){
      value = value+'%';
    }
    if(value === '%'){
      value = 0+'%';
    }
    setPropina(value);
  }
  const handleCuentaChange = (e) => {
    setCuenta(e.target.value);
    calcular();
  }
  const dividirResta = () =>{
    setDividir(valorAnterior => Math.max(valorAnterior -1, 1));
  }
  const dividirSuma = () =>{
    setDividir(valorAnterior => valorAnterior + 1)
  }

  const calcular = () => {
    const porcentaje = 1 + parseInt(propina.replace('%', '')) / 100;
    const resultado = (cuenta * porcentaje / dividir).toFixed(2);

    setDivisionTotal(resultado);

  }
  useEffect(() => {
    calcular();
  }, [cuenta,propina,dividir]);
  

  return (
    <div>
      <label>Cuenta Total</label>
      <input type="text" placeholder={'0.00'} value={cuenta}
        onChange={handleCuentaChange} />
      <label>Propina</label>
      <input type="text" placeholder={'0.00'} value={propina}
        onChange={handlePropinaChange}></input>
      <div className="summary">
        <div className="split">
          <label>Dividir</label>
          <div className="split-control">
            <button onClick={dividirResta}>-</button>
            <span> {dividir} </span>
            <button onClick={dividirSuma}>+</button>
          </div>
        </div>
        <div className="result">
          <label>División Total</label>
          <span> {divisionTotal} </span>
        </div>
      </div>
    </div>
  )
}

export default App
