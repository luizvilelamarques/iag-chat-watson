webpackJsonp([1],{0:function(t,a){},"7zck":function(t,a){},"9wcY":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),o=e("8+8L"),n=e("3EgV"),r=e.n(n),i=(e("7zck"),{render:function(){var t=this.$createElement,a=this._self._c||t;return a("v-app",[a("div",{staticClass:"chat-column"},[a("v-content",[a("router-view")],1)],1)])},staticRenderFns:[]});var c=e("VU/8")({data:function(){return{}},name:"App"},i,!1,function(t){e("nwYA")},null,null).exports,u=e("/ocq"),l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticStyle:{width:"170px"},attrs:{xs2:""}},[e("img",{attrs:{src:"static/robot.jpg",width:"160",height:"160"}})]),t._v(" "),e("v-flex",{attrs:{xs10:""}},[e("p",{staticClass:"ola-menu"},[t._v("Bem vindo ao chatbot do Sigquali."),e("br"),t._v(" Para começar, em qual módulo posso lhe ajudar?")])]),t._v(" "),t._l(t.items,function(a){return e("v-flex",{key:a.assunto,attrs:{xs3:""}},[e("v-card",{staticClass:"rounded-card",attrs:{color:"white"}},[e("v-btn",{staticClass:"itemMenu rounded-card",on:{click:function(e){t.acessoChat(a.assunto)}}},[e("span",{staticStyle:{"margin-right":"10%","margin-left":"10%","white-space":"normal"}},[t._v(t._s(a.text))])])],1)],1)}),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("v-card",{staticClass:"rounded-card",attrs:{color:"white"}},[e("v-btn",{staticClass:"itemMenu itemMenu-apoio rounded-card",on:{click:function(a){t.acessoChat("Apoio")}}},[t._v("APOIO")])],1)],1)],2)],1)],1)},staticRenderFns:[]};var p=e("VU/8")({data:function(){return{items:[{text:"INDICADORES",assunto:"Indicadores"},{text:"ANÁLISE CRÍTICA",assunto:"Análise Crítica"},{text:"AÇÕES E PROJETOS",assunto:"Ações e Projetos"},{text:"NÃO CONFORMIDADE",assunto:"Não Conformidade"},{text:"DOCUMENTOS",assunto:"Documentos"},{text:"ESTRATÉGIA - BSC",assunto:"Estratégia - BSC"},{text:"MATRIZ DE RISCO",assunto:"Matriz de Risco"},{text:"MAPA DE PROCESSOS",assunto:"Mapa de processos"}]}},methods:{acessoChat:function(t){this.$router.push({name:"chat",params:{assunto:t}})}}},l,!1,function(t){e("yL/K")},"data-v-f5bb60c0",null).exports,d=e("Xxa5"),m=e.n(d),h=e("exGp"),v=e.n(h),f=e("j93a"),x=e.n(f),g=e("7t+N"),w=e.n(g);window.$=window.jQuery=w.a,e("DBzq");var _={name:"my-component",components:{Nl2br:x.a},data:function(){return{img:"-webkit-linear-gradient(top, #1FB5AD, #1FB5AD 10%, transparent 10%, transparent 100%) !important;",parametro:null,text:null,context:null,iteracoes:[],itemIteracao:{respostas:[],perguntas:[],opcoes:[],iteracao:null}}},mounted:function(){var t={respostas:[],perguntas:[],opcoes:[],iteracao:this.$route.params.assunto,showImg:!0};this.iteracoes.push(t);var a=this;setTimeout(function(){a.parametro=a.$route.params.assunto,a.iteracao(a.parametro,a.context),$("#chat .conversation-list").slimscroll({height:"65vh",start:"bottom"}),t.showImg=!1,t.iteracao=null},2e3)},watch:{iteracoes:function(t){var a=this;setTimeout(function(){a.atualizaScroll()},500)}},methods:{atualizaScroll:function(){$("#chat .conversation-list").slimScroll({scrollTo:1e3*$("#chat .conversation-list li").length,animate:!0}),document.getElementById("").scrollIntoView()},perguntaUsuario:function(){this.iteracao(this.parametro,this.context)},iteracao:function(t,a){var e=this;return v()(m.a.mark(function s(){var o,n,r,i;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e.parametro=null,e.itemIteracao={respostas:[],perguntas:[],opcoes:[],iteracao:t,showImg:!1},s.next=4,e.$http.post("conversation",{text:t,context:a}).then(function(t){return t.json()});case 4:return s.next=6,s.sent;case 6:o=s.sent,e.context=o.context,n=e,r=!(0==o.output.generic.filter(function(t){return t.options}).length),i=o.output.generic.filter(function(t){return"text"===t.response_type}),o.output.generic.forEach(function(t){if("text"===t.response_type){var a={resposta:t.text};n.itemIteracao.showImg=i&&r,n.itemIteracao.respostas.push(a)}else n.itemIteracao.perguntas.push(t.title),t.options.forEach(function(t){var a={label:t.label,value:t.value.input.text};n.itemIteracao.opcoes.push(a)});n.itemIteracao.showImg&&setTimeout(function(){n.itemIteracao.showImg=!1,n.atualizaScroll()},4e3)}),n.iteracoes.push(e.itemIteracao);case 13:case"end":return s.stop()}},s,e)}))()}}},C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"}},[e("v-flex",{staticClass:"cabecalho-chat",attrs:{xs12:""}},[e("v-btn",{staticClass:"botao-voltar rounded-card",attrs:{to:"/"}},[e("p",{staticStyle:{"margin-top":"5px"}},[t._v("VOLTAR PARA O MENU")])])],1),t._v(" "),e("div",{attrs:{id:"chat"}},[e("ul",{staticClass:"conversation-list",attrs:{id:"painelChat"}},t._l(t.iteracoes,function(a,s){return e("li",{key:"iteracao"+s,staticStyle:{"padding-bottom":"5px"}},[e("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-left":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[a.iteracao?e("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[e("div",{staticClass:"rounded-card tamanho-card v-card gray--text usuario"},[t._v("\n                "+t._s(a.iteracao)+"\n                ")])]):t._e(),t._v(" "),t._l(a.respostas,function(a,s){return e("v-flex",{key:"item"+s,staticStyle:{"padding-bottom":"3px","max-width":"75%"},attrs:{xs12:""}},[e("v-layout",{attrs:{row:""}},[e("img",{staticClass:"img-robo",attrs:{src:"static/robot.jpg",width:"40",height:"40"}}),t._v(" "),e("div",{staticClass:"rounded-card tamanho-card v-card white--text pergunta"},[e("nl2br",{attrs:{tag:"p",text:a.resposta}})],1)])],1)}),t._v(" "),a.showImg?e("v-flex",{staticStyle:{"max-width":"75%"},attrs:{xs12:""}},[e("div",{staticClass:"rounded-card tamanho-card v-card white--text pergunta",staticStyle:{"line-height":"0"}},[e("img",{staticClass:"img-load",attrs:{src:"static/iphone-text-dots-gif-3.gif"}})])]):t._e(),t._v(" "),t._l(a.perguntas,function(s,o){return a.showImg?t._e():e("v-flex",{key:"pergunta"+o,staticStyle:{"padding-bottom":"8px","padding-top":"8px","max-width":"75%"},attrs:{xs12:""}},[e("v-layout",{attrs:{row:""}},[e("img",{staticClass:"img-robo",attrs:{src:"static/robot.jpg",width:"40",height:"40"}}),t._v(" "),e("div",{staticClass:"rounded-card tamanho-card v-card white--text pergunta"},[e("nl2br",{attrs:{tag:"p",text:s}})],1)])],1)}),t._v(" "),t._l(a.opcoes,function(s,o){return a.showImg?t._e():e("v-flex",{key:"opcao"+o,staticStyle:{padding:"0 0","min-width":"75%"},attrs:{xs12:""}},[e("span",{staticStyle:{"justify-content":"left"}},[e("v-btn",{staticClass:"opcao rounded-card text-xs-left",on:{click:function(a){t.iteracao(s.value,t.context)}}},[t._v(t._s(s.label))])],1)])})],2)],1)],1)}),0)]),t._v(" "),e("label",{staticClass:"inputOutline",attrs:{for:"textInput"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.parametro,expression:"parametro"}],staticClass:"input",attrs:{id:"textInput",size:"105",autofocus:"",placeholder:"Digite sua mensagem...",type:"text"},domProps:{value:t.parametro},on:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.perguntaUsuario(a):null},input:function(a){a.target.composing||(t.parametro=a.target.value)}}})])],1)},staticRenderFns:[]};var y=e("VU/8")(_,C,!1,function(t){e("9wcY")},"data-v-8b64d548",null).exports;s.default.use(u.a);var I=new u.a({routes:[{path:"/",name:"MenuChat",component:p},{path:"chat",name:"chat",component:y}]});s.default.use(r.a),s.default.use(o.a),s.default.config.productionTip=!1,s.default.router=I,s.default.http.options.root="https://kkmaejd863.execute-api.us-east-1.amazonaws.com/dev",new s.default({el:"#app",router:I,components:{App:c},template:"<App/>"})},nwYA:function(t,a){},"yL/K":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.67df8d4839dccda27693.js.map