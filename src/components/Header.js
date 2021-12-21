import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
 
class Header extends Component {
    render() {
        return (
            <div className='App-header'> 
             <div class="equalHMRWrap eqWrap">
                 <div class="equalHMR headerText ee">Download Resume</div>
                 <div class="equalHMR headerText ee">Contact</div>

                 </div>
            </div>
        );
    }
}

export default Header;