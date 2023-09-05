import React from 'react';
import "../Components/Loader.css";

function Loader() {
  return (
    <div className="mainContainer">
        <div className="svgContainer">
        <main>
	<svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
				<stop offset="0%" stop-color="#5ebd3e" />
				<stop offset="33%" stop-color="#ffb900" />
				<stop offset="67%" stop-color="#f78200" />
				<stop offset="100%" stop-color="#e23838" />
			</linearGradient>
			<linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
				<stop offset="0%" stop-color="#e23838" />
				<stop offset="33%" stop-color="#973999" />
				<stop offset="67%" stop-color="#009cdf" />
				<stop offset="100%" stop-color="#5ebd3e" />
			</linearGradient>
		</defs>
		<g fill="none" stroke-linecap="round" stroke-width="16">
			<g class="ip__track" stroke="#ddd">
				<path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
				<path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
			</g>
			<g stroke-dasharray="180 656">
				<path class="ip__worm1" stroke="url(#grad1)" stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
				<path class="ip__worm2" stroke="url(#grad2)" stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
			</g>
		</g>
	</svg>
</main>
        </div>
        <div className="nameContainer">
        <h1 class="mb-8 text-2xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50"><span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-800 lg:inline">Pumpkin Patch</span></h1>
        </div>
    </div>
  )
}

export default Loader