<template>
	<Navbar expand="lg" theme="light">
		<Container>
			<NavLink to="/">
				<img class="logo" src="../public/img/mecsanLogo2-removebg-preview.png" alt="" />
			</NavLink>
			<NavbarToggler />
			<NavbarCollapse>
				<NavbarNav>
					<NavLink to="/" active>Inicio</NavLink>
					<NavItemDropdown>
						<NavItemDropdownToggle>Productos</NavItemDropdownToggle>
						<DropdownMenu>
							<DropdownItem to="/productos/flujo">Flujo <img class="imagen-menu" src="../public/img/productos/Flujo/Flujometro electromagnetico.jpg" alt=""></DropdownItem>
							<DropdownItem to="/productos/nivel">Nivel</DropdownItem>
							<DropdownItem to="/productos/presion">Presion</DropdownItem>
							<DropdownItem to="/productos/temperatura">Temperatura</DropdownItem>
							<DropdownItem to="/productos/valvulas">Valvulas</DropdownItem>
						</DropdownMenu>
					</NavItemDropdown>
					<NavLink to="/empresa">Sobre nosotros</NavLink>
					<NavLink to="/contacto">Contactanos<span class="emoji">👈</span></NavLink>
				</NavbarNav>
			</NavbarCollapse>
		</Container>
	</Navbar>
</template>
