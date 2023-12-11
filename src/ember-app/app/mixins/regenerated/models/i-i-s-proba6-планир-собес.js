import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-proba6-должности', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-proba6-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba6-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba6-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba6-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-proba6-планир-собес.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba6-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba6-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba6-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    регистАнкеты: belongsTo('i-i-s-proba6-регист-анкеты', 'Регист анкеты', {
      датаРегистр: attr('Дата регистр', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'датаРегистр' }),
    должности: belongsTo('i-i-s-proba6-должности', 'Должности', {
      должности: attr('Должности', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'должности' }),
    организация: belongsTo('i-i-s-proba6-организация', 'Организация', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba6-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    регистАнкеты: belongsTo('i-i-s-proba6-регист-анкеты', 'Дата регистр', {
      датаРегистр: attr('Дата регистр', { index: 2 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-proba6-должности', 'Должности', {
      должности: attr('Должности', { index: 3 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-proba6-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
