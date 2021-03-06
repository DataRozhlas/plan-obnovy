import "./byeie"; // loučíme se s IE

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/

var datatab1 = [
  ["Digitální transformace podniků","Programy digitální transformace výrobních i nevýrobních podniků a zvýšení odolnosti (vč. např. kybernetické bezpečnosti)","Programy pro digitální transformaci firem, zvyšování resilience včetně kyberbezpečnosti.",4660,"MPO",0,100],
  ["Digitální vysokorychlostní sítě ","Vybudování vysokokapacitního připojení","Zvýšení počtu obcí a adresních míst s přístupem k VHCN – sítím s velmi vysokou kapacitou",2850,"-",0,100],
  ["Digitální systémy státní správy","Kybernetická bezpečnost","Rozšíření a zabezpečení systémů Policie ČR.",2695,"MV, MZV",0,100],
  ["Digitální systémy státní správy","Budování a rozvoj základních registrů a zázemí pro eGovernment","Nové datové centrum a Centrální místo služeb pro rozvoj eGovernmentu dovnitř veřejné správy.",2612,"MV, MPSV",0,100],
  ["Digitální vysokorychlostní sítě ","Zlepšit prostředí pro budování sítí elektronických komunikací ","Nedotační opatření pro zlevnění budování infrastruktury: databáze krajských investic, mapování neveřejných sítí, reforma sběru dat.",1600,"-",0,100],
  ["Digitální služby občanům a firmám","eHealth","Ustanovení Národního centra elektronického zdravotnictví, nové digitální služby, propojení poskytovatelů zdravotních služeb.",1423,"MZd",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Fondy pro rozvoj pre/seedových investic, strategických technologií a univerzitních spin-offů v rámci Evropských center excelence","Založení koinvestičního fondu pro podporu startupů.",1400,"Správce koinvestičního fondu",0,100],
  ["Zrychlení a digitalizace stavebního řízení","Zavedení rekodifikace stavebního práva do praxe","Vytvoření a vybavení Nejvyššího stavebního úřadu. Přijetí nového stavebního zákona.",1120,"MMR, NSÚ",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Demonstrativní projekty rozvoje aplikací pro města a průmyslové oblasti (např. 5G)","Vývoj aplikací pro Smart Cities a Průmysl 4.0.",1100,"MMR, MPO",0,100],
  ["Digitální služby občanům a firmám","Digitální služby pro koncové uživatele","Vznik Jednotné digitální brány pro komunikaci s úřady v EU. Propojení eNeschopenky s KHS a Chytrou karanténou.",1072,"MPO, MV, ČSSZ",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Podpora VVI v zasažených strategických odvětvích – letecký průmysl","Dokončení linky pro letecký průmysl umožňující vytvářet digitální dvojče leteckého motoru. Pořízení experimentálních motorů.",1000,"Realizátor projektu",0,100],
  ["Digitální systémy státní správy","Budování a rozvoj agendových informačních systémů ","Modernizace Czech POINT a nový integrovaný cizinecký agendový systém.",950,"MV",0,100],
  ["Digitální vysokorychlostní sítě ","Výzkum a vývoj aktivit spojených s rozvojem 5G sítí a služeb","Podpora výzkumu a vývoje aplikací pro 5G sítě.",890,"-",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Programy Czech Rise-Up","Granty pro resilientní řešení pro pocovidovou obnovu.",600,"MPO",0,100],
  ["Zrychlení a digitalizace stavebního řízení","Vytvoření Agendového informačního systému","Vytvoření nového informačního systému pro stavební agendu.",400,"MMR, NSÚ",0,100],
  ["Digitální systémy státní správy","Kompetenční centra","Nová kompetenční centra poskytující konzultace v oblasti eGovernmentu.",364,"MV",0,100],
  ["Digitální systémy státní správy","Budování a rozvoj systémů podporujících elektronické zdravotnictví","Rozšíření eReceptu na omamné a psychotropní látky a elektronické poukazy na zdravotnické prostředky. Spuštění nových IS ve zdravotnictví.",325,"MZd, SÚKL",0,100],
  ["Digitální vysokorychlostní sítě ","Pokrytí obcí v nerentabilních venkovských oblastech s 5G signálem","Nové BTS stanice s podporou 5G sítí na venkově.",300,"-",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Evropské centrum excelence v AI ","Vznik národního Evropského centra excelence v AI.",239,"MPO",0,100],
  ["Digitální služby občanům a firmám","Digitální přístup k justici","Nový web Portálu justice. Místnosti se zvukovou aparaturou pro Ministerstvo spravedlnosti.",229,"MS",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Evropský projekt pro DLT financování digitalizace SME pro překonání krize (European Blockchain Services Infrastructure - EBSI)","Vytvoření technické implementace evropské blockchainové infrastruktury pro malé a střední firmy.",225,"Realizátor projektu",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Internacionalizace start-ups","Akcelerátor pro podporu mezinárodní expanze startupů.",215,"CzechInvest",0,40],
  ["Digitální transformace podniků","Evropské a národní digitální inovační huby","Propojení hubů v síti Evropských digitálních inovačních hubů",200,"-",0,100],
  ["Zrychlení a digitalizace stavebního řízení","Plné využití přínosů digitalizace stavebního řízení","Vytvoření IS požadavků na stavby a souvisejících digitálních služeb v rámci agendy stavebního řízení.",200,"MMR, ČAS, ÚNMZ",0,100],
  ["Digitální systémy státní správy","Vytvoření předpokladů pro digitální justici","Nové datové centrum, videokonferenční místnosti a mobilní pracovní stanice pro Ministerstvo spravedlnosti.",188,"MS",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Podpora strategických odvětví – společná skupina pro podporu a certifikace strategických technologií s Radou pro strategické technologie","Založení certifikačních autorit pro strategické sektory.",180,"CzechInvest, Realizátor projektu",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Přenos zahraniční nejlepší praxe a know-how pro digitální transformaci, monitoring a výzkum socio-ekonomických dopadů krize (vznik Samuel Niemann Institute)","Založení institutu k monitoringu socioekonomických dopadů digitální transformace, vedeným ČVUT.",170,"Realizátor projektu",0,100],
  ["Digitální služby občanům a firmám","Rozvoj otevřených dat a veřejného datového fondu ","Nové funkce Národního katalogu otevřených dat včetně pokročilého vyhledávání. Oslovení nových poskytovatelů OD.",162,"MV",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Podpora podnikavosti, podnikání a inovativních firem po COVID-19","Podpora zakládání a rozvoje startupů.",150,"CzechInvest",0,40],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Vznik sandboxů v regulovaných odvětvích v souladu s EU prioritami","Vytvoření sandboxů pro testování projektů v odvětvích regulovaných EU, jako jsou finance, data a farmacie/medicína.",150,"Realizátor projektu",0,100],
  ["Digitální transformace podniků","Evropská referenční testovací centra","Vznik testovacího a experimentálního zařízení.",130,"MPO",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Platforma pro vzdělávání managementu SME pro post-COVID-19 digitální transformaci","Vznik vzdělávací platformy k tématům digitální transformace pro malé a střední firmy.",110,"Koordinátor platformy pro digitální transformaci",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Vybudování kvantové komunikační infrastruktury","Vytvoření optického propojení Prahy, Brna a Ostravy a dvou vedlejších metropolitních větví.",110,"Realizátor projektu",0,100],
  ["Digitální služby občanům a firmám","Zajištění podmínek pro kvalitní správu datového fondu a zajištění řízeného přístupu k datům","Návrh zákona správy datového fondu a řízeného přístupu k datům.",63,"MV",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Evropský projekt pro boj s COVID fake news (European Digital Media Observatory Hub - EDMO)","Založení hubu pro digitální média pro boj s fake news v oblasti covidu a 5G sítí, vedeným Karlovou univerzitou.",43,"Realizátor projektu",0,100],
  ["Digitální vysokorychlostní sítě ","Podpora rozvoje ekosystému sítí 5G a dalšího rozvoje těchto sítí","Vypracování strategických návrhů týkajících se rozvoje 5G sítí.",37,"-",0,100],
  ["Zrychlení a digitalizace stavebního řízení","Rozvoj a využití datového fondu veřejné správy v územním plánování","Vytvoření standardizovaných databází územně analytických podkladů pro územní plánování.",30,"MMR, NSÚ, KÚ",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Institucionální reforma systému koordinace a podpory digitální agendy a digitální transformace, vč. RIS 3 - řídící aktivita","Reforma výboru pro digitální ekonomiku a společnost a digitální transformaci ekonomiky.",9,"MPO",0,100],
  ["Digitální ekonomika a společnost, inovativní start-upy a nové technologie","Nastavení uceleného systému institucionální podpory investic a rozvoje inovativních firem, start-upů, a nových technologií","Ustavení pracovní skupiny ke koordinaci inovativních firem, start-upů a nových technologií.",9,"MPO",0,100],
  ["Digitální transformace podniků","Založení Platformy pro digitalizaci průmyslu","Platforma pro digitalizaci průmyslu podpořit založení digitálního ekosystému.",9,"-",0,100],
  ["Digitální vysokorychlostní sítě ","Dokrytí 5G koridorů a podpora rozvoje sítí 5G ","Nové BTS stanice s podporou 5G sítí v železničních koridorech, vybavení vagonů 5G receivery a podpora aplikací.",0,"-",0,100]
];

var datatab2 = [
  ["Renovace budov a ochrana ovzduší","Renovace budov, rozvoj zásobování energií, energetické komunity","Renovace budov, rozvoj zásobování energií, energetické komunity",0,"-",100,0],
  ["Cirkulární ekonomika a recyklace a průmyslová voda","Dopracování a implementace strategie Cirkulární Česko 2040","Dokončení strategie Cirkulární Česko 2040.",0,"MŽP",40,0],
  ["Podpora biodiverzity a řešení sucha","Novela Zákona o vodách – řešení sucha a nedostatku vody","Založení centrální a regionálních komisí pro řešení sucha, vytvoření národního a regionálních plánů.",0,"-","-","-"],
  ["Udržitelná a bezpečná doprava","Zlepšení životního prostředí (podpora železniční infrastruktury)","Modernizace 98 km železničních tratí, 8 stanic a 35 železničních budov.",11552,"SŽ","-",0],
  ["Renovace budov a ochrana ovzduší","Renovace a revitalizace budov pro energetickou úsporu, novostaveb v pasivu, OZE a adaptace na změnu klimatu vč. hospodařeni s vodou","Novela zákona o podporovaných zdrojích energie, podpora OZE a komunitní energetiky v domácnostech.",10000,"MŽP, MPO, SFŽP",100,0],
  ["Ochrana přírody a adaptace na klimatickou změnu","Budování lesů odolných klimatické změně  ","Obnovení 36 tisíc ha lesa melioračními a zpevňujícími dřevinami (listnaté stromy, jedle bělokorá).",8540,"MZe",100,0],
  ["Renovace budov a ochrana ovzduší","Výměna stacionárních zdrojů znečišťování","Podpora tepelných čerpadel a spalování biomasy, snížení spotřeby energie o 1990 TJ ročně.",8500,"MŽP, SFŽP",100,0],
  ["Snižování spotřeby energie","Realizace energeticky úsporných opatření při rekonstrukci státních budov","Omezení energetické spotřeby veřejných budov o 616 TJ ročně.",7500,"MPO",100,0],
  ["Udržitelná a bezpečná doprava","Elektrizace železnic","Elektrizace 40 km železnic.",6716,"SŽ","-",0],
  ["Přechod na čistší zdroje energie","Výstavba nových fotovoltaických zdrojů","Zvýšení instalované kapacity fotovoltaických zdrojů o 270 MWp.",5000,"MPO",100,0],
  ["Udržitelná a bezpečná doprava","Bezpečnost silniční a železniční dopravy (železniční přejezdy, mosty a tunely, cyklostezky a bezbariérové trasy)","Zvýšení bezpečnosti 291 železničních přejezdů, výstavba 85 km cyklostezek a modernizace 8 mostů/tunelů.",4777,"SŽ/SFDI","-",0],
  ["Ochrana přírody a adaptace na klimatickou změnu","Protipovodňová ochrana","Výstavba 40 protipovodňových opatření.",2530,"MZe/investoři",100,0],
  ["Snižování spotřeby energie","Realizace energeticky úsporných opatření při rekonstrukci systémů veřejného osvětlení","Omezení energetické spotřeby veřejného osvětlení o 286 TJ ročně.",2500,"MPO",100,0],
  ["Brownfieldy","Podpora investic do revitalizace některých oblastí","-",2032,"-",40,0],
  ["Ochrana přírody a adaptace na klimatickou změnu","Podpora opatření na drobných vodních tocích a malých vodních nádržích","Výstavba 100 nových vodních nádrží, zvýšení objemu vodních nádrží o 2,4 mil. kubíků",1850,"MZe",40,0],
  ["Rozvoj čisté mobility","Vozidla (elektrobusy, bateriové trolejbusy, hybridní autobusy) pro veřejnou hromadnou dopravu v Hlavním městě Praha ","Podpora nákupu 195 elektrobusů, bateriových trolejbusů nebo hybridních autobusy pro pražskou MHD.",1700,"MPO, správce programu",100,0],
  ["Přechod na čistší zdroje energie","Modernizace distribuce tepla v rámci soustav zásobování teplem","Modernizace rozvodů tepla v délce 115 km.",1660,"MPO",100,0],
  ["Cirkulární ekonomika a recyklace a průmyslová voda","Budování recyklační infrastruktury","Podpora 300 projektů pro recyklaci odpadu, vybudovaná nová kapacita 250 tis. tun.",1600,"MŽP/SFŽP",100,0],
  ["Rozvoj čisté mobility","Budování infrastruktury pro veřejnou dopravu (Praha)","Elektromobilita: vybudování 32 dobíjecích stanic pro pražskou veřejnou dopravu a 10 km infrastruktury pro dynamické dobíjení.",1200,"MPO, správce programu",100,0],
  ["Podpora biodiverzity a řešení sucha","Ochrana před suchem a přírodě blízká protipovodňová opatření v Brně","Úprava vodního koryta s cílem zvýšit retenci vody.",1200,"-",100,0],
  ["Podpora biodiverzity a řešení sucha","Zachytávání dešťové vody","Projekty na zachycení 40 tis. kubíků vody.",1200,"-",40,0],
  ["Ochrana přírody a adaptace na klimatickou změnu","Provádění pozemkových úprav s pozitivním vlivem na prevenci eroze a zachycování srážek","Zelená infrastruktura, podporující biodiverzitu, jako biocentra a biokoridory. Protierozní opatření. Celkem na 240 ha.",1000,"SPÚ",40,0],
  ["Cirkulární ekonomika a recyklace a průmyslová voda","Cirkulární řešení v podnicích","Podpora 70 projektů pro cirkulární řešení pro firmy.",1000,"MPO",40,0],
  ["Cirkulární ekonomika a recyklace a průmyslová voda","Úspora vody v průmyslu","Podpora 50 projektů pro šetření vodou v průmyslu.",1000,"MPO",40,0],
  ["Rozvoj čisté mobility","Vozidla (el, H2) pro podnikatelské subjekty včetně E-cargokol ","Podpora nákupu 3106 vozidel na alternativní paliva pro firmy.",990,"MPO, správce programu",100,0],
  ["Udržitelná a bezpečná doprava","Nové technologie a digitalizace na železniční infrastruktuře","Pokrytí 41 km železnic mobilním signálem. Výstavba 20 nových BTS stanic.",955,"SŽ","-",100],
  ["Cirkulární ekonomika a recyklace a průmyslová voda","Budování odpadové-energetické infrastruktury pro nakládání s vybranými druhy odpadů","Podpora 10 projektů pro nakládání s nerecyklovatelným a zejména nebezpečným odpadem, vybudovaná nová kapacita 3 tis. tun",800,"MŽP/SFŽP",0,0],
  ["Brownfieldy","Podpora investic do revitalizace oblastí ve veřejném vlastnictví pro nebyznysové využití","-",800,"-",40,0],
  ["Ochrana přírody a adaptace na klimatickou změnu","Závlahy","Udržení závlahy nebo začít zavlažovat 25 tis. ha.",780,"MZe",40,0],
  ["Rozvoj čisté mobility","Vozidla (el, H2) pro obce, kraje, státní správu a budování dobíjecích stanic pro municipality a jimi zřízené instituce","Podpora nákupu 2112 vozidel na alternativní paliva pro obce, kraje a stární správu.",600,"MPO, správce programu",100,0],
  ["Podpora biodiverzity a řešení sucha","Péče o oblasti chráněné jako Natura 2000 a zvlášť chráněné druhy rostlin a živočichů","Projekty na zachování 2 625 ha přírodních rezervací.",545,"-",40,0],
  ["Renovace budov a ochrana ovzduší","Podpora projektové přípravy stavby budov a vzdělávání v oblasti úspor energie a snižování emisí","Projekty komunitní energetiky, projektová příprava rodinných domů a rezidenčních budov.",500,"-",0,0],
  ["Brownfieldy","Podpora investic do revitalizace oblastí ve veřejném vlastnictví pro byznysové využití","-",500,"-","40",0],
  ["Podpora biodiverzity a řešení sucha","Adaptace vodních, lesních a nelesních ekosystémů na klimatickou změnu","Projekty na adaptaci 200 ha lesní půdy, 1250 nelesní půdy, 48 ha malých vodních nádrží a 4 ha říčních koryt.",455,"-",100,0],
  ["Rozvoj čisté mobility","Budování neveřejné infrastruktury ","Elektromobilita: vybudování 1940 dobíjecích stanic ve firmách.",300,"MPO, správce programu",100,0],
  ["Ochrana přírody a adaptace na klimatickou změnu","Zadržování vody v lese","Podpora 60 projektů hrazení bystřin v zadržování vody v lesích.",300,"MZe",40,0],
  ["Rozvoj čisté mobility","Budování dobíjecích stanic pro obytné budovy","Elektromobilita: vybudování 2880 dobíjecích stanic pro rezidenty.",144,"MPO, správce programu",100,0],
  ["Cirkulární ekonomika a recyklace a průmyslová voda","Implementace nové legislativy odpadového hospodářství ČR","Dokončení a přijetí prováděcích předpisů k nové odpadové legislativě.",0,"MŽP",40,0]
];

var datatab3 = [
  ["Modernizace služeb zaměstnanosti a rozvoj trhu práce","Rozvoj infrastruktury sociálních služeb péče (vznik nových kapacit komunitního charakteru a ambulantních a terénních sociálních služeb včetně zázemí, rekonstukce stávajících kapacity, nákup automobilů, rozvoj asistivních technologií, aj…) ","Nákup automobilů, zajištění zázemí pro ambulantní a terénní služby, výstavba a rekonstrukce pobytových služeb.",8500,"MPSV","40/100",0],
  ["Adaptace kapacity a zaměření školních programů","Investice do rozvoje vybraných klíčových akademických pracovišť","Podpora projektů a výstavby nových budov u vybraných akademických pracovišť.",7156,"MŠMT",0,0],
  ["Modernizace služeb zaměstnanosti a rozvoj trhu práce","Investice: Rozvoj politiky zaměstnanosti (rekvalifikace a další profesní vzdělávání)","Vybavení moderních vzdělávacích center. Vytvoření databáze rekvalifikací. Ustavení Výboru pro rekvalifikace a další vzdělávání.",7000,"MPSV, MŠMT, ÚP",0,100],
  ["Modernizace služeb zaměstnanosti a rozvoj trhu práce","Budování kapacit předškolních zařízení","Stavební úpravy přes 350-435 školek nebo jeslí.",6993,"MPSV","0/40/100",0],
  ["Inovace ve vzdělávání v kontextu digitalizace","Fond mobilních digitálních zařízení pro znevýhodněné žáky a digitalizace  škol","Nákup notebooků pro znevýhodněné žáky základních škol a nižších stupňů gymnázií. Podpora 1120 škol ve správě IT.",4295,"MŠMT",0,100],
  ["Adaptace kapacity a zaměření školních programů","Transformovat vysoké školy s cílem adaptace na nové formy učení a v odpovědi na měnící se potřeby trhu práce v post-covidové obnově","Podpora univerzit k rozvoji ekonomicky úspěšných sektorů jako AI, kyberbezpečnost, průmysl 4.0 nebo e-government.",3000,"MŠMT",0,0],
  ["Adaptace kapacity a zaměření školních programů","Podpora škol","Příprava návrhu upravit financování škol podle socioekonomických nevýhod. Školení učitelů 250 škol.",2000,"MŠMT",0,0],
  ["Adaptace kapacity a zaměření školních programů","Doučování žáků  škol","Podpora 500 tisíc znevýhodněných žáků a žáků postižených dlouhodobým uzavřením škol.",1000,"MŠMT",0,0],
  ["Inovace ve vzdělávání v kontextu digitalizace","Implementace DigCompEdu","Vytvoření digitálního ekosystému pro sdílení materiálů pedagogy. Podpora 4000 škol školením učitelů v digitální gramotnosti.",562,"MŠMT",0,100],
  ["Modernizace služeb zaměstnanosti a rozvoj trhu práce","Rozvoj infrastruktury sociálních služeb prevence a poradenství včetně rozvoje moderních technologií","Schválení zákona o sociálních službách s cílem propojit služby dlouhodobé sociální a zdravotní péče.",500,"-",0,0],
  ["Inovace ve vzdělávání v kontextu digitalizace","Reforma kurikula a její implementace","Schválení kurikula pro základní vzdělávání a gymnázia zahrnující koncept informatického myšlení a digitální klíčovou kompetencí. ",0,"MŠMT",0,100]
];

var datatab4 = [
  ["Protikorupční opatření","Zlepšení postavení oznamovatelů ","Přijetí zákona o ochraně oznamovatelů. Studie, konference, školení, kampaň.",0,"MS",0,0],
  ["Protikorupční opatření","Reforma v justici zaměřená na posílení legislativního rámce a transparentnosti v oblasti  soudů, soudců, státních zástupců a soudních exekutorů","Novela zákona o soudech, soudcích, přísedících a státní správě soudů. Novela zákona o řízení ve věcech soudců, státních zástupců a soudních exekutorů.",0,"MS",0,0],
  ["Protikorupční opatření","Sběr dat o korupci v ČR","Online dotazník nad 1000 insidery. Vytvoření metodologie pro sběr dat o korupci.",0,"MS",0,0],
  ["Protikorupční opatření","Nastavení právního rámce pro lobbying","Přijetí zákona o lobbyingu.",0,"-",0,0],
  ["Rozvoj kulturního a kreativního sektoru ","Rozvoj regionálního kulturního a kreativního sektoru","Legislativní rámec pro vícezdrojové financování kultury. Otevření 10 regionálních kulturních center.",3400,"MK",0,0],
  ["Systémová podpora veřejných investic","Podpora přípravy projektů","Finanční podpora přípravy strategických projektů v regionech (včetně PPP). Cílovou skupinou jsou regionální investoři.",2324,"-",0,0],
  ["Rozvoj kulturního a kreativního sektoru ","Digitalizace kulturního a kreativního sektoru","Podpora 90 projektů digitalizace kulturních objektů.",1010,"MK",0,100],
  ["Nové kvazikapitálové nástroje na podporu podnikání, rozvoj ČMZRB v roli národní rozvojové banky a navýšení jejího základního kapitálu","Nové kvazikapitálové nástroje na podporu podnikání a rozvoj ČMZRB v roli národní rozvojové banky","Podpora podnikání skrz rozvoj Českomoravské záruční a rozvojové banky. Podpora 100 podniků.",1000,"ČMZRB",40,"-"],
  ["Rozvoj kulturního a kreativního sektoru ","Status umělce","Návrh zákona o statutu umělců. Podpora rozvoje dovedností a síťování 2000 subjektů.",800,"MK",0,40],
  ["Rozvoj kulturního a kreativního sektoru ","Podpora výzkumu a vývoje v oblasti sociálních a humanitních věd","Podpora 220 subjektů v oblasti výzkumu sociálněvědných a humanitních oborů.",800,"MK",0,0],
  ["Rozvoj kulturního a kreativního sektoru ","Transformace Státního fondu kinematografie na Fond Audiovize","Návrh zákona o audiovizi a podpora aktérů v této oblasti (videohry, small screen, filmové infrastruktury). Podpora 30 projektů.",760,"MK",0,100],
  ["Rozvoj kulturního a kreativního sektoru ","Modernizace kulturních institucí","Podpora technologické modernizace 80 kulturních subjektů.",750,"MK",0,0],
  ["Rozvoj kulturního a kreativního sektoru ","Kreativní vouchery","Vytvoření a přidělení 4000 kreativních voucherů.",630,"MK",0,40],
  ["Systémová podpora veřejných investic","Systemická podpora veřejných investic. Podpora kompetencí: digitální tranzice včetně vývoje podpůrného softwaru","Vývoj analytického softwaru pro hodnocení investičních projektů.",58,"MMR",0,0],
  ["Systémová podpora veřejných investic","Systemická podpora veřejných investic. Podpora kompetencí: zelená tranzice","Školení k veřejným investicím a vytvoření metodologických dokumentů na MMR.",55,"MMR",100,0],
  ["Systémová podpora veřejných investic","Systemická podpora veřejných investic. Podpora kompetencí: příprava projektů včetně PPP","Spuštění kompetenčního centra.",53,"MMR",0,0],
  ["Zvýšení efektivity výkonu veřejné správy","Zvýšení efektivity, pro-klientské orientace a využití principů evidence-informed ve veřejné správě","Vytvoření metodiky, nástroje a databáze s údaji o efektivitě veřejné správy. Vznik analytického útvaru. Školení.",51,"MV",0,0]
];

var datatab5 = [
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Řešení nových příležitostí a výzev prostřednictvím posilování výkonnosti českých podniků v oblasti VaVaI","Založení Národní koordinační skupiny pro podporu průmyslového výzkumu. 967 podpořených projektů, 162 inovací.",0,"MPO, TAČR",0,0],
  ["Excelentní výzkum a vývoj v prioritních oblastech veřejného zájmu ve zdravotnictví","Systémová podpora VaVaI pro prioritní oblasti lékařských věd a související společenskovědní disciplíny ","Podpora výzkumu a vývoje v prioritních lékařských vědách a souvisejících společenskovědních disciplínách. Podpora 4 konsorcií.",5000,"MŠMT",0,0],
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Podpora výzkumu a vývoje v podnicích podle RIS3 strategie","Podpora výzkumu a vývoje v priotitních oblastech. Určena pro 170 velkých a 277 malých a středních firem.",4650,"TAČR",0,0],
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Podpora spolupráce v oblasti výzkumu a vývoje (v souladu s RIS3 strategií)","Podpora spolupráce malých a středních firem s veřejnými výzkumnými organizacemi. Cílem je účast 30 firem.",1500,"TAČR",0,40],
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Podpora zavádění inovací do podnikové praxe","Podpora inovací ve firmách v prioritních oblastech. Cílem je podpora 180 projektů.",1000,"MPO",0,40],
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Podpora výzkumu a vývoje v synergických efektech s rámcovým programem pro výzkum a inovace","Podpora projektů v mezinárodní výzvě rámcového programu pro výzkum a inovace a projektů, které obdržely pečeť excelence. Cíl: 79 projektů.",500,"TAČR",0,40],
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Podpora výzkumu a vývoje v oblasti dopravy","Podpora výzkumu a vývoje v oblasti dopravy. Cílem je podpora 57 projektů.",350,"TAČR",0,0],
  ["Podpora výzkumu a vývoje v podnicích a zavádění inovací do podnikové praxe","Podpora výzkumu a vývoje v oblasti životního prostředí","Podpora výzkumu a vývoje v oblasti životního prostředí. Cílem je podpora 53 projektů.",200,"TAČR",100,0]
];

var datatab6 = [
  ["Zvýšení odolnosti systému zdravotní péče","Národní onkologický program ČR - NOP ČR 2030","Vytvoření Národního onkologického programu 2030.",0,"-",0,0],
  ["Národní plán na posílení onkologické prevence a péče","Vybudování Českého onkologického institutu","Stavba a zprovoznění Českého onkologického institutu.",6850,"-",0,0],
  ["Národní plán na posílení onkologické prevence a péče","Rozvoj vysoce specializované hematoonkologické a onkologické péče","Podpora onkologických a hematoonkologických center.",2000,"-",0,0],
  ["Zvýšení odolnosti systému zdravotní péče","Zvýšení dostupnosti a rozvoj komplexní rehabilitační péče pro pacienty po kritických stavech","Podpora rehabilitačních center pro pacienty po prodělání kritického stavu.",1900,"-",0,0],
  ["Zvýšení odolnosti systému zdravotní péče","Vznik simulačního centra intenzivní medicíny včetně optimalizace systému vzdělávání","Stavba a zprovoznění centra simulací intenzivní medicíny a školení lékařů.",1600,"-",0,40],
  ["Zvýšení odolnosti systému zdravotní péče","Rozvoj vysoce specializované péče – vybudování centra kardiovaskulární a transplantační medicíny ","Stavba a zprovoznění centra kardiovaskulární a transplantační medicíny.",1200,"-",0,0],
  ["Národní plán na posílení onkologické prevence a péče","Vznik a rozvoj Centra onkologické prevence a infrastruktury pro inovativní a podpůrnou péči v Masarykově onkologickém ústavu","Stavba a zprovoznění Centra onkologické prevence v Masarykově onkologickém ústavu v Brně.",1000,"-",0,0],
  ["Národní plán na posílení onkologické prevence a péče","Podpora a zvyšování kvality preventivních screeningových programů","Realizace programů časného záchytu onemocnění",400,"-",0,0]
];

$(document).ready(function() {
  $('#tab1').DataTable({
    "scrollX": true,
    "order": [[3, "desc"]],
    "pageLength": 5,
    "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "všechny"]],
    data: datatab1,
    columns: [
      { title: "Komponenta" },
      { title: "Originální název" },
      { title: "Popis" },
      { title: "CZK mil." },
      { title: "Gar." },
      { title: "Klim. %" },
      { title: "Dig. %" }
    ],    
    "responsive": true,
    "ordering": true,
    "searching": true,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://samizdat.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {
  $('#tab2').DataTable({
    "scrollX": true,
    "order": [[3, "desc"]],
    "pageLength": 5,
    "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "všechny"]],
    data: datatab2,
    columns: [
      { title: "Komponenta" },
      { title: "Originální název" },
      { title: "Popis" },
      { title: "CZK mil." },
      { title: "Gar." },
      { title: "Klim. %" },
      { title: "Dig. %" }
    ],    
    "responsive": true,
    "ordering": true,
    "searching": true,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://samizdat.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {
  $('#tab3').DataTable({
    "scrollX": true,
    "order": [[3, "desc"]],
    "pageLength": 5,
    "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "všechny"]],
    data: datatab3,
    columns: [
      { title: "Komponenta" },
      { title: "Originální název" },
      { title: "Popis" },
      { title: "CZK mil." },
      { title: "Gar." },
      { title: "Klim. %" },
      { title: "Dig. %" }
    ],    
    "responsive": true,
    "ordering": true,
    "searching": true,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://samizdat.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {
  $('#tab4').DataTable({
    "scrollX": true,
    "order": [[3, "desc"]],
    "pageLength": 5,
    "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "všechny"]],
    data: datatab4,
    columns: [
      { title: "Komponenta" },
      { title: "Originální název" },
      { title: "Popis" },
      { title: "CZK mil." },
      { title: "Gar." },
      { title: "Klim. %" },
      { title: "Dig. %" }
    ],    
    "responsive": true,
    "ordering": true,
    "searching": true,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://samizdat.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {
  $('#tab5').DataTable({
    "scrollX": true,
    "order": [[3, "desc"]],
    "pageLength": 5,
    "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "všechny"]],
    data: datatab5,
    columns: [
      { title: "Komponenta" },
      { title: "Originální název" },
      { title: "Popis" },
      { title: "CZK mil." },
      { title: "Gar." },
      { title: "Klim. %" },
      { title: "Dig. %" }
    ],    
    "responsive": true,
    "ordering": true,
    "searching": true,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://samizdat.cz/tools/datatables/Czech.json"
    }
  });
});

$(document).ready(function() {
  $('#tab6').DataTable({
    "scrollX": true,
    "order": [[3, "desc"]],
    "pageLength": 5,
    "lengthMenu": [[5, 10, 50, -1], [5, 10, 50, "všechny"]],
    data: datatab6,
    columns: [
      { title: "Komponenta" },
      { title: "Originální název" },
      { title: "Popis" },
      { title: "CZK mil." },
      { title: "Gar." },
      { title: "Klim. %" },
      { title: "Dig. %" }
    ],    
    "responsive": true,
    "ordering": true,
    "searching": true,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://samizdat.cz/tools/datatables/Czech.json"
    }
  });
});