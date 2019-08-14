
module.exports = {

   improve: 'apostrophe-doc-type-manager',

   /**
    * Setting the `seoEnabled` option to `false` will prevent the `.seo` fields from being added
    * to the module.
    */
   seoEnabled: true,

   seoFields: [
      {
         name: 'description',
         label: 'Description',
         type: 'singleton',
         widgetType: 'apostrophe-rich-text',
         options: {},
      },
      {
         name: 'image',
         label: 'Image',
         type: 'singleton',
         widgetType: 'apostrophe-images',
         options: {
            limit: 1,
            minSize: [200, 200],
            aspectRatio: [1, 1],
         }
      }
   ],

   beforeConstruct (self, options) {

      /**
       * In addition to the `options.seoEnabled` property, SEO fields don't make sense for many
       * types of module, so this method sanity checks the current module's chain for the presence
       * of either `apostrophe-pieces` or `apostrophe-custom-pages`.
       *
       * If your module directly extends `apostrophe-doc-type-manager` and you want to use the
       * SEO fields for your document type too, override this method to return true.
       *
       * @returns {boolean}
       */
      self.seoEnabled = () =>
         !!self.__meta.chain.find(mod => /apostrophe-pieces|apostrophe-custom-pages/.test(mod.name));
   },

   construct (self, options) {

      if (self.seoEnabled() && options.seoEnabled !== false) {
         addSeoFields(options);
      }

   }

};

function addSeoFields (options) {

   options.addFields = [
      ...(options.addFields || []),
      {
         name: 'seo',
         type: 'object',
         schema: [...options.seoFields],
      },
   ];

   options.arrangeFields = [
      ...(options.arrangeFields || []),
      {
         name: 'seo',
         label: 'SEO',
         fields: ['seo'],
         last: true,
      },
   ]

}
