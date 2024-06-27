<template>
	<div class="container">
		<div class="row row-producto-id">
			<div class="col">
				<h1>Lorem ipsum dolor sit amet.</h1>
				<img class="img" src="../../public/img/productos/Flujo/Flujometro electromagnetico.jpg" alt="" />
			</div>
			<div class="col">
				<h5>Especificaciones</h5>
				<table class="table">
					<tbody>
						<tr>
							<th scope="row"><b>Diametro</b></th>
							<td>40 mm ( 1.1/2 )</td>
						</tr>
						<tr>
							<th scope="row">Caja</th>
							<td>Ac. Negro / ABS</td>
						</tr>
						<tr>
							<th scope="row">Conexión:</th>
							<td>Inferior 1/8” NPT M, en bronce</td>
						</tr>
						<tr>
							<th scope="row">Mecanismo::</th>
							<td>Aleación cobre</td>
						</tr>
					</tbody>
				</table>
				<span>Los valores son de prueba**</span>
			</div>
		</div>
		<div class="descripcion row">
			<h5>Descripcion del producto: <b>XXXXXX</b></h5>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates vel aspernatur error ab impedit rerum maiores quibusdam, tenetur atque delectus excepturi ex recusandae
				corporis in assumenda suscipit et voluptatum? Ad ut neque suscipit numquam nostrum soluta vel tempora praesentium blanditiis! Quae accusantium at ad consectetur ipsa laborum, id
				dolores.
			</p>
			<b-button class="reserva" button="primary" toggle="modal" target="#exampleModal"> Reserva tu producto aca!!! </b-button>
		</div>
	</div>

	<Modal id="exampleModal">
		<ModalDialog>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>Reserva</ModalTitle>
					<CloseButton dismiss="modal" />
				</ModalHeader>
				<ModalBody>
					<form class="form-reserva">
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">Producto</label>
							<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">Correo electronico</label>
							<input type="email" class="form-control" id="exampleInputPassword1" />
						</div>
						<div class="form-floating">
							<label for="exampleInputPassword1" class="form-label">Su mensaje</label>
							<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<b-button button="secondary" dismiss="modal">Cancelar</b-button>
					<b-button button="primary">Enviar</b-button>
				</ModalFooter>
			</ModalContent>
		</ModalDialog>
	</Modal>
</template>
