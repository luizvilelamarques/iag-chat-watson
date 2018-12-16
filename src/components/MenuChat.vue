<template>
  <div>
		<p class="ola-menu">Olá! Escolha abaixo o módulo que deseja ajuda:</p>	
		  <v-container grid-list-md text-xs-center>
			<v-layout row wrap>
			  <v-flex v-for="itemMenu in items" :key="itemMenu.assunto" xs3>
				<v-btn class="itemMenu" v-on:click="acessoChat(itemMenu.assunto)">{{itemMenu.text}}</v-btn>
			  </v-flex>
			  <v-flex xs12>
			     <v-btn class="itemMenu-apoio" v-on:click="acessoChat('Apoio')">APOIO</v-btn>
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

.itemMenu{
  border:2px solid #e0642f;
  height:90px;
  width: 200px;
  font-weight: bold;
  font-size:19px;
  color: #e0642f;
  margin-left:0;
  border-radius: 1% 1% 1% 1%;
}

.itemMenu-apoio{
  border:2px solid #e0642f;
  height:60px;
  width: 99%;
  font-weight: bold;
  font-size:19px;
  color: #e0642f;
  margin-left:0;
  border-radius: 1% 1% 1% 1%;
}

.ola-menu{
  font-family:Montserrat;
  font-color:#000;
  font-size:40px;
  font-weight: bold;
  text-align:center;
  margin-top:5%;
}

.container {
	margin: 0% 5% 0% 3%;
	width:95%
}
</style>
