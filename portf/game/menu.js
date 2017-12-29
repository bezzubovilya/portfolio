var menu = {
    btn: null,
    preload: function () {
        game.load.image('sg', 'sg.png');
    },
    create: function () {
        game.stage.backgroundColor = '#182d3b';
        this.btn = game.add.button(game.world.centerX - 400, 20, 'sg', this.actionOnClick, this, 2, 1, 0);
        this.btn.onInputUp.add(this.up, this);


    },
    up: function () {
        game.state.add("lev1", state1);

        game.state.start("lev1");
    },
    update: function () {

    }
}
