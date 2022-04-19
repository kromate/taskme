<template>
	<ion-page  >
		<ion-content >
			<slot/>
		</ion-content>

		<IonFooter class="ion-no-border border-top-line">
			<IonToolbar class="lg:hidden pt-0.5">
				<div class="flex justify-around items-center text-sub text-main_dark">
					<router-link
						v-for="{ path, icon, name } in [
							{ name: 'Home', path: '/#', icon: 'home',  },
							{ name: 'tasks', path: '/#', icon: 'wallet',  },
							{ name: 'chat', path: '/#', icon: 'comment-dots', },
							{ name: 'setting', path: '/#', icon: 'cog', },

						]" :key="path"
						:to="path"
						class="col-span-1 flex items-center justify-center">
						<i :class="[`las` `la-${icon}`]"></i>
						<IonText>{{ name }}</IonText>
					</router-link>
				</div>
			</IonToolbar>
		</IonFooter>
	</ion-page>

</template>

<script lang="ts" setup>
import { IonFooter, IonToolbar } from '@ionic/vue'
</script>

					