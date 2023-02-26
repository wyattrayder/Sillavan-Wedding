import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {customProperties: true},
        themes: {
            light: {
                emerald: '#27754E', // Emerald Green
                accent: '#F5EED2', // Nude
            }
        }
    }
});
