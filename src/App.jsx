import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [n3, setN3] = useState('')
  const [n4, setN4] = useState('')
  const [n5, setN5] = useState('')
  const [n6, setN6] = useState('')

  const [respMedia, setRespMedia] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {

    // Só calcula se TODOS estiverem preenchidos
    if ([n1, n2, n3, n4, n5, n6].every(v => v !== '')) {

      // Verifica se são números
      if ([n1, n2, n3, n4, n5, n6].some(v => isNaN(v))) {
        setError('Digite valores numéricos válidos')
        return
      }

      const media = (
        parseFloat(n1) +
        parseFloat(n2) +
        parseFloat(n3) +
        parseFloat(n4) +
        parseFloat(n5) +
        parseFloat(n6)
      ) / 6

      setRespMedia(media.toFixed(2))
      setError('')
    }

  }, [n1, n2, n3, n4, n5, n6])

  return (
    <div className="wrapAll">
      <h1 className="title">Notas</h1>
      <p>{error}</p>

      <div className="wrap">
        <input type="number" onChange={(e) => setN1(e.target.value)} value={n1} placeholder="nota 1" />
        <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder="nota 2" />
        <input type="number" onChange={(e) => setN3(e.target.value)} value={n3} placeholder="nota 3" />
        <input type="number" onChange={(e) => setN4(e.target.value)} value={n4} placeholder="nota 4" />
        <input type="number" onChange={(e) => setN5(e.target.value)} value={n5} placeholder="nota 5" />
        <input type="number" onChange={(e) => setN6(e.target.value)} value={n6} placeholder="nota 6" />
      </div>

      <div className="wrapResps">
        <h2>Resultado da Média</h2>
        <h3>{respMedia}</h3>
      </div>
    </div>
  )
}

export default App
