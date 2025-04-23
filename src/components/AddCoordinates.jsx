import { useState } from "react";

// Função para verificar se as variáveis estão inválidas ou vazias
function verificarVariaveis(...variaveis) {
    for (const element of variaveis) {
        if (typeof element === "string") {
          if (element.trim() === "")
            return false; 
        } else if (element === null || element === undefined) {
          return false; 
        }
      }
      return true; 
  } 
  
function AddCoordinates({coordinates, onAddCoordinatesSubmit}) {
    const [LatitudeMin, setLatitudeMin] = useState(coordinates.LatitudeMin);
    const [LatitudeMax, setLatitudeMax] = useState(coordinates.LatitudeMax);
    const [LongitudeMin, setLongitudeMin] = useState(coordinates.LongitudeMin);
    const [LongitudeMax, setLongitudeMax] = useState(coordinates.LongitudeMax);
    return (
        <div>
            <h1>Adicionar Coordenadas</h1>
            <input type="text" placeholder="LatitudeMin"            
            value={LatitudeMin} onChange={(event) => setLatitudeMin(event.target.value)} />
            <input type="text" placeholder="LatitudeMax" 
            value={LatitudeMax} onChange={(event) => setLatitudeMax(event.target.value)} />
            <input type="text" placeholder="LongitudeMin" 
            value={LongitudeMin} onChange={(event) => setLongitudeMin(event.target.value)} />
            <input type="text" placeholder="LongitudeMax" 
            value={LongitudeMax} onChange={(event) => setLongitudeMax(event.target.value)} />
            
            <button onClick={() => 
           {
              // Testa as 4 variáveis
            const resultado = verificarVariaveis(LatitudeMin, LatitudeMax, LongitudeMin, LongitudeMax);
            console.log(resultado);

            if (!resultado) {
            return alert("Preencha as Coordenadas Corretamente");
            }
            onAddCoordinatesSubmit(LatitudeMin, LatitudeMax, LongitudeMin, LongitudeMax)
            }   
           }
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
            Gerar Figura
           </button>

        </div>
    );
}

export default AddCoordinates;