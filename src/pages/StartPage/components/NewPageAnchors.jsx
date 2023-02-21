import React from 'react'

const NewPageAnchors = ({pageType, hoverOver, newSelectedPage}) => {
  return (
    <div className={
      `StartPage__NewPageAnchors StartPage__NewPageAnchors_${pageType} 
      ${hoverOver === pageType ? `StartPage__NewPageAnchors_roundBorder_${pageType} ` : ''}
      ${newSelectedPage === pageType ? `StartPage__NewPageAnchors_swipe_${pageType} ` : ''}
      `
      
      } >
      <div className={`StartPage__NewPageAnchors_backgroundCover StartPage__NewPageAnchors_backgroundCover_${pageType}`} />
      <div className={`StartPage__NewPageAnchors_topExtension StartPage__NewPageAnchors_topExtension_${pageType}`} />
      <div className={`StartPage__NewPageAnchors_bottomExtension StartPage__NewPageAnchors_bottomExtension_${pageType}`} />
      
      <div className={`StartPage__NewPageAnchors_text_${pageType}`}>{pageType.toUpperCase()}</div>
      </div>
  )
}

export default NewPageAnchors