;(function() {
    var Game = function(canvasId) {
        var canvas = document.getElementById(canvasId);
        var screen = canvas.getContext('2d');
        var gameSize = { x: canvas.width, y: canvas.height};

        this.bodies = [new Fire ({ x: gameSize.x / 2, y:gameSize.y})];
        
        var self = this;
        var tick = function() {
            self.update();

            canvas.addEventListener('mousemove', (e) => {
                var MousePos = { x: e.clientX, y: e.clientY}
                canvas.addEventListener('mousedown', event => {
                    var fire = new Fire (MousePos);
                    self.addBody(fire);
                })
            });

            self.draw(screen, gameSize);
            requestAnimationFrame(tick);
        };

        tick();
    };


    Game.prototype = {
        update: function() {
            for (var i =0; i < this.bodies.length; i++) {
                this.bodies[i].update();
            }

            var BurntOut = function(body) { return(!body.burntOut) }
            this.bodies = this.bodies.filter(BurntOut);
        },

        draw: function(screen, gameSize) {
            screen.clearRect(0, 0, gameSize.x, gameSize.y)
            for (var i =0; i < this.bodies.length; i++) {
                drawRect(screen, this.bodies[i]);
            }
        },

        addBody: function(body)  {
            this.bodies.push(body);
        },
    };


    var Fire = function(position) {
        this.position = position;
        this.velocity = { x: 0, y:-1 }
        var radius = Math.random() * 2 + 2
        this.size = { x: radius, y: radius }
        this.colour = "yellow"
        this.burntOut = false
    };

    Fire.prototype = {
        update: function(){
            this.velocity.x += Math.random() * 0.4 - 0.2
            this.velocity.y -= Math.random()  * 0.1 - 0.05
        
            if (this.velocity.x > 3) {this.velocity.x = 3}
            if (this.velocity.x < -3) {this.velocity.x = -3}
            if (this.velocity.y > -0.5) {this.velocity.y = -0.5}

            this.position.x += this.velocity.x
            this.position.y += this.velocity.y

            if (Math.random() < 0.05)  {
                if (this.colour === "yellow") {this.colour = "orange"}
                else if (this.colour === "orange") {this.colour = "red"}
                else if (this.colour === "red") {this.burntOut = true}
            }
        }
    }



    var drawRect = function(screen, body) {
        screen.fillStyle = body.colour;
        screen.fillRect(body.position.x - body.size.x / 2,
                        body.position.y - body.size.y / 2,
                        body.size.x, body.size.y);
    };

    window.addEventListener('load', function() { 
        new Game("screen");
    }, false);
})();