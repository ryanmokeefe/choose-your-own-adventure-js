// put code here!
var answer = ''

while (answer.toUpperCase() !== 'PLANET' || answer.toUpperCase() !== 'MYSTERY' || answer.toUpperCase() !== 'NEITHER') {
    answer = prompt("Hello, Jack O'Niell. Would you like to visit the coordinates of a planet, mystery coordinates, or neither? (planet / mystery / neither)")

    if (answer.toUpperCase() === 'PLANET') {
            answer = prompt('Would you like to visit an advanced planet, or a primitive planet? (a / p)')
        if (answer.toUpperCase() === 'A') {
            answer = prompt("Cool! You've travelled to an advanced planet, P34-353J. The Tok'ra enlist your help for a dangeous mission: you need to steal Naquadah, a powerful and rare element, from the infamous Goa'uld. The Naquadah is kept in a vault in the Goa'uld temple, do you want to sneak in, or attack head on? (sneak in / attack)")
            if (answer.toUpperCase() === 'SNEAK IN') {
                alert('You successfully infiltrated the temple and recovered the element! Hooray!')
            } else if (answer.toUpperCase() === 'ATTACK') {
                alert('Wow, that was a close one! But you got the element, and are heading back home.')
            }
        } else if (answer.toUpperCase() === 'P') {
            answer = prompt("You've landed on a planet with Goa'uld influence. The Goa'uld claim to be gods, and the local people seem to worship them, despite being enslaved. Do you try to convince them of the truth, or launch an assault on the aliens and fight for the freedom of these people? (talk / attack)")
            if (answer.toUpperCase() === 'TALK') {
                alert("You've talked with many of the people and convinced them that these are no gods. Many of them are willing to help launch a rebellion and reclaim their home!")
            } else if (answer.toUpperCase() === 'ATTACK') {
                alert("Well, you fought off the enemy and they're retreating back into space. You did not make any friends with the locals though, who now think you've killed their gods. They're pretty upset...")
            }
        } 
    } else if (answer.toUpperCase() === 'MYSTERY') {
        answer = prompt("Would you like to visit: 1.) P3X-439 or 2.) P4C-970 ? (1 / 2)")
        if (parseInt(answer) === 1) {
            answer = prompt("This mission is very dangerous. Are you sure you would like to proceed? (y / n)")
            if (answer.toUpperCase() === 'Y') {
                alert("You've entered the Pegasus Galaxy, and discovered the long lost vessel Atlantis! Unfortunately, you don't have anywhere near enough fuel to make it back home, better get comfy.")
            } else if (answer.toUpperCase() === 'N') {
                alert('Probably for the best...')
            }
        } else if (parseInt(answer) === 2) {
          answer = prompt("You've discovered a new civilization of aliens, the Aschen! They have technological and agricultural advances they would be happy to share with Earth, but your team gets a funny feeling about them... Do you trust them? (y / n)") 
          if (answer.toUpperCase() === 'Y') {
            alert("Well it was good while it lasted! Earth benefited from Aschen knowledge for a long time, but unfortunately you discovered too late that the Aschen plan to depopulate the planet by secretly sterilizing much of the population through life-extending drugs. You and your team sacrifice their lives to send a warning back in time to yourselves not to contact the Aschen homeworld P4C-970")
          } else if (answer.toUpperCase() === 'N') {
            alert("Probably for the best. You have an uncomfortable sense of déjà vu..")
          }
        }

    } else if (answer.toUpperCase() === 'NEITHER') {
        answer = prompt("The X-301 is the first experimental aircraft based on combined Earth and Goa'uld technologies. Would you like to test-fly it? (y / n) ") 
        if (answer.toUpperCase() === 'Y') {
            answer = prompt("Teal'c would like to accompany you. What do you say? (y / n)")
            if (answer.toUpperCase() === 'Y') {
                alert("The two of you are enjoying your ride at first, but soon a hidden trap in the aircraft takes control of the X-301 and propels it to the open space. The Goa'uld technology was booby trapped, and now you have to wait around for the rest of your team to rescue you.")
            } else if (answer.toUpperCase() === 'N') {
                alert("You are enjoying your ride at first, but soon a hidden trap in the aircraft takes control of the X-301 and propels it to the open space. The Goa'uld technology was booby trapped, and now you have to wait around for the rest of your team to rescue you. Bet you wish you had some company.")
            }
        } else if (answer.toUpperCase() === 'N') {
            answer = prompt("Do you have beer at home? (y / n)") 
            switch(true) {
                case answer.toUpperCase() === "Y":
                    alert("Looks like a great day for fishing!")
                    break;
                case answer.toUpperCase() === "N":
                    alert("Looks like a great day for paperwork...") 
        }
    }
}
}
