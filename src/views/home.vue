<template>
	<ion-page class="text-purple-500 text-2xl bg-white px-7 py-8" >
		<div class="flex">
			<Avatar/>
			<span>
				<ion-text> Good morning</ion-text> <br>
				<ion-text class="text-base">Rebecca</ion-text>
			</span>
		</div>

		<i class="lar la-bell"></i>
	</ion-page>
</template>

<script lang="ts" setup>
import Avatar from '@/components/Avatar.vue'
</script>

<style  scoped>

</style>