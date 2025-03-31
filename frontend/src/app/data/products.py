'''
from products.models import Product

products = [
    Product(
        name='CHILDREN COTTON RUG WITH MULTICOLOR SPOTTLES',
        description="""Children's carpet made of cotton with multi-colored speckles.
        The round carpet has a diameter of 140 cm.
        The rectangular carpet with tassels on the corners has a size of 150 x 200 cm.
        It is recommended to clean with a damp white kitchen towel and air dry.""",
        category='Children',
        size='150*200 cm',
        price='49990',
        image="assets/children/cottonrug.jpg"
    ),
    Product(
        name="CHILDREN'S TABLE LAMP",
        description="""Children's table lamp with wooden beads. Bulb not included. To avoid possible risks, the power cord or lamp cord should be replaced by a qualified specialist if damaged. Base: E14.""",
        category='Children',
        size='36/32/32 cm',
        price='36990',
        image="assets/children/lamp.jpg"
    ),
    Product(
        name="CHILDREN'S WALL MIRROR IN A RATTAN FRAME HOUSE",
        description="""Children's wall mirror in a rattan frame "House". Two closing shutters, two hooks for fixing to the wall at the back.""",
        category='Children',
        size='47/36/8 cm',
        price='29990',
        image="assets/children/framehouse.jpg"
    ),
    Product(
        name="LARGE CHILDREN'S BASKET 'HOUSE'",
        description="""Children's rattan storage basket "House".""",
        category='Children',
        size='26/22/28 cm',
        price='18990',
        image="assets/children/baskethouse.jpg"
    ),
    Product(
        name="CHILDREN'S METAL BASKETS WITH HANDLE",
        description="""Children's metal storage basket with contrast folding handles.""",
        category='Children',
        size='16/32/23 cm',
        price='12990',
        image="assets/children/metalbaskets.jpg"
    ),
    Product(
        name="CHILDREN'S SQUARE PHOTO FRAME 'DUCKLING'",
        description="""Square photo frame covered with fabric.
        For photos measuring 11 x 11 cm.""",
        category='Children',
        size='11*11 cm',
        price='9990',
        image="assets/children/duckling.jpg"
    ),
    Product(
        name="SET OF CHILDREN'S FURNITURE HANDLES 'CLOUDS' (2 PCS.)",
        description="""Children's furniture handles for cabinets and furniture made of ceramics in the shape of clouds.
Set of 2 pcs.""",
        category='Children',
        size='3.5/4.5/6.5 cm',
        price='2590',
        image="assets/children/clouds.jpg"
    ),
    Product(
        name="CHILDREN'S SUITCASE WITH 'MOON' PRINT",
        description="""A children's suitcase with a handle and a metal clasp. The large model has a "Mouse and Moon" print, while the small model has the inscription Welcome Baby.""",
        category='Children',
        size='35/23/10 cm',
        price='15990',
        image="assets/children/moon.jpg"
    ),
    Product(
        name="CHILDREN'S ACCORDION FOLDER",
        description="""Children's folder with contrasting edge trim, an internal accordion block with 9 compartments and an elastic band fastener.""",
        category='Children',
        size='22/17/10 cm',
        price='6990',
        image="assets/children/folder.jpg"
    ),
    Product(
        name="PEANUTS™ COTTON CHILDREN'S PENCIL CASE",
        description="""Children's cotton pencil case featuring Peanuts™ characters. Contrast zip at top.""",
        category='Children',
        size='9/20/8 cm',
        price='9990',
        image="assets/children/case.jpg"
    ),
    Product(
        name="SOAP DISPENSER 'STAR' FOR CHILDREN",
        description="""Children's rubberized ceramic soap dispenser in the shape of a star.""",
        category='Children',
        size='16.5/13/6 cm',
        price='9990',
        image="assets/children/star.jpg"
    ),
    Product(
        name="CHILDREN'S TOOTHBRUSH GLASS LE PETIT PRINCE ('LITTLE PRINCE')",
        description="""Children's ceramic toothbrush holder with divider and print based on the fairy tale Le Petit Prince.""",
        category='Children',
        size='7/8/12 cm',
        price='6990',
        image="assets/children/prince.jpg"
    ),
    Product(
        name="PEANUTS™ KIDS PILLOW CASE",
        description="""Children's pillowcase made from 200 thread count washed cotton with Peanuts™ character print.""",
        category='Children',
        size='36*50 cm',
        price='4490',
        image="assets/children/pillowcase.jpg"
    ),
    Product(
        name="SMALL CHILDREN'S FAUX SHEEPSKIN STAR PILLOW",
        description="""`Children's star-shaped pillow made of faux sheepskin.
The set includes a cover and a pillow.`,""",
        category='Children',
        size='9/35/35 cm',
        price='9990',
        image="assets/children/star.jpg"
    ),
    Product(
        name="CHILDREN'S SILICONE BOWL WITH A 'DUCKLING' PICTURE",
        description="""Children's silicone bowl with a "Duckling" print.""",
        category='Children',
        size='4/12/12 cm',
        price='4490',
        image="assets/children/bowl.jpg"
    ),
    Product(
        name="LITTLE TOTORO\'S HONORI LAMP",
        description="""A lamp inspired by Little Totoro from My Neighbor Totoro. Features a soft, warm glow, perfect for adding a cozy touch to any room.""",
        category='Bedroom',
        size='200/125/0.5 mm',
        price='14415',
        image="assets/bedroom/totoro.jpg"
    ),
    Product(
        name='COTTON STRIPED BEDDING SET',
        description="""A soft and breathable bedding set made of premium cotton with a subtle striped pattern. Set includes a flat sheet, fitted sheet, and 2 pillowcases.""",
        category='Bedroom',
        size='Queen | 50 x 90',
        price='52848',
        image="assets/bedroom/beddingset.jpg"
    ),
    Product(
        name='LINEN BEDDING SET',
        description="""A luxurious bedding set made from linen, offering a soft, breathable, and slightly textured feel.""",
        category='Bedroom',
        size='King',
        price='48290',
        image="assets/bedroom/beddingset2.jpg"
    ),
    Product(
        name='LARGE RUG WITH COLOURED STRIPES',
        description="""ALarge wool rug with a coloured stripe print.""",
        category='Bedroom',
        size='7183/029',
        price='149990',
        image="assets/bedroom/rug.jpg"
    ),
    Product(
        name='WOOL CUSHION COVER',
        description="""Wool cushion cover with a plain design. Cushion insert not included.""",
        category='Bedroom',
        size='7153/008',
        price='36990',
        image="assets/bedroom/woolpillow.jpg"
    ),
    Product(
        name='SQUARE GLASS VASE',
        description="""Square transparent glass vase.""",
        category='Bedroom',
        size='8317/046',
        price='15980',
        image="assets/bedroom/vase.jpg"
    ),
    Product(
        name='FLORAL JACQUARD THROW',
        description="""Cotton jacquard throw with contrast floral motifs and fringing.""",
        category='Bedroom',
        size='3110/004',
        price='29990',
        image="assets/bedroom/throw.jpg"
    ),
    Product(
        name='SHEER CURTAIN WITH VERY LOW OPACITY',
        description="""Plain-coloured translucent sheer curtain with very low opacity for soft and diffused ambient light. Includes a curtain header. Ideal for those wishing to add a touch of light and subtle style to their spaces.""",
        category='Bedroom',
        size='1302/032',
        price='21990',
        image="assets/bedroom/curtain.jpg"
    ),
    Product(
        name='WOODEN NEST OF SIDE TABLES (SET OF 2)',
        description="""Mango wood side tables with rounded corners. Set of 2.""",
        category='Bedroom',
        size='57 x 38 x 48.',
        price='139990',
        image="assets/bedroom/table.jpg"
    ),
    Product(
        name='ASH WOOD NIGHT TABLE WITH DRAWER',
        description="""Ash wood bedside table with four elongated legs and a sliding drawer with a built-in knob.""",
        category='Bedroom',
        size='Standard',
        price='109990',
        image="assets/bedroom/nighttable.jpg"
    ),
    Product(
        name='ACACIA WOOD RACK',
        description="""Acacia wood clothes rack.""",
        category='Bedroom',
        size='Standard|7564/077',
        price='85990',
        image="assets/bedroom/rack.jpg"
    ),
    Product(
        name='SMALL ASYMMETRIC WALL MIRROR',
        description="""Small asymmetric wall mirror with a black frame. Features four attachment points for horizontal or vertical placement.""",
        category='Bedroom',
        size='Small',
        price='49990',
        image="assets/bedroom/mirror.jpg"
    ),
    Product(
        name='ROUND WOODEN BOX',
        description="""Round mango wood box.""",
        category='Bedroom',
        size='Standard',
        price='15990',
        image="assets/bedroom/woodenbox.jpg"
    ),
    Product(
        name='FOUR STATION DUVET FILLING',
        description="""Microfibre duvet filling with two layers, adaptable to the four seasons of the year.""",
        category='Bedroom',
        size='Various sizes',
        price='129990',
        image="assets/bedroom/duvet.jpg"
    ),
    Product(
        name='BAMBOO BASKET WITH HANDLE',
        description="""Round bamboo basket with a woven handle.""",
        category='Bedroom',
        size='Standard',
        price='21990',
        image="assets/bedroom/bamboo.jpg"
    ),
    Product(
        name='MINI WAFFLE BATH TOWEL',
        description="""Cotton bath towel with a mini waffle texture.""",
        category='Bathroom',
        size='4587/013',
        price='16990 ',
        image='assets/bathroom/towel.jpg',
    ),
    Product(
        name='LADDER TOWEL RACK',
        description="""Wooden towel rack with four rungs. The design features a wider base than the top.""",
        category='Bathroom',
        size='8576/077',
        price='58990',
        image='assets/bathroom/ladder.jpg',
    ),
    Product(
        name='SMALL STOOL',
        description="""Small wooden stool.""",
        category='Bathroom',
        size='8575/073',
        price='17590',
        image='assets/bathroom/stool.jpg',
    ),
    Product(
        name='ACACIA STORAGE UNIT',
        description="""Acacia wood storage unit with four storage spaces at different heights and a top handle.""",
        category='Bathroom',
        size='1570/077',
        price='58990',
        image='assets/bathroom/storage.jpg',
    ),
    Product(
        name='WALL STORAGE UNIT',
        description="""Storage unit for hanging on the wall, made of acacia wood and grooved tempered glass.""",
        category='Bathroom',
        size='5569/077',
        price='89990',
        image='assets/bathroom/wallunit.jpg',
    ),
    Product(
        name='TRAVERTINE MARBLE BATHROOM SET',
        description="""This set includes a marble soap dispenser, marble toothbrush holder, and marble bathroom tray.""",
        category='Bathroom',
        size='Standard',
        price='26990',
        image='assets/bathroom/bathset.jpg',
    ),
    Product(
        name='MULTIFUNCTIONAL GLASS AND METAL TISSUE BOX',
        description='Rectangular glass tissue box with square storage compartments with lids.',
        category='Bathroom',
        size='4511/099',
        price='29990',
        image='assets/bathroom/tissuebox.jpg',
    ),
    Product(
        name='BATHROOM JAR WITH METAL LID',
        description='Transparent glass bathroom storage jar with a matte metal lid.',
        category='Bathroom',
        size='1513/455',
        price='11990',
        image='assets/bathroom/jar.jpg',
    ),
    Product(
        name='TRANSLUCENT LINEN SHOWER CURTAIN',
        description='Translucent shower curtain made of 100% linen with a water-repellent finish for increased moisture resistance. Featuring elegant metallic eyelets, rings not included.',
        category='Bathroom',
        size='2247/016',
        price='45990',
        image='assets/bathroom/scurtain.jpg',
    ),
    Product(
        name='PACK OF METAL SHOWER CURTAIN RINGS',
        description='Metal shower curtain rings. They open on one side when pressed. Small metal balls allow the curtain to slide easily along the rod.',
        category='Bathroom',
        size='7589/044',
        price='4490',
        image='assets/bathroom/rings.jpg',
    ),
    Product(
        name='BASILICUM BODY LOTION',
        description='Scented hand and body cream. Leaves skin soft, hydrated and with a light fragrance.',
        category='Bathroom',
        size='0425/701',
        price='5990',
        image='assets/bathroom/lotion.jpg',
    ),
    Product(
        name='TRANSLUCENT LINEN SHOWER CURTAIN',
        description='Translucent shower curtain made of 100% linen with a water-repellent finish for increased moisture resistance. Featuring elegant metallic eyelets, rings not included.',
        category='Bathroom',
        size='2542/016',
        price='45990',
        image='assets/bathroom/scurtain2.jpg',
    ),
    Product(
        name='DECORATIVE CYLINDRICAL CANDLE',
        description='Basic cylindrical candle. Approximate duration: 31 hours.',
        category='Bathroom',
        size='Standard',
        price='5590',
        image='assets/bathroom/candle.jpg',
    ),
    Product(
        name='RAISED BATHROOM WALL SOAP DISH',
        description='Ceramic wall soap dish. Attachment materials included.',
        category='Bathroom',
        size='3536/105',
        price='6990',
        image='assets/bathroom/soapdish.jpg',
    ),
    Product(
        name='TERRACOTTA SOAP DISH',
        description='Round terracotta bathroom soap dish with a rustic design in earth tones.',
        category='Bathroom',
        size='2520/105',
        price='5590',
        image='assets/bathroom/soapdish2.jpg',
    ),
    Product(
        name='ARMCHAIR',
        description='Accent chair made of ash wood with a detachable zipper on the seat and back. The covers can be removed and washed according to the instructions on the label.',
        category='Living room',
        size='150x250x150 cm',
        price='209990',
        image='assets/living-room/61.png',
    ),
    Product(
        name='STATIONERY DESK MADE OF WOOD AND METAL',
        description='Office desk with an oak wood top featuring a pinstripe pattern and thin stainless steel legs.',
        category='Living room',
        size='Standard',
        price='249990',
        image='assets/living-room/62.png',
    ),
    Product(
        name='BOUCLE AND JUTE CARPET',
        description='Rectangular boucle jute carpet. It is recommended to contact specialists for product care.',
        category='Living room',
        size='Standard',
        price='189990',
        image='assets/living-room/63.png',
    ),
    Product(
        name='FLOOR LAMP WITH WOODEN BASE',
        description='A lamp with a metal base and a linen shade. Light bulb not included. Base: E14.',
        category='Living room',
        size='Standard',
        price='119990',
        image='assets/living-room/64.png',
    ),
    Product(
        name='SOLID COLOR DECORATIVE PILLOW CASE',
        description='Solid color cushion cover made of cotton. The pillow is not included.',
        category='Living room',
        size='Standard',
        price='5990',
        image='assets/living-room/65.png',
    ),
    Product(
        name='SQUARE-SHAPED WICKER BASKET',
        description='A square basket with a circular weave of straw.',
        category='Living room',
        size='Various sizes',
        price='10390',
        image='assets/living-room/66.png',
    ),
    Product(
        name='LARGE BLACK METAL PHOTO FRAME',
        description='Black metal photo frame with linen passepartout for a 32 x 27 cm photo. Can be placed vertically or horizontally.',
        category='Living room',
        size='32x27 cm',
        price='15990',
        image='assets/living-room/67.png',
    ),
    Product(
        name='CERAMIC VASE OF ASYMMETRICAL SHAPE',
        description='An asymmetrical ceramic vase with a textured surface that tapers upward. Water can be poured into the product.',
        category='Living room',
        size='Standard',
        price='29990',
        image='assets/living-room/68.png',
    ),
    Product(
        name='DECORATIVE BOWL MADE OF WOOD',
        description='Large decorative bowl made of pine wood.',
        category='Living room',
        size='Large',
        price='109990',
        image='assets/living-room/69.png',
    ),
    Product(
        name='CURTAIN MADE OF THICK LINEN',
        description='Curtain made of 100% thick linen with low light transmission and an elegant pressed effect. Sold individually.',
        category='Living room',
        size='Standard',
        price='85990',
        image='assets/living-room/70.png',
    ),
    Product(
        name='ELM WOOD COFFEE TABLE',
        description='Rectangular coffee table made of elm wood. Foot assembly is required. Due to the nature of the material, the color may vary slightly.',
        category='Living room',
        size='Standard',
        price='229990',
        image='assets/living-room/71.png',
    ),
    Product(
        name='RECTANGULAR CARPET MADE OF COTTON AND JUTE',
        description='Rectangular woven carpet made of cotton and jute with a melange pattern. It is recommended to contact specialists to take care of the product.',
        category='Living room',
        size='Various sizes',
        price='21990',
        image='assets/living-room/72.png',
    ),
    Product(
        name='CERAMIC VASE WITH ROUGH SURFACE',
        description='A tall ceramic vase with a rough surface. Water can be poured into the product.',
        category='Living room',
        size='Various sizes',
        price='21990',
        image='assets/living-room/73.png',
    ),
    Product(
        name='DECORATIVE CANDLE LANTERN',
        description='A decorative lantern for a cylindrical candle with a base made of jute. The product is available in several sizes.',
        category='Living room',
        size='Various sizes',
        price='15990',
        image='assets/living-room/74.png',
    ),
    Product(
        name='CUBE-SHAPED TABLE MADE OF ROOT WOOD',
        description='A cube-shaped table made of root wood.',
        category='Living room',
        size='Standard',
        price='129990',
        image='assets/living-room/75.png',
    ),
    Product(
        name='SLIDING WOODEN CUTLERY BOX',
        description='Sliding wooden cutlery box.',
        category='Kitchen',
        size='Standard',
        price='21990',
        image='assets/kitchen/76.png',
    ),
    Product(
        name='SMALL DISH FOR THE OVEN',
        description='A square porcelain dish with small handles on the sides. The product is available in 3 small sizes.',
        category='Kitchen',
        size='Various sizes',
        price='2590',
        image='assets/kitchen/77.png',
    ),
    Product(
        name='MARBLE STAND FOR KITCHEN UTENSILS',
        description='Cylindrical marble stand for kitchen utensils. Due to the natural marble, the color and veins may vary.',
        category='Kitchen',
        size='Standard',
        price='36990',
        image='assets/kitchen/78.png',
    ),
    Product(
        name='JUTE CARPET WITH ANTI-SLIP BASE',
        description='Rectangular kitchen rug made of woven striped jute with a non-slip base. Suitable for the kitchen and other rooms.',
        category='Kitchen',
        size='Standard',
        price='36990',
        image='assets/kitchen/79.png',
    ),
    Product(
        name='MAGNETIC POWER PLANNER',
        description='Magnetic weekly food planner for the refrigerator, including 45 sheets.',
        category='Kitchen',
        size='Standard',
        price='8990',
        image='assets/kitchen/80.png',
    ),
    Product(
        name='JAR MADE OF HEAT-RESISTANT GLASS AND WOOD',
        description='Transparent honey jar with a wooden lid made of heat-resistant glass. Safe for microwave and dishwasher.',
        category='Kitchen',
        size='Standard',
        price='11990',
        image='assets/kitchen/81.png',
    ),
    Product(
        name='WOODEN CUTTING BOARD WITH ASYMMETRICAL SHAPE',
        description='A cutting board made of wood with an asymmetrical shape.',
        category='Kitchen',
        size='Various sizes',
        price='6990',
        image='assets/kitchen/82.png',
    ),
    Product(
        name='GINGER GRATER MADE OF STEEL',
        description='A stainless steel ginger grater for fine and precise grating.',
        category='Kitchen',
        size='Standard',
        price='5990',
        image='assets/kitchen/83.png',
    ),
    Product(
        name='KITCHEN TOWEL FOR CLEANING LINEN (SET OF 3 PIECES)',
        description='A set of three kitchen towels for cleaning linen surfaces.',
        category='Kitchen',
        size='Standard',
        price='11990',
        image='assets/kitchen/84.png',
    ),
    Product(
        name='SALT AND PEPPER SHAKERS MADE OF ACACIA WOOD',
        description='A stand with two compartments for salt and pepper shakers made of acacia wood, including two small spoons.',
        category='Kitchen',
        size='Standard',
        price='12990',
        image='assets/kitchen/85.png',
    ),
    Product(
        name='MEDIUM-SIZED TRAY WITH AN ANTI-SLIP SURFACE',
        description='A medium-sized wooden tray with an anti-slip surface and handles.',
        category='Kitchen',
        size='Medium',
        price='26990',
        image='assets/kitchen/86.png',
    ),
    Product(
        name='GRATER MADE OF STEEL AND ACACIA WOOD',
        description='A long stainless steel grater with an acacia wood handle for comfortable use.',
        category='Kitchen',
        size='Standard',
        price='9990',
        image='assets/kitchen/87.png',
    ),
    Product(
        name='EGG STAND WITH CONTRASTING EDGE',
        description='A cream-colored egg stand with a contrasting edge for a stylish touch.',
        category='Kitchen',
        size='Standard',
        price='6990',
        image='assets/kitchen/88.png',
    ),
    Product(
        name='KNIFE SHARPENING MACHINE WITH SUCTION CUP',
        description='A compact knife sharpening machine with a plastic body and suction cup for safety. Suitable for smooth and jagged blades.',
        category='Kitchen',
        size='Compact',
        price='10690',
        image='assets/kitchen/89.png',
    ),
    Product(
        name='KITCHEN TOWELS "DAYS OF THE WEEK" (SET OF 7 PIECES)',
        description='A set of seven cotton kitchen towels, one for each day of the week.',
        category='Kitchen',
        size='Standard',
        price='15990',
        image='assets/kitchen/90.png',
    )
]


Product.objects.bulk_create(products)

print("Products added successfully!")
'''