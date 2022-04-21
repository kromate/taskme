<template>
	<MainLayout>
		<div class="bg-lightPurplebg min-h-screen px-5 py-8 flex flex-col pb-24">
			<div class="flex justify-center items-center">
				<ion-text class=" text-xl font-extrabold text-center">Profile</ion-text>
				<i class="lar la-bell text-primary bg-white p-3 rounded-full ml-auto absolute right-6  "></i>
			</div>
			<Avatar class="w-28 h-28 mx-auto mt-8"/>

			<ion-text class="text-xl font-extrabold text-center mt-6">Amelia Barlow</ion-text>

			<div class="bg-purple p-5 flex flex-col justify-center items-center rounded-3xl mt-4">
				<span class="text-xl text-white font-bold text-center">Refer a friend and earn 2.5% from their first task</span>
				<button class="font-medium bg-white text-purple text-xs py-2 px-4 rounded-full mt-2 w-fit">Copy referral code</button>
			</div>	

			<div class="bg-white mt-6 p-4 rounded-3xl">
				<div :class="['flex items-center p-3 py-4 border-lightPurplebg']" v-for="(n, ind) in options" :key="n.name">
					<i class="lar la-user text-purple text-xl w-9 h-9 bg-lightPurple p-3 rounded-full justify-center flex items-center"></i>
					<ion-text class="font-medium text-base ml-4">{{n.name}}</ion-text>
					<i class="las la-angle-right ml-auto"></i>

				</div>
			</div>
		</div>
	</MainLayout>

</template>

<script lang="ts" setup>
import MainLayout from '@/layout/MainLayout.vue'
import Avatar from '@/components/Avatar.vue'

const options = [
	{icon:'user', name: 'Profile info', link:''	},
	{icon:'user', name: 'Activities', link:''	},
	{icon:'user', name: 'My wallet', link:''	},
	{icon:'user', name: 'Settings', link:''	},
]
</script>

<style  scoped>

</style>