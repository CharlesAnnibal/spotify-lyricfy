import React from 'react' 
import './TopContainer.css'
import LyricArea from './LyricArea/LyricArea.component'
import Sidebar from './Sidebar/Sidebar.component'
const TopContainer = (props)=>{
    return (
      <div className="top-container">
          <Sidebar/>
          <LyricArea/>
      </div>
    )
}
export default TopContainer;