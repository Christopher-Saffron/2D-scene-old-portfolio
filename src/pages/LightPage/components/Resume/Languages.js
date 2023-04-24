import React from 'react'

function Languages() {
  return (
    <div className='resume__languages'>
        <div className='resume__category'>
        <img className='resume__category_icon' src='./languages.svg' alt='' />
        Languages
        </div>
        <div className='resume__skillBars_Holder'>
        <div className='resume__skill'>
            <span className='resume__skillName'>English</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '91%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>Polish</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '90%'}}  />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>Japanese</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '29%'}} />
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Languages