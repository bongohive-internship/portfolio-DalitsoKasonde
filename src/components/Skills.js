import React, { Component } from 'react';


class Skills extends Component{
    render(){
        return ( 
        <div>
        <div
        style={{float:"left", padding: 50}}>
            <h1>Academic Information</h1>
            <ul>
                <li>2019 - 2014 : DMI St Eugene University <b>B.E(CSe)</b></li>
                <br />
                <li>Jan -May 2014 : Don Bonsco Technical College <b>ICDL</b></li>
                <br />
                <li>2009 - 2013 : Lwitikila Girls Secondary School <b>GSCE</b></li>
                <br />
                <li>2002 - 2008: Sacred Heart Convent School <b>Primary School</b></li>
            </ul>
            <br />
            <br />
            <h1>Hobbies</h1>
            <ul>
                <li>Eating</li>
                <br />
                <li>Reading Books</li>
                <br />
                <li>Taking walks</li>
                <br />
                <li>Playing board games</li>
            </ul>
        </div>
        <div style={{ float:"right", padding: 50}}>
           <h1>Favourite programming Languages</h1>
           <ul>
               <li>JavaScript and some its cool frameworks</li>
               <li>Python</li>
               {/* <li> </li> */}
           </ul>
           <h1>Soft Skills</h1>
           <ul>
               <li>Leadership, Coomunication, Responsible</li>
               <li>Self-motivated, Team Work,</li>
               <li>Decisive, Flexible </li>
           </ul>
           <br />
           <h1>Fears</h1>
           <ul>
               <li>Spiders</li>
               <li>Darkness</li>
           </ul>
        </div>
        </div>
        );
    }
    
}

export default Skills;