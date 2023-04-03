
const express = require('express');

const app = express();

const PORT = 8000;


const characters = {
    playable: {
        mario: {
            description: "A beloved and intrepid hero who can be easily recognized by his red cap and mustache"
        },
        luigi: {
            description: "Mario's taller brother who is known for his high jumps and being afraid of ghosts."
        },
        peach: {
            description: "The princess of the Mushroom Kingdom. Has a kind heart and a love of all things pink."
        },
        daisy: {
            description: "An energetic princess who is particularly fond of her flower earrings."
        },
        wario: {
            description: "A greedy character with an eye for gold. Spends too much time with Waluigi."
        },
        waluigi: {
            description: "A devious individual who always has a trick up his sleeve. Often seen with Wario."
        },
        yoshi: {
            description: "A carefree but steadfast ally of Mario's who loves to eat fruit."
        },
        rosalina: {
            description: "An otherworldly figure who travels through space with her family, the Lumas."
        },
        dk: {
            description: "King of the jungle. Incredibly strong but bugs out for bananas."
        },
        birdo: {
            description: "A jovial character who exudes a mysterious charm."
        }
    }
}


const items = {
    skeleton_key: {
        description: "Open a gate. Can only be used when you're next to a gate.",
        cost: 3
    },
    mushroom: {
        description: "+5 to dice roll, then move the total amount.",
        cost: 3
    },
    cursed_dice: {
        description: "A die that can roll only a number between 1 and 3.",
        cost: 3
    },
    double_dice: {
        descriotion: "Roll 2 dice, then move the total amount.",
        cost: 5
    },
    chomp_call: {
        descriotion: "Call Chain Chomps to move a Star.",
        cost: 7,
        alt_price: 6
    },
    warp_block: {
        description: "Swap spaces with a random opponent.",
        cost: 7
    },
    triple_dice: {
        description: "Roll 3 dice, then move the total amount.",
        cost: 10
    },
    custom_dice_block: {
        description: "Roll whatever number you want from 1 to 10.",
        cost: 12
    },
    plunder_chest: {
        description: "Steal an item from the opponent of your choice.",
        cost: 20
    },
    golden_pipe: {
        description: "Warp to a Star.",
        cost: 25
    },
    hidden_block_card: {
        description: "Makes a hidden block appear.",
        cost: 40
    },
    boo_bell: {
        description: "Boo can steal from an opponent a Star (for 50 coins) or coins (for free).",

    },
    dueling_glove: {
        description: "Duel the opponent of your choice.	"
    },
    super_warp_block: {
        description: "Swap spaces with an opponent of your choice."
    },
    double_star_card: {
        description: "Exchange for double the Stars. Can be used only at a Star Exchange."
    }

}

const minigames = {
    "4p": {
        mushroom_mixup: {
            description: "Hurry and move to the pattern that matches the sign I [Toad] hold up!",
            origin: 'Mario Party'
        },
        bombs_away: {
            description: "Try your best not to fall off the island as it rocks and tilts!",
            origin: "Mario Party"
        },
        shy_guy_says: {
            description: "Raise the same color of flag that Shy Guy raises. He's going to go faster and faster!",
            origin: "Mario Party"
        },
        crazy_cutters: {
            description: "Cut along the lines, and dig up the fossilized figures.",
            origin: "Mario Party"
        },
        tipsy_tourney: {
            description: "Tilt to slide the shell and uncover all the panels.",
            origin: "Mario Party"
        },
        face_lift: {
            description: "Pull and tug Bowser's face to try to match the example.",
            origin: "Mario Party"
        },
        hammer_drop: {
            description: "Try to get the coins, but watch out for hammers. Your coins get zeroed out if you fall off the edge!",
            origin: "Mario Party"
        },
        cast_aways: {
            description: "Collect coins by fishing them out of the water. Adjust the distance of your cast with the Stick. Land a big one!",
            origin: "Mario Party 2"
        },
        dizzy_dancing: {
            description: "Fight through the dizziness to grab the clefs hovering above the record. Collect the most clefs to win!",
            origin: "Mario Party 2"
        },
        bumper_balls: {
            description: "Bump your rivals off the edge.",
            origin: "Mario Party"
        },
        hot_rope_jump: {
            description: "The flaming rope spins and spins... Jump the rope without touching the flames.",
            origin: "Mario Party"
        },
        tread_carefully: {
            description: "Shoot the rival tanks! Get hit twice, and you're out.",
            origin: "Mario Party 2"
        },
        bumper_balloon_cars: {
            description: "Use the spikes on your car to burst your rivals' balloons!",
            origin: "Mario Party 2"
        },
        sneak_n_snore: {
            description: "Sneak to the button and out the door while Chain Chomp snores. Hide in the barrel so you don't get noticed!",
            origin: "Mario Party"
        },
        mecha_marathon: {
            description: "Wind up as fast as you can so your mechanical Fly Guy flies the farthest!",
            origin: "Mario Party 2"
        },
        slot_car_derby: {
            description: "Drive four laps, but watch your speed. Going too fast around the curves will make you spin out, so be careful!",
            origin: "Mario Party"
        },
        bowser_big_blast: {
            description: "Take turns pressing the switches. If Bowser blows up on you, you're out.",
            origin: "Mario Party 2"
        },
        roll_call: {
            description: "Count how many characters are milling about. Whoever is right when roll call comes wins!",
            origin: "Mario Party 4"
        },
        honeycomb_havoc: {
            description: "Collect fruit. Adjust the number on the block to avoid catching the honeycomb on your turn.",
            origin: "Mario Party 4"
        },
        snowball_summit: {
            description: "Roll up a big snowball to push out your rivals!",
            origin: "Mario Party 4"
        },
        ice_rink_risk: {
            description: "Avoid the Spinies that slide around the slippery ice.",
            origin: "Mario Party 4"
        },
        bounce_n_trounce: {
            description: "Knock your rivals off the playing field. Do a spin attack to push them farther away!",
            origin: "Mario Party 4"
        },
        storm_chasers: {
            description: "Water your Piranha Plant to help it grow!",
            origin: "Mario Party 4"
        },
        mush_pit: {
            description: "Grab the Mega Mushroom and ram into your rivals!",
            origin: "Mario Party 4"
        },
        cheep_cheep_chase: {
            description: "Swim for your life to avoid the giant Cheep Cheep! Dive at the right moments to avoid the bombs in the water.",
            origin: "Mario Party 4"
        },
        chip_shot_challenge: {
            description: "Hit the ball toward the flag. The player who hits their ball closest to the hole wins!",
            origin: "Mario Party 4"
        },
        rockin_raceway: {
            description: "Race on your wooden horse. If you speed up too much, it'll get tired, so watch out!",
            origin: "Mario Party 4"
        },
        messy_memory: {
            description: "Try to return all the scattered items to their original spots. When you're done, shut your curtain to stop others from cheating.",
            origin: "Mario Party 4"
        },
        parasol_plummet: {
            description: "Collect the coins as you fall. Watch out for hammers!",
            origin: "Mario Party 4"
        },
        trace_race: {
            description: "Trace the guideline carefully with your crayon!",
            origin: "Mario Party 4"
        },
        booksquirm: {
            description: "Stand under the holes in the falling pages so you don't get flattened!",
            origin: "Mario Party 4"
        },
        paths_of_peril: {
            description: "Be careful not to fall off the winding path on your way to the goal!",
            origin: "Mario Party 4"
        },
        dinger_derby: {
            description: "Swing at just the right moment to hit the machine's pitches.",
            origin: "Mario Party 4"
        },
        leaf_leap: {
            description: "Jump from leaf to leaf, and climb higher than everyone else.",
            origin: "Mario Party 4"
        },
        pushy_penguins: {
            description: "Avoid the pushy penguins without falling into the water! Last one standing wins!",
            origin: "Mario Party 4"
        },
        coney_island: {
            description: "Keep an eye on the shadows to catch the falling scoops of ice cream! Catch the most scoops to win!",
            origin: "Mario Party 4"
        },
        bill_blasters: {
            description: "Aim for your rivals and fire away! But be careful-it won't count if it hits their cannon",
            origin:"Mario Party 5"
        },
        nightlight_fright: {
            description: "Let the Chain Chomp come as close as possible, and stop it with the flashlight. Whoever stops it the closest wins!",
            origin: 'Mario Part 5'
        },
        later_skater: {
            description: "Be the first to finish five laps around the rink. Try your best not to lose speed!",
            origin:"Mario Party 5"
        },
        catch_you_later: {
            description: "Pick up letters falling from the sky, and give them back to the Shy Guy!",
            origin: "Mario Party 6"
        },
        trap_ease_artist: {
            description: "Drop your cage at the right moment to capture as many Goombas as you can!",
            origin: "Mario Party 6"
        },
        what_goes_up: {
            description: "Jump on Koopa Paratroopas to reach breathtaking heights! Whoever reaches the highest altitude wins!",
            origin: "Mario Part 6"
        },
        snow_whirled: {
            description: "Outspin everyone else on your snowboard!",
            origin: "Mario Party 6"
        },
        dark_n_crispy: {
            description: "Bowser is lurking in the darkness! Avoid him and his fire-breathing attack. Keep running until the very end!",
            origin: "Mario Party 6"
        },
        pit_boss: {
            description: "Dodge Bowser's rolling spike spheres at all costs!",
            origin: "Mario Party 6"
        },
        xray_payday: {
            description: "Watch the boxes as they get x-rayed to see what's inside. Try to open boxes with coins in them!",
            origin: 'Mario Party 6'
        },
        montys_revenge: {
            description: "Peek out of the holes, but don't let a Monty Mole whack your head! The player who stays out longest wins!",
            origin: "Mario Party 7"
        },
        the_final_countdown: {
            description: "Stay safe until time runs out. Be careful not to fall into a hole!",
            origin: "Mario Party 7"
        },
        pokey_pummel: {
            description: "Keep swinging your hammer to knock Pokey down to size! Each segment takes five hits to knock out.",
            origin: "Mario Party 7"
        },
        manor_of_escape: {
            description: "Find the door that leads to the floor below. Be the first to escape the manor to win!",
            origin: "Mario Party 9"
        },
        goomba_spotting: {
            description: "Count the number of Goombas that run by. Be careful, because once you've decided on your count, you can't change it.",
            origin: "Mario Party 9"
            
        },
        flash_forward: {
            description: "Get to the center of the platform and face the camera just in time for the picture to be taken!",
            origin: "Mario Party 10"
        },
        rapid_river_race: {
            description: "Steer your hovercraft to the finish line. Go as fast as you can, but watch out for Urchins!",
            origin: "Mario Party 10"
        }

    
    },
    "2v2": {
            bobsled_run: {
                description: "Team up with another player for a race. Cooperate with your partner so you don't fall off the edge. Fall, and you lose the race!"
            },
            handcar_havoc: {
                description: "Race the handcars in teams of two. Be careful not to pick up too much speed on a curve. Fall into the lava, and you're out!"
            },
            dungeon_dash: {
                description: "Teammates must move their feet at the same time to move ahead! You'll trip if you get the timing wrong."
            },
            speed_hockey: {
                description: "Knock the shell into your rivals' goal. The first team to score three goals wins!"
            },
            balloon_burst: {
                description: "Pump air into the Bowser balloon until it pops! Pay attention to the gauge, and get in as much air as you can with each pump."
            },
            cake_factory: {
                description: "Work as a pair and make cakes. One player places cakes. The other, strawberries!"
            },
            sky_pilots: {
                description: "Control the plane with another player, and fly to the finish line!"
            },
            etch_n_catch: {
                description: "Work together with your partner to surround the stamps with your crayons."
            },
            picking_panic: {
                description: "Pass the cherries at the right time, and put as many as you can in the basket."
            },
            eatsa_pizza: {
                description: "Pair up to gobble as much of the giant pizza as you can! Pepperoni and crust take longer to chomp."
            },
            puddle_paddle: {
                description: "Climb aboard a two-person raft, and collect coins. Be careful not to get hit by the hammers!"
            },
            dungeon_duos: {
                description: "Help your teammate to clear all the obstacles in this dark, dreary dungeon!"
            },
            revers_a_bomb: {
                description: "Blow up the other side! Press the buttons that light up to send Bob-ombs to your rivals. Hit them 10 times to win!"
            },
            burnstile: {
                description: "Jump to avoid the spiky turnstile!"
            },
            rocky_road: {
                description: "Break down the boulders blocking the road, and be the first team to the goal!"
            },
            cashapult: {
                description: "Use the seesaw to launch into the air and collect as many floating coins as you can. Each player only gets two jumps though!"
            },
            paint_misbehavin: {
                description: "Shoot Goombas to paint them your team color."
            },
            winner_or_dinner: {
                description: "Grab coins, but watch out for Piranha Plants!"
            }
    },
    "3v1": {
            piranhas_pursuit: {
              description: "Solo side: Mash the button to escape! Team side: Ground-pound to feed Petey Piranha with rain."
            },
            tug_o_war: {
              description: "Solo side: Use your super strength to pull the rope and drag the opposing team off the cliff! Team side: Pull your rival off the cliff first!"
            },
            archer_ival: {
              description: "Solo side: Try to hit the moving targets. Team side: Avoid getting hit."
            },
            look_away: {
              description: "Solo side: Choose a direction to look by the time the music stops. Team side: Look a different direction. Don't get tricked!"
            },
            quicksand_cache: {
              description: "Solo side: Stop your rivals from collecting coins! Team side: If you get sucked into the quicksand, you lose."
            },
            tidal_toss: {
              description: "Solo side: Ground-pound the boat to send waves toward your rivals. Team side: Jump over the waves!"
            },
            boulder_ball: {
              description: "Solo side: Roll boulders down the slope to interfere with the climbers. Team side: Dodge the boulders and get to the top!"
            },
            coconut_conk: {
              description: "Solo side: Roll around to dodge the falling coconuts. Team side: Ground-pound to drop coconuts on the solo player!"
            },
            spotlight_swim: {
              description: "Solo side: Stay out of the spotlight! Team side: All of you must shine all three searchlights on the solo player together."
            },
            hide_and_sneak: {
              description: "Solo side: Find your rivals! Team side: Hide!"
            },
            river_raiders: {
              description: "Collect coins that travel down the river. Be careful not to hit the floating logs!"
            },
            goal: {
              description: "Solo side: Play as the goalie and block shots. Team side: Play as the kickers, and try to make 10 goals."
            },
            money_belts: {
              description: "Grab as many coins as possible. Don't fall off, or you'll lose time!"
            },
            squared_away: {
              description: "Solo side: Don't get crushed. Team side: Cooperate to chase down the solo player."
            },
            tube_it_or_lose_it: {
              description: "Solo side: Try to pop your rivals' tubes. Team side: Steer clear until you reach the goal."
            },
            pogo_a_go_go: {
              description: "Solo side: Spin the stage to make your rivals fall into a hole. Team side: Don't fall into the holes."
            },
            tackle_takedown: {
              description: "Solo side: Run the ball to the end zone. Team side: Tackle the runner."
            },
            skewer_scurry: {
              description: "Solo side: Select a direction to attack. Try to fake out your rivals! Team side: Run and hide!"
            }
          
    }
}










app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(process.env.PORT || PORT, () => {
    console.log('listening on port 8000')
})


app.get('/api/characters', (req, res) => {
    res.json(characters)
})

app.get('/api/characters/playable', (req, res) => {
    res.json(characters.playable)
})

app.get('/api/characters/playable/:name', (req, res) => {
    res.json(characters.playable[req.params.name]);
})

app.get('/api/items', (req, res) => {
    res.json(items)
})

app.get('/api/items/:item', (req, res) => {
    res.json(items[req.params.item])
})

app.get('/api/minigames', (req,res) => {
    res.json(minigames)
})


app.get('/api/minigames/:category', (req,res) => {
    if(minigames[req.params.category]) {
        res.json(minigames[req.params.category])
    }
    else {
        const unknown = {'unknown':null}
        res.json(unknown)
        
    }
})

app.get('/api/minigames/4p/:game', (req,res) => {
    if(minigames['4p'][req.params.game]) {
        res.json(minigames['4p'][req.params.game])
    }
    else {
        const unknown = {'unknown':null}
        res.json(unknown)
        
    }
})




