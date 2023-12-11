import {
  defineNamespace,
  defineProjections,
  Model as РегРезультMixin
} from '../mixins/regenerated/models/i-i-s-proba6-рег-результ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегРезультMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
