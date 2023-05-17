import React, {useEffect} from 'react'
import './styles.scss'

const LoadingComplete = new Audio('LoadingComplete.mp3')

const playLoadingComplete = () => {
  LoadingComplete.currentTime = 0;
  LoadingComplete.play();
}

const LoadingComponent = ({loading, procent}) => {

  useEffect(() => {
    if (!loading) { playLoadingComplete() }
  }, [loading])

  return (
    <div className={`Loader__div ${!loading && 'Loader__div_disappear'}`}  >
        <svg className='Loader__div_svg' width="200" height="200" viewBox="0 0 100 100">
            <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
            <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
            <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
            <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
        </svg>
        <div className='Loader__div_procent'>{procent.toFixed(0)}%</div>
    </div>
  )
}

export default LoadingComponent