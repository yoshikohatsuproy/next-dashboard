import Image from 'next/image'
import { IoAccessibilityOutline, IoBrowsersOutline, IoCalculatorOutline, IoFootballOutline, IoHeartOutline, IoLogoReact } from 'react-icons/io5'
import { SidebarItem } from './SidebarItem'
 

const menuItems = [
  { path : '/dashboard/main', title: 'Database', subTitle : 'Database Manager', icon : <IoBrowsersOutline size={40}/>},
  { path : '/dashboard/counter', title: 'Counter', subTitle : 'Contador Client Side', icon : <IoCalculatorOutline size={40}/>},
  { path : '/dashboard/pokemons', title: 'Pokemons', subTitle : 'Generación estática', icon : <IoFootballOutline size={40}/>},
  { path : '/dashboard/favorites', title: 'Favoritos', subTitle : 'Global State', icon : <IoHeartOutline size={40}   />},
  { path : '/dashboard/unicos', title: 'Unicos', subTitle : 'Global Unicos', icon : <IoAccessibilityOutline size={40}   />}

]




export const Sidebar = () => {
  return (
    <div style={{ width: '400px' }} id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-auto">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>


      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">

          <Image className='rounded-full w-8 h-8'
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
            alt="Profile Image"
            height={50}
            width={50}
          />
          <span className="text-sm md:text-base font-bold">
            Edward Tompson
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
          {
            menuItems.map(item => (
                <SidebarItem key={item.path} title={item.title} icon={item.icon} subTitle={item.subTitle} path={item.path} />

            ))
          }
      </div>
    </div>
  )
}
