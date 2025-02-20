# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Alle filer bliver lagt ind i en samlet mappe der hedder unit_07.
Javascript filer bliver lagt i en mappe kaldes "js", CSS-filer i en mappe der hedder "css", Billeder i en mappe der hedder billeder etc.
HTML-filer behøver ikke deres egen mappe.
Fonte hentes ind fra nettet og embeddes i head, på de forskellige html-filer.

## Navngivning:

Filer bliver navngivet efter hvad siden er/handler om. Deres enkelte javascript- og css filer, navngives efter den html fil de tilhører. På denne måde ved hele teames, hvad der hører til hvad.
Filerne navngives med små bogstaver og uden mellemrum (helst et enkelt ord)

## Link til scripts:

Script placeres sidst i <body> på alle siderne.

## Git branches:

Vi navngiver efter hvad der fungere for den enkelte person. (Skulle have gjort det anerledes. Lært til næste gang.)

## Arbejdsflow:

Vi aftaler inden vi starter på kodningen, hvordan fordelingen af siderne sker. Man går ikke ind på en andens fil og ændre, med mindre man har kommunikeret det til individet, som har sagt god for det. Man skriver hvad man har added/removed/fixed i commit-beskeden, hvis man har lavet større ændringer. Hvis det er mindre ændringer, så som ændring i font farve, er det tilladt bare at skrive "fixes" etc.
Når man merger en stor feature ind, kommunikerer man det til resten af gruppen via teams/messenger.

## Kode:

Om man bruger function keyword eller arrow functions, er op til det enkelte individ og hvad der passer bedst til deres kode process.
Man gør brug af id til javascript og classes til css.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

https://dummyjson.com/recipes?limit=0
https://dummyjson.com/recipes/${myRecipe}

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
