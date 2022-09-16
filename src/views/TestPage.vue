<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Test</ion-title>
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

			<ion-button @click="$router.go(-1)">Click Me</ion-button>
		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButton,
	IonContent,
} from "@ionic/vue";
import useSWRV from "swrv";
import { useApp } from "@/store/app";
import { watch } from "vue-demi";

const { data, error } = useSWRV(
	"https://jsonplaceholder.typicode.com/todos/1?test=1",
	(url) => fetch(url).then((r) => r.json()),
	{
		refreshInterval: 5000,
	}
);

watch(data, (val) => {
	useApp().pushToCalls("test page call");
});
</script>
