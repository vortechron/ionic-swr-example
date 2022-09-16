import { defineStore } from "pinia";

interface RootState {
	calls: any[];
}

export const useApp = defineStore("app", {
	state: (): RootState => ({
		calls: [],
	}),
	actions: {
		pushToCalls(call: any) {
			this.calls.push(call);
		},
	},
});
