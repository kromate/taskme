<template>
	<ion-app>
		<ion-router-outlet />
		<BottomMenu/>
	</ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import BottomMenu from '@/components/layout/BottomMenu.vue'



</script>