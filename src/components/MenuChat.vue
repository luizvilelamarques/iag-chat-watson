<template>
  <div id="main">
		  <v-container fluid grid-list-md text-xs-center>
			<v-layout row wrap>

        <v-flex xs2 style="width: 170px;">
          <img src="static/avatar.png" width="140" height="140"/>
        </v-flex>

        <v-flex xs10>
          <p class="ola-menu" style="line-height:1.1">"Bem-vindo ao chatbot do SigQuali. Eu sou a Sigrid. Para começar, em que módulo posso ajudá-lo?"</p>
        </v-flex>
			  
			  <v-flex v-for="itemMenu in items" :key="itemMenu.assunto" xs3>
          <v-card  color="white" class="rounded-card">
            <v-btn class="itemMenu rounded-card" v-on:click="acessoChat(itemMenu.assunto)"><span style="margin-right:10%;margin-left:10%;white-space: normal;">{{itemMenu.text}}</span></v-btn>
          </v-card>
			  </v-flex>
			  
			  <v-flex xs12>
			     <v-card color="white" class="rounded-card">
				  <v-btn class="itemMenu itemMenu-apoio rounded-card" v-on:click="acessoChat('Apoio')">Apoio</v-btn>
				</v-card>
			  </v-flex>
			</v-layout>
		  </v-container>
		  
		  <div class="div-img">
			  <a href="https://usabilidade.sigquali.com.br" >
				<img src="static/logo_sigquali.png" width="155" height="40"/>
			  </a>
		  </div>
		 
	</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'Indicadores', assunto: 'Indicadores'},
        { text: 'Análises Críticas', assunto: 'Análise Crítica'},
        { text: 'Ações e Projetos', assunto: 'Ações e Projetos'},
        { text: 'Não Conformidade', assunto: 'Não Conformidade'},
        { text: 'Documentos', assunto: 'Documentos'},
		{ text: 'Estratégia e Painéis de Controle', assunto: 'Estratégia - BSC'},
		{ text: 'Matriz de Risco', assunto: 'Matriz de Risco'},
		{ text: 'Mapa de Processos', assunto: 'Mapa de processos'}
      ]
    }),
	methods: {
		acessoChat (assunto) {
			this.$router.push({
			  name: 'chat',
			  params: {
				assunto: assunto
			  }
			})
		}
	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


	
#main{
 height:100%;
}

.div-img{
   position: absolute;
   bottom: 0;
   width: 100%;
   text-align: center;
}

.v-card {
	-webkit-box-shadow: none !important;
	-moz-box-shadow: none !important;
	box-shadow: none !important;
}
	
.itemMenu{
  border:2px solid #1FB5AD;
  height:90px;
  font-weight: bold;
  font-size:19px;
  color: #1FB5AD !important;
  margin-left:0;
  border-radius: 1% 1% 1% 1%;
  width:100%;
  padding:0px;
}

.itemMenu-apoio{
  height:60px;
}

.ola-menu{
  font-family:Open Sans;
  font-color:#000;
  font-size:37px;
  font-weight: bold;
  text-align:left;
  margin-left: 30px;,
  line-height: 1px;
}

.v-btn{
    text-transform:none;
  }

.container {
	margin: 0% 5% 0% 3%;
	width:95%
}

.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color:white;
  margin-top:0;
  margin-bottom:0;
  border-radius: 1% 1% 1% 1%;
}

.topo-chat {
   background-image: linear-gradient(top, white, white 10%, transparent 10%, transparent 100%) !important;
   background-image: -webkit-linear-gradient(top, white, white 10%, transparent 10%, transparent 100%) !important; 
}




</style>
