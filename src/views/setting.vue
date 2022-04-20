<template>
	<MainLayout>
		<div class="bg-lightPurplebg min-h-screen px-4 py-8">
			<div class="flex justify-center items-center">
				<ion-text class=" text-xl font-extrabold text-center">Profile</ion-text>
				<i class="lar la-bell text-primary bg-white p-3 rounded-full ml-auto absolute right-6"></i>
			</div>
			<Avatar class="w-28 h-28 mx-auto mt-8"/>
		</div>
	</MainLayout>

</template>

<script lang="ts" setup>
import MainLayout from '@/layout/MainLayout.vue'
import Avatar from '@/components/Avatar.vue'
</script>

<style  scoped>

</style>