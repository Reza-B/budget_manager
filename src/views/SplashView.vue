<template>
	<div class="flex flex-col min-h-[100vh] justify-between py-16 items-center">
		<img
			class="w-[340px]"
			src="../assets/images/splash.png"
			alt="Splash Image" />
		<div>
			<h1 class="text-center text-4xl font-black">
				TAKE <span class="text-[#E57D57]">CONTROL</span><br />OF YOUR
				<span class="text-[#87AEEE]">FINANCES</span>
			</h1>
			<h6 class="text-[#858585] text-center text-lg font-normal mt-2">
				Effortlessly budget, save, and spend <br />wisely with our all-in-one
				app
			</h6>
		</div>
		<RouterLink
			class="py-4 px-8 w-fit rounded-[50px] font-bold text-xl bg-black text-white"
			to="/home">
			Get Started
		</RouterLink>
	</div>
</template>

<script setup></script>

<style></style>
