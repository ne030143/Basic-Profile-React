import React,{Component} from "react";
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title = "Computer Engineering" where = "Rangsit University" from = "2023" to ="Present"/>
                <Widecard title = "Math-Eng" where = "Pathumwilai" from = "2011" to ="2016"/>
            </div>

        );
    }
}
 
export default Education