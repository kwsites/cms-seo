const _ = require('lodash');

module.exports = (ld, self, options) => {

   self.addHelper('ldProperty', property);

   return {
      property
   };

   function addOpeningHours (prop, day, openAt, closeAt) {
      if (!prop) {
         prop = property();
      }

      if (openAt >= 0 && closeAt >= 0) {
         (prop.openingHours = prop.openingHours || [])
            .push(`${ _.capitalize(day).substr(0, 2) } ${ _.padStart(openAt, 2, '0')}:00-${ _.padStart(closeAt, 2, '0')}:00`)
      }

      return prop;
   }

   function property () {
      const prop = {
         '@context': 'http://schema.org',
         '@type': 'Property',

         addOpeningHours: (...args) => addOpeningHours(prop, ...args),
      };

      return prop;
   }


};
