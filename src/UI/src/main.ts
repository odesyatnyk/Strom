import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Vuetify from 'vuetify/lib';

Vue.config.productionTip = false;

const vuetifyOptions = { };

Vue.use(Vuetify, {
	icons: {
		iconfont: 'fa'
	}
});

const vue = new Vue({
	el: '#app',
	router,
	store,
	render: (h: any) => h(require('./App.vue').default),
	vuetify: new Vuetify(vuetifyOptions)
});
