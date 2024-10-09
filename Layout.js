import {Link, Outlet} from "react-router-dom";
function Layout(){

    return(

        <div className="container"> 
            <div className="row" >
                <div className="col-3 border border-black p-4"><h1>Logo</h1></div>
                <div className='col border border-secondary ' ><Link to="/Icecream">Total summery</Link> </div>
                <div className='col border border-secondary ' ><Link to="/Icecream/add">Add NewEntery</Link> </div>
            </div>
            <div className='row'>
                <div className='col-3 border border-primary'>sidebar</div>
                <div className='col border border-primary'><Outlet/></div>
                
            </div>
            <div className='row'>
                <div className='col border border-primary'>footer</div>               
            </div>
        </div>
    )
}
export default Layout;