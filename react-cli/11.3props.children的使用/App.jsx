//创建 "外壳" 组件
import React, { Component } from 'react'
import News from './components/News'
class App extends Component {
    render() {
        return (
            <News>
                <h4>我国航天科技又创新高!</h4>
                <span>
                    1月28日上午，国务院新闻办公室发布我国第五部航天白皮书——《2021中国的航天》，
                    介绍2016年以来中国航天活动主要进展、未来五年主要任务，
                    进一步增进国际社会对中国航天事业的了解。
                    第五部中国航天白皮书在结构上分为前言、正文和结束语，
                    全文约12500字，以建设航天强国为主线，
                    系统介绍了中国在全面建设航天强国新征程上的宗旨原则、政策措施、国际合作思路等。
                </span>
            </News>
        )
    }

}
//暴露App组件
export default App