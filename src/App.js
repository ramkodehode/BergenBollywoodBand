import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const URL =
    "https://3gyp0oi0.api.sanity.io/v2021-10-21/data/query/production?query=*%20%5B_type%3D%3D'post'%5D";

  const getSongs = async () => {
    await axios
      .get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="App">
      <h1>BergenBollywoodBand</h1>
      <ol>
        {data.result?.map((item, index) => {
          return (
            <div key={index} className="App-header">
              <b>
                <li> {item.name}</li>
              </b>
              <h4>Orignal: </h4>
              <a target={'blank'} href={item.original}>
                {item.original}
              </a>

              <h4>Alternative 1: </h4>
              <a target={'blank'} href={item.alternativeone}>
                {item.alternativeone}
              </a>

              <h4>Alternative 2: </h4>

              <a target={'blank'} href={item.alternativetwo}>
                {item.alternativetwo}
              </a>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
