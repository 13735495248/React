import React,{Component} from "react"
import './index.css'
export default class Header extends Component{
    render(){
        /* props是一个对象,属性是组件标签上自定义的属性名 */
        const {title} = this.props;
        return(
            <div className="header">
              {title}
            </div>
        )
    }
}