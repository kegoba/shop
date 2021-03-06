import React from "react"
import { SocialIcon} from "react-social-icons"

const Footer =()=>{
    return(
        
        <div className="footer text-center">
            < div className="container">
                <div className="row">
                    <div className="col">
                        <h4> Location </h4>
                        <p>  Ikeja local</p>
                        <p>  Govt. Area,  </p>
                        <p>   Lagos State, Nigeria </p>

                    </div>
                    <div className="col">
                        <h4> Contact </h4>
                        <p>  +2347038034761</p>
                        <p>  +2348130888740  </p>
                        <p> info@kenshop.com</p>
                    </div>

                    <div className="col-sm ">
                        <h4> social media handle </h4>
                        <div>
                            <SocialIcon className="SocialIcon" url="https://facebook.com/"> facebook </SocialIcon>

                        
                    
                            <SocialIcon className="SocialIcon" url="https://twitter.com/"> twitter  </SocialIcon>
                        
                        
                            <SocialIcon className="SocialIcon" url="https://whatsapp.com/"> twitter  </SocialIcon>

                        </div>
                       
                          
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="text-center"> Copyright @ 2020</p>
            </div>
        </div>
    )
}


export default Footer;