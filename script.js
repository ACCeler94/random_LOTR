const races = ['Dwarf', 'Human', 'Elf', 'Hobbit', 'Orc']

const dwarfNames = ['Anar', 'Balin', 'Beli', 'Bifur', 'Bláin', 'Bofur', 'Bombur', 'Borin',
   ' Burin', 'Dáin', 'Dori', 'Durin', 'Dwalin', 'Farin', 'Fíli', 'Flói', 'Frár',
    'Frerin', 'Frór', 'Fundin', 'Gimli', 'Ginar', 'Glóin', 'Gróin', 'Grór',
    'Hanar', 'Kíli',' Lófar', 'Lóni', 'Náin', 'Náli', 'Nár', 'Nói', 'Nori', 'Óin',
    'Ónar', 'Óri', 'Póri', 'Regin', 'Torin', 'Tráin', 'Trór', 'Vid']

const humanNamesMale = ['Bhân-goru-Bhân', 'Bhôn-rema-Bhôn',' Bhûn-daro-Bhûn', 'Dhân-moru-Dhân', 'Dhôn-bari-Dhôn', 'Dhûn-garo-Dhûn','Ghân-buri-ghân', 'Ghôn-rumi-ghôn', 
    'Rhôn-damu-Rhôn', 'Rhûn-bamo-Rhûn, Aldor', 'Baldor', 'Baldred', 'Bregdan', 'Brego', 'Brytta', 'Ceorl', 'Déor', 'Déorbrand', 
    'Déorgar', 'Déorhelm', 'Déorthain', 'Déorwine', 'Dernfara', 'Derngar', 'Dernhelm', 'Dernwine', 'Dúnhere', 'Elfhelm', 'Elfwine', 'Éadig', 'Éadmód',
    'Éoblod', 'Éogar', 'Éohere', 'Éoheort', 'Éomer', 'Éomód', 'Éomund', 'Éorl', 'Éoman', 'Éorcanstan',
    'Éored', 'Éothain' , 'Fram', 'Fréa', 'Fréaláf', 'Fréawine', 'Freca', 'Frumgar', 'Fulgar', 'Fulgrim', 'Fulor',
    'Fulthain', 'Gálmód', 'Gamling', 'Gárbald', 'Gárulf', 'Gárwine', 'Gléobeam', 'Gléomer', 'Gléothain', 'Gléowine',
    'Adrahil', 'Amlaith', 'Anardil', 'Anárion', 'Anborn', 'Angbor', 'Arador',' Araglas' , 'Aragorn', 'Aragost', 'Arahad', 'Arahael', 'Aranarth', 'Arannel', 'Aranuir',
    'Araphant',' Araphor', 'Arassuil', 'Arathorn', 'Araval', 'Aravir', 'Aravorn', 'Argeleb', 'Argonui', 'Arvedui', 'Arvegil', 'Arveleg', 'Baranor', 'Belecthor', 
    'Beleg', 'Belegorn', 'Beregond', 'Beren', 'Bergil', 'Boromir', 'Celepharn', 'Cirion', 'Damrod', 'Denethor', 'Derufin', 'Dervorin', 'Dírhael', 'Duilin',
    'Eradan', 'Faramir', 'Findegil', 'Finduilas', 'Forlong', 'Golasgil', 'Halbarad', 'Hallas', 'Hirgon', 'Hirluin', 'Húrin', 'Ingold', 'Iorlas', 'Mablung', 
    'Malbeth', 'Malvegil', 'Orodreth', 'Orthalion', 'Pelethanor', 'Torondir', 'Torongil', 'Turgon']
 
const humanNamesFemale = ['Déorhild', 'Déorwyn', 'Dernhild', 'Dernwyn', 'Elfhild', 'Elfwyn', 'Éohild', 'Éowyn', 'Gléowyn', 'Guthwyn' ,
    'Holdwyn', 'Heruwyn', 'Hild', 'Léofwyn', 'Téodwyn', 'Gilraen', 'Ioreth', 'Ivorwen', 'Lothíriel', 'Morwen']

const elfNamesMale = ['Aegnor', 'Aerandir', 'Alphanor', 'Amras', 'Anglas', 'Angrod', 'Annael', 'Aredhel', 'Arminas', 'Beleg', 'Beleganor',
    'Beleghir', 'Belegon', 'Belegorn', 'Calanaglar', 'Calangil', 'Calanhir', 'Calanlas', 'Calanlôr', 'Calanor', 'Calanros', 'Caranlas', 'Caranmîr', 'Caranthir',
    'Carmagor', 'Carmenel', 'Celebithil', 'Celeborn', 'Celebrimdor', 'Celebrond', 'Celegorm', 'Círdan', 'Cúthalion',
    'Daeron', 'Dagorhir', 'Denethor', 'Durandir', 'Edrahil', 'Elentir', 'Elernil', 'Elladan', 'Elrohir', 'Elrond', 'Elros', 'Elthoniel', 'Eöl', 'Ereinion', 'Erestor',
    'Estelmîr', 'Estelon', 'Fëanor', 'Fincalan', 'Fingalanor', 'Fingalithil', 'Fingon', 'Finrod', 'Firithlôr', 'Firithros', 'Fuinlôr', 'Galdagor', 'Galdor', 'Galion', 'Galithil',
    'Galmîr', 'Gelmir', 'Gilgalad', 'Glincalen', 'Glorcalan', 'Glorestel', 'Glorfindel', 'Guilin', 'Gwindor', 'Haldir', 'Hirimlad', 'Hîthlas', 'Ithilas',
    'Ithilorn', 'Ithiluin', 'Lascalan', 'Legolas', 'Linaith', 'Lincalan', 'Lindir', 'Linhir', 'Lôrestel', 'Lôrthoron', 'Mablung', 'Maedhros', 'Maeglin', 'Maglor', 
    'Malanor', 'Malcalan', 'Menelôr', 'Nauros', 'Orgalad', 'Orodreth', 'Orophin', 'Orthalion', 'Pelethanor', 'Pelethorn', 'Saeros', 'Turgon' ]

const elfNamesFemale = ['Arwen', 'Berúthiel', 'Calanmîr', 'Caranloth', 'Carwen', 'Celebereth', 'Celebrían', 'Celebrindal', 'Elbereth', 'Eltathar', 'Elwen', 'Elwing', 'Fimlas', 'Finduilas', 'Fingalanor',
    'Fingalithil', 'Galadriel', 'Hithriel', 'Idril', 'Ithilbereth', 'Ithiloth', 'Linwen', 'Lôrbereth', 'Lôrloth', 'Lôrwen', 'Lothbereth', 'Lothmîr', 'Lothwen', 'Luinloth', 'Luinmîr', 'Lúthien', 'Malbereth',
    'Meneloth', 'Mîrithil', 'Mîrwen', 'Narloth', 'Nauriel', 'Nimloth', 'Nimrodel', 'Orbereth']

const hobbitNamesMale = ['Adalgrim', 'Adelard', 'Andwise', 'Anson', 'Balbo', 'Balgo', 'Banco', 'Bandobras', 'Banto', 'Belbo', 'Berilac', 'Bilbo', 'Bingo', 'Blanco', 'Bodo', 'Bowman', 'Brac', 'Bucca', 'Bungo', 'Caradoc', 'Carl', 'Cob',
    'Cotman', 'Cottar', 'Dindonas', 'Dob', 'Doderic', 'Dodinas', 'Drodo', 'Drogo', 'Dudo', 'Erling', 'Falco', 'Faldo', 'Fastolph', 'Fastred', 'Felco', 'Ferdibrand', 'Ferdinand', 'Ferumbras', 'Filibert', 
    'Flambard', 'Folco', 'Fortinbras', 'Fosco', 'Fredegar', 'Frodo', 'Gerontius', 'Gorbadoc', 'Gorbulas', 'Gorhendad', 'Gormadoc', 'Griffo', 'Gundabald', 'Halfast', 'Halfred', 'Hamfast', 'Hamson', 'Harding', 'Hending', 'Hildibrand', 
    'Hildifons', 'Hildigard', 'Hildigrim', 'Hob', 'Hobson', 'Holfoot', 'Holman', 'Hugo', 'Ilberic', 'Isembard', 'Isembold', 'Isengar', 'Isemgrim', 'Isumbras', 'Lando', 'Largo', 'Lindo', 'Londo', 'Longo', 'Lotho', 'Madoc', 'Marcho', 
    'Marmadas', 'Marmadoc', 'Marroc', 'Meriadoc', 'Merimac', 'Merimas', 'Milo', 'Minto', 'Moro', 'Mosco', 'Mungo', 'Nob', 'Obo', 'Odo', 'Odovacar', 'Olo', 'Orgolas', 'Otho', 'Paladin', 'Perco', 'Peregrin', 'Pingo', 'Pob', 'Polo', 
    'Ponto', 'Porto', 'Punto', 'Posco', 'Reginard', 'Rendigar', 'Robin', 'Rolo', 'Rorimac', 'Rudigar', 'Rufus', 'Sadoc', 'Samwise', 'Sancho', 'Saradas', 'Saradoc', 'Seredic', 'Sigismond', 'Tobold', 'Togo', 'Tolma', 'Tolman', 'Wilcome', 
    'Wilibald', 'Will', 'Wiseman']

const hobbitNamesFemale = ['Adaldrida', 'Adamanta', 'Amaranth', 'Amber', 'Angelica', 'Asphodel', 'Belba', 'Bell', 'Belladonna', 'Berylla', 'Buttercup', 'Camellia', 'Celandine', 'Chica', 'Chrysoprasia', 'Columbine', 'Coral', 'Daisy', 
    'Diamond', 'Donnamira', 'Dora', 'Eglantine', 'Elanor', 'Esmerelda', 'Garnet', 'Gilly', 'Goldilocks', 'Hanna', 'Hilda', 'Holly', 'Hyacinth', 'Iris', 'Ivy', 'Laurel', 'Lavender', 'Lilac', 'Lily', 'Linda', 'Lobelia', 'Malva', 
    'Marigold', 'Marjoram', 'May', 'Melilot', 'Menegilda', 'Mentha', 'Mimosa', 'Mirabella', 'Myrtle', 'Opal', 'Pansy', 'Pearl', 'Peony', 'Peridot', 'Pervinca', 'Pimpernel', 'Poppy', 'Primrose', 'Primula', 'Prisca', 'Rosa', 
    'Rosamunda', 'Rose', 'Rowan', 'Ruby', 'Saffron', 'Salvia', 'Tansy', 'Tanta', 'Valerian']

const orcNames = ['Azog', 'Bolg', 'Búrz', 'Gazbag', 'Gazduf', 'Gazdush', 'Gazhúr', 'Gazgash', 'Gazbug', 'Gazhorn', 'Gazmog', 'Gazmuz', 'Gazrad', 'Gazrat', 'Gazthak', 'Gazlag', 'Gazlúk', 'Gazlûn', 'Gazlur', 'Gaznag', 'Gazuf', 
    'Gazug', 'Gazûl', 'Ghash', 'Golfimbul', 'Gorbag', 'Gorbug', 'Gorduf', 'Gordush', 'Gorgash', 'Gorgaz', 'Gorhúr', 'Gorlúk', 'Gorlûn', 'Gornag', 'Gorshag', 'Gorthak', 'Gorûl', 'Gorzag', 'Grishnákh', 'Lagbug', 'Lagduf', 
    'Lagdush', 'Laghúr', 'Laguf', 'Laglúg', 'Laglûn', 'Lagrad', 'Lagrat', 'Lagthak', 'Lug', 'Lugbag', 'Lugduf', 'Lugdush', 'Lughorn', 'Lughúr', 'Luglúk', 'Luglûn', 'Lugnag', 'Lugthak', 'Lugûl', 'Lugzag', 'Lûnbag', 'Lûnbug', 
    'Lûnduf', 'Lûndush', 'Lûngash', 'Lûngaz', 'Lûngor', 'Lûnhúr', 'Lûnlag', 'Lûnlúk', 'Lûnmaz', 'Lûnrad', 'Lûnrat', 'Lûnshag', 'Lûnthak', 'Lûnuf', 'Lûnug', 'Lûnûl', 'Lûnzag', 'Maubag', 'Maubug', 'Mauduf', 'Maudush', 
    'Maugash', 'Maugaz', 'Maugor', 'Mauhúr', 'Maulúk', 'Maulur', 'Maunag', 'Mauthak', 'Mauzag', 'Muzbag', 'Muzbug', 'Muzduf', 'Muzdush', 'Muzgash', 'Muzgaz', 'Muzgor', 'Muzhúr', 'Muzlag', 'Muzlug', 'Muzlúk', 'Muzlûn', 
    'Muzlur', 'Muznag', 'Muzrad', 'Muzrat', 'Muzthak', 'Muzug', 'Muzûl', 'Nagbug', 'Nagduf', 'Nagdush', 'Naghúr', 'Naglug', 'Naglúk', 'Naglur', 'Nagmuz', 'Nagug', 'Nagrad', 'Nagrat', 'Nagthak', 'Nagzag', 'Nûzu', 'Radbag', 
    'Radbug', 'Radgash', 'Radgaz', 'Radhúr', 'Radlag', 'Radlúk', 'Radmuz', 'Radnag', 'Radrat', 'Radthak', 'Radug', 'Radzag', 'Shagbug', 'Shagduf', 'Shagdush', 'Shaglúk', 'Shaglur', 'Shagrad', 'Shagrat', 'Shagthak', 'Shaguf', 
    'Shagug', 'Shagûl', 'Snaga', 'Ufgaz', 'Uflug', 'Uflúk', 'Ufthak', 'Ufzag', 'Ugbag', 'Ugduf', 'Ugdush', 'Ughúr', 'Uglag', 'Uglúk', 'Uglur', 'Ugmuz', 'Ugnag', 'Ugrad', 'Ugrat', 'Ugthak', 'Ugzag', 'Yagaz', 'Yagbug', 'Yagduf', 
    'Yagdush', 'Yaghúr', 'Yaglug', 'Yaglûn', 'Yaglúk', 'Yagmuz', 'Yagor', 'Yagrad', 'Yagrat', 'Yagthak', 'Yaguf', 'Yagug', 'Yagûl', 'Zagbug', 'Zagduf', 'Zagdush', 'Zaghúr', 'Zaglag', 'Zaglug', 'Zaglûn', 'Zaglúk', 'Zagmuz', 
    'Zagrad', 'Zagrat', 'Zagthak', 'Zaguf', 'Zagug']