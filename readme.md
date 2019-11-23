
# @kwsites/cms-seo

Search engine optimising helpers for [apostrophe](https://apostrophecms.org/) backed applications.

## What you get

This module includes an 'improve' to the 
[apostrophe-doc-type-manager](https://docs.apostrophecms.org/apostrophe/modules/apostrophe-doc-type-manager) to add
a new `seo` field to all modules that extend either 
[apostrophe-pieces](https://docs.apostrophecms.org/apostrophe/modules/apostrophe-pieces)
or [apostrophe-custom-pages](https://docs.apostrophecms.org/apostrophe/modules/apostrophe-custom-pages)
unless that module is configured with `seoEnabled: false` in its options.

The `seo` schema is `{ description: 'string', 'image': 'apostrophe-images' }` by default, this can be
modified by overriding the `seoFields` option.

Your templates can then make use of `data.page.seo` or `data.piece.seo` to access your seo data. 

## How to include it

Add the usual import to your `app.js`:

```
apostrophe({
   modules: {

      '@kwsites/cms-seo': {
         site: 'My Website Name',
         twitter: '@my-user-name',
      },

   }
});
```

Your `apostrophe-pieces` and `apostrophe-custom-pages` editors will now show an `SEO` section. To include
the SEO friendly meta data, edit your `outerLayout.html` to include the provided template:

```
 {%- include "@kwsites/cms-seo:meta.html" -%}
``` 

## How to customise it


```
apostrophe({
   modules: {

      '@kwsites/cms-seo': {

         // set the name used in the title      
         site: 'My Website Name',
         
         // set your username, or empty string / false if not using twitter
         twitter: '@my-user-name',

         // disable a meta section by setting it to false
         'canonical': false,

         // or use a custom template for a meta section by setting it an file name
         'openGraph': 'my-custom-template.html',
      },
   }
});
```


