import React from 'react'

const TopUi = ({toggleQuickPreview}) => {
  return (
    <button onClick={() => {toggleQuickPreview(true)}} className='StartComponent__TopUi'>
        VIEW PROJECTS ONLY
    </button>
  )
}

export default TopUi