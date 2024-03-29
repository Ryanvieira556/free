import styled from "styled-components";
import BackgroundBanner from '../../Img/banner.png'

export const Container = styled.div `

font-family: 'Poppins', sans-serif;
`


export const ContainerBanner = styled.div `
display: flex;
justify-content: center;
 background-position: center;
 height: 100vh;
 background-size:cover;
 background-image: url(${BackgroundBanner});
 padding-bottom: 140px;


`
export const ContainerContent = styled.div `
display: flex;
flex-direction: column;
max-width: 1200px;
`



export const ContainerInfo = styled.div `
max-width:100%;
display: flex;
margin: 0 auto;
flex: 1;
justify-content: center;
align-items: center;
@media(max-width:830px){
flex-direction: column;
margin-top: 50px;
}

`
export const ContainerTitle = styled.div``

export const ContainerH1 = styled.h1 `
color: #FFF;
font-family: Arial, Helvetica, sans-serif;
font-weight: 700;
font-size: 37px;
max-width: 500px;
`
export const ContainerDesc = styled.p`
color:#8d8d8d;
font-size: 16px;
max-width: 560px;
margin-right:50px;

`

export const ContainerImg = styled.div `
display: flex;
width: 100%;
flex: 1;`

export const Image = styled.img `

`

