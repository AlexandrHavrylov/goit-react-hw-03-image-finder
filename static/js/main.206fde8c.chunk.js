(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{32:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var a,i,o,r=t(0),c=t.n(r),s=t(11),p=t.n(s),l=(t(32),t(10)),d=t(6),g=t(7),h=t(9),u=t(8),b=t(3),m=t(4),x=m.a.button(a||(a=Object(b.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),f=t(1),j=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).handeClick=function(){var e=n.props.page+1;n.props.onClick(e)},n}return Object(g.a)(t,[{key:"render",value:function(){return Object(f.jsx)(x,{type:"button",onClick:this.handeClick,children:"Load More"})}}]),t}(r.Component),O=m.a.li(i||(i=Object(b.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),v=m.a.img(o||(o=Object(b.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),y=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var n=this;return Object(f.jsx)(O,{children:Object(f.jsx)(v,{onClick:function(){n.props.openModal(n.props.image)},src:this.props.image.webformatURL,alt:""})})}}]),t}(r.Component),w=t(14),k=t.n(w),C=t(24),S=t(25),I=t.n(S);function M(n){return F.apply(this,arguments)}function F(){return(F=Object(C.a)(k.a.mark((function n(e){var t,a,i,o,r=arguments;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,a="22578709-fa6dea9b1a45e33c6082cdf73",i="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12"),n.next=5,I.a.get(i);case 5:return o=n.sent,n.abrupt("return",o.data.hits);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var z,L,E,A,D,U,G,T,V,B=t(26),K=t.n(B),N=m.a.ul(z||(z=Object(b.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).state={chosenImg:null,images:[],loading:!1,erorr:null},n}return Object(g.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=this,a=this.props,i=a.image,o=a.page,r=i.trim()&&n.page!==o;i.trim()&&n.image!==i&&(this.setState({loading:!0}),M(i).then((function(n){t.setState({images:Object(l.a)(n),loading:!1})})).catch((function(n){return t.setState({error:n})}))),r&&(this.setState({loading:!0}),M(i,o).then((function(n){t.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(n)),loading:!1}}))})).catch((function(n){return t.setState({error:n})}))),e.images!==this.state.images&&this.props.onImageChange(this.state.images)}},{key:"render",value:function(){var n=this,e=this.state,t=e.images,a=e.loading;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(N,{children:[t.map((function(e,t){return Object(f.jsx)(y,{id:t,image:e,openModal:n.props.openModal},t)})),a&&Object(f.jsx)(K.a,{type:"Circles",color:"#00BFFF",height:80,width:80})]})})}}]),t}(r.Component),q=m.a.div(L||(L=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),J=m.a.div(E||(E=Object(b.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),R=document.querySelector("#modal-root"),_=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).handeEscKeydown=function(e){"Escape"===e.code&&n.props.onClose(!1)},n.onOverlayClick=function(e){e.target===e.currentTarget&&n.props.onClose(!1)},n}return Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handeEscKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handeEscKeydown)}},{key:"render",value:function(){return Object(s.createPortal)(Object(f.jsx)(q,{onClick:this.onOverlayClick,children:Object(f.jsx)(J,{children:Object(f.jsx)("img",{src:this.props.img.largeImageURL,alt:""})})}),R)}}]),t}(r.Component),H=m.a.header(A||(A=Object(b.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),W=m.a.form(D||(D=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),Q=m.a.button(U||(U=Object(b.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n']))),X=m.a.span(G||(G=Object(b.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Y=m.a.input(T||(T=Object(b.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).state={image:""},n.handleInputChange=function(e){n.setState({image:e.target.value})},n.handleFormSubit=function(e){e.preventDefault(),n.props.onSubmit(n.state.image),n.setState({image:""})},n}return Object(g.a)(t,[{key:"render",value:function(){return Object(f.jsx)(H,{className:"Searchbar",children:Object(f.jsxs)(W,{onSubmit:this.handleFormSubit,children:[Object(f.jsx)(Q,{type:"submit",children:Object(f.jsx)(X,{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)(Y,{onChange:this.handleInputChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.image})]})})}}]),t}(r.Component),$=m.a.div(V||(V=Object(b.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n  width: 100%;\n"]))),nn=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).state={imgInModal:null,image:"",page:1,imagesInGallery:[],isModalVisible:!1},n.getImage=function(e){n.setState({image:e,page:1,imagesInGallery:[]})},n.onLoadMore=function(e){n.setState({page:e})},n.onImageChange=function(e){n.setState({imagesInGallery:Object(l.a)(e)})},n.handleModalOpen=function(e){n.setState({imgInModal:e,isModalVisible:!0})},n.modalClose=function(e){n.setState({isModalVisible:e})},n}return Object(g.a)(t,[{key:"componentDidUpdate",value:function(){this.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var n=this.state,e=n.imagesInGallery,t=n.imgInModal,a=n.isModalVisible,i=e.length>0;return Object(f.jsxs)($,{children:[Object(f.jsx)(Z,{onSubmit:this.getImage}),Object(f.jsx)(P,{onImgClick:this.onImgClick,onImageChange:this.onImageChange,image:this.state.image,page:this.state.page,openModal:this.handleModalOpen}),i&&Object(f.jsx)(j,{onClick:this.onLoadMore,page:this.state.page}),a&&Object(f.jsx)(_,{onClose:this.modalClose,img:t})]})}}]),t}(r.Component),en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};p.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(nn,{})}),document.getElementById("root")),en()}},[[77,1,2]]]);
//# sourceMappingURL=main.206fde8c.chunk.js.map