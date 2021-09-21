import { Paper } from '@material-ui/core'
import './notFound.css'

function NotFound() {
    return (
        <div className='notFound'>
           <div className="notFoundWrapper">
               <img src="https://res.cloudinary.com/adamworkimages/image/upload/v1632226889/Blog%20images/404_Not_Found_jy2zlr.svg" className='notFoundImg' alt="" />
               <div className='notFoundInfo'>
                    <h1>Looks like you are lost</h1>
                    <button className="notFoundBtn">
                        Go Home
                    </button>
               </div>
           </div>
        </div>
    )
}

export default NotFound
