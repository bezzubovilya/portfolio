//var state1 = {
//    sprite: null,
//    ace: null,
//    ball: null,
//    plat1: null,
//    plat2: null,
//    star: null,
//    catchFlag: false,
//    arrow: null,
//    launchVelocity: 0,
//    groupS: null,
//    time: 120,
//    text: null,
//    locatedX: [0, 100, 300, 500, 600],
//    locatedY: [150, 250, 350, 250, ],
//    preload: function () {
//        game.load.image('analog', 'star2.png');
//        game.load.image('arrow', 'platform1.png');
//        game.load.image('ball', 'ball.png');
//        game.load.image('plat', 'platform1.png');
//        game.load.image('plat2', 'platform2.png');
//        game.load.image('star', 'star2.png');
//
//    },
//    create: function () {
//        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//        game.physics.startSystem(Phaser.Physics.ARCADE);
//
//        //game.physics.arcade.gravity.y = 200;
//        game.stage.backgroundColor = '#0072bc';
//
//        var graphics = game.add.graphics(0, 0);
//        graphics.beginFill(0x049e0c);
//        graphics.drawRect(395, 350, 0, 0);
//        this.groupS = game.add.group();
//        this.groupS.enableBody = true;
//        this.groupS.physicsBodyType = Phaser.Physics.ARCADE;
//
//        //this.analog = game.add.sprite(400, 350, 'analog');
//
//
//        for (var i = 0; i < 120; i++) {
//            var gS = this.groupS.create(game.world.randomX, game.world.randomY, 'star');
//            gS.anchor.setTo(0.5, 0.0);
//        }
//
//
//        game.physics.enable(this.analog, Phaser.Physics.ARCADE);
//        this.analog.body.allowGravity = false;
//        this.analog.width = 8;
//        this.analog.rotation = 220;
//        this.analog.alpha = 0;
//        this.analog.anchor.setTo(0.5, 0.0);
//
//        this.arrow = game.add.sprite(400, 350, 'arrow');
//
//        game.physics.enable(this.arrow, Phaser.Physics.ARCADE);
//
//        this.arrow.anchor.setTo(0.1, 0.5);
//        this.arrow.scale.setTo(0, 0);
//        this.arrow.body.moves = false;
//        this.arrow.body.allowGravity = false;
//        this.arrow.alpha = 0;
//        this.text = game.add.text(0, 0, 'Time: 120', {
//            font: "64px Arial",
//            fill: "#ffffff",
//            align: "center"
//        });
//        text.anchor.setTo(0.5, 0.5);
//        this.ball = game.add.sprite(100, 400, 'ball');
//        game.physics.enable(this.ball, Phaser.Physics.ARCADE);
//        this.ball.anchor.setTo(0.5, 0.5);
//        this.ball.scale.setTo(0.2, 0.2);
//        this.ball.body.collideWorldBounds = true;
//        this.ball.body.bounce.setTo(0.9, 0.9);
//        this.ball.inputEnabled = true;
//        this.ball.input.start(0, true);
//        this.ball.events.onInputDown.add(this.set);
//        this.ball.events.onInputUp.add(this.launch);
//        game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
//        // game.physics.arcade.overlap(this.ball, this.groupS, this.killS, null, this);
//
//    },
//    set: function (ball, pointer) {
//
//        state1.ball.body.moves = false;
//        state1.ball.body.velocity.setTo(0, 0);
//        state1.ball.body.allowGravity = false;
//        state1.catchFlag = true;
//
//    },
//
//    launch: function () {
//
//        state1.catchFlag = false;
//        state1.ball.body.enable = false;
//        state1.groupS.enableBody = false;
//        state1.ball.body.moves = true;
//        state1.arrow.alpha = 0;
//        state1.analog.alpha = 0;
//        state1.Xvector = (state1.arrow.x - state1.ball.x) * 3;
//        state1.Yvector = (state1.arrow.y - state1.ball.y) * 3;
//        state1.ball.body.allowGravity = true;
//        state1.ball.body.velocity.setTo(state1.Xvector, state1.Yvector);
//
//
//    },
//    update: function () {
//        state1.arrow.rotation = game.physics.arcade.angleBetween(state1.arrow, state1.ball);
//        game.physics.arcade.collide(this.ball, this.groupS, this.killS);
//        if (state1.catchFlag === true) {
//
//            state1.ball.x = game.input.activePointer.worldX;
//            state1.ball.y = game.input.activePointer.worldY;
//
//            state1.arrow.alpha = 1;
//            state1.analog.alpha = 0.5;
//            state1.analog.rotation = state1.arrow.rotation - 3.14 / 2;
//            state1.analog.height = game.physics.arcade.distanceToPointer(state1.arrow);
//            state1.launchVelocity = state1.analog.height;
//        }
//    },
//    updateCounter: function () {
//
//        state1.counter--;
//
//        state1.text.setText('Time: ' + state1.counter);
//
//    },
//
//    killS: function (a, b) {
//        b.kill();
//
//
//    }
//
//};
