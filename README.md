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

You need to tell Node to load all the packages specified by `packages.json`. If you're confident to make changes to the packages you want, go ahead and edit this file, then run `nmp install`