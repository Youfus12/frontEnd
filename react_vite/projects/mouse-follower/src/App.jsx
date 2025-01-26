import { useEffect, useState } from "react"


const FollowCursor = () => {
    
  const [enabled,setEnabled] = useState(false)
  const [position,setPosition] = useState({x: 0, y: 0})

  //pointer move
  useEffect( () => {
    console.log("Efecto",{enabled})

    const handleMove = (event) =>{
    const {clientX, clientY } = event
    setPosition({x :clientX, y :clientY})
    }
    if(enabled) {
      window.addEventListener('pointermove', handleMove)
      
    }
    // cleanUP: 
    // -> cuando el componente se desmonta
    // -> cuando se cambian las dependencias
    return () => {
      window.removeEventListener('pointermove',handleMove)
      setPosition({x : 250, y: 300})
    }
  },[enabled])  
  // [] -> se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cuando se monta el componente y cuando cambia enabled
  // [undefined] -> se ejecuta cada vez que se renederiza el componente
  // change body className

  useEffect(() =>{
    document.body.classList.toggle('no-cursor',enabled)

    return () =>{
      document.body.classList.remove('no-cursor')
    }
  },[enabled])


return(
  <>
        <div style={{
          position:'absolute',
          backgroundColor: 'beige',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left : -20,
          top : -20,
          width : 40,
          height : 40,
          transform : `translate(${position.x}px ,${position.y}px)`
        }}>

        </div>
        <button onClick={ () => setEnabled(!enabled)}>
            {enabled ? "Desactivar" : "Activar"} seguir cursor
          </button>

  </>
)

}

function App() {

  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowCursor/>}
      <aside >
      <button onClick={() => setMounted(!mounted)}> Activate the component</button>
    
      </aside>
    </main>
  
  )
}

export default App
