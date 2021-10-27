import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }


  .grid{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-auto-rows: 200px;
  }
  html {
    scroll-behavior: smooth;
  }

  h2 {
    padding-bottom: 50px;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  .player-wrapper {
    position: relative;
    Player ratio: 100 / (1280 / 720)
  }
  
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
  html {
    font-size: 62.5%;
  }
  h5{
    font-weight: 700;
    font-size: 3.2rem;
    padding-bottom: 20px;
  }
  h3{
    padding-bottom: 20px;
  }
  h6{
    margin-bottom: -20px;
    font-size: 70px;
    font-family: default;
    font-weight: 300;
  }
  mark{
    background-color: red;
    // this is the colour for the highlight xo
    color: black;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: black;
    text-decoration: none;

  }
  span{
    color: #8A3FFC;
    font-family: monospace;
  }
.largeimage{
  width: 100% !important;
}
  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  h8{
    padding-bottom: 32px;
  }

  h7{
    font-size: 10rem;
    line-height: 1.1;
    font-weight: 600;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.5;
    column-count: 2;
    column-gap: 20px;
  }

  img{
    height: auto;
    width: 33.3%;
    padding-top: 0px;
    margin-bottom: -2px;
  }

  @media only screen and (max-width:1700px){
    p{
      column-count: 2;
    }
    
    h2{

      padding-bottom: 50px;
    }
    img{
      width: 50%;
    }
  }
  @media only screen and (max-width:850px){
    h7{
      font-size: 6rem;
    }
  }

  @media only screen and (max-width:800px){
    p{
      column-count: 1;
    }
    
    h2{

      padding-bottom: 50px;
    }
    img{
      width: 100%;
    }
  }
  @media only screen and (max-width:600px){
    h7{
      font-size: 4rem;
    }
  }

`;
