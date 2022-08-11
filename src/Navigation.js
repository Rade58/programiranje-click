import {NavLink} from 'react-router-dom'


export const Navigation = ({children}) => {
  return <nav className='col-span-3 flex flex-col border-r-w border-cyan-600 h-full'>
    {children}
  </nav>
}

export const NavigationLink = ({children, to}) => {
  return <NavLink
    to={to}
    // I GUESS YOU CAN ADD FUNCTION FOR AS A className
    // FOR THE NavLink COMPONENT
    className={({isActive}) => {
      return isActive? "bg-teal-800 hover:bg-teal-100":
      "bg-cyan-300 hover:bg-cyan-800"
    }}
  >
    <article className='w-full p-4'>
      {children}
    </article>
  </NavLink>
}
