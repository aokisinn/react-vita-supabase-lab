import './App.css'

function App() {
  console.log(import.meta.env.VITE_SUPABASE_URL) // "123"
  console.log(import.meta.env.VITE_SUPABASE_ANON_KEY) // undefined

  const onClick = async () => {
    const data = await fetch('http://localhost:54321/functions/v1/hello-world', {
      method: 'POST',
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Functions' }),
    }).then((res) => res.json())
    console.log(data)
  }


  return (
    <>
      <h1>🚀 Vite + React + Supabase 🚀</h1>
      <button onClick={onClick}>Invoke Function</button>
    </>
  )
}

export default App
