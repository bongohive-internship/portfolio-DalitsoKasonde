import React, { Component } from 'react';


class Header extends Component{
    render(){
        return ( 
        <div>
        <div
        style={{float:"left"}}>
            <img
            
            src = "https://pbs.twimg.com/profile_images/1134069701049552896/C4hx8sW3_400x400.jpg"
            alt="Ms Kasonde"
            style = {
                {
                    borderRadius: "50%",
                    padding: 50,
                    width: "400px",
                    height: "400px",
                }
            } />
        </div>
        <div style={{ float:"right", padding: 200}}>
            <h1>Dalitso Kasonde</h1>
            <h3>Bachelor of Engineering in Computer Science</h3>
        </div>
        </div>
        );
    }
    
}

export default Header;