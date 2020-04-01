import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,100;1,300&display=swap');
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:30vh;
  background-color:'#F00';
  font-family:Roboto, sans-serif;

  p{
    text-align:justify;
  }

@media screen and (max-width:400px){
  p{
    margin-left:16px;
    margin-right:16px;
  }
}
 @media screen and (min-width:400px){
  p{
    width:50%;
    text-justify:auto;
  }
}


`;
