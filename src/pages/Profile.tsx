import '../styles/profile.css'
import profilepic from '../componenets/useless.png'
import curriculo from '../componenets/Gabriel_Rodrigues_Curriculo.pdf'
import React, { useEffect, useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandJavascript, TbH1 } from 'react-icons/tb';
import { DiReact } from 'react-icons/di';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_CONVERTKIT_API_SECRET_DATABASE,
  authDomain: "unique-caldron-362117.firebaseapp.com",
  projectId: "unique-caldron-362117",
  storageBucket: "unique-caldron-362117.appspot.com",
  messagingSenderId: "458607624724",
  appId: import.meta.env.VITE_APP_CONVERTKIT_API_SECRET_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var rate = 0
export function Profile() {


    function hoverin(id) {
        let nodes = (document.getElementById('conhecimentos_description')?.childNodes);
        for (let i = 0; i < nodes!.length; i++) {
            (nodes![i] as HTMLElement).style.display = 'none';
        }

        let element = document.getElementById(id);
        element!.style.display = 'block'
        let def = document.getElementById('conhecimentos_description_default');
        def!.style.display = 'none'

    }

    function hoverout(id) {
        if (window.innerWidth > 700) {
            let element = document.getElementById(id);
            element!.style.display = 'none'
            let def = document.getElementById('conhecimentos_description_default');
            def!.style.display = 'block'
        }
    }


    //carregar comentários
    var [comentarios,setcomentarios] = useState<Object[]>([])
    async function load_comments(){
        const querySnapshot = await getDocs(collection(db, "comments"));
        querySnapshot.forEach((doc) => {
            setcomentarios(comentarios => [...comentarios, doc.data()]);
          });
    }
    
    useEffect(() => {
        load_comments()
      },[]);


      //votação estrelas
      const [star, setstar] = useState([false,false,false,false,false])
      function starfunction(id){
        rate = id+1;
        let tempo = [...star]
            for(let i=0;i<=id;i++){
                tempo[i] = true
            }
            for(let o=5; o>(5-(5-id));o--){
                tempo[o] = false
            }
            setstar(tempo)
    }


    //escrever novo comentário
      async function send_comment(){
        let commment = (document.getElementById("comment_text") as HTMLInputElement);
        let name = (document.getElementById("comment_name") as HTMLInputElement);
        addDoc(collection(db, "comments"), {
            name: name.value,
            comment: commment.value,
            rate: rate
          });
          commment.value = ''
          name.value = ''
          load_comments()
    }

    return (
        <div className="main_profile_container">
            <section className='profile_left_content'>
                <div className='profile_infos'>
                    <div className='dados'>
                        <h1>Dados</h1>
                        <p><HiOutlineMail />: gabrielrm00220@gmail.com</p>
                        <p><BsTelephoneFill />: (85) 98737-3084</p>
                        <p>Idade: 20 anos</p>
                        <p><GoLocation /> Rua Emília Freitas, 140 - Padre Andrade Fortaleza - CE, 60356-370
                        </p>

                    </div>
                    <div className='formacao'>
                        <h1>Formação</h1>
                        <p>Técnico em Informática pelo IFCE - campus Fortaleza (concluído)</p>
                        <p>Superior em ciência da computação (cursando)</p>
                        <p>Trilha Conectar - Rocketseat</p>
                        <p>Trilha Fundamentar - Rocketseat</p>
                    </div>
                </div>
                <div className='profile_conhecimentos'>
                    <div className='conhecimentos_icons' >
                        <button onTouchStartCapture={() => { hoverin('css_description') }} onMouseEnter={() => { hoverin('css_description') }} onMouseLeave={() => { hoverout('css_description') }}> <DiCss3 /></button>
                        <button onMouseEnter={() => { hoverin('react_description') }} onMouseLeave={() => { hoverout('react_description') }}> <DiReact /></button>
                        <button onMouseEnter={() => { hoverin('javascript_description') }} onMouseLeave={() => { hoverout('javascript_description') }}> <TbBrandJavascript /></button>
                        <button onMouseEnter={() => { hoverin('html_description') }} onMouseLeave={() => { hoverout('html_description') }}> <AiOutlineHtml5 /></button>
                        <button onMouseEnter={() => { hoverin('git_description') }} onMouseLeave={() => { hoverout('git_description') }}> <DiGit /></button>
                        <button onMouseEnter={() => { hoverin('vue_description') }} onMouseLeave={() => { hoverout('vue_description') }}> <FaVuejs /></button>
                        <button onMouseEnter={() => { hoverin('sql_description') }} onMouseLeave={() => { hoverout('sql_description') }}> <AiOutlineConsoleSql /></button>
                        <button onMouseEnter={() => { hoverin('photoshop_description') }} onMouseLeave={() => { hoverout('photoshop_description') }}> <SiAdobephotoshop /></button>
                    </div>
                    <div className='conhecimentos_description' id='conhecimentos_description'>
                        <div id='conhecimentos_description_default' >
                            <h1>DESCRIÇÃO</h1>
                            <p>passe o mouse ou toque sobre um icone para saber a descrição</p>
                        </div>
                        <div id='css_description' style={{ display: 'none' }}>
                            <h1>CSS</h1>
                            <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</p>
                            <p>Tempo de uso: 2 anos</p>
                        </div>
                        <div id='javascript_description' style={{ display: 'none' }}>
                            <h1>JAVASCRIPT</h1>
                            <p>É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                            <p>Tempo de uso: 2 anos</p>
                        </div>
                        <div id='html_description' style={{ display: 'none' }}>
                            <h1>HTML</h1>
                            <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>
                            <p>Tempo de uso: 2 anos</p>
                        </div>
                        <div id='react_description' style={{ display: 'none' }}>
                            <h1>REACT</h1>
                            <p>É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web</p>
                            <p>Tempo de uso: 1 ano</p>
                        </div>
                        <div id='vue_description' style={{ display: 'none' }}>
                            <h1>Vue.js</h1>
                            <p>Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.</p>
                            <p>Tempo de uso: 6 meses</p>
                        </div>
                        <div id='git_description' style={{ display: 'none' }}>
                            <h1>GIT</h1>
                            <p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p>
                            <p>Tempo de uso: 2 anos</p>
                        </div>
                        <div id='sql_description' style={{ display: 'none' }}>
                            <h1>SQL</h1>
                            <p>É a linguagem de pesquisa declarativa padrão para banco de dados relacional.</p>
                            <p>Tempo de uso: 1 ano</p>
                        </div>
                        <div id='photoshop_description' style={{ display: 'none' }}>
                            <h1>Photoshop</h1>
                            <p>Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais.</p>
                            <p>Tempo de uso: 2 anos</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className='profile_right_content'>
                <div className='profilepic'><img src={profilepic} alt="profile pic" /></div>
                <h1>Gabriel Rodrigues</h1>
                <h3><em>front-end developer</em></h3>
                <div className='profile_links'>
                    <a target="_blank" href='https://github.com/GabrielRodriguesMoreira'> <AiOutlineGithub /></a>
                    <a target="_blank" href="https://codepen.io/gabrielrodriguesmoreira"> <FiCodepen /></a>
                    <a target="_blank" href="https://wa.me/+558587373084"> <BsWhatsapp /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/gabriel-rodrigues-moreira-00a0081a0/"> <AiOutlineLinkedin /></a>
                </div>
                <a className='contact_button' href={curriculo} download><button >Baixar CV <HiDownload className='download_icon' />  </button> </a> 
            </section>
            <section className='star_rating'>
            </section>
            <section className='comments_container'>
                <h1>Deixe seu Feedback</h1>
                <div className='comments_section' >
                    <div className='first_row'>
                        <div className='comment_name'>
                            <label htmlFor="comment_name">Nome</label>
                            <input type="text" id='comment_name'/>
                        </div>

                        <div className='comment_star' id='comment_star'>
                            {star[0]? <AiFillStar  className='star_icon'  onClick={() =>{starfunction(0)}} /> :  <AiOutlineStar  className='star_icon' id="star0" onClick={() =>{starfunction(0)}} />}
                            {star[1]? <AiFillStar  className='star_icon'  onClick={() =>{starfunction(1)}} /> :  <AiOutlineStar  className='star_icon' id="star1" onClick={() =>{starfunction(1)}} />}
                            {star[2]? <AiFillStar  className='star_icon'  onClick={() =>{starfunction(2)}} /> :  <AiOutlineStar  className='star_icon' id="star2" onClick={() =>{starfunction(2)}} />}
                            {star[3]? <AiFillStar  className='star_icon' onClick={() =>{starfunction(3)}} /> :  <AiOutlineStar  className='star_icon' id="star3" onClick={() =>{starfunction(3)}} />}
                            {star[4]? <AiFillStar  className='star_icon' onClick={() =>{starfunction(4)}} /> :  <AiOutlineStar  className='star_icon' id="star4" onClick={() =>{starfunction(4)}} />}
                        
                        </div>
                    </div>
                    <label htmlFor="comment_text">Comentário</label>
                    <textarea name="" id='comment_text' cols={10} rows={5}></textarea>
                    <button onClick={send_comment}>Públicar</button>
                </div>
            </section>
            <section className='show_comments'>
                    <h1>Comentários</h1>
                    {
                        comentarios?.map(function (element : any = {}){
                            var tempo = [false,false,false,false,false];
                            for(let i=0;i<element.rate;i++){
                                tempo[i] = true
                            }
                            return(
                                <div className='comment_box'>
                                    
                                                <div className='name_starlist'>
                                                <h3 className='comments_name'>{element.name}</h3> 
                                                {tempo[0]? <AiFillStar /> : <AiOutlineStar />}
                                                {tempo[1]? <AiFillStar /> : <AiOutlineStar />}
                                                {tempo[2]? <AiFillStar /> : <AiOutlineStar />}
                                                {tempo[3]? <AiFillStar /> : <AiOutlineStar />}
                                                {tempo[4]? <AiFillStar /> : <AiOutlineStar />}
                                                </div>
                                    <h2 className='comment_text'>{element.comment}</h2> 
                                </div>
                                 )
                        })
                }
            </section>
        </div>
    )

}
