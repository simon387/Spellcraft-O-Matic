function reCalc(elementUsed){//SERVE UN CAZZ IL PAR QQUI

let DAOCSTARTER_REAME = 0;//012 albion hib mid
//prima gemma
let DAOCSTARTER_G1_EFFECT = window.document.form1.g1effect.selectedIndex;
let DAOCSTARTER_G1_AMOUNT = window.document.form1.g1effect2.selectedIndex;
let DAOCSTARTER_G1_TERZA = window.document.form1.line1.selectedIndex;
//seconda gemma
let DAOCSTARTER_G2_EFFECT = window.document.form1.g2effect.selectedIndex;
let DAOCSTARTER_G2_AMOUNT = window.document.form1.g2effect2.selectedIndex;
let DAOCSTARTER_G2_TERZA = window.document.form1.line2.selectedIndex;
//terza gemma
let DAOCSTARTER_G3_EFFECT = window.document.form1.g3effect.selectedIndex;
let DAOCSTARTER_G3_AMOUNT = window.document.form1.g3effect2.selectedIndex;
let DAOCSTARTER_G3_TERZA = window.document.form1.line3.selectedIndex;
//quarta gemma
let DAOCSTARTER_G4_EFFECT = window.document.form1.g4effect.selectedIndex;
let DAOCSTARTER_G4_AMOUNT = window.document.form1.g4effect2.selectedIndex;
let DAOCSTARTER_G4_TERZA = window.document.form1.line4.selectedIndex;


var intNumAlbSkillsUsed = 34;
var intNumMidSkillsUsed = 30;
var intNumHibSkillsUsed = 34;
var intFocusUsedAlb = 12;
var intFocusUsedHib = 12;
var intFocusUsedMid = 6;
var arrOptions = new Array('+ Stat', '+ Resists', '+ Hits', '+ Power', '+ Focus', '+ Skill', 'Unused');
var arrSkills = new Array (1,2,3,4,5,6,7,8,9,10);
var arrSkillsUsedAlb = new Array('Body Destruction', 'Chants', 'Critical Strike', 'Crossbow', 'Crush', 'Death Servant', 'Deathsight', 'Dual Wield', 'Earth','Enhancement', 'Envenom', 'Flexible', 'Fire', 'Healing', 'Ice', 'Instruments', 'Longbow', 'Matter', 'Mind Twisting', 'Painworking', 'Parry', 'Polearm', 'Shield', 'Slash', 'Smite', 'Soulrending', 'Spirit Animation', 'Staff', 'Stealth', 'Thrust', 'Two Handed', 'Wind', 'All: Primary Melee', 'All: Casting');
var arrSkillsAlbName = new Array('heated evocation sigil', 'earthen fervor sigil', 'heated battle jewel', 'vapor war sigil', 'fiery war sigil', 'ashen fervor sigil', 'vacuous fervor sigil', 'icy war sigil', 'earthen evocation sigil', 'airy fervor sigil', 'dusty battle jewel', 'molten magma war sigil', 'fiery evocation sigil', 'watery fervor sigil', 'icy evocation sigil', 'vapor fervor sigil', 'airy war sigil', 'dusty evocation sigil', 'watery evocation sigil', 'salt encrusted fervor sigil', 'vapor battle jewel', 'earthen war sigil', 'fiery battle jewel', 'watery war sigil', 'fiery fervor sigil', 'steaming fervor sigil', 'vapor evocation sigil', 'earthen battle jewel',  'airy battle jewel', 'dusty war sigil', 'heated war sigil', 'airy evocation sigil', 'finesse war sigil', 'finesse fervor sigil');
var arrSkillsAlbMat1  = new Array('Ground Cave Crystal','Ground Blessed Undead Bone','Bloodied Battlefield Dirt','Ground Caer Stone','Ground Blessed Undead Bone','Ground Blessed Undead Bone','Ground Blessed Undead Bone','Ground Caer Stone','Ground Cave Crystal','Ground Blessed Undead Bone','Bloodied Battlefield Dirt','Ground Caer Stone','Ground Cave Crystal','Ground Blessed Undead Bone','Ground Cave Crystal','Ground Blessed Undead Bone','Ground Caer Stone','Ground Cave Crystal','Ground Cave Crystal','Ground Blessed Undead Bone','Bloodied Battlefield Dirt','Ground Caer Stone','Bloodied Battlefield Dirt','Ground Caer Stone','Ground Blessed Undead Bone','Ground Blessed Undead Bone','Ground Cave Crystal','Bloodied Battlefield Dirt','Bloodied Battlefield Dirt','Ground Caer Stone','Ground Caer Stone','Ground Cave Crystal','Ground Caer Stone','Ground Blessed Undead Bone');
var arrSkillsAlbMat2  = new Array('Heat From an Unearthly Pyre','Treant Blood','Heat From an Unearthly Pyre','Swamp Fog','Draconic Fire','Undead Ash and Holy Water','Swamp Fog','Frost From a Wasteland','Treant Blood','Air Elemental Essence','Undead Ash and Holy Water','Leviathan Blood','Draconic Fire','Leviathan Blood','Frost From a Wasteland','Swamp Fog','Air Elemental Essence','Undead Ash and Holy Water','Leviathan Blood','Undead Ash and Holy Water','Swamp Fog','Treant Blood','Draconic Fire','Leviathan Blood','Draconic Fire','Heat From an Unearthly Pyre','Swamp Fog','Treant Blood','Air Elemental Essence','Undead Ash and Holy Water','Heat From an Unearthly Pyre','Air Elemental Essence','Draconic Fire','Draconic Fire');
var arrSkillsUsedMid = new Array('Augmentation', 'Axe', 'Battlesongs', 'Beastcraft', 'Bonedancing', 'Composite Bow', 'Critical Strike', 'Cursing', 'Darkness', 'Envenom', 'Hammer', 'Hand to Hand', 'Hexing', 'Left Axe', 'Mending', 'Pacification', 'Odin\'s Will', 'Parry', 'Runecarving', 'Shield', 'Spear', 'Stealth', 'Stormcalling', 'Subterranean', 'Summoning', 'Suppression', 'Sword', 'Thrown Weapons', 'All: Primary Melee', 'All: Casting');
var arrSkillsMidName = new Array('airy chaos rune', 'earthen war rune', 'airy primal rune', 'earthen primal rune', 'ashen primal rune', 'airy war rune', 'heated battle jewel', 'blighted primal rune', 'icy chaos rune', 'dusty battle jewel', 'fiery war rune', 'lightning charged war rune', 'unholy primal rune', 'icy war rune', 'watery chaos rune', 'earthen chaos rune', 'valiant primal rune','vapor battle jewel', 'heated chaos rune', 'fiery battle jewel', 'heated war rune', 'airy battle jewel', 'fiery primal rune', 'fiery chaos rune', 'vapor chaos rune', 'dusty chaos rune', 'watery war rune', 'vapor war rune','finesse war rune', 'finesse primal rune');
var arrSkillsMidMat1  = new Array('Soot From Niflheim','Ground Giant Bone','Ground Vendo Bone','Ground Vendo Bone','Soot from Niflheim','Ground Giant Bone','Bloodied Battlefield Dirt','Soot From Niflheim','Ground Vendo Bone','Bloodied Battlefield Dirt','Ground Giant Bone','Ground Giant Bone','Ground Vendo Bone','Ground Giant Bone','Soot From Niflheim','Soot From Niflheim','Ground Vendo Bone','Bloodied Battlefield Dirt','Soot From Niflheim','Bloodied Battlefield Dirt','Ground Giant Bone','Bloodied Battlefield Dirt','Ground Vendo Bone','Soot From Niflheim','Soot From Niflheim','Soot From Niflheim','Ground Giant Bone','Ground Giant Bone','Ground Giant Bone','Ground Vendo Bone');
var arrSkillsMidMat2  = new Array('Air Elemental Essence','Treant Blood','Air Elemental Essence','Treant Blood','Undead Ash and Holy Water','Air Elemental Essence','Heat From an Unearthly Pyre','Treant Blood','Frost From a Wasteland','Undead Ash and Holy Water','Draconic Fire','Leviathan Blood','Frost From a Wasteland','Air Elemental Essence','Leviathan Blood','Treant Blood','Swamp Fog','Swamp Fog','Heat From an Unearthly Pyre','Draconic Fire','Heat From an Unearthly Pyre','Air Elemental Essence','Draconic Fire','Draconic Fire','Swamp Fog','Undead Ash and Holy Water','Leviathan Blood','Swamp Fog','Draconic Fire','Draconic Fire');
var arrSkillsUsedHib = new Array('Arboreal Path', 'Blades', 'Blunt', 'Celtic Dual', 'Celtic Spear', 'Critical Strike', 'Creeping Path', 'Dementia', 'Enchantments', 'Envenom', 'Ethereal Shriek', 'Large Weaponry', 'Light', 'Mana', 'Mentalism', 'Music', 'Nature', 'Nurture', 'Parry', 'Phantasmal Wail', 'Piercing', 'Recurve Bow', 'Regrowth', 'Scythe', 'Shield', 'Shadow Mastery', 'Spectral Guard', 'Stealth', 'Vampiiric Embrace', 'Valor', 'Verdant Path', 'Void', 'All: Primary Melee', 'All: Casting');
var arrSkillsHibName = new Array('steaming nature spell stone', 'water war spell stone', 'fiery war spell stone', 'icy war spell stone', 'earthen war spell stone', 'heated battle jewel', 'oozing nature spell stone', 'aberrant arcane spell stone', 'vapor arcane spell stone', 'dusty battle jewel', 'ethereal arcane spell stone', 'heated war spell stone', 'fiery arcane spell stone', 'watery arcane spell stone', 'earthen arcane spell stone', 'airy nature spell stone', 'earthen nature spell stone', 'fiery nature spell stone', 'vapor battle jewel', 'phantasmal arcane spell stone', 'dusty war spell stone', 'airy war spell stone', 'watery nature spell stone', 'light war spell stone', 'fiery battle jewel', 'shadowy arcane spell stone', 'spectral arcane spell stone', 'airy battle jewel', 'embracing arcane spell stone', 'airy arcane spell stone', 'mineral encrusted nature spell stone', 'icy arcane spell stone', 'finesse war spell stone', 'finesse nature spell stone');
var arrSkillsHibMat1  = new Array('Fairy Dust','Unseelie Dust','Unseelie Dust','Unseelie Dust','Unseelie Dust','Bloodied Battlefield Dirt','Fairy Dust','Otherworldly Dust','Otherworldly Dust','Bloodied Battlefield Dirt','Otherworldly Dust','Unseelie Dust','Otherworldly Dust','Otherworldly Dust','Otherworldly Dust','Fairy Dust','Fairy Dust','Fairy Dust','Bloodied Battlefield Dirt','Otherworldly Dust','Unseelie Dust','Unseelie Dust','Fairy Dust','Unseelie Dust','Bloodied Battlefield Dirt','Otherworldly Dust','Otherworldly Dust','Bloodied Battlefield Dirt','Otherworldly Dust', 'Otherworldly Dust','Fairy Dust','Otherworldly Dust','Unseelie Dust','Fairy Dust');
var arrSkillsHibMat2  = new Array( 'Swamp Fog','Leviathan Blood','Draconic Fire','Frost From a Wasteland','Treant Blood','Heat From an Unearthly Pyre','Swamp Fog','Treant Blood','Swamp Fog','Undead Ash and Holy Water','Leviathan Blood','Heat From an Unearthly Pyre','Draconic Fire','Leviathan Blood','Treant Blood','Air Elemental Essence','Treant Blood','Draconic Fire','Swamp Fog','Draconic Fire', 'Undead Ash and Holy Water','Air Elemental Essence','Leviathan Blood','Sun Light','Draconic Fire','Swamp Fog','Air Elemental Essence','Air Elemental Essence','Frost From a Wasteland','Air Elemental Essence','Heat From an Unearthly Pyre','Frost From a Wasteland','Draconic Fire','Draconic Fire');
var arrFocus = new Array (5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
var arrFocusUsedHib = new Array('Arboreal', 'Creeping', 'Enchantments', 'Ethereal Shriek', 'Light', 'Mana', 'Mentalism', 'Phantasmal Wail', 'Spectral Guard', 'Verdant', 'Void','All');
var arrFocusHibName = new Array('steaming focus stone', 'oozing focus stone', 'vapor focus stone', 'ethereal focus stone', 'fiery focus stone', 'watery focus stone', 'earthen focus stone', 'phantasmal focus stone', 'spectral arcane focus stone', 'mineral encrusted focus stone', 'icy focus stone', 'brilliant focus stone');
var arrFocusHibMat1 = new Array('Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales'); 
var arrFocusHibMat2 = new Array('Swamp Fog','Treant Blood','Swamp Fog','Swamp Fog','Draconic Fire','Leviathan Blood','Treant Blood','Leviathan Blood','Draconic Fire','Heat From an Unearthly Pyre','Frost From a Wasteland','Draconic Fire','Draconic Fire'); 
var arrFocusUsedMid = new Array('Bonedancing', 'Darkness', 'Runecarving', 'Summoning', 'Suppression', 'All');
var arrFocusMidName = new Array('ashen focus rune', 'icy focus rune', 'heated focus rune', 'vapor focus rune', 'dusty focus rune','brilliant focus rune');
var arrFocusMidMat1 = new Array('Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales'); 
var arrFocusMidMat2 = new Array('Undead Ash and Holy Water','Frost From a Wasteland','Heat From an Unearthly Pyre','Swamp Fog','Undead Ash and Holy Water','Draconic Fire'); 
var arrFocusUsedAlb = new Array('Earth', 'Cold', 'Fire', 'Wind', 'Body', 'Matter', 'Spirit', 'Mind');
var arrFocusUsedAlb = new Array('Body', 'Cold','Death Servant', 'Deathsight', 'Earth', 'Fire', 'Matter', 'Mind', 'Painworking' , 'Spirit',  'Wind', 'All' );
var arrFocusAlbName = new Array('heated focus sigil', 'icy focus sigil', 'ashen focus sigil',  'vacuous focus sigil', 'earthen focus sigil',  'fiery focus sigil', 'dusty focus sigil',  'watery focus sigil',  'salt encrusted focus sigil', 'vapor focus sigil', 'airy focus sigil', 'brilliant focus sigil');
var arrFocusAlbMat1 = new Array('Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales'); 
var arrFocusAlbMat2 = new Array('Heat From an Unearthly Pyre','Frost From a Wasteland','Undead Ash and Holy Water','Swamp Fog','Treant Blood','Draconic Fire','Undead Ash and Holy Water','Leviathan Blood','Mystic Energy','Swamp Fog','Air Elemental Essence','Draconic Fire'); 
var arrPower = new Array(1,	2,	3,	5,	7,	9,	11,	13,	15,	17);
var arrHits = new Array(4, 12, 20, 28, 36, 44, 52, 60, 68, 76);
var arrResist = new Array(1,2,3,5,7,9,11,13,	15,	17);
var arrResistUsed = new Array('Body', 'Cold', 'Heat', 'Energy', 'Matter', 'Spirit', 'Thrust', 'Crush', 'Slash');
var arrResistName = new Array('dusty shielding jewel', 'icy shielding jewel', 'heated shielding jewel', 'light shielding jewel', 'earthen shielding jewel', 'vapor shielding jewel', 'airy shielding jewel', 'fiery shielding jewel', 'watery shielding jewel');
var arrResistMat1 = new Array(	'Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales','Ground Draconic Scales'); 
var arrResistMat2 = new Array(	'Undead Ash and Holy Water','Frost From a Wasteland','Heat from an Unearthly Pyre','Sun Light','Treant Blood','Swamp Fog','Air Elemental Essence','Draconic Fire','Leviathan Blood'); 
var arrStats = new Array(1,	3,	5,	7,	9,	11,	13,	15,	17,	19);
var arrStatsUsed = new Array('STR', 'DEX', 'QUI', 'CON', 'INT', 'PIE', 'EMP', 'CHA');
var arrStatsName = new Array('fiery essence jewel', 'vapor essence jewel', 'airy essence jewel', 'earthen essence jewel', 'dusty essence jewel', 'watery essence jewel', 'heated essence jewel', 'icy essence jewel');
var arrStatsMat1 = new Array(	'Essence of Life','Essence of Life','Essence of Life','Essence of Life','Essence of Life','Essence of Life','Essence of Life','Essence of Life'); 
var arrStatsMat2 = new Array(	'Draconic Fire','Swamp Fog','Air Elemental Essence','Treant Blood','Undead Ash and Holy Water','Leviathan Blood','Heat From an Unearthly Pyre','Frost From a Wasteland'); 
var arrGemStrength = new Array('Raw', 'Uncut', 'Rough','Flawed','Imperfect','Polished','Faceted','Precious','Flawless','Perfect')
var marrImbue = new Array( new Array("0","1","1","1","1","1","1"),new Array("1","1","1","1","1","2","2"),new Array("1","1","1","2","2","2","2"),new Array("1","1","2","2","2","3","3"),new Array("1","2","2","2","3","3","4"),new Array("1","2","2","3","3","4","4"),new Array("2","2","3","3","4","4","5"),new Array("2","3","3","4","4","5","5"),new Array("2","3","3","4","5","5","6"),new Array("2","3","4","4","5","6","7"),new Array("2","3","4","5","6","6","7"),new Array("3","4","4","5","6","7","8"),new Array("3","4","5","6","6","7","9"),new Array("3","4","5","6","7","8","9"),new Array("3","4","5","6","7","8","10"),new Array("3","5","6","7","8","9","10"),new Array("4","5","6","7","8","10","11"),new Array("4","5","6","8","9","10","12"),new Array("4","6","7","8","9","11","12"),new Array("4","6","7","8","10","11","13"),new Array("4","6","7","9","10","12","13"),new Array("5","6","8","9","11","12","14"),new Array("5","7","8","10","11","13","15"),new Array("5","7","9","10","12","13","15"),new Array("5","7","9","10","12","14","16"),new Array("5","8","9","11","12","14","16"),new Array("6","8","10","11","13","15","17"),new Array("6","8","10","12","13","15","18"),new Array("6","8","10","12","14","16","18"),new Array("6","9","11","12","14","16","19"),new Array("6","9","11","13","15","17","20"),new Array("7","9","11","13","15","17","20"),new Array("7","10","12","14","16","18","21"),new Array("7","10","12","14","16","19","21"),new Array("7","10","12","14","17","19","22"),new Array("7","10","13","15","17","20","23"),new Array("8","11","13","15","17","20","23"),new Array("8","11","13","16","18","21","24"),new Array("8","11","14","16","18","21","24"),new Array("8","11","14","16","19","22","25"),new Array("8","12","14","17","19","22","26"),new Array("9","12","15","17","20","23","26"),new Array("9","12","15","18","20","23","27"),new Array("9","13","15","18","21","24","27"),new Array("9","13","16","18","21","24","28"),new Array("9","13","16","19","22","25","29"),new Array("10","13","16","19","22","25","29"),new Array("10","14","17","20","23","26","30"),new Array("10","14","17","20","23","27","31"),new Array("10","14","17","20","23","27","31"),new Array("10","15","18","21","24","28","32") );
var arrGemStrGem   = new Array('Lo',  'Um',    'On',   'Ee',    'Pal',      'Mon',     'Ros',    'Zo',      'Kath',    'Ra') 
var arrSkilldigit1 = new Array('',     '1',     '2',    '3',     '4',        '5',       '6',      '7',       '8',       '9') 
var arrGemStrMat1a = new Array('1',    '5',     '9',   '13',    '17',       '21',      '25',     '29',      '33',      '37') 
var arrGemStrMat1b = new Array('1',    '6',    '11',   '16',    '21',       '26',      '31',     '36',      '41',      '46') 
var arrGemStrMat2  = new Array('1',    '2',     '3',    '4',     '5',        '6',       '7',      '8',       '9',      '10')

const  doOutputLine = function(element1, element2, element3, realm){
var tr = '';
switch(element1) {
	case 0:
		tr = tr + '- ';
		switch(element3) {
			case 0:
				tr = tr + 'Strength: '; break;
			case 1:
				tr = tr + 'Dexterity: '; break;
			case 2:
				tr = tr + 'Quickness: '; break;
			case 3:
				tr = tr + 'Constitution: '; break;
			case 4:
				tr = tr + 'Intelligence: '; break;
			case 5:
				tr = tr + 'Piety: '; break;
			case 6:
				tr = tr + 'Empathy: '; break;
			case 7:
				tr = tr + 'Charisma: '; break;
		}
 	tr = tr + Math.floor(arrStats[element2] * 1.5) + '\n';break;
  case 1:
     tr = '- ' + arrResistUsed[element3] + ': ' + arrResist[element2] + '%\n';
  break;
  case 2:
     tr = '- ' + 'Hits: ' + arrHits[element2] + '\n';
  break;
  case 3:
     tr = '- ' + 'Power: ' + arrPower[element2] + '\n';
  break;
  case 4:
    switch(realm) {
    case 0:
     tr = '- ' + arrFocusUsedAlb[element3] + ': ' + arrFocus[element2] + ' lvls\n';
     break;
    case 1:
     tr = '- ' + arrFocusUsedHib[element3] + ': ' + arrFocus[element2] + ' lvls\n';
     break;
    case 2:
     tr = '- ' + arrFocusUsedMid[element3] + ': ' + arrFocus[element2] + ' lvls\n';
     break;
     }
  break;
  case 5:
    switch(realm) {
    case 0:
     tr = '- ' + arrSkillsUsedAlb[element3] + ': ' + arrSkills[element2] + '\n';
     break;
    case 1:
     tr = '- ' + arrSkillsUsedHib[element3] + ': ' + arrSkills[element2] + '\n';
     break;
    case 2:
     tr = '- ' + arrSkillsUsedMid[element3] + ': ' + arrSkills[element2] + '\n';
     break;
     }
  break;
}
return tr;
}

// reset pulldowns: gem 1
var intSelect = 0;
if ((elementUsed == 1) || (elementUsed == 5)) {
while (window.document.form1.g1effect2.options.length>0)
    {
	 deleteIndex=window.document.form1.g1effect2.options.length-1;
	 window.document.form1.g1effect2.options[deleteIndex]=null;
	}
while (window.document.form1.line1.options.length>0)
    {
	 deleteIndex=window.document.form1.line1.options.length-1;
	 window.document.form1.line1.options[deleteIndex]=null;
	}



switch (DAOCSTARTER_G1_EFFECT) {
case 0:
  for (i = 0; i < 10; i++) {
  myOption=new Option();
  myOption.text="+ " + Math.floor(arrStats[i] * 1.5);
  if (DAOCSTARTER_G1_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G1_AMOUNT;
   else
    insertIndex=window.document.form1.g1effect2.options.length;
   window.document.form1.g1effect2.options[insertIndex]=myOption;
  }
  for (i = 0; i < 8; i++) {
  myOption=new Option();
  myOption.text= arrStatsUsed[i];
  if (DAOCSTARTER_G1_TERZA > 0)
    insertIndex=DAOCSTARTER_G1_TERZA;
   else
    insertIndex=window.document.form1.line1.options.length;
   window.document.form1.line1.options[insertIndex]=myOption;
  }
  break;
case 1:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrResist[i];
  if (DAOCSTARTER_G1_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G1_AMOUNT;
   else
    insertIndex=window.document.form1.g1effect2.options.length;
   window.document.form1.g1effect2.options[insertIndex]=myOption;
  }
    for (i = 0; i < 9; i++) {
  myOption=new Option();
  myOption.text= arrResistUsed[i];
  if (DAOCSTARTER_G1_TERZA > 0)
    insertIndex=DAOCSTARTER_G1_TERZA;
   else
    insertIndex=window.document.form1.line1.options.length;
   window.document.form1.line1.options[insertIndex]=myOption;
  }
  break;
case 2:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrHits[i];
  if (DAOCSTARTER_G1_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G1_AMOUNT;
   else
    insertIndex=window.document.form1.g1effect2.options.length;
   window.document.form1.g1effect2.options[insertIndex]=myOption;
  }
    myOption=new Option();
  myOption.text= 'HP';
  if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
  window.document.form1.line1.options[insertIndex]=myOption;
  break;
case 3:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrPower[i];
  if (DAOCSTARTER_G1_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G1_AMOUNT;
   else
    insertIndex=window.document.form1.g1effect2.options.length;
   window.document.form1.g1effect2.options[insertIndex]=myOption;
  }
  myOption=new Option();
  myOption.text= 'Power';
  if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
  window.document.form1.line1.options[insertIndex]=myOption;
  break;
case 4:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrFocus[i];
  if (DAOCSTARTER_G1_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G1_AMOUNT;
   else
    insertIndex=window.document.form1.g1effect2.options.length;
   window.document.form1.g1effect2.options[insertIndex]=myOption;
  }
  switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intFocusUsedAlb; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedAlb[i];
       if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
       window.document.form1.line1.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intFocusUsedHib; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedHib[i];
       if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
       window.document.form1.line1.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intFocusUsedMid; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedMid[i];
       if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
       window.document.form1.line1.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
case 5:
  for (i = 0; i < 8; i++) {
    myOption=new Option();
  myOption.text="+ " + arrSkills[i];
  if (DAOCSTARTER_G1_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G1_AMOUNT;
   else
    insertIndex=window.document.form1.g1effect2.options.length;
   window.document.form1.g1effect2.options[insertIndex]=myOption;
  }
    switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intNumAlbSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedAlb[i];
       if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
       window.document.form1.line1.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intNumHibSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedHib[i];
       if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
       window.document.form1.line1.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intNumMidSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedMid[i];
       if (DAOCSTARTER_G1_TERZA > 0)
         insertIndex=DAOCSTARTER_G1_TERZA;
       else
         insertIndex=window.document.form1.line1.options.length;
       window.document.form1.line1.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
  }
}

// Reset pulldowns: gem 2
if ((elementUsed == 2) || (elementUsed == 5)) {
while (window.document.form1.g2effect2.options.length>0){
	 deleteIndex=window.document.form1.g2effect2.options.length-1;
	 window.document.form1.g2effect2.options[deleteIndex]=null;
	}
while (window.document.form1.line2.options.length>0){
	 deleteIndex=window.document.form1.line2.options.length-1;
	 window.document.form1.line2.options[deleteIndex]=null;
	}

switch (DAOCSTARTER_G2_EFFECT) {
case 0:
  for (i = 0; i < 10; i++) {
  myOption=new Option();
  myOption.text="+ " + Math.floor(arrStats[i] * 1.5);
  if (DAOCSTARTER_G2_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G2_AMOUNT;
   else
    insertIndex=window.document.form1.g2effect2.options.length;
   window.document.form1.g2effect2.options[insertIndex]=myOption;
  }
  for (i = 0; i < 8; i++) {
  myOption=new Option();
  myOption.text= arrStatsUsed[i];
  if (DAOCSTARTER_G2_TERZA > 0)
    insertIndex=DAOCSTARTER_G2_TERZA;
   else
    insertIndex=window.document.form1.line2.options.length;
   window.document.form1.line2.options[insertIndex]=myOption;
  }
  break;
case 1:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrResist[i];
  if (DAOCSTARTER_G2_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G2_AMOUNT;
   else
    insertIndex=window.document.form1.g2effect2.options.length;
   window.document.form1.g2effect2.options[insertIndex]=myOption;
  }
    for (i = 0; i < 9; i++) {
  myOption=new Option();
  myOption.text= arrResistUsed[i];
  if (DAOCSTARTER_G2_TERZA > 0)
    insertIndex=DAOCSTARTER_G2_TERZA;
   else
    insertIndex=window.document.form1.line2.options.length;
   window.document.form1.line2.options[insertIndex]=myOption;
  }
  break;
case 2:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrHits[i];
  if (DAOCSTARTER_G2_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G2_AMOUNT;
   else
    insertIndex=window.document.form1.g2effect2.options.length;
   window.document.form1.g2effect2.options[insertIndex]=myOption;
  }
    myOption=new Option();
  myOption.text= 'HP';
  if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
  window.document.form1.line2.options[insertIndex]=myOption;
  break;
case 3:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrPower[i];
  if (DAOCSTARTER_G2_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G2_AMOUNT;
   else
    insertIndex=window.document.form1.g2effect2.options.length;
   window.document.form1.g2effect2.options[insertIndex]=myOption;
  }
  myOption=new Option();
  myOption.text= 'Power';
  if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
  window.document.form1.line2.options[insertIndex]=myOption;
  break;
case 4:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrFocus[i];
  if (DAOCSTARTER_G2_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G2_AMOUNT;
   else
    insertIndex=window.document.form1.g2effect2.options.length;
   window.document.form1.g2effect2.options[insertIndex]=myOption;
  }
  switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intFocusUsedAlb; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedAlb[i];
       if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
       window.document.form1.line2.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intFocusUsedHib; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedHib[i];
       if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
       window.document.form1.line2.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intFocusUsedMid; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedMid[i];
       if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
       window.document.form1.line2.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
case 5:
  for (i = 0; i < 8; i++) {
    myOption=new Option();
  myOption.text="+ " + arrSkills[i];
  if (DAOCSTARTER_G2_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G2_AMOUNT;
   else
    insertIndex=window.document.form1.g2effect2.options.length;
   window.document.form1.g2effect2.options[insertIndex]=myOption;
  }
    switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intNumAlbSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedAlb[i];
       if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
       window.document.form1.line2.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intNumHibSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedHib[i];
       if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
       window.document.form1.line2.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intNumMidSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedMid[i];
       if (DAOCSTARTER_G2_TERZA > 0)
         insertIndex=DAOCSTARTER_G2_TERZA;
       else
         insertIndex=window.document.form1.line2.options.length;
       window.document.form1.line2.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
  }
}

// Reset pulldowns: gem 3
if ((elementUsed == 3) || (elementUsed == 5)) {
while (window.document.form1.g3effect2.options.length>0) {
	 deleteIndex=window.document.form1.g3effect2.options.length-1;
	 window.document.form1.g3effect2.options[deleteIndex]=null;
	}
while (window.document.form1.line3.options.length>0) {
	 deleteIndex=window.document.form1.line3.options.length-1;
	 window.document.form1.line3.options[deleteIndex]=null;
	}

switch (DAOCSTARTER_G3_EFFECT) {
case 0:
  for (i = 0; i < 10; i++) {
  myOption=new Option();
  myOption.text="+ " + Math.floor(arrStats[i] * 1.5);
  if (DAOCSTARTER_G3_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G3_AMOUNT;
   else
    insertIndex=window.document.form1.g3effect2.options.length;
   window.document.form1.g3effect2.options[insertIndex]=myOption;
  }
  for (i = 0; i < 8; i++) {
  myOption=new Option();
  myOption.text= arrStatsUsed[i];
  if (DAOCSTARTER_G3_TERZA > 0)
    insertIndex=DAOCSTARTER_G3_TERZA;
   else
    insertIndex=window.document.form1.line3.options.length;
   window.document.form1.line3.options[insertIndex]=myOption;
  }
  break;
case 1:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrResist[i];
  if (DAOCSTARTER_G3_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G3_AMOUNT;
   else
    insertIndex=window.document.form1.g3effect2.options.length;
   window.document.form1.g3effect2.options[insertIndex]=myOption;
  }
    for (i = 0; i < 9; i++) {
  myOption=new Option();
  myOption.text= arrResistUsed[i];
  if (DAOCSTARTER_G3_TERZA > 0)
    insertIndex=DAOCSTARTER_G3_TERZA;
   else
    insertIndex=window.document.form1.line3.options.length;
   window.document.form1.line3.options[insertIndex]=myOption;
  }
  break;
case 2:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrHits[i];
  if (DAOCSTARTER_G3_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G3_AMOUNT;
   else
    insertIndex=window.document.form1.g3effect2.options.length;
   window.document.form1.g3effect2.options[insertIndex]=myOption;
  }
    myOption=new Option();
  myOption.text= 'HP';
  if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
  window.document.form1.line3.options[insertIndex]=myOption;
  break;
case 3:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrPower[i];
  if (DAOCSTARTER_G3_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G3_AMOUNT;
   else
    insertIndex=window.document.form1.g3effect2.options.length;
   window.document.form1.g3effect2.options[insertIndex]=myOption;
  }
  myOption=new Option();
  myOption.text= 'Power';
  if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
  window.document.form1.line3.options[insertIndex]=myOption;
  break;
case 4:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrFocus[i];
  if (DAOCSTARTER_G3_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G3_AMOUNT;
   else
    insertIndex=window.document.form1.g3effect2.options.length;
   window.document.form1.g3effect2.options[insertIndex]=myOption;
  }
  switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intFocusUsedAlb; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedAlb[i];
       if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
       window.document.form1.line3.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intFocusUsedHib; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedHib[i];
       if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
       window.document.form1.line3.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intFocusUsedMid; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedMid[i];
       if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
       window.document.form1.line3.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
case 5:
  for (i = 0; i < 8; i++) {
    myOption=new Option();
  myOption.text="+ " + arrSkills[i];
  if (DAOCSTARTER_G3_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G3_AMOUNT;
   else
    insertIndex=window.document.form1.g3effect2.options.length;
   window.document.form1.g3effect2.options[insertIndex]=myOption;
  }
    switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intNumAlbSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedAlb[i];
       if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
       window.document.form1.line3.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intNumHibSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedHib[i];
       if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
       window.document.form1.line3.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intNumMidSkillsUSed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedMid[i];
       if (DAOCSTARTER_G3_TERZA > 0)
         insertIndex=DAOCSTARTER_G3_TERZA;
       else
         insertIndex=window.document.form1.line3.options.length;
       window.document.form1.line3.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
  }
}

// Reset pulldowns: gem 4
if ((elementUsed == 4) || (elementUsed == 5)) {
while (window.document.form1.g4effect2.options.length>0) {
	 deleteIndex=window.document.form1.g4effect2.options.length-1;
	 window.document.form1.g4effect2.options[deleteIndex]=null;
}
while (window.document.form1.line4.options.length>0){
	 deleteIndex=window.document.form1.line4.options.length-1;
	 window.document.form1.line4.options[deleteIndex]=null;
}
switch (DAOCSTARTER_G4_EFFECT) {
case 0:
  for (i = 0; i < 10; i++) {
  myOption=new Option();
  myOption.text="+ " + Math.floor(arrStats[i] * 1.5);
  if (DAOCSTARTER_G4_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G4_AMOUNT;
   else
    insertIndex=window.document.form1.g4effect2.options.length;
   window.document.form1.g4effect2.options[insertIndex]=myOption;
  }
  for (i = 0; i < 8; i++) {
  myOption=new Option();
  myOption.text= arrStatsUsed[i];
  if (DAOCSTARTER_G4_TERZA > 0)
    insertIndex=DAOCSTARTER_G4_TERZA;
   else
    insertIndex=window.document.form1.line4.options.length;
   window.document.form1.line4.options[insertIndex]=myOption;
  }
  break;
case 1:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrResist[i];
  if (DAOCSTARTER_G4_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G4_AMOUNT;
   else
    insertIndex=window.document.form1.g4effect2.options.length;
   window.document.form1.g4effect2.options[insertIndex]=myOption;
  }
    for (i = 0; i < 9; i++) {
  myOption=new Option();
  myOption.text= arrResistUsed[i];
  if (DAOCSTARTER_G4_TERZA > 0)
    insertIndex=DAOCSTARTER_G4_TERZA;
   else
    insertIndex=window.document.form1.line4.options.length;
   window.document.form1.line4.options[insertIndex]=myOption;
  }
  break;
case 2:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrHits[i];
  if (DAOCSTARTER_G4_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G4_AMOUNT;
   else
    insertIndex=window.document.form1.g4effect2.options.length;
   window.document.form1.g4effect2.options[insertIndex]=myOption;
  }
    myOption=new Option();
  myOption.text= 'HP';
  if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
  window.document.form1.line4.options[insertIndex]=myOption;
  break;
case 3:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrPower[i];
  if (DAOCSTARTER_G4_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G4_AMOUNT;
   else
    insertIndex=window.document.form1.g4effect2.options.length;
   window.document.form1.g4effect2.options[insertIndex]=myOption;
  }
  myOption=new Option();
  myOption.text= 'Power';
  if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
  window.document.form1.line4.options[insertIndex]=myOption;
  break;
case 4:
  for (i = 0; i < 10; i++) {
    myOption=new Option();
  myOption.text="+ " + arrFocus[i];
  if (DAOCSTARTER_G4_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G4_AMOUNT;
   else
    insertIndex=window.document.form1.g4effect2.options.length;
   window.document.form1.g4effect2.options[insertIndex]=myOption;
  }
  switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intFocusUsedAlb; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedAlb[i];
       if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
       window.document.form1.line4.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intFocusUsedHib; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedHib[i];
       if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
       window.document.form1.line4.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intFocusUsedMid; i++) {
       myOption=new Option();
       myOption.text= arrFocusUsedMid[i];
       if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
       window.document.form1.line4.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
case 5:
  for (i = 0; i < 8; i++) {
    myOption=new Option();
  myOption.text="+ " + arrSkills[i];
  if (DAOCSTARTER_G4_AMOUNT > 0)
    insertIndex=DAOCSTARTER_G4_AMOUNT;
   else
    insertIndex=window.document.form1.g4effect2.options.length;
   window.document.form1.g4effect2.options[insertIndex]=myOption;
  }
    switch (DAOCSTARTER_REAME) {
    case 0:
	  for (i = 0; i < intNumAlbSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedAlb[i];
       if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
       window.document.form1.line4.options[insertIndex]=myOption;
        }
	   break;
    case 1:
	  for (i = 0; i < intNumHibSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedHib[i];
       if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
       window.document.form1.line4.options[insertIndex]=myOption;
        }
	   break;
    case 2:
	  for (i = 0; i < intNumMidSkillsUsed; i++) {
       myOption=new Option();
       myOption.text= arrSkillsUsedMid[i];
       if (DAOCSTARTER_G4_TERZA > 0)
         insertIndex=DAOCSTARTER_G4_TERZA;
       else
         insertIndex=window.document.form1.line4.options.length;
       window.document.form1.line4.options[insertIndex]=myOption;
        }
	   break;
	}
  break;
  }
}//fino a qui solo comportamento estetico

var imbue_points = marrImbue[50][0];
//window.do___cument.form1.itemcap.value = imbue_points;
var t1 = "Your Item Here!" + '\nMagical Bonuses:\n';
var itemStrength1 = 0;
var itemStrength2 = 0;
var itemStrength3 = 0;
var itemStrength4 = 0;
var REAME012 = 0;
var BONUSAMOUNT = 0;
var BONUSULTIMACELLA = 0;
var strOutput = '';
var strOutput2 = '';
var BONUS0123456UNUSED = DAOCSTARTER_G1_EFFECT;//0 = stat, 1 = resist, 2= hits 3=power 4=focus 5=skill 6=unused
if (BONUS0123456UNUSED < 6) {//se diverso da "unused"
REAME012 = DAOCSTARTER_REAME;//0 = albion, 1 = hibernia, 2 = midgard
BONUSAMOUNT = DAOCSTARTER_G1_AMOUNT;//-1 nessun + valore, altrimenti indice di array
BONUSULTIMACELLA = DAOCSTARTER_G1_TERZA;//indice dell'ultima casella a dx
switch (BONUS0123456UNUSED) {//
 case 0:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrStatsName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrStatsMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrStatsMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 1:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrResistName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrResistMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrResistMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 2:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' blood essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Giants Blood\n';
   break;
 case 3:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' mystic essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Essence \n';
   break;
 case 4:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusAlbName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusAlbMat2[BONUSULTIMACELLA];
	 if (BONUSULTIMACELLA == intFocusUsedAlb - 1) { strOutput2 = strOutput2 + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Energy' + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Treant Blood'; }
	 strOutput2 = strOutput2 + '\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusHibName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusHibMat2[BONUSULTIMACELLA];
	 if (BONUSULTIMACELLA  == intFocusUsedHib - 1) { strOutput2 = strOutput2 + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Energy' + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Treant Blood'; }
	 strOutput2 = strOutput2 + '\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusMidName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusMidMat2[BONUSULTIMACELLA];
	 if (BONUSULTIMACELLA  == intFocusUsedMid - 1) { strOutput2 = strOutput2 + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Energy' + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Treant Blood'; }
	 strOutput2 = strOutput2 + '\n';
	 break;
	 }
   break;
 case 5:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsAlbName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsAlbMat2[BONUSULTIMACELLA];
	 if (BONUSULTIMACELLA >= intNumAlbSkillsUsed - 2) { strOutput2 = strOutput2 + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Energy' + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Treant Blood'; }
	 strOutput2 = strOutput2 + '\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsHibName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsHibMat2[BONUSULTIMACELLA];
	  if (BONUSULTIMACELLA >= intNumHibSkillsUsed - 2) { strOutput2 = strOutput2 + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Energy' + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Treant Blood'; }
	 strOutput2 = strOutput2 + '\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsMidName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsMidMat2[BONUSULTIMACELLA];
 if (BONUSULTIMACELLA >= intNumMidSkillsUsed - 2) { strOutput2 = strOutput2 + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Energy' + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' Treant Blood';}
	 strOutput2 = strOutput2 + '\n';
	 break;
	 }
   break;
}
}//questo if serviva solo per nomi gemme e materiali

if (BONUS0123456UNUSED == 3){
	BONUS0123456UNUSED = 1;
}
switch (BONUS0123456UNUSED) {
  case 0: itemStrength1 = (BONUSAMOUNT * 2) + 1; break;
  case 1: if (BONUSAMOUNT == 0) {itemStrength1 = 1;}
	if (BONUSAMOUNT == 1) {itemStrength1 = 2;}
	if (BONUSAMOUNT == 2) {itemStrength1 = 4;}
	if (BONUSAMOUNT == 3) {itemStrength1 = 8;}
	if (BONUSAMOUNT == 4) {itemStrength1 = 12;}
	if (BONUSAMOUNT == 5) {itemStrength1 = 16;}
	if (BONUSAMOUNT == 6) {itemStrength1 = 20;}
	if (BONUSAMOUNT == 7) {itemStrength1 = 24;}
	if (BONUSAMOUNT == 8) {itemStrength1 = 28;}
	if (BONUSAMOUNT == 9) {itemStrength1 = 32;}
    break;
  case 2: itemStrength1 = (BONUSAMOUNT * 2);
	if (itemStrength1 > 0) { itemStrength1 = itemStrength1 + 1; }
	if (itemStrength1 == 0) { itemStrength1 = 1; }
    break;
  case 5: itemStrength1 = BONUSAMOUNT * 5;
    if (itemStrength1 == 0) { itemStrength1 = 1; }
    break;
}
//seconda gemma
BONUS0123456UNUSED = DAOCSTARTER_G2_EFFECT;//seconda gemma
if (DAOCSTARTER_G2_EFFECT < 6) {
REAME012 = DAOCSTARTER_REAME;
BONUSAMOUNT = DAOCSTARTER_G2_AMOUNT;//seconda gemma
BONUSULTIMACELLA = DAOCSTARTER_G2_TERZA;//seconda gemma

switch (BONUS0123456UNUSED) {
 case 0:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrStatsName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrStatsMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrStatsMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 1:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrResistName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrResistMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrResistMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 2:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' blood essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Giants Blood\n';
   break;
 case 3:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' mystic essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Essence \n';
   break;
 case 4:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusAlbName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusAlbMat2[BONUSULTIMACELLA] +'\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusHibName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusHibMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusMidName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusMidMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 }
   break;
 case 5:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsAlbName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsAlbMat2[BONUSULTIMACELLA] +'\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsHibName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsHibMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsMidName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsMidMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 }
   break;
}
}
if (BONUS0123456UNUSED == 3) { BONUS0123456UNUSED = 1; }
switch (BONUS0123456UNUSED) {
  case 0: itemStrength2 = (BONUSAMOUNT * 2) + 1; break;
  case 1: if (BONUSAMOUNT == 0) { itemStrength2 = 1;}
	if (BONUSAMOUNT == 1) {itemStrength2 = 2;}
	if (BONUSAMOUNT == 2) {itemStrength2 = 4;}
	if (BONUSAMOUNT == 3) {itemStrength2 = 8;}
	if (BONUSAMOUNT == 4) {itemStrength2 = 12;}
	if (BONUSAMOUNT == 5) {itemStrength2 = 16;}
	if (BONUSAMOUNT == 6) {itemStrength2 = 20;}
	if (BONUSAMOUNT == 7) {itemStrength2 = 24;}
	if (BONUSAMOUNT == 8) {itemStrength2 = 28;}
	if (BONUSAMOUNT == 9) {itemStrength2 = 32;}
    break;
  case 2: itemStrength2 = (BONUSAMOUNT * 2);
    if (itemStrength2 > 0) { itemStrength2 = itemStrength2 + 1;}
	if (itemStrength2 == 0) { itemStrength2 = 1; }
    break;
  case 5:  itemStrength2 = BONUSAMOUNT * 5;
    if (itemStrength2 == 0) { itemStrength2 = 1; }
    break;
}
//terza gemma
BONUS0123456UNUSED = DAOCSTARTER_G3_EFFECT;//terza gemma
if (DAOCSTARTER_G3_EFFECT < 6) {
REAME012 = DAOCSTARTER_REAME;
BONUSAMOUNT = DAOCSTARTER_G3_AMOUNT;//terza gemma
BONUSULTIMACELLA = DAOCSTARTER_G3_TERZA;//terza gemma
switch (BONUS0123456UNUSED) {
 case 0:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrStatsName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrStatsMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrStatsMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 1:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrResistName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrResistMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrResistMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 2:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' blood essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Giants Blood\n';
   break;
 case 3:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' mystic essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Essence \n';
   break;
 case 4:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusAlbName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusAlbMat2[BONUSULTIMACELLA] +'\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusHibName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusHibMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusMidName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusMidMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 }
   break;
 case 5:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsAlbName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsAlbMat2[BONUSULTIMACELLA] +'\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsHibName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsHibMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsMidName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsMidMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 }
   break;
}

}
if (BONUS0123456UNUSED == 3) { BONUS0123456UNUSED = 1; }
switch (BONUS0123456UNUSED) {
  case 0: itemStrength3 = (BONUSAMOUNT * 2) + 1; break;
  case 1: if (BONUSAMOUNT == 0) { itemStrength3 = 1;}
	if (BONUSAMOUNT == 1) { itemStrength3 = 2;}
	if (BONUSAMOUNT == 2) { itemStrength3 = 4;}
	if (BONUSAMOUNT == 3) { itemStrength3 = 8;}
	if (BONUSAMOUNT == 4) { itemStrength3 = 12;}
	if (BONUSAMOUNT == 5) { itemStrength3 = 16;}
	if (BONUSAMOUNT == 6) { itemStrength3 = 20;}
	if (BONUSAMOUNT == 7) {itemStrength3 = 24;}
	if (BONUSAMOUNT == 8) {itemStrength3 = 28;}
	if (BONUSAMOUNT == 9) {itemStrength3 = 32;}
    break;
  case 2:
    itemStrength3 = (BONUSAMOUNT * 2);
    if (itemStrength3 > 0) { itemStrength3 = itemStrength3 + 1; }
	if (itemStrength3 == 0) { itemStrength3 = 1; }
    break;
  case 5:
    itemStrength3 = BONUSAMOUNT * 5;
    if (itemStrength3 == 0) { itemStrength3 = 1; }
    break;
}
//quarta gemma
BONUS0123456UNUSED = DAOCSTARTER_G4_EFFECT;//quarta gemma
if (DAOCSTARTER_G4_EFFECT < 6) {
REAME012 = DAOCSTARTER_REAME;
BONUSAMOUNT = DAOCSTARTER_G4_AMOUNT;//quarta gemma
BONUSULTIMACELLA = DAOCSTARTER_G4_TERZA;//quarta gemma
switch (BONUS0123456UNUSED) {
 case 0:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrStatsName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrStatsMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrStatsMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 1:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrResistName[BONUSULTIMACELLA] +'\n';
   strOutput2 = strOutput2 +'1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrResistMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrResistMat2[BONUSULTIMACELLA] +'\n';
   break;
 case 2:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' blood essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Giants Blood\n';
   break;
 case 3:
   strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' mystic essence jewel\n';
   strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' Essence of Life / ' + arrGemStrMat2[BONUSAMOUNT] + ' Mystic Essence \n';
   break;
 case 4:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusAlbName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusAlbMat2[BONUSULTIMACELLA] +'\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusHibName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusHibMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrFocusMidName[BONUSULTIMACELLA] + '\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1b[BONUSAMOUNT] + ' ' + arrFocusMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrFocusMidMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 }
   break;
 case 5:
   switch (REAME012) {
     case 0:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsAlbName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsAlbMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsAlbMat2[BONUSULTIMACELLA] +'\n';
	 break;
     case 1:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsHibName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsHibMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsHibMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 case 2:
     strOutput = strOutput + arrGemStrength[BONUSAMOUNT] + ' ' + arrSkillsMidName[BONUSULTIMACELLA] +'\n';
     strOutput2 = strOutput2 + '1 ' + arrGemStrGem[BONUSAMOUNT] + ' / ' + arrGemStrMat1a[BONUSAMOUNT] + ' ' + arrSkillsMidMat1[BONUSULTIMACELLA] + ' / ' + arrGemStrMat2[BONUSAMOUNT] + ' ' + arrSkillsMidMat2[BONUSULTIMACELLA] +'\n';
	 break;
	 }
   break;
}
}

if (BONUS0123456UNUSED == 3) { BONUS0123456UNUSED = 1; }
switch (BONUS0123456UNUSED) {
  case 0: itemStrength4 = (BONUSAMOUNT * 2) + 1;  break;
  case 1:
	if (BONUSAMOUNT == 0) { itemStrength4 = 1;}
	if (BONUSAMOUNT == 1) { itemStrength4 = 2;}
	if (BONUSAMOUNT == 2) { itemStrength4 = 4;}
	if (BONUSAMOUNT == 3) { itemStrength4 = 8;}
	if (BONUSAMOUNT == 4) { itemStrength4 = 12;}
	if (BONUSAMOUNT == 5) { itemStrength4 = 16;}
	if (BONUSAMOUNT == 6) { itemStrength4 = 20;}
	if (BONUSAMOUNT == 7) { itemStrength4 = 24;}
	if (BONUSAMOUNT == 8) { itemStrength4 = 28;}
	if (BONUSAMOUNT == 9) { itemStrength4 = 32;}
    break;
  case 2:
    itemStrength4 = (BONUSAMOUNT * 2);
    if (itemStrength4 > 0) { itemStrength4 = itemStrength4 + 1; }
	if (itemStrength4 == 0) { itemStrength4 = 1; }
    break;
  case 5:
    itemStrength4 = BONUSAMOUNT * 5;
    if (itemStrength4 == 0) { itemStrength4 = 1; }
    break;
}
if (DAOCSTARTER_G1_EFFECT == 4) { itemStrength1 = 1; }//soliti principali
if (DAOCSTARTER_G2_EFFECT == 4) { itemStrength2 = 1; }
if (DAOCSTARTER_G3_EFFECT == 4) { itemStrength3 = 1; }
if (DAOCSTARTER_G4_EFFECT == 4) { itemStrength4 = 1; }

if ((itemStrength4 >= itemStrength2) && (itemStrength4 >= itemStrength3) && (itemStrength4 >= itemStrength1)) { itemStrength4 = itemStrength4 * 2; }
if ((itemStrength3 >= itemStrength2) && (itemStrength3 >= itemStrength1) && (itemStrength3 >= itemStrength4)) { itemStrength3 = itemStrength3 * 2; }
if ((itemStrength2 >= itemStrength1) && (itemStrength2 >= itemStrength3) && (itemStrength2 >= itemStrength4)) { itemStrength2 = itemStrength2 * 2; }
if ((itemStrength1 >= itemStrength2) && (itemStrength1 >= itemStrength3) && (itemStrength1 >= itemStrength4)) { itemStrength1 = itemStrength1 * 2; }


itemStrength = itemStrength1 + itemStrength2 + itemStrength3 + itemStrength4;
if (itemStrength > 0) { var i9 = Math.floor( itemStrength / 2); }
if (itemStrength < 1) { var i9 = 0; }

i9 = i9 - 5;
t1 = t1 + doOutputLine(DAOCSTARTER_G1_EFFECT, DAOCSTARTER_G1_AMOUNT, DAOCSTARTER_G1_TERZA, DAOCSTARTER_REAME);
t1 = t1 + doOutputLine(DAOCSTARTER_G2_EFFECT, DAOCSTARTER_G2_AMOUNT, DAOCSTARTER_G2_TERZA, DAOCSTARTER_REAME);
t1 = t1 + doOutputLine(DAOCSTARTER_G3_EFFECT, DAOCSTARTER_G3_AMOUNT, DAOCSTARTER_G3_TERZA, DAOCSTARTER_REAME);
t1 = t1 + doOutputLine(DAOCSTARTER_G4_EFFECT, DAOCSTARTER_G4_AMOUNT, DAOCSTARTER_G4_TERZA, DAOCSTARTER_REAME);

window.document.form1.itemstr.value = (i9 + 5);//RISULTATONE FINALE
window.document.form1.output.value = t1;//out 1
window.document.form1.recipe.value = strOutput;//OUT 2
window.document.form1.ingredients.value = strOutput2;//OUT3
}
