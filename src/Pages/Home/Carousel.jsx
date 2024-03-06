import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};
const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}
const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const Carousal = () => {
    const isSmallScreen = window.innerWidth <= 600;
    return (
        <div style={{marginTop: isSmallScreen ? "-40px" : "-8px" , marginBottom: isSmallScreen ? 0 : "-30px" }}>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
              <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Lenovo-Laptop-MNS-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzM3OTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGNiL2hmOC8xMDExNTYyNDc2MzQyMi5qcGd8NzkzYjQ4ZTVmOTJlNzllZDM3NWZkNzEyMmQ4MDBjNmJjNjM4ZDEyY2VmN2ZkNGVjMmU5MDMxNTQzMmQ2OGZiZA" alt="" />
              <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Ajio-Coupon-Communication-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjMyMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2gzNy8xMDExNTYxMzE5NjMxOC5qcGd8MTYzOTAzOGFmN2Q0N2JiNGIxYTgzYThhZDcxMjU2OWE5MTAyN2UyZmJjYmRkN2MzZGM5NzhiNjllM2FmYTEyNg" alt="" />  
            </Slide>
          <div style={{marginTop: isSmallScreen ? "-40px" : "-30px"  ,marginBottom: isSmallScreen ? "-35px" : "-10px" }}>
            <Slide {...properties}>
              <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Summer-Ready-Sale-Banner-D-rev-1-1-.jpg?context=bWFzdGVyfGltYWdlc3wxNTA0NTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2gwNy8xMDExNTIwNDI1MTY3OC5qcGd8MjIzZjExY2ZlNTQ1YmNkNzFjMzc0ZDkxMjhhNzljOTcwY2VkMTA1NzNkN2U4NTY1OWJhYTFkOTNiYjBjMTk0NA" alt="" />
              <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/New-Launches-AC-Banner-D-rev-4.jpg?context=bWFzdGVyfGltYWdlc3wxMzU5NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDk5L2gxYy8xMDExNDY5OTg1Mzg1NC5qcGd8MWZjYmYwYmMyYzdkOTA3OWFhMzM3NDRjNDc2NTgxNjNmZDk3NWEyNzEzMTQwMTRiZmJlY2I2ZGEwM2UyOGE5ZQ" alt="" />
              <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Smart-TV-Never-Before-Prices-Banner-D-2-.jpg?context=bWFzdGVyfGltYWdlc3wxNzg4NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGE2L2hiNy8xMDExNTYxNDk5ODU1OC5qcGd8OTI1NTM2MjUwZGNlZTMyZmNkNDE4YzI2YjAxYTZjZTQ4MzYzNGFlN2YyMDUzMWVmMDE3NGFiYmZmMmQ1NzMxNw" alt="" />
              <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Midnight-Sale-Banner-New.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDBmL2hmNi8xMDExMDU5MDc0NjY1NC5qcGd8NzY5ZGIzNjVlZDdiMWIxYWE2NmE1YjQ2YzUyZDQ5NWRjNDA5YmUzNzA2ZTNmYzcxNmE4ZjZkZGE4YmNjMTJkZQ" alt="" />
            </Slide>
           </div>
        </div>  
    );
};

export default Carousal;