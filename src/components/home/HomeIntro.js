/* eslint-disable */
import React, { useEffect } from 'react';
import '../../assets/styles/HomeIntro.css'

import {CSSTransition} from 'react-transition-group';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HomeIntro({ show, onClose, onNeverShowAgain }) {

    return (
        <CSSTransition
        in={show}
        timeout={500}
        classNames="alert"
        unmountOnExit
        >
            <div className='HomeIntro__homeIntroContainer'>
                <div className='HomeIntro__buttons'>
                    <button className='HomeIntro__close-button' onClick={onClose}>닫기</button>
                    <button className='HomeIntro__never-show-button' onClick={onNeverShowAgain}>다시 보지 않기</button>
                </div>
            </div>
        </CSSTransition>
    );
}

export default HomeIntro;