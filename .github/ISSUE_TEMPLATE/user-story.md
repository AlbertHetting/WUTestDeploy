---
name: User story
about: en user story med acceptkriterier
title: "som X vil jeg ..."
---
# User stories:

## User story 1: Basis kendskab til SQL

**Som** webudvikler
**vil jeg** gerne stifte mig kendskab til SQL på en sjov måde
**fordi** det giver mig mere motivation til at arbejde på sagen.

### Acceptkriterier
- [ ] Spillet har en legende tilgang (point, mål eller udfordringer)
- [ ] Spilleren kan gennemføre mindst én SQL-opgave fra start til slut
- [ ] Spilleren får tydelig feedback, når en opgave er løst
- [ ] Spilleren kan hjælp hvis de er stuck

### Lag
- [ ] UI
- [ ] Backend (validering af svar, databasen kan give hjælp)
- [ ] Test


## User story 2: Spil uden at logge ind

**Som** spiller
**vil jeg** gerne kunne hurtigt lære om SQL
**fordi** jeg derfor vil spille spillet uden at logge ind.


### Acceptkriterier
- [ ] Spillet kan startes direkte fra forsiden uden login eller oprettelse af konto
- [ ] Der vises ingen login-skærm før første opgave
- [ ] Spilleren kan gennemføre et helt spil som gæst
- [ ] Spilleren får point, men backenden opdaterer ikke databasen

### Lag
- [ ] Frontenden viser spillerens point
- [ ] Backend (gæstesession)
- [ ] Local storage gemmer point / progress


## User story 3: Scoreboard og rangering

**Som** spiller
**vil jeg** gerne kunne se, hvordan jeg klarede mig i forhold til mine holdkammerater
**derfor** jeg gerne vil have mulighed for at se et scoreboard og se, hvor jeg selv rangerede.


### Acceptkriterier
- [ ] Efter endt spil vises et scoreboard med de bedste resultater
- [ ] Spillerens egen placering er tydeligt markeret
- [ ] Scoreboardet opdateres, når en ny score gemmes

### Lag
- [ ] Frontend (scoreboard-visning)
- [ ] Backend (gem og hent scores)
- [ ] Database (scoretabel)
- [ ] Test



## User story 4: Lær SQL-operatorer

**Som** webudvikler
**vil jeg** gerne lære om de forskellige operatorer, som SQL arbejder med
**fordi** jeg så kan selv bruge operators når jeg skriver kode.


### Acceptkriterier
- [ ] Spillet indeholder opgaver, der dækker de grundlæggende operatorer (fx `=`, `<>`, `<`, `>`, `AND`, `OR`, `LIKE`, `IN`, `BETWEEN`)
- [ ] Hver opgave forklarer kort, hvad operatoren gør
- [ ] Spilleren får besked, hvis forkert operator giver forkert data

### Lag
- [ ] Frontend
- [ ] Backend
- [ ] Database


## User story 5: Lær SQL INNER JOIN

**Som** webudvikler
**vil jeg** gerne lære SQL INNER JOIN
**fordi** jeg så kan normalisere min database.


### Acceptkriterier
- [ ] Spillet har mindst én opgave, hvor to tabeller skal kobles med `INNER JOIN`
- [ ] Opgaven viser, hvordan data fordeles på flere tabeller
- [ ] Spilleren kan se resultatet af sin join

### Lag
- [ ] Frontend
- [ ] Backend
- [ ] Database (flere relaterede tabeller)


## User story 6: Lær de forskellige SQL statements

**Som** webudvikler
**vil jeg** gerne lære og forstå de forskellige SQL statements
**fordi** jeg så kan bruge dem, når jeg deployer min egen database.


### Acceptkriterier
- [ ] Spillet dækker mindst `SELECT`, `INSERT`, `UPDATE` og `DELETE`
- [ ] Hver statement-type introduceres med en kort forklaring og en opgave
- [ ] Spilleren kan se effekten af sit statement på dataen

### Lag
- [ ] Frontend
- [ ] Backend
- [ ] Database


## User story 7: Det skal virke

**Som** Spiller
**vil jeg** gerne at have det virker når jeg interagere med de forskellige elementer på siden
**fordi** at jeg vil ikke side og vendte længe på forskellige mechaniker, eller trykke på ting uden respons fra spillet.


### Acceptkriterier
- [ ] Spilleren får tydelig respons fra siden når de klikker på elementer
- [ ] Spillets UI er tydeligt i klikbare og interegerebare elementer.

### Lag
- [ ] Loader/action
- [ ] UI
- [ ] Test
- [ ] Async fetch

## User story 8: Se scoreboard på seperat side

**Som** spiller
**vil jeg** kunne se min egne og andres scores 
**fordi** det motiverer mig og gør spillet sjovere når jeg kan se mine samt andres scored


### Acceptkriterier
- [ ] En seperat side til scores
- [ ] Et scoreboard hvor man kan se sine egne score(s) same top 5

### Lag
- [ ] Supabase 
- [ ] UI 
- [ ] Routes
- [ ] Loader/action

## User story 9: Lær SQL gennem mål og udfordringer

**Som** studerende, der synes, at lærebøger om SQL er kedelige
**vil jeg** gerne lære gennem små spil med mål og udfordringer
**fordi** jeg så har lyst til at blive ved med at øve.


### Acceptkriterier
- [ ] Hvert minigame har et tydeligt mål (fx "find alle kunder fra Aarhus")
- [ ] Spilleren får point eller belønning for løste udfordringer
- [ ] Spilleren får nye udfordringer igennem spillene
- [ ] Spilleren kan spille flere forskellige spil

### Lag
- [ ] Frontend
- [ ] Backend


## User story 10: Korte SQL-opgaver i små bidder

**Som** webudvikler med koncentrationsbesvær
**vil jeg** gerne kunne løse korte SQL-opgaver i små minigames
**fordi** jeg så kan lære SQL i korte bidder uden at miste fokus.


### Acceptkriterier
- [ ] Hver opgave kan løses på under 2-3 minutter
- [ ] Hver opgave fokuserer på ét begreb ad gangen
- [ ] Skærmen er ryddelig uden unødvendige distraktioner

### Lag
- [ ] Frontend
- [ ] Backend (gem fremskridt)
- [ ] Database
- [ ] Test


