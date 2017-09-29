import { withPluginApi } from 'discourse/lib/plugin-api';


export default {
  name: 'lm-logo',

  initialize (container) {
    withPluginApi('0.8.9', api => {

      api.reopenWidget('home-logo', {
        href () {
          return this.siteSettings.lm_logo_link;
        }
      });

    });
  }
}
