
const express = require('express');

const app = express();

const PORT  = 8000;


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
            description:"King of the jungle. Incredibly strong but bugs out for bananas."
        },
        birdo: {
            description:"A jovial character who exudes a mysterious charm."
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
        cost:7
    },
    triple_dice: {
        description: "Roll 3 dice, then move the total amount.",
        cost:10
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
        }
    }
}





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(process.env.PORT || PORT, () => {
    console.log('listening on port 8000')
})


app.get('/api/characters', (req,res) => {
    res.json(characters)
})

app.get('/api/characters/playable', (req,res) => {
    res.json(characters.playable)
})

app.get('/api/characters/playable/:name', (req,res) => {
    res.json(characters.playable[req.params.name]);
})

app.get('/api/items', (req, res) => {
    res.json(items)
})

app.get('/api/items/:item', (req, res) => {
    res.json(items[req.params.item])
})


