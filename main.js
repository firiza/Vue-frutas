var app8 = new Vue({
				el: "#app",
				data:{

					mostrar: false,
					frutillas: [
					{nombre: 'Mango', cantidad: ''},
					{nombre: 'Pera', cantidad: ''},
					{nombre: 'Piña', cantidad: ''},
					{nombre: 'Fresas', cantidad: ''},
					{nombre: 'Cambur', cantidad: ''}

					
					],

					nombreFruta: '',
					Estatus: 'En stock',
					total: ''
	
				},

				methods: {

					botoncito() {
						this.frutillas.push({
							nombre: this.nombreFruta, cantidad: this.frutillas.cantidad
						})
						this.nombreFruta = ''
					}


				},

				computed: {
					sumarFrutas() {

						this.total = 0;
					for(fruta of this.frutillas){
						this.total = this.total + fruta.cantidad
					}
					return this.total


					}
					
				}

			})