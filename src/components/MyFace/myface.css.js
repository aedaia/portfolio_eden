import styled from 'styled-components';

export const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
  padding: 4rem;
  margin-right: 0;
  background-image: url("https://i.ibb.co/wgyMsX6/edenface4.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  span{
      color: #8A3FFC;
      font-weight: bold;
  }
  h2{
    padding-bottom: 10%;
    padding-right: 55%;
}

a {
    color: black;
    padding-right: 20px;
  }
  a:hover {
     color: #8A3FFC;
  }

div{
    left: 0;

}

@media only screen and (max-width:1000px){
    h2{
        font-size: 20px;

    }
  }

@media only screen and (max-width:800px){
    h2{
        font-size: 15px;
    }
  }

`;