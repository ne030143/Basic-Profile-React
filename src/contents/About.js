import { Component } from "react";
import profilepic from '../img/profile.jpg';


class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic"/>
                <h3>Hi ,I'm Pawanrat</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate quia? Non hic excepturi, aperiam alias exercitationem totam consectetur minima aut vitae? Distinctio iure adipisci temporibus quibusdam quam nisi eum.   
                </p>
            </div>
        );
    }
}

export default About;