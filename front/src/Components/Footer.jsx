import React from 'react'
import githubPhoto from '../images/github.png'
import linkdinPhoto from '../images/linkdin.png'

function Footer() {
  let githubElement = (
    <a href="https://github.com/YamEbgui">
      <img src={githubPhoto} alt="github"></img>
    </a>
  )
  let linkdinElement = (
    <a href="https://www.linkedin.com/in/yam-ebgui-0a0795222/">
      <img src={linkdinPhoto} alt="linkdin"></img>
    </a>
  )
  return (
    <div id="footer">
      <div className="societyPics">
        <span>Created By Yam Ebgui</span>
        {githubElement}
        {linkdinElement}
      </div>
    </div>
  )
}

export default Footer
