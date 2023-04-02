
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


