<template>
  <v-app>
	<div class="chat-column">
	<v-content>
	  <router-view/>
	</v-content>
  </div>	
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
	overflow:none; 
	background-color: #f2f2f2;
	height: 100vh;
}

html {
    font-size: 16px;
	max-height: 100%;
	height: 100vh;
}

.chat-column {
	background-color: #fff;
    padding: 0.9375rem 0 0.625rem 0;
    text-align: left;
	margin-left: 15%;
	margin-right: 15%;
	margin-bottom: 3%;
	margin-top: 3%;
	border-radius: 1% 1% 1% 1%;
	box-shadow: 3px 3px 19px 0px rgba(0,0,0,0.65);
	height: 100%;
}

#textInput {
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    letter-spacing: 0.015rem;
    line-height: 1.3125rem;
    height: 2.5rem;
    overflow: none;
}

.inputOutline {
    display: block;
    border-bottom: 0.2625rem solid #e0642f;
    margin-left: 5%;
    margin-right: 5%;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D8D8D8; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #A4A4A4; 
}



</style>
