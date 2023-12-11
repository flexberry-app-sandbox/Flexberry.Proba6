import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba6',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba6',
          title: 'Proba6'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
