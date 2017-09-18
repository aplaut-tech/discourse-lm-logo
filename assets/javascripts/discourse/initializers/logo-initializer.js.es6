import HomeLogo from 'discourse/widgets/home-logo';


export default {
  name: 'lm-logo',

  initialize(container) {

    HomeLogo.prototype.href = function () {
      return this.siteSettings.lm_logo_link;
    };

  }
};
