<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style>
.errors {
    color: red;
	font-size: 15px;
}
.paths {
	text-decoration: underline;
}
</style>
