(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&o.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+o+l+s+a+r+t+i+n+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(k,(0,d.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,n(r),s):s})),k=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},g,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,L=e.draggable,R=p||h;if(!R)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:V?1:0,transition:H?"opacity "+y+"ms":"none"},s),j="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},q=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&C,s,f),W={title:t,alt:this.state.isVisible?"":a,style:q,className:m,itemProp:E},P=this.state.isHydrated?g(R):R[0];if(p)return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),j&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&C)}),P.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:R,generateSources:I}),P.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(k,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:R}))}}));if(h){var N=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete N.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},j&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:j,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},H&&C)}),P.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:R,generateSources:I}),P.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(k,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:R}))}}))}return null},t}(o.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}V.propTypes={resolutions:H,sizes:T,fixed:j(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:j(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=V;t.default=C},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return x}));var r=a("q1tI"),n=a.n(r),i=a("8k0H"),l=a("jBH6"),s=a("7sqX");var d=a("9eSz"),o=a.n(d),u=a("MUpH"),c=a("vOnD"),f=a("WveJ");function m(){var e=Object(u.a)(["\n    \n  "]);return m=function(){return e},e}function g(){var e=Object(u.a)(["\n  color: #757575;\n  margin: 0 0rem 0rem;\n\n  ",";\n"]);return g=function(){return e},e}function p(){var e=Object(u.a)(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 0rem 0rem 0rem;\n"]);return p=function(){return e},e}var h=c.c.span(p()),b=c.c.p(g(),f.a.TABLET(m())),y=function(e){var t=e.title,a=e.copy,r=e.image;return n.a.createElement("figure",null,n.a.createElement(o.a,{fluid:r?r.childImageSharp.fluid:{},alt:t}),n.a.createElement("figcaption",null,n.a.createElement(h,null,t),n.a.createElement(b,null,a)))},v=a("Nw/w"),E=a("Wbzz"),S=function(e){var t=e.items;return n.a.createElement(v.a,null,t.map((function(e,t){var a=e.link,r=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["link"]);return console.log(e),n.a.createElement(E.a,{to:a,key:t},n.a.createElement(y,r))})))},w=a("fItr"),x=(t.default=function(e){var t=e.data;return n.a.createElement(i.a,null,n.a.createElement(l.a,null,n.a.createElement(s.a,{as:"h2",size:"large"},n.a.createElement("br",null),n.a.createElement("h7",null,"hi there!"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h8",null,"My name's Eden, and I'm a visual designer specialising in both digital and print. Now you'd better get ready for some colour... ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("a",{href:"#Gallery"}," ",n.a.createElement("button",null," Check out my work      ↓"))," ",n.a.createElement("a",{href:"aboutme"}," ",n.a.createElement("button",{id:"secondary"}," ","More about me             →")),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{id:"Gallery"}),n.a.createElement("br",null)),n.a.createElement(S,{items:t.homeJson.gallery}),n.a.createElement(w.a,null))},"343709540")},fItr:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=(a("7sqX"),a("MUpH"));function l(){var e=Object(i.a)(["\n//   display: flex;\n//   justify-content: space-between;\n  padding: 4rem;\n  margin-top: 0px;\n  // background-color: grey;\n  margin-right: 0;\n  h3{\n    color: black;\n    padding-top: 20px;\n  }\n\na {\n    color: grey;\n    padding-right: 20px;\n  }\n  a:hover {\n     color: black;\n  }\n\ndiv{\n    left: 0;\n\n}\n\n@media only screen and (max-width:1000px){\n    h2{\n        font-size: 20px;\n\n    }\n  }\n\n@media only screen and (max-width:800px){\n    h2{\n        font-size: 15px;\n    }\n  }\n\n"]);return l=function(){return e},e}var s=a("vOnD").c.div(l()),d=a("8tEE"),o=a("IP2g");a("Wbzz"),t.a=function(){return n.a.createElement(s,null,n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.instagram.com/edensinclair_/?hl=en",target:"_blank",rel:"noreferrer"},n.a.createElement(o.a,{icon:d.a,size:"2x"})),n.a.createElement("a",{href:"https://twitter.com/edensinclair_?lang=en",target:"_blank",rel:"noreferrer"},n.a.createElement(o.a,{icon:d.b,size:"2x"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cc908d15c2572f31ff63.js.map