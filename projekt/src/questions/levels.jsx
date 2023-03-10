const level1 = [
        {   level: 1,
            question: 'Które państwo graniczy z Polską na zachodzie?',
            answers: ['Niemcy', 'Litwa', 'Czechy', 'Słowacja'],
            public: [89,2,4,5],
            correctAnswer: 'Niemcy',
        },
        { level: 1,
            question: 'Które miasto jest stolicą Włoch?',
            answers: [ 'Mediolan', 'Neapol', 'Rzym',  'Turyn'],
            public: [1,4,95,0],
            correctAnswer: 'Rzym',
        },
        { level: 1,
            question: 'Które państwo jest największe pod względem powierzchni?',
            answers: [ 'Kanada','Rosja', 'Chiny', 'Argentyna'],
            public: [5,90,1,3],
            correctAnswer: 'Rosja',
        },
        { level: 1,
            question: 'Który z tych autorów napisał "Lalkę"?',
            answers: ['Bolesław Prus', 'Henryk Sienkiewicz', 'Adam Mickiewicz', 'Juliusz Słowacki'],
            public: [89,2,4,5],
            correctAnswer: 'Bolesław Prus',
        },
        { level: 1,
            question: 'Które państwo było przeciwnikiem Polski w wojnie polsko-bolszewickiej?',
            public: [9,91,0,0],
            answers: ['Niemcy', 'Rosja', 'Francja', 'Austria'],
            correctAnswer: 'Rosja',
        },
        { level: 1,
            question: 'Jaki pierwiastek jest składnikiem chemii organicznej?',
            public: [4,84,11,1],
            answers: ['Miedź', 'Węgiel', 'Żelazo', 'Srebro'],
            correctAnswer: 'Węgiel',
        },
        { level: 1,
            question: 'Kto namalował obraz "Mona Lisa"?',
            answers: [ 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet','Leonardo da Vinci'],
            public: [13,5,2,80],
            correctAnswer: 'Leonardo da Vinci',
        },
        { level: 1,
            question: 'Który z tych zespołów nie jest z Wielkiej Brytanii?',
            answers: ['The Beatles', 'U2', 'Queen', 'AC/DC'],
            public: [11,9,5,75],
            correctAnswer: 'AC/DC',
        },
        { level: 1,
            question: 'Która dyscyplina sportu jest związana z okręgiem i ringiem?',
            answers: ['Boks', 'Skoki narciarskie', 'Piłka nożna', 'Koszykówka'],
            public: [95,0,2,3],
            correctAnswer: 'Boks',
        },
        { level: 1,
            question: 'Z jakiego kraju pochodzi sushi?',
            answers: ['Japonia', 'Chiny', 'Korea', 'Wietnam'],
            public: [89,2,4,5],
            correctAnswer: 'Japonia',
        },
        { level: 1,
            question: 'Który z tych filmów nie jest z serii "Gwiezdne wojny"?',
            answers: ['Nowa nadzieja', 'Atak klonów', 'Terminator', 'Ostatni Jedi'],
            public: [4,2,89,5],
            correctAnswer: 'Terminator',
        },
        { level: 1,
            question: 'Który kraj ma najwięcej ludności na świecie?',
            answers: ['Indie', 'Chiny', 'Stany Zjednoczone', 'Rosja'],
            public: [19,79,1,1],
            correctAnswer: 'Chiny',
        },
    ]
const level2 = [
    {   level: 2,
        question: 'Co to jest mitochondrium?',
        answers: ['Element strukturalny komórki roślinnej', 'Element strukturalny komórki zwierzęcej', 'Cząsteczka DNA', 'Organellum komórkowe'],
        public: [10,10,1,79],
        correctAnswer: 'Organellum komórkowe',
    },
    { level: 2,
        question: 'Ile wynosi pierwiastek kwadratowy z liczby 144?',
        answers: [ '36', '24', '12',  '144'],
        public: [2,4,95,0],
        correctAnswer: '12',
    },
    { level: 2,
        question: 'Który kontynent leży najbliżej bieguna południowego?',
        answers: [ 'Europa','Ameryka Południowa', 'Arktyka', 'Antarktyda'],
        public: [2,3,10,85],
        correctAnswer: 'Antarktyda',
    },
    { level: 2,
        question: 'Który pierwiastek chemiczny jest gazem szlachetnym?',
        answers: ['Hel', 'Cynk', 'Tlen', 'Lit'],
        public: [89,1,9,1],
        correctAnswer: 'Hel',
    },
    { level: 2,
        question: 'Który kraj nie graniczy z Polską?',
        public: [1,3,0,96],
        answers: ['Czechy', 'Słowacja', 'Niemcy', 'Szwecja'],
        correctAnswer: 'Szwecja',
    },
    { level: 2,
        question: 'Która z planet Układu Słonecznego ma najwięcej księżyców?',
        public: [4,74,20,2],
        answers: ['Ziemia', 'Jowisz', 'Saturn', 'Uran'],
        correctAnswer: 'Jowisz',
    },
    { level: 2,
        question: 'Która z tych rzek przepływa przez Wielką Równinę?',
        answers: [ 'Nil', 'Amazonka', 'Missisipi','Jangcy'],
        public: [23,5,80,2],
        correctAnswer: 'Missisipi',
    },
    { level: 2,
        question: 'Które z tych zwierząt jest ssakiem?',
        answers: ['Rekin', 'Krokodyl', 'Pingwin', 'Wieloryb'],
        public: [2,3,10,85],
        correctAnswer: 'Wieloryb',
    },
    { level: 2,
        question: 'Jakie miasto jest stolicą Australii?',
        answers: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        public: [35,2,60,3],
        correctAnswer: 'Canberra',
    },
    { level: 2,
        question: 'Jakie miasto jest stolicą Kanady?',
        answers: ['Toronto', 'Montreal', 'Vancouver', 'Ottawa'],
        public: [3,2,3,87],
        correctAnswer: 'Ottawa',
    },
    { level: 2,
        question: 'Która z tych planet ma większą masę?',
        answers: ['Uran', 'Neptun', 'Mars', 'Wenus'],
        public: [18,74,3,5],
        correctAnswer: 'Neptun',
    },
    { level: 2,
        question: 'Który z tych kontynentów jest najmniej zaludniony?',
        answers: ['Europa', 'Afryka', 'Australia', 'Ameryka Południowa'],
        public: [3,5,82,10],
        correctAnswer: 'Australia',
    },
]
const level3 = [
    {   level: 3,
        question: 'Jakie są trzy najważniejsze rodzaje skał?',
        answers: ['Granit, piaskowiec, łupki', 'Granit, wapień, piaskowiec', 'Wapień, granit, bazalt', 'Piaskowiec, bazalt, łupki'],
        public: [5,71,14,10],
        correctAnswer: 'Granit, wapień, piaskowiec',
    },
    {   level: 3,
        question: 'Jaki jest największy gatunek rekinów?',
        answers: ['Rekin tygrysi', 'Rekin biały', 'Rekin wielorybi', 'Rekin planktonowy'],
        public: [10,15,74,1],
        correctAnswer: 'Rekin wielorybi',
    },
    {   level: 3,
        question: 'Jakie jest największe państwo na świecie?',
        answers: ['Rosja', 'Kanada', 'Chiny', 'Stany Zjednoczone'],
        public: [81,2,7,10],
        correctAnswer: 'Rosja',
    },
    {   level: 3,
        question: 'Który ocean jest największy?',
        answers: ['Indyjski', 'Atlantycki', 'Spokojny', 'Arktyczny'],
        public: [4,6,79,11],
        correctAnswer: 'Spokojny',
    },
    {   level: 3,
        question: 'Który kraj jest największym producentem kawy na świecie?',
        answers: ['Indie', 'Kolumbia', 'Brazylia', 'Włochy'],
        public: [1,4,81,14],
        correctAnswer: 'Brazylia',
    },
    {   level: 3,
        question: 'Który z tych sportów nie jest grą zespołową?',
        answers: ['koszykówka', 'piłka nożna', 'golf', 'siatkówka'],
        public: [1,0,97,1],
        correctAnswer: 'golf',
    },
    {   level: 3,
        question: 'Który z tych zespołów muzycznych sprzedał najwięcej płyt w historii?',
        answers: ['The Beatles', 'ABBA', 'Queen', 'Pink Floyd'],
        public: [65,3,17,15],
        correctAnswer: 'The Beatles',
    },
    {   level: 3,
        question: 'Który z tych krajów ma najwięcej wysp na świecie?',
        answers: ['Indonezja', 'Filipiny', 'Japonia', 'Nowa Zelandia'],
        public: [72,8,10,10],
        correctAnswer: 'Indonezja',
    },
    {   level: 3,
        question: 'Który z tych wynalazków został opatentowany jako pierwszy?',
        answers: ['samolot', 'żarówka', 'telefon', 'telewizor'],
        public: [2,83,14,1],
        correctAnswer: 'żarówka',
    },
    {   level: 3,
        question: 'Który z tych naukowców nie otrzymał Nagrody Nobla?',
        answers: ['Albert Einstein', 'Marie Curie', 'Isaac Newton', 'Charles Darwin'],
        public: [2,1,91,6],
        correctAnswer: 'Isaac Newton',
    },
    {   level: 3,
        question: 'Która z tych oper nie została skomponowana przez Giuseppe Verdiego?',
        answers: ['"La traviata"', '"Rigoletto"', '"Carmen"', '"Aida"'],
        public: [4,6,78,12],
        correctAnswer: '"Carmen"',
    },
    {   level: 3,
        question: 'Jaki kolor oznacza neutralny pH w teście papierka lakmusowego?',
        answers: ['Czerwony', 'Zielony', 'Niebieski', 'Fioletowy'],
        public: [5,81,4,10],
        correctAnswer: 'Zielony',
    },
    
]
const level4 = [
    {   level: 4,
        question: 'Które z tych piłkarskich rozgrywek organizowane są co 4 lata?',
        answers: ['Premier League', 'Mistrzostwa Świata', 'Puchar UEFA', 'Liga Mistrzów'],
        public: [,94,4,1],
        correctAnswer: 'Mistrzostwa Świata',
    },
    {   level: 4,
        question: 'Jakie jest największe jezioro w Afryce?',
        answers: ['Jezioro Wiktorii', 'Jezioro Czad', 'Jezioro Tanganika', 'Jezioro Niasa'],
        public: [79,8,3,10],
        correctAnswer: 'Jezioro Wiktorii',
    },
    {   level: 4,
        question: 'Jakie zwierzę jest symbolem Chin?',
        answers: ['Smok', 'Tygrys', 'Lew', 'Pandy'],
        public: [91,4,3,2],
        correctAnswer: 'Smok',
    },
    {   level: 4,
        question: 'Który z poniższych kolorów nie należy do podstawowych kolorów?',
        answers: ['Czerwony', 'Zielony', 'Purpurowy', 'Niebieski'],
        public: [1,0,97,2],
        correctAnswer: 'Purpurowy',
    },
    {   level: 4,
        question: 'Jaki jest najwyższy szczyt w Afryce?',
        answers: ['Góra Elbrus', 'Góra Kenia', 'Kilimandżaro', 'Mont Blanc'],
        public: [1,4,91,5],
        correctAnswer: 'Kilimandżaro',
    },
    {   level: 4,
        question: 'Które z poniższych państw nie jest częścią Brytyjskiej Wspólnoty Narodów?',
        answers: ['Kanada', 'Indie', 'Australia', 'Stany Zjednoczone'],
        public: [3,7,3,87],
        correctAnswer: 'Stany Zjednoczone',
    },
    {   level: 4,
        question: 'Które z poniższych miast nie jest stolicą?',
        answers: ['Wenecja', 'Jaunde', 'Canberra', 'Kopenhaga'],
        public: [84,11,3,2],
        correctAnswer: 'Wenecja',
    },
    {   level: 4,
        question: 'Które z poniższych państw ma najwięcej ludności?',
        answers: ['Rosja', 'Nigeria', 'Japonia', 'Brazylia'],
        public: [5,3,7,85],
        correctAnswer: 'Brazylia',
    },
    {   level: 4,
        question: 'Która z poniższych planet jest najbliżej Słońca?',
        answers: ['Wenus', 'Mars', 'Jowisz', 'Saturn'],
        public: [91,5,2,2],
        correctAnswer: 'Wenus',
    },
    {   level: 4,
        question: 'Które z poniższych miast jest największe pod względem powierzchni?',
        answers: ['Tokio', 'Nowy Jork', 'Berlin', 'Pekin'],
        public: [10,2,4,84],
        correctAnswer: 'Pekin',
    },
    {   level: 4,
        question: 'Które z poniższych drzew jest największe na świecie?',
        answers: ['Dąb', 'Cedr libański', 'Mamutowiec olbrzymi', 'Modrzew europejski'],
        public: [4,11,83,2],
        correctAnswer: 'Mamutowiec olbrzymi',
    },
    {   level: 4,
        question: 'Jaki jest największy kontynent na Ziemi?',
        answers: ['Europa', 'Ameryka Północna', 'Azja', 'Australia'],
        public: [4,9,84,3],
        correctAnswer: 'Azja',
    },
    {   level: 4,
        question: 'Który pierwiastek chemiczny jest gazem szlachetnym?',
        answers: ['Tlen', 'Wodór', 'Argon', 'Kobalt'],
        public: [3,9,86,2],
        correctAnswer: 'Argon',
    },
]
const level5 = [
    {   level: 5,
        question: 'Co oznacza skrót RAM?',
        answers: ['Read-Only Memory', 'Random Access Memory', 'Read-and-Write Memory', 'Remote Access Memory'],
        public: [1,73,7,19],
        correctAnswer: 'Random Access Memory',
    },
    {   level: 5,
        question: 'Ile wynosi pierwiastek kwadratowy z 169?',
        answers: ['11', '13', '14', '15'],
        public: [10,68,12,10],
        correctAnswer: '13',
    },
    {   level: 5,
        question: 'Która z tych partii politycznych nie jest skrajną prawicą?',
        answers: ['Front Narodowy we Francji', 'Alternatywa dla Niemiec (AfD)', 'Partia Pracy w Wielkiej Brytanii', 'Liberalna Partia Austrii'],
        public: [9,12,65,14],
        correctAnswer: 'Partia Pracy w Wielkiej Brytanii',
    },
    {   level: 5,
        question: 'Który z tych filmów nie zdobył Oscara dla najlepszego filmu?',
        answers: ['"Zielona Księga"', '"Nietykalni"', '"Forrest Gump"', '"Lot nad kukułczym gniazdem"'],
        public: [25,63,3,9],
        correctAnswer: '"Nietykalni"',
    },
    {   level: 5,
        question: 'Ile wynosi stała Avogadra?',
        answers: ['6,022 x 10²³', '6,002 x 10²³', '6,220 x 10²³', '6,200 x 10²³'],
        public: [59,11,22,8],
        correctAnswer: '6,022 x 10²³',
    },
    {   level: 5,
        question: 'Która z tych państwowych agencji kosmicznych nie wystrzeliła jeszcze człowieka w kosmos?',
        answers: ['NASA', 'Roskosmos', 'JAXA', 'ESA'],
        correctAnswer: 'ESA',
    },
    {   level: 5,
        question: 'Który z tych języków nie należy do rodziny języków słowiańskich?',
        answers: ['czeski', 'bułgarski', 'węgierski', 'chorwacki'],
        public: [2,14,68,16],
        correctAnswer: 'węgierski',
    },
    {   level: 5,
        question: 'Co to jest mitoza?',
        answers: ['Proces podziału jądra w komórkach somatycznych', 'Proces podziału jądra w komórkach płciowych', 'Proces syntezy białek', 'Proces fotosyntezy'],
        public: [59,14,11,16],
        correctAnswer: 'Proces podziału jądra w komórkach somatycznych',
    },
    {   level: 5,
        question: 'Co to jest DNS?',
        answers: ['Protokół internetowy', 'Skrót od sklepu internetowego', 'Materiał genetyczny', 'Skrót od dyplomowanej pielęgniarki'],
        public: [17,4,65,14],
        correctAnswer: 'Protokół internetowy',
    },
    {   level: 5,
        question: 'Co to jest MRI?',
        answers: ['Metoda leczenia chorób układu trawiennego', 'Skrót od firmy farmaceutycznej', 'Metoda obrazowania mózgu', 'Metoda leczenia chorób serca'],
        public: [5,2,84,9],
        correctAnswer: 'Metoda obrazowania mózgu',
    },
    {   level: 5,
        question: 'Co to jest amoniak?',
        answers: ['Gaz bezwonny', 'Ciecz bezbarwna', 'Gaz o ostrym zapachu', 'Ciecz o ostrym zapachu'],
        public: [4,6,73,17],
        correctAnswer: 'Gaz o ostrym zapachu',
    },
    {   level: 5,
        question: 'Który pierwiastek chemiczny ma symbol Hg?',
        answers: ['Srebro', 'Radium', 'Rtęć', 'Hel'],
        public: [22,11,67,0],
        correctAnswer: 'Rtęć',
    },
    
]
const level6 = [
    {   level: 6,
        question: 'Który kolor ma największą długość fali?',
        answers: ['Czerwony', 'Zielony', 'Niebieski', 'Fioletowy'],
        public: [59,4,12,25],
        correctAnswer: 'Czerwony',
    },
    {   level: 6,
        question: 'Co to jest performatywność wypowiedzi?',
        answers: ['Możliwość wykorzystania słów w kilku znaczeniach', 'Umiejętność przekazywania emocji przez mowę', 'Zdolność do dokonywania czynności przez same wypowiedzi', 'Możliwość tworzenia złożonych konstrukcji gramatycznych'],
        public: [11,25,48,16],
        correctAnswer: 'Zdolność do dokonywania czynności przez same wypowiedzi',
    },
    {   level: 6,
        question: 'Co to jest afiks?',
        answers: ['Część słowa, która jest nieodłączna od rdzenia', 'Słowo, które zmienia swoje znaczenie w zależności od kontekstu', 'Słowo składające się z jednej sylaby', 'Słowo o charakterze emocjonalnym'],
        public: [60,12,8,20],
        correctAnswer: 'Część słowa, która jest nieodłączna od rdzenia',
    },
    {   level: 6,
        question: 'Jakie słowo opisuje umiejętność odtworzenia poprawnej formy słowa na podstawie jego odmiany?',
        answers: ['Morfem', 'Morfologia', 'Fleksja', 'Derywacja'],
        public: [24,4,49,23],
        correctAnswer: 'Fleksja',
    },
    {   level: 6,
        question: 'Co to jest hiperbola?',
        answers: ['Stylizowany wers poezji bez rymów', 'Zdanie złożone złożone z kilku prostszych zdań', 'Przesadzone wyolbrzymienie wypowiedzi', 'Układanie słów w ściśle określony sposób'],
        public: [4,12,78,6],
        correctAnswer: 'Przesadzone wyolbrzymienie wypowiedzi',
    },
    {   level: 6,
        question: 'Co to jest homonim?',
        answers: ['Słowo, które brzmi tak samo, ale ma różne znaczenia', 'Słowo, które jest często używane w mowie potocznej', 'Słowo, które ma wiele różnych synonimów', 'Słowo, które brzmi podobnie, ale ma różne formy gramatyczne'],
        public: [78,8,6,8],
        correctAnswer: 'Słowo, które brzmi tak samo, ale ma różne znaczenia',
    },
    {   level: 6,
        question: 'Co to jest konotacja?',
        answers: ['Pierwotne, dosłowne znaczenie słowa', 'Drugorzędne, nacechowane emocjonalnie znaczenie słowa', 'Formalny sposób użycia słowa', 'Zbiór wszystkich znaczeń słowa'],
        public: [8,56,19,17],
        correctAnswer: 'Drugorzędne, nacechowane emocjonalnie znaczenie słowa',
    },
    {   level: 6,
        question: 'Jakie było pierwsze miasto założone na świecie?',
        answers: ['Babilon', 'Ur', 'Jerycho', 'Damaszek'],
        public: [22,19,48,11],
        correctAnswer: 'Jerycho',
    },
    {   level: 6,
        question: 'Co oznacza skrót MRI?',
        answers: ['Magnetic Resonance Imaging', 'Magnetic Resistance Imaging', 'Magnetic Radiation Imaging', 'Magnetic Resonance Interference'],
        public: [49,4,28,19],
        correctAnswer: 'Magnetic Resonance Imaging',
    },
    {   level: 6,
        question: 'Co to jest hipotonia?',
        answers: ['Niskie ciśnienie krwi', 'Wysokie ciśnienie krwi', 'Niski poziom cukru we krwi', 'Wysoki poziom cukru we krwi'],
        public: [69,11,18,2],
        correctAnswer: 'Niskie ciśnienie krwi',
    },
    {   level: 6,
        question: 'Które państwo jest największym producentem herbaty na świecie?',
        answers: ['Indie', 'Chiny', 'Kenia', 'Sri Lanka'],
        public: [35,51,4,10],
        correctAnswer: 'Chiny',
    },
    {   level: 6,
        question: 'Który z następujących malarzy był członkiem impresjonistycznej grupy artystycznej?',
        answers: ['Vincent van Gogh', 'Rembrandt', 'Claude Monet', 'Johannes Vermee'],
        public: [31,32,37,0],
        correctAnswer: 'Claude Monet',
    },
    
]
const level7 = [
    {   level: 7,
        question: 'Gdy Neil Armstron stanął na Księżycu, wypowiedział słynne zdanie. Co na Srebrnym Globie zrobił Alan Shepard?',
        answers: ['Zagrał w golfa', 'Biegał z siatką na motyle', 'Zatańczył rock and rolla', 'Godzinę leżał krzyżem'],
        public: [49,4,41,6],
        correctAnswer: 'Zagrał w golfa',
    },
    {   level: 7,
        question: 'Co mieści Wielki Łuk Braterstwa w paryskiej dzielnicy La Defense, zwany dwudziestowieczną wersją Łuku Triumfalnego?',
        answers: ['Szczątki Napoleona I', 'Nic', 'Ziemię z pól bitewnych', 'Biura ministerstwa ekologii'],
        public: [41,2,5,52],
        correctAnswer: 'Biura ministerstwa ekologii',
    },
    {   level: 7,
        question: 'Kto jest twórcą logo zespołu Perfect?',
        answers: ['Andrzej Mleczko', 'Henryk Sawka', 'Marek Raczkowski', 'Edward Lutczyn'],
        public: [12,15,22,51],
        correctAnswer: 'Edward Lutczyn',
    },
    {   level: 7,
        question: 'Na co reaguje nocyceptor?',
        answers: ['Na mroki nocy', 'Na słodki smak', 'Na podczerwień małej mocy', 'Na bodźce uszkadzające tkanki'],
        public: [19,29,12,60],
        correctAnswer: 'Na bodźce uszkadzające tkanki',
    },
    {   level: 7,
        question: 'Z czego odlane są złote medale olimpijskie?',
        answers: ['Z żeliwa', 'Z brązu', 'Ze złota', 'Ze srebra'],
        public: [4,20,34,58],
        correctAnswer: 'Ze srebra',
    },
    {   level: 7,
        question: 'W 1971 r. psycholog Philip Zimbardo przeprowadził eksperyment symulujący:',
        answers: ['życie w więzieniu', 'przebywanie w kosmosie', 'życie rozbitków na wyspie', 'odbijanie zakładników'],
        public: [49,20,9,22],
        correctAnswer: 'życie w więzieniu',
    },
    {   level: 7,
        question: 'Starte ziemniaki i mąka to w zasadzie wszystko, czego potrzebujemy na tak zwane kluski:',
        answers: ['szklane', 'żelazne', 'plastikowe', 'papierowe'],
        public: [2,49,5,44],
        correctAnswer: 'żelazne',
    },
    {   level: 7,
        question: 'Z czego w głównej mierze zrobione są tak zwane monety bulionowe?',
        answers: ['z pasty rosołowej', 'ze zrolowanego mięsa', 'z miedzi', 'ze złota'],
        public: [43,2,6,49],
        correctAnswer: 'ze złota',
    },
    {   level: 7,
        question: 'Pod jaki zabór trafił Białystok w 1795 r., jeśli trafił?',
        answers: ['nie trafił pod żaden', 'pod austriacki', 'pod rosyjski', 'pod pruski'],
        public: [4,2,47,47],
        correctAnswer: 'pod pruski',
    },
    {   level: 7,
        question: 'Co miał wspólnego Jan Marcin Szancer z Krasickim, Mickiewiczem i Sienkiewiczem?',
        answers: ['był ich ulubieńcem', 'to ich wydawca', 'to ilustrator ich dzieł', 'nic'],
        public: [5,35,39,22],
        correctAnswer: 'to ilustrator ich dzieł',
    },
    {   level: 7,
        question: 'Jednostka miary reaktywności reaktora jądrowego to:',
        answers: ['euro', 'złoty', 'rubel', 'dolar'],
        public: [12,1,34,53],
        correctAnswer: 'dolar',
    },
    {   level: 7,
        question: 'Kto składa zeznanie podatkowe na druku PIT-19A?',
        answers: ['nauczyciele', 'duchowni', 'rolnicy', 'więźniowie'],
        public: [19,48,33,0],
        correctAnswer: 'duchowni',
    },
    
]
const level8 = [
    {   level: 8,
        question: 'W mózgu istota szara, tworząc korę mózgu, otacza istotę białą. W rdzeniu kręgowym jest...',
        answers: ['tak samo', 'odwrotnie', 'tylko istota szara', 'tylko istota biała'],
        public: [43,44,3,10],
        correctAnswer: 'odwrotnie',
    },
    {   level: 8,
        question: 'Najwyższy budynek świata Burdż Chalifa zwieńczony jest tym samym elementem architektonicznym, co...',
        answers: ['Krzywa Wieża w Pizie', 'PKiN', 'Opera w Sydney', 'Statua Wolności'],
        public: [4,45,11,40],
        correctAnswer: 'PKiN',
    },
    {   level: 8,
        question: 'Krzysztof Komeda skomponował muzykę do wszystkich tych filmów, ale jeden z nich wyreżyserował kto inny niż pozostałe. Który?',
        answers: ['"Nóż w wodzie"', '"Matnia"', '"Niewinni czarodzieje"', '"Dziecko Rosemary"'],
        public: [19,11,38,32],
        correctAnswer: '"Niewinni czarodzieje"',
    },
    {   level: 8,
        question: 'Muzykę skomponowaną przez Krzysztofa Pendereckiego usłyszymy we wszystkich tych filmach. Ale specjalnie stworzył ją do:',
        answers: ['"Egzorcysty"', '"Lśnienia"', '"Wyspy tajemnic"', '"Rękopisu znalezionego" '],
        public: [4,11,32,53],
        correctAnswer: '"Rękopisu znalezionego" ',
    },
    {   level: 8,
        question: 'Za 30 Judaszowych srebrników arcykapłani kupili kawałek ziemi nazywany Polem Garncarza, który przeznaczyli na:',
        answers: ['plantację oliwek', 'wybieg dla lwów', 'cmentarz dla cudzoziemców', 'targowisko'],
        public: [31,4,42,23],
        correctAnswer: 'cmentarz dla cudzoziemców',
    },
    {   level: 8,
        question: 'W oryginalnej trylogii "Gwiezdne wojny" 3-CPO ma srebrną:',
        answers: ['szczękę', 'klatkę piersiowa', 'lewą dłoń', 'prawą nogę'],
        public: [9,24,23,44],
        correctAnswer: 'prawą nogę',
    },
    {   level: 8,
        question: 'Kto jest autorem słów: "Jeśli kto przychodzi do mnie, a nie ma w nienawiści swego ojca i matki, żony i dzieci, braci i sióstr, nadto i siebie samego, nie może być moim uczniem"',
        answers: ['Jezus Chrystus', 'Allah', 'Mojżesz', 'Budda'],
        public: [49,6,31,14],
        correctAnswer: 'Jezus Chrystus',
    },
    {   level: 8,
        question: 'Szeroko rozstawione ramiączka, dekolt w kształcie litery V i niski mostek to typowe cechy biustonosza typu:',
        answers: ['bandeau', 'plunge', 'half-cup', 'full-cup'],
        public: [15,39,20,26],
        correctAnswer: 'plunge',
    },
    {   level: 8,
        question: 'Na jaką literę należy zamienić "s", żeby angielskie słowa oznaczające gąbkę, małżonka i obcokrajowca zmieniły się we francuskie słowa o tym samym znaczeniu?',
        answers: ['a', 'e', 'o', 'u'],
        public: [19,40,30,11],
        correctAnswer: 'e',
    },
    {   level: 8,
        question: 'Z czego Donatello wykonał słynnego "Dawida", pierwszą od czasów antyku wolnostojącą rzeźbę przedstawiającą nagiego mężczyznę?',
        answers: ['z czarnego marmuru', 'z lipowego drewna', 'z brązu', 'z piaskowca'],
        public: [34,11,49,6],
        correctAnswer: 'z brązu',
    },
    
]
const level9 = [
    {   level: 9,
        question: 'Petrol to barwa powstała z połączenia dwóch kolorów:',
        answers: ['niebieskiego i zielonego', 'jasno- i ciemnobrązowego', 'złotego i srebrnego', 'białego i czarnego'],
        public: [73,11,15,1],
        correctAnswer: 'niebieskiego i zielonego',
    },
    {   level: 9,
        question: ' Żydówka z obrazu Aleksandra Gierymskiego, odzyskana przez Polskę w 2011 r., zajęta jest:',
        answers: ['obieraniem pomarańczy', 'robieniem na drutach', 'liczeniem banknotów', 'rozsypywaniem okruszków'],
        public: [34,40,6,20],
        correctAnswer: 'robieniem na drutach',
    },
    {   level: 9,
        question: 'Który z wyrazów to rodzaj gitary akustycznej?',
        answers: ['odwaga', 'dobro', 'rytm', 'smutek'],
        public: [9,33,29,29],
        correctAnswer: 'dobro',
    },
    {   level: 9,
        question: 'W którym z miast znajduje się pomnik mający postać 2711 betonowych bloków ustawionych w równoległych rzędach?',
        answers: ['w Londynie', 'w Berlinie', 'w Moskwie', 'w Nowym Jorku'],
        public: [23,40,30,7],
        correctAnswer: 'w Berlinie',
    },
    {   level: 9,
        question: 'Tkanina na mundury to:',
        answers: ['adamaszek', 'gabardyna', 'satyna', 'mora'],
        public: [11,41,9,39],
        correctAnswer: 'gabardyna',
    },
    {   level: 9,
        question: 'Kto jako pierwszy skonstruował i oblatał pasażerski samolot ponaddźwiękowy?',
        answers: ['Amerykanie', 'Francuzi i Anglicy', 'Rosjanie', 'Holendrzy i Belgowie'],
        public: [36,19,36,9],
        correctAnswer: 'Rosjanie',
    },
    {   level: 9,
        question: 'Który aktor podbija muzyczną scenę depresyjnym "rock and rollem bez przebaczenia"?',
        answers: ['Marian Dziędziel', 'Arkadiusz Jakubik', 'Bartłomiej Topa', 'Robert Więckiewicz'],
        public: [9,64,7,20],
        correctAnswer: 'Arkadiusz Jakubik',
    },
    
]
const level10 = [
    {   level: 10,
        question: 'Z którym z kwiatów najczęściej portretowano Mikołaja Kopernika?',
        answers: ['z lilią', 'z szarotką', 'z mniszkiem lekarskim', 'z konwalią'],
        public: [9,28,27,36],
        correctAnswer: 'z konwalią',
    },
    {   level: 10,
        question: 'Pierwszego przeszczepu serca dokonano u człowieka w XX w. w latach:',
        answers: ['trzydziestych', 'sześćdziesiątych', 'osiemdziesiątych', 'dziewięćdziesiątych'],
        public: [9,31,30,30],
        correctAnswer: 'sześćdziesiątych',
    },
    {   level: 10,
        question: 'Annasz to żydowski arcykapłan z czasów Chrystusa. Kim był dla niego Kajfasz?',
        answers: ['zięciem', 'teściem', 'dziadkiem', 'pradziadkiem'],
        public: [15,34,29,22],
        correctAnswer: 'teściem',
    },
    {   level: 10,
        question: 'Zbyszek wczoraj ukończył 15 lat, ale już zna się na prawie i wie, że mógłby być sądzony na podstawie Kodeksu karnego za:',
        answers: ['obnażanie się w parku', 'łapownictwo wyborcze', 'szpiegostwo', 'wzięcie zakładnika'],
        public: [19,4,38,39],
        correctAnswer: 'wzięcie zakładnika',
    },
    {   level: 10,
        question: 'Taksówkarz ma pasażerów, lekarz pacjentów, spowiednik penitentów, sprzedawca klientów. A prawnik?',
        answers: ['mandatów', 'mandatariuszy', 'mandatorów', 'notariuszy'],
        public: [42,15,39,4],
        correctAnswer: 'mandatów',
    },
    {   level: 10,
        question: 'Albert Einstein był obdżektorem. Kto jeszcze?',
        answers: ['Winston Churchill', 'Bronisław Cieślak', 'Maciej Maleńczuk', 'Andrzej Gajos'],
        public: [9,19,43,29],
        correctAnswer: 'Maciej Maleńczuk',
    },
    
]
const level11 = [
    {   level: 11,
        question: 'Jedlina, świerczyna i podobne to:',
        answers: ['ubierasz', 'stroisz', 'ozdabiasz', 'robisz się na bóstwo'],
        public: [31,37,30,2],
        correctAnswer: 'stroisz',
    },
    {   level: 11,
        question: '„Kto prosił ruskie” - to początek godzącego w sojusze popularnego żartu z baru mlecznego. Jak brzmi odpowiedź?',
        answers: ['„Leniwe prosiły”', '„Nikt. Same przyszły”', '„Komorowski z Tuskiem”', '„Balcerowicz z Buzkiem”'],
        public: [41,50,4,5],
        correctAnswer: '„Nikt. Same przyszły”',
    },
    {   level: 11,
        question: 'Manat karaibski, tak jak afrykański, z kończyn ma tylko przednie. A manat azerbejdżański, tak jak turkmeński:',
        answers: ['zastąpił rubla', 'ma i przednie, i tylne', 'zakrywa całe ciało', 'jest samotnikiem'],
        public: [61,19,11,9],
        correctAnswer: 'zastąpił rubla',
    },
    {   level: 11,
        question: 'Galinstan, stop galu, indu i cyny, zastąpił:',
        answers: ['złoto w obrączkach', 'rtęć w termometrach', 'miedzionikiel w złotówkach', 'amalgamat w plombach'],
        public: [9,49,11,31],
        correctAnswer: 'rtęć w termometrach',
    },
    {   level: 11,
        question: '„Mona Lisa” z Luwru to obraz namalowany:',
        answers: ['na tkaninie', 'na metalu', 'na drewnie', 'na murze'],
        public: [46,1,49,4],
        correctAnswer: 'na drewnie',
    },
    {   level: 11,
        question: 'U Mickiewicza: „Obszar gnuśności zalany odmętem”...',
        answers: ['To Polska!', 'To Rosja!', 'To Austro-Węgry!', 'To Ziemia!'],
        public: [7,16,11,66],
        correctAnswer: 'To Ziemia!',
    },
    
]
const level12 = [
    {   level: 12,
        question: 'Który utwór Juliusza Słowackiego napisany jest prozą?',
        answers: ['„Godzina myśli"', 'W Szwajcarii"', '„Arab"', '„Anhelli"'],
        public: [11,34,19,36],
        correctAnswer: '„Anhelli"',
    },
    {   level: 12,
        question: 'Płetwą grzbietową nie pruje wody:',
        answers: ['kosogon', 'wal grenlandzki', 'orka', 'długoszpar'],
        public: [10,37,19,34],
        correctAnswer: 'wal grenlandzki',
    },
    {   level: 12,
        question: 'Kto był nadwornym malarzem króla Filipa IV Habsburga?',
        answers: ['Jan van Eyck', 'Diego Velázquez', 'Marcello Bacciarelli', 'Jacques-Louis David'],
        public: [30,37,29,4],
        correctAnswer: 'Diego Velázquez',
    },
    {   level: 12,
        question: 'Mowa w obronie poety Archiasza przeszła do historii jako jeden z najświetniejszych popisów retorycznych:',
        answers: ['Demostenesa', 'Cycerona', 'Izokratesa', 'Kwintyliana'],
        public: [19,41,39,1],
        correctAnswer: 'Cycerona',
    },
    {   level: 12,
        question: 'Kto jest mistrzem tego samego oręża, w jakim specjalizowała się mitologiczna Artemida?',
        answers: ['Legolas', 'Zorro', 'Don Kichot', 'Longinus Podbipięta'],
        public: [40,5,24,31],
        correctAnswer: 'Legolas',
    },
    {   level: 12,
        question: 'Rybą nie jest:',
        answers: ['kraska', 'krasnopiórka', 'świnka', 'rozpiór'],
        public: [39,15,29,17],
        correctAnswer: 'kraska',
    },
    {   level: 12,
        question: 'Komiksowym "dzieckiem" rysownika Boba Kane`a jest:',
        answers: ['Spider-Man', 'Batman', 'Superman', 'Captain America'],
        public: [14,40,35,11],
        correctAnswer: 'Batman',
    },
    {   level: 12,
        question: 'Skąd pochodzi Conan Barbarzyńca?',
        answers: ['z Rivii', 'z Oz', 'z Mordoru', 'z Cimmerii'],
        public: [29,9,26,36],
        correctAnswer: 'z Cimmerii',
    },
    
]
const extraLevel = [
    {   level: 13,
        question: '26 września 1908 r. pod Bezdanami na Litwie czterech przyszłych polskich premierów:',
        answers: ['Wystąpiło na forum ONZ', 'Zagrało w orkiestrze', 'Obrabowało pociąg pocztowy', 'Znalazło wybranki'],
        public: [34,30,34,2],
        correctAnswer: 'Obrabowało pociąg pocztowy',
    },
    {   level: 13,
        question: 'Bantustan, to wydzielony obszar dla grup czarnoskórej ludności powstały w latach 60. na terenie:',
        answers: ['Somalii', 'Etiopii', 'RPA', 'Konga'],
        public: [31,31,36,2],
        correctAnswer: 'RPA',
    },
    {   level: 13,
        question: 'Godło którego państwa zaprojektował jeden z czołowych przedstawicieli secesji Alfons Mucha?',
        answers: ['Jugosławii', 'Czechosłowacji', 'ZSRR', 'NRD'],
        public: [31,37,30,2],
        correctAnswer: 'Czechosłowacji',
    },
    {   level: 13,
        question: '30 X 1918 r. proklamowano utworzenie jednego z pierwszych skrawków wolnej Polski z prezydentem Stefanem Żeromskim. Chodzi o:',
        answers: ['Kraj Pucki', 'Rzeczpospolitą Zakopiańską', 'Królestwo Kurpiowskie', 'Polskę Kaszubską'],
        public: [31,37,30,2],
        correctAnswer: 'Rzeczpospolitą Zakopiańską',
    },
    {   level: 13,
        question: 'Co jest podstawą diety osich czerwi?',
        answers: ['Pyłek kwiatów', 'Owady', 'Rosa miodowa', 'Spadź'],
        public: [31,37,30,2],
        correctAnswer: 'Owady',
    },
    {   level: 13,
        question: 'Od czego pochodzi nazwa zespołu Kwiat Jabłoni, założonego w 2018 r. przez Katarzynę i Jacka Sienkiewiczów?',
        answers: ['Od snobistycznego klubu', 'Od kiczowatego obrazu', 'Od luksusowego auta', 'Od taniego wina'],
        public: [31,30,1,38],
        correctAnswer: 'Od taniego wina',
    },
    
]
export {level1,level2,level3,level4,level5,level6,level7,level8,level9,level10,level11,level12,extraLevel};