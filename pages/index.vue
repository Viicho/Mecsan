<template>
	<div class="bg-slide container-fluid">
		<div class="container">
			<!-- <Splide class="slide" :options="splideOptions" aria-label="My Favorite Images">
				<SplideSlide class="slider-body">
					<img src="../public/img/productos/Flujo/Flujometro electromagnetico.jpg" alt="Sample 1" />
					<span class="text-slider">Flujometro electromagnetico</span>
				</SplideSlide>
				<SplideSlide class="slider-body">
					<img src="../public/img/productos/Nivel/Juego de llave nivel.jpg" alt="Sample 2" />
					<span class="animate__animated animate__bounce">Juego de llave</span>
				</SplideSlide>
				<SplideSlide class="slider-body">
					<img src="../public/img/productos/Presion/Llave para manómetro.jpg" alt="Sample 2" />
					<span class="animate__animated animate__bounce">LLave para manómetro</span>
				</SplideSlide>
			</Splide> -->
			<SwiperComponent />
		</div>
	</div>
	<div class="container">
		<section id="productos">
			<h3>Productos a su disposicion</h3>
			<br />
			<div class="productos">
				<div class="card text-center">
					<div class="card-header"><b>Flujo</b></div>
					<div class="card-body">
						<img src="../public/img/productos/Flujo/Switch de flujo.jpg" alt="" />
					</div>
					<div class="card-footer">
						<NavLink to="/productos/flujo">
							<button class="btn">Ver mas</button>
						</NavLink>
					</div>
				</div>
				<div class="card text-center">
					<div class="card-header"><b>Nivel</b></div>
					<div class="card-body">
						<img src="../public/img/productos/Nivel/Juego de llave nivel.jpg" alt="" />
					</div>
					<div class="card-footer">
						<NavLink to="/productos/nivel">
							<button class="btn">Ver mas</button>
						</NavLink>
					</div>
				</div>
				<div class="card text-center">
					<div class="card-header"><b>Presion</b></div>
					<div class="card-body">
						<img src="../public/img/productos/Presion/Llave para manómetro.jpg" alt="" />
					</div>
					<div class="card-footer">
						<NavLink to="/productos/presion">
							<button class="btn">Ver mas</button>
						</NavLink>
					</div>
				</div>
				<div class="card text-center">
					<div class="card-header"><b>Temperatura</b></div>
					<div class="card-body">
						<img src="../public/img/productos/Temperatura/Termometro Capilar.jpg" alt="" />
					</div>
					<div class="card-footer">
						<NavLink to="/productos/temperatura">
							<button class="btn">Ver mas</button>
						</NavLink>
					</div>
				</div>
				<div class="card text-center">
					<div class="card-header"><b>Valvulas</b></div>
					<div class="card-body">
						<img src="../public/img/productos/Valvulas/Posicionador lineal.jpg" alt="" />
					</div>
					<div class="card-footer">
						<NavLink to="/productos/valvulas">
							<button class="btn">Ver mas</button>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div class="bg-soluciones container-fluid">
		<div class="container">
			<div>
				<div class="container-image-soluciones">
					<img class="img-soluciones" src="../public/img/mecsanLogo2-removebg-preview.png" alt="" />
				</div>
				<div>
					<h5>DISEÑANDO Y FABRICANDO SOLUCIONES</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aperiam! At consectetur sequi voluptates aperiam aliquam, nostrum harum non sunt repellendus totam dolor quos
						autem aliquid officiis, vero labore esse cum praesentium sint voluptatem? Reprehenderit consequatur at debitis minus dolorem. Provident maiores reprehenderit quo voluptates
						quos ipsum incidunt fugiat ut?
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import 'animate.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref } from 'vue';

const splideOptions = ref({
	rewind: true,
	autoplay: true,
	interval: 3000,
	pauseOnHover: true,
});
</script>
