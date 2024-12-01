import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-blue-900"></div>
      <div className="container mx-auto max-w-full">
        <Navbar />
      </div>
    </div>
  )
}

export default App