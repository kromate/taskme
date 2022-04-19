<template>
	<MainLayout>

		<div class="w-full flex justify-between items-center pt-8 px-7">
			<div class="flex items-center">
				<Avatar class="w-11 h-11 mr-3"/>
				<span class="flex flex-col">
					<ion-text class="text-grey text-xs font-medium"> Good morning</ion-text> 
					<ion-text class="text-base text-primary font-medium">Rebecca</ion-text>
				</span>
			</div>
			<i class="lar la-bell text-primary border p-3 rounded-full"></i>
		</div>

		<div class="bg-purple w-full h-48 mt-12 ">
		</div>

	
	</MainLayout>
	
		

	
</template>

<script lang="ts" setup>
import Avatar from '@/components/Avatar.vue'
import MainLayout from '@/layout/MainLayout.vue'
</script>

<style  scoped>

</style>