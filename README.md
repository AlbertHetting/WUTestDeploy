# Gruppenavn: MAAGE GAMES

# Pitch-sætningen

Minigame app til læring af SQL, Bartender, Knightgame og Capybara

# Navne

Malte, Albert & Anker

# Projektkontrakt

## 1. Emne og koncept
Et spil, hvor Webudviklere/multimediedesginere lærer SQL ved at Spille forskelige minigames, og
hvor de kan compare scores på et scoreboard.
## 2. Spilmekanik

Spillet består af 3 minigames:

Bartender SQL (inspireret af mix drink game y8)
SQL Knight (Inspireret af swords and sandals)
Capybara SQL Trivia (Inspireret af Jackbox's Wheel of Enourmous Proportions)

spilleren vælger hvad de gerne vil spille og spillet starter så, spillet tracker deres progress og score
den vises derefter på scoreboard aog inde på deres peofil. Se gerne Figma for komplette spil beskrivelser

Spilleren får også feedback på deres score, for eksempel "increase your answer speed to see the most gains on your overall score"

## 3. Roller

Der eksisterer 2 roller: Free user/guest user hvor man ikke er logget ind. Score bliver ikke tracket og det gør progress heller ikke. Logged in, her kommer man på scoreboard og ens progress gemmes så man kan starte hvor man slap!

## 4. Primære routes

Primære Routes:

Forside //Alle
Login // Alle
Leaderboards // Logged in
Game Bartender // Alle
Game Knight // Alle
Game Trivia // Alle
Profilside (med stats og feedback) // Logged in

(Der kan komme flere routes  men for nu ser det såden her ud)

## 6. Første udkast til datamodel

Se figma for ER / database opsætning. kig kun på "ER Diagram V3"

https://www.figma.com/board/Ex4ZPFTuFSBf92f5Hlfa0B/WU-1-Semester-Eksamen?node-id=0-1&t=AKKqsFixyvo2EmNg-1

## 7. Ejerskab

Forside, login og boilerplate: Laves sammen med liveshare

Bartender SQL: Malte
SQL Knight: Anker
Capy Trivia: Albert

Profilside: Undecided
Leaderboards: Undecided