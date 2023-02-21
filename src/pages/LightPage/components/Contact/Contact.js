import React, {useState} from 'react'
import './styles.scss'

import wave1 from './images/wave1.jpg'
import wave2 from './images/wave2.jpg'
import wave3 from './images/wave3.jpg'
import wave4 from './images/wave4.jpg'

const Contact = ({IMAGES}) => {

  return (
    <div className='contact__holder'>
    {/* <div className={`mainContent__holder`}> */}
        <div className='contact__box'>
        <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={IMAGES['wave1']} alt='' />
                <div className='contact__box_title'>
                    More info
                </div>
                <div className='contact__box_realText'>
                    <div className='contact__box_realText_row'>
                        <div className='contact__box_realText_info'>
                            <img src='./name.svg' alt='' /> 
                            <span>Name:</span>
                        </div> 
                        <div>
                            <span className='contact__box_realText_info_answer'>Krzysztof Szafran</span>
                        </div>
                    </div>
                    <div className='contact__box_realText_row '>
                        <div className='contact__box_realText_info'>
                            <img src='./poland.svg' alt='' />
                            <span>Country:</span>
                        </div> 
                        <div>
                            <span className='contact__box_realText_info_answer'>Poland</span>
                        </div>
                    </div>
                    <div className='contact__box_realText_row'>
                        <div className='contact__box_realText_info'>
                            <img  src='./address.svg' alt='' />
                            <span>City:</span>
                        </div>
                        <div className='contact__box_realText_info_answer'>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>Cracow</a>
                        </div>
                    </div>
                    <div className='contact__box_divider' />
                    <div className='contact__box_realText_row '>
                        <div className='contact__box_realText_info'>
                            <img  src='./phone.svg' alt='' />
                            <span>Tel.:</span>
                        </div>
                        <div>
                            <span className='contact__box_realText_info_answer'>+48 789 133 788</span>
                        </div>
                    </div>
                    <div className='contact__box_realText_row'>
                        <div className='contact__box_realText_info'>
                            <img src='./mail.svg' alt='' />
                            <span>Email:</span>
                        </div>
                        <div onClick={() => window.location = 'mailto:saffronkrzysztof@gmail.com'} style={{wordBreak: 'break-all', textAlign: 'left'}}>
                            <span className='contact__box_realText_info_answer contact__box_realText_info_answerEmail'>saffronkrzysztof@gmail.com</span>
                        </div>
                    </div>
                </div>
        </div>
        <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={IMAGES['wave2']} alt='' />
                <div className='contact__box_title'>
                    Facebook
                </div>
                <div className='contact__box_realText'>
                    <a   target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>
                        <img  src='./facebook.svg' alt='' />
                        <span>krzysztof-szafran</span>
                    </a>
                </div>
        </div>
        <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={IMAGES['wave3']} alt='' />
                <div className='contact__box_title'>
                    Github
                </div>
                <div className='contact__box_realText'>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>
                        <img src='./github.svg' alt='' />
                        <span>Havir-S</span>
                    </a>
                </div>
        </div>
        <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={IMAGES['wave4']} alt='' />
                <div className='contact__box_title'>
                    Linkedin
                </div>
                <div className='contact__box_realText'>
                    <a  target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>
                        <img src='./linkedin.svg' alt='' />
                        <span>Krzysztof Szafran</span>
                    </a>
                </div>
        </div>
            {/* <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave1} alt='' />
            </div>
            <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave2} alt='' />
            </div>
            <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave1} alt='' />
            </div>
            <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave2} alt='' />
            </div> */}
      
            {/* <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave1} alt='' />
                <div className='contact__box_title'>
                    More info
                </div>
                <div className='contact__box_realText'>
                    <div className='contact__box_realText_row'>
                        <div className='contact__box_realText_info'>
                            <img style={{height: '35px', width: '35px'}} src='./name.svg' alt='' /> 
                            <span>Name:</span>
                        </div> 
                        <div>
                            <span className='contact__box_realText_info_answer'>Krzysztof Szafran</span>
                        </div>
                    </div>
                    <div className='contact__box_realText_row '>
                        <div className='contact__box_realText_info'>
                            <img style={{height: '35px', width: '35px'}} src='./poland.svg' alt='' />
                            <span>Country:</span>
                        </div> 
                        <div>
                            <span className='contact__box_realText_info_answer'>Poland</span>
                        </div>
                    </div>
                    <div className='contact__box_realText_row'>
                        <div className='contact__box_realText_info'>
                            <img style={{height: '35px', width: '35px'}} src='./address.svg' alt='' />
                            <span>City:</span>
                        </div>
                        <div className='contact__box_realText_info_answer'>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>Cracow</a>
                        </div>
                    </div>
                    <div className='contact__box_divider' />
                    <div className='contact__box_realText_row '>
                        <div className='contact__box_realText_info'>
                            <img style={{height: '35px', width: '35px'}} src='./phone.svg' alt='' />
                            <span>Tel.:</span>
                        </div>
                        <div>
                            <span className='contact__box_realText_info_answer'>+48 789 133 788</span>
                        </div>
                    </div>
                    <div className='contact__box_realText_row'>
                        <div className='contact__box_realText_info'>
                            <img style={{height: '35px', width: '35px'}} src='./mail.svg' alt='' />
                            <span>Email:</span>
                        </div>
                        <div onClick={() => window.location = 'mailto:saffronkrzysztof@gmail.com'} style={{wordBreak: 'break-all', textAlign: 'left'}}>
                            <span className='contact__box_realText_info_answer'>saffronkrzysztof@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave2} alt='' />
                <div className='contact__box_title'>
                    Facebook
                </div>
                <div className='contact__box_realText'>
                    <a   target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>
                        <img  src='./facebook.svg' alt='' />
                        <span>krzysztof-szafran</span>
                    </a>
                </div>
            </div>
            <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave3} alt='' />
                <div className='contact__box_title'>
                    Github
                </div>
                <div className='contact__box_realText'>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>
                        <img src='./github.svg' alt='' />
                        <span>Havir-S</span>
                    </a>
                </div>
            </div>
            <div className='contact__box_imgHolder'>
                <img className='contact__box_img' src={wave4} alt='' />
                <div className='contact__box_title'>
                    Linkedin
                </div>
                <div className='contact__box_realText'>
                    <a  target="_blank" rel="noopener noreferrer" href='https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email' className='contact__box_realText_link'>
                        <img src='./linkedin.svg' alt='' />
                        <span>Krzysztof Szafran</span>
                    </a>
                </div>
            </div> */}
        </div>

        {/* <div className='mainContent__hideButton' onClick={() => {toggleHideScrollsBox(true)}}>
          <div className='mainContent__exitButton'>
              <img src='./cross.svg' alt='' />
          </div>
        </div> */}
        
      </div>
  )
}

export default Contact