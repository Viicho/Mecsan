<template>
	<div class="container">
		<h1 class="titulo-productos">Productos de flujo</h1>
		<div id="card-area">
			<div class="wrapper">
				<div class="box-area">
					<div class="box">
						<img src="../../../public/img/productos/Flujo/Flujometro electromagnetico.jpg" alt="" />
						<div class="overlay">
							<h5>Flujometro electromagnetico</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.</p>
							<a href="">Ver mas</a>
						</div>
					</div>
					<div class="box">
						<img src="../../../public/img/productos/Flujo/Flujometro Woltex.jpg" alt="" />
						<div class="overlay">
							<h5>Flujometro Woltex</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.</p>
							<nuxt-link :to="`/productos/${1}`">Ver mas</nuxt-link>
						</div>
					</div>
					<div class="box">
						<img src="../../../public/img/productos/Flujo/Switch de flujo.jpg" alt="" />
						<div class="overlay">
							<h5>Switch de flujo</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.</p>
							<a href="">Ver mas</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
