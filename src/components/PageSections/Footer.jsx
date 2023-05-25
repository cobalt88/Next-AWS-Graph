import Link from "next/link";

const navigation = {
	main: [
		{ name: "Resume", href: "#" },
		{ name: "About", href: "#" },
		{ name: "Projects", href: "#" },
		{ name: "Shop", href: "#" },
	],
	social: [
		{
			name: "LinkedIn",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" id="linkedin" {...props}>
					<path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
				</svg>
			),
		},
		{
			name: "Instagram",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" id="instagram" {...props}>
					<path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
				</svg>
			),
		},
		{
			name: "GitHub",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "Thingiverse",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fill="#272a33"
						d="M187.759 203.142a62.467 62.467 0 0 0 23.056-85.558 63.139 63.139 0 0 0-85.914-22.89 62.466 62.466 0 0 0-23.056 85.558 63.128 63.128 0 0 0 85.914 22.89Zm-72.94-30.419a47.466 47.466 0 0 1 17.553-65.021 48.109 48.109 0 0 1 65.47 17.411 47.467 47.467 0 0 1-17.554 65.022 48.11 48.11 0 0 1-65.47-17.412Zm24.365 97.57a123.643 123.643 0 0 0 34.254.007 2.419 2.419 0 0 1 2.204.947l15.592 19.865a17.593 17.593 0 0 0 22.482 4.37l41.38-23.769a17.565 17.565 0 0 0 7.496-21.763l-9.443-23.233a2.42 2.42 0 0 1 .286-2.4 122.323 122.323 0 0 0 17.073-29.444 2.427 2.427 0 0 1 1.931-1.446l25.126-3.51a17.576 17.576 0 0 0 15.079-17.327l.013-47.415a17.572 17.572 0 0 0-15.088-17.338l-25.1-3.493a2.427 2.427 0 0 1-1.932-1.446 123.238 123.238 0 0 0-7.514-15.301 123.515 123.515 0 0 0-9.542-14.098 2.429 2.429 0 0 1-.294-2.41l9.462-23.255a17.562 17.562 0 0 0-7.498-21.772l-41.356-23.74a17.596 17.596 0 0 0-22.476 4.372L175.689 26.6a2.425 2.425 0 0 1-2.213.943 123.64 123.64 0 0 0-34.254-.007 2.416 2.416 0 0 1-2.203-.947L121.426 6.724a17.595 17.595 0 0 0-22.482-4.369l-41.38 23.768a17.564 17.564 0 0 0-7.496 21.764L59.51 71.12a2.416 2.416 0 0 1-.285 2.4 122.323 122.323 0 0 0-17.073 29.443 2.427 2.427 0 0 1-1.931 1.447l-25.126 3.51A17.576 17.576 0 0 0 .016 125.247l-.014 47.415a17.572 17.572 0 0 0 15.089 17.337l25.1 3.493a2.428 2.428 0 0 1 1.932 1.447 123.107 123.107 0 0 0 17.056 29.4 2.427 2.427 0 0 1 .294 2.409L50.011 250a17.56 17.56 0 0 0 7.498 21.773l41.356 23.739a17.352 17.352 0 0 0 8.657 2.298 17.564 17.564 0 0 0 13.82-6.668l15.628-19.906a2.417 2.417 0 0 1 2.214-.944Zm-14.012-8.32-15.629 19.906a2.514 2.514 0 0 1-3.211.625l-41.356-23.738a2.51 2.51 0 0 1-1.071-3.111l9.462-23.255a17.461 17.461 0 0 0-2.377-17.31 108.068 108.068 0 0 1-14.976-25.812 17.469 17.469 0 0 0-13.756-10.642l-25.1-3.493a2.51 2.51 0 0 1-2.156-2.477l.014-47.415a2.511 2.511 0 0 1 2.154-2.476l25.127-3.51a17.468 17.468 0 0 0 13.75-10.654 107.33 107.33 0 0 1 14.98-25.834 17.447 17.447 0 0 0 2.38-17.305L63.964 42.24a2.51 2.51 0 0 1 1.071-3.11l41.38-23.767a2.48 2.48 0 0 1 1.237-.328 2.508 2.508 0 0 1 1.975.952l15.592 19.865a17.453 17.453 0 0 0 16.079 6.54 108.62 108.62 0 0 1 30.1.007 17.472 17.472 0 0 0 16.09-6.535l15.629-19.906a2.514 2.514 0 0 1 3.21-.625l41.357 23.74a2.51 2.51 0 0 1 1.071 3.11l-9.462 23.254a17.462 17.462 0 0 0 2.377 17.31 108.034 108.034 0 0 1 14.976 25.813 17.469 17.469 0 0 0 13.755 10.642l25.101 3.493a2.51 2.51 0 0 1 2.155 2.476l-.013 47.415a2.511 2.511 0 0 1-2.154 2.476l-25.127 3.51a17.468 17.468 0 0 0-13.751 10.654 107.337 107.337 0 0 1-14.98 25.835 17.45 17.45 0 0 0-2.38 17.304l9.443 23.233a2.51 2.51 0 0 1-1.07 3.11l-41.38 23.767a2.515 2.515 0 0 1-3.212-.624l-15.592-19.864a17.452 17.452 0 0 0-16.079-6.541 108.692 108.692 0 0 1-30.1-.007 17.47 17.47 0 0 0-16.09 6.536Zm121.22 130.673v-.001a32.094 32.094 0 1 0-21.102 56.317q1.139 0 2.287-.08a32.093 32.093 0 0 0 18.816-56.236Zm-8.154 35.435a17.093 17.093 0 1 1-14.093-28.266q.612-.043 1.218-.043a16.967 16.967 0 0 1 11.189 4.194 17.113 17.113 0 0 1 1.686 24.115Zm142.891-201.055a42.597 42.597 0 0 0-15.716 58.343 43.022 43.022 0 0 0 58.553 15.605 42.597 42.597 0 0 0 15.717-58.343 43.033 43.033 0 0 0-58.554-15.605Zm48.364 44.076a27.558 27.558 0 0 1-12.998 16.865 28.002 28.002 0 0 1-38.108-10.128 27.597 27.597 0 0 1 10.214-37.806 28.003 28.003 0 0 1 38.108 10.128 27.338 27.338 0 0 1 2.784 20.94Zm67.416-37.961-12.708-1.768a2.515 2.515 0 0 1-1.96-1.523 86.886 86.886 0 0 0-4.563-9.042 87.032 87.032 0 0 0-5.57-8.427 2.516 2.516 0 0 1-.345-2.47l4.767-11.716a17.56 17.56 0 0 0-7.498-21.773l-23.58-13.535a17.593 17.593 0 0 0-22.476 4.37l-7.923 10.09a2.444 2.444 0 0 1-2.17.944 87.209 87.209 0 0 0-20.528-.02 2.502 2.502 0 0 1-2.278-.93l-7.898-10.062a17.592 17.592 0 0 0-22.482-4.37L336.1 176.465a17.565 17.565 0 0 0-7.496 21.764l4.756 11.703a2.503 2.503 0 0 1-.339 2.46 86.276 86.276 0 0 0-10.149 17.506 2.512 2.512 0 0 1-1.958 1.521l-12.73 1.778a17.577 17.577 0 0 0-15.077 17.327l-.008 26.999a17.573 17.573 0 0 0 15.088 17.337l12.708 1.768a2.515 2.515 0 0 1 1.96 1.522 86.725 86.725 0 0 0 10.133 17.47 2.515 2.515 0 0 1 .345 2.471l-4.766 11.715a17.56 17.56 0 0 0 7.498 21.773l23.58 13.535a17.355 17.355 0 0 0 8.657 2.299 17.564 17.564 0 0 0 13.82-6.669l7.922-10.09a2.425 2.425 0 0 1 2.17-.943 87.109 87.109 0 0 0 20.528.019 2.508 2.508 0 0 1 2.278.929l7.898 10.063a17.595 17.595 0 0 0 22.481 4.37l23.6-13.555a17.564 17.564 0 0 0 7.495-21.764l-4.757-11.703a2.504 2.504 0 0 1 .339-2.46 86.245 86.245 0 0 0 10.15-17.506 2.512 2.512 0 0 1 1.957-1.521l12.73-1.778a17.577 17.577 0 0 0 15.078-17.327l.008-26.999a17.573 17.573 0 0 0-15.089-17.337Zm.08 44.332a2.512 2.512 0 0 1-2.153 2.475l-12.728 1.778a17.634 17.634 0 0 0-13.654 10.428 71.258 71.258 0 0 1-8.383 14.46 17.616 17.616 0 0 0-2.231 17.102l4.757 11.704a2.51 2.51 0 0 1-1.071 3.109l-23.598 13.554a2.515 2.515 0 0 1-3.212-.624l-7.898-10.063a17.616 17.616 0 0 0-15.834-6.564 72.129 72.129 0 0 1-16.991-.017 17.509 17.509 0 0 0-15.748 6.575l-7.923 10.09a2.514 2.514 0 0 1-3.211.624l-23.58-13.535a2.51 2.51 0 0 1-1.072-3.11l4.767-11.715a17.627 17.627 0 0 0-2.229-17.112 71.69 71.69 0 0 1-8.379-14.445 17.636 17.636 0 0 0-13.657-10.416l-12.708-1.768a2.51 2.51 0 0 1-2.155-2.477l.008-27a2.512 2.512 0 0 1 2.154-2.474l12.727-1.778a17.632 17.632 0 0 0 13.654-10.428 71.272 71.272 0 0 1 8.382-14.459 17.615 17.615 0 0 0 2.232-17.103L342.5 192.58a2.51 2.51 0 0 1 1.07-3.11l23.599-13.554a2.483 2.483 0 0 1 1.237-.33 2.508 2.508 0 0 1 1.974.954l7.899 10.063a17.618 17.618 0 0 0 15.834 6.564 72.124 72.124 0 0 1 16.99.017 17.516 17.516 0 0 0 15.75-6.575l7.921-10.09a2.513 2.513 0 0 1 3.211-.624l23.581 13.535a2.509 2.509 0 0 1 1.071 3.11l-4.767 11.716a17.627 17.627 0 0 0 2.23 17.111 71.688 71.688 0 0 1 8.379 14.444 17.636 17.636 0 0 0 13.656 10.417l12.708 1.768a2.51 2.51 0 0 1 2.156 2.477ZM309.457 372.77a12.857 12.857 0 0 0-14.549-8.397l-13.927 2.712a75.07 75.07 0 0 0-14.088-12.247l.747-14.17a12.855 12.855 0 0 0-10.34-13.237l-28.093-5.46a12.86 12.86 0 0 0-14.545 8.4l-4.616 13.419a74.545 74.545 0 0 0-17.66 6.07l-11.886-7.726a12.857 12.857 0 0 0-16.634 2.335l-18.776 21.6a12.855 12.855 0 0 0 .002 16.797l9.305 10.697a74.513 74.513 0 0 0-3.553 18.333l-12.646 6.437a12.855 12.855 0 0 0-6.295 15.573l9.318 27.06a12.858 12.858 0 0 0 14.548 8.397l13.927-2.713a75.07 75.07 0 0 0 14.089 12.247l-.748 14.17a12.857 12.857 0 0 0 10.34 13.238l28.093 5.46a12.66 12.66 0 0 0 2.418.233 12.87 12.87 0 0 0 12.128-8.634l4.615-13.419a74.544 74.544 0 0 0 17.66-6.07l11.887 7.726a12.853 12.853 0 0 0 16.634-2.335l18.775-21.6a12.855 12.855 0 0 0-.002-16.797l-9.305-10.696a74.56 74.56 0 0 0 3.553-18.333l12.646-6.438a12.855 12.855 0 0 0 6.295-15.572Zm-17.565 36.28a12.82 12.82 0 0 0-6.967 10.773 59.548 59.548 0 0 1-3.227 16.648 12.817 12.817 0 0 0 2.43 12.587l8.884 10.212-16.265 18.711-11.35-7.376a12.816 12.816 0 0 0-12.802-.654 59.563 59.563 0 0 1-16.035 5.512 12.816 12.816 0 0 0-9.7 8.4l-4.406 12.812-24.337-4.73.714-13.528a12.82 12.82 0 0 0-5.831-11.41 60.088 60.088 0 0 1-12.81-11.136 12.82 12.82 0 0 0-12.114-4.187l-13.295 2.59-8.072-23.442 12.075-6.147a12.818 12.818 0 0 0 6.968-10.773 59.53 59.53 0 0 1 3.227-16.648 12.815 12.815 0 0 0-2.43-12.586l-8.884-10.212 16.266-18.712 11.349 7.376a12.812 12.812 0 0 0 12.802.654 59.57 59.57 0 0 1 16.038-5.512 12.817 12.817 0 0 0 9.697-8.4l4.407-12.812 24.336 4.73-.714 13.528a12.82 12.82 0 0 0 5.832 11.411 60.298 60.298 0 0 1 6.8 5.113 60.156 60.156 0 0 1 6.01 6.023 12.823 12.823 0 0 0 12.113 4.186l13.295-2.589 8.072 23.441Z"
					></path>
				</svg>
			),
		},
	],
};

export default function Footer(props) {
	return (
		<footer className="bg-white">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<nav
					className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
					aria-label="Footer"
				>
					{navigation.main.map((item) => (
						<div key={item.name} className="pb-6">
							<Link
								href={item.href}
								className="text-sm leading-6 text-gray-600 hover:text-gray-900"
							>
								{item.name}
							</Link>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{navigation.social.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</Link>
					))}
				</div>
				<p className="mt-10 text-center text-xs leading-5 text-gray-500">
					&copy; {new Date().getFullYear()} Vincent Teune. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
