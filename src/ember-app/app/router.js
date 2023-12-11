import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba6-должности-l');
  this.route('i-i-s-proba6-должности-e',
  { path: 'i-i-s-proba6-должности-e/:id' });
  this.route('i-i-s-proba6-должности-e.new',
  { path: 'i-i-s-proba6-должности-e/new' });
  this.route('i-i-s-proba6-организация-l');
  this.route('i-i-s-proba6-организация-e',
  { path: 'i-i-s-proba6-организация-e/:id' });
  this.route('i-i-s-proba6-организация-e.new',
  { path: 'i-i-s-proba6-организация-e/new' });
  this.route('i-i-s-proba6-планир-собес-l');
  this.route('i-i-s-proba6-планир-собес-e',
  { path: 'i-i-s-proba6-планир-собес-e/:id' });
  this.route('i-i-s-proba6-планир-собес-e.new',
  { path: 'i-i-s-proba6-планир-собес-e/new' });
  this.route('i-i-s-proba6-рег-результ-l');
  this.route('i-i-s-proba6-рег-результ-e',
  { path: 'i-i-s-proba6-рег-результ-e/:id' });
  this.route('i-i-s-proba6-рег-результ-e.new',
  { path: 'i-i-s-proba6-рег-результ-e/new' });
  this.route('i-i-s-proba6-регист-анкеты-l');
  this.route('i-i-s-proba6-регист-анкеты-e',
  { path: 'i-i-s-proba6-регист-анкеты-e/:id' });
  this.route('i-i-s-proba6-регист-анкеты-e.new',
  { path: 'i-i-s-proba6-регист-анкеты-e/new' });
  this.route('i-i-s-proba6-сотрудники-l');
  this.route('i-i-s-proba6-сотрудники-e',
  { path: 'i-i-s-proba6-сотрудники-e/:id' });
  this.route('i-i-s-proba6-сотрудники-e.new',
  { path: 'i-i-s-proba6-сотрудники-e/new' });
});

export default Router;
