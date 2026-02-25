
import React,{Component} from "react";
class Student extends Component{
    render(){
        return <h2>hello{this.props.name}</h2>;
    }
}
export default Student;