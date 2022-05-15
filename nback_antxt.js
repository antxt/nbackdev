var config = {
        type: Phaser.AUTO,
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
	var pos_minus_one;
	var pos_minus_two;
	var x, y;
	var tick;
	tick = 1;
	pos_minus_two = -1;
	pos_minus_one = -1;
    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
		this.load.image('field', 'assets/field.png');
		this.load.image('button', 'assets/button.png');
		this.load.image('button_start', 'assets/button_start.png');
		this.load.image('button_stop', 'assets/button_stop.png');
		this.load.image('square', 'assets/square.png');
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
		this.add.text(25, 25, 'Single 2-Back Training by @antxt', {font: '18px Arial', fill: '#fff'});
		var timer = this.time.addEvent({
					delay: 500,                // ms
					callback: onEvent,
					args: [],
					callbackScope: this,
					loop: false,
					repeat: 500,
					startAt: 0,
					timeScale: 1,
					paused: true
				});
		
		square_image = this.add.image(150, 300, 'square');
		square_image.visible  = false
		
		/**var sprite = this.add.sprite(650, 300, 'button');
		sprite.setInteractive();
		sprite.on(
			'pointerdown',
			function (pointer)
				{
				this.setTint(0xff0000);
				//this.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
				//alert("I'm pressed");
				}
		);
		sprite.on(
			'pointerout',
			function (pointer)
				{
				this.clearTint();
				}
		);
		sprite.on(
			'pointerup',
			function (pointer)
				{
				this.clearTint();
				}
		);**/
		var sprite = this.add.sprite(650, 300, 'button').setInteractive();
		sprite.on('pointerdown', function (pointer) {
			//pos_minus_two
			//current_pos
			//this.setTint(0xff0000);
			
			if(current_pos == pos_minus_two)
			{
				this.setTint(0x00ff00);
				//console.log('gotcha!');
			}
			else
			{
				this.setTint(0xff0000);
			}

		});

		sprite.on('pointerout', function (pointer) {

			this.clearTint();

		});

		sprite.on('pointerup', function (pointer) {

			this.clearTint();

		});
		var sprite_stop = this.add.sprite(650, 450, 'button_stop').setInteractive();
		sprite_stop.on(
			'pointerdown',
			function (pointer)
				{
				this.setTint(0xff0000);
				timer.paused = true;
				}
		);
		sprite_stop.on(
			'pointerout',
			function (pointer)
				{
				this.clearTint();
				}
		);
		sprite_stop.on(
			'pointerup',
			function (pointer)
				{
				this.clearTint();
				}
		);
		
		var sprite_start = this.add.sprite(650, 150, 'button_start').setInteractive();
		sprite_start.on('pointerdown', function (pointer)
		{
			if(is_game == 0)
			{
			this.setTint(0xff0000);
			//timedEvent = game.time.addEvent({ delay: 500, callback: onEvent, callbackScope: this, loop: true });
			is_game = 1;
			move_number = 0;
			timer.paused = false;
			//alert("boop!");
			}
			if(is_game == 1)
			{
			this.setTint(0xff0000);
			//timedEvent = game.time.addEvent({ delay: 500, callback: onEvent, callbackScope: this, loop: true });
			is_game = 1;
			square_image.visible  = false
			move_number = 0;
			tick = 0;
			//alert("boop!");
			}
		});

		sprite_start.on(
			'pointerout',
			function (pointer)
			{
			this.clearTint();
			}
		);

		sprite_start.on(
			'pointerup',
			function (pointer)
			{
			this.clearTint();
			}
		);
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
		if (tick % 5 == 0)
		{
			if(is_game == 1  && move_number < 21) 
				{
				square_image.visible  = false
				
				pos_minus_two = pos_minus_one;
				pos_minus_one = current_pos;
				current_pos = Phaser.Math.Between(1, 9);
				x = draw_square_x();
				y = draw_square_y();
				square_image = this.add.image(x, y, 'square');
				
				//console.log(pos_minus_two + ' ' + pos_minus_one + ' ' +  current_pos);
				}
			
			if(is_game == 1 && move_number == 21)
				{
				square_image.visible  = false
				is_game = 0;
				move_numer = 0;
				pos_minus_two = -1;
				pos_minus_one = -1;
				}			
			move_number = move_number + 1;
			//console.log(move_number);
		}
		else
		{
			square_image.visible  = false
		}
		//if(is_game == 1)
		//	{
				tick = tick + 1;
				
		//	}
	}
