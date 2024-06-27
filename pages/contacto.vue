<template>
	<div class="container">
		<div class="contacto">
			<h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, earum.</h3>
			<div>
				<LucideMail />
				<b>Email: </b> <span> lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas. </span>
			</div>
			<div>
				<LucideContact />
				<b>Contacto: </b>
				<span> lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas. </span>
			</div>
			<div>
				<LucideCar />
				<b>Direccion: </b> <span> lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas. </span>
			</div>
			<div>
				<LucidePhone />
				<b>Telefono: </b> <span> lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas. </span>
			</div>
		</div>
		<form>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Nombre y apellido</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Correo electronico</label>
				<input type="email" class="form-control" id="exampleInputPassword1" />
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Asunto</label>
				<input type="text" class="form-control" id="exampleInputPassword1" />
			</div>
			<div class="form-floating">
				<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
				<label for="floatingTextarea">Su mensaje</label>
			</div>
			<button type="submit" class="btn btn-primary">Enviar</button>
		</form>
	</div>
</template>
