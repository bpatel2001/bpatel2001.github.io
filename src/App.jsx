import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-yellow-50"></div>
      <div className="container mx-auto max-w-full px-8">
        <Navbar />
      </div>
    </div>
  )
}

export default App