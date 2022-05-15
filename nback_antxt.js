var config = {
        type: Phaser.CANVAS,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
	var image;
	var game = new Phaser.Game(config);
	var timer;
	var total = 0;
    var is_game = 0;
	var move_number = 0;
	var button;
	var square_image;
	var current_pos;
	var x, y;
    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
		this.load.image('field', 'assets/field.png');
		this.load.image('button', 'assets/button.png');
		this.load.image('button_start', 'assets/button_start.png');
		this.load.image('square', 'assets/square.png');
		/**this.load.spritesheet('button', 'assets/buttons/button.png', { frameWidth: 150, frameHeight: 150 });
		this.load.spritesheet('square', 'assets/square.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
		**/
    }

    function create ()
    {
		
        this.add.image(400, 300, 'sky');
		this.add.image(150, 150, 'field');
		this.add.image(300, 150, 'field');
		this.add.image(450, 150, 'field');
		this.add.image(150, 300, 'field');
		this.add.image(300, 300, 'field');
		this.add.image(450, 300, 'field');
		this.add.image(150, 450, 'field');
		this.add.image(300, 450, 'field');
		this.add.image(450, 450, 'field');
		/**this.add.image(450, 450, 'square');**/
		/*this.add.image(650, 300, 'button')*/
		
		//timedEvent = this.time.addEvent({ delay: 500, callback: onEvent, callbackScope: this, loop: true });
		//timedEvent = this.time.addEvent({ delay: 2000, callback: onEvent, callbackScope: this });
		
		var timer = this.time.addEvent({
					delay: 1000,                // ms
					callback: onEvent,
					args: [],
					callbackScope: this,
					loop: false,
					repeat: 20,
					startAt: 0,
					timeScale: 1,
					paused: false
				});
		
		square_image = this.add.image(150, 300, 'square');
		square_image.visible  = false
		var sprite = this.add.sprite(650, 300, 'button').setInteractive();
		sprite.on('pointerdown', function (pointer) {

        this.setTint(0xff0000);

		});

		sprite.on('pointerout', function (pointer) {

			this.clearTint();

		});

		sprite.on('pointerup', function (pointer) {

			this.clearTint();

		});
		
		var sprite_start = this.add.sprite(650, 150, 'button_start').setInteractive();
		sprite_start.on('pointerdown', function (pointer)
		{
			if(is_game == 0)
			{
			this.setTint(0xff0000);
			//timedEvent = game.time.addEvent({ delay: 500, callback: onEvent, callbackScope: this, loop: true });
			is_game = 1;
			move_number = 0;
			//alert("boop!");
			}
			if(is_game == 1)
			{
			this.setTint(0xff0000);
			//timedEvent = game.time.addEvent({ delay: 500, callback: onEvent, callbackScope: this, loop: true });
			is_game = 1;
			square_image.visible  = false
			move_number = 0;
			//alert("boop!");
			}
		});

		sprite_start.on('pointerout', function (pointer) {

			this.clearTint();

		});

		sprite_start.on('pointerup', function (pointer) {

			this.clearTint();

		});
		}

    function update ()
    {
    }
	function draw_square_x()
	{
	
	var x, y;
		switch (current_pos)
		{
		case 1:
			x = 150;
			y = 150;
			break;
		case 2:
			x = 300;
			y = 150;
			break;
			break;
		case 3:
			x = 450;
			y = 150;
			break;
		case 4:
			x = 150;
			y = 300;
			break;
		case 5:
			x = 300;
			y = 300;
			break;
		case 6:
			x = 450;
			y = 300;
		case 7:
			x = 150;
			y = 450;
		case 8:
			x = 300;
			y = 450;
		case 9:
			x = 450;
			y = 450;
		default:
			console.log("Sorry, we are out of.");
		}
		return x;
		//console.log(x + " " + y);
	}
	function draw_square_y()
	{
	
	var x, y;
		switch (current_pos)
		{
		case 1:
			x = 150;
			y = 150;
			break;
		case 2:
			x = 300;
			y = 150;
			break;
		case 3:
			x = 450;
			y = 150;
			break;
		case 4:
			x = 150;
			y = 300;
			break;
		case 5:
			x = 300;
			y = 300;
			break;
		case 6:
			x = 450;
			y = 300;
			break;
		case 7:
			x = 150;
			y = 450;
			break;
		case 8:
			x = 300;
			y = 450;
			break;
		case 9:
			x = 450;
			y = 450;
			break;
		default:
			console.log("Sorry, we are out of " + current_pos);
		}
		return y;
		//console.log(x + " " + y);
	}

	function onEvent ()
	{
		if(is_game == 1  && move_number < 10) 
			{
			square_image.visible  = false
			current_pos = Phaser.Math.Between(1, 9);
			x = draw_square_x();
			y = draw_square_y();
			square_image = this.add.image(x, y, 'square');
			//alert(x + " " + y);
			//alert( "square" );
			}
		
		if(is_game == 1 && move_number == 10)
			{
			square_image.visible  = false
			is_game = 0;
			move_numer = 0;
			//square_image = this.add.image(150, 150, 'square');
			//;
			//alert( "square" );
			}			
		//alert(move_number);
		if(is_game == 1)
			{
				move_number = move_number + 1;
			}
		
		//game.debug.text('Step: ' + move_number.toFixed(0), 32, 32);
	}
