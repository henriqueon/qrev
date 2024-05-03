const timezoneList = {
  CEST: 'Europe/Berlin',
  CET: 'Europe/Berlin',
  AST: 'America/Halifax',
  WAT: 'Africa/Lagos',
  NZST: 'Pacific/Auckland',
  NZDT: 'Pacific/Auckland',
  SST: 'Pacific/Pago_Pago',
  AEST: 'Australia/Hobart',
  AEDT: 'Australia/Hobart',
  ACST: 'Australia/Broken_Hill',
  ACDT: 'Australia/Broken_Hill',
  AWST: 'Australia/Perth',
  EEST: 'Europe/Uzhgorod',
  EET: 'Europe/Kaliningrad',
  GMT: 'America/Danmarkshavn',
  CAT: 'Africa/Maputo',
  ADT: 'America/Halifax',
  EDT: 'America/Indiana/Vevay',
  EST: 'America/Indiana/Indianapolis',
  CST: 'America/Chicago',
  NDT: 'America/St_Johns',
  NST: 'America/St_Johns',
  CDT: 'America/North_Dakota/Center',
  MDT: 'America/Denver',
  MST: 'America/Denver',
  PDT: 'America/Los_Angeles',
  PST: 'America/Los_Angeles',
  EAT: 'Africa/Nairobi',
  WEST: 'Atlantic/Canary',
  WET: 'Atlantic/Canary',
  BST: 'Europe/London',
  HKT: 'Asia/Hong_Kong',
  WIB: 'Asia/Jakarta',
  WITA: 'Asia/Makassar',
  WIT: 'Asia/Jayapura',
  IST: 'Asia/Kolkata',
  IDT: 'Asia/Jerusalem',
  JST: 'Asia/Tokyo',
  KST: 'Asia/Seoul',
  SAST: 'Africa/Johannesburg',
  PKT: 'Asia/Karachi',
  MSK: 'Europe/Moscow',
  HST: 'Pacific/Honolulu',
  AKDT: 'America/Anchorage',
  AKST: 'America/Anchorage',
  HDT: 'Pacific/Honolulu',
  ET: 'America/Indiana/Indianapolis',
  PT: 'America/Los_Angeles',
  'South Africa': 'Africa/Johannesburg',
  SGT: 'Asia/Singapore',
  UTC: 'UTC',
  NY: 'America/Indiana/Indianapolis',
  NYC: 'America/Indiana/Indianapolis',
  UK: 'Europe/London',
  Alabama: 'America/Chicago',
  Alaska: 'America/Anchorage',
  Arizona: 'America/Denver',
  Arkansas: 'America/Chicago',
  Atlanta: 'America/Indiana/Indianapolis',
  Colorado: 'America/Denver',
  Connecticut: 'America/Indiana/Indianapolis',
  Delaware: 'America/Indiana/Indianapolis',
  Florida: 'America/Indiana/Indianapolis',
  Georgia: 'Asia/Tbilisi',
  Hawaii: 'Pacific/Honolulu',
  Idaho: 'America/Denver',
  Illinois: 'America/Chicago',
  Indiana: 'America/Indiana/Indianapolis',
  Iowa: 'America/Chicago',
  Kansas: 'America/Chicago',
  Kentucky: 'America/Chicago',
  Louisiana: 'America/Chicago',
  Maine: 'America/Indiana/Indianapolis',
  Maryland: 'America/Indiana/Indianapolis',
  Massachusetts: 'America/Indiana/Indianapolis',
  Michigan: 'America/Indiana/Indianapolis',
  Mississippi: 'America/Chicago',
  Montana: 'America/Denver',
  Nebraska: 'America/Chicago',
  Nevada: 'America/Los_Angeles',
  'New Hampshire': 'America/Indiana/Indianapolis',
  'New Jersey': 'America/Indiana/Indianapolis',
  'New Mexico': 'America/Denver',
  'New Orleans': 'America/Chicago',
  'New York': 'America/Indiana/Indianapolis',
  'North Carolina': 'America/Indiana/Indianapolis',
  'North Dakota': 'America/Chicago',
  Ohio: 'America/Indiana/Indianapolis',
  Oklahoma: 'America/Chicago',
  Oregon: 'America/Los_Angeles',
  Pennsylvania: 'America/Indiana/Indianapolis',
  'Rhode Island': 'America/Indiana/Indianapolis',
  'South Carolina': 'America/Indiana/Indianapolis',
  'South Dakota': 'America/Chicago',
  Texas: 'America/Chicago',
  Utah: 'America/Denver',
  Vermont: 'America/Indiana/Indianapolis',
  Virginia: 'America/Indiana/Indianapolis',
  Washington: 'America/Los_Angeles',
  'Washington DC': 'America/Indiana/Indianapolis',
  'West Virginia': 'America/Indiana/Indianapolis',
  Wisconsin: 'America/Chicago',
  Wyoming: 'America/Denver',
  'San Francisco': 'America/Los_Angeles',
  'San Diego': 'America/Los_Angeles',
  Sacramento: 'America/Los_Angeles',
  Boston: 'America/Indiana/Indianapolis',
  Philadelphia: 'America/Indiana/Indianapolis',
  Houston: 'America/Chicago',
  Dallas: 'America/Chicago',
  'San Antonio': 'America/Chicago',
  Austin: 'America/Chicago',
  Shanghai: 'Asia/Shanghai',
  Beijing: 'Asia/Shanghai',
  Dalian: 'Asia/Shanghai',
  Karachi: 'Asia/Karachi',
  Shenzhen: 'Asia/Shanghai',
  Guangzhou: 'Asia/Shanghai',
  Mumbai: 'Asia/Kolkata',
  Moscow: 'Europe/Moscow',
  Kinshasa: 'Africa/Kinshasa',
  Tianjin: 'Asia/Shanghai',
  Lahore: 'Asia/Karachi',
  Delhi: 'Asia/Kolkata',
  Jakarta: 'Asia/Jakarta',
  Dongguan: 'Asia/Shanghai',
  Lagos: 'Africa/Lagos',
  Seoul: 'Asia/Seoul',
  Foshan: 'Asia/Shanghai',
  Tokyo: 'Asia/Tokyo',
  Chengdu: 'Asia/Shanghai',
  'Mexico City': 'America/Mexico_City',
  London: 'Europe/London',
  Birmingham: 'Europe/London',
  Manchester: 'Europe/London',
  Dhaka: 'Asia/Dhaka',
  Wuhan: 'Asia/Shanghai',
  Cairo: 'Africa/Cairo',
  Hyderabad: 'Asia/Kolkata',
  'Hong Kong': 'Asia/Hong_Kong',
  Nanjing: 'Asia/Shanghai',
  Chongqing: 'Asia/Shanghai',
  Changsha: 'Asia/Shanghai',
  Hangzhou: 'Asia/Shanghai',
  Ahmedabad: 'Asia/Kolkata',
  Baghdad: 'Asia/Baghdad',
  Chennai: 'Asia/Kolkata',
  Riyadh: 'Asia/Riyadh',
  'Rio de Janeiro': 'America/Sao_Paulo',
  Shenyang: 'Asia/Shanghai',
  "Xi'an": 'Asia/Shanghai',
  Suzhou: 'Asia/Shanghai',
  Surat: 'Asia/Kolkata',
  Shantou: 'Asia/Shanghai',
  Harbin: 'Asia/Shanghai',
  'Dar es Salaam': 'Africa/Dar_es_Salaam',
  'Tel Aviv': 'Asia/Jerusalem',
  Jerusalem: 'Asia/Jerusalem',
  Kolkata: 'Asia/Kolkata',
  Calcutta: 'Asia/Kolkata',
  Bangalore: 'Asia/Kolkata',
  Andorra: 'Europe/Andorra',
  'United Arab Emirates': 'Asia/Dubai',
  Afghanistan: 'Asia/Kabul',
  'Antigua & Barbuda': 'America/Port_of_Spain',
  Anguilla: 'America/Port_of_Spain',
  Albania: 'Europe/Tirane',
  Armenia: 'Asia/Yerevan',
  Angola: 'Africa/Lagos',
  Antarctica: 'Antarctica/Casey',
  Argentina: 'America/Argentina/Buenos_Aires',
  'Samoa (American)': 'Pacific/Pago_Pago',
  Austria: 'Europe/Vienna',
  Australia: 'Australia/Lord_Howe',
  Aruba: 'America/Curacao',
  'Åland Islands': 'Europe/Helsinki',
  Azerbaijan: 'Asia/Baku',
  'Bosnia & Herzegovina': 'Europe/Belgrade',
  Barbados: 'America/Barbados',
  Bangladesh: 'Asia/Dhaka',
  Belgium: 'Europe/Brussels',
  'Burkina Faso': 'Africa/Abidjan',
  Bulgaria: 'Europe/Sofia',
  Bahrain: 'Asia/Qatar',
  Burundi: 'Africa/Maputo',
  'St. Barthelemy': 'America/Port_of_Spain',
  Bermuda: 'Atlantic/Bermuda',
  Brunei: 'Asia/Brunei',
  Bolivia: 'America/La_Paz',
  'Caribbean NL': 'America/Curacao',
  Brazil: 'America/Noronha',
  Bahamas: 'America/Nassau',
  Bhutan: 'Asia/Thimphu',
  Botswana: 'Africa/Maputo',
  Belarus: 'Europe/Minsk',
  Belize: 'America/Belize',
  Canada: 'America/St_Johns',
  'Cocos (Keeling) Islands': 'Indian/Cocos',
  'Congo (Dem. Rep.)': 'Africa/Maputo',
  'Central African Rep.': 'Africa/Lagos',
  'Congo (Rep.)': 'Africa/Lagos',
  Switzerland: 'Europe/Zurich',
  "Côte d'Ivoire": 'Africa/Abidjan',
  'Cook Islands': 'Pacific/Rarotonga',
  Chile: 'America/Santiago',
  Cameroon: 'Africa/Lagos',
  China: 'Asia/Shanghai',
  Colombia: 'America/Bogota',
  'Costa Rica': 'America/Costa_Rica',
  Cuba: 'America/Havana',
  'Cape Verde': 'Atlantic/Cape_Verde',
  Curaçao: 'America/Curacao',
  'Christmas Island': 'Indian/Christmas',
  Cyprus: 'Asia/Nicosia',
  'Czech Republic': 'Europe/Prague',
  Germany: 'Europe/Berlin',
  Djibouti: 'Africa/Nairobi',
  Denmark: 'Europe/Copenhagen',
  Dominica: 'America/Port_of_Spain',
  'Dominican Republic': 'America/Santo_Domingo',
  Algeria: 'Africa/Algiers',
  Ecuador: 'America/Guayaquil',
  Estonia: 'Europe/Tallinn',
  Egypt: 'Africa/Cairo',
  Eritrea: 'Africa/Nairobi',
  Spain: 'Europe/Madrid',
  Ethiopia: 'Africa/Nairobi',
  Finland: 'Europe/Helsinki',
  Fiji: 'Pacific/Fiji',
  'Falkland Islands': 'Atlantic/Stanley',
  Micronesia: 'Pacific/Chuuk',
  'Faroe Islands': 'Atlantic/Faroe',
  France: 'Europe/Paris',
  Gabon: 'Africa/Lagos',
  'Britain (UK)': 'Europe/London',
  England: 'Europe/London',
  Grenada: 'America/Port_of_Spain',
  'French Guiana': 'America/Cayenne',
  Guernsey: 'Europe/London',
  Ghana: 'Africa/Accra',
  Gibraltar: 'Europe/Gibraltar',
  Greenland: 'America/Godthab',
  Gambia: 'Africa/Abidjan',
  Guinea: 'Africa/Abidjan',
  Guadeloupe: 'America/Port_of_Spain',
  'Equatorial Guinea': 'Africa/Lagos',
  Greece: 'Europe/Athens',
  'South Georgia & the South Sandwich Islands': 'Atlantic/South_Georgia',
  Guatemala: 'America/Guatemala',
  Guam: 'Pacific/Guam',
  'Guinea-Bissau': 'Africa/Bissau',
  Guyana: 'America/Guyana',
  Honduras: 'America/Tegucigalpa',
  Croatia: 'Europe/Belgrade',
  Haiti: 'America/Port-au-Prince',
  Hungary: 'Europe/Budapest',
  Indonesia: 'Asia/Jakarta',
  Ireland: 'Europe/Dublin',
  Belfast: 'Europe/Dublin',
  Israel: 'Asia/Jerusalem',
  'Isle of Man': 'Europe/London',
  India: 'Asia/Kolkata',
  'British Indian Ocean Territory': 'Indian/Chagos',
  Iraq: 'Asia/Baghdad',
  Iran: 'Asia/Tehran',
  Iceland: 'Atlantic/Reykjavik',
  Italy: 'Europe/Rome',
  Jersey: 'Europe/London',
  Jamaica: 'America/Jamaica',
  Jordan: 'Asia/Amman',
  Japan: 'Asia/Tokyo',
  Kenya: 'Africa/Nairobi',
  Kyrgyzstan: 'Asia/Bishkek',
  Cambodia: 'Asia/Bangkok',
  Kiribati: 'Pacific/Tarawa',
  'St. Kitts & Nevis': 'America/Port_of_Spain',
  'Korea (North)': 'Asia/Pyongyang',
  'Korea (South)': 'Asia/Seoul',
  Kuwait: 'Asia/Riyadh',
  'Cayman Islands': 'America/Panama',
  Kazakhstan: 'Asia/Almaty',
  Laos: 'Asia/Bangkok',
  Lebanon: 'Asia/Beirut',
  'St. Lucia': 'America/Port_of_Spain',
  Liechtenstein: 'Europe/Zurich',
  'Sri Lanka': 'Asia/Colombo',
  Liberia: 'Africa/Monrovia',
  Lesotho: 'Africa/Johannesburg',
  Lithuania: 'Europe/Vilnius',
  Luxembourg: 'Europe/Luxembourg',
  Latvia: 'Europe/Riga',
  Libya: 'Africa/Tripoli',
  Morocco: 'Africa/Casablanca',
  Monaco: 'Europe/Monaco',
  Moldova: 'Europe/Chisinau',
  Montenegro: 'Europe/Belgrade',
  'St. Martin (French)': 'America/Port_of_Spain',
  Madagascar: 'Africa/Nairobi',
  'Marshall Islands': 'Pacific/Majuro',
  Macedonia: 'Europe/Belgrade',
  Mali: 'Africa/Abidjan',
  'Myanmar (Burma)': 'Asia/Yangon',
  Mongolia: 'Asia/Ulaanbaatar',
  Macau: 'Asia/Macau',
  'Northern Mariana Islands': 'Pacific/Guam',
  Martinique: 'America/Martinique',
  Mauritania: 'Africa/Abidjan',
  Montserrat: 'America/Port_of_Spain',
  Malta: 'Europe/Malta',
  Mauritius: 'Indian/Mauritius',
  Maldives: 'Indian/Maldives',
  Malawi: 'Africa/Maputo',
  Mexico: 'America/Mexico_City',
  Malaysia: 'Asia/Kuala_Lumpur',
  Mozambique: 'Africa/Maputo',
  'New Caledonia': 'Pacific/Noumea',
  Niger: 'Africa/Lagos',
  'Norfolk Island': 'Pacific/Norfolk',
  Nigeria: 'Africa/Lagos',
  Nicaragua: 'America/Managua',
  Netherlands: 'Europe/Amsterdam',
  Norway: 'Europe/Oslo',
  Nepal: 'Asia/Kathmandu',
  Nauru: 'Pacific/Nauru',
  Niue: 'Pacific/Niue',
  'New Zealand': 'Pacific/Auckland',
  Oman: 'Asia/Dubai',
  Panama: 'America/Panama',
  Peru: 'America/Lima',
  'French Polynesia': 'Pacific/Tahiti',
  'Papua New Guinea': 'Pacific/Port_Moresby',
  Philippines: 'Asia/Manila',
  Pakistan: 'Asia/Karachi',
  Poland: 'Europe/Warsaw',
  'St. Pierre & Miquelon': 'America/Miquelon',
  Pitcairn: 'Pacific/Pitcairn',
  'Puerto Rico': 'America/Puerto_Rico',
  Palestine: 'Asia/Gaza',
  Portugal: 'Europe/Lisbon',
  Palau: 'Pacific/Palau',
  Paraguay: 'America/Asuncion',
  Qatar: 'Asia/Qatar',
  Réunion: 'Indian/Reunion',
  Romania: 'Europe/Bucharest',
  Serbia: 'Europe/Belgrade',
  Russia: 'Europe/Kaliningrad',
  Rwanda: 'Africa/Maputo',
  'Saudi Arabia': 'Asia/Riyadh',
  'Solomon Islands': 'Pacific/Guadalcanal',
  Seychelles: 'Indian/Mahe',
  Sudan: 'Africa/Khartoum',
  Sweden: 'Europe/Stockholm',
  Singapore: 'Asia/Singapore',
  'St. Helena': 'Africa/Abidjan',
  'Svalbard & Jan Mayen': 'Europe/Oslo',
  Slovakia: 'Europe/Prague',
  'Sierra Leone': 'Africa/Abidjan',
  'San Marino': 'Europe/Rome',
  Senegal: 'Africa/Abidjan',
  Somalia: 'Africa/Nairobi',
  'South Sudan': 'Africa/Juba',
  'Sao Tome & Principe': 'Africa/Sao_Tome',
  'El Salvador': 'America/El_Salvador',
  'St. Maarten (Dutch)': 'America/Curacao',
  Syria: 'Asia/Damascus',
  Swaziland: 'Africa/Johannesburg',
  'Turks & Caicos Islands': 'America/Grand_Turk',
  Chad: 'Africa/Ndjamena',
  'French Southern & Antarctic Lands': 'Indian/Kerguelen',
  Togo: 'Africa/Abidjan',
  Thailand: 'Asia/Bangkok',
  Tajikistan: 'Asia/Dushanbe',
  Tokelau: 'Pacific/Fakaofo',
  'East Timor': 'Asia/Dili',
  Turkmenistan: 'Asia/Ashgabat',
  Tunisia: 'Africa/Tunis',
  Tonga: 'Pacific/Tongatapu',
  Turkey: 'Europe/Istanbul',
  'Trinidad & Tobago': 'America/Port_of_Spain',
  Tuvalu: 'Pacific/Funafuti',
  Taiwan: 'Asia/Taipei',
  Tanzania: 'Africa/Nairobi',
  Ukraine: 'Europe/Kiev',
  Uganda: 'Africa/Nairobi',
  'US minor outlying islands': 'Pacific/Wake',
  Uruguay: 'America/Montevideo',
  Uzbekistan: 'Asia/Samarkand',
  'Vatican City': 'Europe/Rome',
  'St. Vincent': 'America/Port_of_Spain',
  Venezuela: 'America/Caracas',
  'Virgin Islands (UK)': 'America/Port_of_Spain',
  'Virgin Islands (US)': 'America/Port_of_Spain',
  Vietnam: 'Asia/Ho_Chi_Minh',
  Vanuatu: 'Pacific/Efate',
  'Wallis & Futuna': 'Pacific/Wallis',
  Yemen: 'Asia/Riyadh',
  Mayotte: 'Africa/Nairobi',
  Zambia: 'Africa/Maputo',
  Zimbabwe: 'Africa/Maputo',
  toronto: 'America/Toronto',
  vancouver: 'America/Vancouver',
};

const getTimezoneName = (tz) => {
  let result = '';
  const keys = Object.keys(timezoneList);
  for (let i = 0; i < keys.length; i++) {
    if (timezoneList[keys[i]] === tz) {
      result = keys[i];
      break;
    }
  }
  return result;
};

const timezoneKeys = Object.keys(timezoneList);

const timezoneOptions = timezoneKeys.map((key) => ({
  label: key,
  value: timezoneList[key],
}));

export { timezoneList, getTimezoneName, timezoneOptions };
