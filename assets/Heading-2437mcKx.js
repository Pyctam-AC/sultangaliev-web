import{r as n,j as i}from"./index-kgUNlWw3.js";const l=({text:r})=>{const t=n.useRef(),s=r.split("");return n.useEffect(()=>{t.current.innerHTML="",s.forEach((a,o)=>{const e=document.createElement("span");a===" "?e.style.display="inline":e.style.display="inline-block",e.innerText=a,e.dataset.aos="zoom-in",e.dataset.aosDuration="200",e.dataset.aosDelay=`${o*150}`,t.current.append(e)})},[s]),i.jsx("header",{ref:t,className:"section_heading"})};export{l as H};
