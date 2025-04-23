import React, { useEffect, useState } from "react";

function App() {
  const [imagemUrl, setImagemUrl] = useState("");

  useEffect(() => {
    // URL do servidor Flask
    const flaskUrl = "http://127.0.0.1:5000/imagem";

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
      <h1>Recebendo Imagem do Servidor Flask</h1>
      {imagemUrl ? (
        <img src={imagemUrl} alt="Imagem do servidor" style={{ maxWidth: "100%" }} />
      ) : (
        <p>Carregando imagem...</p>
      )}
    </div>
  );
}

export default App;


