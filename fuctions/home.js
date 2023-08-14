import {Participant } from "./object";

let ListaParticipantes = [];

function added_newParticipant(props = Participant){
    if(props.name != "" && props.img != null ){
        ListaParticipantes.push(props);
    }else{
        alert("Faltan datos");
    }
}

function eliminated_participant(props = Participant){
    if(ListaParticipantes.length != 0){
        let Parti = ListaParticipantes.find(Participant=> Participant.name == props.name);
        if(Parti != null){
            ListaParticipantes.find(Participant=> Participant.name == props.name).eliminated(true);
        }else{
            console.log('no se encuentra el participante');
        }

    }else{
        alert("No hay participantes en la lista")
    }

}

function updateScore(props, cantidad){
    let parti = ListaParticipantes.find(Participant=> Participant.name == props.name);
    parti.score += cantidad;
}

