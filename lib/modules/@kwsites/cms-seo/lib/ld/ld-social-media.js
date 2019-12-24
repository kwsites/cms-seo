
module.exports = (ld, self, options) => {

   self.addHelper('ldSocialMedia', socialMedia);

   return {socialMedia};

   function socialMedia (url) {
      const data = {
         '@context': 'http://schema.org',
         '@type': 'Organization',
         'url': url,
         'sameAs': [],

         $sameAs (url) {
            data.sameAs.push(url);
            return data;
         },

         $json () {
            return self.safe(JSON.stringify(data));
         }
      };

      return data;
   }

};
