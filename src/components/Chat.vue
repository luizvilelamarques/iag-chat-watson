<template>
	<div class="maindiv">
		<v-btn class="botao-voltar" to="/"><p style="margin-top:5px;">VOLTAR PARA O MENU</p></v-btn>
		<div id="chat">
			<ul class="conversation-list" id="painelChat">	
			<li v-for="(iteracaoChat, index) in iteracoes" :key="`iteracao${index}`" style="padding-bottom:5px;">
				
				<v-flex xs12 style="width:50%;margin-left:50%;padding-bottom:3px;">
					<v-card color="#E8E8E8" class="black--text" >
					  <v-card-title primary-title class="layout top-left iteracaoUsuario">
						<nl2br tag="p" :text="iteracaoChat.iteracao"/>
						</v-card-title>
					</v-card>
				</v-flex xs12>	
					
				<v-flex xs12 style="padding-bottom:3px;" v-for="(item, index) in iteracaoChat.respostas" :key="`item${index}`">
					<v-card color="#e0642f" class="white--text" >
					  <v-card-title primary-title class="layout top-left">
						<nl2br tag="p" :text="item" style="margin-bottom:0px;margin-top:0px;"/>
						</v-card-title>
					</v-card>
				</v-flex xs12>	
				
				<v-flex xs12 v-for="(pergunta, index) in iteracaoChat.perguntas" :key="`pergunta${index}`">
					<v-card color="#e0642f" class="white--text" style="width:200px;" v-if="pergunta.length<50">
					  <v-card-title primary-title class="layout top-left cardChat" v-html>
							<nl2br tag="p" :text="pergunta" style="margin-bottom:0px;margin-top:0px;"/>
						</v-card-title>
					</v-card>
					<v-card color="#e0642f" class="white--text" style="border-radius: 1% 1% 1% 1%" v-if="pergunta.length>50">
					  <v-card-title primary-title class="layout top-left cardChat" v-html>
						<nl2br tag="p" :text="pergunta" style="margin-bottom:0px;margin-top:0px;!important"/>
					  </v-card-title>
					</v-card>
				</v-flex xs12>
				
				<v-flex xs12 v-for="(opc, index) in iteracaoChat.opcoes" :key="`opcao${index}`" style="padding-top:5px;">
				  <v-btn  class="opcao" v-on:click="iteracao(opc, context)">{{opc}}</v-btn>
				</v-flex xs12>
			</li>
			</ul>
		</div>
		<label for="textInput" class="inputOutline">
		  <input id="textInput" size="105" v-on:keyup.enter="perguntaUsuario" v-model="parametro" class="input" autofocus placeholder="Digite sua resposta..." type="text">
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
      this.parametro = this.$route.params.assunto;
	  this.iteracao(this.parametro, this.context);
	  $('#chat .conversation-list').slimscroll({
		height: '400px',
		start: 'bottom',
      });
	},
	created: function() {
        this.$watch("iteracoes", function(res) {
			let self = this;
			setTimeout(function(){ self.atualizaScroll(); }, 500);
        })
    },
	 methods: {
	   atualizaScroll (){
		 $('#chat .conversation-list').slimScroll({ scrollTo: ($('#chat .conversation-list li').length*1000) });
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
			iteracao: text
	    }
		const response = await (await this.$http.post('conversation', {text, context}).then(res => res.json()));
		this.context = response.context; 
		let self = this;
		
		response.output.generic.forEach(function(generic){
			if (generic.response_type==='text'){
			    self.itemIteracao.respostas.push(generic.text);
			}else{	  
				self.itemIteracao.perguntas.push(generic.title);
				generic.options.forEach(function(opt){
				  self.itemIteracao.opcoes.push(opt.label);
				});
			}
		});
		self.iteracoes.push(this.itemIteracao);
	   }
	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.botao-voltar{
  border:2px solid #e0642f;
  height:50px;
  width: 90%;
  font-weight: bold;
  font-size:16px;
  color: #e0642f;
  margin-left:5%;
  margin-right:5%;
  font-family: 'Roboto';
  padding-bottom: 10px;
}

#chat{
	margin: 0% 5% 0% 5%; 
	margin-top:10px;
	overflow:auto; 
	min-height:400px;
}

.opcao{
  border:2px solid #e0642f;
  height:40px;
  width: 100%;
  font-weight: bold;
  font-size:14px;
  color: #e0642f;
  margin-left:0;
  font-family: 'Roboto';
}

.iteracaoUsuario{
  font-family: 'Roboto';
}

.conversation-list{
  list-style-type:none;
  padding-left:0;
  min-height:400px;
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

</style>