import {NavLink} from 'react-router-dom'


export const Navigation = ({children}) => {
  return <nav className='col-span-3 flex flex-col border-r-w border-indigo-600 h-full'>
    {children}
  </nav>
}

export const NavigationLink = ({children, to}) => {
  return <NavLink
    to={to}
    // I GUESS YOU CAN ADD FUNCTION FOR AS A className
    // FOR THE NavLink COMPONENT
    // HEWRE isActive MEANS THAT IT IS GOING TO BE true
    // WHEN ROUTE IS CURRENTLY VISITED
    className={({isActive}) => {
      return isActive? "bg-indigo-900 hover:bg-indigo-400":
      "bg-indigo-700 hover:bg-indigo-600"
    }}
  >
    <article className='w-full p-4'>
      {children}
    </article>
  </NavLink>
}
