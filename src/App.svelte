<script>
	import Accordion from './Accordion.svelte';
	let name = 'world';
	const TVS = [
		{
			name: 'Samsung UE55AU7100UXUA',
			inch: '55"',
			resolution: '3840x2160',
			size: '1230.5 x 707.2 x 59.9 мм',
			features: [
				'Bluetooth',
				'HDR',
				'WI-Fi',
				'Smart TV',
				'DVB-C',
				'DVB-S2',
				'DVB-T2'
			],
			ports: [
				'3 x HDMI',
				'1 x USB',
				'1 x Ethernet',
				'1 x CI слот',
				'1 x Антенный вход',
				'1 x Антенный вход (спутниковый)'
			],
			complectation: [
				'Телевизор',
				'Пульт ДУ с батарейками',
				'Документация'
			],
			price: '14 999 UAH',
			image: 'https://content.rozetka.com.ua/goods/images/big/194918836.jpg',
			url: 'https://rozetka.com.ua/samsung_ue55au7100uxua/p310629788/'
		},
		{
			name: 'HAIER 50 SMART TV BX',
			inch: '50"',
			resolution: '3840x2160',
			size: '1115 x 642 x 60 мм',
			features: [
				'Smart TV',
				'Ultra HD 4K',
				'телевизор с Wi-Fi',
				'управление голосом',
				'Android ОС',
				'DVB-T2',
				'Bluetooth'
			],
			ports: [
				'HDMI',
				'Композитный вход',
				'Цифровые аудио',
				'USB',
				'Выход на наушники',
				'Ethernet'
			],
			complectation: [
				'Телевизор',
				'Пульт ДУ с батарейками',
				'Документация'
			],
			price: '8 999 UAH',
			image: 'https://i.eldorado.ua//goods_images/1038962/7459753-1635253009.jpg',
			url: 'https://eldorado.ua/televizor-led-haier-50-smart-tv-bx/p71304325/?utm_source=google&utm_medium=cpc&utm_campaign=Promodo_ukr_dsa_all_CE_%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D1%8B&utm_term=&utm_content=cid|10502564392|televizory&gclid=CjwKCAiAv_KMBhAzEiwAs-rX1NMj4yZ9JpVbyhLuKyhPYH-nUqAycTDARrWxBdgHcSAr5LsHZVRE5hoCJFQQAvD_BwE'
		},
		{
			name: 'LG 43UN71006LB',
			inch: '43"',
			resolution: '3840x2160',
			size: '975 x 574 x 80.3 мм',
			features: [
				'Bluetooth',
				'HDR',
				'WI-Fi'
			],
			ports: [
				'3 x HDMI 2.0',
				'2 х USB 2.0',
				'CI слот',
				'Оптичний вхід',
				'Компонентний вхід',
				'Композитний вхід (AV)',
				'Антенний вхід',
				'Антенний вхід (супутниковий)',
				'LAN'
			],
			complectation: [
				'Телевізор',
				'Пульт дистанційного керування',
				'Кабель живлення',
				'2 батарейки AA',
				'Інструкція'
			],
			price: '12 499 UAH',
			image: 'https://content2.rozetka.com.ua/goods/images/big/183197009.jpg',
			url: 'https://rozetka.com.ua/ua/lg_43un71006lb/p220852963/'
		},
		{
			name: 'Xiaomi Mi TV 4S 50" UHD 4K',
			inch: '50"',
			resolution: '3840x2160',
			size: '1117,8 х 250,9 х 709,7 мм',
			features: [
				'HDR',
				'WI-Fi'
			],
			ports: [
				'3 x HDMI',
				'2 x USB',
				'Слот CI/PCMCIA',
				'AV-вход',
				'Ethernet',
				'Разъем для наушников',
				'Цифровой аудиовыход (оптический) S/PDIF'
			],
			complectation: [
				'Телевизор',
				'Пульт ДУ',
				'Кабель питания',
				'Документация'
			],
			price: '11 499 UAH',
			image: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/9/4/94e958be2797124d1934dec22551607e.jpg',
			url: 'https://www.citrus.ua/televizory/tv4s-50-671630.html?'
		},
		{
			name: 'HISENSE 50A7100F',
			inch: '50"',
			resolution: '3840x2160',
			size: '1116 х 226 х 709 мм',
			features: [
				'WI-Fi'
			],
			ports: [
				'HDMI 2.0',
				'USB',
				'LAN (Ethernet)',
				'композитний (AV)',
				'оптичний (цифровий)',
				'антенний вхід (RF)',
				'CI',
				'аудіовхід L/R',
				'для супутникової антени'
			],
			complectation: [
				'пульт ДУ',
				'елементи живлення для пульта ДУ',
				'кабель живлення'
			],
			price: '11 999 UAH',
			image: 'https://files.foxtrot.com.ua/PhotoNew/img_0_977_3694_0_1.webp',
			url: 'https://www.foxtrot.com.ua/uk/shop/led_televizory_hisense_50a7100f.html'
		},
		
	]
</script>

{#each TVS as tv}
	<Accordion data={tv}></Accordion>
{/each}