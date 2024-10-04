import { useEffect, useState } from 'react'

function App() {
  const [darkMode , setDarkMode] = useState(false);

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }

  useEffect(()=>{
    if (darkMode) {
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
  },[darkMode])


  return (
    <>
      <div className="flex flex-col justify-center dark:bg-black  h-screen items-center">
        <div className='w-full text-center dark:text-white'>
          <h1 className='font-bold text-4xl'>trying dark mode</h1>
          <p className='px-8 m-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
             iure assumenda voluptates ducimus quasi facilis deserunt 
             <br /> itaque eius magni. Ad pariatur laudantium fugit voluptatum
            natus odio harum praesentium velit dolorum!
          </p>
        </div>
        <button 
        className='border-2 border-black px-2 py-1 hover:bg-black hover:text-white rounded-xl dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'
        onClick={toggleDarkMode}
        >{darkMode ? "light":"dark"} mode</button>
      </div>
    </>
  )
}

export default App
