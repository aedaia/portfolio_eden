import styled from 'styled-components';

export const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
font: inherit;

  padding-left: 5rem;
  
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
.socials{
  padding-bottom: 0px !important;
}

@media only screen and (max-width:1000px){
    h2{
        font-size: 20px;

    }
  }

@media only screen and (max-width:800px){

.timeline {
	
	width: 90% !important;
	
}
.timeline .column {
	margin: 0px 0px 0px 0px;
}
  }

// Timeline
* {
	pading: 0;
	margin: 0;
	position: relative;
}

.timeline {
	
	width: 50%;
	margin-bottom: 40px;
}

.timeline:before {
	content: "";
	position: absolute;
	top: 23px;
	width: 4px;
	height: calc(100% - 75px);
	background: black;
}

.timeline .column {
	margin: 0px 0px 0px 40px;
}

.timeline .column .title h1 {
	font-size: 3.2rem;
    line-height: 1.3;
	color: black;
    font-weight: 500;
    padding-bottom: 16px !important;
}

.timeline .column .title h1:before {
	content: "";
	position: absolute;
	left: -45.8px;
	margin-top: 10px;
	width: 10px;
	height: 10px;
	background: black;
	border: 3px solid black;
    border-radius: 10px;
}

.timeline .column .title h2 {
    padding-bottom: 32px !important;
	font-size: 2.6rem;
    color: violet;

}

.timeline .column .description p {
	font-size: 2.6rem;
    column-count: 1 !important;
	line-height: 3.2rem;
    padding-bottom: 10rem !important;
	
}




`;