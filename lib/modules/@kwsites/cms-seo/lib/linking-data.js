const _ = require('lodash');

module.exports = (self, options) => {

   const ld = {};
   addLinkingData(ld, require('./ld/ld-image'));
   addLinkingData(ld, require('./ld/ld-breadcrumb'));
   addLinkingData(ld, require('./ld/ld-property'));
   addLinkingData(ld, require('./ld/ld-social-media'));

   function addLinkingData (ld, builder) {
      Object.assign(ld, builder(ld, self, options));
   }

};

