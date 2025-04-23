import React, { useEffect, useState } from "react";
import AddCoordinates from "./components/AddCoordinates";
import ShowCoordinates from "./components/ShowCoordinates";
import MakeImage from "./components/MakeImage";


function App() {
  const [imagemUrl, setImagemUrl] = useState("");

  const [coordinates, setCoordinates] = useState(
    { LatitudeMin: -34.44, LatitudeMax: -21.43, LongitudeMin: 301.14, LongitudeMax: 320.57 }
  );

   function onAddCoordinatesSubmit(LatitudeMin, LatitudeMax, LongitudeMin, LongitudeMax) {
     setCoordinates({ LatitudeMin, LatitudeMax, LongitudeMin, LongitudeMax });

    const flaskUrl = `http://127.0.0.1:5000/imagem?param1=${LatitudeMin}&param2=${LatitudeMax}&param3=${LongitudeMin}&param4=${LongitudeMax}`;

        console.log("E aí, isso aqui roda sempre que o componente renderizar!");
           // Obtém a imagem do servidor Flask
    fetch(flaskUrl)
      .then((response) => {
        if (response.ok) {
            return response.blob(); // Converte a resposta em um Blob
        }
            throw new Error("Erro ao buscar imagem");
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob); // Cria uma URL temporária para exibir a imagem
        setImagemUrl(url); // Define a URL como estado para renderizar no React
      })
      .catch((error) => console.error(error));

   }


  useEffect(() => {
    // URL do servidor Flask
    const flaskUrl = "http://127.0.0.1:5000/imagem?param1=-34.44&param2=-21.43&param3=301.14&param4=320.57";

    // Obtém a imagem do servidor Flask
    fetch(flaskUrl)
      .then((response) => {
        if (response.ok) {
          return response.blob(); // Converte a resposta em um Blob
        }
        throw new Error("Erro ao buscar imagem");
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob); // Cria uma URL temporária para exibir a imagem
        setImagemUrl(url); // Define a URL como estado para renderizar no React
      })
      .catch((error) => console.error(error));
  }, []);



  return (
    <div>

     <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-500' >
       <div className='w-[500px] mx-auto space-y-4'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Coordenadas</h1>
         <AddCoordinates coordinates={coordinates} onAddCoordinatesSubmit={onAddCoordinatesSubmit} />   
       </div>
     </div>

      <div className='w-[500px] mx-auto space-y-4'>

        <ShowCoordinates coordinates={coordinates} />
      </div>


    <div>
      <h1>Imagem do Flask</h1>
      {imagemUrl ? <img src={imagemUrl} alt="Gerado pelo Flask" /> : <p>Carregando imagem...</p>}
    </div>


    </div>
  );
}

export default App;


