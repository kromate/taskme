<template>
	<ion-page class="text-purple-500 text-2xl bg-white px-7 py-8" >
		<div class="w-full flex justify-between items-center">
			<div class="flex items-center">
				<Avatar class="w-11 h-11 mr-3"/>
				<span class="flex flex-col">
					<ion-text class="text-grey text-xs font-medium"> Good morning</ion-text> 
					<ion-text class="text-base text-primary font-medium">Rebecca</ion-text>
				</span>
			</div>

			<i class="lar la-bell text-primary border p-3 rounded-full"></i>
		</div>

		<div class="purple w-full">
		</div>


	</ion-page>
</template>

<script lang="ts" setup>
import Avatar from '@/components/Avatar.vue'
</script>

<style  scoped>

</style>