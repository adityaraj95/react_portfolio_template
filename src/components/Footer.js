import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import { FaTwitter, FaLinkedin , FaFacebook , FaInstagram } from 'react-icons/fa';
 
class Footer extends Component {
    render() {
        return (
            <div className='app-footer'> 
                <FaTwitter size={23} color='white' className='icon' />
                 <FaInstagram size={23} color='white' className='icon'/>
                  <FaLinkedin size={23} color='white' className='icon'/> 
                  <FaFacebook size={23} color='white' className='icon'/>
            </div>
        );
    }
}

export default Footer;