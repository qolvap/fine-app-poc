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
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.1",
      description: "Wykonywanie międzynarodowego przewozu drogowego bez posiadania w pojeździe wymaganego zezwolenia", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.2",
      description: "Wykonywanie międzynarodowego przewozu drogowego niezgodnie z przepisami umowy międzynarodowej lub warunkami określonymi w zezwoleniu", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.2a",
      description: "(Przepis wchodzi w życie 1 .01.2025r.) Wykonywanie przewozu drogowego rzeczy bez zgłoszenia do rejestru zgłoszeń, w przypadku o którym mowa w art. 28b ustawy o transporcie drogowym albo zgłoszenie danych i informacji niekompletnych lub niezgodnych ze stanem faktycznym", 
      fine: 12000,
      group: "brak"
      },    
      
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.2b",
      description: "(Przepis wchodzi w życie 1 .01.2025r.) Wykonywanie przewozu drogowego rzeczy, w przypadku o którym mowa w art. 28b ustawy o transporcie drogowym z naruszeniem obowiązku, o którym mowa w art. 10a ust. 1 ustawy o systemie monitorowania drogowego i kolejowego przewozu towarów oraz obrotu paliwami opałowymi", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.3",
      description: "Wykonywanie międzynarodowego przewozu drogowego rzeczy przez kierowcę nieposiadającego ważnego świadectwa kierowcy", 
      fine: 5000,
      group: ["10.3BPN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.4",
      description: " Wykonywanie międzynarodowego przewozu drogowego bez posiadania w pojeździe certyfikatu potwierdzającego spełnienie przez pojazd odpowiednich wymogów bezpieczeństwa lub warunków dopuszczenia do ruchu wymaganego odpowiednio do posiadanego zezwolenia", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.4",
      description: " Wykonywanie międzynarodowego przewozu drogowego pojazdem niespełniającym warunków określonych w certyfikacie potwierdzającym spełnienie przez pojazd odpowiednich wymogów bezpieczeństwa lub warunków dopuszczenia do ruchu", 
      fine: 12000,
      group: "brak"
      },    
      
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.5",
      description: "Wykonywanie przewozu kabotażowego rzeczy na terytorium Rzeczypospolitej Polskiej bez wymaganego zezwolenia", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.6",
      description: "Wykonywanie przewozu kabotażowego rzeczy niezgodnie z warunkami określonymi dla tego przewozu", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "3.7",
      description: "Wykonywanie międzynarodowego przewozu towarów szybko psujących się pojazdem niespełniającym warunków określonych w umowie o międzynarodowych przewozach szybko psujących się artykułów żywnościowych i o specjalnych środkach transportu przeznaczonych do tych przewozów (ATP)", 
      fine: 3000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.1",
      description: "Niezgłoszenie wykonywania przewozu drogowego odpadów, w sytuacji gdy na przewóz nie jest wymagane zezwolenie", 
      fine: 3000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.2",
      description: "Wykonywanie przewozu drogowego odpadów innych niż niebezpieczne przez transportującego odpady bez wymaganego wpisu do rejestru, o którym mowa w przepisach ustawy o odpadach", 
      fine: 2000,
      group: "brak"
      },    
      
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.3",
      description: "Wykonywanie przewozu drogowego odpadów niebezpiecznych przez transportującego odpady bez wymaganego wpisu do rejestru, o którym mowa w przepisach ustawy o odpadach", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.4",
      description: "Wywóz odpadów poza terytorium Rzeczypospolitej Polskiej bez wymaganego zezwolenia", 
      fine: 5000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.5",
      description: "Wwóz odpadów na terytorium Rzeczypospolitej Polskiej bez wymaganego zezwolenia", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.6",
      description: "Wykonywanie przewozu drogowego odpadów tranzytem przez terytorium Rzeczypospolitej Polskiej bez wymaganego zezwolenia", 
      fine: 12000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.7",
      description: "Wykonywanie przewozu drogowego przez transportującego odpady bez dokumentu potwierdzającego rodzaj transportowanych odpadów, o którym mowa w przepisach wydanych na podstawie art. 24 ust. 7 ustawy z dnia 14 grudnia 2012 r. o odpadach", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.8",
      description: "Wykonywanie przewozu drogowego odpadów przez transportującego odpady bez oznakowania środków transportu, o którym mowa w przepisach wydanych na podstawie art. 24 ust. 7 ustawy z dnia 14 grudnia 2012 r. o odpadach", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.9",
      description: "Wykonywanie przewozu drogowego odpadów przez transportującego odpady w sposób umożliwiający kontakt odpadów niebezpiecznych z odpadami innymi niż niebezpieczne", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.10",
      description: "Wykonywanie przewozu drogowego odpadów przez transportującego odpady w sposób umożliwiający mieszanie poszczególnych rodzajów odpadów, z wyjątkiem gdy strumień zmieszanych rodzajów odpadów w całości jest kierowany do przetwarzania w tym samym procesie", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.11",
      description: "Wykonywanie przewozu drogowego odpadów przez transportującego odpady w sposób umożliwiający rozprzestrzenianie się odpadów poza środki transportu oraz nieograniczający do minimum uciążliwości zapachowej", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.12",
      description: "Wykonywanie przewozu drogowego odpadów przez transportującego odpady w sposób nieograniczający oddziaływania czynników atmosferycznych na odpady, jeżeli mogą one spowodować negatywne oddziaływanie transportowanych odpadów na środowisko lub życie i zdrowie ludzi", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "4.13",
      description: "Wykonywanie przewozu drogowego odpadów przez transportującego odpady w sposób niezabezpieczający przed przemieszczaniem i przewracaniem się pojemników lub worków", 
      fine: 10000,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.1",
      description: "Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 9 godzin w sytuacji, gdy kierowca dwukrotnie w danym tygodniu wydłużył jazdę dzienną do 10 godzin o czas powyżej 15 minut do mniej niż 1 godziny ", 
      fine: 50,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.1",
      description: "Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 9 godzin w sytuacji, gdy kierowca dwukrotnie w danym tygodniu wydłużył jazdę dzienną do 10 godzin o czas od 1 godziny do mniej niż 2 godzin", 
      fine: 150,
      group: ["1.2PN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.1",
      description: "Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 9 godzin w sytuacji, gdy kierowca dwukrotnie w danym tygodniu wydłużył jazdę dzienną do 10 godzin) za każdą rozpoczętą godzinę od 2 godzin", 
      fine: 200,
      group: ["1.3PN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.1",
      description: "Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 9 godzin w sytuacji, gdy kierowca dwukrotnie w danym tygodniu wydłużył jazdę dzienną do 10 godzin za każdą rozpoczętą godzinę od 13 godzin i 30 minut, w przypadku braku jakiejkolwiek przerwy lub odpoczynku trwającego co najmniej 4 godziny i 30 minut", 
      fine: 550,
      group: ["1.4NN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.2",
      description: " Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 10 godzin w sytuacji, gdy jego wydłużenie w danym tygodniu było dozwolone o czas do mniej niż 1 godziny", 
      fine: 100,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.2",
      description: " Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 10 godzin w sytuacji, gdy jego wydłużenie w danym tygodniu było dozwolone o czas od 1 godziny do mniej niż 2 godzin", 
      fine: 200,
      group: ["1.5PN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.2",
      description: " Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 10 godzin w sytuacji, gdy jego wydłużenie w danym tygodniu było dozwolone za każdą rozpoczętą godzinę od 2 godzin ", 
      fine: 250,
      group: ["1.6BPN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.2",
      description: " Przekroczenie dziennego czasu prowadzenia pojazdu powyżej 10 godzin w sytuacji, gdy jego wydłużenie w danym tygodniu było dozwolone za każdą rozpoczętą godzinę od 15 godzin, w przypadku braku jakiejkolwiek przerwy lub odpoczynku trwającego co najmniej 4 godziny i 30 minut", 
      fine: 250,
      group: ["1.7NN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.3",
      description: "Przekroczenie dopuszczalnego tygodniowego czasu prowadzenia pojazdu o czas powyżej 30 minut do mniej niż 4 godzin", 
      fine: 150,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.3",
      description: "Przekroczenie dopuszczalnego tygodniowego czasu prowadzenia pojazdu o czas od 4 godzin do mniej niż 9 godzin ", 
      fine: 250,
      group: ["1.8PN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.3",
      description: "Przekroczenie dopuszczalnego tygodniowego czasu prowadzenia pojazdu o czas od 9 godzin do mniej niż 14 godzin ", 
      fine: 350,
      group: ["1.9BPN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.3",
      description: "Przekroczenie dopuszczalnego tygodniowego czasu prowadzenia pojazdu za każdą rozpoczętą godzinę od 14 godzin", 
      fine: 550,
      group: ["1.10NN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.4",
      description: "Przekroczenie maksymalnego dwutygodniowego czasu prowadzenia pojazdu o czas do mniej niż 10 godzin", 
      fine: 250,
      group: "brak"
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.4",
      description: "Przekroczenie maksymalnego dwutygodniowego czasu prowadzenia pojazdu o czas od 10 godzin do mniej niż 15 godzin", 
      fine: 350,
      group: ["1.11PN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.4",
      description: "Przekroczenie maksymalnego dwutygodniowego czasu prowadzenia pojazdu o czas od 15 godzin do mniej niż 22 godzin i 30 minut", 
      fine: 550,
      group: ["1.12BPN"]
      },    
      {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.4",
      description: "Przekroczenie maksymalnego dwutygodniowego czasu prowadzenia pojazdu za każdą rozpoczętą godzinę od 22 godzin i 30 minut", 
      fine: 700,
      group: ["1.13NN"]
      },    
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.5",
      description: "Skrócenie wymaganego regularnego okresu odpoczynku dziennego o czas do 1 godziny ", 
      fine: 100,
      group: "brak"
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.5",
      description: "Skrócenie wymaganego regularnego okresu odpoczynku dziennego o czas powyżej 1 godziny do 2 godzin i 30 minut", 
      fine: 200,
      group: ["1.16PN"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.5",
      description: "Skrócenie wymaganego regularnego okresu odpoczynku dziennego za każdą rozpoczętą godzinę powyżej 2 godzin i 30 minut", 
      fine: 350,
      group: ["1.17BPN"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.6",
      description: "Niespełnienie wymogu dzielonego dziennego okresu odpoczynku  skrócenie drugiej części odpoczynku dzielonego o czas do 1 godziny", 
      fine: 100,
      group: "brak"
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.6",
      description: "Niespełnienie wymogu dzielonego dziennego okresu odpoczynku skrócenie drugiej części odpoczynku dzielonego o czas powyżej 1 godziny do 2 godzin", 
      fine: 200,
      group: ["1.20PN"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.6",
      description: "Niespełnienie wymogu dzielonego dziennego okresu odpoczynku za każdą rozpoczętą godzinę powyżej 2 godzin", 
      fine: 350,
      group: ["1.21BP"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.7",
      description: "Skrócenie wymaganego skróconego okresu odpoczynku dziennego – zarówno w przypadku załogi jednoosobowej, jak i załogi kilkuosobowej o czas do 1 godziny", 
      fine: 150,
      group: "brak"
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.7",
      description: "Skrócenie wymaganego skróconego okresu odpoczynku dziennego – zarówno w przypadku załogi jednoosobowej, jak i załogi kilkuosobowej o czas powyżej 1 godziny do 2 godzin ", 
      fine: 350,
      group: ["1.18PN", "1.22PN"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.7",
      description: "Skrócenie wymaganego skróconego okresu odpoczynku dziennego – zarówno w przypadku załogi jednoosobowej, jak i załogi kilkuosobowej za każdą rozpoczętą godzinę powyżej 2 godzin", 
      fine: 350,
      group: ["1.19BPN", "1.23BPN"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.8",
      description: "Skrócenie regularnego okresu odpoczynku tygodniowego, jeżeli jego skrócenie nie jest dozwolone o czas do 3 godzin ", 
      fine: 150,
      group: "brak"
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.8",
      description: "Skrócenie regularnego okresu odpoczynku tygodniowego, jeżeli jego skrócenie nie jest dozwolone o czas powyżej 3 godzin do 9 godzin", 
      fine: 300,
      group: ["1.26PN"]
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.8",
      description: "Skrócenie regularnego okresu odpoczynku tygodniowego, jeżeli jego skrócenie nie jest dozwolone za każdą rozpoczętą godzinę powyżej 9 godzin", 
      fine: 400,
      group: ["1.27BPN"]         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.9",
      description: "Skrócenie wymaganego skróconego okresu odpoczynku tygodniowego o czas do 2 godzin ", 
      fine: 200,
      group: "brak"         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.9",
      description: "Skrócenie wymaganego skróconego okresu odpoczynku tygodniowego o czas powyżej 2 godzin do 4 godzin", 
      fine: 350,
      group: ["1.24PN"]         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.9",
      description: "Skrócenie wymaganego skróconego okresu odpoczynku tygodniowego o czas powyżej 4 godzin", 
      fine: 450,
      group: ["1.25BPN"]         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.10",
      description: "Przekroczenie 6 kolejnych okresów 24-godzinnych od uprzedniego tygodniowego okresu odpoczynku o czas do mniej niż 3 godzin", 
      fine: 350,
      group: "brak"         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.10",
      description: "Przekroczenie 6 kolejnych okresów 24-godzinnych od uprzedniego tygodniowego okresu odpoczynku o czas od 3 godzin do mniej niż 12 godzin", 
      fine: 450,
      group: ["1.28PN"]         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.10",
      description: "Przekroczenie 6 kolejnych okresów 24-godzinnych od uprzedniego tygodniowego okresu odpoczynku o czas od 12 godzin", 
      fine: 550,
      group: ["1.28BPN"]         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.10a",
      description: "Dopuszczenie do wykorzystywania przez kierowcę w pojeździe lub w miejscu zakwaterowania niewyposażonym w odpowiednią infrastrukturę noclegową i sanitarną regularnego tygodniowego okresu odpoczynku lub dowolnego tygodniowego okresu odpoczynku trwającego ponad 45 godzin wykorzystywanego jako rekompensata za skrócone tygodniowe okresy odpoczynku", 
      fine: 50,
      group: "brak"         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.11",
      description: "Przekroczenie maksymalnego czasu prowadzenia pojazdu bez przerwy o czas do mniej niż 30 minut", 
      fine: 100,
      group: "brak"         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.11",
      description: "Przekroczenie maksymalnego czasu prowadzenia pojazdu bez przerwy o czas od 30 minut do mniej niż 1 godzina i 30 minut", 
      fine: 250,
      group: ["1.14PN"]         
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.11",
      description: "Przekroczenie maksymalnego czasu prowadzenia pojazdu bez przerwy w międzynarodowym okazjonalnym przewozie osób, w godzinach od 2200 do 600, gdy pojazd obsługuje jeden kierowca o czas do mniej niż 1 godzina i 30 minut", 
      fine: 250,
      group: ["1.15BPN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.11",
      description: "Przekroczenie maksymalnego czasu prowadzenia pojazdu bez przerwy w międzynarodowym okazjonalnym przewozie osób, w godzinach od 2200 do 600, gdy pojazd obsługuje jeden kierowca o czas od 1 godziny i 30 minut", 
      fine: 350,
      group: ["1.31BPN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.12",
      description: "Przekroczenie dopuszczalnego dobowego 10-godzinnego czasu pracy, jeżeli praca jest wykonywana w porze nocnej o czas do 1 godziny", 
      fine: 50,
      group: "brak"       
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.12",
      description: "Przekroczenie dopuszczalnego dobowego 10-godzinnego czasu pracy, jeżeli praca jest wykonywana w porze nocnej o czas od 1 godziny do mniej niż 3 godzin", 
      fine: 100,
      group: ["3.9PN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.12",
      description: "Przekroczenie dopuszczalnego dobowego 10-godzinnego czasu pracy, jeżeli praca jest wykonywana w porze nocnej za każdą rozpoczętą godzinę od 3 godzin", 
      fine: 200,
      group: ["3.10BPN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.13",
      description: "Skrócenie tygodniowego okresu odpoczynku po 12 kolejnych okresach 24-godzinnych o czas do 2 godzin", 
      fine: 150,
      group: "brak"       
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.13",
      description: "Skrócenie tygodniowego okresu odpoczynku po 12 kolejnych okresach 24-godzinnych o czas powyżej 2 godzin do 4 godzin", 
      fine: 300,
      group: ["1.30PN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.13",
      description: "Skrócenie tygodniowego okresu odpoczynku po 12 kolejnych okresach 24-godzinnych za każdą godzinę powyżej 4 godzin ", 
      fine: 400,
      group: ["1.30BPN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.14",
      description: "Przekroczenie 12 kolejnych okresów 24-godzinnych po uprzednim regularnym tygodniowym okresie odpoczynku o czas do mniej niż 3 godzin", 
      fine: 150,
      group: "brak"        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.14",
      description: "Przekroczenie 12 kolejnych okresów 24-godzinnych po uprzednim regularnym tygodniowym okresie odpoczynku o czas od 3 godzin do mniej niż 12 godzin", 
      fine: 300,
      group: ["1.29PN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.14",
      description: "Przekroczenie 12 kolejnych okresów 24-godzinnych po uprzednim regularnym tygodniowym okresie odpoczynku za każdą godzinę od 12 godzin", 
      fine: 400,
      group: ["1.29BPN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.15",
      description: "Przekroczenie maksymalnego 48-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 1 i art. 26c ust. 1 ustawy o czasie pracy kierowców, w przypadku gdy niedozwolonym było jego przedłużenie do 60 godzin o czas do mniej niż 2 godzin", 
      fine: 50,
      group: "brak"        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.15",
      description: "Przekroczenie maksymalnego 48-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 1 i art. 26c ust. 1 ustawy o czasie pracy kierowców, w przypadku gdy niedozwolonym było jego przedłużenie do 60 godzin o czas od 2 godzin do mniej niż 8 godzin", 
      fine: 100,
      group: "brak"        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.15",
      description: "Przekroczenie maksymalnego 48-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 1 i art. 26c ust. 1 ustawy o czasie pracy kierowców, w przypadku gdy niedozwolonym było jego przedłużenie do 60 godzin o czas od 8 godzin do mniej niż 12 godzin ", 
      fine: 250,
      group: ["3.1PN"]        
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.15",
      description: "Przekroczenie maksymalnego 48-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 1 i art. 26c ust. 1 ustawy o czasie pracy kierowców, w przypadku gdy niedozwolonym było jego przedłużenie do 60 godzin  za każdą rozpoczętą godzinę od 12 godzin", 
      fine: 350,
      group: ["3.2BPN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.16",
      description: "Przekroczenie maksymalnego 60-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 2 i art. 26c ust. 2 ustawy o czasie pracy kierowców o czas do mniej niż 1 godziny", 
      fine: 50,
      group: "brak"     
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.16",
      description: "Przekroczenie maksymalnego 60-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 2 i art. 26c ust. 2 ustawy o czasie pracy kierowców o czas od 1 godziny do mniej niż 5 godzin ", 
      fine: 100,
      group: "brak"      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.16",
      description: "Przekroczenie maksymalnego 60-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 2 i art. 26c ust. 2 ustawy o czasie pracy kierowców o czas od 5 godzin do mniej niż 10 godzin", 
      fine: 200,
      group: ["3.3PN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.16",
      description: "Przekroczenie maksymalnego 60-godzinnego tygodniowego wymiaru czasu pracy, o którym mowa w art. 12 ust. 2 i art. 26c ust. 2 ustawy o czasie pracy kierowców za każdą rozpoczętą godzinę od 10 godzin", 
      fine: 300,
      group: ["3.4BPN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.17",
      description: "Skrócenie obowiązkowej przerwy w pracy w przypadku, gdy czas pracy wynosi od 6 do 9 godzin o czas do mniej niż 10 minut", 
      fine: 50,
      group: "brak"    
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.17",
      description: "Skrócenie obowiązkowej przerwy w pracy w przypadku, gdy czas pracy wynosi od 6 do 9 godzin o czas od 10 minut do mniej niż 20 minut", 
      fine: 100,
      group: ["3.5PN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.17",
      description: "Skrócenie obowiązkowej przerwy w pracy w przypadku, gdy czas pracy wynosi od 6 do 9 godzin o czas od 20 minut", 
      fine: 150,
      group: ["3.6BPN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.18",
      description: "Skrócenie obowiązkowej przerwy w pracy w przypadku, gdy czas pracy wynosi powyżej 9 godzin o czas do mniej niż 15 minut", 
      fine: 50,
      group: ["3.6BPN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.18",
      description: "Skrócenie obowiązkowej przerwy w pracy w przypadku, gdy czas pracy wynosi powyżej 9 godzin o czas od 15 minut do mniej niż 25 minut", 
      fine: 100,
      group: ["3.7PN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.18",
      description: "Skrócenie obowiązkowej przerwy w pracy w przypadku, gdy czas pracy wynosi powyżej 9 godzin o czas od 25 minut", 
      fine: 150,
      group: ["3.8BPN"]      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.19",
      description: "Nieprowadzenie ewidencji czasu pracy, o której mowa w art. 25 ust. 1 i art. 26d ust. 1 i 2 ustawy o czasie pracy kierowców – za każdego kierowcę", 
      fine: 1000,
      group: "brak"      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.20",
      description: "Nieudzielenie przerwy, o której mowa w art. 13 ust. 1 ustawy o czasie pracy kierowców, kierowcom niepozostającym w stosunku pracy", 
      fine: 300,
      group: "brak"      
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.21",
      description: "Fałszowanie ewidencji czasu pracy lub odmowa udostępnienia jej kontrolerom", 
      fine: 8000,
      group: ["3.11BPN"]     
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "5.22",
      description: "Fałszowanie dokumentacji lub odmowa udostępnienia jej kontrolerom – w przypadku przedsiębiorców osobiście wykonujących przewozy drogowe", 
      fine: 8000,
      group: ["3.12BPN"]     
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.1.1",
      description: "Wykonywanie przewozu drogowego pojazdem niewyposażonym w wymagany tachograf posiadający świadectwo homologacji typu", 
      fine: 10000,
      group: ["2.1NN"]     
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.1.2",
      description: "Wykonywanie przewozu drogowego pojazdem wyposażonym w tachograf, przyrząd rejestrujący, czujnik ruchu, urządzenie zewnętrzne GNSS lub urządzenie wczesnego wykrywania na odległość, nieposiadające świadectwa homologacji typu lub tachograf lub powyżej wymieniony element składowy tachografu, który został podrobiony lub przerobiony", 
      fine: 10000,
      group: ["2.1NN"]     
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.1.3",
      description: "Podłączenie do tachografu niedozwolonego urządzenia lub przedmiotu wykonanego lub przeznaczonego do celów podrabiania lub przerabiania danych rejestrowanych przez tachograf lub korzystanie z tego urządzenia lub przedmiotu", 
      fine: 10000,
      group: ["2.9NN"]     
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.1.4",
      description: "Wykonywanie przewozu drogowego pojazdem wyposażonym w tachograf niewyposażony w drugi niezależny sygnał dotyczący ruchu pojazdu lub z odłączonym niezależnym sygnałem dotyczącym ruchu pojazdu, o ile jest wymagany", 
      fine: 3000,
      group: "brak"  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.1.5",
      description: "Wykonywanie przewozu drogowego pojazdem wyposażonym w tachograf, który nie został sprawdzony lub poddany przeglądowi przez warsztat posiadający zezwolenie", 
      fine: 1000,
      group: ["2.2BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.1.6",
      description: "Wykonywanie przewozu drogowego pojazdem wyposażonym w nieprawidłowo działający tachograf, z wyjątkiem przypadków, o których mowa w lp. 6.1.1–6.1.5.", 
      fine: 1000,
      group: ["2.7BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.2.1",
      description: "Niewłaściwa obsługa lub odłączenie homologowanego i sprawnego technicznie tachografu, skutkujące nierejestrowaniem na wykresówce lub na karcie kierowcy aktywności kierowcy, prędkości pojazdu lub przebytej drogi", 
      fine: 5000,
      group: ["2.8BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.2.2",
      description: "Ukrywanie, likwidowanie, niszczenie, podrabianie lub przerabianie danych zarejestrowanych na wykresówkach lub przechowywanych i pobranych z tachografu lub karty kierowcy", 
      fine: 10000,
      group: ["2.10NN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.1",
      description: "Wykonywanie przewozu drogowego pojazdem wyposażonym w tachograf cyfrowy przez kierowcę nieposiadającego własnej, ważnej karty kierowcy", 
      fine: 2000,
      group: ["2.4NN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.2",
      description: "Posiadanie lub posługiwanie się przez kierowcę więcej niż jedną własną, ważną kartą kierowcy", 
      fine: 3000,
      group: ["2.3BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.3",
      description: "Posługiwanie się przez kierowcę kartą kierowcy, która nie jest jego własną kartą", 
      fine: 3000,
      group: ["2.5NN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.4",
      description: "Jednoczesne używanie kilku wykresówek przez kierowcę", 
      fine: 3000,
      group: ["2.13BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.5",
      description: "Niedopuszczalne wyjęcie wykresówek lub karty kierowcy, mające wpływ na rejestrację danych", 
      fine: 3000,
      group: ["2.14BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.6",
      description: "Używanie wykresówki lub karty kierowcy przez okres dłuższy niż ten, na który jest przeznaczona, skutkujące utratą danych zapisanych na wykresówce lub na karcie kierowcy, bądź uniemożliwiające odczyt aktywności zapisanych na wykresówce", 
      fine: 3000,
      group: ["2.15BP"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.7",
      description: "Okazanie brudnych lub uszkodzonych wykresówek lub karty kierowcy, z nieczytelnymi danymi – za każdą kartę lub każdą wykresówkę", 
      fine: 100,
      group: ["2.16BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.8",
      description: "Niespełnienie wymogu ręcznego wprowadzenia danych na wykresówkę lub kartę kierowcy – za każdy wpis", 
      fine: 50,
      group: ["2.17BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.9",
      description: "Niezaznaczenie przez kierowcę na wykresówce lub wykresówce dołączanej do karty kierowcy wszystkich wymaganych informacji dotyczących okresów, które nie są rejestrowane, gdy tachograf nie działa lub działa wadliwie – za każdy dzień. Kara od 100 maksymalnie 2000", 
      fine: 100,
      group: ["2.26BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.10",
      description: "Wykonywanie przewozu drogowego w załodze kilkuosobowej z włożeniem wykresówki lub karty kierowcy lub wykresówek lub kart kierowcy w nieodpowiednie czytniki tachografu", 
      fine: 1000,
      group: ["2.18PN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.11",
      description: "Niepoprawne operowanie przełącznikiem tachografu umożliwiającym zmianę rodzaju aktywności kierowcy – za każdy dzień. Kara od 100 maksymalnie 1000", 
      fine: 100,
      group: ["2.19BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.12",
      description: "Niewykonanie naprawy tachografu w warsztacie posiadającym zezwolenie", 
      fine: 2000,
      group: ["2.25BPN"]  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.13",
      description: "Niewykonanie naprawy tachografu w warsztacie posiadającym zezwolenie po upływie dopuszczalnego w art. 37 ust. 1 rozporządzenia (UE) nr 165/2014 okresu prowadzenia pojazdu", 
      fine: 2000,
      group: "brak"  
   },
   {
      guilty: "przedsiębiorcy",
      attachment: 3,
      number: "6.3.14",
      description: "Nieumieszczenie na wykresówce lub wydruku wymaganych wpisów lub umieszczenie na wykresówce lub wydruku nieczytelnych wpisów ręcznych. Kara 50 za każdy brak wpisu", 
      fine: 50,
      group: ["2.17BPN"] 
   },  
    ];