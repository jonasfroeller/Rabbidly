<script>
	// @ts-nocheck
	export let active = 'account'

	import RegexPatterns from '$script/pattern'
	import ThemeSwitch from '$component/ThemeSwitcher.svelte'
	import LanguageSwitch from '$component/LocaleSwitcher.svelte'
	import { config } from '$store/styleConfig'
	$: language = $config.selectedLAN === 'de' ? 'Deutsch' : 'Englisch'
	$: colorTheme = $config.theme
</script>

<div id="settings-box" class="flex justify-between">
	<div id="settings-nav">
		<ul>
			<a href="./account" class="block w-fit">
				<li
					class={active == 'account'
						? 'active option-chip before:text-primary before:bg-primary'
						: 'option-chip before:text-secondary before:bg-secondary'}
				>
					<span class="icon mr-2"><!-- <Fa icon={faAddressCard} /> --></span>
					<!-- svelte-ignore a11y-invalid-attribute -->
					Account
				</li>
			</a>
			<a href="./payment" class="block w-fit">
				<li
					class={active == 'payment'
						? 'active option-chip before:text-primary before:bg-primary'
						: 'option-chip before:text-secondary before:bg-secondary'}
				>
					<span class="icon mr-2"><!-- <Fa icon={faWallet} /> --></span>
					Payment
				</li>
			</a>
			<a href="./style" class="block w-fit">
				<li
					class={active == 'style'
						? 'active option-chip before:text-primary before:bg-primary'
						: 'option-chip before:text-secondary before:bg-secondary'}
				>
					<span class="icon mr-2"><!-- <Fa icon={faPaintRoller} /> --></span>
					Style
				</li>
			</a>
		</ul>
	</div>
	<div class="verticalBorder" />
	<div id="settings-content">
		{#if active == 'style'}
			<div class="flex items-center m-4">
				<label
					for="color-theme"
					class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
				>
					Farbenstil:
				</label>
				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="text"
						id="color-theme"
						name="color-theme"
						class="block w-full pl-10 p-2.5 input"
						placeholder="color-theme"
						bind:value={colorTheme}
						title="color-theme"
					/>
					<button
						on:click={() => ($config.theme = 'night')}
						type="reset"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-r-lg border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						default
					</button>
				</div>
				<!-- Theme -->
				<div class="outline outline-2 outline-zinc-400 p-2 rounded-full scale-75">
					<ThemeSwitch />
				</div>
			</div>

			<div class="flex items-center m-4">
				<label
					for="color-theme"
					class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
				>
					Sprache:
				</label>
				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="text"
						id="language"
						name="language"
						class="text-sm block w-full pl-10 p-2.5 input"
						placeholder="language"
						bind:value={language}
						title="language"
					/>
					<button
						on:click={() => ($config.selectedLAN = 'en')}
						type="reset"
						class="block text-sm font-medium rounded-r-lg border p-2.5"
					>
						default
					</button>
				</div>
				<!-- Language -->
				<div class="outline outline-2 outline-zinc-400 p-2 rounded-full scale-75">
					<LanguageSwitch />
				</div>
			</div>
		{:else if active == 'payment'}
			<div class="flex items-center m-4">
				<label
					for="credit-card"
					class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
				>
					Kreditkarte:
				</label>
				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="text"
						id="credit-card"
						name="credit-card"
						class="cursor-not-allowed block w-full pl-10 p-2.5"
						placeholder="credit-card-number"
						pattern={RegexPatterns.cardPattern}
						title="credit-card (Allowed Characters: -., 0-9)"
					/>
				</div>
				<div
					class="cursor-pointer flex gap-2 text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-r-lg border-l-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
				>
					Edit <svg
						aria-hidden="true"
						class="w-4 h-4 "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						/>
					</svg>
				</div>
			</div>

			<div class="flex m-4 flex-col">
				<label
					for="country"
					class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-tl-lg rounded-tr-lg border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
				>
					Adresse:
				</label>
				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="text"
						id="country"
						name="country"
						class="cursor-not-allowed block w-full pl-10 p-2.5 input"
						placeholder="Land"
						pattern={RegexPatterns.textPattern}
						title="country (Allowed Characters: A-z)"
					/>
					<select
						disabled
						readonly
						id="country-select"
						name="country-select"
						class="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option value="AF">Afghanistan</option>
						<option value="AX">Åland Islands</option>
						<option value="AL">Albania</option>
						<option value="DZ">Algeria</option>
						<option value="AS">American Samoa</option>
						<option value="AD">Andorra</option>
						<option value="AO">Angola</option>
						<option value="AI">Anguilla</option>
						<option value="AQ">Antarctica</option>
						<option value="AG">Antigua and Barbuda</option>
						<option value="AR">Argentina</option>
						<option value="AM">Armenia</option>
						<option value="AW">Aruba</option>
						<option value="AU">Australia</option>
						<option value="AT">Austria</option>
						<option value="AZ">Azerbaijan</option>
						<option value="BS">Bahamas</option>
						<option value="BH">Bahrain</option>
						<option value="BD">Bangladesh</option>
						<option value="BB">Barbados</option>
						<option value="BY">Belarus</option>
						<option value="BE">Belgium</option>
						<option value="BZ">Belize</option>
						<option value="BJ">Benin</option>
						<option value="BM">Bermuda</option>
						<option value="BT">Bhutan</option>
						<option value="BO">Bolivia, Plurinational State of</option>
						<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
						<option value="BA">Bosnia and Herzegovina</option>
						<option value="BW">Botswana</option>
						<option value="BV">Bouvet Island</option>
						<option value="BR">Brazil</option>
						<option value="IO">British Indian Ocean Territory</option>
						<option value="BN">Brunei Darussalam</option>
						<option value="BG">Bulgaria</option>
						<option value="BF">Burkina Faso</option>
						<option value="BI">Burundi</option>
						<option value="KH">Cambodia</option>
						<option value="CM">Cameroon</option>
						<option value="CA">Canada</option>
						<option value="CV">Cape Verde</option>
						<option value="KY">Cayman Islands</option>
						<option value="CF">Central African Republic</option>
						<option value="TD">Chad</option>
						<option value="CL">Chile</option>
						<option value="CN">China</option>
						<option value="CX">Christmas Island</option>
						<option value="CC">Cocos (Keeling) Islands</option>
						<option value="CO">Colombia</option>
						<option value="KM">Comoros</option>
						<option value="CG">Congo</option>
						<option value="CD">Congo, the Democratic Republic of the</option>
						<option value="CK">Cook Islands</option>
						<option value="CR">Costa Rica</option>
						<option value="CI">Côte d'Ivoire</option>
						<option value="HR">Croatia</option>
						<option value="CU">Cuba</option>
						<option value="CW">Curaçao</option>
						<option value="CY">Cyprus</option>
						<option value="CZ">Czech Republic</option>
						<option value="DK">Denmark</option>
						<option value="DJ">Djibouti</option>
						<option value="DM">Dominica</option>
						<option value="DO">Dominican Republic</option>
						<option value="EC">Ecuador</option>
						<option value="EG">Egypt</option>
						<option value="SV">El Salvador</option>
						<option value="GQ">Equatorial Guinea</option>
						<option value="ER">Eritrea</option>
						<option value="EE">Estonia</option>
						<option value="ET">Ethiopia</option>
						<option value="FK">Falkland Islands (Malvinas)</option>
						<option value="FO">Faroe Islands</option>
						<option value="FJ">Fiji</option>
						<option value="FI">Finland</option>
						<option value="FR">France</option>
						<option value="GF">French Guiana</option>
						<option value="PF">French Polynesia</option>
						<option value="TF">French Southern Territories</option>
						<option value="GA">Gabon</option>
						<option value="GM">Gambia</option>
						<option value="GE">Georgia</option>
						<option value="DE">Germany</option>
						<option value="GH">Ghana</option>
						<option value="GI">Gibraltar</option>
						<option value="GR">Greece</option>
						<option value="GL">Greenland</option>
						<option value="GD">Grenada</option>
						<option value="GP">Guadeloupe</option>
						<option value="GU">Guam</option>
						<option value="GT">Guatemala</option>
						<option value="GG">Guernsey</option>
						<option value="GN">Guinea</option>
						<option value="GW">Guinea-Bissau</option>
						<option value="GY">Guyana</option>
						<option value="HT">Haiti</option>
						<option value="HM">Heard Island and McDonald Islands</option>
						<option value="VA">Holy See (Vatican City State)</option>
						<option value="HN">Honduras</option>
						<option value="HK">Hong Kong</option>
						<option value="HU">Hungary</option>
						<option value="IS">Iceland</option>
						<option value="IN">India</option>
						<option value="ID">Indonesia</option>
						<option value="IR">Iran, Islamic Republic of</option>
						<option value="IQ">Iraq</option>
						<option value="IE">Ireland</option>
						<option value="IM">Isle of Man</option>
						<option value="IL">Israel</option>
						<option value="IT">Italy</option>
						<option value="JM">Jamaica</option>
						<option value="JP">Japan</option>
						<option value="JE">Jersey</option>
						<option value="JO">Jordan</option>
						<option value="KZ">Kazakhstan</option>
						<option value="KE">Kenya</option>
						<option value="KI">Kiribati</option>
						<option value="KP">Korea, Democratic People's Republic of</option>
						<option value="KR">Korea, Republic of</option>
						<option value="KW">Kuwait</option>
						<option value="KG">Kyrgyzstan</option>
						<option value="LA">Lao People's Democratic Republic</option>
						<option value="LV">Latvia</option>
						<option value="LB">Lebanon</option>
						<option value="LS">Lesotho</option>
						<option value="LR">Liberia</option>
						<option value="LY">Libya</option>
						<option value="LI">Liechtenstein</option>
						<option value="LT">Lithuania</option>
						<option value="LU">Luxembourg</option>
						<option value="MO">Macao</option>
						<option value="MK">Macedonia, the former Yugoslav Republic of</option>
						<option value="MG">Madagascar</option>
						<option value="MW">Malawi</option>
						<option value="MY">Malaysia</option>
						<option value="MV">Maldives</option>
						<option value="ML">Mali</option>
						<option value="MT">Malta</option>
						<option value="MH">Marshall Islands</option>
						<option value="MQ">Martinique</option>
						<option value="MR">Mauritania</option>
						<option value="MU">Mauritius</option>
						<option value="YT">Mayotte</option>
						<option value="MX">Mexico</option>
						<option value="FM">Micronesia, Federated States of</option>
						<option value="MD">Moldova, Republic of</option>
						<option value="MC">Monaco</option>
						<option value="MN">Mongolia</option>
						<option value="ME">Montenegro</option>
						<option value="MS">Montserrat</option>
						<option value="MA">Morocco</option>
						<option value="MZ">Mozambique</option>
						<option value="MM">Myanmar</option>
						<option value="NA">Namibia</option>
						<option value="NR">Nauru</option>
						<option value="NP">Nepal</option>
						<option value="NL">Netherlands</option>
						<option value="NC">New Caledonia</option>
						<option value="NZ">New Zealand</option>
						<option value="NI">Nicaragua</option>
						<option value="NE">Niger</option>
						<option value="NG">Nigeria</option>
						<option value="NU">Niue</option>
						<option value="NF">Norfolk Island</option>
						<option value="MP">Northern Mariana Islands</option>
						<option value="NO">Norway</option>
						<option value="OM">Oman</option>
						<option value="PK">Pakistan</option>
						<option value="PW">Palau</option>
						<option value="PS">Palestinian Territory, Occupied</option>
						<option value="PA">Panama</option>
						<option value="PG">Papua New Guinea</option>
						<option value="PY">Paraguay</option>
						<option value="PE">Peru</option>
						<option value="PH">Philippines</option>
						<option value="PN">Pitcairn</option>
						<option value="PL">Poland</option>
						<option value="PT">Portugal</option>
						<option value="PR">Puerto Rico</option>
						<option value="QA">Qatar</option>
						<option value="RE">Réunion</option>
						<option value="RO">Romania</option>
						<option value="RU">Russian Federation</option>
						<option value="RW">Rwanda</option>
						<option value="BL">Saint Barthélemy</option>
						<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
						<option value="KN">Saint Kitts and Nevis</option>
						<option value="LC">Saint Lucia</option>
						<option value="MF">Saint Martin (French part)</option>
						<option value="PM">Saint Pierre and Miquelon</option>
						<option value="VC">Saint Vincent and the Grenadines</option>
						<option value="WS">Samoa</option>
						<option value="SM">San Marino</option>
						<option value="ST">Sao Tome and Principe</option>
						<option value="SA">Saudi Arabia</option>
						<option value="SN">Senegal</option>
						<option value="RS">Serbia</option>
						<option value="SC">Seychelles</option>
						<option value="SL">Sierra Leone</option>
						<option value="SG">Singapore</option>
						<option value="SX">Sint Maarten (Dutch part)</option>
						<option value="SK">Slovakia</option>
						<option value="SI">Slovenia</option>
						<option value="SB">Solomon Islands</option>
						<option value="SO">Somalia</option>
						<option value="ZA">South Africa</option>
						<option value="GS">South Georgia and the South Sandwich Islands</option>
						<option value="SS">South Sudan</option>
						<option value="ES">Spain</option>
						<option value="LK">Sri Lanka</option>
						<option value="SD">Sudan</option>
						<option value="SR">Suriname</option>
						<option value="SJ">Svalbard and Jan Mayen</option>
						<option value="SZ">Swaziland</option>
						<option value="SE">Sweden</option>
						<option value="CH">Switzerland</option>
						<option value="SY">Syrian Arab Republic</option>
						<option value="TW">Taiwan, Province of China</option>
						<option value="TJ">Tajikistan</option>
						<option value="TZ">Tanzania, United Republic of</option>
						<option value="TH">Thailand</option>
						<option value="TL">Timor-Leste</option>
						<option value="TG">Togo</option>
						<option value="TK">Tokelau</option>
						<option value="TO">Tonga</option>
						<option value="TT">Trinidad and Tobago</option>
						<option value="TN">Tunisia</option>
						<option value="TR">Turkey</option>
						<option value="TM">Turkmenistan</option>
						<option value="TC">Turks and Caicos Islands</option>
						<option value="TV">Tuvalu</option>
						<option value="UG">Uganda</option>
						<option value="UA">Ukraine</option>
						<option value="AE">United Arab Emirates</option>
						<option value="GB">United Kingdom</option>
						<option value="US">United States</option>
						<option value="UM">United States Minor Outlying Islands</option>
						<option value="UY">Uruguay</option>
						<option value="UZ">Uzbekistan</option>
						<option value="VU">Vanuatu</option>
						<option value="VE">Venezuela, Bolivarian Republic of</option>
						<option value="VN">Viet Nam</option>
						<option value="VG">Virgin Islands, British</option>
						<option value="VI">Virgin Islands, U.S.</option>
						<option value="WF">Wallis and Futuna</option>
						<option value="EH">Western Sahara</option>
						<option value="YE">Yemen</option>
						<option value="ZM">Zambia</option>
						<option value="ZW">Zimbabwe</option>
					</select>
				</div>

				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="text"
						id="city"
						name="city"
						class="cursor-not-allowed block w-full pl-10 p-2.5 input"
						placeholder="Stadt"
						pattern={RegexPatterns.textPattern}
						title="city (Allowed Characters: A-z)"
					/>
				</div>

				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="text"
						id="street"
						name="street"
						class="cursor-not-allowed block w-full pl-10 p-2.5 input"
						placeholder="Straße (+Hausnummer)"
						pattern={RegexPatterns.textPattern}
						title="street (Allowed Characters: A-z)"
					/>
				</div>

				<div class="relative flex items-center">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<input
						disabled
						readonly
						type="number"
						id="zipCode"
						name="zipCode"
						class="cursor-not-allowed w-full pl-10 p-2.5 input"
						placeholder="Postleitzahl"
						pattern={RegexPatterns.numberPattern}
						title="zipCode (Allowed Characters: 0-9)"
					/>
				</div>

				<div
					class="cursor-pointer flex gap-2 text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-bl-lg rounded-br-lg border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
				>
					Edit <svg
						aria-hidden="true"
						class="w-4 h-4 "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						/>
					</svg>
				</div>
			</div>
		{:else}
			<div>
				<div class="flex items-center m-4">
					<label
						for="username"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Username:
					</label>
					<div class="relative flex items-center">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								class="w-5 h-5 "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="username"
							name="username"
							class="border text-sm rounded-r-lg block w-full pl-10 p-2.5 input"
							placeholder="username"
							pattern={RegexPatterns.usernamePattern}
							title="username (Allowed Characters: A-z 0-9)"
						/>
					</div>
				</div>

				<div class="flex items-center m-4">
					<label
						for="firstName"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Vorname:
					</label>
					<div class="relative flex items-center">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								class="w-5 h-5 "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<input
							required
							type="text"
							id="firstName"
							name="firstName"
							class="border text-sm rounded-r-lg block w-full pl-10 p-2.5 input"
							placeholder="vorname"
							pattern={RegexPatterns.textPattern}
							title="firstName (Allowed Characters: A-z)"
						/>
					</div>
				</div>

				<div class="flex items-center m-4">
					<label
						for="lastName"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Nachname:
					</label>
					<div class="relative flex items-center">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								class="w-5 h-5 "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<input
							required
							type="text"
							id="lastName"
							name="lastName"
							class="border text-sm rounded-r-lg block w-full pl-10 p-2.5 input"
							placeholder="nachname"
							pattern={RegexPatterns.textPattern}
							title="lastName (Allowed Characters: A-z)"
						/>
					</div>
				</div>

				<div class="flex items-center m-4">
					<label
						for="email"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Email:
					</label>
					<div class="relative flex items-center">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								class="w-5 h-5 "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<input
							required
							type="email"
							id="email"
							name="email"
							class="border text-sm rounded-r-lg block w-full pl-10 p-2.5 input"
							placeholder="name@company.com"
							pattern={RegexPatterns.emailPattern}
							title="name@company.com (Allowed Characters: -_. A-z 0-9)"
						/>
					</div>
				</div>

				<div class="flex items-center m-4">
					<label
						for="phoneNumber"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Telefonnummer:
					</label>
					<div class="relative flex items-center">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								class="w-5 h-5 "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							class="border text-sm rounded-r-lg block w-full pl-10 p-2.5 input"
							placeholder="+000000000000"
							pattern={RegexPatterns.phoneNumberPattern}
							title="+000000000000 (Allowed Digits: 0-9)"
						/>
					</div>
				</div>

				<div class="flex items-center m-4">
					<label
						for="password"
						class="block text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-l-lg border-r-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Passwort:
					</label>
					<div class="relative flex items-center">
						<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								class="w-5 h-5 "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
						</div>
						<input
							required
							disabled
							readonly
							type="password"
							id="password"
							name="password"
							class="cursor-not-allowed w-full pl-10 p-2.5 input"
							placeholder="••••••••"
							pattern={RegexPatterns.passwordPattern}
							title="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (allowed special characters: !@#$%^&*)"
						/>
					</div>
					<div
						class="cursor-pointer flex gap-2 text-sm font-medium text-gray-900 dark:text-white h-full bg-gray-200 dark:bg-gray-600 border-gray-300 rounded-r-lg border-l-0 border p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
					>
						Edit <svg
							aria-hidden="true"
							class="w-4 h-4 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div class="m-4 text-gray-400 dark:text-white text-sm">
				<div>{'ID: 2371845761'}</div>
				<div>{'Erstellungsdatum: 19.6.2022'}</div>
			</div>
		{/if}
	</div>
</div>

<!-- Icons: https://heroicons.dev/ -->
<style>
	#settings-box {
		outline: 2px solid #e5e7eb;
		border-radius: 1rem;
		min-height: 33rem;
		width: 100%;
	}

	#settings-nav {
		padding: 0.5rem;
		min-width: 33%;
	}

	.option-chip {
		display: flex;
		align-items: center;
		width: fit-content;
		outline: 2px solid #e5e7eb;
		border-radius: 7.5vh;
		margin: 1rem;
		padding-right: 1rem;
		font-size: 1.5rem;
	}

	.option-chip.active::before {
		width: 2rem;
		padding: 1rem;
		margin-right: 0.5rem;
		height: 3rem;
		content: 'a';
		border-top-left-radius: 7.5vh;
		border-bottom-left-radius: 7.5vh;
	}

	.option-chip::before {
		width: 2rem;
		padding: 1rem;
		margin-right: 0.5rem;
		height: 3rem;
		content: 'n';
		border-top-left-radius: 7.5vh;
		border-bottom-left-radius: 7.5vh;
	}

	:global().verticalBorder {
		outline: 1px solid #e5e7eb;
		max-width: 1px;
	}

	#settings-content {
		min-width: 33%;
		width: 66%;
		padding: 0.5rem;
	}
</style>
