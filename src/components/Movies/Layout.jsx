import Sidebar from './Sidebar'
import Movies from './Movies'

const Layout = () => {
  return(
    <div>
  <div className="flex flex-row bg-[#f5f5f5] mt-4 max-w-7xl mx-auto">
      <Sidebar />
      <Movies/>
  </div>
    </div>


  )
}
export default Layout
