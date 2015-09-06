(function () {
	'use strict';

	angular
		.module('app')
		.factory('portfolioPrintService', portfolioPrintService);

	function portfolioPrintService() {
		var service =
			[
				{
					"title": "Brochure (Wine festival)",
					"description": "Brochure for the 15th anniversary of the international wine festival in Budapest.",
					"color": "4+4",
					"pages": 52,
					"sw": "InDesign, Photoshop",
					"img": 6
				},
				{
					"title": "Catalogue (Dow)",
					"description": "Catalogue for Dow Agrosciences Ltd, leading provider of crop protection and pest management solutions.",
					"color": "4+4",
					"pages": 56,
					"sw": "InDesign, Illustrator, Photoshop",
					"img": 5
				},
				{
					"title": "Leaflet (Dow)",
					"description": "Wrap arpund leaflet for Dow Agrosciences Ltd about plant protection.",
					"color": "4+4",
					"pages": 8,
					"sw": "InDesign, Photoshop, Illustrator",
					"img": 2
				},
				{
					"title": "Annual Report",
					"description": "Annual Report for Hungary's main Gas provider company, Tigaz.",
					"color": "1+1",
					"pages": 412,
					"sw": "InDesign, Photoshop",
					"img": 5
				},
				{
					"title": "Flyer (Kotanyi)",
					"description": "Wrap around flyer for Kotanyi Ltd. about spices and spice mixtures",
					"color": "4+4",
					"pages": 8,
					"sw": "InDesign, Photoshop",
					"img": 2
				},
				{
					"title": "LEGRAND Catalogue",
					"description": "The Big Legrand Product Catalogue 2009-2010. The biggest project I've worked on so far. 1000 pages A/4, from scratch. Took 5 months, 50+ h/week. Created on MAC.",
					"color": "4+4",
					"pages": 1120,
					"sw": "InDesign",
					"img": 5
				},
				{
					"title": "Events Calendar",
					"description": "Events calendar for the Aggtelek Karst, Hungary.",
					"color": "4+4",
					"pages": 48,
					"sw": "InDesign, Quark Express, Photoshop",
					"img": 2
				},
				{
					"title": "Brochure (Dow)",
					"description": "A small brochure for Dow Agrosciences Ltd, leading provider of crop protection and pest management solutions.",
					"color": "4+4",
					"pages": 64,
					"sw": "InDesign, Adobe Acrobat",
					"img": 2
				},
				{
					"title": "Brochure (General Electric)",
					"description": "Folded brochure for General Electric. Done in various European languages.",
					"color": "4+4",
					"pages": 8,
					"sw": "InDesign, Illustrator, Photoshop",
					"img": 2
				},
				{
					"title": "Brochure (Honda)",
					"description": "Brochure of the Honda CR-V, and accessories.",
					"color": "4+4",
					"pages": 20,
					"sw": "InDesign, Photoshop, Illustrator",
					"img": 4
				},
				{
					"title": "Stationery (Kotanyi)",
					"description": "Folded stationery for Kotanyi Ltd.",
					"color": "4+4",
					"pages": 10,
					"sw": "InDesign, Illustrator",
					"img": 2
				},
				{
					"title": "Brochure (Nilfisk)",
					"description": "143 pages brochure for Nilfisk Ltd. abut professional cleaning machines.",
					"color": "4+4",
					"pages": 143,
					"sw": "InDesign, Photoshop",
					"img": 4
				},
				{
					"title": "Brochure (Technical)",
					"description": "Brochure for the Noniusz Ltd. about professional Turning Lathe accesories.",
					"color": "4+4",
					"pages": 16,
					"sw": "InDesign",
					"img": 4
				},
				{
					"title": "Brochure (TUI travel)",
					"description": "Tourist guide and information brochure for Tui Travel PLC.",
					"color": "4+4",
					"pages": 56,
					"sw": "InDesign, Photoshop, Quark",
					"img": 6
				},
				{
					"title": "Folder (Valvoline)",
					"description": "Folder for Valvoline, the international motor oil manufacturer.",
					"color": "4+4",
					"pages": 4,
					"sw": "InDesign, Illustrator",
					"img": 4
				},
				{
					"title": "Brochure (Beauty)",
					"description": "Brochure for the Wellmed Beauty salon in Budapest.",
					"color": "4+4",
					"pages": 4,
					"sw": "InDesign, Photoshop",
					"img": 4
				},
				{
					"title": "Brochure (Dow II)",
					"description": "76 pages brochure for Dow Agrosciences Ltd about plant protection.",
					"color": "4+4",
					"pages": 76,
					"sw": "InDesign, Photoshop, Illustrator",
					"img": 2
				},
				{
					"title": "Brochure (General Electric II)",
					"description": "24 pages brochure for General electric, printed in 8 different languages",
					"color": "4+4",
					"pages": 24,
					"sw": "InDesign, Illustrator",
					"img": 5
				},
				{
					"title": "Brochure (Technical II)",
					"description": "Brochure about DIY tools and accessories.",
					"color": "4+4",
					"pages": 24,
					"sw": "InDesign, Illustrator",
					"img": 3
				},
				{
					"title": "CD Label",
					"description": "CD design for Dow Agrosciences Ltd, leading provider of crop protection and pest management solutions.",
					"color": "4",
					"pages": 1,
					"sw": "Photoshop",
					"img": 1
				},
				{
					"title": "Calendar",
					"description": "Weekly calendar for Pappas Auto car dealership.",
					"color": "4+4",
					"pages": 64,
					"sw": "InDesign, Quark",
					"img": 2
				},
				{
					"title": "Leaflet (Dow)",
					"description": "8 pages wrap around leaflet for Dow Agrosciences about the most frequent grass weeds in cereals.",
					"color": "4+4",
					"pages": 10,
					"sw": "InDesign, Photoshop",
					"img": 2
				},
				{
					"title": "Catalogue (Legrand)",
					"description": "44 pages catalogue for the Axolute product family of Legrand Ltd.",
					"color": "4+4",
					"pages": 44,
					"sw": "InDesign, Photoshop",
					"img": 4
				},
				{
					"title": "Brochure (Dacia)",
					"description": "Wrap around brochure for Dacia car Accessories.",
					"color": "4+4",
					"pages": 6,
					"sw": "InDesign, Photoshop",
					"img": 2
				},
				{
					"title": "Flyer (Helios)",
					"description": "Flyer for Helios Ltd., professional ventilation systems.",
					"color": "4+4",
					"pages": 2,
					"sw": "InDesign",
					"img": 2
				},
				{
					"title": "Flyer (Honda)",
					"description": "Wrap aruond flyer for Honda Motors, and accessories.",
					"color": "4+4",
					"pages": 6,
					"sw": "Cp",
					"img": 2
				},
				{
					"title": "Large format (Kotanyi)",
					"description": "2m x 2,5m placard design for Kotanyi Herbs.",
					"color": "4",
					"pages": 1,
					"sw": "Photoshop",
					"img": 1
				},
				{
					"title": "Flyer (Renault)",
					"description": "Wrap around folded flyer for Renault, car servicing and security.",
					"color": "4+4",
					"pages": 6,
					"sw": "Photoshop",
					"img": 2
				},
				{
					"title": "Flyer (Volksbank)",
					"description": "Simple flyer for Volksbank.",
					"color": "4+4",
					"pages": 2,
					"sw": "InDesign",
					"img": 2
				},
				{
					"title": "Flyer (Renault II)",
					"description": "folded flyer for Renault, car servicing.",
					"color": "4+4",
					"pages": 4,
					"sw": "InDesign, Illustrator",
					"img": 2
				},
				{
					"title": "Stationery",
					"description": "Folded Table stationery for food supplements.",
					"color": "4+4",
					"pages": 10,
					"sw": "InDesign, Acrobat",
					"img": 1
				},
				{
					"title": "Folder + dieline",
					"description": "A/4 Folder folder with dielines for Valvoline, Provider of automotive lubricants and chemicals.",
					"color": "4+4",
					"pages": 4,
					"sw": "InDesign, Illustrator, Acrobat",
					"img": 2
				},
				{
					"title": "POS (Kotanyi)",
					"description": "POS design for Kotanyi herbs and spices.",
					"color": "4+4",
					"pages": 0,
					"sw": "Photoshop",
					"img": 1
				},
				{
					"title": "Poster (Renault)",
					"description": "850 x 1200 mm poster for Renault, winter servicing discounts.",
					"color": "4+4",
					"pages": 1,
					"sw": "InDesign",
					"img": 1
				},
				{
					"title": "Packaging (GE)",
					"description": "Product packaging design with dielines for General Electric.",
					"color": "4",
					"pages": 1,
					"sw": "InDesign, Illustrator, Photoshop",
					"img": 1
				},
				{
					"title": "Invitation Card",
					"description": "Personalized 1 colour Invitation card for a wedding.",
					"color": "1+1",
					"pages": 2,
					"sw": "InDesign, Photoshop",
					"img": 2
				}

			]
			;

		return service;

		////////////////

	}
})();