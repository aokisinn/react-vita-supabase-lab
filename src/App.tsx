import './App.css'

function App() {
  console.log(import.meta.env.VITE_SUPABASE_URL) // "123"
  console.log(import.meta.env.VITE_SUPABASE_ANON_KEY) // undefined
  
  return (
    <>
      <h1>🚀 Vite + React + Supabase 🚀</h1>
    </>
  )
}

export default App
