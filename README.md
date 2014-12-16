RequireJS + CanJS Sample Project
================================

Goals
-----

* Integrate RequireJS and CanJS 2.1 together:

    * EJS, Mustache and Stache templates
    * CanJS development build - integrate only the parts needed
    
* Production build that supports:

    * multiple main modules 
    * shared modules placed in a common bundle 
    * progressive loading
    * simple cross-domain support (for serving from a CDN - i.e. don't need CORS)
    * source maps
    
* Development friendly:

    * not requiring a build after every change

* Browser support:

    * IE9+ & modern browsers
    * debugging support (not obfuscated by XHR loading as per SystemJS)


Install
-------

```
npm install
```


Build
-----

```
grunt build
```

Required for the "production mode" pages to work.


Run
---

```
python -m SimpleHTTPServer 8001
```

View http://localhost:8001/ in a browser.


FAQ
---

**Why copy from Bower packages, instead of using a bower_components folder?**

 * Because Bower packages tend to include multiple copies of the same package -
   the source, concat-ed and minified version. We don't want to have to ignore 
   all the extra stuff in the IDE and build/deploy processes.
   
 * Because we want the project to run out-of-the-box, instead of necessitating
   a `bower install` after each update to master.
   
 * However, if you don't care about the above, Bower packages do work. Just
   create a `.bowerrc` to set the `bower_components` path, and configure the
   aliases to your bower components correctly in `require-config.js`.


**My helpers/components don't work in the production build?**
 
 * Helpers and components that use `can.Component` need to be loaded **before 
   rendering** the template that uses them. Typically it works to set them as 
   sibling dependencies to the template.
 
 * Components that use `can.view.attr` are trickier, they must be loaded 
   **before loading** the template that uses them. It might be necessary to
   put them in `canjs-plugins/mustache` which is loaded before all templates.


**How to ensure a plugin is always included with a library module?**
**Why are there extra things loading with `can/view/mustache`?**

 * Using `map:` in `require-config.js` allows us to transparently shim a plugin 
   module right after a library module. 
    
 * For example, we can load helpers or components before templates are loaded. 
   With this configuration, we make sure that `canjs-plugins/mustache` is loaded
   also whenever we try to load `can/view/mustache`.
   
   ```javascript
   requirejs.config({
       map: {
           '*': {
               'can/view/mustache': 'canjs-plugins/mustache'
           },
           'canjs-plugins': {
               'can/view/mustache': 'can/view/mustache'
           }
       }
   });
   ```
