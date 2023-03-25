
		Push.create("Hola mundo",{
			body: "Este es el cuerpo de la notificacion",
			icon: "https://dagprogs.github.io/test/img/logo.png",
			timeout: 4000,
			onClick: function () {
				window.location="https://nickersoft.github.io/push.js/";
				this.close();
			}
		});
