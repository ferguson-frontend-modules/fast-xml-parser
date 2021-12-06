'use strict';

const validator = require('./validator');
const XMLParser = require('./xmlparser/XMLParser');

module.exports = {
  XMLParser: XMLParser,
  XMLValidator: validator,
}
