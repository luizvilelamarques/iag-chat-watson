<template>
  <div>
		<p class="ola-menu">Olá! Escolha abaixo o módulo que deseja ajuda:</p>	
		  <v-container fluid grid-list-md text-xs-center>
			<v-layout row wrap>
			  
			  <v-flex v-for="itemMenu in items" :key="itemMenu.assunto" xs3>
				<v-card  color="white" class="rounded-card">
				  <v-btn class="itemMenu rounded-card" v-on:click="acessoChat(itemMenu.assunto)"><span style="margin-right:10%;margin-left:10%;white-space: normal;">{{itemMenu.text}}</span></v-btn>
				</v-card>
			  </v-flex>
			  
			  <v-flex xs12>
			     <v-card color="white" class="rounded-card">
				  <v-btn class="itemMenu itemMenu-apoio rounded-card" v-on:click="acessoChat('Apoio')">APOIO</v-btn>
				</v-card>
			  </v-flex>
			  
			</v-layout>
		  </v-container>
		 
	</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'INDICADORES', assunto: 'Indicadores'},
        { text: 'ANÁLISE CRÍTICA', assunto: 'Análise Crítica'},
        { text: 'AÇÕES E PROJETOS', assunto: 'Ações e Projetos'},
        { text: 'NÃO CONFORMIDADE', assunto: 'Não Conformidade'},
        { text: 'DOCUMENTOS', assunto: 'Documentos'},
		{ text: 'ESTRATÉGIA - BSC', assunto: 'Estratégia - BSC'},
		{ text: 'MATRIZ DE RISCO', assunto: 'Matriz de Risco'},
		{ text: 'MAPA DE PROCESSOS', assunto: 'Mapa de processos'}
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

.v-card {
	-webkit-box-shadow: none !important;
	-moz-box-shadow: none !important;
	box-shadow: none !important;
}
	
.itemMenu{
  border:2px solid #e0642f;
  height:90px;
  font-weight: bold;
  font-size:19px;
  color: #e0642f;
  margin-left:0;
  border-radius: 1% 1% 1% 1%;
  width:100%
}

.itemMenu-apoio{
  height:60px;
}

.ola-menu{
  font-family:Roboto;
  font-color:#000;
  font-size:40px;
  font-weight: bold;
  text-align:center;
  margin-top:5%;
  margin-left:5%;
  margin-right:5%;
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
</style>
