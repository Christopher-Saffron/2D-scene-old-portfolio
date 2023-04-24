import React from 'react'

function ProgrammingSkills() {
  return (
    <div className='resume__programming'>
        <div className='resume__category'>
        <img className='resume__category_icon' src='./code.svg' alt='' />
        Programming skills
        </div>
        <div className='resume__skillBars_Holder'>
        <div className='resume__skill'>
            <span className='resume__skillName'>HTML</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '96%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>CSS</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '88%'}}  />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>JavaScript</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '85%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>ThreeJS</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '50%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>NodeJS</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '65%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>Firebase</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '50%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>MongoDB</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '51%'}} />
            </div>
        </div>
        <div className='resume__skill'>
            <span className='resume__skillName'>MySQL</span>
            <div className='resume__skillBar'>
            <div className='resume__skillBar_inside' style={{width: '41%'}} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProgrammingSkills