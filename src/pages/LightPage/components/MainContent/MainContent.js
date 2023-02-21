import React, {useState} from 'react'
import './styles.scss'
import {Scroll} from '../Scroll/Scroll'

const MainContent = ({userScroll, setUserScroll}) => {

  const [hideScrollsBox, toggleHideScrollsBox] = useState(false)

  

  return (
    <div className={`mainContent__holder ${hideScrollsBox ? 'mainContent__holder_hide' : ''} ${userScroll ? 'mainContent__opacity' : ''}`}>
    {/* <div className={`mainContent__holder`}> */}
        <div className='mainContent__scrollBox'>
          <Scroll setUserScroll={setUserScroll} title={'Languages'} kanji={'言語'} />
          <Scroll setUserScroll={setUserScroll} title={'Skills'}  kanji={'能力'} />
          <Scroll setUserScroll={setUserScroll} title={'Education'}  kanji={'教育'} />
          <Scroll setUserScroll={setUserScroll} title={'History'}  kanji={'職歴'} />
        </div>

        <div className='mainContent__hideButton' onClick={() => {toggleHideScrollsBox(true)}}>
          <div className='mainContent__exitButton'>
              <img src='./cross.svg' alt='' />
          </div>
        </div>

        {hideScrollsBox && (
          <div className='mainContent__showButton' onClick={() => {toggleHideScrollsBox(false)}}>
            Show Scrolls again
          </div>
        )}

        
      </div>
  )
}

export default MainContent