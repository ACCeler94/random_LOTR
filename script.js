const races = ['a Dwarf', 'a Human', 'an Elf', 'a Hobbit', 'an Orc']

// name packs for each race, Dwarves hid their females so no female dwarven heroes
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

// weapons used by heroes
const weapons = ['a One handed sword', 'a Battle axe', 'a Dagger', 'a Bow', 'a Two handed sword', 'a Warhammer', 'a Spear']

// abilities for heroes
const abilities = [
    "Berserker's rage - You strike fear into the hearts of your enemies every time when You enter this trance like fury!",
    "Shapeshifting - You possess a rare ability to change into one of terrifying creatures of The Middle Earth!",
    "Charismatic leader - Your companions are always motivated and fight twice as hard whenever You are leading them to battle!",
    "Dual wielding - You are ambidextrous which allows You to use any weapon You like in Your off-hand!",
    "Spirit-caller - Spirits of Your ancestors will come and help You every time You fight!",
    "Super reflex - Your naturally heightened senses, improved by years of hard training, allow You to move and react a lot faster than any of Your enemies!",
    "Unkillable - this nickname was given to You because of Your ability to heal even the most life threatening wounds in no time!",
]

const maleOrFemale = ['Male', 'Female']

// function for getting random value from an array
function getRandom(array){
    let i = Math.floor(Math.random() * array.length)
    return array[i]
}



function getHero(){
    let hero = {
        race: getRandom(races),
        maleOrFemale: getRandom(maleOrFemale),
        name:'',
        getName(){ 
            if(hero.race === 'a Dwarf'){
                hero.name = getRandom(dwarfNames) // statement for Dwarf (no Females)
            } else if(hero.race === 'a Human' && hero.maleOrFemale === 'Male'){ //statement for Human Male
                hero.name = getRandom(humanNamesMale)
            } else if(hero.race === 'a Human' && hero.maleOrFemale === 'Female'){ //statement for Human Female
                hero.name = getRandom(humanNamesFemale)
            } else if(hero.race === 'an Elf' && hero.maleOrFemale === 'Male'){ //statement for Elf Male
                hero.name = getRandom(elfNamesMale)
            } else if(hero.race === 'an Elf' && hero.maleOrFemale === 'Female'){ // statement for Elf Female
                hero.name = getRandom(elfNamesFemale)
            } else if(hero.race === 'a Hobbit' && hero.maleOrFemale === 'Male'){ // statement for Hobbit Male
                hero.name = getRandom(hobbitNamesMale)
            } else if(hero.race === 'a Hobbit' && hero.maleOrFemale === 'Female'){ // statement for Hobbit Female
                hero.name = getRandom(hobbitNamesFemale)
            } else if(hero.race === 'an Orc'){ // statement for Orc (no Females)
                hero.name = getRandom(orcNames)
            }
        },
        weapon: getRandom(weapons),
        ability: getRandom(abilities)
    
    }
    hero.getName() // getName method to get corresponding Name
    if(hero.maleOrFemale === 'Male' || hero.race === 'an Orc' || hero.race === 'a Dwarf'){ // Male form for all races
        console.log(`
    Your Hero name is: ${hero.name}!
    He is ${hero.race}!
    His weapon of choice is ${hero.weapon}! He is a champion of many great talents but his most powerful ability is: ${hero.ability}!`)
    } else if(hero.maleOrFemale === 'Female' && hero.race !== 'an Orc' && hero.race !== 'a Dwarf'){ // Female form exclude races that are only Male
        console.log(`
    Your Heroine name is: ${hero.name}!
    She is ${hero.race}!
    Her weapon of choice is ${hero.weapon}! She is a champion of many great talents but her most powerful ability is: ${hero.ability}`)
    }
} 



getHero()
