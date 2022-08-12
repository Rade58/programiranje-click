import {Routes, Route} from 'react-router-dom'

import {Navigation, NavigationLink} from './Navigation'
import {Page} from './Page'


function Application() {
  
  return <main className='h-screen bg-indigo-800 text-zinc-100'>
    <h1 className='text-3xl font-bold bg-stone-600 p-4 border-b-2 border-stone-200'>
      Great Time To Find Pizza
    </h1>
    <div className="grid grid-cols-12 grid-rows-1 gap-4 h-full">
      <Navigation>
        <NavigationLink
          to="/"
        >
          Home
        </NavigationLink>
        <NavigationLink
          to="/notes/shibainu"
        >
          Shibainu
        </NavigationLink>
        <NavigationLink
          to="/notes/bukowsky"
        >
          Bukowsky
        </NavigationLink>
        <NavigationLink
          to="/notes/watchlist"
        >
          Watchlist
        </NavigationLink>
        <NavigationLink
          to="/notes/dog"
        >
          Dog
        </NavigationLink>
        <NavigationLink
          to="/notes/mozzarella"
        >
          Mozzarella
        </NavigationLink>
        <NavigationLink
          to="/notes/fondue"
        >
          Fondue
        </NavigationLink>
        <NavigationLink
          to="/notes/tool"
        >
          Tool (band)
        </NavigationLink>
      </Navigation>
      <section className='col-span-9 p-4'>
        <Routes>
          <Route
            path="/notes/tool"
            element={
              <div>
                <img 
                  src="/tool.jpg"
                  alt="a band called tool"
                />
              </div>
            }
          />
          <Route 
            path="/notes/:id"
            element={<Page />}
          />
          <Route 
            path="/"
            element={
              <div>
                Select your thruths.
              </div>
            }
          />
        </Routes>
      </section>
    </div>
  </main>
}

export default Application;