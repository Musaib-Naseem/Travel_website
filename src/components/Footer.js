import React from "react";
import "./Footer.css";
import {Button} from "./Button";
import {Link} from "react-router-dom";

const Footer=()=>{

    return(
        <>
         
         <div className="footer-container">

        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the adventure newsletter to receive our best vacation deals
            </p>

            <p className="footer-subscription-text">
                You can Unsubscribe any time
            </p>

            <div className="input-areas">
            <form>
            
            <input 
            type="email" 
            name="email"
            placeholder="Your Email"
            className="footer-input" />

            <Button buttonStyle="btn--primary">Subscribe</Button>


            </form>
            </div>
        </section>


        <div className="footer-links">
            <div className="footer-link-wrapper">

         <div className="footer-link-items">
         <h2>About Us</h2>
         <Link to="/signup">How it works</Link>
         <Link to="/">Testimonial</Link>
         <Link to="/">Careers</Link>
         <Link to="/">Investors</Link>
         <Link to="/">Terms of Service</Link>

         </div>  

         <div className="footer-link-items">
         <h2>Contact Us</h2>
         <Link to="/signup">Contact</Link>
         <Link to="/">Support</Link>
         <Link to="/">Destination</Link>
         <Link to="/">Sponsorship</Link>

         </div> 

         
    
            </div>

            <div className="footer-link-wrapper">

<div className="footer-link-items">
<h2>Videos</h2>
<Link to="/signup">Submit Video</Link>
<Link to="/">Ambassadors</Link>
<Link to="/">Agency</Link>
<Link to="/">Influencer</Link>

</div>  

<div className="footer-link-items">
<h2>Social Media</h2>
<Link to="/signup">Instagram</Link>
<Link to="/">Facebook</Link>
<Link to="/">Youtube</Link>
<Link to="/">Twitter</Link>

</div> 



   </div>


        </div>




<section className="social-media">

    <div className="social-media-wrap">
<div className="footer-logo">

<Link to ="/" className="social-logo">

    TRVL <i className="fab fa-typo3" />
</Link>


</div>

<small className="website-rights"> TRVL ©️ 2021</small>

<div className="social-icons">
    <Link to="/"
     className="social-icon-link facebook"
     target="_blank"
     >
        <i className="fab fa-facebook-f" />
    </Link>

    <Link to="/"
     className="social-icon-link instagram"
     target="_blank"
     >
        <i className="fab fa-instagram" />
    </Link>

    <Link to="/"
     className="social-icon-link twitter"
     target="_blank"
     >
        <i className="fab fa-twitter" />
    </Link>

    <Link to="/"
     className="social-icon-link youtube"
     target="_blank"
     >
        <i className="fab fa-youtube" />
    </Link>

    <Link to="/"
     className="social-icon-link linkedin"
     target="_blank"
     >
        <i className="fab fa-linkedin" />
    </Link>
</div>



    </div>

</section>

         </div>
        </>
    );
}

export default Footer;