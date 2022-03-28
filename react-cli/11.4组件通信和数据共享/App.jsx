//创建 "外壳" 组件
import React from 'react'
import GlobalData from './components/GlobalData'
import Teacher from './components/Teacher'
import Student from './components/Student'
function App(){
        return (
            <GlobalData>
              <Teacher></Teacher>
              <Student></Student>
            </GlobalData>
        )

}
//暴露App组件
export default App