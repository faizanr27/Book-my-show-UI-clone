import Sidebar from './Sidebar'
import Events from './Events'

const Main = () => {
  return(
    <div>
  <div className="flex flex-row bg-[#f5f5f5] mt-4 max-w-7xl mx-auto">
      <Sidebar />
      <Events/>
  </div>
    </div>


  )
}
export default Main
