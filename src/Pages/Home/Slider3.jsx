import { color } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
  width: "30px",
  height:"80px",
  background: 'none',
  border: '0px',
  backgroundColor:"lightgrey",
};
const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const Slider3 = () => {
  return (
    <div>
        <Slide {...properties}>
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Oppo-F25-Pro-5G-Banner-1365x260-px.jpg?context=bWFzdGVyfGltYWdlc3wyMDY1OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDc0L2hjNS8xMDExMzU2NzU1NTYxNC5qcGd8NTYwYTE4NTEwNWM0YmJkZTdmYWYzNjc0ZTgyYTE4ZDA1Y2VlZmYxN2NlZjI5ZTc2OGJlMzFlZTQ1M2I1OWUyMA" alt="" />
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Watch-2-Launch-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjMzNjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2gwZC8xMDExMzU2NjcwMzY0Ni5qcGd8NGE2NzNiZDBlMGUyNGUzMGUzNmQyZjBkMTk5ZjIwNzNhMTdhM2U0ODdkMDkzODMwMjM2N2EwZGQ5YmY3NjQwMQ" alt="" />
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Realme-12-ProSeries-5G-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3w5NDA1NHxpbWFnZS9qcGVnfGltYWdlcy9oNGQvaGMzLzEwMTExMzM3MjY3MjMwLmpwZ3w0MDZlMTY4NDhmOGNhOTdhMWE4Nzg1ZWY0ZGMzOTM0YTIyNWFkN2FiZGQzZWU1ZWI2YWI2OTRhMzk5OThjOTQ0" alt="" />
        </Slide>
    </div>
  );
};

export default Slider3;