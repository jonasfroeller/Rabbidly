<script>
	// @ts-nocheck
	export let hasAccount

	import RegexPatterns from '$script/pattern'
</script>

{#if hasAccount}
	<!-- Main modal -->
	<div
		id="authentication-modal"
		tabindex="-1"
		aria-hidden="true"
		class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
	>
		<!-- fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -->
		<div class="relative w-full h-full max-w-md md:h-auto m-auto">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<button
					type="button"
					class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					data-modal-toggle="authentication-modal"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
				<div class="px-6 py-6 lg:px-8">
					<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						Sign in your rabbidly account
					</h3>
					<form class="space-y-6" action="#">
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<input
								required
								type="email"
								name="email"
								id="email"
								placeholder="name@company.com"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.emailPattern}
								title="name@company.com (Allowed Characters: -_. A-z 0-9)"
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your password
							</label>
							<input
								required
								current-password
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.passwordPattern}
								title="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (allowed special characters: !@#$%^&*)"
							/>
						</div>
						<div class="flex justify-between">
							<div class="flex items-start">
								<div class="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
									/>
								</div>
								<label
									for="remember"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Remember me
								</label>
							</div>
							<a href="/" class="text-sm text-blue-700 hover:underline dark:text-blue-500">
								Forgot your password?
							</a>
						</div>
						<button
							type="submit"
							class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Login to your account
						</button>
						<!-- Create Account -->
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <a
								href="/"
								class="text-blue-700 hover:underline dark:text-blue-500"
							>
								Create account
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
{:else}
	<!-- Main modal -->
	<div
		id="authentication-modal"
		tabindex="-1"
		aria-hidden="true"
		class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
	>
		<div class="relative w-full h-full max-w-md md:h-auto m-auto">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<button
					type="button"
					class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					data-modal-toggle="authentication-modal"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
				<div class="px-6 py-6 lg:px-8">
					<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						Sign up your new rabbidly account
					</h3>
					<form class="space-y-6" action="#">
						<div>
							<label
								for="username"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your username
							</label>
							<input
								type="text"
								name="username"
								id="username"
								placeholder="username"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.usernamePattern}
								title="username (Allowed Characters: A-z 0-9)"
							/>
						</div>
						<div>
							<label
								for="firstName"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your first name <span class="text-red-600">*</span>
							</label>
							<input
								required
								type="text"
								name="firstName"
								id="firstName"
								placeholder="last name"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.textPattern}
								title="firstName (Allowed Characters: A-z)"
							/>
						</div>
						<div>
							<label
								for="lastName"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your last name <span class="text-red-600">*</span>
							</label>
							<input
								required
								type="text"
								name="lastName"
								id="lastName"
								placeholder="first name"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.textPattern}
								title="lastName (Allowed Characters: A-z)"
							/>
						</div>
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email <span class="text-red-600">*</span>
							</label>
							<input
								required
								type="email"
								name="email"
								id="email"
								placeholder="name@company.com"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.emailPattern}
								title="name@company.com (Allowed Characters: -_. A-z 0-9)"
							/>
						</div>
						<div>
							<label
								for="phoneNumber"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your phone number
							</label>
							<input
								type="tel"
								name="phoneNumber"
								id="phoneNumber"
								placeholder="+000000000000"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.phoneNumberPattern}
								title="+000000000000 (Allowed Digits: 0-9)"
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your password <span class="text-red-600">*</span>
							</label>
							<input
								required
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								pattern={RegexPatterns.passwordPattern}
								title="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (allowed special characters: !@#$%^&*)"
							/>
						</div>
						<div class="flex justify-between">
							<div class="flex items-start">
								<div class="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
									/>
								</div>
								<label
									for="remember"
									class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Remember me
								</label>
							</div>
							<a href="/" class="text-sm text-blue-700 hover:underline dark:text-blue-500">
								Forgot your password?
							</a>
						</div>
						<button
							type="submit"
							class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Login to your account
						</button>
						<!-- Create Account -->
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <a
								href="/"
								class="text-blue-700 hover:underline dark:text-blue-500"
							>
								Create account
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}
