import UserProfile from "../UserProfile"
import Transactions from "../Transactions"
import './index.css'

const Dashboard=()=>{
    return(
        <div className="dashboard-container">
            <UserProfile/>
            <Transactions/>
        </div>
    )
}
export default Dashboard