

module.exports = (og, self, options) => {

   self.addHelper('ldImage', image);

   return {image};

   function image (img) {
      const url = img && self.apos.attachments.url(img);
      if (!url) {
         return null;
      }

      return {
         '@type': 'ImageObject',
         url: url,
         height: img.height,
         width: img.width,
      };
   }

};
