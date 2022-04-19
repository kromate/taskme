<template>
	<ion-app>
		<ion-router-outlet />
		<BottomNav/>
	</ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import BottomNav from '@/components/layout/BottomNav.vue'



</script>