import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba6-регист-анкеты', 'Unit | Model | i-i-s-proba6-регист-анкеты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba6-должности',
    'model:i-i-s-proba6-организация',
    'model:i-i-s-proba6-планир-собес',
    'model:i-i-s-proba6-рег-результ',
    'model:i-i-s-proba6-регист-анкеты',
    'model:i-i-s-proba6-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
