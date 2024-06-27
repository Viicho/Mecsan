<template>
	<Swiper
		:modules="[SwiperAutoplay, SwiperEffectCreative]"
		:slides-per-view="1"
		:loop="true"
		:effect="'creative'"
		:autoplay="{
			delay: 3000,
			disableOnInteraction: true,
		}"
		:creative-effect="{
			prev: {
				shadow: false,
				translate: ['-20%', 0, -1],
			},
			next: {
				translate: ['100%', 0, 0],
			},
		}"
	>
		<SwiperSlide>
			<div>
				<img src="../public/img/productos/Presion/Manómetro inferior 2 12.jpg" alt="" />
				<span class="animate__animated animate__bounce">Titulo</span>
				<button class="animate__animated animate__bounce">Ver</button>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div>
				<img src="../public/img/productos/Temperatura/Termometro tipo maquina.png" alt="" />
				<span class="animate__animated animate__bounce">TItulo</span>
				<button class="animate__animated animate__bounce">Ver mas</button>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div>
				<img src="../public/img/productos/Valvulas/Válvula alivio bronce.jpg" alt="" />
				<span class="animate__animated animate__bounce">Titulo</span>
				<button class="animate__animated animate__bounce">Ver mas</button>
			</div>
		</SwiperSlide>
	</Swiper>
</template>




<style>
.swiper {
	height: 400px;
}

.swiper-slide > div {
	height: 100% !important;
}

.swiper-slide-next {
	visibility: hidden;
}

.swiper-slide-prev {
	visibility: hidden;
}

.animate__animated.animate__bounce {
	--animate-duration: 2s;
}
</style>
