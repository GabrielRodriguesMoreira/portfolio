import {useState, useEffect} from 'react'
import logo from '../sources/logo.png'
import '../../styles/mobilestyles/mobilenavbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import {MobilePpm} from './MobilePpm'
import {MobileProfile} from './MobileProfile'
import {MobileQuiz} from './MobileQuiz'
import {MobileFut} from './MobileFut'

export function MobileNavbar({stateChanger, ...rest}){

    return(
        <div className='mobilenavcontainer'>
            <img src={logo} alt="logo" width={120}  />
                <div onClick={ () => {sidecontrol('hello 1s forwards')}} className='mobilenavmenu' id='mobilenavmenu'><GiHamburgerMenu /></div>
            <div  id='sidelinks' className='sidelinks' >
                <button onClick={ () => {sidecontrol('goodbye 1s forwards')}} className='sidelinks_close_button'> <AiOutlineClose /></button>
                <a onClick={() =>{ changeselected('profile'); stateChanger(<MobileProfile />)}}  id ='profile' className='selected' >PROFILE</a>
                <a  onClick={() =>{ changeselected('project1'); stateChanger(<MobileFut />)}}  id ='project1'>PROJECT 1</a>
                <a onClick={() =>{ changeselected('project2'); stateChanger(<MobileQuiz />)}}  id ='project2'>PROJECT 2</a>
                <a  onClick={() =>{ changeselected('project3'); stateChanger(<MobilePpm />)}}  id ='project3'>PROJECT 3</a>
            </div>
        </div>
    )
    function sidecontrol(control){
        var elem = (document.getElementById("sidelinks") as HTMLInputElement);
        elem.style.animation = control;
    }

    function changeselected(id){
    const selected = document.querySelectorAll('.selected');
        selected.forEach(selected => {
        selected.classList.remove('selected');

        var newselected = (document.getElementById(id) as HTMLInputElement);
        newselected.setAttribute('class', 'selected')
        });
    }
}