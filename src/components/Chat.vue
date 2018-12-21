<template>
	<div style="height:100%">
		<v-flex class="cabecalho-chat" xs12>
		  <v-btn class="botao-voltar rounded-card" to="/"><p style="margin-top:5px;">VOLTAR PARA O MENU</p></v-btn>
		</v-flex xs12>
		<div id="chat">
			<ul class="conversation-list" id="painelChat">	
			<li v-for="(iteracaoChat, index) in iteracoes" :key="`iteracao${index}`" style="padding-bottom:5px;">
				<v-container fluid grid-list-md text-xs-left>
					<v-layout row wrap>

            <v-flex xs12 class="text-xs-right" v-if="iteracaoChat.iteracao">
              <div class="rounded-card tamanho-card v-card gray--text usuario">
                {{iteracaoChat.iteracao}}
                </div>
            </v-flex>

            <v-flex xs12 style="padding-bottom:3px;max-width:75%;" v-for="(item, index) in iteracaoChat.respostas" :key="`item${index}`">
              <v-layout row>
                  <img src="static/robot.jpg" class="img-robo" width="40" height="40"/>
                  <div class="rounded-card tamanho-card v-card white--text pergunta" >
                    <nl2br tag="p" :text="item.resposta"/>
                  </div>
              </v-layout>
            </v-flex>
            <v-flex xs12 v-if="iteracaoChat.showImg" style="max-width:75%;">
              <div class="rounded-card tamanho-card v-card white--text pergunta" style="line-height: 0;">
                <img  src="static/iphone-text-dots-gif-3.gif" class="img-load"/>
              </div>
            </v-flex>

            <v-flex xs12 v-if="!iteracaoChat.showImg" style="padding-bottom:8px;padding-top:8px; max-width:75%;" v-for="(pergunta, index) in iteracaoChat.perguntas" :key="`pergunta${index}`">
              <v-layout row>
              <img src="static/robot.jpg" class="img-robo" width="40" height="40"/>
              <div class="rounded-card tamanho-card v-card white--text pergunta">
							  <nl2br tag="p" :text="pergunta"/>
						   </div>
              </v-layout>
						</v-flex>
				
						<v-flex xs12 v-if="!iteracaoChat.showImg" style="padding:0 0;min-width:75%;" v-for="(opc, index) in iteracaoChat.opcoes" :key="`opcao${index}`">
						  <span style="justify-content:left;">
							  <v-btn class="opcao rounded-card text-xs-left" v-on:click="iteracao(opc.value, context)">{{opc.label}}</v-btn>
						  </span>	 
						</v-flex>
					</v-layout>
				</v-container>
			</li>

			</ul>
		</div>
		<label for="textInput" class="inputOutline">
		  <input id="textInput" size="105" v-on:keyup.enter="perguntaUsuario" v-model="parametro" class="input" autofocus placeholder="Digite sua mensagem..." type="text">
		</label>
	</div>
</template>

<script>
  import Nl2br from 'vue-nl2br'
  import jquery from 'jquery';
  window.$ = window.jQuery = jquery;
  require('jquery-slimscroll');
 
  export default {
    name: 'my-component',
    components: {
      Nl2br,
    },
    data: () => ({
	  img: '-webkit-linear-gradient(top, #1FB5AD, #1FB5AD 10%, transparent 10%, transparent 100%) !important;',
      parametro: null,
	    text: null,
	    context: null,
	    iteracoes: [],
	    itemIteracao: {
		       respostas: [],
		       perguntas: [],
		       opcoes: [],
		       iteracao:null
	    }
    }),
	mounted () {
      let primeiraIteracao = {
        respostas: [],
        perguntas: [],
        opcoes: [],
        iteracao: this.$route.params.assunto,
        showImg: true
      };
      this.iteracoes.push(primeiraIteracao);
      let self = this;
      setTimeout(function(){
        self.parametro = self.$route.params.assunto;
        self.iteracao(self.parametro, self.context);
        $('#chat .conversation-list').slimscroll({
          height: '65vh',
          start: 'bottom',
        });
        primeiraIteracao.showImg = false;
        primeiraIteracao.iteracao = null;
      }, 2000);
	},
  watch: {
      "iteracoes": function(res) {
        let self = this;
        setTimeout(function(){ self.atualizaScroll(); }, 500);
      }
  },
  methods: {
	   atualizaScroll (){
		    $('#chat .conversation-list').slimScroll({ scrollTo: ($('#chat .conversation-list li').length*1000), animate: true });
       document.getElementById('').scrollIntoView()
	   },

	   perguntaUsuario () {
		  this.iteracao(this.parametro, this.context);
	   },

	   async iteracao (text, context) {
	    this.parametro=null;
	    this.itemIteracao = {
			respostas: [],
			perguntas: [],
			opcoes: [],
			iteracao: text,
        showImg: false
	    }
		  const response = await (await this.$http.post('conversation', {text, context}).then(res => res.json()));
		  this.context = response.context;
		  let self = this;
		  response.output.generic.forEach(function(generic){
			  if (generic.response_type==='text'){
			    let resposta = {resposta: generic.text};
          self.itemIteracao.showImg = true;
			    self.itemIteracao.respostas.push(resposta);
			  }else{
				  self.itemIteracao.perguntas.push(generic.title);
				  generic.options.forEach(function(opt){
				    let optionChat = {label: opt.label, value: opt.value.input.text};
				    self.itemIteracao.opcoes.push(optionChat);
				  });
			  }
			  if (self.itemIteracao.showImg) {
          setTimeout(function(){self.itemIteracao.showImg = false; self.atualizaScroll();}, 4000);
        }
		  });
		  self.iteracoes.push(this.itemIteracao);
	   }
	  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container.grid-list-md .layout .flex {
      padding-left: 0px;
  }

  .v-btn{
    text-transform:none;
  }

  .botao-voltar{
    border:1px solid white;
    height:50px;
    width: 92%;
    font-weight: bold;
    font-size:16px;
    color: white;
    margin-left:5%;
    margin-right:3%;
    font-family: 'Open Sans';
  }

  #chat{
    margin: 0% 2% 0% 10px;
    margin-top:0px;
    overflow:auto;
    max-height: 65vh;
    min-height: 65vh;
  }

  .opcao{
    border:0.5px solid #1FB5AD;
    height:40px;
    width: 75%;
    font-size:14px;
    color: #1FB5AD;
    margin-left:0;
    font-family: 'Open Sans';
    font-color: #1FB5AD;
  }

  .iteracaoUsuario{
    font-family: 'Open Sans';
  }

  .conversation-list{
    list-style-type:none;
    padding-left:50;
    min-height:90%;
  }

  .conversation-list li {
    list-style-type:none;
  }

  p{
    margin-bottom:0px;
    margin-top:0px;
  }

  .v-card__title {
    padding:10px;
  }

  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color:white;
    margin-top:0;
    margin-bottom:0;
    border-radius: 1% 1% 1% 1%;
  }

  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat).botao-voltar {
    background-color:#1FB5AD;
    margin-top:0;
    margin-bottom:0;
    border-radius: 1% 1% 1% 1%;
  }

  .cardChat{
    max-width:75%;
  }

  .tamanho-card{
    display: inline-block;
    width:auto;
    max-width:100%;
    vertical-align: middle;
    font-family: 'Open Sans';
  }

  .pergunta{
    border-bottom-left-radius: 0px !important;
    padding: 5px 15px;
    background-color:#1FB5AD;
  }

  .usuario{
    border-bottom-right-radius: 0px !important;
    background-color:#E8E8E8;
    font-family: 'Open Sans';
    font-size:16px;
    padding: 5px 15px;
  }

  .cabecalho-chat{
    border-bottom: 2px solid #1FB5AD; padding-bottom:10px;padding-top:0px;
    background: #1FB5AD;
    margin-top: -15px;
    padding-top: 15px;
  }

  .img-robo{
     margin-right: 5px;
    margin-left: -40px;
  }

  .img-load{
    margin: -10px -15px;
    width:50px;
  }

</style>
