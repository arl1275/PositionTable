"use strict"

 let Participant = {
    id : Number,
    img : new Image(),
    name : String,
    eliminated : Boolean,
    score : Number
}

export function VoidUser{
    Participant.eliminated = false;
    Participant.score = 0;
    Participant.name = "John Doe";

    return Participant;
}

