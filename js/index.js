
// Developed by the data journalism team of the Hessischer Rundfunk in 2018
// Adpated by Torsten Heycke

/*  Copyright (C) 2018  Till Hafermann, Miguel Pascual Sanina, hr-Datenteam

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// CUSTOMIZATION:

// dropdown for choosing a card
var chooseCardMsg = "(Choose card)";
// error message if no card is chosen
var noCardSelectionMsG = "No card selected";
// error message if wrong number of categories is chosen
var noCategorySelectionMsG = "Select exactly five categories";
var turnWonMsg = "You won!"; // turn won
var turnLostMsg = "You lost..."; // turn lost
var turnDrawMsg = "You tied."; // turn results in draw
var gameWonMsg = "You won: "; // game won
var gameLostMsg = "You lost: "; // game lost
var gameDrawMsg = "You tied: "; // game results in draw
// text to display in infoline while player choses category
var turnWaitMsg = "Choose categories";
// text to display in infoline when game is over
var gameOverMsg = "Game over";
// text to display in infoline when summary is shown
var gameWaitMsg = "Start new game?";


// Game is configured for ten rounds and five categories per card.
// Change this here. Progress bar percentage should be 100/number of Rounds but it doesn't work.

var numberOfRounds = 10;
var numberOfCategories = 5;
var progressBarPercentage = "width: 14.29%";
var currentRound = 1;


// CUSTOMIZATION: Enter your data for the cards here
// Example data for countries of the EU taken from various Wikipedia pages (Oct. 22, 2018)

// Data header: Names of the categories, first one = title of the card
var data_header = ["Country", "Population", "Area", "GDP PPP $", "Life Expectancy", "Obesity", "Density"];

// Category names for summary
var summary_header = ["", "Population", "Area", "GDP PPP $", "Life Expectancy", "Obesity", "Density"];

// Units if necessary, first entry always empty
var data_suffix = ["", "", " km\u00B2", " per person", " years", " %"," people/km\u00B2"];

// Specify which number wins: larger or smaller, first entry always empty
var data_comparison = ["", "larger", "larger", "larger", "larger", "smaller", "larger"];

// One array per card, structure: Title first, then category values
var AFG = ["Afghanistan",36643815,652230,2000,52.80,5.50,56.94];
var ALB = ["Albania",3074579,28748,12500,79.00,21.70,104.61];
var DZA = ["Algeria",42972878,2381740,15200,77.50,27.40,17.73];
var AND = ["Andorra",77000,468,49900,83.00,25.60,163.84];
var AGO = ["Angola",32522339,1246700,6800,61.30,8.20,24.71];
var ATG = ["Antigua",98179,443,26400,77.30,18.90,218.83];
var ARG = ["Argentina",45479118,2780400,20900,77.80,28.30,16.26];
var ARM = ["Armenia",3021324,29743,9500,75.60,20.20,103.68];
var AUS = ["Australia",25466459,7741220,50400,82.70,29.00,3.25];
var AUT = ["Austria",8859449,83871,50000,81.90,20.10,107.13];
var AZE = ["Azerbaijan",10205810,86600,17500,73.60,19.90,120.23];
var BHS = ["Bahamas",337721,13880,32400,73.30,31.60,38.53];
var BHR = ["Bahrain",1505003,760,49000,79.40,29.80,2017.27];
var BGD = ["Bangladesh",162650853,148460,4200,74.20,3.60,1239.58];
var BRB = ["Barbados",294560,430,18600,76.00,23.10,666.61];
var BLR = ["Belarus",9477918,207600,18900,73.80,24.50,46.72];
var BEL = ["Belgium",11720716,30528,46600,81.40,22.10,377.38];
var BLZ = ["Belize",399598,22966,8300,75.30,24.10,16.79];
var BEN = ["Benin",12864634,112622,2300,61.40,9.60,101.85];
var BTN = ["Bhutan",782318,38394,9000,72.10,6.40,19.78];
var BOL = ["Bolivia",11639909,1098581,7600,70.40,20.20,10.48];
var BIH = ["Bosnia",3835586,51197,12800,77.50,17.90,64.92];
var BWA = ["Botswana",2317233,581730,17000,64.80,18.90,3.98];
var BRA = ["Brazil",211715973,8515770,15600,74.70,22.10,25.06];
var BRN = ["Brunei",464478,5765,78900,77.90,14.10,81.40];
var BGR = ["Bulgaria",6966899,110879,21800,75.00,25.00,64.71];
var BFA = ["Burkina Faso",20835401,274200,1900,62.70,5.60,72.19];
var BDI = ["Burundi",11865821,27830,700,66.70,5.40,435.18];
var CPV = ["Cabo Verde",583255,4033,7000,73.20,11.80,134.93];
var KHM = ["Cambodia",16926984,181035,4000,65.90,3.90,92.06];
var CMR = ["Cameroon",27744989,475440,3700,62.30,11.40,53.34];
var CAN = ["Canada",37694085,9984670,48400,83.40,29.40,4.08];
var CAF = ["CAR",5990855,622984,700,54.20,7.50,7.49];
var TCD = ["Chad",16877357,1284000,2300,58.30,6.10,12.29];
var CHL = ["Chile",18186770,756102,24600,79.40,28.00,25.19];
var CHN = ["China",1394015977,9596960,18200,76.10,6.20,148.35];
var COL = ["Colombia",49084841,1138910,14400,76.60,22.30,44.75];
var COM = ["Comoros",846281,2235,1600,65.70,7.80,447.24];
var COD = ["Congo Democratic Rep",101780263,2344858,800,61.00,6.70,37.08];
var COG = ["Congo Republic",5293070,342000,6800,61.30,9.60,15.36];
var CRI = ["Costa Rica",5097988,51100,16900,79.20,25.70,97.91];
var CIV = ["Cote d'Ivoire",27481086,322463,3900,61.30,10.30,78.83];
var HRV = ["Croatia",4227746,56594,24700,76.70,24.40,73.05];
var CUB = ["Cuba",11059062,110860,12300,79.20,24.60,109.00];
var CYP = ["Cyprus",1266676,9251,37200,79.30,21.80,128.71];
var CZE = ["Czechia",10702498,78867,35500,79.30,26.00,137.66];
var DNK = ["Denmark",5869410,43094,50100,81.20,19.70,137.98];
var DJI = ["Djibouti",921804,23200,3600,64.70,13.50,41.37];
var DMA = ["Dominica",74243,751,11000,77.70,27.90,95.50];
var DOM = ["Dominican Republic",10499707,48670,17000,72.00,27.60,219.98];
var ECU = ["Ecuador",16904867,283561,11500,77.50,19.90,68.79];
var EGY = ["Egypt",104124440,1001450,12700,73.70,32.00,98.87];
var SLV = ["El Salvador",6481102,21041,8000,74.80,24.60,309.88];
var GNQ = ["Equatorial Guinea",836178,28051,37400,65.70,8.00,46.67];
var ERI = ["Eritrea",6081196,117600,1600,66.20,5.00,00];
var EST = ["Estonia",1228624,45228,31700,77.40,21.20,30.41];
var SWZ = ["Eswatini",1104479,17364,10100,58.60,16.50,66.06];
var ETH = ["Ethiopia",108113150,1104300,2200,67.50,4.50,109.22];
var FJI = ["Fiji",935974,18274,9800,73.70,30.20,48.36];
var FIN = ["Finland",5571665,338145,44500,81.30,22.20,18.15];
var FRA = ["France",67848156,643801,44100,82.20,21.60,122.30];
var GAB = ["Gabon",2230908,267667,18100,69.00,15.00,8.22];
var GMB = ["Gambia, The",2173999,11300,2600,65.80,10.30,225.31];
var GEO = ["Georgia",3997000,69700,10700,77.00,21.70,65.20];
var DEU = ["Germany",80159662,357022,50800,81.10,22.30,237.31];
var GHA = ["Ghana",29340248,238533,4700,68.20,10.90,130.82];
var GRC = ["Greece",10607051,131957,27800,81.10,24.90,83.27];
var GRD = ["Grenada",113094,344,15100,75.20,21.30,327.81];
var GTM = ["Guatemala",17153288,108889,8200,72.40,21.20,152.55];
var GIN = ["Guinea",12527440,245857,2200,63.20,7.70,50.52];
var GNB = ["Guinea-Bissau",1927104,36125,1900,62.80,9.50,66.65];
var GUY = ["Guyana",750204,214969,8100,69.50,20.20,3.96];
var HTI = ["Haiti",11067777,27750,1800,65.30,22.70,403.60];
var HND = ["Honduras",9235340,112090,5600,74.60,21.40,85.69];
var HUN = ["Hungary",9771827,93028,29600,76.70,26.40,107.98];
var ISL = ["Iceland",350734,103000,52200,83.30,21.90,3.52];
var IND = ["India",1326093247,3287263,7200,69.70,3.90,454.94];
var IDN = ["Indonesia",267026366,1904569,12400,73.70,6.90,147.75];
var IRN = ["Iran",84923314,1648195,20100,74.50,25.80,50.22];
var IRQ = ["Iraq",38872655,438317,16700,72.60,30.40,88.53];
var IRL = ["Ireland",5176569,70273,73200,81.20,25.30,70.65];
var ISR = ["Israel",8675475,21937,36400,83.00,26.10,410.48];
var ITA = ["Italy",62402659,301340,38200,82.50,19.90,205.42];
var JAM = ["Jamaica",2808570,10991,9200,75.20,24.70,270.99];
var JPN = ["Japan",125507472,377915,42900,86.00,4.30,347.07];
var JOR = ["Jordan",10820644,89342,9200,75.50,35.50,112.14];
var KAZ = ["Kazakhstan",19091949,2724900,26300,72.00,21.00,6.77];
var KEN = ["Kenya",53527936,580367,3500,69.00,7.10,90.30];
var KIR = ["Kiribati",111796,811,2000,67.50,46.00,143.02];
var PRK = ["Korea, North",25643466,120538,1700,71.60,6.80,212.19];
var KOR = ["Korea, South",51835110,99720,39500,82.60,4.70,529.36];
var KWT = ["Kuwait",2993706,17818,65800,78.60,37.90,232.17];
var KGZ = ["Kyrgyzstan",5964897,199951,3700,71.80,16.60,32.97];
var LAO = ["Laos",7447396,236800,7400,65.70,5.30,30.60];
var LVA = ["Latvia",1881232,64589,27700,75.40,23.60,30.99];
var LBN = ["Lebanon",5469612,10400,19600,78.30,32.00,669.49];
var LSO = ["Lesotho",1969334,30355,3300,53.00,16.60,69.44];
var LBR = ["Liberia",5073296,111369,1300,64.70,9.90,50.03];
var LBY = ["Libya",6890535,1759540,9600,76.70,32.50,3.80];
var LTU = ["Lithuania",2731464,65300,32400,75.50,26.30,44.72];
var LUX = ["Luxembourg",628381,2586,105100,82.60,22.60,250.19];
var MDG = ["Madagascar",26955737,587041,1600,67.30,5.30,45.14];
var MWI = ["Malawi",21196629,118484,1200,63.20,5.80,192.44];
var MYS = ["Malaysia",32652083,329847,29100,75.90,15.60,95.96];
var MDV = ["Maldives",391904,298,19200,76.40,8.60,1718.99];
var MLI = ["Mali",19553397,1240192,2200,61.60,8.60,15.64];
var MLT = ["Malta",457267,316,41900,82.80,28.90,1514.47];
var MHL = ["Marshall Islands",77917,181,3600,74.10,52.90,324.52];
var MRT = ["Mauritania",4005475,1030700,4500,64.50,12.70,4.27];
var MUS = ["Mauritius",1379365,2040,22300,76.50,10.80,623.30];
var MEX = ["Mexico",128649565,1964375,19900,76.70,28.90,64.91];
var FSM = ["Micronesia",102436,702,3400,73.90,45.80,160.91];
var MDA = ["Moldova",3364496,33851,6700,71.90,18.90,94.26];
var MNG = ["Mongolia",3168026,1564116,13700,70.80,20.60,2.04];
var MNE = ["Montenegro",609859,13812,17800,77.30,23.30,46.26];
var MAR = ["Morocco",35561654,446550,8600,73.30,26.10,80.73];
var MOZ = ["Mozambique",30098197,799380,1300,55.90,7.20,37.51];
var NAM = ["Namibia",2630073,824292,11200,65.30,17.20,2.97];
var NRU = ["Nauru",11000,21,12300,68.40,61.00,635.20];
var NPL = ["Nepal",30327877,147181,2700,71.80,4.10,195.94];
var NLD = ["Netherlands",17280397,41543,53900,81.70,20.40,511.48];
var NZL = ["New Zealand",4925477,268838,39000,82.10,30.80,18.39];
var NIC = ["Nicaragua",6203441,130370,5900,74.20,23.70,53.73];
var NER = ["Niger",22772361,1267000,1200,59.30,5.50,17.72];
var NGA = ["Nigeria",214028302,923768,5900,60.40,8.90,215.06];
var NOR = ["Norway",5467439,323802,72100,82.10,23.10,14.55];
var OMN = ["Oman",4664844,309500,46000,76.30,27.00,15.60];
var PAK = ["Pakistan",233500636,796095,5400,69.20,8.60,275.29];
var PLW = ["Palau",21685,459,14700,74.10,55.30,38.93];
var PAN = ["Panama",3894082,75420,25400,79.20,22.70,56.19];
var PNG = ["Papua New Guinea",7259456,462840,3700,67.80,21.30,19.00];
var PRY = ["Paraguay",7191685,406752,12800,77.90,20.30,17.51];
var PER = ["Peru",31914989,1285216,13500,74.70,19.70,24.99];
var PHL = ["Philippines",109180815,300000,8400,70.00,6.40,357.69];
var POL = ["Poland",38282325,312685,29600,78.30,23.10,124.02];
var PRT = ["Portugal",10302674,92090,30500,81.10,20.80,112.26];
var QAT = ["Qatar",2444174,11586,124100,79.40,35.10,239.59];
var ROU = ["Romania",21302893,238391,24600,76.00,22.50,84.63];
var RUS = ["Russia",141722205,17098242,27900,71.90,23.10,8.82];
var RWA = ["Rwanda",12712431,26338,2100,65.10,5.80,498.66];
var KNA = ["Saint Kitts and Nevis",53821,261,28200,76.60,22.90,201.70];
var LCA = ["Saint Lucia",166487,616,14400,78.50,19.70,298.18];
var VCT = ["Saint Vincent",101390,389,11500,76.20,23.70,282.59];
var WSM = ["Samoa",203774,2831,5700,74.70,47.30,219.82];
var STP = ["Sao Tome",211122,964,3200,66.30,12.40,69.30];
var SAU = ["Saudi Arabia",34173498,2149690,54500,76.20,35.40,15.68];
var SEN = ["Senegal",15736368,196722,3500,63.20,8.80,82.35];
var SRB = ["Serbia",7012165,77474,15100,76.30,21.50,79.84];
var SYC = ["Seychelles",95981,455,29300,75.60,14.00,210.35];
var SLE = ["Sierra Leone",6624933,71740,1600,59.80,8.70,105.99];
var SGP = ["Singapore",6209660,719,94100,86.00,6.10,7953.00];
var SVK = ["Slovakia",5440602,49035,33100,77.80,20.50,113.29];
var SVN = ["Slovenia",2102678,20273,34500,81.40,20.20,102.96];
var SLB = ["Solomon Islands",685097,28896,2200,76.20,22.50,23.32];
var ZAF = ["South Africa",56463617,1219090,13600,64.80,28.30,47.63];
var SSD = ["South Sudan",10561244,644329,1600,55.50,6.60,00];
var ESP = ["Spain",50015792,505370,38400,82.00,23.80,93.68];
var LKA = ["Sri Lanka",22889201,65610,12900,77.50,5.20,345.56];
var SDN = ["Sudan",45561556,1861484,4300,66.50,6.60,00];
var SUR = ["Suriname",609569,163820,14900,73.30,26.40,3.69];
var SWE = ["Sweden",10202491,450295,51200,82.40,20.60,24.98];
var CHE = ["Switzerland",8403994,41277,62100,82.80,19.50,215.47];
var SYR = ["Syria",19398448,187437,2900,73.70,27.80,92.07];
var TJK = ["Tajikistan",8873669,144100,3200,69.00,14.20,65.57];
var TZA = ["Tanzania",58552845,947300,3200,63.90,8.40,63.58];
var THA = ["Thailand",68977400,513120,17900,75.60,10.00,135.90];
var TLS = ["Timor-Leste",1383723,14874,6000,69.30,3.80,85.27];
var TGO = ["Togo",8608444,56785,1700,66.60,8.40,145.05];
var TON = ["Tonga",106095,747,5900,77.00,48.20,143.33];
var TTO = ["Trinidad and Tobago",1208789,5128,31300,73.90,18.60,270.93];
var TUN = ["Tunisia",11721177,163610,11900,76.30,26.90,74.44];
var TUR = ["Turkey",82017514,783562,27000,75.70,32.10,106.96];
var TKM = ["Turkmenistan",5528627,488100,18200,71.30,18.60,12.45];
var TUV = ["Tuvalu",11342,26,3800,67.90,51.60,383.60];
var UGA = ["Uganda",43252966,241038,2400,68.20,5.30,213.06];
var UKR = ["Ukraine",43922939,603550,8800,72.90,24.10,77.03];
var ARE = ["United Arab Emirates",9992083,83600,68600,79.00,31.70,135.61];
var GBR = ["United Kingdom",65761117,243610,44300,81.10,27.80,274.71];
var USA = ["United States",332639102,9833517,59800,80.30,36.20,35.71];
var URY = ["Uruguay",3387605,176215,22400,77.90,27.90,19.71];
var UZB = ["Uzbekistan",30565411,447400,6900,74.80,16.60,77.47];
var VUT = ["Vanuatu",298333,12189,2700,74.60,25.20,24.01];
var VEN = ["Venezuela",28644603,912050,12500,71.00,25.60,32.73];
var VNM = ["Vietnam",98721275,331210,6900,74.40,2.10,308.13];
var YEM = ["Yemen",29884405,527968,2500,66.90,17.10,53.98];
var ZMB = ["Zambia",17426623,752618,4000,53.60,8.10,23.34];
var ZWE = ["Zimbabwe",14546314,390757,2300,62.30,15.50,37.32];

// group cards in one array
var allCards = [AFG, ALB, DZA, AND, AGO, ATG, ARG, ARM, AUS, AUT, AZE, BHS, BHR, BGD, BRB, BLR, 
  BEL, BLZ, BEN, BTN, BOL, BIH, BWA, BRA, BRN, BGR, BFA, BDI, CPV, KHM, CMR, CAN, 
  CAF, TCD, CHL, CHN, COL, COM, COD, COG, CRI, CIV, HRV, CUB, CYP, CZE, DNK, DJI, 
  DMA, DOM, ECU, EGY, SLV, GNQ, ERI, EST, SWZ, ETH, FJI, FIN, FRA, GAB, GMB, GEO, 
  DEU, GHA, GRC, GRD, GTM, GIN, GNB, GUY, HTI, HND, HUN, ISL, IND, IDN, IRN, IRQ, 
  IRL, ISR, ITA, JAM, JPN, JOR, KAZ, KEN, KIR, PRK, KOR, KWT, KGZ, LAO, LVA, LBN, 
  LSO, LBR, LBY, LTU, LUX, MDG, MWI, MYS, MDV, MLI, MLT, MHL, MRT, MUS, MEX, FSM, 
  MDA, MNG, MNE, MAR, MOZ, NAM, NRU, NPL, NLD, NZL, NIC, NER, NGA, NOR, OMN, PAK, 
  PLW, PAN, PNG, PRY, PER, PHL, POL, PRT, QAT, ROU, RUS, RWA, KNA, LCA, VCT, WSM, 
  STP, SAU, SEN, SRB, SYC, SLE, SGP, SVK, SVN, SLB, ZAF, SSD, ESP, LKA, SDN, SUR, 
  SWE, CHE, SYR, TJK, TZA, THA, TLS, TGO, TON, TTO, TUN, TUR, TKM, TUV, UGA, UKR, 
  ARE, GBR, USA, URY, UZB, VUT, VEN, VNM, YEM, ZMB, ZWE];

// list of cards in case player wants to choose a specific card to play with
// list of arrays with variable name and titel of card
var cardsList = [["AFG", "Afghanistan"], ["ALB", "Albania"],
	["DZA", "Algeria"], ["AND", "Andorra"], ["AGO", "Angola"],
	["ATG", "Antigua"], ["ARG", "Argentina"], ["ARM", "Armenia"],
	["AUS", "Australia"], ["AUT", "Austria"], ["AZE", "Azerbaijan"],
	["BHS", "Bahamas"], ["BHR", "Bahrain"], ["BGD", "Bangladesh"],
	["BRB", "Barbados"], ["BEL", "Belarus"], ["BLZ", "Belize"],
	["BEN", "Benin"], ["BTN", "Bhutan"],
	["BOL", "Bolivia"], ["BIH", "Bosnia"], ["BWA", "Botswana"],
	["BRA", "Brazil"], ["BRN", "Brunei"], ["BGR", "Bulgaria"],
	["BFA", "Burkina Faso"], ["BDI", "Burundi"], ["CPV", "Cabo Verde"], ["KHM", "Cambodia"], 
  ["CMR", "Cameroon"], 
  ["CAN", "Canada"], 
  ["CAF", "CAR"], 
  ["TCD", "Chad"], 
  ["CHL", "Chile"], 
  ["CHN", "China"], 
  ["COL", "Colombia"], 
  ["COM", "Comoros"], 
  ["COD", "Congo DR"], 
  ["COG", "Congo Rep"], 
  ["CRI", "Costa Rica"], 
  ["CIV", "Cote d'Ivoire"], 
  ["HRV", "Croatia"], 
  ["CUB", "Cuba"], 
  ["CYP", "Cyprus"], 
  ["CZE", "Czechia"], 
  ["DNK", "Denmark"], 
  ["DJI", "Djibouti"], 
  ["DMA", "Dominica"], 
  ["DOM", "Dominican Republic"], 
  ["ECU", "Ecuador"], 
  ["EGY", "Egypt"], 
  ["SLV", "El Salvador"], 
  ["GNQ", "Equatorial Guinea"], 
  ["ERI", "Eritrea"], 
  ["EST", "Estonia"], 
  ["SWZ", "Eswatini"], 
  ["ETH", "Ethiopia"], 
  ["FJI", "Fiji"], 
  ["FIN", "Finland"], 
  ["FRA", "France"], 
  ["GAB", "Gabon"], 
  ["GMB", "Gambia, The"], 
  ["GEO", "Georgia"], 
  ["DEU", "Germany"], 
  ["GHA", "Ghana"], 
  ["GRC", "Greece"], 
  ["GRD", "Grenada"], 
  ["GTM", "Guatemala"], 
  ["GIN", "Guinea"], 
  ["GNB", "Guinea-Bissau"], 
  ["GUY", "Guyana"], 
  ["HTI", "Haiti"],
  ["HND", "Honduras"],
  ["HUN", "Hungary"],
  ["ISL", "Iceland"],
  ["IND", "India"],
  ["IDN", "Indonesia"],
  ["IRN", "Iran"],
  ["IRQ", "Iraq"],
  ["IRL", "Ireland"],
  ["ISR", "Israel"],
  ["ITA", "Italy"],
  ["JAM", "Jamaica"],
  ["JPN", "Japan"],
  ["JOR", "Jordan"],
  ["KAZ", "Kazakhstan"],
  ["KEN", "Kenya"],
  ["KIR", "Kiribati"],
  ["PRK", "Korea North"],
  ["KOR", "Korea South"],
  ["KWT", "Kuwait"],
  ["KGZ", "Kyrgyzstan"],
  ["LAO", "Laos"],
  ["LVA", "Latvia"],
  ["LBN", "Lebanon"],
  ["LSO", "Lesotho"],
  ["LBR", "Liberia"],
  ["LBY", "Libya"],
  ["LTU", "Lithuania"],
  ["LUX", "Luxembourg"],
  ["MDG", "Madagascar"],
  ["MWI", "Malawi"],
  ["MYS", "Malaysia"],
  ["MDV", "Maldives"],
  ["MLI", "Mali"],
  ["MLT", "Malta"],
  ["MHL", "Marshall Isls"],
  ["MRT", "Mauritania"],
  ["MUS", "Mauritius"],
  ["MEX", "Mexico"],
  ["FSM", "Micronesia"],
  ["MDA", "Moldova"],
  ["MNG", "Mongolia"],
  ["MNE", "Montenegro"],
  ["MAR", "Morocco"],
  ["MOZ", "Mozambique"],
  ["NAM", "Namibia"],
  ["NRU", "Nauru"],
  ["NPL", "Nepal"],
  ["NLD", "Netherlands"],
  ["NZL", "New Zealand"],
  ["NIC", "Nicaragua"],
  ["NER", "Niger"],
  ["NGA", "Nigeria"],
  ["NOR", "Norway"],
  ["OMN", "Oman"],
  ["PAK", "Pakistan"],
  ["PLW", "Palau"],
  ["PAN", "Panama"],
  ["PNG", "Papua New Guinea"],
  ["PRY", "Paraguay"],
  ["PER", "Peru"],
  ["PHL", "Philippines"],
  ["POL", "Poland"],
  ["PRT", "Portugal"],
  ["QAT", "Qatar"],
  ["ROU", "Romania"],
  ["RUS", "Russia"],
  ["RWA", "Rwanda"],
  ["KNA", "Saint Kitts"],
  ["LCA", "Saint Lucia"],
  ["VCT", "Saint Vincent"],
  ["WSM", "Samoa"],
  ["STP", "Sao Tome"],
  ["SAU", "Saudi Arabia"],
  ["SEN", "Senegal"],
  ["SRB", "Serbia"],
  ["SYC", "Seychelles"],
  ["SLE", "Sierra Leone"],
  ["SGP", "Singapore"],
  ["SVK", "Slovakia"],
  ["SVN", "Slovenia"],
  ["SLB", "Solomon Islands"],
  ["ZAF", "South Africa"],
  ["SSD", "South Sudan"],
  ["ESP", "Spain"],
  ["LKA", "Sri Lanka"],
  ["SDN", "Sudan"],
  ["SUR", "Suriname"],
  ["SWE", "Sweden"],
  ["CHE", "Switzerland"],
  ["SYR", "Syria"],
  ["TJK", "Tajikistan"],
  ["TZA", "Tanzania"],
  ["THA", "Thailand"],
  ["TLS", "Timor-Leste"],
  ["TGO", "Togo"],
  ["TON", "Tonga"],
  ["TTO", "Trinidad Tobago"],
  ["TUN", "Tunisia"],
  ["TUR", "Turkey"],
  ["TKM", "Turkmenistan"],
  ["TUV", "Tuvalu"],
  ["UGA", "Uganda"],
  ["UKR", "Ukraine"],
  ["ARE", "United Arab Emirates"],
  ["GBR", "United Kingdom"],
  ["USA", "United States"],
  ["URY", "Uruguay"],
  ["UZB", "Uzbekistan"],
  ["VUT", "Vanuatu"],
  ["VEN", "Venezuela"],
  ["VNM", "Vietnam"],
  ["YEM", "Yemen"],
  ["ZMB", "Zambia"],
  ["ZWE", "Zimbabwe"]]



// Inititate buttons and information displays
var startGameButton;
var startTurnButton;
var newGameButton;
var showSummaryButton;
var waitingButton;
var infoLine;
var summaryList;
var gameProgressBar;
var computerCardDiv;


// set width of hud and button container on small devices
var viewportWidth = $(window).width();

if (viewportWidth <= 576) {
  $("#hudcontent").css( "maxWidth", viewportWidth );
  $("#buttons").css( "maxWidth", viewportWidth );
  $("#infocontent").css( "maxWidth", viewportWidth );
}

// initiate variables for later use
var gameMode;
var chosenCard;
var chosenCategories;
var playerCards;
var computerCards;
var playerPoints;
var computerPoints;
var playerCount;
var computerCount;
var currentPlayerCard;
var currentComputerCard;
var stateOfGame;

// format numbers for display,
// decimal divider is ".", thousands separator is ","
function formatNumbers(num){
  return (
    num
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	  // for German locale use lines below
      // .replace(".",",")
      // .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
}

// function to randomly shuffle arrays
function shuffleCards() {
  //Shuffles an array
  var currentIndex = allCards.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = allCards[currentIndex];
    allCards[currentIndex] = allCards[randomIndex];
    allCards[randomIndex] = temporaryValue;
  }

}


//Set button-states
//1=game mode selection
//2=category selection
//3=start game
//4=start next turn
//5=turn in progress
//6=last turn finished
//7=showing summary

function updateButtons(state) {
  stateOfGame = state;
  switch(state) {
    case 1:
      // Show only game mode selectors
      document.getElementById("hud").style.display = "none";
      document.getElementById("hud2").style.display = "none";
      document.getElementById("getMode").style.display = "flex";
      document.getElementById("getCategories").style.display = "none";
      document.getElementById("summary").style.display = "none";
      document.getElementById("cards").style.display = "none";
      document.getElementById("buttons").style.display = "none";
      newGameButton.style.display = "none";
      // Reset summary
      while (summaryList.hasChildNodes()) {
        summaryList.removeChild(summaryList.lastChild);
      }

      getMode();
      break;
    case 2:
      // Show only category selectors
      document.getElementById("hud").style.display = "none";
      document.getElementById("hud2").style.display = "none";
      document.getElementById("getMode").style.display = "none";
      document.getElementById("getCategories").style.display = "flex";
      document.getElementById("summary").style.display = "none";
      document.getElementById("cards").style.display = "none";
      document.getElementById("buttons").style.display = "none";
      getCategories();
      break;
    case 3:
      // Disable all buttons, show "waiting"-button, hide summary, show carddeck
      document.getElementById("hud").style.display = "block";
//      document.getElementById("hud2").style.display = "flex";
      document.getElementById("getMode").style.display = "none";
      document.getElementById("getCategories").style.display = "none";
      document.getElementById("summary").style.display = "none";
      document.getElementById("cards").style.display = "block";
      document.getElementById("buttons").style.display = "flex";
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "none";
      waitingButton.style.display = "inline";
      showSummaryButton.style.display = "none";
      infoLine.innerHTML = "";
      break;
    case 4:
      // Display button to start next turn
      startGameButton.style.display = "none";
      startTurnButton.style.display = "inline";
      newGameButton.style.display = "none";
      waitingButton.style.display = "none";
      showSummaryButton.style.display = "none";
      break;
    case 5:
      // Disable all buttons, show "waiting"-button, reset infoline
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "none";
      waitingButton.style.display = "inline";
      showSummaryButton.style.display = "none";
      infoLine.classList.remove("text-success");
      infoLine.classList.remove("text-danger");
      infoLine.classList.remove("text-warning");
      infoLine.classList.add("text-light");
      infoLine.innerHTML = "<h4 class='mb-1'>Round " + currentRound + " of " +
                           numberOfRounds + "</h4>";
      break;
    case 6:
      // Show button to display summary after last turn
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "none";
      waitingButton.style.display = "none";
      showSummaryButton.style.display = "inline";
      break;
    case 7:
      // Show summary, hide cards, show "new game"-button
      startGameButton.style.display = "none";
      startTurnButton.style.display = "none";
      newGameButton.style.display = "inline";
      waitingButton.style.display = "none";
      showSummaryButton.style.display = "none";
      infoLine.style.display = "none";
      document.getElementById("summary").style.display = "block";
      document.getElementById("cards").style.display = "none";
      document.getElementById("hud2").style.display = "none";
      break;
  }
}

function getMode() {
  // function to let user select a game mode:
  // either classic with a random card in each round
  // or play with one card throughout the entire game

  var cardsListDropdown = document.getElementById("chosenCardSelect");
  var noCardSelectionDiv = document.getElementById("noCardSelection");
  noCardSelectionDiv.innerHTML = "";

  // Reset list of cards to choose from first
  while (cardsListDropdown.hasChildNodes()) {
    cardsListDropdown.removeChild(cardsListDropdown.lastChild);
  }

  // Build list of all cards to choose from
  var chooseCardMsgElement = document.createElement("option");
  chooseCardMsgElement.value = "noSelection";
  var chooseCardMsgContent = document.createTextNode(chooseCardMsg);
  chooseCardMsgElement.appendChild(chooseCardMsgContent);
  cardsListDropdown.appendChild(chooseCardMsgElement);

  var newCardInList;
  var newCardInListContent;

  for (i = 0; i < cardsList.length; i+=1) {
    newCardInList = document.createElement("option");
    newCardInList.value = cardsList[i][0];
    newCardInListContent = document.createTextNode(cardsList[i][1]);
    newCardInList.appendChild(newCardInListContent);
    cardsListDropdown.appendChild(newCardInList);
  }


  // build random list of categories - delete this section if
  // getCategories() will be used

  chosenCategories = [];
  for (i = 1; i < data_header.length; i+=1) {
    chosenCategories.push(i);
  }

  var currentCatIndex = chosenCategories.length;
  var temporaryCatValue;
  var randomCatIndex;

  // While there remain elements to shuffle...
  while (0 !== currentCatIndex) {

    // Pick a remaining element...
    randomCatIndex = Math.floor(Math.random() * currentCatIndex);
    currentCatIndex -= 1;

    // And swap it with the current element.
    temporaryCatValue = chosenCategories[currentCatIndex];
    chosenCategories[currentCatIndex] = chosenCategories[randomCatIndex];
    chosenCategories[randomCatIndex] = temporaryCatValue;
  }

  // Use number (specified before) of categories of shuffled list
  chosenCategories = chosenCategories.slice(0, numberOfCategories);



  // Let player choose game mode
  $(document).on("click", "#randomCards", function() {
    gameMode = "random";
    initGame();
  });

  $(document).on("click", "#chosenCardButton", function() {
    gameMode = "fixedCard";
    chosenCard = $("#chosenCardSelect :selected").val();

    if (chosenCard == "noSelection") {
      noCardSelectionDiv.innerHTML = noCardSelectionMsG;
    } else {
      initGame();
    }

  });

}

function getCategories() {
  // function to let user select, which categories to play with:
  // either with five random categories (currently)
  // or with five fixed categories

  var categoriesList = document.getElementById("chosenCategoriesList");
  var noCategorySelectionDiv = document.getElementById("noCategorySelection");
  noCategorySelectionDiv.innerHTML = "";

  // Reset checkboxes for categories
  while (categoriesList.hasChildNodes()) {
    categoriesList.removeChild(categoriesList.lastChild);
  }

  // Build checkboxes with categories
  var newCategoryCheckbox;
  var newCategoryInput;
  var newCategoryLabel;
  var newCategoryLabelContent;

  for (i = 1; i < data_header.length; i+=1) {
    newCategoryCheckbox = document.createElement("div");
    newCategoryCheckbox.classList.add("custom-control", "custom-checkbox",
                                      "custom-control-inline");

    newCategoryInput = document.createElement("input");
    newCategoryInput.id = i;
    newCategoryInput.classList.add("custom-control-input");
    newCategoryInput.type = "checkbox";

    newCategoryLabel = document.createElement("label");
    newCategoryLabel.classList.add("custom-control-label");
    newCategoryLabel.setAttribute("for", i);
    newCategoryLabelContent = document.createTextNode(data_header[i]);
    newCategoryLabel.appendChild(newCategoryLabelContent);

    newCategoryCheckbox.appendChild(newCategoryInput);
    newCategoryCheckbox.appendChild(newCategoryLabel);

    categoriesList.appendChild(newCategoryCheckbox);
  }

  // Let player choose categories

  // If player chooses random categories, create random array of five numbers
  $(document).on("click", "#randomCategories", function() {
    chosenCategories = [];
    for (i = 1; i < data_header.length; i+=1) {
      chosenCategories.push(i);
    }

    var currentCatIndex = chosenCategories.length;
    var temporaryCatValue;
    var randomCatIndex;

    // While there remain elements to shuffle...
    while (0 !== currentCatIndex) {

      // Pick a remaining element...
      randomCatIndex = Math.floor(Math.random() * currentCatIndex);
      currentCatIndex -= 1;

      // And swap it with the current element.
      temporaryCatValue = chosenCategories[currentCatIndex];
      chosenCategories[currentCatIndex] = chosenCategories[randomCatIndex];
      chosenCategories[randomCatIndex] = temporaryCatValue;
    }

    // Use first five categories of shuffled list
    chosenCategories = chosenCategories.slice(0, numberOfCategories);

    initGame();

  });

  // if player chooses own categories, store in array
  $(document).on("click", "#chosenCategoriesButton", function() {
    chosenCategories = [];
    for (i = 1; i < data_header.length; i+=1) {
      currentCatID = "#" + i;
      if ($(currentCatID).is(":checked"))
        chosenCategories.push(i);
    }

    if (chosenCategories.length != numberOfCategories) {
      noCategorySelectionDiv.innerHTML = noCategorySelectionMsG;
    } else {
      initGame();
    }
  });

}

function buildDecks() {
  // Assign cards to player and computer according to game mode selection

  if (gameMode == "random") {
    // Deal 10 random cards each 
    playerCards = allCards.slice(0, numberOfRounds);
    computerCards = allCards.slice(numberOfRounds, 20);
  } else {
    // assign the chosen card to player 10 times
    playerCards = [];
    for (i = 0; i < numberOfRounds; i+=1) {
      playerCards.push(eval(chosenCard));
    }
    // remove chosen player card from cards, assign computer random cards
    chosenCardIndex = allCards.indexOf(eval(chosenCard));
    allCards.splice(chosenCardIndex, 1);
    computerCards = allCards.slice(0, numberOfRounds);
  }

}

function updateScore() {
  // function to display the current score
  playerCount = document.getElementById("player_count");
  computerCount = document.getElementById("computer_count");
  playerCount.innerHTML = playerPoints;
  computerCount.innerHTML = computerPoints;
}

function buildComputerCard() {
  // function to display the current card of the computer
  computerCardDiv.classList.toggle("flip");

  var computerCardBack = document.getElementById("computerCardBack");
  computerCardBack.style.height = $(playercard).height() + "px";
  var computercardBackHeader=document.getElementById("computercardBackHeader");
  computercardBackHeader.innerHTML =  currentComputerCard[0];


  setTimeout(function(){
    //wait with card content so as not to display it before card is flipped back

    // Change heading of computer card
    var computercardHeader = document.getElementById("computercard_header");
    computercardHeader.innerHTML = "<h3 class='m-3 card-title'>" +
                                   currentComputerCard[0] + "</h3>";

    // Fill in computer card by looping through card-array
    var computercardCategories = document
      .getElementById("computercard_categories");
    computercardCategories.innerHTML = "";
    for (i = 0; i < chosenCategories.length; i+=1) {

      var currentCategory = chosenCategories[i];

      // make new row
      var newRow = document.createElement("div");
      newRow.id = "computer_category_row" + currentCategory;
      newRow.classList.add("list-group-item", "d-flex",
                           "w-100", "justify-content-between");
      document.getElementById("computercard_categories").appendChild(newRow);

      // category
      var newCat = document.createElement("h6");
      var newCatContent = document.createTextNode(data_header[currentCategory]);
      newCat.appendChild(newCatContent);
      document.getElementById("computer_category_row" + currentCategory)
        .appendChild(newCat);

      // show value
      var newVal = document.createElement("span");
      var currentValue = formatNumbers(currentComputerCard[currentCategory]);
      var newValContent = document
        .createTextNode(currentValue + data_suffix[currentCategory]);
      newVal.appendChild(newValContent);
      newVal.id = "computercardCategory" + currentCategory;
      newVal.classList.add("category_nolink");
      document.getElementById("computer_category_row" + currentCategory)
        .appendChild(newVal);
    }
  }, 500);
}


// functions needed when page loads
$(document).ready(function() {

  startGameButton = document.getElementById("startGame");
  startGameButton.addEventListener("click", initGame);

  startTurnButton = document.getElementById("startTurn");
  startTurnButton.addEventListener("click", initTurn);

  newGameButton = document.getElementById("newGame");
  newGameButton.addEventListener("click", initNewGame);

  showSummaryButton = document.getElementById("showSummary");
  showSummaryButton.addEventListener("click", initSummary);

  waitingButton = document.getElementById("waiting");

  infoLine = document.getElementById("info_line");
  summaryList = document.getElementById("summary_list");
  gameProgressBar = document.getElementById("gameProgress");

  computerCardDiv = document.getElementById("computercard");


  // Players turn: player chooses category
  $(document).on("click", ".category_link", function(event) {

    if (stateOfGame == 5) {

      var computerCardDiv = document.getElementById("computercard");
      var firstComputerCard = currentComputerCard;
      var firstPlayerCard = currentPlayerCard;

      // turn over computer card
      computerCardDiv.classList.toggle("flip");

      // log the chosen category
      var categoryID = parseInt(this.id.slice(-1));
      if (categoryID == 0) {
        categoryID = 10;
      }
      var chosenPlayerCategory = document
        .getElementById("playercardCategory" + categoryID);
      var chosenComputerCategory = document
        .getElementById("computercardCategory" + categoryID);

      // Prepare summary entry

      var newSummaryLine = document.createElement("div");
      newSummaryLine.classList.add("d-flex", "w-100", "border-top", "py-1");


      var newSummaryPlayer = document.createElement("div");
      newSummaryPlayer.classList.add("text-right", "summary_left")
      newSummaryPlayer.innerHTML = currentPlayerCard[0] + "<br>" +
        formatNumbers(currentPlayerCard[categoryID]) + data_suffix[categoryID];

      var newSummaryCat = document.createElement("div");
      newSummaryCat.classList
        .add("text-center", "d-inline-block", "px-1", "text-secondary", "summary_center")
      newSummaryCat.innerHTML = "<i>" + summary_header[categoryID] + "</i>";

      var newSummaryComputer = document.createElement("div");
      newSummaryComputer.classList.add("text-left", "summary_right")
      newSummaryComputer.innerHTML = currentComputerCard[0] + "<br>" +
        formatNumbers(currentComputerCard[categoryID]) +data_suffix[categoryID];

      if (data_comparison[categoryID] == "larger") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          newSummaryPlayer.classList.add("winner");
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]){
          newSummaryComputer.classList.add("winner");
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          newSummaryPlayer.classList.add("winner");
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]){
          newSummaryComputer.classList.add("winner");
        }
      }

      newSummaryLine.appendChild(newSummaryPlayer);
      newSummaryLine.appendChild(newSummaryCat);
      newSummaryLine.appendChild(newSummaryComputer);

      summaryList.appendChild(newSummaryLine);

      // Prepare progress-bar

      var progressBarWin = document.createElement("div");
      progressBarWin.classList.add("progress-bar", "bg-success");
      progressBarWin.style = progressBarPercentage;
      progressBarWin.role = "progressbar";

      var progressBarLose = document.createElement("div");
      progressBarLose.classList.add("progress-bar", "bg-danger");
      progressBarLose.style = progressBarPercentage;
      progressBarLose.role = "progressbar";

      var progressBarDraw = document.createElement("div");
      progressBarDraw.classList.add("progress-bar", "bg-warning");
      progressBarDraw.style = progressBarPercentage;
      progressBarDraw.role = "progressbar";

      // compare values, change message accordingly, update score

      if (data_comparison[categoryID] == "larger") {
        if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add("text-success");
          chosenComputerCategory.classList.add("text-danger");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-success");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnWonMsg + "</h4>";
          gameProgressBar.appendChild(progressBarWin);
          playerPoints += 1;
        } else if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]){
          chosenPlayerCategory.classList.add("text-danger");
          chosenComputerCategory.classList.add("text-success");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-danger");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnLostMsg + "</h4>";
          gameProgressBar.appendChild(progressBarLose);
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add("text-warning");
          chosenComputerCategory.classList.add("text-warning");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-warning");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnDrawMsg + "</h4>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      } else {
        if (firstPlayerCard[categoryID] < firstComputerCard[categoryID]) {
          chosenPlayerCategory.classList.add("text-success");
          chosenComputerCategory.classList.add("text-danger");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-success");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnWonMsg + "</h4>";
          playerPoints += 1;
          gameProgressBar.appendChild(progressBarWin);
        } else if (firstPlayerCard[categoryID] > firstComputerCard[categoryID]){
          chosenPlayerCategory.classList.add("text-danger");
          chosenComputerCategory.classList.add("text-success");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-danger");
          gameProgressBar.appendChild(progressBarLose);
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnLostMsg + "</h4>";
          computerPoints += 1;
        } else {
          chosenPlayerCategory.classList.add("text-warning");
          chosenComputerCategory.classList.add("text-warning");
          infoLine.classList.remove("text-light");
          infoLine.classList.add("text-warning");
          infoLine.innerHTML = "<h4 class='mb-1'>" + turnDrawMsg + "</h4>";
          gameProgressBar.appendChild(progressBarDraw);
        }
      }

      updateScore();


      //remove current card from decks

      playerCards.shift();
      computerCards.shift();
      currentRound += 1;

      // Proceed: Next card, if cards left or summary, if no cards left

      if (playerCards.length > 0) {
        updateButtons(4);
      } else {
        updateButtons(6);
        infoLine.classList.remove("text-success");
        infoLine.classList.remove("text-warning");
        infoLine.classList.remove("text-danger");
        infoLine.classList.add("text-light");
        infoLine.innerHTML = "<h4 class='mb-1'>" + gameOverMsg + "</h4>";
      }

    }

  } );

  // Show gameMode-Chooser on load - GAME IS STARTED HERE
  updateButtons(1);

});


// initiate new game after a game is finished
function initNewGame() {
  // updateButtons(1);
  window.location.reload()
}


function initGame() {
  //Function to initiate the actual game

  // Shuffle and deal cards
  shuffleCards();
  buildDecks();

  // Show cards and beginn game
  updateButtons(3);

  // Reset score
  playerPoints = 0;
  computerPoints = 0;
  updateScore();

  // Reset progress bar
  while (gameProgressBar.hasChildNodes()) {
    gameProgressBar.removeChild(gameProgressBar.lastChild);
  }

  // Start turn
  initTurn()
}

function initSummary() {
  //Function to display a summary of each turn after the game

  // Change buttons when summary is shown
  updateButtons(7)

  var summaryHeadline = document.getElementById("summaryHeadline");

  if (playerPoints > computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-success'>" + gameWonMsg +
      playerPoints + ":" + computerPoints + "</h3>";
  }
  if (playerPoints < computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-danger'>" + gameLostMsg +
      playerPoints + ":" + computerPoints + "</h3>";
  }
  if (playerPoints == computerPoints) {
    summaryHeadline.innerHTML = "<h3 class='text-warning'>" + gameDrawMsg +
      playerPoints + ":" + computerPoints + "</h3>";
  }
}

function initTurn() {
  //Function to initiate the next turn by showing the topmost player card

  updateButtons(5);

  // choose first card from each deck
  currentPlayerCard = playerCards[0];
  currentComputerCard = computerCards[0];

  // Change heading of player card
  var playercardHeader = document.getElementById("playercard_header");
  playercardHeader.innerHTML = "<h3 class='m-3 card-title'>" +
    currentPlayerCard[0] + "</h3>";

  // Fill in player card by looping through card-array
  var playercardCategories = document.getElementById("playercard_categories");
  playercardCategories.innerHTML = "";
  for (i = 0; i < chosenCategories.length; i+=1) {

    var currentCategory = chosenCategories[i];

    // make new row
    var newRow = document.createElement("div");
    newRow.id = "player_category_row" + currentCategory;
    newRow.classList
      .add("list-group-item");
    document.getElementById("playercard_categories").appendChild(newRow);

    // category
    var newCat = document.createElement("h6");
    var newCatContent = document.createTextNode(data_header[currentCategory]);
    newCat.appendChild(newCatContent);

    // value


    var newVal = document.createElement("h6");
    var currentValue = formatNumbers(currentPlayerCard[currentCategory]);
    var newValContent = document
      .createTextNode(currentValue + data_suffix[currentCategory]);
    newVal.appendChild(newValContent);

    // link whole row
    var newRowLink = document.createElement("a");
    newRowLink.id = "playercardCategory" + currentCategory;
    newRowLink.href = "#";
    newRowLink.classList
      .add("category_link", "d-flex", "w-100", "justify-content-between");
    newRowLink.appendChild(newCat);
    newRowLink.appendChild(newVal);
    document.getElementById("player_category_row" + currentCategory)
      .appendChild(newRowLink);

  }

  buildComputerCard();

}
