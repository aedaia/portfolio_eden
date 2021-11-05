import styled from 'styled-components';

export const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
  padding: 4rem;
  margin-top: 0px;
  // background-color: grey;
  margin-right: 0;
  h3{
    color: black;
    padding-top: 20px;
  }

a {
    color: grey;
    padding-right: 20px;
  }
  a:hover {
     color: black;
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