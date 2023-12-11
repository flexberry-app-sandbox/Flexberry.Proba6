import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba6ДолжностиLForm from './forms/i-i-s-proba6-должности-l';
import IISProba6ОрганизацияLForm from './forms/i-i-s-proba6-организация-l';
import IISProba6ПланирСобесLForm from './forms/i-i-s-proba6-планир-собес-l';
import IISProba6РегРезультLForm from './forms/i-i-s-proba6-рег-результ-l';
import IISProba6РегистАнкетыLForm from './forms/i-i-s-proba6-регист-анкеты-l';
import IISProba6СотрудникиLForm from './forms/i-i-s-proba6-сотрудники-l';
import IISProba6ДолжностиEForm from './forms/i-i-s-proba6-должности-e';
import IISProba6ОрганизацияEForm from './forms/i-i-s-proba6-организация-e';
import IISProba6ПланирСобесEForm from './forms/i-i-s-proba6-планир-собес-e';
import IISProba6РегРезультEForm from './forms/i-i-s-proba6-рег-результ-e';
import IISProba6РегистАнкетыEForm from './forms/i-i-s-proba6-регист-анкеты-e';
import IISProba6СотрудникиEForm from './forms/i-i-s-proba6-сотрудники-e';
import IISProba6ДолжностиModel from './models/i-i-s-proba6-должности';
import IISProba6ОрганизацияModel from './models/i-i-s-proba6-организация';
import IISProba6ПланирСобесModel from './models/i-i-s-proba6-планир-собес';
import IISProba6РегРезультModel from './models/i-i-s-proba6-рег-результ';
import IISProba6РегистАнкетыModel from './models/i-i-s-proba6-регист-анкеты';
import IISProba6СотрудникиModel from './models/i-i-s-proba6-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba6-должности': IISProba6ДолжностиModel,
    'i-i-s-proba6-организация': IISProba6ОрганизацияModel,
    'i-i-s-proba6-планир-собес': IISProba6ПланирСобесModel,
    'i-i-s-proba6-рег-результ': IISProba6РегРезультModel,
    'i-i-s-proba6-регист-анкеты': IISProba6РегистАнкетыModel,
    'i-i-s-proba6-сотрудники': IISProba6СотрудникиModel
  },

  'application-name': 'Proba6',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba6',
          title: 'Proba6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba6: {
          caption: 'Proba6',
          title: 'Proba6',
          'i-i-s-proba6-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-proba6-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba6-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba6-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba6-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba6-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba6-должности-l': IISProba6ДолжностиLForm,
    'i-i-s-proba6-организация-l': IISProba6ОрганизацияLForm,
    'i-i-s-proba6-планир-собес-l': IISProba6ПланирСобесLForm,
    'i-i-s-proba6-рег-результ-l': IISProba6РегРезультLForm,
    'i-i-s-proba6-регист-анкеты-l': IISProba6РегистАнкетыLForm,
    'i-i-s-proba6-сотрудники-l': IISProba6СотрудникиLForm,
    'i-i-s-proba6-должности-e': IISProba6ДолжностиEForm,
    'i-i-s-proba6-организация-e': IISProba6ОрганизацияEForm,
    'i-i-s-proba6-планир-собес-e': IISProba6ПланирСобесEForm,
    'i-i-s-proba6-рег-результ-e': IISProba6РегРезультEForm,
    'i-i-s-proba6-регист-анкеты-e': IISProba6РегистАнкетыEForm,
    'i-i-s-proba6-сотрудники-e': IISProba6СотрудникиEForm
  },

});

export default translations;
