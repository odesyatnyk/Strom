<template>
	<v-row>
		<v-col>
			<h1>{{ msg }}</h1>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Greeting extends Vue {
	@Prop() private msg!: string;
}
</script>
