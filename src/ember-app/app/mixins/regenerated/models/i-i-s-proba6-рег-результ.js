import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  итогСобес: DS.attr('i-i-s-proba6-итог-собес'),
  крКомИлиОбсРеш: DS.attr('string'),
  оценкаКандид: DS.attr('number'),
  организация: DS.belongsTo('i-i-s-proba6-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba6-планир-собес', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proba6-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  итогСобес: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.итогСобес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  крКомИлиОбсРеш: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.крКомИлиОбсРеш.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оценкаКандид: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.оценкаКандид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proba6-рег-результ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba6-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    итогСобес: attr('Итог собес', { index: 1 }),
    оценкаКандид: attr('Оценка кандид', { index: 2 }),
    крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 3 }),
    организация: belongsTo('i-i-s-proba6-организация', 'Организация', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    планирСобес: belongsTo('i-i-s-proba6-планир-собес', 'Планир собес', {
      иметьПриСебе: attr('Иметь при себе', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'иметьПриСебе' }),
    сотрудники: belongsTo('i-i-s-proba6-сотрудники', 'Сотрудники', {
      фИОСотруд: attr('Ф и о сотруд', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИОСотруд' })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba6-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    итогСобес: attr('Итог собес', { index: 1 }),
    оценкаКандид: attr('Оценка кандид', { index: 2 }),
    крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 3 }),
    организация: belongsTo('i-i-s-proba6-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    планирСобес: belongsTo('i-i-s-proba6-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-proba6-сотрудники', 'Ф и о сотруд', {
      фИОСотруд: attr('Ф и о сотруд', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
