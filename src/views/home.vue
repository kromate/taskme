<template>
	<MainLayout>

		<div class="w-full flex justify-between items-center pt-8 px-4">
			<div class="flex items-center">
				<Avatar class="w-11 h-11 mr-3"/>
				<span class="flex flex-col">
					<ion-text class="text-grey text-xs font-medium"> Good morning</ion-text> 
					<ion-text class="text-base text-primary font-medium">Rebecca</ion-text>
				</span>
			</div>
			<i class="lar la-bell text-primary border p-3 rounded-full"></i>
		</div>

		<div class="h-[12.25rem] w-full  my-12 bg flex items-center justify-between">
			<div class="flex flex-col pl-6 w-1/2 items-start">
				<ion-text class="text-2xl font-extrabold text-white">Make your life much easier </ion-text>
				<ion-text class="text-sm text-white font-medium mt-2">Why work when someone else can ?</ion-text>
				<button class="bg-white text-purple text-xs py-2 px-4 rounded-full mt-2">Post a Task</button>
			</div>

			<img src="../asset/images/homeAvatar1.png" alt="home cta" class="object-contain mb-1.5 ">
		</div>

		<div class="flex p-4 w-full">
			<div class="rounded-xl border border-[#5a69debf] bg-[#F5F5FF] p-3 w-1/2 flex items-center justify-between">
				<ion-text class="text-lg font-bold text-purple">
					Task <br> Requested
				</ion-text>

				<div class="rounded-full h-12 w-12 border-[3px] p-3 font-extrabold text-xl text-purple border-purple flex justify-center items-center">
					10
				</div>
			</div>
			<div class="rounded-xl border border-[#5a69debf] bg-[#F5F5FF] p-3 w-1/2 flex items-center justify-between ml-4">
				<ion-text class="text-lg font-bold text-purple">
					Task <br> Received
				</ion-text>

				<div class="rounded-full h-12 w-12 border-[3px] p-3 font-extrabold text-xl text-purple border-purple flex justify-center items-center">
					0
				</div>
			</div>
		</div>

		<div class="flex">
			
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