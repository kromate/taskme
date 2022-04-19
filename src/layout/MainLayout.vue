<template>
	<ion-page  >
		<ion-content >
			<slot/>
		</ion-content>

		<IonFooter class="ion-no-border border-top-line">
			<IonToolbar class="pt-0.5">
				<div class="flex justify-around items-center  font-medium">
					<router-link
						v-for="{ path, icon, name } in [
							{ name: 'Home', path: '/home', icon: 'home',  },
							{ name: 'task', path: '/task', icon: 'wallet',  },
							{ name: 'chat', path: '/chat', icon: 'comment-dots', },
							{ name: 'setting', path: '/setting', icon: 'cog', },

						]" :key="path"
						:to="path"
						class="col-span-1 flex items-center justify-center !text-purple"
						:class="[$route.fullPath.includes(name.toLowerCase())? 'bg-black':'']"
					>
						<i :class="['las', `la-${icon}`]"></i>
						<IonText v-if="$route.fullPath.includes(name.toLowerCase())" class="ml-2">{{ name }}</IonText>
					</router-link>
				</div>
			</IonToolbar>
		</IonFooter>
	</ion-page>

</template>

<script lang="ts" setup>
import { IonFooter, IonToolbar } from '@ionic/vue'
</script>

					