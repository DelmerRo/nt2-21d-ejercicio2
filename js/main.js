
new Vue({
    el: '#app',
    data: {
        criterioDeBusqueda:'',
        criterioDeBusquedaPorNombreOApellido: '',
        criterioDeBusquedaPorDni: '',
     
        personas: [
            {
                nombre: "Daniel",
                apellido: "Sanchez",
                correo: "danielsanchez68@hotmail.com",
                dni: "20442873",
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png'
            },

            {
                nombre: "Delmer",
                apellido: "Rodriguez",
                correo: "jindrg@hotmail.com",
                dni: "94807936",
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-128.png'
            },

            {
                nombre: "Melisa",
                apellido: "Mena",
                correo: "mena68@hotmail.com",
                dni: "21588855",
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png'
            },

            {
                nombre: "Maria",
                apellido: "Gonzales",
                correo: "Maru68@hotmail.com",
                dni: "45789966",
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png'
            },
        ]

    },
    computed: {
        personasFiltradasPorTodo() {
            return this.personas.filter((persona) => {
                let registroCompleto = `${persona.nombre} ${persona.apellido} ${persona.dni} ${persona.correo}`
                return registroCompleto.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())
            });
        },

        personasFiltradasPorNombreApellidoDni() {

            return this.personas.filter((persona) => {
                let registroCompleto = ` ${persona.nombre} ${persona.apellido} ${persona.dni} `
                return registroCompleto.toLowerCase().includes(this.criterioDeBusquedaPorNombreOApellido.toLowerCase()) && registroCompleto.includes(this.criterioDeBusquedaPorDni) &&
                    this.criterioDeBusquedaPorNombreOApellido.length + this.criterioDeBusquedaPorDni.length >= 3

            });
        },

    },
    methods: {
        getNombreCompleto(persona) {
            return `${persona.nombre} ${persona.apellido}`
        }
    }
});
