// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'nuxt-swiper',
		'nuxt-lucide-icons',
		'nuxt-bootstrap-icons',
		'usebootstrap',
		'@vesp/nuxt-fontawesome',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Roboto: true,
					Poppins: true,
				},
			},
		],
	],
	css: ['./public/css/style.css', 'bootstrap/scss/bootstrap.scss', 'animate.css/animate.min.css'],
});
