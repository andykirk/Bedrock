Bedrock
=======

An opinionated collection of settings/config/initialisation files for starting new projects via Grunt, Bower and Composer.

It's made for personal use, but if anyone feels inspired to majke use of it, that's great.

Since starting this, I've become aware of [Init](https://github.com/use-init/init). 
That project looks amazing, but perhaps a little too involved for me at this point, plus, I always have my own ways of doing things.
However, there are some basic similarities in that the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) is used a starting point, adn [Grunt](http://gruntjs.com/) is used to customise everything.


Requirements
------------

Node
Grunt
Bower


Installation
------------

This is for windows - since that's what I use - and this guide is intended as reminder for me, rather than a 'manual' per-se.


### Step 1:

Open a command prompt and `cd` to the directory where you'd like to make a project.

Run `git clone https://github.com/andykirk/Bedrock <project-folder>`.
Then run `cd <project-folder>`.

Now, if you're not planning on using version control for your project, skip to Step 3, but assuming you do, you'll need to change the remote origin for the project so you're not trying to push to the Bedrock repo:


### Step 2:

1. Firstly, create a new repo on GitHub, make sure it's *not* initialised with a README.
2. Make sure you're still in your project folder from the end of Step 1 and run `git remote rm origin` to remove the connection to the main Bedrock repo.
3. Then run `git remote add origin https://github.com/<user>/<project>.git`.
4. Push the Bedrock files to new project repo to start it off: `git push -u origin master`

This should associate your new project with your new repo, complete with the Bedrock files.


### Step 3:

You need to tell Node to load all the packages specified by `packages.json`. If you're confident to make changes to the packages you want, go ahead and edit this file, then run `nmp install`.


### Step 4:

The purpose of Bedrock is to allow you to configure a new project by changing only a few settings, so you need to make those changes now.

First,open `directory-structure.json`. Here you will find a list of directories that Grunt will create. Adapt this to your preferred directly structure. 

Next, open `bower.json` and `examples.bower.js`. Copy the config lines for the packages you want from `examples.bower.js` to `bower`.
Of course, you can add whatever you like, the settings in `bower.js` are what I use most often, with common changes outlined in `examples.bower.js`. It is by now means a definitive list.

Bedrocks' `bower.js` file differs from a normal bower file in that it also includes a list of copy instructions. The Grunt task separates out these instructions and passes them to [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) (see their website for details on how to write the copy config.)
The idea is that you can tell Grunt to copy files provided by bower into the places you prefer for your setup using the structure you specified above.

Next, open the `_template.html` file. This file is based off of HTML5 Boilerplates index.html. Eidt this file if you need to.

*Note:* Currently this file _could_ just be an `index.html` file, but I have plans to add further settings to build the `index.html` file in a modular fashion to include markup for common tools and utilities (see below for the ideas).

Finally, you can edit the `Grunt.js` file itself if you want to change what tasks are run and in what order.


### Step 5

Once you're happy with how you've set up your project, make sure you're still in your project folder from the end of Step 1 and run `grunt build`.
This should create your folders, install your packages and copy all your files.

The other grunt tasks that are defined in the `Grunt.js` file are thins like compiling stylesheets from sass, contactinating javascript files and optimising images.
These will need to be configured to your needs and to match your directory structure to make sure the files are generated in the correct places.


Images workflow:
----------------

A. Create/edit vector in Illustrator. Save as .eps in `/_images/*?` for future use.

B. Save as .svg in `/_images/*?`.

C. When `grunt image` is ran (or the folder is being watched), svgmin will put the minified version into `/public/img/*?` for production use.

D. Then svg2png will create a .png in `/_images/*?`

E. Then imagemin will create an optimised version in `/public/img/*?`  for production use.


CSS workflow:
-------------

A. Compose / edit style.scss file in the usual way in `/_styles`.

B. When grunt css is ran (or the folder is being watched), sass will generate `/_styles/style.css`.

C. Then autoprefixer will do it's thing and create `/_styles/style.prefixed.css`.

D. Then cssmin will create minify the file and put into `/public/css/style.min.css` for production use.


Note, Ideas and To Do List
--------------------------

### Ideas for index.html flags/patterns:
(Some of these will just in/exclude H5BP stuff, others will use markup form elsewhere or my own research)

* IE8
* Universal IE
* Modernizr (possibility to specify/configure custom build)
* Jquery
* Bootstrap
* Foundation
* Force https?
* Force/remove www?
* Force/remove trailing slash?
* Google analytics
* Piwik
* Piwik cookie law
* Cookie control


