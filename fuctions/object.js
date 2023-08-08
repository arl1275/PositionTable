"use strict"

export class Participant{
    id = Number;
    img = new Image();
    name = String;
    eliminated = Boolean;
    score =  Number;

    VoidUser();
}

function VoidUser(){
    Participant.eliminated = false;
    Participant.score = 0;
    Participant.name = "John Doe";

    return Participant;
}

