import React, {useState} from 'react'
import NewPageAnchors from './NewPageAnchors'

const UI = ({color, setColor, handleClick}) => {
    const [hoverOver, setHoverOver] = useState('none')
    const [newSelectedPage, setNewSelectedPage] = useState('none')

    //HANDLE NEW FOX COLOR
    const handleHover = (newColor) => {
        if(color === newColor) {
            return;
        } else {
            setColor(newColor)
        }
    }

    //HANDLE PAGE ANCHOR APPEAR PULL EFFECT
    const handlePageAnchors = (newPage) => {
        //SAFETY FOR ANY BUG
        if (newPage === hoverOver) { 
            return;
        //CHANGE TO NEW OR RESET ANCHOR (light/heavy/none)
        } else {
                setHoverOver(newPage);
        }
    }

    //HANDLE PAGE ANCHOR PLAY FULL SWIPE ANIMATION ON CLICK THEN PUSH NEW WEBPAGE STATE TO PARENT COMPONENT
    const handleClickAnchor = (newPage) => {
        //IF ALREADY CLICKED RETURN NOTHING
        if (newSelectedPage !== 'none') {
            return
        } else {
            //THIS IS FOR Ui animations
            setNewSelectedPage(newPage)

            //This is for the actual change in parent components
            handleClick(newPage)
        }
        
    }
  return (
    <div className='StartPage__UI_tab '>
        <NewPageAnchors newSelectedPage={newSelectedPage} pageType={'heavy'} hoverOver={hoverOver} />
        <NewPageAnchors newSelectedPage={newSelectedPage} pageType={'light'} hoverOver={hoverOver} />
        <div className='StartPage__UI '>
            <button className='StartPage__UI_buttonLight' onClick={() => {handleClickAnchor('light')}} onMouseLeave={() => {handlePageAnchors('none')}} onMouseEnter={() => {handleHover('#5ebcff'); handlePageAnchors('light')}}>
                <span className='StartPage__UI_spanLight'>OLD 2D</span>
                <br/>
                <span className='StartPage__UI_spanSmall'>Portfolio</span>
                <br/>
                <span className='StartPage__UI_spanSmall'>Website</span>
            </button>

            <a target="_blank" rel="noopener noreferrer" href='' className='StartPage__UI_buttonHeavy' onMouseLeave={() => {handlePageAnchors('none')}} onMouseEnter={() => {handleHover('#f35eff'); handlePageAnchors('heavy')}}>
                <span className='StartPage__UI_spanHeavy'>NEW 3D</span>
                <br/>
                <span className='StartPage__UI_spanSmall'>Portfolio</span>
                <br/>
                <span className='StartPage__UI_spanSmall'>&#40;Unstable&#41;</span>
            </a>

            
        </div>
    </div>
  )
}

export default UI