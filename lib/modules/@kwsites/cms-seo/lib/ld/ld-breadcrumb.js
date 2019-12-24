
module.exports = (ld, self, options) => {

   self.addHelper('ldBreadcrumbList', breadcrumbList);

   return {
      breadcrumbItem,
      breadcrumbList,
   };

   function breadcrumbItem (position, url, name, image) {
      return {
         '@type': 'ListItem',
         'position': position,
         'item': {
            '@id': url,
            'name': name,
            'image': ld.image(image)
         }
      };
   }

   function breadcrumbList () {
      const data = {
         '@context': 'http://schema.org',
         '@type': 'BreadcrumbList',
         'itemListElement': [],

         $item: (url, name, image) => {
            data.itemListElement.push(breadcrumbItem(data.itemListElement.length + 1, url, name, image));
            return data;
         },

         $json: () => self.safe(JSON.stringify(data))
      };

      return data;
   }

};


