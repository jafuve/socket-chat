class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
            let persona = { id, nombre, sala };

            this.personas.push(persona);

            return this.personas;
        } //end function

    getPersona(id) {
            let persona = this.personas.filter(persona => persona.id === id)[0];

            return persona;
        } //end function get persona

    getPersonas() {
            return this.personas;
        } //end function

    getPersonasPorSala(sala) {
            let personasEnSala = this.personas.filter(persona => persona.sala === sala);
            return personasEnSala;
        } //end function

    borrarPersona(id) {
            let personaBorrada = this.getPersona(id);

            this.personas = this.personas.filter(persona => persona.id != id);

            return personaBorrada;
        } //end function

}

module.exports = { Usuarios }