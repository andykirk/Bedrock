Bedrock
=======

An opinionated collection of settings/config/initialisation files for starting new projects via Grunt, Bower and Composer.

It's made for personal use, but if anyone feels inspired to make use of it, that's great.
Some of this might seem pretty old-school now, but I'm comfortable with that and it works for me.

Requirements
------------

Node
Grunt
Bower


Installation
------------

Clone or copy this repo to you new project folder.

On Windows 7+, you can run _new_prject.bat and fill in the project settings to fill in some of the most important placeholders.

Cmd: npm install

Cmd: bower install

Note: many metadata declarations are not included in the various package files.
It's my conclusion that since these package files represent dependencies for an actual project, not
a package/library/module/tool that's intended to be consumed by others, these metadata aren't needed
and could be confusing.
Will review this if more information comes to light as I can't seem to find much info about this.
Everything I've read so far is about creating a package file for a consumable package, not as a 
dependency manifest.


Images workflow:
----------------

A. Place image files (.svg, png, jpg etc) into `/_images/`. Using sub-folders is fine.
B. Run `grunt image` and svgmin will put the minified version of any /svg files into `/img/` (with subfolders) for production use.
C. svg2png will also create a .png's of all the .svg's in `/_images/`.
D. Then imagemin will create an optimised version of all .png's .jpg's etc. in `/img/` for production use.


CSS workflow:
-------------

A. Compose / edit style.scss file in the usual way in `/_styles`.
B. Run `grunt css` and sass will generate `/_styles/style.css` then cssmin will create minify the file and put into `/css/style.min.css` for production use.



JS workflow:
------------

A. Add the paths to the JS files you want to include to Grunfile.js: concat:js:src[]
B. Run `grunt js` and concat:js will concatenate all the js files specified in `_scripts/script.js`, and then uglify will minify the file to `/js/style.min.css` for production use.


FTP-Deploy:
-----------

If you want Grunt to automatically upload your files to a server, uncomment the 'ftp-deploy' section in Gruntfile.js and fill in the blanks.
You'll also need to create a file in the root folder called `.ftppass` with the following content:

~~~
{
  "key1": {
    "username": "{{USER}}",
    "password": "{{PASS}}"
  }
}
~~~


Watch:
------

Currently `watch` is only set to run the CSS workflow as that is what takes the most development time for me - I tend to use images and JS rather sparingly (or at least, they don't get updated often).
You can, of course add the other worklows to this task to have it watch everything.
