import { useState, useEffect } from "react";
import ItemCard from '../Components/Card'
import { useDispatch, useSelector} from "react-redux";
import { showAllListings } from "../Features/dashboardSlice";
import 'spinkit/spinkit.min.css';
import '../Assats/CSS/sppiner.css'

function Dashboard() {
  const dispatch = useDispatch()
  const {allListings, isLoading} = useSelector((state)=> state.dashboard)
  console.log(allListings)
  
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  useEffect(() => {
    // if (Date.now() - lastRefresh >= 60 * 60 * 1000)  {
        // setLastRefresh(Date.now());
          window.localStorage.setItem("allListings", JSON.stringify(allListings))
          dispatch(showAllListings());
    // }
  }, [dispatch]);

  if(isLoading){
    return<>
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </>
  }
   
  return (
    <div className='dashboard-container'>
       {
          allListings.map((item)=>{
              return <ItemCard key={item.id} {...item} />
          })
        }
    </div>
  )
}

export default Dashboard