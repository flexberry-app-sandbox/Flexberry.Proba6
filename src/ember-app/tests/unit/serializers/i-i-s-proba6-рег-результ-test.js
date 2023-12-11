import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba6-рег-результ', 'Unit | Serializer | i-i-s-proba6-рег-результ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba6-рег-результ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba6-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
