const _ = require('lodash');

module.exports = {

   alias: 'seo',

   /**
    * Configure the name of the site - should be a short (but human readable) name
    * eg: 'My Name'
    */
   site: '',

   /**
    * Twitter username - eg: '@my-name'
    */
   twitter: '',

   /**
    * Default og type to show for page/piece not explicitly mentioned in the `openGraphTypes` map
    */
   openGraphDefaultType: 'website',

   /**
    * Map the `type` of either pages or pieces to their appropriate og type.
    */
   openGraphTypes: {
      blog: 'blog',
      talent: 'profile',
      artist: 'profile',
   },

   /**
    * Template to use for Open Graph data
    */
   openGraph: 'open-graph.html',

   /**
    * Template to use for Canonical piece data
    */
   canonical: 'canonical.html',

   construct (self, options) {

      self.apos.templates.addFilter('og_type', (itemType) => {

         return options.openGraphTypes[itemType]
            || options.openGraphTypes[itemType.replace(/.+-([^-]+)$/, '$1')]
            || options.openGraphDefaultType;

      });

      /**
       * Gets and returns the array of templates that should be included in the `meta.html` include
       * - this method is run only once but super this method to determine the list of included
       * templates on a per-request basis
       */
      self.metaTemplates = _.once(() => {
         return [options.canonical, options.openGraph].filter(Boolean);
      });

      self.addHelpers({

         metaTemplates () {
            return self.metaTemplates();
         }

      });

   },

};
