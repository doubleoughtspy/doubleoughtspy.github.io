var background = function (window) {
   'use strict';
   
   window.opspark = window.opspark || {};
   var draw = window.opspark.draw;
   var createjs = window.createjs;
   
   
   /*
    * Create a background view for our game application
    */
   window.opspark.makeBackground = function(app,ground) {
       if(!app) {
           throw new Error("Invaid app argument");
       }
       if(!ground || typeof(ground.y) == 'undefined') {
           throw new Error("Invalid ground argument");
       }

       // container which will be returned
       var background;
       var tree;
       var circle;
       var moon;
       var buildings = [];
       var building;
       var buildingss = [];
       var buildingsss = [];
       var building1;
       var building2;
       var trees = [];
       // Add any variables that will be used by render AND update here:
       
       // add objects for display inb ackground
       // called at the start of game and whenever the page is resized
       function render() {
           // useful variables
           var canvasWidth = app.canvas.width;
           var canvasHeight = app.canvas.height;
           var groundY = ground.y;

           background.removeAllChildren();

           // this fills the background with a obnoxious yellow
           // you should modify this to suit your game
           var backgroundFill = draw.rect(canvasWidth,groundY,'black');
           background.addChild(backgroundFill);
           
           // TODO: 3 - Add a moon and starfield
           
           
           for(var i=0;i<100;i++) {
               circle = draw.circle(2,'white','LightGray',2);
               circle.x = canvasWidth*Math.random();
               circle.y = groundY*Math.random();
               background.addChild(circle);
           }
           moon = draw.bitmap('img/moon.png');
           moon.x=-150;
           moon.y=-200;
           moon.scaleX=1.0;
           moon.scaleY=1.0;
           background.addChild(moon);
           
           // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
           var buildingHeight = 400;
           for(var i=0;i<6;++i) {
               building = draw.rect(100,buildingHeight,'LightGray','Black',1);
               building.x = 350*i;
               building.y = groundY-buildingHeight;
               background.addChild(building);
               buildings.push(building);
           }
           var building1Height = 300;
           for (i=0;i<6;i++) {
               building1 = draw.rect(120,building1Height,'LightGray','Black',2);
               building1.x = 360*i;
               building1.y = groundY-building1Height;
               background.addChild(building1);
               buildingss.push(building1);
           }
           var building2Height = 150;
           for (i=0;i<6;i++) {
               building2 = draw.rect(120,building2Height,'LightGray','Black',2);
               building2.x = 380*i;
               building2.y = groundY-building2Height;
               background.addChild(building2);
               buildingsss.push(building2);
           }
           // TODO 4: Part 1 - Add a tree
           for(var i=0;i<4;i++){
           tree = draw.bitmap('img/tree.png');
           tree.x = 550*i;
           tree.y = groundY-100;
           tree.scaleX = .5;
           tree.scaleY = .5;
           background.addChild(tree);
           trees.push(tree);
           }
       }
       
       // Perform background animation
       // called on each timer "tick" - 60 times per second
       function update(x,y) {
           // useful variables
           var canvasWidth = app.canvas.width;
           var canvasHeight = app.canvas.height;
           var groundY = ground.y;
           
           // TODO 4: Part 2 - Move the tree!
           
           // TODO 5: Part 2 - Parallax
           for (var i=0; i< buildings.length; i++){
              buildings[i].x = buildings[i].x - 2;
              if(buildings[i].x < -200) {
              buildings[i].x = canvasWidth;
              }
          }
          for(var i = 0; i < buildingss.length; i++) {
           buildingss[i].x = buildingss[i].x - 3;
           if(buildingss[i].x < -200) {
               buildingss[i].x = canvasWidth;
           }
       }
       for(var i = 0; i < buildingsss.length; i++) {
           buildingsss[i].x = buildingsss[i].x - 5;
           if(buildingsss[i].x < -200) {
               buildingsss[i].x = canvasWidth;
           }
       }
       
              for(var i = 0; i < trees.length; i++) {
           trees[i].x = trees[i].x - 2;
           if(trees[i].x < -200) 
               trees[i].x = canvasWidth;
              }
           
       }

       background = new createjs.Container();
       background.resize = render;
       background.update = update;
       
       app.addResizeable(background);
       app.addUpdateable(background);
       
       render();
       return background;
   };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
   // here, export any references you need for tests //
   module.exports = background;
}
