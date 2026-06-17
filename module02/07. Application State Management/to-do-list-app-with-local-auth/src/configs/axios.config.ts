import { Axios } from "axios";

export const backendlessApi = new Axios({
	baseURL: "https://api.backendless.com/v1",
	headers: {
		appId: "YOUR_APP_ID",
		apiKey: "YOUR_API_KEY",
	},
});