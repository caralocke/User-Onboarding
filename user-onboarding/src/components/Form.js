import React from 'react'
//created component file called Form.js
export default function Form() {
    return (
        <>
          <div> {/*Create areas on our form for each piece of information needed */}
            <label>Name
                <input type='text'/>            
            </label>
           </div>
           <div>
             <label>Email
                 <input type='text'/>            
             </label>
           </div>
           <div>
             <label>Password
                <input type='text'/>            
             </label>
           </div>
           <div>
             <label>Terms of Service
                <input type='checkbox'/>            
             </label>
           </div>
           
           <button>submit</button>
         </>
    )
}
