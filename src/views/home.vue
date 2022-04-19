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

		<div class="h-[12.25rem] w-full  mt-12 bg flex items-center justify-between">
			<div class="flex flex-col">
				<ion-text class="text-2xl font-extrabold text-white">Make your life much easier </ion-text>
			</div>

			<img src="../asset/images/homeAvatar1.svg" alt="home cta" class="object-contain mb-1.5">
		</div>

	
	</MainLayout>
	
		

	
</template>

<script lang="ts" setup>
import Avatar from '@/components/Avatar.vue'
import MainLayout from '@/layout/MainLayout.vue'
</script>

<style  scoped>
.bg{
	background: url('../asset/images/background.svg');
	background-origin: border-box;
}
</style>