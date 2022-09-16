<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Tab 1</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Tab 1</ion-title>
				</ion-toolbar>
			</ion-header>

			<template v-for="(call, index) in useApp().calls" :key="index">
				<div>
					{{ call }}
				</div>
			</template>

			<ion-button router-link="/test">Click Me</ion-button>
		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
} from "@ionic/vue";
import { watch } from "@vue/runtime-core";
import useSWRV from "swrv";
import { useApp } from "@/store/app";

const { data, error } = useSWRV(
	"https://jsonplaceholder.typicode.com/todos/1",
	(url) => fetch(url).then((r) => r.json()),
	{
		refreshInterval: 3000,
	}
);

watch(data, (val) => {
	useApp().pushToCalls("tabs 1 page call");
});
</script>
