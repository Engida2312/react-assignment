import { useEffect } from "react";
import ItemCard from '../Components/Card'
import { useDispatch, useSelector} from "react-redux";
import { showAllListings } from "../Features/dashboardSlice";

function Dashboard() {
  
  const dispatch = useDispatch()
  const {allListings} = useSelector((state)=> state.dashboard)

  useEffect(()=>{
    dispatch(showAllListings())
  }, [dispatch]) 

  return (
    <div className='dashboard-container'>
       {
          allListings.map((item)=>{
              return <ItemCard key={item.id} {...item}/>
          })
        }
    </div>
  )
}

export default Dashboard