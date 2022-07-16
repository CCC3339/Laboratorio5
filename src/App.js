import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  //let temperatureColor = 'cold'
  //let temperatureValue = '10'
  let [temperatureValue, setTemperatureValue]=useState(10);
  let [temperatureColor, setTemperatureColor]=useState('cold');
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 

// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

let increaseTemperature = () => {
  let newTemperature = temperatureValue + 1;
  if(newTemperature <= 30 ){setTemperatureValue(newTemperature);}
  if (newTemperature > 15 ) {
    setTemperatureColor('hot');
  }
};

let decreaseTemperature = () => {
  let newTemperature = temperatureValue - 1;
  if(newTemperature >= 0 ){setTemperatureValue(newTemperature);}
  if (newTemperature <20 ) {
    setTemperatureColor('cold');
  }
};

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
				<button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
}

export default App;
