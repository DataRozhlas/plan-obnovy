var colors = {
  'default': '#aaa',
  '2020': '#e63946',
  '2018': '#009FB8',
  '2019': '#3E80B6',
  'avg' : '#e63946',
  'avg' : '#333',
  'uhrn-highlight': '#30638e'
}

Highcharts.setOptions({
    lang: {
      months: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'],
      shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
      // shortMonths: ['led', 'úno', 'bře', 'dub', 'kvě', 'čen', 'čec', 'srp', 'zář', 'říj', 'lis', 'pro'],
      decimalPoint: ',',
      numericSymbols: [' tis.', ' mil.', 'mld.', 'T', 'P', 'E'],
      rangeSelectorFrom: 'od',
      rangeSelectorTo: 'do',
      rangeSelectorZoom: 'vyberte období:',
    },
  });

let chartWidth =
document.getElementById("vis-treemap").offsetWidth > 600
  ? 600
  : document.getElementById("vis-treemap").offsetWidth;

Highcharts.chart('vis-treemap', {
    chart: {
     height : "800px",
    },
    series: [{
        type: "treemap",
        layoutAlgorithm: 'sliceAndDice',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: '1.1',
            name: 'Digitální služby občanům a firmám',
            color: "#e41a1c"
        }, {
            id: '1.2',
            name: 'Digitální systémy státní správy',
            color: "#377eb8"
        }, {
            id: '1.3',
            name: 'Digitální vysokorychlostní sítě',
            color: '#4daf4a'
        }, {
            id: '1.4',
            name: 'Digitální ekonomika a společnost, inovativní start-upy a nové technologie',
            color: '#984ea3'
        }, {
            id: '1.5',
            name: 'Digitální transformace podniků',
            color: '#ff7f00'
        }, {
            id: '1.6',
            name: 'Zrychlení a digitalizace stavebního řízení',
            color: '#ffff33'
        }, {
            name: 'Digitální služby pro koncové uživatele',
            parent: '1.1',
            value: 1072
        }, {
            name: 'Rozvoj otevřených dat a veřejného datového fondu',
            parent: '1.1',
            value: 162
        }, {
            name: 'Zajištění podmínek pro kvalitní správu datového fondu a zajištění řízeného přístupu k datům',
            parent: '1.1',
            value: 63
        }, {
            name: 'eHealth',
            parent: '1.1',
            value: 1423
        }, {
            name: 'Digitální přístup k justici',
            parent: '1.1',
            value: 229
        }, {
            name: 'Budování a rozvoj agendových informačních systémů',
            parent: '1.2',
            value: 950
        }, {
            name: 'Budování a rozvoj základních registrů a zázemí pro eGovernment',
            parent: '1.2',
            value: 2612
        }, {
            name: 'Kybernetická bezpečnost',
            parent: '1.2',
            value: 2695
        }, {
            name: 'Kompetenční centra',
            parent: '1.2',
            value: 364
        }, {
            name: 'Budování a rozvoj systémů podporujících elektronické zdravotnictví',
            parent: '1.2',
            value: 325
        }, {
            name: 'Vytvoření předpokladů pro digitální justici',
            parent: '1.2',
            value: 188
        }, {
            name: 'Zlepšit prostředí pro budování sítí elektronických komunikací',
            parent: '1.3',
            value: 1600
        }, {
            name: 'Podpora rozvoje ekosystému sítí 5G a dalšího rozvoje těchto sítí',
            parent: '1.3',
            value: 37
        }, {
            name: 'Vybudování vysokokapacitnícho připojení',
            parent: '1.3',
            value: 2850
        }, {
            name: 'Dokrytí 5G koridorů a podpora rozvoje sítí 5G',
            parent: '1.3',
            value: 0
        }, {
            name: 'Pokrytí obcí v nerentabilních venkovských oblastech s 5G signálem',
            parent: '1.3',
            value: 300
        }, {
            name: 'Výzkum a vývoj aktivit spojených s rozvojem 5G sítí a služeb',
            parent: '1.3',
            value: 890
        }, {
            name: 'Institucionální reforma systému koordinace a podpory digitální agendy a digitální transformace, vč. RIS 3 - řídící aktivita',
            parent: '1.4',
            value: 9
        }, {
            name: 'Evropské centrum excelence v AI "pro bezpečnější společnost"',
            parent: '1.4',
            value: 239
        }, {
            name: 'Evropský projekt pro boj s COVID fake news (European Digital Media Observatory Hub - EDMO)',
            parent: '1.4',
            value: 43
        }, {
            name: 'Přenos zahraniční nejlepší praxe a know-how pro digitální transformaci, monitoring a výzkum socio-ekonomických dopadů krize (vznik Samuel Niemann Institute)',
            parent: '1.4',
            value: 170
        }, {
            name: 'Platforma pro vzdělávání managementu SME pro post-COVID-19 digitální transformaci',
            parent: '1.4',
            value: 110
        }, {
            name: 'Evropský projekt pro DLT financování digitalizace SME pro překonání krize (European Blockchain Services Infrastructure - EBSI)',
            parent: '1.4',
            value: 225
        }, {
            name: 'Demonstrativní projekty rozvoje aplikací pro města a průmyslové oblasti (např. 5G)',
            parent: '1.4',
            value: 1100
        }, {
            name: 'Nastavení uceleného systému institucionální podpory investic a rozvoje inovativních firem, start-upů, a nových technologií',
            parent: '1.4',
            value: 9
        }, {
            name: 'Programy Czech Rise-Up',
            parent: '1.4',
            value: 600
        }, {
            name: 'Podpora podnikavosti, podnikání a inovativních firem po COVID-19',
            parent: '1.4',
            value: 150
        }, {
            name: 'Fondy pro rozvoj pre/seedových investic, strategických technologií a univerzitních spin-offů v rámci Evropských center excelence',
            parent: '1.4',
            value: 1400
        }, {
            name: 'Internacionalizace start-ups',
            parent: '1.4',
            value: 215
        }, {
            name: 'Vznik sandboxů v regulovaných odvětvích v souladu s EU prioritami',
            parent: '1.4',
            value: 150
        }, {
            name: 'Podpora strategických odvětví – společná skupina pro podporu a certifikace strategických technologií s Radou pro strategické technologie',
            parent: '1.4',
            value: 180
        }, {
            name: 'Vybudování kvantové komunikační infrastruktury',
            parent: '1.4',
            value: 110
        }, {
            name: 'Podpora VVI v zasažených strategických odvětvích – letecký průmysl',
            parent: '1.4',
            value: 1000
        }, {
            name: 'Založení Platformy pro digitalizaci průmyslu',
            parent: '1.5',
            value: 9
        }, {
            name: 'Evropské a národní digitální inovační huby',
            parent: '1.5',
            value: 200
        }, {
            name: 'Evropská referenční testovací centra',
            parent: '1.5',
            value: 130
        }, {
            name: 'Programy digitální transformace výrobních i nevýrobních podniků a zvýšení odolnosti (vč. např. kybernetické bezpečnosti)',
            parent: '1.5',
            value: 4660
        }, {
            name: 'Zavedení rekodifikace stavebního práva do praxe',
            parent: '1.6',
            value: 1120
        }, {
            name: 'Vytvoření Agendového informačního systému',
            parent: '1.6',
            value: 400
        }, {
            name: 'Rozvoj a využití datového fondu veřejné správy v územním plánování',
            parent: '1.6',
            value: 30
        }, {
            name: 'Plné využití přínosů digitalizace stavebního řízení',
            parent: '1.6',
            value: 200
        }]
    }],
    title: {
        text: 'Fruit consumption'
    }
});