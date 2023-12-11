import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba6.caption'),
          title: i18n.t('forms.application.sitemap.proba6.title'),
          children: [{
            link: 'i-i-s-proba6-должности-l',
            caption: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-должности-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proba6-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-планир-собес-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proba6-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-сотрудники-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proba6-организация-l',
            caption: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-организация-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proba6-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-регист-анкеты-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proba6-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba6.i-i-s-proba6-рег-результ-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})