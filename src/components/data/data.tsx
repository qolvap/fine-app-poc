export interface Fine {
    guilty: string;
    attachment: number;
    number: string;
    description: string;
    fine: number;
    group: string | string[];
}

export const data = [

    {
       guilty: "kierowcy",
       attachment: 1,
       number: "1.1",
       description: "Nieokazanie wypisu z zezwolenia na wykonywanie zawodu przewoźnika drogowego",
       fine: 200,
       group: "brak"
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.2",
        description: "Nieokazanie wypisu z licencji",
        fine: 200,
        group: ["10.2 BPN", "11.2 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.3",
        description: "Nieokazanie świadectwa kierowcy",
        fine: 150,
        group: ["10.4 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4",
        description: "Nieokazanie zapisów odręcznych i wydruków za dni podlegające kontroli, karty kierowcy, jeżeli kierowca posiada taką kartę",
        fine: 200,
        group: ["2.22 BPN", "2.23 BPN", "2.24 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4a",
        description: "Nieokazanie zapisów odręcznych i wydruków za dni podlegające kontroli, karty kierowcy, jeżeli kierowca posiada taką kartę",
        fine: 500,
        group: ["2.21 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4b",
        description: "Nieokazanie od 2 do 15 wykresówek za dni podlegające kontroli",
        fine: 1000,
        group: ["2.21 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4c",
        description: "Nieokazanie powyżej 15 wykresówek za dni podlegające kontroli",
        fine: 1500,
        group: ["2.21 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.5",
        description: "Nieokazanie zezwolenia na wykonywanie regularnych przewozów osób w międzynarodowym transporcie drogowym lub zezwolenia na wykonywanie regularnych specjalnych przewozów osób w międzynarodowym transporcie drogowym lub wypisów z tych zezwoleń",
        fine: 150,
        group: ["11.4 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.6",
        description: "Nieokazanie dokumentów wymaganych przy przewozie zwierząt określonych w przepisach rozporządzenia Rady (WE) nr 1/20053)",
        fine: 150,
        group: ["12.5 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.7",
        description: "Nieokazanie innego wymaganego w związku z wykonywanym przewozem drogowym dokumentu, o którym mowa w art. 87 ustawy o transporcie drogowym1)",
        fine: 150,
        group: ["12.5 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "2",
        description: "Nieokazanie danych z karty kierowcy",
        fine: 200,
        group: ["2.22 BPN"]
           },
           {
        guilty: "kierowcy",
        attachment: 1,
        number: "2a",
        description: "Wykonywanie przewozu drogowego rzeczy bez okazania numeru referencyjnego, dokumentu zastępującego zgłoszenie lub potwierdzenia przyjęcia dokumentu zastępującego zgłoszenie, w przypadku, o którym mowa w art. 28b ustawy o transporcie drogowym. UWAGA pkt 2a w załączniku nr 1 wejdzie w życie z dn. 1.01.2025 r. (Dz. U. z 2023 r. poz. 1523). Kara może sięgać: 1500> zł",
        fine: 1500,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "3",
        description: "Wykonywanie przewozu drogowego bez okazania dokumentu potwierdzającego uzyskanie kwalifikacji wstępnej lub ukończenie szkolenia okresowego (wymaganego wpisu do prawa jazdy, karty kwalifikacji kierowcy)",
        fine: 150,
        group: ["7.2PN"]
           },
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "4",
        description: "Brak szkolenia wymaganego w związku z wykonywaniem danego rodzaju przewozu drogowego, innego niż w lp. 3",
        fine: 800,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.1 1)",
        description: "Prowadzenie pojazdu z naruszeniem przepisów o czasie prowadzenia pojazdu, obowiązujących przerwach i odpoczynku o czas do 1 godziny",
        fine: 50,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.1 2)",
        description: "Prowadzenie pojazdu z naruszeniem przepisów o czasie prowadzenia pojazdu, obowiązujących przerwach i odpoczynku za każdą następną rozpoczętą godzinę",
        fine: 100,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.2 1)",
        description: "Przekroczenie maksymalnego czasu prowadzenia pojazdu bez przerwy o czas powyżej 15 minut do 30 minut",
        fine: 50,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.2 2)",
        description: "Przekroczenie maksymalnego czasu prowadzenia pojazdu bez przerwy za każde następne rozpoczęte 30 minut",
        fine: 100,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.4 1)",
        description: "Skrócenie dziennego okresu odpoczynku o czas do 1 godziny ",
        fine: 50,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.4 2)",
        description: "Skrócenie dziennego okresu odpoczynku za każdą następną rozpoczętą godzinę",
        fine: 100,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.5",
        description: "Przekroczenie tygodniowego czasu prowadzenia pojazdu o czas powyżej 30 minut do 2 godzin oraz za każdą następną rozpoczętą godzinę",
        fine: 50,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.6 1)",
        description: "Przekroczenie tygodniowego wymiaru czasu pracy, o którym mowa w art. 26c ust. 1 i 2 ustawy o czasie pracy kierowców4), przez osoby niezatrudnione przez przedsiębiorcę, lecz osobiście wykonujące na jego rzecz przewozy drogowe do mniej niż 2 godzin",
        fine: 50,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.6 2)",
        description: "Przekroczenie tygodniowego wymiaru czasu pracy, o którym mowa w art. 26c ust. 1 i 2 ustawy o czasie pracy kierowców4), przez osoby niezatrudnione przez przedsiębiorcę, lecz osobiście wykonujące na jego rzecz przewozy drogowe od 2 godzin do mniej niż 10 godzin",
        fine: 300,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.6 3)",
        description: "Przekroczenie tygodniowego wymiaru czasu pracy, o którym mowa w art. 26c ust. 1 i 2 ustawy o czasie pracy kierowców4), przez osoby niezatrudnione przez przedsiębiorcę, lecz osobiście wykonujące na jego rzecz przewozy drogowe od 10 godzin",
        fine: 500,
        group: ["3.2BPN", "3.4BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "5.7",
        description: "Wykorzystywanie w pojeździe lub w miejscu zakwaterowania niewyposażonym w odpowiednią infrastrukturę noclegową i sanitarną regularnego tygodniowego okresu odpoczynku lub dowolnego tygodniowego okresu odpoczynku trwającego ponad 45 godzin wykorzystywanego jako rekompensata za skrócone tygodniowe okresy odpoczynku",
        fine: 50,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "6.1",
        description: "Naruszenie przepisów o wykonywaniu przewozu drogowego osób. Pobieranie należności za przewóz osoby pojazdem wykonującym regularny przewóz niezgodnie z cennikiem opłat podanym do publicznej wiadomości",
        fine: 1000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "6.2",
        description: "Naruszenie przepisów o wykonywaniu przewozu drogowego osób. Niewydanie uprawnionemu pasażerowi przed rozpoczęciem przewozu wymaganego potwierdzenia wniesienia opłaty za przejazd, uwzględniającego ustawową zniżkę",
        fine: 1000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "6.3",
        description: "Naruszenie przepisów o wykonywaniu przewozu drogowego osób. Niewydanie pasażerowi przed rozpoczęciem przewozu wymaganego potwierdzenia wniesienia opłaty za przejazd",
        fine: 1000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.1",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Nierejestrowanie za pomocą tachografu na wykresówce lub karcie kierowcy wskazań w zakresie prędkości pojazdu, aktywności kierowcy lub przebytej drogi",
        fine: 2000,
        group: ["2.14BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.2",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Posiadanie przez kierowcę co najmniej dwóch własnych, ważnych kart kierowcy lub posługiwanie się nimi",
        fine: 2000,
        group: ["2.3BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.3",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Niepoprawne operowanie przełącznikiem tachografu umożliwiającym zmianę rodzaju aktywności kierowcy – za każdy dzień. Kara może sięgać: 100 zł nie więcej niż 1000 zł",
        fine: 100,
        group: ["2.19BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.4",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Wykonywanie przez kierowcę przewozu drogowego z niedziałającym lub niewłaściwie działającym tachografem po upływie okresu dopuszczalnego w art. 37 ust. 1 rozporządzenia (UE) nr 165/2014 5)",
        fine: 1000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.5",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Wykonywanie przez kierowcę przewozu drogowego bez ważnej karty kierowcy lub z kartą uszkodzoną po upływie okresu dopuszczalnego w art. 29 ust. 5 rozporządzenia (UE) nr 165/2014 5)",
        fine: 500,
          group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.6",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Wykonywanie przewozu drogowego pojazdem wyposażonym w tachograf, który został odłączony",
        fine: 2000,
        group: ["2.8BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.7",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Nieuzasadnione użycie kilku wykresówek w ciągu tego samego 24-godzinnego okresu – za każdy dzień",
        fine: 100,
        group: ["2.13BPN"]
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.8",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Używanie wykresówki powyżej okresu, na jaki jest przeznaczona, wraz z utratą danych – za każdą wykresówkę. Kara może sięgać: 100 zł nie więcej niż 1000 zł",
        fine: 100,
        group: ["2.15BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.9",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Zastosowanie wykresówki nieposiadającej świadectwa homologacji typu lub nieprzeznaczonej dla danego typu tachografu – za każdą wykresówkę",
        fine: 200,
        group: ["2.18PN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.10",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Okazanie podczas kontroli brudnej lub uszkodzonej wykresówki lub karty kierowcy, z nieczytelnymi danymi – za kartę lub każdą wykresówkę",
        fine: 200,
        group: ["2.16BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.11",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Nieumieszczenie na wykresówce lub wydruku wymaganych wpisów lub umieszczenie na wykresówce lub wydruku nieczytelnych wpisów ręcznych – za każdą wykresówkę lub za każdy wydruk. Kara może sięgać: 50 za każdy brak wpisu nie więcej niż 200 za jedną wykresówkę lub jeden wydruk",
        fine: 50,
        group: ["2.17BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.12",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Okazanie podczas kontroli wykresówki, wydruku z tachografu lub karty kierowcy, które nie zawierają wprowadzonych ręcznie bądź automatycznie wszystkich wymaganych danych dotyczących okresów aktywności kierowcy lub symbolu państwa miejsca rozpoczęcia lub zakończenia dziennego okresu pracy lub symbolu państwa, którego granicę kierowca przekroczył – za każdy dzień podlegający kontroli.",
        fine: 100,
        group: ["2.23BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.13",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Jednoczesne używanie kilku wykresówek.",
        fine: 2000,
        group: ["2.13BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.14",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Niezgodność oznaczenia czasowego na wykresówce z urzędowym czasem kraju rejestracji pojazdu – za każdą wykresówkę. Kara może sięgać: 100 zł nie więcej niż 1000 zł",
        fine: 100,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.15",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Wykonywanie przewozu drogowego przez kierowcę nieposiadającego wymaganych zapisów odręcznych i wydruków z tachografu w przypadku uszkodzenia karty kierowcy, jej niesprawności lub nieposiadania – za każdy brakujący wydruk",
        fine: 200,
        group: ["2.26BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.16",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Niewłaściwa obsługa lub odłączenie homologowanego i sprawnego technicznie tachografu, skutkujące nierejestrowaniem na wykresówce lub karcie kierowcy aktywności kierowcy, prędkości pojazdu lub przebytej drogi",
        fine: 1500,
        group: ["2.8BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.17",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Używanie cudzej karty kierowcy",
        fine: 2000,
        group: ["2.5NN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.18",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Używanie cudzej wykresówki",
        fine: 2000,
        group: ["2.13BPN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.19",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Posługiwanie się przez kierowcę kartą kierowcy, która została wydana na podstawie fałszywych oświadczeń lub podrobionych lub przerobionych dokumentów",
        fine: 500,
        group: ["2.6NN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "7.20",
        description: "Naruszenie przepisów o używaniu tachografów, wykresówek lub kart kierowców. Wykonywanie przewozu drogowego w załodze kilkuosobowej z włożeniem wykresówki lub karty kierowcy lub wykresówek lub kart kierowcy w nieodpowiednie czytniki tachografu",
        fine: 200,
        group: ["2.18PN"]
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "8.1",
        description: "Wykonywanie transportu drogowego z naruszeniem art. 18 ust. 4a ustawy o transporcie drogowym",
        fine: 2000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "8.2",
        description: "Wykonywanie transportu drogowego z naruszeniem art. 18 ust. 4b ustawy o transporcie drogowym",
        fine: 2000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "8.3",
        description: "Wykonywanie transportu drogowego z naruszeniem art. 18 ust. 5 ustawy o transporcie drogowym",
        fine: 2000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "8.4",
        description: "Wykonywanie transportu drogowego przez przedsiębiorcę osobiście wykonującego przewozy lub kierowcę, którzy nie spełniają wymagań określonych w art. 6 ust. 1 pkt 2 ustawy o transporcie drogowym",
        fine: 2000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "8.5",
        description: "Pobieranie należności za przewóz osób taksówką niezgodnie z ustalonymi przez radę gminy, a w przypadku miasta stołecznego Warszawy – Radę Warszawy, cenami lub stawkami taryfowymi, o których mowa w art. 11b ustawy o transporcie drogowym",
        fine: 2000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "8.6",
        description: "Wykonywanie transportu drogowego na podstawie zlecenia przekazanego przez podmiot wykonujący działalność gospodarczą w zakresie pośrednictwa przy przewozie osób, nieposiadający licencji, o której mowa w art. 5b ust. 2 pkt 2 ustawy o transporcie drogowym",
        fine: 2000,
        group: "brak"
           },    
        {
        guilty: "kierowcy",
             attachment: 1,
        number: "8.7",
        description: "Nieokazanie i nieudostępnienie do kontroli urządzenia, na którym zainstalowana jest aplikacja mobilna, o której mowa w art. 13b ust. 1 ustawy o transporcie drogowym", 
        fine: 2000,
        group: "brak"
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.1",
        description: "Naruszenie przepisów o przewozie zwierząt. Wykonywanie przewozu zwierząt przez kierowcę, który nie posiada kwalifikacji do transportu zwierząt potwierdzonych przez właściwy organ", 
        fine: 1000,
        group: "brak"
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.2",
        description: "Naruszenie przepisów o przewozie zwierząt. Niezapewnienie przez kierowcę transportowanym zwierzętom ogólnych warunków transportu zwierząt, o których mowa w art. 3 rozporządzenia Rady (WE) nr 1/2005, w sytuacjach gdy podmiot wykonujący przewóz jest obowiązany jedynie do stosowania tego art. 3", 
        fine: 500,
        group: "brak"
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.3",
        description: `Naruszenie przepisów o przewozie zwierząt. Niezapewnienie transportowanym zwierzętom warunków, o których mowa w załączniku I do rozporządzenia Rady (WE) nr 1/20053) w zakresie przestrzegania warunków przewozu zwierząt, w tym:
        1) stosowanie czynów zabronionych wobec zwierząt
        2) nieprzestrzeganie zakazów transportowych zwierząt uzależnione od wagi, wieku i gatunku oraz zdolności zwierząt do transportu
        3) niestosowanie rozdzielania zwierząt
        4) niezapewnienie wymaganej dla poszczególnych gatunków zwierząt wielkości powierzchni ładunkowej lub gęstości załadunku
        5) niewłaściwe wykonywanie obowiązków związanych z obsługą zwierząt, w tym niewłaściwe wykonywanie postojów i odpoczynków dla zwierząt, pojenie, karmienie, dojenie. 
        Kara może sięgać: 500 zł za każde naruszenie nie więcej niż 1000 zł`, 
        fine: 500,
        group: ["12.1BPN", "12.4BPN"]
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.4 1)",
        description: "Naruszenie przepisów o przewozie zwierząt. Wykonywanie przewozu żywych zwierząt z naruszeniem maksymalnego czasu przewozu dla danego gatunku zwierząt do 2 godzin", 
        fine: 100,
        group: "brak"
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.4 2)",
        description: "Naruszenie przepisów o przewozie zwierząt. Wykonywanie przewozu żywych zwierząt z naruszeniem maksymalnego czasu przewozu dla danego gatunku zwierząt powyżej 2 godzin – za każdą rozpoczętą godzinę", 
        fine: 200,
        group: "brak"
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.5",
        description: "Naruszenie przepisów o przewozie zwierząt. Niepowiadomienie lekarza weterynarii o ujawnionej podczas przewozu chorobie, zranieniu albo padnięciu transportowanego zwierzęcia", 
        fine: 500,
        group: "brak"
        },    
        {
        guilty: "kierowcy",
        attachment: 1,
        number: "9.6",
        description: "Naruszenie przepisów o przewozie zwierząt. Wykonywanie przewozu bez przeprowadzenia czyszczenia i odkażania pojazdu po każdym przewozie zwierząt lub produktu mogącego mieć wpływ na zdrowie zwierząt i nieokazanie dokumentacji potwierdzającej wykonanie tych czynności", 
        fine: 500,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.1",
        description: "Wykonywanie transportu drogowego bez wymaganego zezwolenia na wykonywanie zawodu przewoźnika drogowego lub bez wymaganej licencji innej niż licencja wspólnotowa", 
        fine: 12000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.1a",
        description: "Wykonywanie transportu drogowego bez wymaganego zezwolenia na wykonywanie zawodu przewoźnika drogowego lub bez wymaganej licencji innej niż licencja wspólnotowa", 
        fine: 12000,
        group: ["10.1NN", "11.1NN"]
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.2",
        description: "Posiadanie wypisów z zezwolenia na wykonywanie zawodu przewoźnika drogowego i wypisów z licencji wspólnotowej w łącznej liczbie przekraczającej liczbę pojazdów, dla których został udokumentowany wymóg zdolności finansowej, zgodnie z art. 7 rozporządzenia (WE) nr 1071/2009 – za każdy kolejny ponadliczbowy wypis", 
        fine: 500,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.3",
        description: "Wykonywanie transportu drogowego taksówką pojazdem niewpisanym do licencji, z wyłączeniem sytuacji, gdy wykonujący transport drogowy taksówką wystąpił o nową licencję lub o zmianę licencji przed wykonaniem przewozu", 
        fine: 2000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.4",
        description: "Wykonywanie przewozu na potrzeby własne bez wymaganego zaświadczenia", 
        fine: 1000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.5",
        description: "Niezgłoszenie w formie pisemnej, w postaci papierowej lub elektronicznej, organowi, który udzielił zezwolenia na wykonywanie zawodu przewoźnika drogowego lub licencji, zmiany danych, o których mowa odpowiednio w art. 7a i art. 8 ustawy o transporcie drogowym1), w wymaganym terminie – za każdą znianę", 
        fine: 800,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.6",
        description: "Niepoddanie się lub uniemożliwienie przeprowadzenia kontroli w całości lub w części", 
        fine: 12000,
        group: ["2.20BPN"]
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.7",
        description: "Nieprzechowywanie lub przechowywanie niekompletnych dokumentów i innych nośników informacji, o których mowa w art. 16a i art. 33a ustawy o transporcie drogowym, przez podmioty wymienione w tych przepisach", 
        fine: 10000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.7a",
        description: "Niedokumentowanie, nieprzechowywanie w lokalu przedsiębiorstwa lub nieokazanie do kontroli dokumentów potwierdzających spełnienie obowiązku, o którym mowa w art. 8 ust. 8a rozporządzenia (WE) nr 561/2006 – za każdego kierowcę", 
        fine: 150,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.8",
        description: "Uzależnienie wynagrodzenia kierowcy od liczby przejechanych kilo-metrów, szybkości dostawy lub ilości przewiezionego ładunku, jeżeli ich stosowanie mogłoby zagrażać bezpieczeństwu na drogach lub zachęcać do naruszenia przepisów rozporządzenia (WE) nr 561/2006 – za każdego kierowcę",
        fine: 8000,
        group: ["1.32BPN"]
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.9",
        description: "Niezgłoszenie w formie pisemnej, w postaci papierowej lub elektronicznej, organowi, który wydał zaświadczenie na przewozy drogowe na potrzeby własne, zmiany danych, o których mowa w art. 8 ustawy o transporcie drogowym, w wymaganym terminie – za każdą zmianę", 
        fine: 800,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.10",
        description: "Umieszczanie w liście przewozowym lub innych dokumentach związanych z przewożonym ładunkiem danych lub informacji niezgodnych ze stanem faktycznym", 
        fine: 3000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.11",
        description: "Wykonywanie przewozu drogowego w czasie obowiązywania ograniczeń oraz zakazów ruchu niektórych rodzajów pojazdów na drogach", 
        fine: 2000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.12",
        description: "Niewyposażenie kierowcy w dokumenty, o których mowa w art. 87 ustawy o transporcie drogowym – za każdy dokument", 
        fine: 500,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.13",
        description: "Niewskazanie, na żądanie właściwego organu, zarządzającego transportem, któremu powierzono kierowanie operacjami transportowymi, poddanymi kontroli", 
        fine: 5000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.14",
        description: "Zlecenie przewozu drogowego podmiotowi nieposiadającemu uprawnienia do wykonywania przewozu drogowego, w szczególności uprawnień wymaganych odpowiednio do rodzaju wykonywanego przewozu ", 
        fine: 10000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.15",
        description: "Wykonywanie przewozu drogowego rzeczy lub osób bez obowiązkowej kwalifikacji wstępnej lub obowiązkowego szkolenia okresowego kierowcy", 
        fine: 1500,
        group: ["7.1BPN"]
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.16",
        description: "Wykonywanie przewozu drogowego pojazdem, o którym mowa w art. 16c", 
        fine: 5000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.17",
        description: "Naruszenie wymogu dotyczącego posiadania dokumentów, o których mowa w art. 5 ust. 1 lit. a rozporządzenia (WE) nr 1071/2009, z zastrzeżeniem art. 7b ust. 4 ustawy o transporcie drogowym", 
        fine: 3000,
        group: "brak"
        },    
        {
        guilty: "przedsiębiorcy",
        attachment: 3,
        number: "1.18",
        description: "Naruszenie wymogu dotyczącego posiadania siedziby w zakresie organizacji przewozów flotą pojazdów w sposób, o którym mowa w art. 5 ust. 1 lit. b rozporządzenia (WE) nr 1071/2009", 
        fine: 2000,
        group: "brak"
        },          
        {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.1",
         description: "Wykonywanie przewozu regularnego lub przewozu regularnego specjalnego bez wymaganego zezwolenia", 
         fine: 8000,
         group: ["11.3BPN"]
         },    
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.1",
         description: "Wykonywanie przewozu regularnego lub przewozu regularnego specjalnego bez wymaganego zaświadczenia na wykonywanie publicznego transportu zbiorowego", 
         fine: 8000,
         group: "brak"
         },
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.2",
         description: "Wykonywanie przewozu regularnego lub regularnego specjalnego z naruszeniem warunków określonych w zezwoleniu albo zaświadczeniu na wykonywanie publicznego transportu zbiorowego dotyczących dni", 
         fine: 2000,
         group: "brak"
         },
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.2",
         description: "Wykonywanie przewozu regularnego lub regularnego specjalnego z naruszeniem warunków określonych w zezwoleniu albo zaświadczeniu na wykonywanie publicznego transportu zbiorowego dotyczących godzin odjazdu i przyjazdu", 
         fine: 500,
         group: "brak"
         },   
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.2",
         description: "Wykonywanie przewozu regularnego lub regularnego specjalnego z naruszeniem warunków określonych w zezwoleniu albo zaświadczeniu na wykonywanie publicznego transportu zbiorowego dotyczących ustalonej trasy przejazdu lub wyznaczonych przystanków", 
         fine: 3000,
         group: ["11.5PN"]
         },   
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.3",
         description: "Wykonywanie przewozu regularnego lub przewozu regularnego specjalnego bez obowiązującego rozkładu jazdy", 
         fine: 2000,
         group: "brak"
         },   
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.4",
         description: "Wykonywanie przewozu regularnego pojazdem innym niż autobus", 
         fine: 5000,
         group: "brak"
         },   
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.5",
         description: "Wykonywanie przewozu autobusem, który nie odpowiada wymaganym warunkom technicznym w zakresie prawidłowego oznakowania lub wyposażenia pojazdu, przewidzianym dla danego rodzaju wykonywanego przewozu drogowego", 
         fine: 500,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.6",
         description: "Pobieranie należności za przewóz osoby pojazdem wykonującym przewóz regularny niezgodnie z cennikiem opłat podanym do publicznej wiadomości", 
         fine: 2000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.7",
         description: "Niewydanie pasażerowi przed rozpoczęciem przewozu wymaganego potwierdzenia wniesienia opłaty za przejazd, z wyłączeniem taksówki", 
         fine: 2000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.8",
         description: "Niewydanie uprawnionemu pasażerowi przed rozpoczęciem przewozu wymaganego potwierdzenia wniesienia opłaty za przejazd, uwzględniającego ustawową zniżkę", 
         fine: 1000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.9",
         description: "Niezgłoszenie w formie pisemnej, w postaci papierowej lub elektronicznej, organowi, który udzielił zezwolenia, zmiany danych, o których mowa w art. 22b ust. 1 ustawy o transporcie drogowym1), w wymaganym terminie", 
         fine: 800,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.10",
         description: "Wykonywanie przewozów okazjonalnych w krajowym transporcie drogowym pojazdem przeznaczonym konstrukcyjnie do przewozu nie więcej niż 9 osób łącznie z kierowcą z naruszeniem zakazu lub zakazów, o których mowa w art. 18 ust. 5 ustawy o transporcie drogowym", 
         fine: 8000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.11",
         description: "Wykonywanie przewozu okazjonalnego pojazdem niespełniającym kryterium konstrukcyjnego określonego w art. 18 ust. 4a ustawy o transporcie drogowym, z zastrzeżeniem przewozów, o których mowa w art. 18 ust. 4b tej ustawy", 
         fine: 8000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.12",
         description: "Brak harmonogramu okresów pracy kierowcy obejmującego wszystkie okresy aktywności kierowcy – za każdego kierowcę", 
         fine: 2000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.13",
         description: "Wykonywanie międzynarodowego przewozu drogowego osób bez posiadania w pojeździe ważnego wymaganego formularza jazdy", 
         fine: 6000,
         group: ["11.6PN"]
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.14",
         description: "Okazanie przez kierowcę formularza jazdy podczas wykonywania międzynarodowego przewozu drogowego osób, który nie zawiera wpisanych wszystkich kierowców", 
         fine: 4000,
         group: ["11.6PN"]
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.14",
         description: "Okazanie przez kierowcę formularza jazdy podczas wykonywania międzynarodowego przewozu drogowego osób, który nie zawiera prawidłowej liczby przewożonych pasażerów", 
         fine: 2000,
         group: ["11.6PN"]
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.15",
         description: "Wykonywanie przewozu kabotażowego osób na terytorium Rzeczypospolitej Polskiej bez wymaganego zezwolenia", 
         fine: 12000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.16",
         description: "Wykonywanie przewozu kabotażowego osób niezgodnie z warunkami określonymi dla tego przewozu", 
         fine: 12000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.17",
         description: "Prowadzenie pośrednictwa przy przewozie osób z naruszeniem art. 27b ust. 1 pkt 1 ustawy o transporcie drogowym", 
         fine: 100000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.18",
         description: "Prowadzenie pośrednictwa przy przewozie osób z naruszeniem art. 27b ust. 1 pkt 2 lub 3 ustawy o transporcie drogowym", 
         fine: 500000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.19",
         description: "Nieprzekazanie w wymaganym terminie uprawnionym organom co najmniej jednej z informacji, o których mowa w art. 27b ust. 1 pkt 4 ustawy o transporcie drogowym, lub wyniku weryfikacji, o której mowa w tym przepisie", 
         fine: 200000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.20",
         description: "Przekazywanie zleceń przez przedsiębiorcę prowadzącego pośrednictwo przy przewozie osób przewozu osób podmiotowi, który nie posiada odpowiedniej licencji, o której mowa w art. 5b ust. 1 ustawy o transporcie drogowym, lub z naruszeniem art. 5e tej ustawy", 
         fine: 500000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.21",
         description: "Prowadzenie pośrednictwa przy przewozie osób bez wymaganej licencji, o której mowa w art. 5b ust. 2 pkt 2 ustawy o transporcie drogowym", 
         fine: 500000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.22",
         description: "Niezgłoszenie w wymaganym terminie w formie pisemnej, w postaci papierowej lub w postaci elektronicznej, przedsiębiorcy prowadzącemu pośrednictwo przy przewozie osób informacji, o której mowa w art. 27b ust. 6 ustawy o transporcie drogowym", 
         fine: 5000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.23",
         description: "Rozliczanie opłaty za przewóz osób na podstawie aplikacji mobilnej, o której mowa w art. 13b ust. 1 ustawy o transporcie drogowym, niespełniającej wymagań określonych w przepisach wydanych na podstawie art. 13b ust. 4 oraz wymagań dla kas rejestrujących mających postać oprogramowania", 
         fine: 12000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.24",
         description: "Ponowne stwierdzenie prowadzenia pośrednictwa przy przewozie osób bez wymaganej licencji, o której mowa w art. 5b ust. 2 pkt 2 ustawy o transporcie drogowym", 
         fine: 1000000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.25",
         description: "Ponowne stwierdzenie wykonywania transportu drogowego bez wymaganej licencji, o której mowa w art. 5b ust. 1 ustawy o transporcie drogowym", 
         fine: 120000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.26",
         description: "Przekazywanie zleceń przez przedsiębiorcę prowadzącego pośrednictwo przy przewozie osób podmiotowi, który wykonuje przewóz pojazdem bez wypisu z licencji, o której mowa w art. 5b ust. 1 ustawy o transporcie drogowym", 
         fine: 100000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.27",
         description: "Ponowne przekazywanie zleceń przez przedsiębiorcę prowadzącego pośrednictwo przy przewozie osób podmiotowi, który wykonuje przewóz pojazdem bez wypisu z licencji, o której mowa w art. 5b ust. 1 ustawy o transporcie drogowym", 
         fine: 1000000,
         group: "brak"
         }, 
         {
         guilty: "przedsiębiorcy",
         attachment: 3,
         number: "2.28",
         description: "Nieokazanie i nieudostępnienie do kontroli urządzenia, na którym zainstalowana jest aplikacja mobilna, o której mowa w art. 13b ust. 1 ustawy o transporcie drogowym", 
         fine: 12000,
         group: "brak"
         }, 
    ];
    