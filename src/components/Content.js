import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
 
class Content extends Component {
    render() {
        return (
            <div className='body'> 
              <div class="equalHMRWrap eqWrap">
                 <div class="equalHMR eq">                   
                        <div className='image'></div><br/><p className='contentText'>Adityaraj Chauhan</p>
                </div>
                <div class="equalHMR eq">        
                    <p className='contentText'>
                "  A self-learner with dynamic interpersonal, analytical, and critical thinking skills offering a master's degree in Computer
Science and hands-on experience of developing web applications.  "
                </p>   <br/> 
                <p className='contentText'>" You just can't beat the person who never gives up " <br/> </p> <br/>
                <p className='contentText'>" Impossible is a word found in the dictionary of fools " <br/> </p><br/>
                <p className='contentText'>" I had rather excel others in the knowledge of what is excellent, than in the extent of my power and dominion." <br/> </p>


                </div>
             <div class="equalHMR eq "></div>
     
            </div>

            </div>
        );
    }
}

export default Content;