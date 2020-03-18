<template>
	<div class="home">
		<greeting msg="Welcome!"/>
	</div>
</template>

<script lang="ts">
import Greeting from '@/components/Greeting.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: { Greeting } })
export default class Home extends Vue {

}
</script>
