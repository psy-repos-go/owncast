(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{54907:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var a=n(87462),r=n(4942),i=n(18073),o=n(94184),s=n.n(o),c=n(74902),l=n(15671),d=n(43144),u=n(60136),p=n(33643),h=n(71002),m=n(50344),v=n(67294),f=n(96774),y=n.n(f),x=n(45987),g=n(62874),Z=n(97685),C=v.forwardRef(function(e,t){var n,a=e.prefixCls,i=e.forceRender,o=e.className,c=e.style,l=e.children,d=e.isActive,u=e.role,p=v.useState(d||i),h=(0,Z.Z)(p,2),m=h[0],f=h[1];return(v.useEffect(function(){(i||d)&&f(!0)},[i,d]),m)?v.createElement("div",{ref:t,className:s()("".concat(a,"-content"),(n={},(0,r.Z)(n,"".concat(a,"-content-active"),d),(0,r.Z)(n,"".concat(a,"-content-inactive"),!d),n),o),style:c,role:u},v.createElement("div",{className:"".concat(a,"-content-box")},l)):null});C.displayName="PanelContent";var b=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],N=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"==typeof n&&n(a)},e.handleKeyPress=function(t){("Enter"===t.key||13===t.keyCode||13===t.which)&&e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,a=t.expandIcon,r=t.prefixCls,i=t.collapsible;if(!n)return null;var o="function"==typeof a?a(e.props):v.createElement("i",{className:"arrow"});return o&&v.createElement("div",{className:"".concat(r,"-expand-icon"),onClick:"header"===i||"icon"===i?e.onItemClick:null},o)},e.renderTitle=function(){var t=e.props,n=t.header,a=t.prefixCls,r=t.collapsible;return v.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===r?e.onItemClick:null},n)},e}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!y()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,i=n.className,o=n.id,c=n.style,l=n.prefixCls,d=n.headerClass,u=n.children,p=n.isActive,h=n.destroyInactivePanel,m=n.accordion,f=n.forceRender,y=n.openMotion,Z=n.extra,N=n.collapsible,j=(0,x.Z)(n,b),I="disabled"===N,w="header"===N,k="icon"===N,E=s()((e={},(0,r.Z)(e,"".concat(l,"-item"),!0),(0,r.Z)(e,"".concat(l,"-item-active"),p),(0,r.Z)(e,"".concat(l,"-item-disabled"),I),e),i),A={className:s()("".concat(l,"-header"),(t={},(0,r.Z)(t,d,d),(0,r.Z)(t,"".concat(l,"-header-collapsible-only"),w),(0,r.Z)(t,"".concat(l,"-icon-collapsible-only"),k),t)),"aria-expanded":p,"aria-disabled":I,onKeyPress:this.handleKeyPress};return w||k||(A.onClick=this.onItemClick,A.role=m?"tab":"button",A.tabIndex=I?-1:0),delete j.header,delete j.panelKey,delete j.onItemClick,delete j.showArrow,delete j.expandIcon,v.createElement("div",(0,a.Z)({},j,{className:E,style:c,id:o}),v.createElement("div",A,this.renderIcon(),this.renderTitle(),null!=Z&&"boolean"!=typeof Z&&v.createElement("div",{className:"".concat(l,"-extra")},Z)),v.createElement(g.Z,(0,a.Z)({visible:p,leavedClassName:"".concat(l,"-content-hidden")},y,{forceRender:f,removeOnLeave:h}),function(e,t){var n=e.className,a=e.style;return v.createElement(C,{ref:t,prefixCls:l,className:n,style:a,isActive:p,forceRender:f,role:m?"tabpanel":null},u)}))}}]),n}(v.Component);function j(e){var t=e;if(!Array.isArray(t)){var n=(0,h.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}N.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var I=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(e){(0,l.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,c.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,r=a.props,i=r.prefixCls,o=r.openMotion,s=r.accordion,c=r.destroyInactivePanel,l=r.expandIcon,d=r.collapsible,u=e.key||String(t),p=e.props,h=p.header,m=p.headerClass,f=p.destroyInactivePanel,y=p.collapsible,x=!1;x=s?n[0]===u:n.indexOf(u)>-1;var g=null!=y?y:d,Z={key:u,panelKey:u,header:h,headerClass:m,isActive:x,prefixCls:i,destroyInactivePanel:null!=f?f:c,openMotion:o,accordion:s,children:e.props.children,onItemClick:"disabled"===g?null:a.onClickItem,expandIcon:l,collapsible:g};return"string"==typeof e.type?e:(Object.keys(Z).forEach(function(e){void 0===Z[e]&&delete Z[e]}),v.cloneElement(e,Z))},a.getItems=function(){var e=a.props.children;return(0,m.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var a,r=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=r),a.state={activeKey:j(i)},a}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!y()(this.props,e)||!y()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,i=t.style,o=t.accordion,c=s()((e={},(0,r.Z)(e,n,!0),(0,r.Z)(e,a,!!a),e));return v.createElement("div",{className:c,style:i,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=j(e.activeKey)),t}}]),n}(v.Component);I.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},I.Panel=N,I.Panel;var w=n(98423),k=n(53124),E=n(33603),A=n(96159),P=function(e){var t,n,o=v.useContext(k.E_),c=o.getPrefixCls,l=o.direction,d=e.prefixCls,u=e.className,p=e.bordered,h=e.ghost,f=e.expandIconPosition,y=void 0===f?"start":f,x=c("collapse",d),g=v.useMemo(function(){return"left"===y?"start":"right"===y?"end":y},[y]),Z=s()("".concat(x,"-icon-position-").concat(g),(n={},(0,r.Z)(n,"".concat(x,"-borderless"),!(void 0===p||p)),(0,r.Z)(n,"".concat(x,"-rtl"),"rtl"===l),(0,r.Z)(n,"".concat(x,"-ghost"),!!h),n),void 0===u?"":u),C=(0,a.Z)((0,a.Z)({},E.ZP),{motionAppear:!1,leavedClassName:"".concat(x,"-content-hidden")});return v.createElement(I,(0,a.Z)({openMotion:C},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):v.createElement(i.Z,{rotate:t.isActive?90:void 0});return(0,A.Tm)(a,function(){return{className:s()(a.props.className,"".concat(x,"-arrow"))}})},prefixCls:x,className:Z}),(t=e.children,(0,m.Z)(t).map(function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),i=e.props,o=i.disabled,s=i.collapsible,c=(0,a.Z)((0,a.Z)({},(0,w.Z)(e.props,["disabled"])),{key:r,collapsible:null!=s?s:o?"disabled":void 0});return(0,A.Tm)(e,c)}return e})))};P.Panel=function(e){var t=v.useContext(k.E_).getPrefixCls,n=e.prefixCls,i=e.className,o=e.showArrow,c=t("collapse",n),l=s()((0,r.Z)({},"".concat(c,"-no-arrow"),!(void 0===o||o)),void 0===i?"":i);return v.createElement(I.Panel,(0,a.Z)({},e,{prefixCls:c,className:l}))};var S=P},11382:function(e,t,n){"use strict";var a=n(87462),r=n(4942),i=n(97685),o=n(94184),s=n.n(o),c=n(23279),l=n.n(c),d=n(98423),u=n(67294),p=n(53124),h=n(96159),m=n(93355),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,m.b)("small","default","large");var f=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,o=void 0===n||n,c=e.delay,m=e.className,y=e.size,x=void 0===y?"default":y,g=e.tip,Z=e.wrapperClassName,C=e.style,b=e.children,N=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),j=u.useState(function(){return o&&(!o||!c||!!isNaN(Number(c)))}),I=(0,i.Z)(j,2),w=I[0],k=I[1];return u.useEffect(function(){var e=l()(function(){k(o)},c);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[c,o]),u.createElement(p.C,null,function(n){var i,o,c,l=n.direction,p=s()(t,(c={},(0,r.Z)(c,"".concat(t,"-sm"),"small"===x),(0,r.Z)(c,"".concat(t,"-lg"),"large"===x),(0,r.Z)(c,"".concat(t,"-spinning"),w),(0,r.Z)(c,"".concat(t,"-show-text"),!!g),(0,r.Z)(c,"".concat(t,"-rtl"),"rtl"===l),c),m),v=(0,d.Z)(N,["indicator","prefixCls"]),y=u.createElement("div",(0,a.Z)({},v,{style:C,className:p,"aria-live":"polite","aria-busy":w}),(i=e.indicator,o="".concat(t,"-dot"),null===i?null:(0,h.l$)(i)?(0,h.Tm)(i,{className:s()(i.props.className,o)}):(0,h.l$)(f)?(0,h.Tm)(f,{className:s()(f.props.className,o)}):u.createElement("span",{className:s()(o,"".concat(t,"-dot-spin"))},u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}))),g?u.createElement("div",{className:"".concat(t,"-text")},g):null);if(void 0!==b){var j=s()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),w));return u.createElement("div",(0,a.Z)({},v,{className:s()("".concat(t,"-nested-loading"),Z)}),w&&u.createElement("div",{key:"loading"},y),u.createElement("div",{className:j,key:"container"},b))}return y})},x=function(e){var t=e.prefixCls,n=(0,u.useContext(p.E_).getPrefixCls)("spin",t),r=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return u.createElement(y,(0,a.Z)({},r))};x.setDefaultIndicator=function(e){f=e},t.Z=x},50261:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthModal:function(){return w}});var a=n(85893),r=n(90575),i=n(4480),o=n(8751),s=n(54907),c=n(6880),l=n(11382),d=n(26713),u=n(14670),p=n(69677),h=n(71577),m=n(67294),v=n(37174);let{Panel:f}=s.Z,{Link:y}=c.Z,x=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,c]=(0,m.useState)(null),[x,g]=(0,m.useState)(!1),[Z,C]=(0,m.useState)(!1),[b,N]=(0,m.useState)(""),j=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Use your own domain to authenticate ",(0,a.jsx)("span",{children:n})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),I=i;I&&I.includes("url does not support indieauth")&&(I="The provided URL is either invalid or does not support IndieAuth.");let w=e=>{if(!(0,v.jv)(e)||!e.includes(".")){C(!1);return}C(!0)},k=e=>{let t=e.nativeEvent.data;if(":"===t)return;N(e.target.value);let n="https://".concat(e.target.value);w(n)},E=async()=>{if(Z){g(!0);try{let e=await fetch("/api/auth/indieauth?accessToken=".concat(r),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authHost:"https://".concat(b)})}),t=await e.json();if(t.message){c(t.message),g(!1);return}if(!t.redirect){c("Auth provider did not return a redirect URL."),g(!1);return}if(t.redirect){let{redirect:n}=t;window.location=n}}catch(a){c(a.message)}g(!1)}};return(0,a.jsx)(l.Z,{spinning:x,children:(0,a.jsxs)(d.Z,{direction:"vertical",children:[j,I&&(0,a.jsx)(u.Z,{message:"Error",description:I,type:"error",showIcon:!0}),(0,a.jsx)("div",{children:"Your domain"}),(0,a.jsx)(p.Z.Search,{addonBefore:"https://",onInput:k,type:"url",value:b,placeholder:"yoursite.com",status:!Z&&b.length>0?"error":void 0,onSearch:E,enterButton:(0,a.jsx)(h.Z,{type:Z?"primary":"default",disabled:!Z||0===b.length,children:(0,a.jsx)(o.Z,{})})}),(0,a.jsx)(s.Z,{ghost:!0,children:(0,a.jsxs)(f,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,a.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,a.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,a.jsx)(y,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var g=n(50501),Z=n.n(g);let{Panel:C}=s.Z,b=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,c]=(0,m.useState)(null),[v,f]=(0,m.useState)(!1),[y,x]=(0,m.useState)(!1),[g,b]=(0,m.useState)(""),[N,j]=(0,m.useState)(""),[I,w]=(0,m.useState)(!1),k=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,a.jsx)("strong",{children:n}),", or login as a previously linked chat user."]}),E=i;E&&E.includes("url does not support indieauth")&&(E="The provided URL is either invalid or does not support IndieAuth.");let A=e=>{x(function(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e))},P=e=>{b(e.target.value),A(e.target.value)},S=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),a=await n.json();a.message&&(c(a.message),f(!1))},_=async()=>{f(!0);try{await S("/api/auth/fediverse/verify?accessToken=".concat(r),{code:N}),window.location.href="/"}catch(e){console.error(e),c(e)}f(!1)},K=async()=>{if(!y)return;f(!0),c(null);let e=g.replace(/^@+/,"");try{await S("/api/auth/fediverse?accessToken=".concat(r),{account:e}),w(!0)}catch(t){console.error(t),c(t)}f(!1)},T=(0,a.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,a.jsxs)("div",{className:Z().codeInputContainer,children:[(0,a.jsx)(p.Z,{value:N,onChange:e=>j(e.target.value),className:Z().codeInput,placeholder:"123456",maxLength:6}),(0,a.jsx)(h.Z,{type:"primary",onClick:_,disabled:N.length<6,className:Z().submitButton,children:"Verify Code"})]})]}),O=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:"Your Fediverse Account"}),(0,a.jsx)(p.Z.Search,{addonBefore:"@",onInput:P,value:g,placeholder:"youraccount@yourserver.com",status:!y&&g.length>0?"error":void 0,onSearch:K,enterButton:(0,a.jsx)(h.Z,{type:y?"primary":"default",disabled:!y||0===g.length,children:(0,a.jsx)(o.Z,{})})})]});return(0,a.jsx)(l.Z,{spinning:v,children:(0,a.jsxs)(d.Z,{direction:"vertical",children:[k,E&&(0,a.jsx)(u.Z,{message:"Error",description:E,type:"error",showIcon:!0}),I?T:O,(0,a.jsx)(s.Z,{ghost:!0,children:(0,a.jsx)(C,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,a.jsx)("p",{children:"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."})},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var N=n(54639),j=n.n(N),I=n(77466);let w=e=>{let{forceTabs:t}=e,n=(0,i.sJ)(I.L4),o=(0,i.sJ)(I.FI),s=(0,i.sJ)(I.db),c=(0,i.sJ)(I.g1);if(!s)return null;let{displayName:l}=s,{federation:d}=c,{enabled:u}=d,p=(0,a.jsxs)("span",{className:j().tabContent,children:[(0,a.jsx)("img",{className:j().icon,src:"/img/indieauth.png",alt:"IndieAuth"}),"IndieAuth"]}),h=(0,a.jsx)(x,{authenticated:n,displayName:l,accessToken:o}),m=(0,a.jsxs)("span",{className:j().tabContent,children:[(0,a.jsx)("img",{className:j().icon,src:"/img/fediverse-black.png",alt:"Fediverse auth"}),"FediAuth"]}),v=(0,a.jsx)(b,{authenticated:n,displayName:l,accessToken:o});return(0,a.jsx)("div",{children:(0,a.jsx)(r.Z,{defaultActiveKey:"1",items:[{label:p,key:"1",children:h},{label:m,key:"2",children:v}],type:"card",size:"small",renderTabBar:u||t?null:()=>null})})}},54639:function(e){e.exports={tabContent:"AuthModal_tabContent__KgMU3",icon:"AuthModal_icon__kpEuV"}},50501:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__M_dAD",codeInput:"FediAuthModal_codeInput__dIE6u",submitButton:"FediAuthModal_submitButton__iuF9R"}}}]);
//# sourceMappingURL=261.7313627b86ebf4eb.js.map