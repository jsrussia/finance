var i18n = require('i18n');

i18n.configure({
  locales:['en', 'ru'],
  directory: __dirname + '/locales',
  defaultLocale: 'ru',
  cookie: 'lang'
});

module.exports = function(req, res, next) {
  i18n.init(req, res);
  return next();
};