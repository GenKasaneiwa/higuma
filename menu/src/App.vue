<template>
  <div id="nav">
    <router-link to="/">Menu</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Asul:wght@700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&display=swap");

#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	/* font-family: 'Asul', sans-serif; */
	/* font-family: 'Inter', sans-serif; */
	font-family: "IBM Plex Serif", serif;
	text-align: center;
	/* color: #002b42; */
	color: #002b42;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

html {
	background: #dedede;
}
</style>
