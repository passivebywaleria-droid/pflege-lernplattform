// LE-06 Wissens-Tab: Artikel-Kapitel (32 Kapitel)
// Thema: Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Quellen: PflBG, PflAPrV, DNQP Expertenstandards (Mobilität 2020, Dekubitus 2017, Sturz 2013), AWMF S3-Leitlinie VTE 2015, NPUAP/EPUAP 2014, ICSD-3 2014, ArbSchG

import type { ArtikelKapitel } from "../_types";

export const LE06_ARTIKEL: ArtikelKapitel[] = [

  // ── Kapitel 1: Was bedeutet Mobilität? ──────────────────────────
  {
    kapitelId: "le06-kap-01",
    titel: "Was bedeutet Mobilität? — Einführung und Bedeutung",
    titelB1: "Was bedeutet Mobilität?",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Mobilität ist die Fähigkeit zur zielgerichteten Körperbewegung und Grundvoraussetzung für Selbstständigkeit. Immobilität gefährdet gleichzeitig durch Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz.",
    zusammenfassungB1: "Mobilität heißt: sich bewegen können. Ohne Bewegung drohen 5 Probleme: Druckgeschwür, Blutgerinnsel, Lungenentzündung, Gelenk-Versteifung und Sturz.",
    glossarBegriffe: ["Mobilität", "Immobilität", "Vorbehaltene Tätigkeiten"],
    bloecke: [
      {
        type: "text",
        contentC1: `Sich bewegen können — das klingt so selbstverständlich, dass wir im Alltag kaum darüber nachdenken. Sich im Bett umdrehen, aufstehen, zum Waschbecken gehen, eine Treppe steigen. Erst wenn eine dieser Fähigkeiten fehlt, wird klar, wie grundlegend Mobilität für unser Leben ist.

In der Pflege meint Mobilität die Fähigkeit, den eigenen Körper zielgerichtet zu bewegen und die Position zu wechseln. Das beginnt bei kleinen Lageveränderungen im Bett und reicht bis zum Gehen und Treppensteigen. Mobilität ist dabei weit mehr als eine körperliche Funktion — sie ist eine Voraussetzung für Selbstständigkeit, soziale Teilhabe und Lebensqualität. Der DNQP-Expertenstandard zur Erhaltung und Förderung der Mobilität (2020) betont genau diesen Zusammenhang: Wer sich nicht bewegen kann, verliert schrittweise seine Unabhängigkeit.

Warum ist das Thema für dich als Pflegefachperson so zentral? Weil Immobilität wie ein Dominoeffekt wirkt. Ein pflegebedürftiger Mensch, der sich nicht mehr bewegen kann oder darf, ist gleichzeitig gefährdet für eine ganze Reihe schwerwiegender Komplikationen: Druckgeschwüre entstehen, weil die Haut dauerhaft belastet wird. Blutgerinnsel bilden sich, weil der venöse Rückfluss stockt. Die Lunge wird schlechter belüftet, Gelenke versteifen, und das Sturzrisiko steigt paradoxerweise gerade bei den Menschen, die sich zu wenig bewegen.

Deshalb gehört die Förderung der Mobilität zu den pflegerischen Kernaufgaben. Das Pflegeberufegesetz ordnet die Erhebung des individuellen Pflegebedarfs und die Planung entsprechender Maßnahmen den vorbehaltenen Tätigkeiten zu (§ 4 PflBG). Das bedeutet: Nur ausgebildete Pflegefachpersonen dürfen einschätzen, welche Unterstützung ein Mensch bei der Mobilität braucht — und diese Unterstützung planen.

In dieser Lerneinheit wirst du alle fünf großen Prophylaxen kennenlernen, die mit Immobilität zusammenhängen. Du wirst verstehen, warum Frühmobilisation die wirksamste Einzelmaßnahme ist. Und du wirst lernen, wie du Menschen dabei unterstützt, ihre Bewegungsfähigkeit zu erhalten oder wiederzugewinnen.`,
        contentB1: `Sich bewegen können — das klingt ganz normal. Wir denken im Alltag nicht darüber nach. Sich im Bett umdrehen. Aufstehen. Zum Waschbecken gehen. Eine Treppe steigen. Erst wenn das nicht mehr geht, merken wir: Mobilität (= die Fähigkeit, sich zu bewegen) ist sehr wichtig für unser Leben.

In der Pflege bedeutet Mobilität: Der Mensch kann seinen Körper gezielt bewegen. Er kann seine Position verändern. Das beginnt bei kleinen Bewegungen im Bett. Es geht bis zum Gehen und Treppen-Steigen. Mobilität ist mehr als nur eine Bewegung vom Körper. Sie ist nötig für Selbstständigkeit. Sie ist nötig für das Leben mit anderen Menschen. Und sie ist nötig für Lebensqualität. Der DNQP-Expertenstandard zur Erhaltung und Förderung der Mobilität (2020) sagt genau das: Wer sich nicht bewegen kann, verliert Schritt für Schritt seine Unabhängigkeit.

Warum ist das Thema für dich als Pflege-Fachperson so wichtig? Weil Immobilität (= sich nicht bewegen können) wie ein Domino-Effekt wirkt. Ein Mensch, der sich nicht bewegen kann, ist gleichzeitig gefährdet für viele Probleme. Dekubitus (= Druckgeschwür) entsteht, weil die Haut dauerhaft belastet wird. Thrombose (= Blutgerinnsel) entsteht, weil das Blut in den Venen zu langsam fließt. Die Lunge wird schlechter belüftet. Gelenke versteifen. Und das Sturzrisiko steigt. Das klingt vielleicht seltsam: Gerade Menschen, die sich zu wenig bewegen, fallen häufiger hin.

Deshalb gehört die Förderung der Mobilität zu den wichtigsten Aufgaben in der Pflege. Das Pflege-Berufegesetz sagt: Nur ausgebildete Pflege-Fachpersonen dürfen einschätzen, welche Hilfe ein Mensch bei der Mobilität braucht. Und nur sie dürfen diese Hilfe planen. Das sind vorbehaltene Tätigkeiten (= Aufgaben, die nur Pflege-Fachpersonen machen dürfen) (§ 4 PflBG).

In dieser Lerneinheit lernst du alle fünf großen Prophylaxen (= Vorbeugungen) kennen. Sie hängen alle mit Immobilität zusammen. Du wirst verstehen, warum Früh-Mobilisation (= frühes Bewegen) die beste Maßnahme ist. Und du wirst lernen, wie du Menschen dabei unterstützt, ihre Bewegungs-Fähigkeit zu erhalten oder zurückzugewinnen.`,
        quelle: "Vgl. PflBG § 4; DNQP 2020",
      },
    ],
  },

  // ── Kapitel 2: Der Bewegungsapparat ──────────────────────────
  {
    kapitelId: "le06-kap-02",
    titel: "Der Bewegungsapparat — Grundlagen für die Pflege",
    titelB1: "Der Bewegungsapparat",
    tag: "anatomie",
    geschaetzteDauer: 5,
    zusammenfassung: "Der passive Bewegungsapparat (Knochen, Gelenke, Bänder) bildet das Gerüst, der aktive (Muskulatur) den Antrieb. Muskelabbau bei Bettruhe setzt bereits nach wenigen Tagen ein.",
    zusammenfassungB1: "Knochen und Gelenke sind das Gerüst. Muskeln sind der Antrieb. Schon nach wenigen Tagen im Bett bauen Muskeln ab.",
    glossarBegriffe: ["Bewegungsapparat (passiv/aktiv)", "Kugelgelenk", "Scharniergelenk", "Physiologischer Bewegungsumfang"],
    bloecke: [
      {
        type: "text",
        contentC1: `Um Menschen bei der Bewegung unterstützen zu können, brauchst du ein Grundverständnis davon, wie Bewegung überhaupt funktioniert. Keine Sorge — du musst kein Anatomie-Experte werden. Aber einige Zusammenhänge helfen dir enorm in der täglichen Arbeit.

Unser Bewegungsapparat hat zwei Teile, die zusammenarbeiten wie Gerüst und Motor. Der passive Teil — Knochen, Knorpel, Gelenke und Bänder — bildet das tragende Gerüst. Er gibt dem Körper Stabilität und Form. Über 200 Knochen machen dieses Gerüst aus. Der aktive Teil — die Skelettmuskulatur — ist der Motor: Rund 400 Muskeln setzen die Knochen in Bewegung, indem sie sich zusammenziehen und wieder entspannen.

Für die pflegerische Praxis sind besonders die großen Gelenke relevant. Kugelgelenke wie Schulter und Hüfte erlauben Bewegung in alle Richtungen — deshalb kannst du deinen Arm kreisen lassen. Scharniergelenke wie Knie und Ellbogen ermöglichen vor allem Beugung und Streckung, ähnlich wie eine Tür, die sich nur in eine Richtung öffnet. Der physiologische Bewegungsumfang beschreibt, wie weit ein gesundes Gelenk in jede Richtung bewegt werden kann. Dieses Wissen brauchst du, wenn du Kontrakturenprophylaxe betreibst — denn dort geht es darum, genau diesen Bewegungsumfang zu erhalten.

Eine besonders wichtige Erkenntnis für die Pflege: Muskeln bauen bei Nichtgebrauch erschreckend schnell ab. Schon nach wenigen Tagen Bettruhe lässt sich ein messbarer Verlust an Muskelmasse nachweisen. Bei älteren Menschen verläuft dieser Abbau noch schneller, während der Wiederaufbau deutlich länger dauert als bei jüngeren. Deswegen ist Frühmobilisation so dringend — jeder Tag im Bett zählt.

Stell dir einen älteren Menschen vor, der wegen einer Lungenentzündung eine Woche im Bett liegt. Der Muskelabbau in seinen Beinen kann so weit fortschreiten, dass er danach Wochen braucht, um wieder sicher gehen zu können. Das ist kein theoretisches Szenario, sondern pflegerischer Alltag auf jeder Station.`,
        contentB1: `Du willst Menschen bei der Bewegung helfen. Dafür musst du verstehen, wie Bewegung funktioniert. Keine Sorge — du musst kein Anatomie-Experte werden. Aber ein paar Dinge helfen dir sehr bei der täglichen Arbeit.

Unser Bewegungsapparat (= das System im Körper für Bewegung) hat zwei Teile. Sie arbeiten zusammen wie ein Gerüst und ein Motor. Der passive Teil sind Knochen, Knorpel, Gelenke und Bänder. Sie bilden das Gerüst. Sie geben dem Körper Stabilität und Form. Der Mensch hat über 200 Knochen. Der aktive Teil ist die Skelett-Muskulatur (= die Muskeln am Knochen). Sie sind der Motor. Rund 400 Muskeln bewegen die Knochen. Die Muskeln ziehen sich zusammen und entspannen sich wieder.

Für die Pflege sind besonders die großen Gelenke wichtig. Es gibt verschiedene Gelenk-Typen. Das Kugelgelenk findest du in der Schulter und der Hüfte. Es erlaubt Bewegung in alle Richtungen. Deshalb kannst du deinen Arm kreisen lassen. Das Scharniergelenk findest du im Knie und im Ellbogen. Es erlaubt Beugung und Streckung. Es funktioniert wie eine Tür. Die Tür öffnet sich nur in eine Richtung. Der physiologische Bewegungsumfang (= wie weit ein gesundes Gelenk sich bewegen kann) ist wichtig. Du brauchst dieses Wissen für die Kontrakturen-Prophylaxe (= Vorbeugung gegen Gelenk-Versteifung). Dort geht es darum, diesen Bewegungsumfang zu erhalten.

Ein sehr wichtiger Punkt für die Pflege: Muskeln bauen bei Nicht-Gebrauch schnell ab. Schon nach wenigen Tagen Bettruhe verliert der Mensch Muskelmasse. Das kann man messen. Bei älteren Menschen geht der Abbau noch schneller. Der Wieder-Aufbau dauert aber viel länger als bei jüngeren Menschen. Deshalb ist Früh-Mobilisation so dringend. Jeder Tag im Bett zählt.

Stell dir einen älteren Menschen vor. Er liegt wegen einer Lungen-Entzündung eine Woche im Bett. Der Muskelabbau in seinen Beinen kann so stark sein, dass er danach Wochen braucht, um wieder sicher gehen zu können. Das ist kein Beispiel aus dem Lehrbuch. Das passiert jeden Tag auf jeder Station.`,
        quelle: "Vgl. Anatomie-Grundlagenwissen; DNQP 2020",
      },
    ],
  },

  // ── Kapitel 3: Kinästhetik ──────────────────────────
  {
    kapitelId: "le06-kap-03",
    titel: "Kinästhetik — Bewegung verstehen lernen",
    titelB1: "Kinästhetik — Bewegung verstehen",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Kinästhetik unterstützt vorhandene Eigenbewegung statt passiv zu transportieren. Das schützt den pflegebedürftigen Menschen und den Rücken der Pflegekraft.",
    zusammenfassungB1: "Kinästhetik heißt: Bewegung unterstützen statt tragen. Das schützt den Menschen und deinen Rücken.",
    glossarBegriffe: ["Kinästhetik", "Eigenbewegung", "Ressourcenorientierung"],
    bloecke: [
      {
        type: "text",
        contentC1: `Hast du schon einmal versucht, eine Person, die komplett schlaff liegt, allein im Bett nach oben zu ziehen? Falls ja, weißt du: Das kostet enorme Kraft und geht auf den Rücken. Genau hier setzt Kinästhetik an — mit einer Idee, die zunächst simpel klingt, aber die pflegerische Praxis grundlegend verändert hat.

Kinästhetik ist ein Handlungskonzept, das sich mit menschlicher Bewegung und Aktivität beschäftigt. Entwickelt wurde es in den 1970er-Jahren von Dr. Frank Hatch und Dr. Lenny Maietta, ursprünglich als Bewegungslehre, die dann auf die Pflege übertragen wurde. Der Name kommt vom griechischen „kinesis" (Bewegung) und „aisthesis" (Wahrnehmung) — Kinästhetik beschreibt also die Wahrnehmung der eigenen Bewegung.

Der Grundgedanke: Pflegende sollen die vorhandene Bewegungsfähigkeit eines pflegebedürftigen Menschen unterstützen, anstatt seinen Körper passiv von A nach B zu transportieren. Der pflegebedürftige Mensch wird als aktiver Partner in den Bewegungsablauf einbezogen. Selbst wenn jemand schwer eingeschränkt ist, gibt es fast immer Restbewegungen, die genutzt werden können — eine kleine Drehung des Kopfes, ein leichtes Abstoßen mit dem Fuß, das Greifen an einer Bettstange.

Das hat einen doppelten Nutzen. Für den pflegebedürftigen Menschen: Er behält seine Würde als handelndes Wesen, er trainiert seine verbliebenen Fähigkeiten, und er erlebt Selbstwirksamkeit. Für die Pflegefachperson: Die Rückenbelastung sinkt erheblich, weil sie nicht mehr gegen die Schwerkraft hebt, sondern Bewegung initiiert und begleitet. Das ist kein kleiner Vorteil — Rückenbeschwerden und Muskel-Skelett-Erkrankungen gehören zu den häufigsten Berufskrankheiten in der Pflege. Auch das Arbeitsschutzgesetz verpflichtet Arbeitgeber dazu, gesundheitsschonende Arbeitsbedingungen zu schaffen (ArbSchG).

In den folgenden drei Kapiteln lernst du die sechs Konzepte der Kinästhetik kennen — das sind die Bausteine, aus denen sich jede kinästhetische Mobilisation zusammensetzt.`,
        contentB1: `Hast du schon einmal versucht, eine Person im Bett nach oben zu ziehen? Eine Person, die ganz schlaff liegt? Wenn ja, weißt du: Das kostet sehr viel Kraft. Und es geht auf den Rücken. Genau hier hilft die Kinästhetik (= eine Methode für Bewegung in der Pflege). Die Idee klingt einfach. Aber sie hat die Pflege-Praxis sehr verändert.

Kinästhetik beschäftigt sich mit menschlicher Bewegung und Aktivität. Dr. Frank Hatch und Dr. Lenny Maietta haben sie in den 1970er-Jahren entwickelt. Zuerst war es eine Bewegungs-Lehre. Dann wurde sie auf die Pflege übertragen. Der Name kommt aus dem Griechischen: „kinesis" bedeutet Bewegung. „aisthesis" bedeutet Wahrnehmung. Kinästhetik bedeutet also: die eigene Bewegung wahrnehmen.

Der Grundgedanke ist: Du sollst die vorhandene Bewegungs-Fähigkeit eines Menschen unterstützen. Du sollst seinen Körper nicht einfach von A nach B tragen. Der pflegebedürftige Mensch ist ein aktiver Partner. Er macht bei der Bewegung mit. Selbst wenn jemand schwer eingeschränkt ist: Es gibt fast immer Restbewegungen. Vielleicht dreht er den Kopf ein wenig. Vielleicht stößt er sich leicht mit dem Fuß ab. Vielleicht greift er an die Bettstange. Das kannst du nutzen.

Das hat einen doppelten Nutzen. Für den pflegebedürftigen Menschen: Er behält seine Würde. Er trainiert seine Fähigkeiten, die noch da sind. Er erlebt: Ich kann noch etwas. Für dich als Pflege-Fachperson: Die Belastung für deinen Rücken wird viel weniger. Du hebst nicht mehr gegen die Schwerkraft. Du startest eine Bewegung und begleitest sie. Das ist kein kleiner Vorteil. Rücken-Beschwerden und Muskel-Skelett-Erkrankungen (= Probleme mit Muskeln und Knochen) gehören zu den häufigsten Berufs-Krankheiten in der Pflege. Das Arbeitsschutzgesetz (ArbSchG) sagt: Der Arbeitgeber muss für gesunde Arbeitsbedingungen sorgen.

In den nächsten drei Kapiteln lernst du die sechs Konzepte der Kinästhetik kennen. Das sind die Bausteine. Aus ihnen setzt sich jede kinästhetische Mobilisation (= Bewegungsunterstützung) zusammen.`,
        quelle: "Vgl. Hatch/Maietta, 1970er; ArbSchG; BGW-Statistiken",
      },
    ],
  },

  // ── Kapitel 4: Kinästhetik-Konzepte (Teil 1) ──────────────────────────
  {
    kapitelId: "le06-kap-04",
    titel: "Die 6 Konzepte der Kinästhetik (Teil 1): Interaktion und Funktionale Anatomie",
    titelB1: "Kinästhetik-Konzepte (Teil 1): Interaktion und Funktionale Anatomie",
    tag: "pflege",
    geschaetzteDauer: 6,
    zusammenfassung: "Die Funktionale Anatomie unterteilt den Körper in 7 Massen und 6 Zwischenräume. Goldene Regel: An den Massen unterstützen, Zwischenräume frei lassen.",
    zusammenfassungB1: "Der Körper hat 7 Massen und 6 Zwischenräume. Goldene Regel: An den Massen anfassen, Zwischenräume frei lassen.",
    glossarBegriffe: ["Funktionale Anatomie", "Massen (kinästhetisch)", "Zwischenräume (kinästhetisch)", "Plexus brachialis"],
    bloecke: [
      {
        type: "text",
        contentC1: `Die Kinästhetik besteht aus sechs Konzepten, die zusammen beschreiben, wie menschliche Bewegung funktioniert. In diesem Kapitel schauen wir uns die ersten zwei an — und einen Anfängerfehler, den du ab sofort vermeiden wirst.

**Konzept 1: Interaktion.** Bevor du einen pflegebedürftigen Menschen bewegst, musst du erst einmal wahrnehmen, was er tun kann und wo er Unterstützung braucht. Interaktion beginnt mit dem Kontakt — über die fünf Sinne (sehen, hören, fühlen, riechen, schmecken) und das kinästhetische Sinnessystem. Dieses sechste Sinnessystem ist weniger bekannt, aber enorm wichtig: Es ermöglicht dir, die Position und Bewegung deines eigenen Körpers wahrzunehmen, auch mit geschlossenen Augen. Genau dieses System nutzt du, wenn du die Bewegungsimpulse eines pflegebedürftigen Menschen spürst und darauf reagierst.

**Konzept 2: Funktionale Anatomie.** Die Kinästhetik betrachtet den Körper nicht als Summe von 200 Knochen, sondern vereinfacht ihn auf 7 Massen und 6 Zwischenräume. Die sieben Massen sind die großen, stabilen Körperteile: Kopf, Brustkorb, Becken, zwei Arme, zwei Beine. Die sechs Zwischenräume sind die beweglichen Verbindungen dazwischen: Hals, Taille, zwei Achselhöhlen, zwei Leisten. Diese Einteilung hat einen unmittelbaren praktischen Nutzen.

Die goldene Regel lautet: Unterstütze an den Massen, lass die Zwischenräume frei. Warum? Weil in den Zwischenräumen die Gelenke liegen, die für Bewegung sorgen. Greifst du in einen Zwischenraum — zum Beispiel unter die Achselhöhle —, blockierst du genau die Gelenkbewegung, die der Mensch für aktive Mitarbeit bräuchte.

Dieser Fehler ist der häufigste bei Berufsanfängern: Unter die Achseln greifen und den Menschen hochheben. Die Folgen sind dreifach problematisch. Erstens wird der Brustkorb blockiert, sodass keine Drehbewegung mehr möglich ist. Zweitens trägst du als Pflegeperson das gesamte Körpergewicht allein. Drittens kann der Zug am Armnervengeflecht (Plexus brachialis) Schmerzen und Nervenschädigungen verursachen. Stattdessen: Greife an Schulter und Becken — das sind Massen, dort gibst du Stabilität, ohne Bewegung einzuschränken.`,
        contentB1: `Die Kinästhetik hat sechs Konzepte. Sie beschreiben zusammen, wie menschliche Bewegung funktioniert. In diesem Kapitel lernst du die ersten zwei kennen. Und du lernst einen Fehler kennen, den du ab sofort vermeiden wirst.

**Konzept 1: Interaktion.** Bevor du einen Menschen bewegst, musst du erst wahrnehmen: Was kann er tun? Wo braucht er Hilfe? Interaktion beginnt mit dem Kontakt. Du nutzt deine fünf Sinne: sehen, hören, fühlen, riechen, schmecken. Und du nutzt das kinästhetische Sinnes-System. Dieses sechste Sinnes-System ist weniger bekannt. Aber es ist sehr wichtig. Es hilft dir, die Position und Bewegung deines eigenen Körpers wahrzunehmen. Auch mit geschlossenen Augen. Genau dieses System nutzt du, wenn du die Bewegung eines pflegebedürftigen Menschen spürst. Du reagierst dann darauf.

**Konzept 2: Funktionale Anatomie.** Die Kinästhetik betrachtet den Körper einfach: 7 Massen und 6 Zwischenräume. Die sieben Massen sind die großen, stabilen Körperteile: Kopf, Brustkorb, Becken, zwei Arme, zwei Beine. Die sechs Zwischenräume sind die beweglichen Verbindungen dazwischen: Hals, Taille, zwei Achselhöhlen, zwei Leisten. Diese Einteilung hat einen direkten Nutzen für die Praxis.

Die goldene Regel lautet: Unterstütze an den Massen. Lass die Zwischenräume frei. Warum? In den Zwischenräumen liegen die Gelenke. Die Gelenke sorgen für Bewegung. Greifst du in einen Zwischenraum — zum Beispiel unter die Achselhöhle —, blockierst du genau die Bewegung. Der Mensch kann dann nicht mehr mitarbeiten.

Dieser Fehler ist der häufigste bei Anfängern: Unter die Achseln greifen und den Menschen hochheben. Das hat drei Probleme. Erstens: Der Brustkorb wird blockiert. Eine Drehbewegung ist nicht mehr möglich. Zweitens: Du als Pflege-Person trägst das ganze Körpergewicht allein. Drittens: Der Zug am Arm-Nervengeflecht (= Plexus brachialis) kann Schmerzen und Nerven-Schäden verursachen. Besser: Greife an Schulter und Becken. Das sind Massen. Dort gibst du Stabilität. Du schränkst die Bewegung nicht ein.`,
        quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
      },
    ],
  },

  // ── Kapitel 5: Kinästhetik-Konzepte (Teil 2) ──────────────────────────
  {
    kapitelId: "le06-kap-05",
    titel: "Die 6 Konzepte der Kinästhetik (Teil 2): Bewegung und Anstrengung",
    titelB1: "Kinästhetik-Konzepte (Teil 2): Bewegung und Anstrengung",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Parallele Bewegungen sind kraftaufwändig, spiralige Bewegungen physiologisch und leichter. Kleinkinder nutzen intuitiv spiralige Muster beim Aufrichten.",
    zusammenfassungB1: "Parallele Bewegungen brauchen viel Kraft. Spiralige Bewegungen (= Drehbewegungen) sind natürlicher und leichter.",
    glossarBegriffe: ["Haltungsbewegung", "Transportbewegung", "Parallele Bewegung", "Spiralige Bewegung"],
    bloecke: [
      {
        type: "text",
        contentC1: `Jetzt wird es richtig praktisch. Die nächsten zwei Konzepte betreffen direkt die Art, wie du einen Menschen bei der Bewegung unterstützt — und sie erklären, warum manche Bewegungsabläufe mühelos wirken und andere wie ein Kraftakt.

**Konzept 3: Menschliche Bewegung.** Jede Bewegung lässt sich in zwei Arten unterteilen. Haltungsbewegung hält den Körper gegen die Schwerkraft in einer Position — zum Beispiel aufrecht sitzen, ohne umzukippen. Transportbewegung verlagert den Körper durch den Raum — zum Beispiel sich vom Bett zur Bettkante bewegen. Für jede Mobilisation brauchst du beides gleichzeitig: Der Mensch muss seinen Oberkörper halten können (Haltungsbewegung), während er sich zur Seite bewegt (Transportbewegung).

Entscheidend ist der Unterschied zwischen paralleler und spiraliger Bewegung. Bei der parallelen Bewegung arbeiten rechte und linke Körperhälfte gleichzeitig über eine einzige Achse — stell dir vor, jemand hebt einen Karton gerade nach oben. Das kostet viel Kraft. Bei der spiraligen Bewegung dreht sich der Körper über zwei Achsen — wie ein Kind, das sich vom Rücken auf den Bauch rollt. Diese Drehbewegung ist physiologisch, kraftsparend und natürlich.

Beobachte einmal ein Kleinkind, das sich vom Liegen aufrichtet. Es dreht sich über die Seite, stützt sich ab und kommt spiralförmig hoch. Kein Kind richtet sich parallel — also mit beiden Schultern gleichzeitig — gerade nach oben auf. Genau diese spiralige Bewegung solltest du auch in der Pflege nutzen und fördern.

**Konzept 4: Anstrengung.** Bewegung entsteht durch zwei Grundkräfte: Drücken und Ziehen. Der pflegebedürftige Mensch soll sich aktiv abdrücken — zum Beispiel mit der Hand an der Bettkante — oder sich heranziehen — zum Beispiel am Bettgalgen. Deine Aufgabe als Pflegeperson ist es, Unterstützung zu geben, aber nicht die gesamte Bewegung zu übernehmen. Jedes bisschen Eigenaktivität zählt.`,
        contentB1: `Jetzt wird es richtig praktisch. Die nächsten zwei Konzepte betreffen direkt die Art, wie du einen Menschen bei der Bewegung unterstützt. Sie erklären, warum manche Bewegungen leicht wirken und andere sehr schwer.

**Konzept 3: Menschliche Bewegung.** Jede Bewegung hat zwei Arten. Die Haltungsbewegung hält den Körper gegen die Schwerkraft in einer Position. Zum Beispiel: aufrecht sitzen, ohne umzukippen. Die Transportbewegung bewegt den Körper durch den Raum. Zum Beispiel: sich vom Bett zur Bettkante bewegen. Für jede Mobilisation brauchst du beides gleichzeitig. Der Mensch muss seinen Oberkörper halten können. Gleichzeitig bewegt er sich zur Seite.

Jetzt kommt ein wichtiger Unterschied. Es gibt parallele und spiralige Bewegung. Bei der parallelen Bewegung arbeiten die rechte und die linke Körperhälfte gleichzeitig. Sie arbeiten über eine einzige Achse. Stell dir vor: Jemand hebt einen Karton gerade nach oben. Das kostet viel Kraft. Bei der spiraligen Bewegung dreht sich der Körper über zwei Achsen. Wie ein Kind, das sich vom Rücken auf den Bauch rollt. Diese Drehbewegung ist natürlich. Sie spart Kraft.

Beobachte einmal ein kleines Kind. Es richtet sich vom Liegen auf. Es dreht sich über die Seite. Es stützt sich ab. Es kommt spiralförmig hoch. Kein Kind richtet sich gerade nach oben auf. Mit beiden Schultern gleichzeitig. Genau diese spiralige Bewegung sollst du auch in der Pflege nutzen und fördern.

**Konzept 4: Anstrengung.** Bewegung entsteht durch zwei Grundkräfte: Drücken und Ziehen. Der pflegebedürftige Mensch soll sich aktiv abdrücken. Zum Beispiel mit der Hand an der Bettkante. Oder er soll sich heranziehen. Zum Beispiel am Bettgalgen (= Griff über dem Bett). Deine Aufgabe als Pflege-Person: Du gibst Unterstützung. Aber du übernimmst nicht die ganze Bewegung. Jedes kleine Stück Eigenaktivität zählt.`,
        quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
      },
    ],
  },

  // ── Kapitel 6: Kinästhetik-Konzepte (Teil 3) ──────────────────────────
  {
    kapitelId: "le06-kap-06",
    titel: "Die 6 Konzepte der Kinästhetik (Teil 3): Funktion und Umgebung",
    titelB1: "Kinästhetik-Konzepte (Teil 3): Funktion und Umgebung",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "7 Grundpositionen von Rückenlage (stabilste) bis Zweibeinstand (instabilste). Mobilisation erfolgt schrittweise, nie direkt vom Liegen ins Stehen.",
    zusammenfassungB1: "Es gibt 7 Grund-Positionen. Rückenlage ist die stabilste. Stehen auf zwei Beinen ist die instabilste. Mobilisation geht Schritt für Schritt.",
    glossarBegriffe: ["Grundpositionen", "Schwerpunkt / Auflagefläche", "Umgebungsgestaltung"],
    bloecke: [
      {
        type: "text",
        contentC1: `Die letzten zwei Konzepte der Kinästhetik verbinden die Theorie mit der konkreten Situation: Welche Positionen kann ein Mensch einnehmen, und wie muss die Umgebung gestaltet sein, damit Bewegung gelingt?

**Konzept 5: Menschliche Funktion.** Die Kinästhetik ordnet die möglichen Körperhaltungen des Menschen auf einer Skala mit sieben Stufen an — sortiert vom sichersten bis zum anspruchsvollsten Gleichgewicht. Ganz unten beginnt diese Skala mit der Rückenlage, in der die Auflagefläche am größten und der Schwerpunkt am tiefsten liegt. Stufe 2 ist die Bauchlage, bei der sich der Oberkörper auf den Ellbogen aufstützt. Auf Stufe 3 folgt der Sitz mit gekreuzten Beinen (Schneidersitz). Stufe 4 ist der Vierfüßlerstand auf Händen und Knien. Stufe 5 belastet zusätzlich: Eines der beiden Beine wird in den Kniestand geführt, während das andere aktiv hält. Stufe 6 bringt die Person ins einbeinige Stehen, und erst auf Stufe 7 steht sie frei auf beiden Füßen. Der Zusammenhang ist einfach: je höher der Körperschwerpunkt wandert und je kleiner die Fläche wird, auf der Gewicht ruht, desto höher die Anforderung an Gleichgewicht und Muskelarbeit.

Für die Pflegepraxis gibt es eine wichtige Regel: Gehe immer schrittweise von einer Grundposition zur nächsten. Einen pflegebedürftigen Menschen direkt vom Liegen ins Stehen zu bringen ist weder sicher noch kinästhetisch sinnvoll. Stattdessen: Rückenlage → Seitenlage → Sitzen an der Bettkante → Stehen. Jede Zwischenposition ist ein Checkpoint, an dem du prüfst: Ist der Mensch stabil? Ist der Kreislauf in Ordnung? Kann er den nächsten Schritt mitmachen?

**Konzept 6: Umgebung.** Die beste Bewegungskompetenz nützt nichts, wenn die Umgebung Bewegung verhindert. Drei Dinge sind entscheidend. Erstens die Betthöhe: Im Sitzen müssen die Füße des pflegebedürftigen Menschen den Boden berühren — sonst hat er keinen festen Halt zum Abdrücken. Zweitens feste Unterlagen: Eine weiche Matratze mag bequem sein, erschwert aber das Drehen und Aufrichten erheblich. Drittens Hilfsmittel in Reichweite: Bettgalgen, Aufrichthilfe oder Rutschbrett müssen vor der Mobilisation bereitstehen, nicht erst gesucht werden, wenn der Mensch schon an der Bettkante sitzt.

Eine Pflegefachperson, die kinästhetisch arbeitet, richtet vor der Mobilisation immer zuerst die Umgebung ein. Das spart Zeit, schafft Sicherheit und zeigt dem pflegebedürftigen Menschen: Hier ist alles vorbereitet, du kannst dich darauf einlassen.`,
        contentB1: `Die letzten zwei Konzepte der Kinästhetik verbinden die Theorie mit der Praxis. Welche Positionen kann ein Mensch einnehmen? Und wie muss die Umgebung sein, damit Bewegung gelingt?

**Konzept 5: Menschliche Funktion.** Die Kinästhetik beschreibt eine Stufen-Leiter mit sieben Körperhaltungen. Sie ist geordnet: von der sichersten Haltung bis zur schwierigsten. Stufe 1 ist die Rückenlage. Hier ist die Auflagefläche groß. Der Körper ist sehr stabil. Stufe 2 ist die Bauchlage. Der Oberkörper stützt sich auf die Ellbogen. Stufe 3 ist der Sitz mit gekreuzten Beinen (Schneidersitz). Stufe 4 ist der Vierfüßlerstand auf Händen und Knien. Stufe 5: Du gehst in den Kniestand — ein Bein steht vorne, das andere hinten. Stufe 6: Stehen auf einem Bein. Stufe 7: freies Stehen auf beiden Beinen. Die Regel dahinter ist einfach: Je höher der Schwerpunkt und je kleiner die Auflagefläche, desto schwieriger die Position.

Für die Pflege-Praxis gibt es eine wichtige Regel: Gehe immer schrittweise von einer Position zur nächsten. Du darfst einen pflegebedürftigen Menschen nicht direkt vom Liegen ins Stehen bringen. Das ist nicht sicher. Der richtige Weg ist: Rückenlage → Seitenlage → Sitzen an der Bettkante → Stehen. Jede Zwischen-Position ist ein Prüfpunkt. Du fragst: Ist der Mensch stabil? Ist der Kreislauf in Ordnung? Kann er den nächsten Schritt mitmachen?

**Konzept 6: Umgebung.** Die beste Bewegungs-Kompetenz hilft nichts, wenn die Umgebung Bewegung verhindert. Drei Dinge sind wichtig. Erstens die Betthöhe: Wenn der Mensch sitzt, müssen seine Füße den Boden berühren. Sonst hat er keinen festen Halt zum Abdrücken. Zweitens feste Unterlagen: Eine weiche Matratze ist bequem. Aber sie macht das Drehen und Aufrichten schwer. Drittens Hilfsmittel in Reichweite: Bettgalgen, Aufrichthilfe oder Rutschbrett müssen vor der Mobilisation bereitstehen. Du suchst sie nicht erst, wenn der Mensch schon an der Bettkante sitzt.

Eine Pflege-Fachperson, die kinästhetisch arbeitet, bereitet vor der Mobilisation immer zuerst die Umgebung vor. Das spart Zeit. Es schafft Sicherheit. Und es zeigt dem pflegebedürftigen Menschen: Alles ist vorbereitet. Du kannst dich darauf einlassen.`,
        quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
      },
    ],
  },

  // ── Kapitel 7: Kinästhetik Infant Handling ──────────────────────────
  {
    kapitelId: "le06-kap-07",
    titel: "Kinästhetik Infant Handling — Säuglinge richtig bewegen",
    titelB1: "Kinästhetik Infant Handling — Babys richtig bewegen",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Säuglinge werden über die Seite aufgenommen (spiralige Bewegung), nie parallel hochgehoben. Elternanleitung im Handling ist pflegerischer Auftrag.",
    zusammenfassungB1: "Babys immer über die Seite aufnehmen. Nie gerade hochheben. Den Eltern das richtige Handling zeigen ist eine wichtige Aufgabe.",
    glossarBegriffe: ["Infant Handling", "Vestibularsystem", "Spiralige Aufnahme"],
    bloecke: [
      {
        type: "text",
        contentC1: `Die Prinzipien der Kinästhetik gelten nicht nur für erwachsene pflegebedürftige Menschen — sie lassen sich direkt auf die Versorgung von Neugeborenen und Säuglingen übertragen. In der Kinderkrankenpflege und der Neonatologie spricht man vom Kinästhetik Infant Handling.

Die zentrale Technik: Einen Säugling nimmst du immer über die Seite auf, nicht parallel nach oben. Konkret bedeutet das: Du drehst das Kind sanft auf die Seite und hebst es in der Drehbewegung hoch. Beim Ablegen gehst du den umgekehrten Weg — die Füße des Säuglings berühren zuerst die Unterlage, dann führst du ihn über die Seitenlage in die Rückenlage.

Warum dieser Aufwand? Weil ein Säugling nicht einfach ein kleiner Erwachsener ist, sondern ein Wesen mit einem sehr empfindlichen Gleichgewichtssystem. Das Vestibularsystem — das Organ im Innenohr, das uns Informationen über Lage und Beschleunigung liefert — reagiert bei Neugeborenen besonders sensibel auf plötzliche Lageveränderungen. Wenn du einen Säugling ruckartig parallel hochhebst, kann das eine vestibuläre Überreizung auslösen: Das Kind erschrickt, weint, streckt reflexartig Arme und Beine von sich. Die spiralige Aufnahme dagegen gibt dem Gleichgewichtsorgan Zeit, sich an die neue Position anzupassen.

Stell dir vor, Vater Kemal steht unsicher neben dem Bettchen seiner frühgeborenen Tochter Nisa. Er traut sich kaum, sie hochzunehmen — „sie ist so klein, ich habe Angst ihr wehzutun." Genau hier zeigst du ihm die Technik: Sanft zur Seite drehen, in der Drehung aufnehmen, nah am Körper halten. Wenn er es unter Anleitung einmal richtig gemacht hat, gewinnt er Sicherheit. Elternanleitung im Handling ist ein wichtiger Teil der pflegerischen Arbeit auf Wochenbett- und Neonatologie-Stationen.`,
        contentB1: `Die Regeln der Kinästhetik gelten nicht nur für erwachsene Menschen. Du kannst sie auch bei Neugeborenen und Säuglingen anwenden. In der Kinder-Krankenpflege und der Neonatologie (= Station für Frühgeborene) spricht man vom Kinästhetik Infant Handling (= kinästhetisches Handling von Säuglingen).

Die wichtigste Technik: Du nimmst einen Säugling immer über die Seite auf. Nicht gerade nach oben. Du drehst das Kind sanft auf die Seite. Dann hebst du es in der Drehbewegung hoch. Beim Ablegen gehst du den Weg zurück. Die Füße des Säuglings berühren zuerst die Unterlage. Dann führst du ihn über die Seitenlage in die Rückenlage.

Warum dieser Aufwand? Ein Säugling ist kein kleiner Erwachsener. Sein Gleichgewichts-System ist sehr empfindlich. Das Vestibular-System (= das Organ im Innenohr für das Gleichgewicht) reagiert bei Neugeborenen besonders sensibel auf plötzliche Veränderungen der Lage. Wenn du einen Säugling schnell und gerade hochhebst, kann das eine Überreizung auslösen. Das Kind erschrickt. Es weint. Es streckt die Arme und Beine von sich. Die spiralige Aufnahme (= über die Seite hochnehmen) gibt dem Gleichgewichts-Organ Zeit. Es kann sich an die neue Position anpassen.

Stell dir vor: Vater Kemal steht unsicher neben dem Bettchen seiner frühgeborenen Tochter Nisa. Er traut sich kaum, sie hochzunehmen. „Sie ist so klein, ich habe Angst ihr wehzutun." Genau hier zeigst du ihm die Technik: Sanft zur Seite drehen. In der Drehung aufnehmen. Nah am Körper halten. Wenn er es einmal unter Anleitung richtig gemacht hat, gewinnt er Sicherheit. Eltern-Anleitung beim Handling ist ein wichtiger Teil der pflegerischen Arbeit. Besonders auf Wochenbett- und Neonatologie-Stationen.`,
        quelle: "Vgl. Hatch/Maietta, Kinästhetik Infant Handling",
      },
    ],
  },

  // ── Kapitel 8–32 werden als kompakte Blöcke fortgesetzt ──────────────────
  // Die vollständigen C1/B1 Texte für alle 32 Kapitel sind hier enthalten.

  // ── Kapitel 8: Positionierung Grundprinzipien ──────────────────────────
  {
    kapitelId: "le06-kap-08",
    titel: "Positionierung: Grundprinzipien",
    titelB1: "Positionierung: Die Grundregeln",
    tag: "pflege",
    geschaetzteDauer: 6,
    zusammenfassung: "Positionierung ist eine pflegerische Maßnahme mit definiertem Ziel. Umlagerungsintervalle müssen individuell festgelegt werden — die 2-Stunden-Regel ist nicht evidenzbasiert.",
    zusammenfassungB1: "Positionierung hat immer ein Ziel. Wie oft du umlagern musst, ist individuell. „Alle 2 Stunden“ ist nicht bewiesen.",
    glossarBegriffe: ["Positionierung", "Scherkraft", "Fingertest"],
    bloecke: [
      {
        type: "text",
        contentC1: `In der Pflege wird oft das Wort „Lagerung" verwendet. Der modernere Begriff ist Positionierung — und er beschreibt etwas Wichtigeres, als es zunächst klingt. Positionierung ist nicht einfach „jemanden anders hinlegen". Es ist eine pflegerische Maßnahme mit einem definierten therapeutischen Ziel: Druckentlastung zur Dekubitusprophylaxe, verbesserte Atmung bei Lungenerkrankungen, Schmerzlinderung nach einer Operation oder Förderung der Eigenbewegung.

Vier Grundsätze solltest du bei jeder Positionierung beachten. Erstens: Der pflegebedürftige Mensch muss sich bequem fühlen. Klingt banal, ist aber entscheidend — wenn er sich unwohl fühlt, wird er sich sofort wieder in eine andere Position bewegen, und die therapeutische Wirkung ist dahin. Zweitens: Hilfsmittel gezielt einsetzen. Jedes überflüssige Kissen nimmt Bewegungsfreiheit. Positionierung unterstützt — sie fesselt nicht. Drittens: Scherkräfte vermeiden. Scherkräfte entstehen, wenn die Haut gegen eine Unterlage verschoben wird, zum Beispiel wenn ein Mensch im Bett nach unten rutscht. Sie schädigen die Hautschichten und begünstigen einen Dekubitus. Viertens: Individuelle Zeitintervalle statt starrer Schemata.

Gerade der letzte Punkt ist wichtig: „Alle zwei Stunden umlagern" ist eine Faustregel, die viele Einrichtungen noch anwenden. Der DNQP-Expertenstandard Dekubitusprophylaxe (2017) betont hingegen, dass Umlagerungsintervalle individuell festgelegt werden müssen. Das Instrument dafür ist der Fingertest: Du drückst mit dem Finger auf eine gerötete Hautstelle über einem Knochenvorsprung. Wird die Stelle weiß und normalisiert sich nach dem Loslassen — dann ist es eine wegdrückbare Rötung, ein Warnsignal, aber noch kein Dekubitus. Bleibt die Rötung dagegen bestehen (nicht wegdrückbar), liegt ein Dekubitus Kategorie I vor (NPUAP/EPUAP, 2014), und du musst sofort für Druckentlastung sorgen.`,
        contentB1: `In der Pflege sagt man oft „Lagerung". Der modernere Begriff ist Positionierung. Positionierung bedeutet nicht einfach: jemanden anders hinlegen. Es ist eine pflegerische Maßnahme mit einem klaren Ziel. Zum Beispiel: Druck-Entlastung gegen Dekubitus (= Druckgeschwür). Oder bessere Atmung bei Lungen-Krankheiten. Oder Schmerz-Linderung nach einer Operation. Oder Förderung der Eigenbewegung.

Vier Grundsätze musst du bei jeder Positionierung beachten. Erstens: Der Mensch muss sich bequem fühlen. Das klingt einfach. Aber es ist wichtig. Wenn er sich unwohl fühlt, wird er sich sofort wieder anders hinlegen. Dann ist die Wirkung weg. Zweitens: Hilfsmittel gezielt einsetzen. Jedes überflüssige Kissen nimmt Bewegungs-Freiheit. Positionierung unterstützt — sie fesselt nicht. Drittens: Scherkräfte vermeiden. Scherkräfte (= wenn die Haut gegen die Unterlage verschoben wird) entstehen zum Beispiel, wenn ein Mensch im Bett nach unten rutscht. Sie schädigen die Haut und begünstigen einen Dekubitus. Viertens: Die Zeit zwischen den Positionswechseln muss individuell sein. Es gibt kein festes Schema.

Der letzte Punkt ist besonders wichtig. „Alle zwei Stunden umlagern" ist eine alte Faustregel. Viele Einrichtungen wenden sie noch an. Aber der DNQP-Expertenstandard Dekubitus-Prophylaxe (2017) sagt klar: Die Zeitabstände müssen individuell festgelegt werden. Das Werkzeug dafür ist der Fingertest. Du drückst mit dem Finger auf eine gerötete Hautstelle über einem Knochen-Vorsprung. Wird die Stelle weiß und normalisiert sich nach dem Loslassen? Dann ist es eine wegdrückbare Rötung. Das ist ein Warnsignal. Aber es ist noch kein Dekubitus. Bleibt die Rötung bestehen? Dann ist sie nicht wegdrückbar. Das ist ein Dekubitus Kategorie I (NPUAP/EPUAP, 2014). Du musst sofort für Druck-Entlastung sorgen.`,
        quelle: "Vgl. DNQP 2017; NPUAP/EPUAP 2014",
      },
    ],
  },

  // ── Kapitel 9: Rückenlage und Oberkörperhochlage ──────────────────────────
  {
    kapitelId: "le06-kap-09",
    titel: "Positionierungsarten (Teil 1): Rückenlage und Oberkörperhochlage",
    titelB1: "Positionierungsarten (Teil 1): Rückenlage und Oberkörper hoch",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "In der Rückenlage sind Hinterhaupt, Schulterblätter, Kreuzbein und Fersen dekubitusgefährdet. Bei Oberkörperhochlage drohen Scherkräfte durch Herunterrutschen.",
    zusammenfassungB1: "In Rückenlage sind Hinterkopf, Schulterblätter, Kreuzbein und Fersen gefährdet. Bei Oberkörper hoch: Der Mensch rutscht nach unten — das erzeugt Scher-Kräfte.",
    glossarBegriffe: ["Rückenlage", "Oberkörperhochlage", "Prädilektionsstelle"],
    bloecke: [
      {
        type: "text",
        contentC1: `Jetzt schauen wir uns die wichtigsten Positionierungsarten an — beginnend mit den zwei, die du am häufigsten auf Station sehen wirst.

**Die flache Rückenlage** kennt jeder: Der Mensch liegt auf dem Rücken, der Blick zur Decke. Sie wirkt harmlos, hat aber ihre Tücken. Eingesetzt wird sie gezielt nach bestimmten Wirbelsäulen-Operationen oder bei Bewusstlosigkeit. Im Pflegealltag ist sie die Position, in der viele pflegebedürftige Menschen landen, wenn niemand aktiv positioniert.

Die Risiken sind erheblich. In der Rückenlage liegen die typischen Prädilektionsstellen — Hinterhaupt, Schulterblätter, Kreuzbein und Fersen — direkt auf der Matratze auf. All diese Stellen befinden sich über Knochenvorsprüngen, und genau dort entsteht Dekubitusgefahr durch dauerhaften Druck. Zusätzlich werden die unteren Lungenabschnitte im Liegen schlechter belüftet, was das Pneumonierisiko erhöht. Deswegen gilt: Rückenlage nur so lange wie nötig, Positionswechsel so früh wie möglich.

**Die Oberkörperhochlage** ist eine der häufigsten Positionen im Krankenhaus. Das Kopfteil des Bettes wird je nach Bedarf auf 30°, 45° oder 90° gestellt. Bei 30° spricht man von leichter Oberkörperhochlage, bei 90° sitzt der Mensch praktisch aufrecht. Die Indikationen sind vielfältig: Atemerleichterung bei Lungenerkrankungen, Entlastung des Herzens bei Herzinsuffizienz, aufrechte Position zum Essen und Trinken.

Das Hauptrisiko bei der Oberkörperhochlage sind Scherkräfte. Stell dir vor, das Kopfteil wird hochgestellt, aber der Körper rutscht langsam nach unten. Dabei wird die Haut am Gesäß gegen die Unterlage verschoben, während die tieferen Gewebeschichten an Ort und Stelle bleiben. Diese gegensätzige Verschiebung schädigt die Blutgefäße im Gewebe. Die Lösung: Fußteil leicht anheben, Anti-Rutsch-Unterlage verwenden oder den pflegebedürftigen Menschen aktiv nach oben bewegen, bevor du das Kopfteil hochstellst.`,
        contentB1: `Jetzt schauen wir uns die wichtigsten Positionierungsarten an. Wir beginnen mit den zwei, die du am häufigsten auf Station sehen wirst.

**Die flache Rückenlage** kennt jeder. Der Mensch liegt auf dem Rücken. Er schaut zur Decke. Sie wirkt harmlos. Aber sie hat ihre Probleme. Man setzt sie gezielt ein: nach bestimmten Wirbelsäulen-Operationen oder bei Bewusstlosigkeit. Im Pflege-Alltag ist sie die Position, in der viele Menschen landen, wenn niemand aktiv positioniert.

Die Risiken sind groß. In der Rückenlage liegen die typischen Prädilektionsstellen (= Stellen, wo besonders oft Dekubitus entsteht) direkt auf der Matratze. Das sind: Hinterhaupt (= Hinterkopf), Schulterblätter, Kreuzbein und Fersen. Alle diese Stellen liegen über Knochen-Vorsprüngen. Genau dort entsteht Dekubitus-Gefahr durch dauerhaften Druck. Zusätzlich werden die unteren Lungen-Abschnitte im Liegen schlechter belüftet. Das erhöht das Pneumonie-Risiko (= Risiko für Lungen-Entzündung). Deshalb gilt: Rückenlage nur so lange wie nötig. Positionswechsel so früh wie möglich.

**Die Oberkörper-Hochlage** ist eine der häufigsten Positionen im Krankenhaus. Das Kopfteil vom Bett wird hochgestellt. Je nach Bedarf auf 30°, 45° oder 90°. Bei 30° spricht man von leichter Oberkörper-Hochlage. Bei 90° sitzt der Mensch fast aufrecht. Es gibt viele Gründe für diese Position: Bessere Atmung bei Lungen-Krankheiten. Entlastung des Herzens bei Herzschwäche. Aufrechte Position zum Essen und Trinken.

Das Hauptrisiko bei der Oberkörper-Hochlage sind Scherkräfte. Stell dir vor: Das Kopfteil wird hochgestellt. Aber der Körper rutscht langsam nach unten. Dabei wird die Haut am Gesäß gegen die Unterlage verschoben. Die tieferen Schichten bleiben an Ort und Stelle. Diese Verschiebung schädigt die Blutgefäße im Gewebe. Die Lösung: Das Fußteil leicht anheben. Eine Anti-Rutsch-Unterlage verwenden. Oder den Menschen aktiv nach oben bewegen, bevor du das Kopfteil hochstellst.`,
        quelle: "Vgl. DNQP 2017",
      },
    ],
  },

  // ── Kapitel 10: 30°- und 90°-Seitenlage ──────────────────────────
  {
    kapitelId: "le06-kap-10",
    titel: "Positionierungsarten (Teil 2): 30°-Seitenlage und 90°-Seitenlage",
    titelB1: "Positionierungsarten (Teil 2): 30°- und 90°-Seitenlage",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Die 30°-Seitenlage ist die zentrale Dekubitusprophylaxe-Position. Die 90°-Seitenlage erzeugt hohen Druck auf den Trochanter und ist dafür ungeeignet.",
    zusammenfassungB1: "Die 30°-Seitenlage ist die wichtigste Position gegen Dekubitus. Die 90°-Seitenlage drückt stark auf den Hüftknochen.",
    glossarBegriffe: ["30°-Seitenlage", "90°-Seitenlage", "Trochanter major"],
    bloecke: [
      {
        type: "text",
        contentC1: `In Prüfungen wird häufig gefragt: „Warum ist die 30°-Seitenlage besser geeignet für die Dekubitusprophylaxe als die 90°-Seitenlage?" Hier die Antwort — und sie hat mit Physik zu tun.

**Die 30°-Seitenlage** ist die wichtigste Positionierung in der Dekubitusprophylaxe. Der pflegebedürftige Mensch liegt leicht schräg auf dem Rücken, ein Kissen oder eine Lagerungsrolle im Rücken hält ihn in dieser Position. Der Winkel von 30° bewirkt etwas Entscheidendes: Das Körpergewicht verteilt sich auf eine große Fläche (den Rücken und die seitliche Gesäßhälfte), anstatt auf einem einzigen Knochenvorsprung zu lasten. Die Prädilektionsstellen Trochanter major (Knochenvorsprung am seitlichen Oberschenkel), Schulter und Kreuzbein werden gezielt entlastet. Der DNQP-Expertenstandard Dekubitusprophylaxe (2017) empfiehlt diese Position als Standardpositionierung bei Dekubitusrisiko.

**Die 90°-Seitenlage** sieht auf den ersten Blick ähnlich aus, hat aber ein völlig anderes Druckprofil. Der Mensch liegt auf der Seite, das gesamte Gewicht ruht auf einer schmalen Auflagefläche. Der Trochanter major — der seitliche Knochenvorsprung am Oberschenkel — trägt dabei den Hauptdruck. Genau deshalb ist die 90°-Seitenlage für die allgemeine Dekubitusprophylaxe ungeeignet: Sie erzeugt an einer der gefährdetsten Stellen hohen Druck statt Entlastung.

Trotzdem hat die 90°-Seitenlage ihren Platz. Im Bobath-Konzept wird sie bei Schlaganfall-Patienten eingesetzt, um die betroffene Seite gezielt zu belasten und zu stimulieren. Nach einer Lungen-Operation kann die Positionierung auf der operierten Seite die Belüftung der gesunden Lunge verbessern. Der Einsatz muss jedoch immer individuell begründet und zeitlich begrenzt sein.

Die Prüfungsfrage beantwortest du also so: Die 30°-Seitenlage verteilt das Gewicht auf eine große Fläche und entlastet den Trochanter major. Die 90°-Seitenlage konzentriert den Druck auf den Trochanter — eine Prädilektionsstelle. Deswegen ist die 30°-Seitenlage die Standardposition für die Dekubitusprophylaxe.`,
        contentB1: `In Prüfungen wird oft gefragt: „Warum ist die 30°-Seitenlage besser für die Dekubitus-Prophylaxe als die 90°-Seitenlage?" Hier ist die Antwort. Sie hat mit Physik zu tun.

**Die 30°-Seitenlage** ist die wichtigste Positionierung in der Dekubitus-Prophylaxe (= Vorbeugung gegen Druckgeschwür). Der Mensch liegt leicht schräg auf dem Rücken. Ein Kissen oder eine Lagerungs-Rolle im Rücken hält ihn in dieser Position. Der Winkel von 30° bewirkt etwas Wichtiges: Das Körpergewicht verteilt sich auf eine große Fläche. Es lastet nicht auf einem einzigen Knochen-Vorsprung. Die gefährdeten Stellen werden entlastet: der Trochanter major (= Knochen-Vorsprung am seitlichen Oberschenkel), die Schulter und das Kreuzbein. Der DNQP-Expertenstandard Dekubitus-Prophylaxe (2017) empfiehlt diese Position als Standard bei Dekubitus-Risiko.

**Die 90°-Seitenlage** sieht ähnlich aus. Aber sie hat ein ganz anderes Druck-Profil. Der Mensch liegt auf der Seite. Das ganze Gewicht ruht auf einer schmalen Fläche. Der Trochanter major trägt den meisten Druck. Genau deshalb ist die 90°-Seitenlage für die allgemeine Dekubitus-Prophylaxe nicht geeignet. Sie erzeugt an einer der gefährdetsten Stellen hohen Druck statt Entlastung.

Trotzdem hat die 90°-Seitenlage ihren Platz. Im Bobath-Konzept wird sie bei Schlaganfall-Patienten eingesetzt. Die betroffene Seite soll gezielt belastet und stimuliert werden. Nach einer Lungen-Operation kann die Positionierung auf der operierten Seite die Belüftung der gesunden Lunge verbessern. Aber: Der Einsatz muss immer individuell begründet sein. Und er muss zeitlich begrenzt sein.

Die Prüfungsfrage beantwortest du so: Die 30°-Seitenlage verteilt das Gewicht auf eine große Fläche. Sie entlastet den Trochanter major. Die 90°-Seitenlage konzentriert den Druck auf den Trochanter. Der Trochanter ist eine Prädilektionsstelle. Deshalb ist die 30°-Seitenlage die Standard-Position für die Dekubitus-Prophylaxe.`,
        quelle: "Vgl. DNQP 2017; Bobath-Konzept",
      },
    ],
  },

  // ── Kapitel 11–32: Kompakte Kapitel (gleiche Struktur) ──────────────────
  // Hinweis: Die folgenden Kapitel enthalten die Kerntexte aus dem Plan.
  // Aufgrund der Dateigröße werden sie mit den wesentlichen C1/B1 Blöcken generiert.

  // ── Kapitel 11: 135°-Lage, Bauchlage, Speziallagerungen ──────────────────
  {
    kapitelId: "le06-kap-11",
    titel: "Positionierungsarten (Teil 3): 135°-Lage, Bauchlage und Speziallagerungen",
    titelB1: "Positionierungsarten (Teil 3): Spezielle Lagen",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "135°-Lage entlastet Kreuzbein und Fersen vollständig. Herzbettlage bei Herzinsuffizienz, Schocklage bei Kreislaufschock, Nestlage für Frühgeborene.",
    zusammenfassungB1: "135°-Lage entlastet Kreuzbein und Fersen komplett. Herzbett-Lage bei Herzschwäche. Schock-Lage bei Kreislauf-Schock. Nest-Lage für Frühgeborene.",
    glossarBegriffe: ["135°-Lage", "Herzbettlage", "Schocklage", "Nestlage"],
    bloecke: [
      {
        type: "text",
        contentC1: `Neben Rückenlage, Oberkörperhochlage und Seitenlage gibt es Positionierungen für besondere Situationen. Jede davon verfolgt ein spezifisches therapeutisches Ziel.

**Die 135°-Lage** — auch Dreiviertel-Bauchlage genannt — ist eine Position, bei der der pflegebedürftige Mensch fast auf dem Bauch liegt, aber durch ein Kissen unter der freien Schulter und dem Becken stabilisiert wird. Der große Vorteil: Kreuzbein und Fersen werden vollständig entlastet, weil kein Druck mehr auf diesen Stellen lastet. Die 135°-Lage eignet sich daher hervorragend als Wechselposition in der Dekubitusprophylaxe. Allerdings empfinden sie nicht alle Menschen als angenehm — manche fühlen sich eingeengt oder bekommen schlecht Luft. Deshalb gilt wie bei jeder Positionierung: ausprobieren, Rückmeldung einholen und respektieren, wenn die Position abgelehnt wird.

Die **Herzbettlage** wird bei Herzinsuffizienz eingesetzt. Der Oberkörper ist erhöht, die Beine hängen nach unten (über die Bettkante oder mit abgesenktem Fußteil). Diese Position entlastet das Herz, weil das venöse Blut aus dem Oberkörper leichter zum Herzen zurückfließen kann und gleichzeitig weniger Blut aus den Beinen nachdrängt.

Die **Schocklage** ist das Gegenteil: Die Beine werden hochgelagert, der Oberkörper bleibt flach. Ziel ist es, den venösen Rückstrom zum Herzen zu verbessern, wenn der Kreislauf droht zusammenzubrechen. Du wirst ihr vor allem in Notfallsituationen begegnen.

Die **Nestlage** ist eine Positionierung für Frühgeborene und Neugeborene. Durch Lagerungshilfsmittel — zusammengerollte Handtücher, Lagerungskissen — wird eine Begrenzung geschaffen, die dem Säugling das Gefühl von Sicherheit und Enge gibt, ähnlich wie im Mutterleib. Die Nestlage fördert die Selbstwahrnehmung und beruhigt Frühgeborene, die ohne diese Begrenzung oft unruhig sind und viel Energie verbrauchen.`,
        contentB1: `Neben Rückenlage, Oberkörper-Hochlage und Seitenlage gibt es Positionierungen für besondere Situationen. Jede hat ein bestimmtes Ziel.

**Die 135°-Lage** heißt auch Dreiviertel-Bauchlage. Der Mensch liegt fast auf dem Bauch. Ein Kissen unter der freien Schulter und dem Becken gibt Stabilität. Der große Vorteil: Kreuzbein und Fersen werden ganz entlastet. Kein Druck lastet mehr auf diesen Stellen. Die 135°-Lage eignet sich deshalb sehr gut als Wechsel-Position in der Dekubitus-Prophylaxe. Aber nicht alle Menschen finden sie angenehm. Manche fühlen sich eingeengt. Manche bekommen schlecht Luft. Deshalb gilt wie immer: Ausprobieren. Rückmeldung einholen. Respektieren, wenn die Position abgelehnt wird.

Die **Herzbettlage** wird bei Herzinsuffizienz (= Herzschwäche) eingesetzt. Der Oberkörper ist erhöht. Die Beine hängen nach unten. Über die Bettkante oder mit abgesenktem Fußteil. Diese Position entlastet das Herz. Warum? Das Blut aus dem Oberkörper fließt leichter zum Herzen zurück. Gleichzeitig drängt weniger Blut aus den Beinen nach oben.

Die **Schocklage** ist das Gegenteil. Die Beine werden hochgelagert. Der Oberkörper bleibt flach. Ziel: Der Blut-Rückstrom zum Herzen soll verbessert werden. Das hilft, wenn der Kreislauf zusammenzubrechen droht. Du wirst diese Position vor allem in Notfällen sehen.

Die **Nestlage** ist eine Positionierung für Frühgeborene und Neugeborene. Mit Lagerungs-Hilfsmitteln wird eine Begrenzung gebaut. Zum Beispiel mit zusammengerollten Handtüchern oder Lagerungs-Kissen. Der Säugling bekommt das Gefühl von Sicherheit und Enge. Ähnlich wie im Mutterleib. Die Nestlage fördert die Selbstwahrnehmung. Sie beruhigt Frühgeborene. Ohne diese Begrenzung sind Frühgeborene oft unruhig. Sie verbrauchen viel Energie.`,
        quelle: "Vgl. Fachliteratur Positionierung, Neonatologie",
      },
    ],
  },

  // ── Kapitel 12: Mobilisation Grundsätze ──────────────────────────
  {
    kapitelId: "le06-kap-12",
    titel: "Mobilisation: Grundsätze und Vorbereitung",
    titelB1: "Mobilisation: Die Vorbereitung",
    tag: "pflege",
    geschaetzteDauer: 6,
    zusammenfassung: "Vor jeder Mobilisation: Befinden erfragen, Kreislauf kontrollieren, Muskelvenenpumpe aktivieren, Ziel erklären, Hilfsmittel bereitstellen. Ressourcenorientierung ist Pflicht.",
    zusammenfassungB1: "Vor jeder Mobilisation: Wie fühlt sich der Mensch? Kreislauf prüfen. Füße bewegen lassen. Ziel erklären. Hilfsmittel bereitstellen.",
    glossarBegriffe: ["Mobilisation", "Orthostatische Hypotonie", "Muskelvenenpumpe", "Ressourcenorientierung"],
    bloecke: [
      {
        type: "text",
        contentC1: `Bevor du einen pflegebedürftigen Menschen mobilisierst, gibt es eine Reihe von Vorbereitungsschritten, die du verinnerlichen solltest. Sie kosten wenig Zeit, schaffen aber Sicherheit für alle Beteiligten.

**Schritt 1: Befinden erfragen.** „Wie geht es Ihnen heute Morgen? Haben Sie Schmerzen? Ist Ihnen schwindelig?" Klingt selbstverständlich, wird aber unter Zeitdruck oft übersprungen. Dabei kann eine einfache Frage Komplikationen verhindern — wer starke Schmerzen oder Schwindel hat, sollte nicht mobilisiert werden, ohne dass zuerst Gegenmaßnahmen ergriffen werden.

**Schritt 2: Kreislauf kontrollieren.** Puls und Blutdruck messen, insbesondere bei der Erstmobilisation nach einer Operation oder längerer Bettruhe. Ein orthostatischer Blutdruckabfall — also ein Blutdruckabfall beim Lagewechsel — ist eine häufige Komplikation und kann zu Ohnmacht führen.

**Schritt 3: Muskelvenenpumpe aktivieren.** Bevor der Mensch aufsteht, sollte er im Liegen die Füße kreisen und wippen — abwechselnd strecken und anziehen. Damit wird der venöse Rückfluss in den Beinen angekurbelt und das Risiko für Schwindel beim Aufstehen reduziert.

**Schritt 4: Ziel erklären.** „Wir möchten heute gemeinsam versuchen, an die Bettkante zu kommen." Der pflegebedürftige Mensch muss wissen, was gleich passiert — sonst kann er nicht mitarbeiten. Erkläre immer einen Handlungsschritt auf einmal, verwende eindeutige Orientierungswörter wie „zur Fensterseite drehen" statt „nach rechts" (rechts und links sind bei Gegenüberstellung verwirrend), und gib dem Menschen Zeit, jede Anweisung umzusetzen (Hatch/Maietta; DNQP 2020).

**Schritt 5: Umgebung und Hilfsmittel.** Rutschfestes Schuhwerk bereitstellen, Bettbremsen feststellen, Hilfsmittel griffbereit positionieren, ausreichend Platz schaffen.

Über allem steht das Prinzip der Ressourcenorientierung: Was ein Mensch selbst kann, macht er selbst. Deine Aufgabe ist es, gezielt dort zu unterstützen, wo die Fähigkeiten nicht ausreichen — nicht mehr und nicht weniger. Das Pflegeberufegesetz nennt es die Förderung von Selbstständigkeit und Selbstbestimmung (§ 2 PflBG).`,
        contentB1: `Bevor du einen pflegebedürftigen Menschen mobilisierst, gibt es Vorbereitungs-Schritte. Du solltest sie verinnerlichen. Sie kosten wenig Zeit. Aber sie schaffen Sicherheit für alle.

**Schritt 1: Befinden erfragen.** „Wie geht es Ihnen heute Morgen? Haben Sie Schmerzen? Ist Ihnen schwindelig?" Das klingt selbstverständlich. Aber unter Zeitdruck wird es oft übersprungen. Dabei kann eine einfache Frage Probleme verhindern. Wer starke Schmerzen oder Schwindel hat, sollte nicht sofort mobilisiert werden.

**Schritt 2: Kreislauf kontrollieren.** Du misst Puls und Blutdruck. Das ist besonders wichtig bei der ersten Mobilisation nach einer Operation. Oder nach längerer Bettruhe. Es kann einen orthostatischen Blutdruckabfall geben. Das bedeutet: Der Blutdruck fällt beim Lagewechsel. Das passiert häufig. Der Mensch kann ohnmächtig werden.

**Schritt 3: Muskel-Venenpumpe aktivieren.** Bevor der Mensch aufsteht, soll er im Liegen die Füße bewegen. Die Füße kreisen und wippen. Abwechselnd strecken und anziehen. Damit wird der Blutfluss in den Beinen angekurbelt. Das Risiko für Schwindel beim Aufstehen wird weniger.

**Schritt 4: Ziel erklären.** „Wir möchten heute gemeinsam versuchen, an die Bettkante zu kommen." Der Mensch muss wissen, was jetzt passiert. Sonst kann er nicht mitarbeiten. Erkläre immer einen Schritt auf einmal. Benutze klare Wörter. Sag zum Beispiel „zur Fensterseite drehen" statt „nach rechts". Rechts und links sind verwirrend, wenn man sich gegenübersteht. Gib dem Menschen Zeit für jeden Schritt (Hatch/Maietta; DNQP 2020).

**Schritt 5: Umgebung und Hilfsmittel.** Rutschfeste Schuhe bereitstellen. Bettbremsen feststellen. Hilfsmittel griffbereit hinstellen. Genug Platz schaffen.

Über allem steht ein Prinzip: Ressourcen-Orientierung. Was ein Mensch selbst kann, macht er selbst. Du unterstützt nur dort, wo die Fähigkeiten nicht ausreichen. Nicht mehr und nicht weniger. Das Pflege-Berufegesetz nennt es die Förderung von Selbstständigkeit und Selbstbestimmung (§ 2 PflBG).`,
        quelle: "Vgl. DNQP 2020; § 2 PflBG; Hatch/Maietta",
      },
    ],
  },


  // ── Kapitel 13: Mobilisation vom Bett an die Bettkante ──────────────────────────
  {
    kapitelId: "le06-kap-13",
    titel: "Mobilisation in der Praxis: Vom Bett an die Bettkante",
    titelB1: "Vom Bett an die Bettkante",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Drei Phasen: Spiralige Drehung zur Seite (Hände an Masse Schulter/Becken), Beine aus dem Bett gleiten lassen (Hebelprinzip), 1–2 Min sitzen lassen (Kreislaufkontrolle wegen orthostatischem Blutdruckabfall).",
    zusammenfassungB1: "Drei Phasen: Drehen zur Seite (Hände an Schulter und Becken). Beine aus dem Bett gleiten lassen (Hebel-Prinzip). 1–2 Min sitzen lassen und Kreislauf kontrollieren.",
    glossarBegriffe: ["Bettkantenmobilisation", "Spiralige Drehung", "Orthostatischer Blutdruckabfall"],
    bloecke: [
      {
        type: "text",
        contentC1: `Jetzt setzen wir die Theorie in die Praxis um. Die Mobilisation vom Liegen an die Bettkante ist eine der häufigsten pflegerischen Handlungen — und ein Paradebeispiel für kinästhetisches Arbeiten.

**Phase 1: Drehen über die Seite.** Der pflegebedürftige Mensch liegt auf dem Rücken und soll sich auf die Seite drehen. Du bittest ihn, das obere Bein aufzustellen (die Ferse zum Gesäß ziehen) und den oberen Arm über den Körper zu legen. Beide Bewegungen leiten eine spiralige Drehung ein — der Körper „will" sich drehen, du musst nur noch minimal unterstützen. Deine Hände liegen dabei an Schulter und Becken — das sind Massen, an denen du Stabilität gibst, ohne Bewegung zu blockieren. Nicht unter die Achselhöhlen greifen!

**Phase 2: Von der Seitenlage an die Bettkante.** Der Mensch liegt jetzt auf der Seite, seine Beine befinden sich nah an der Bettkante. Du hilfst ihm, die Beine langsam aus dem Bett gleiten zu lassen, während er gleichzeitig den Oberkörper aufrichtet. Hier wirkt ein physikalisches Prinzip: Das Gewicht der nach unten gleitenden Beine erzeugt ein Drehmoment, das den Oberkörper nach oben zieht — ein natürlicher Hebelmechanismus, der das Aufrichten erheblich erleichtert.

**Phase 3: Sitzen an der Bettkante.** Sobald der Mensch sitzt, heißt es: Ruhe bewahren. Mindestens ein bis zwei Minuten an der Bettkante sitzen lassen, bevor du weitermobilisierst. In dieser Zeit kontrollierst du den Kreislauf: Wird er blass? Klagt er über Schwindel? Ist der Puls in Ordnung? Nach längerer Bettruhe ist ein orthostatischer Blutdruckabfall häufig — der Körper muss sich erst an die aufrechte Position anpassen.

Erst wenn der pflegebedürftige Mensch stabil sitzt, die Füße flach auf dem Boden stehen und er sich wohlfühlt, kommt der nächste Schritt: Aufstehen oder Transfer in den Rollstuhl.`,
        contentB1: `Jetzt setzen wir die Theorie in die Praxis um. Die Mobilisation vom Liegen an die Bettkante ist eine der häufigsten Handlungen in der Pflege. Sie ist ein gutes Beispiel für kinästhetisches Arbeiten.

**Phase 1: Drehen über die Seite.** Der Mensch liegt auf dem Rücken. Er soll sich auf die Seite drehen. Du bittest ihn: Stell das obere Bein auf. Zieh die Ferse zum Gesäß. Leg den oberen Arm über den Körper. Beide Bewegungen leiten eine spiralige Drehung ein. Der Körper „will" sich drehen. Du musst nur noch wenig unterstützen. Deine Hände liegen an Schulter und Becken. Das sind Massen. Dort gibst du Stabilität. Du blockierst keine Bewegung. Nicht unter die Achselhöhlen greifen!

**Phase 2: Von der Seitenlage an die Bettkante.** Der Mensch liegt jetzt auf der Seite. Seine Beine sind nah an der Bettkante. Du hilfst ihm, die Beine langsam aus dem Bett gleiten zu lassen. Gleichzeitig richtet er den Oberkörper auf. Hier wirkt ein physikalisches Prinzip: Das Gewicht der Beine gleitet nach unten. Das zieht den Oberkörper nach oben. Das ist ein natürlicher Hebel. Er macht das Aufrichten viel leichter.

**Phase 3: Sitzen an der Bettkante.** Sobald der Mensch sitzt, heißt es: Ruhe bewahren. Mindestens ein bis zwei Minuten an der Bettkante sitzen lassen. Erst dann weiter mobilisieren. In dieser Zeit kontrollierst du den Kreislauf. Wird er blass? Klagt er über Schwindel? Ist der Puls in Ordnung? Nach längerer Bettruhe ist ein orthostatischer Blutdruckabfall (= Blutdruck fällt beim Lagewechsel) häufig. Der Körper muss sich erst an die aufrechte Position gewöhnen.

Erst wenn der Mensch stabil sitzt, die Füße flach auf dem Boden stehen und er sich wohlfühlt, kommt der nächste Schritt. Aufstehen oder Transfer in den Rollstuhl.`,
        quelle: "Vgl. Hatch/Maietta Kinästhetik; Fachliteratur Mobilisation",
      },
    ],
  },

  // ── Kapitel 14: Transfer Bett in Rollstuhl ──────────────────────────
  {
    kapitelId: "le06-kap-14",
    titel: "Transfer: Vom Bett in den Rollstuhl",
    titelB1: "Transfer: Bett in Rollstuhl",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Aktivierender Transfer: Rollstuhl schräg zur stärkeren Seite, Bremsen, Fußstützen weg, Stabilisation am Becken. Passiv: Rutschbrett, Drehscheibe, Lifter (mind. 2 Pflegepersonen). Auswahl individuell begründen (Barthel, Belastung, Gleichgewicht, Kognition).",
    zusammenfassungB1: "Aktivierender Transfer: Rollstuhl schräg zur stärkeren Seite. Bremsen feststellen. Fußstützen weg. Stabilisation am Becken. Passiv: Rutschbrett, Drehscheibe, Lifter (mindestens 2 Pflege-Personen). Auswahl immer individuell begründen.",
    glossarBegriffe: ["Transfer", "Aktivierender Transfer", "Passiver Transfer", "Rutschbrett", "Drehscheibe", "Patientenlifter"],
    bloecke: [
      {
        type: "text",
        contentC1: `Der Transfer vom Bett in den Rollstuhl gehört zu den prüfungsrelevanten Handlungen, die du sicher beherrschen musst. Je nach Fähigkeiten des pflegebedürftigen Menschen gibt es verschiedene Wege.

**Der aktivierende Transfer** setzt voraus, dass der Mensch stehen und sich drehen kann — zumindest teilweise und mit Unterstützung. Du stellst den Rollstuhl schräg zum Bett, und zwar auf der stärkeren Seite des pflegebedürftigen Menschen. So kann er sich zur gesunden Seite hin drehen und abstützen. Bremsen feststellen und Fußstützen wegklappen — das sind Standardgriffe, die du automatisieren solltest. Die Füße des Menschen stehen parallel und flach auf dem Boden, er stützt sich mit den Händen auf der Matratze oder an der Armlehne des Rollstuhls ab. Du stabilisierst am Becken (Masse!), er steht auf, dreht sich zum Rollstuhl und setzt sich kontrolliert hin.

Beim Bobath-Transfer gelten andere Regeln: Der Rollstuhl wird auf die betroffene Seite gestellt, weil der Transfer über die betroffene Seite erfolgen soll. Der Grund: Die betroffene Seite soll aktiv einbezogen werden, nicht umgangen.

**Der passive Transfer** kommt zum Einsatz, wenn der Mensch nicht mehr stehen oder sich drehen kann. Drei Hilfsmittel stehen zur Verfügung. Das Rutschbrett ermöglicht einen sitzenden Transfer: Es bildet eine Brücke zwischen Bett und Rollstuhl, über die der Mensch hinübergleitet. Die Drehscheibe hilft, wenn der Mensch zwar kurz stehen, aber sich nicht drehen kann: Er stellt sich auf die Scheibe, und die Pflegeperson dreht ihn sanft zum Rollstuhl. Der Patientenlifter schließlich wird eingesetzt, wenn gar keine Eigenaktivität möglich ist — hier sind mindestens zwei Pflegepersonen erforderlich.

Die Auswahl des richtigen Transferweges ist eine pflegerische Entscheidung, die du individuell begründen musst. Kriterien sind der Barthel-Index, die ärztliche Belastungsvorgabe, die Gleichgewichtsfähigkeit und der kognitive Status des pflegebedürftigen Menschen. Hilfsmittel werden über das Sozialgesetzbuch (SGB V § 33) verordnet.`,
        contentB1: `Der Transfer vom Bett in den Rollstuhl ist eine prüfungsrelevante Handlung. Du musst sie sicher beherrschen. Je nach Fähigkeiten des Menschen gibt es verschiedene Wege.

**Der aktivierende Transfer** setzt voraus: Der Mensch kann stehen und sich drehen. Zumindest teilweise und mit Unterstützung. Du stellst den Rollstuhl schräg zum Bett. Der Rollstuhl steht auf der stärkeren Seite des Menschen. So kann er sich zur gesunden Seite drehen und abstützen. Bremsen feststellen. Fußstützen wegklappen. Das sind Standard-Griffe. Die sollst du automatisieren. Die Füße des Menschen stehen parallel und flach auf dem Boden. Er stützt sich mit den Händen ab. Auf der Matratze oder an der Armlehne vom Rollstuhl. Du stabilisierst am Becken. Das ist eine Masse. Er steht auf. Er dreht sich zum Rollstuhl. Er setzt sich kontrolliert hin.

Beim Bobath-Transfer gelten andere Regeln. Der Rollstuhl wird auf die betroffene Seite gestellt. Der Transfer geht über die betroffene Seite. Der Grund: Die betroffene Seite soll aktiv einbezogen werden. Sie soll nicht umgangen werden.

**Der passive Transfer** kommt zum Einsatz, wenn der Mensch nicht mehr stehen oder drehen kann. Drei Hilfsmittel stehen zur Verfügung. Das Rutschbrett macht einen sitzenden Transfer möglich. Es bildet eine Brücke zwischen Bett und Rollstuhl. Der Mensch gleitet darüber. Die Drehscheibe hilft, wenn der Mensch kurz stehen, aber sich nicht drehen kann. Er stellt sich auf die Scheibe. Du drehst ihn sanft zum Rollstuhl. Der Patientenlifter wird eingesetzt, wenn gar keine Eigenaktivität möglich ist. Hier braucht man mindestens zwei Pflege-Personen.

Die Auswahl des richtigen Transfer-Weges ist eine pflegerische Entscheidung. Du musst sie individuell begründen. Wichtige Punkte sind: der Barthel-Index (= Test für Selbstständigkeit), die ärztliche Belastungs-Vorgabe, die Gleichgewichts-Fähigkeit und der kognitive Status (= geistige Fähigkeiten) des Menschen. Hilfsmittel werden über das Sozialgesetzbuch verordnet (SGB V § 33).`,
        quelle: "Vgl. SGB V § 33; Fachliteratur Transfer",
      },
    ],
  },

  // ── Kapitel 15: Hilfsmittel bei der Mobilisation ──────────────────────────
  {
    kapitelId: "le06-kap-15",
    titel: "Hilfsmittel bei der Mobilisation",
    titelB1: "Hilfsmittel für die Mobilität",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Gehstock kontralateral zur Schwäche, Höhe = Handgelenk. Unterarmgehstützen nach OP mit ärztlicher Belastungsvorgabe. Rollator bei mittlerer Gangunsicherheit mit Bremskompetenz. Auswahl individuell (Barthel, Belastung, Gleichgewicht, Kognition).",
    zusammenfassungB1: "Gehstock auf der Gegenseite zur Schwäche. Höhe = Handgelenk. Unterarm-Gehstützen nach OP mit ärztlicher Belastungs-Vorgabe. Rollator bei mittlerer Gang-Unsicherheit. Bremsen immer üben. Auswahl individuell begründen.",
    glossarBegriffe: ["Gehstock", "Unterarmgehstützen", "Rollator", "Kontralateral"],
    bloecke: [
      {
        type: "text",
        contentC1: `Der Markt an Mobilitätshilfsmitteln ist groß — vom einfachen Gehstock bis zum elektrischen Patientenlifter. Für die Pflegepraxis und die Prüfung musst du die wichtigsten kennen und vor allem wissen, wann welches Hilfsmittel passt.

**Der Gehstock** ist das einfachste Hilfsmittel bei leichter Gangunsicherheit. Zwei Dinge werden in der Prüfung fast immer abgefragt: Erstens wird der Gehstock kontralateral eingesetzt — also auf der Gegenseite zur Schwäche. Wer eine Schwäche im rechten Bein hat, hält den Stock links. Der Grund: Beim Gehen entlastet der Stock die gegenüberliegende Seite, weil er einen Teil des Körpergewichts übernimmt, das sonst auf dem schwachen Bein lasten würde. Zweitens die Höhe: Die Oberkante des Griffs soll auf Höhe des Handgelenks liegen, wenn der Mensch aufrecht steht und die Arme locker herabhängen.

**Unterarmgehstützen** kommen nach Operationen zum Einsatz, wenn eine Teilbelastung vorgegeben ist. Der Arzt bestimmt, wie viel Gewicht das operierte Bein tragen darf — zum Beispiel 20 kg. Die Pflegefachperson erklärt die Handhabung und übt mit dem pflegebedürftigen Menschen. Wichtig: Auch das Treppensteigen mit Unterarmgehstützen muss geübt werden (gesundes Bein zuerst hoch, krankes Bein zuerst runter — Eselsbrücke: „Der Gesunde geht in den Himmel, der Kranke geht in die Hölle").

**Der Rollator** bietet mehr Stabilität als Gehstützen und wird bei mittlerer Gangunsicherheit eingesetzt, wenn beide Hände zum Abstützen frei sein müssen. Unbedingt die Bremsen erklären und üben — ein Rollator ohne Bremskompetenz wird selbst zur Sturzfalle.

Die individuelle Begründung der Hilfsmittelauswahl ist ein typisches Prüfungsthema. Eine pauschale Zuordnung ohne Bezug zum konkreten pflegebedürftigen Menschen reicht nicht. Du musst den Barthel-Index, die ärztliche Belastungsvorgabe, die Gleichgewichtsfähigkeit und den kognitiven Status berücksichtigen. Ein dementer Mensch kann einen Rollator mit Bremsfunktion möglicherweise nicht sicher bedienen — dann brauchst du eine andere Lösung.`,
        contentB1: `Es gibt viele Hilfsmittel für die Mobilität. Vom einfachen Gehstock bis zum elektrischen Patientenlifter. Für die Pflege-Praxis und die Prüfung musst du die wichtigsten kennen. Und du musst wissen: Wann passt welches Hilfsmittel?

**Der Gehstock** ist das einfachste Hilfsmittel bei leichter Unsicherheit beim Gehen. Zwei Dinge werden in der Prüfung fast immer gefragt. Erstens: Der Gehstock wird kontralateral (= auf der Gegenseite) eingesetzt. Wer eine Schwäche im rechten Bein hat, hält den Stock links. Warum? Beim Gehen entlastet der Stock die andere Seite. Er übernimmt einen Teil des Körpergewichts. Zweitens die Höhe: Die Oberkante vom Griff soll auf Höhe des Handgelenks liegen. Der Mensch steht aufrecht. Die Arme hängen locker herunter.

**Unterarm-Gehstützen** kommen nach Operationen zum Einsatz. Der Arzt bestimmt eine Teilbelastung. Zum Beispiel: Das operierte Bein darf nur 20 kg tragen. Du als Pflege-Fachperson erklärst die Handhabung. Du übst mit dem Menschen. Wichtig: Auch das Treppen-Steigen mit Unterarm-Gehstützen muss geübt werden. Die Regel ist: Gesundes Bein zuerst hoch. Krankes Bein zuerst runter.

**Der Rollator** bietet mehr Stabilität als Gehstützen. Er wird bei mittlerer Unsicherheit beim Gehen eingesetzt. Beide Hände müssen frei sein zum Abstützen. Unbedingt die Bremsen erklären und üben. Ein Rollator ohne Brems-Kompetenz wird selbst zur Sturz-Falle.

Die Auswahl des richtigen Hilfsmittels ist ein typisches Prüfungsthema. Eine pauschale Zuordnung reicht nicht. Du musst den Barthel-Index berücksichtigen. Du musst die ärztliche Belastungs-Vorgabe kennen. Du musst die Gleichgewichts-Fähigkeit einschätzen. Und du musst den kognitiven Status beachten. Zum Beispiel: Ein Mensch mit Demenz kann einen Rollator mit Brems-Funktion vielleicht nicht sicher bedienen. Dann brauchst du eine andere Lösung.`,
        quelle: "Vgl. SGB V § 33; Fachliteratur Hilfsmittelversorgung",
      },
    ],
  },

  // ── Kapitel 16: Bobath-Konzept ──────────────────────────
  {
    kapitelId: "le06-kap-16",
    titel: "Das Bobath-Konzept — Neurologische Patienten mobilisieren",
    titelB1: "Das Bobath-Konzept",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Bobath-Konzept (1970er): Bei neurologischen Patienten (Schlaganfall, MS, Parkinson) wird die betroffene Seite aktiv einbezogen — Ansprache, Nachttisch, Transfer — um Muskeltonus zu normalisieren und Neglect entgegenzuwirken.",
    zusammenfassungB1: "Bobath-Konzept: Bei neurologischen Patienten wird die betroffene Seite aktiv einbezogen. Ansprache, Nachttisch, Transfer von der betroffenen Seite. Ziel: Das Gehirn soll die Seite wieder wahrnehmen. Gegen Neglect (= „Vergessen\" der Seite).",
    glossarBegriffe: ["Bobath-Konzept", "Hemiparese", "Neglect", "Spastik"],
    bloecke: [
      {
        type: "text",
        contentC1: `Herr Demir, 64 Jahre, liegt seit sechs Tagen auf der Stroke Unit. Ein Schlaganfall in der linken Hirnhälfte hat zu einer rechtsseitigen Hemiparese geführt — sein rechter Arm und sein rechtes Bein sind teilgelähmt. Als du in sein Zimmer kommst, um ihn an die Bettkante zu mobilisieren, fragt er irritiert: „Warum müssen Sie mich von rechts ansprechen? Rechts ist doch die kranke Seite!" Diese Frage kommt häufig — und die Antwort ist das Kernprinzip des Bobath-Konzepts.

Das Bobath-Konzept wurde in den 1970er-Jahren von Berta und Karel Bobath entwickelt und ist das am weitesten verbreitete therapeutische Konzept für neurologische Patienten — insbesondere nach Schlaganfall, bei Multipler Sklerose und bei Parkinson. Das Grundprinzip widerspricht der Intuition: Die betroffene (gelähmte) Körperseite wird nicht geschont oder umgangen, sondern aktiv in alle Handlungen einbezogen.

Konkret bedeutet das im pflegerischen Alltag: Du sprichst den pflegebedürftigen Menschen von der betroffenen Seite an. Der Nachttisch steht auf der betroffenen Seite, damit der Mensch sich dorthin orientieren muss. Der Transfer erfolgt über die betroffene Seite. Besucher setzen sich auf die betroffene Seite. All das hat ein Ziel: Das Gehirn soll lernen, die betroffene Körperhälfte wieder wahrzunehmen und zu steuern. Es geht um die Normalisierung des Muskeltonus und die Anbahnung physiologischer Bewegungsmuster.

Warum ist das so wichtig? Bei vielen Schlaganfall-Patienten entwickelt sich ein Neglect — eine Aufmerksamkeitsstörung, bei der die betroffene Körperhälfte oder die entsprechende Raumhälfte „vergessen" wird. Wird die betroffene Seite im Alltag konsequent umgangen, verstärkt sich dieser Neglect. Das Bobath-Konzept wirkt dem gezielt entgegen.

Zurück zu Herrn Demir: Wenn du ihm erklärst, dass sein Gehirn die rechte Seite wieder „kennenlernen" muss und dass jeder Reiz von rechts dabei hilft, versteht er den Sinn — und arbeitet mit.`,
        contentB1: `Herr Demir ist 64 Jahre alt. Er liegt seit sechs Tagen auf der Stroke Unit (= Schlaganfall-Station). Ein Schlaganfall in der linken Gehirnhälfte hat zu einer rechtsseitigen Hemiparese (= Halbseiten-Lähmung) geführt. Sein rechter Arm und sein rechtes Bein sind teilweise gelähmt. Du kommst in sein Zimmer. Du willst ihn an die Bettkante mobilisieren. Er fragt irritiert: „Warum müssen Sie mich von rechts ansprechen? Rechts ist doch die kranke Seite!" Diese Frage kommt oft. Die Antwort ist das Kern-Prinzip des Bobath-Konzepts.

Das Bobath-Konzept wurde in den 1970er-Jahren von Berta und Karel Bobath entwickelt. Es ist das verbreitetste Konzept für neurologische Patienten. Besonders nach Schlaganfall. Auch bei Multipler Sklerose und bei Parkinson. Das Grundprinzip klingt erst einmal seltsam: Die betroffene (gelähmte) Körperseite wird nicht geschont. Sie wird nicht umgangen. Sie wird aktiv in alle Handlungen einbezogen.

Was bedeutet das im Pflege-Alltag? Du sprichst den Menschen von der betroffenen Seite an. Der Nachttisch steht auf der betroffenen Seite. Der Mensch muss sich dorthin orientieren. Der Transfer geht über die betroffene Seite. Besucher setzen sich auf die betroffene Seite. Das Ziel: Das Gehirn soll lernen, die betroffene Körperhälfte wieder wahrzunehmen und zu steuern. Es geht um die Normalisierung der Muskel-Spannung. Und um die Anbahnung von normalen Bewegungs-Mustern.

Warum ist das so wichtig? Bei vielen Schlaganfall-Patienten entwickelt sich ein Neglect (= eine Aufmerksamkeits-Störung). Der Mensch „vergisst" die betroffene Körperhälfte oder die entsprechende Raum-Hälfte. Wird die betroffene Seite im Alltag immer umgangen, verstärkt sich dieser Neglect. Das Bobath-Konzept wirkt dem gezielt entgegen.

Zurück zu Herrn Demir: Wenn du ihm erklärst, dass sein Gehirn die rechte Seite wieder „kennenlernen" muss — und dass jeder Reiz von rechts dabei hilft — versteht er den Sinn. Und er arbeitet mit.`,
        quelle: "Vgl. Bobath 1970er; Fachliteratur Neurologie",
      },
    ],
  },

  // ── Kapitel 17: Dekubitus Definition und Kategorien ──────────────────────────
  {
    kapitelId: "le06-kap-17",
    titel: "Dekubitusprophylaxe: Was ist ein Dekubitus?",
    titelB1: "Was ist ein Dekubitus?",
    tag: "krankheitslehre",
    geschaetzteDauer: 5,
    zusammenfassung: "Dekubitus = lokal begrenzte Haut-/Gewebeschädigung über Knochenvorsprüngen durch Druck/Scherkräfte (NPUAP/EPUAP 2014). 4 Kategorien: I nicht wegdrückbare Rötung → IV Knochen/Sehnen freiliegend. Prädilektionsstellen lagenabhängig.",
    zusammenfassungB1: "Dekubitus = Druckgeschwür. Entsteht durch Druck auf die Haut. 4 Kategorien: I (Rötung, die nicht weggeht) bis IV (Knochen liegt frei). Prädilektionsstellen (= wo Dekubitus oft entsteht): hängt von der Position ab.",
    glossarBegriffe: ["Dekubitus", "Dekubitus Kategorie I–IV", "Prädilektionsstelle", "Scherkraft"],
    bloecke: [
      {
        type: "text",
        contentC1: `Ein Dekubitus — umgangssprachlich „Wundliegen" oder „Druckgeschwür" — ist eine der häufigsten Komplikationen bei immobilen pflegebedürftigen Menschen. In der internationalen Leitlinie wird er als eine örtlich umschriebene Gewebeverletzung beschrieben, die meistens dort entsteht, wo ein Knochen dicht unter der Haut liegt; verantwortlich dafür ist anhaltender Druck, häufig in Kombination mit Scherkräften (NPUAP/EPUAP/PPPIA, 2014). Betroffen sein können die Haut selbst oder auch tiefere Gewebeschichten unter ihr.

Stell dir eine Wasserleitung vor, auf die jemand den Fuß stellt. Solange der Druck kurz ist, passiert nichts. Aber wenn der Fuß stehen bleibt, wird die Leitung irgendwann gequetscht — es fließt weniger Wasser. Ähnlich verhält es sich mit den Blutgefäßen im Gewebe über Knochenvorsprüngen: Dauerhafter Druck quetscht die kleinsten Gefäße zusammen, das Gewebe wird nicht mehr ausreichend mit Sauerstoff und Nährstoffen versorgt und stirbt ab.

Die internationale Klassifikation unterscheidet vier Kategorien, die den Schweregrad beschreiben. Kategorie I ist der Beginn: Die Haut ist intakt, aber an der betroffenen Stelle zeigt sich eine nicht wegdrückbare Rötung — drückst du mit dem Finger darauf, wird die Stelle nicht weiß. In Kategorie II ist die Haut teilweise zerstört, es zeigen sich Blasen oder ein flaches, offenes Geschwür. Kategorie III bedeutet vollständigen Hautverlust — du siehst das Unterhautfettgewebe, aber noch keinen Knochen oder Muskel. In Kategorie IV liegt ein vollständiger Gewebeverlust vor, bei dem Knochen, Sehnen oder Muskeln freiliegen. Der Schweregrad steigt also dramatisch an.

Wo ein Dekubitus entsteht, hängt von der Position des Menschen ab. In der Rückenlage sind Hinterhaupt, Schulterblätter, Ellbogen, Kreuzbein und Fersen besonders gefährdet — überall dort, wo Knochen direkt unter der Haut liegen und auf die Matratze drücken. In der Seitenlage verschieben sich die Druckpunkte: Jetzt sind Ohr, Schulter, Trochanter major, Knie-Innenseite und Außenknöchel betroffen. Im Sitzen lasten hohe Druckkräfte auf Steißbein und Sitzbein. Diese Stellen heißen Prädilektionsstellen — Stellen, an denen ein Dekubitus bevorzugt auftritt.`,
        contentB1: `Ein Dekubitus — in einfacher Sprache „Wundliegen" oder „Druckgeschwür" — ist eines der häufigsten Probleme bei immobilen Menschen. Die internationale Leitlinie erklärt ihn so: Eine Wunde an einer kleinen, genauen Stelle. Sie entsteht meist dort, wo ein Knochen fast unter der Haut liegt. Der Grund ist langer Druck. Oft kommen Scherkräfte (= wenn die Haut gegen die Unterlage verschoben wird) dazu (NPUAP/EPUAP/PPPIA, 2014). Die Wunde kann nur in der Haut sein — oder auch tiefer im Gewebe unter der Haut.

Stell dir eine Wasserleitung vor. Jemand stellt seinen Fuß darauf. Wenn der Druck kurz ist, passiert nichts. Aber wenn der Fuß stehen bleibt, wird die Leitung gequetscht. Es fließt weniger Wasser. So ähnlich ist es mit den Blutgefäßen im Gewebe über Knochen-Vorsprüngen. Dauerhafter Druck quetscht die kleinsten Gefäße zusammen. Das Gewebe bekommt nicht mehr genug Sauerstoff und Nährstoffe. Es stirbt ab.

Es gibt vier Kategorien. Sie beschreiben den Schweregrad. Kategorie I ist der Beginn. Die Haut ist noch ganz. Aber an der betroffenen Stelle ist eine Rötung, die nicht wegdrückbar ist. Du drückst mit dem Finger darauf. Die Stelle wird nicht weiß. In Kategorie II ist die Haut teilweise kaputt. Du siehst Blasen oder ein flaches, offenes Geschwür. Kategorie III bedeutet: Die Haut ist ganz zerstört. Du siehst das Unterhaut-Fettgewebe. Aber noch keinen Knochen oder Muskel. In Kategorie IV liegt ein vollständiger Gewebe-Verlust vor. Knochen, Sehnen oder Muskeln liegen frei. Der Schweregrad steigt also sehr stark an.

Wo ein Dekubitus entsteht, hängt von der Position des Menschen ab. In der Rückenlage sind besonders gefährdet: Hinterhaupt (= Hinterkopf), Schulterblätter, Ellbogen, Kreuzbein und Fersen. Überall dort liegen Knochen direkt unter der Haut. Sie drücken auf die Matratze. In der Seitenlage sind andere Stellen betroffen: Ohr, Schulter, Trochanter major (= Knochen-Vorsprung am seitlichen Oberschenkel), Knie-Innenseite und Außenknöchel. Im Sitzen lasten hohe Druckkräfte auf Steißbein und Sitzbein. Diese Stellen heißen Prädilektionsstellen (= Stellen, wo ein Dekubitus besonders oft auftritt).`,
        quelle: "Vgl. NPUAP/EPUAP/PPPIA 2014; DNQP 2017",
      },
    ],
  },

  // ── Kapitel 18: Dekubitusprophylaxe — Risikofaktoren und Assessment ──
  {
    kapitelId: "le06-kap-18",
    titel: "Dekubitusprophylaxe: Risikofaktoren und Assessment",
    titelB1: "Dekubitus: Wer ist gefährdet?",
    tag: "krankheitslehre",
    geschaetzteDauer: 7,
    zusammenfassung:
      "Risikofaktoren in drei Gruppen: personenbezogen (Immobilität, Mangelernährung, Diabetes), umgebungsbezogen (Feuchtigkeit, Scherkräfte), therapiebezogen (Sedierung, lange OP). Braden-Skala (6 Subskalen, Score 6–23, niedrig = hohes Risiko). Fingertest: wegdrückbar = Warnsignal, nicht wegdrückbar = Kategorie I.",
    zusammenfassungB1:
      "Drei Gruppen von Risikofaktoren: beim Menschen selbst (wenig Bewegung, Mangelernährung, Diabetes), von außen (Feuchtigkeit, Scherkräfte) und durch Therapie (Beruhigungsmittel, lange OP). Braden-Skala: 6 bis 23 Punkte, je niedriger desto höher das Risiko. Fingertest: Wird die Rötung weiß? Dann Warnsignal. Bleibt sie? Dann Kategorie I.",
    glossarBegriffe: [
      "braden-skala",
      "fingertest",
      "risikofaktoren-dekubitus",
    ],
    bloecke: [
      {
        type: "text",
        contentC1: `Einen Dekubitus zu erkennen ist das eine — ihn zu verhindern das andere. Und Verhinderung beginnt mit der Frage: Wer ist gefährdet? Die Risikofaktoren lassen sich in drei Gruppen gliedern.

Personenbezogene Risikofaktoren liegen beim pflegebedürftigen Menschen selbst. Am wichtigsten ist die eingeschränkte Mobilität — wer sich nicht selbstständig umdrehen kann, kann Druckstellen nicht entlasten. Hinzu kommen Mangelernährung (unterversorgtes Gewebe regeneriert schlechter), Dehydratation (trockene Haut ist verletzungsanfälliger), Diabetes mellitus (Durchblutungsstörungen und vermindertes Schmerzempfinden), und generell reduzierte Sensibilität — wer den Druck nicht spürt, bewegt sich nicht, um ihn zu entlasten.

Umgebungsbezogene Risikofaktoren kommen von außen. Feuchtigkeit durch Inkontinenz oder Schwitzen weicht die Haut auf und macht sie anfälliger. Scherkräfte entstehen, wenn der Mensch im Bett rutscht (siehe Kapitel 8). Eine ungeeignete Matratze verteilt den Druck nicht ausreichend.

Therapiebezogene Risikofaktoren entstehen durch medizinische Maßnahmen. Sedierung schaltet die Eigenbewegung aus. Lange Operationen bedeuten stundenlangen Druck auf einer Unterlage. Immobilisierung durch Gipsverbände oder Schienen kann lokale Druckstellen erzeugen.

Zur systematischen Risikoeinschätzung nutzen Pflegefachpersonen die Braden-Skala (Braden/Bergstrom, 1987). Sie erfasst sechs Faktoren auf einer Punkteskala: Sensorisches Empfindungsvermögen, Feuchtigkeit, Aktivität, Mobilität, Ernährung und Reibung/Scherkräfte. Jeder Faktor wird mit 1 bis 4 Punkten bewertet, der Gesamtscore liegt zwischen 6 und 23. Die Logik ist umgekehrt als man erwarten würde: Je niedriger der Wert, desto höher das Risiko. Ein Score unter 18 gilt als Hinweis auf ein erhöhtes Dekubitusrisiko — die Pflegeplanung muss dann entsprechende Prophylaxe-Maßnahmen enthalten.

Kein Assessment ersetzt jedoch den Blick auf die Haut. Die Hautbeobachtung an den Prädilektionsstellen bei jedem Positionswechsel ist die wichtigste pflegerische Früherkennungsmaßnahme. Der Fingertest liefert die Entscheidung: Drücke mit dem Finger auf die gerötete Stelle — wird sie weiß, ist die Durchblutung intakt, es handelt sich um ein Warnsignal. Bleibt die Rötung bestehen, liegt ein Dekubitus Kategorie I vor, und sofortige Druckentlastung ist erforderlich (NPUAP/EPUAP, 2014).`,
        contentB1: `Einen Dekubitus erkennen ist das eine. Ihn verhindern ist das andere. Und Verhinderung beginnt mit der Frage: Wer ist gefährdet? Die Risikofaktoren kann man in drei Gruppen einteilen.

Gruppe 1: Personenbezogene Risikofaktoren. Sie liegen beim Menschen selbst. Am wichtigsten ist die eingeschränkte Mobilität. Wer sich nicht allein umdrehen kann, kann Druckstellen nicht entlasten. Dazu kommt Mangel-Ernährung. Unterversorgtes Gewebe heilt schlechter. Auch Dehydratation (= zu wenig Flüssigkeit) ist ein Risiko. Trockene Haut ist leichter verletzbar. Diabetes mellitus (= Zucker-Krankheit) ist gefährlich, weil die Durchblutung gestört sein kann. Und das Schmerz-Empfinden kann vermindert sein. Wer den Druck nicht spürt, bewegt sich nicht.

Gruppe 2: Umgebungsbezogene Risikofaktoren. Sie kommen von außen. Feuchtigkeit durch Inkontinenz (= unkontrollierter Harn- oder Stuhlabgang) oder Schwitzen weicht die Haut auf. Die Haut wird anfälliger. Scherkräfte entstehen, wenn der Mensch im Bett rutscht. Eine ungeeignete Matratze verteilt den Druck nicht gut genug.

Gruppe 3: Therapiebezogene Risikofaktoren. Sie entstehen durch medizinische Maßnahmen. Sedierung (= Gabe von Beruhigungsmitteln) schaltet die Eigenbewegung aus. Lange Operationen bedeuten stundenlangen Druck auf einer Unterlage. Gipsverbände oder Schienen können lokale Druckstellen erzeugen.

Für die systematische Einschätzung nutzen Pflege-Fachpersonen die Braden-Skala (Braden/Bergstrom, 1987). Sie hat sechs Punkte: Empfindungsvermögen, Feuchtigkeit, Aktivität, Mobilität, Ernährung und Reibung/Scherkräfte. Jeder Punkt wird mit 1 bis 4 Punkten bewertet. Der Gesamtwert liegt zwischen 6 und 23. Achtung: Je niedriger der Wert, desto höher das Risiko. Ein Wert unter 18 bedeutet: Das Dekubitus-Risiko ist erhöht. Die Pflege-Planung muss dann Prophylaxe-Maßnahmen enthalten.

Kein Test ersetzt aber den Blick auf die Haut. Die Hautbeobachtung an den Prädilektionsstellen bei jedem Positionswechsel ist die wichtigste Maßnahme zur Früherkennung. Der Fingertest gibt die Entscheidung. Du drückst mit dem Finger auf die gerötete Stelle. Wird sie weiß? Dann ist die Durchblutung noch in Ordnung. Das ist ein Warnsignal. Bleibt die Rötung bestehen? Dann ist es ein Dekubitus Kategorie I. Du musst sofort für Druck-Entlastung sorgen (NPUAP/EPUAP, 2014).`,
        quelle: "Vgl. DNQP 2017; Braden/Bergstrom 1987; NPUAP/EPUAP 2014",
      },
    ],
  },

  // ── Kapitel 19: Dekubitusprophylaxe — Maßnahmen ──────────────────────
  {
    kapitelId: "le06-kap-19",
    titel: "Dekubitusprophylaxe: Maßnahmen",
    titelB1: "Dekubitus verhindern: Was hilft wirklich?",
    tag: "pflege",
    geschaetzteDauer: 7,
    zusammenfassung:
      "Kernsatz: Bewegung geht vor Positionierung. Eigenbewegung fördern (Kinästhetik, Frühmobilisation). Erst bei unzureichender Eigenbewegung: Positionswechsel (30°-Seitenlage, Mikrolagerung) und Spezialmatratzen. Nicht evidenzbasiert: Einreiben, Massage über Knochenvorsprüngen, pauschale 2-Stunden-Intervalle ohne Hautbeurteilung.",
    zusammenfassungB1:
      "Wichtigster Satz: Bewegung geht vor Positionierung. Zuerst: Eigenbewegung fördern. Erst dann: Positionswechsel und Spezialmatratzen. Was NICHT hilft: Einreiben mit Franzbranntwein, Massage über Knochen-Vorsprüngen, pauschale 2-Stunden-Intervalle ohne Hautkontrolle.",
    glossarBegriffe: [
      "eigenbewegungsfoerderung",
      "spezialmatratze",
      "mikrobewegung",
    ],
    bloecke: [
      {
        type: "text",
        contentC1: `Wenn du nur einen Satz aus diesem Kapitel behältst, dann diesen: Bewegung geht vor Positionierung. Der DNQP-Expertenstandard Dekubitusprophylaxe (2017) stellt klar, dass die wichtigste Maßnahme die Förderung der Eigenbewegung ist. Kinästhetik, Frühmobilisation und aktive Bewegungsübungen helfen einem pflegebedürftigen Menschen, seine Position selbstständig zu verändern und Druckstellen selbst zu entlasten.

Erst wenn die Eigenbewegung nicht ausreicht — weil der Mensch zu schwach, bewusstlos oder sediert ist —, kommen positionierende Maßnahmen zum Einsatz. Dazu gehören die regelmäßige Positionswechsel (30°-Seitenlage, 135°-Lage, Mikrolagerungen), druckverteilende Hilfsmittel wie Spezialmatratzen (Weichlagerung oder Wechseldrucksysteme) und Schaumstoffauflagen für besonders gefährdete Stellen wie Fersen und Ellbogen.

Genauso wichtig wie die richtigen Maßnahmen ist das Wissen, was nicht hilft — denn einige verbreitete Praktiken sind nicht evidenzbasiert und teilweise sogar schädlich. Drei Beispiele, die du kennen musst.

Erstens: Einreiben mit durchblutungsfördernden Mitteln (Franzbranntwein, Kampferspiritus). Klingt plausibel — mehr Durchblutung sollte doch helfen? In Wirklichkeit gibt es keinen Beleg für einen Nutzen, und die alkoholhaltigen Substanzen können die Haut zusätzlich austrocknen und schädigen.

Zweitens: Massage über Knochenvorsprüngen. Ebenfalls weit verbreitet, aber kontraproduktiv — das bereits druckgeschädigte Gewebe wird durch die Massage zusätzlich mechanisch belastet. An geröteten Hautstellen ist Massage sogar eindeutig schädlich.

Drittens: Pauschale Umlagerungsintervalle von zwei Stunden, ohne die Haut zu beurteilen. Manche pflegebedürftige Menschen entwickeln schon nach einer Stunde eine Rötung, andere können problemlos drei Stunden in derselben Position bleiben. Individuelle Hautbeobachtung und der Fingertest bestimmen das Intervall — nicht die Uhr.`,
        contentB1: `Wenn du nur einen Satz aus diesem Kapitel behältst, dann diesen: Bewegung geht vor Positionierung. Der DNQP-Expertenstandard Dekubitus-Prophylaxe (2017) sagt klar: Die wichtigste Maßnahme ist die Förderung der Eigenbewegung. Kinästhetik, Früh-Mobilisation und aktive Bewegungs-Übungen helfen dem Menschen. Er kann seine Position selbstständig verändern. Er kann Druckstellen selbst entlasten.

Erst wenn die Eigenbewegung nicht ausreicht, kommen positionierende Maßnahmen zum Einsatz. Zum Beispiel, wenn der Mensch zu schwach, bewusstlos oder sediert (= mit Beruhigungsmitteln behandelt) ist. Dann braucht er regelmäßige Positionswechsel. Zum Beispiel: 30°-Seitenlage, 135°-Lage, Mikrolagerungen (= kleine Lageveränderungen). Dazu kommen druckverteilende Hilfsmittel. Zum Beispiel Spezialmatratzen oder Schaumstoff-Auflagen für besonders gefährdete Stellen wie Fersen und Ellbogen.

Genauso wichtig wie die richtigen Maßnahmen ist das Wissen: Was hilft NICHT? Manche verbreitete Methoden haben keinen Beweis für ihre Wirkung. Manche sind sogar schädlich. Drei Beispiele musst du kennen.

Erstens: Einreiben mit durchblutungsfördernden Mitteln. Zum Beispiel Franzbranntwein oder Kampferspiritus. Das klingt logisch — mehr Durchblutung sollte helfen. Aber es gibt keinen Beweis für einen Nutzen. Die alkoholhaltigen Mittel können die Haut sogar zusätzlich austrocknen und schädigen.

Zweitens: Massage über Knochen-Vorsprüngen. Auch das ist verbreitet. Aber es ist schädlich. Das Gewebe ist schon durch den Druck geschädigt. Die Massage belastet es zusätzlich. An geröteten Hautstellen ist Massage sogar eindeutig schädlich.

Drittens: Pauschale Umlagerungs-Intervalle von zwei Stunden. Ohne die Haut zu beurteilen. Manche Menschen entwickeln schon nach einer Stunde eine Rötung. Andere können problemlos drei Stunden in der gleichen Position bleiben. Die individuelle Hautbeobachtung und der Fingertest bestimmen das Intervall. Nicht die Uhr.`,
        quelle: "Vgl. DNQP 2017",
      },
    ],
  },

  // ── Kapitel 20: Sturzprophylaxe — Risikofaktoren erkennen ────────────
  {
    kapitelId: "le06-kap-20",
    titel: "Sturzprophylaxe: Risikofaktoren erkennen",
    titelB1: "Sturzprophylaxe: Wer ist gefährdet?",
    tag: "pflege",
    geschaetzteDauer: 7,
    zusammenfassung:
      "Sturz = unbeabsichtigtes Aufkommen auf Boden oder tieferer Ebene (auch Sturz auf Knie zählt, DNQP 2013). Drei Risikofaktor-Gruppen: personenbezogen (Alter, Gleichgewicht, Sehen, Kognition, Sturzangst, früherer Sturz), medikamentenbezogen (Polypharmazie, Sedativa, Antihypertensiva), umgebungsbezogen (Stolperfallen, Beleuchtung, Schuhwerk). Mehr als 50 % stürzen innerhalb von 12 Monaten erneut — Beinahestürze dokumentieren.",
    zusammenfassungB1:
      "Sturz = unbeabsichtigtes Aufkommen auf dem Boden oder einer tieferen Ebene. Auch Sturz auf die Knie zählt (DNQP 2013). Drei Gruppen von Risikofaktoren: beim Menschen selbst (Alter, Sehen, Sturzangst), Medikamente (Polypharmazie, Schlafmittel) und Umgebung (Stolperfallen, Licht, Schuhe). Mehr als die Hälfte stürzt in 12 Monaten erneut. Beinahestürze auch dokumentieren.",
    glossarBegriffe: ["sturz", "sturzangst", "polypharmazie"],
    bloecke: [
      {
        type: "text",
        contentC1: `Frau Siebert, 81 Jahre alt, stürzt im Krankenhaus, als sie nachts zur Toilette will — ihr zweiter Sturz innerhalb weniger Wochen. Vor wenigen Wochen war sie zu Hause über einen Teppichrand gestolpert und hatte sich dabei den Oberschenkelhals gebrochen. Solche Verläufe begegnen Pflegefachpersonen immer wieder. In Gesundheits- und Pflegeeinrichtungen zählen Stürze zu den häufigsten unerwünschten Zwischenfällen; die Konsequenzen reichen von harmlosen Prellungen über ernste Knochenbrüche bis hin zu andauernder Bewegungseinschränkung und im schlimmsten Fall zum Tod.

Die fachliche Definition ist weiter gefasst, als man auf den ersten Blick vermuten würde. Von einem Sturz spricht der DNQP-Expertenstandard Sturzprophylaxe (2013) immer dann, wenn jemand ohne Absicht den Halt verliert und auf dem Fußboden oder einer tiefer gelegenen Fläche aufschlägt. Es ist dabei nicht erforderlich, dass die Person ganz zum Liegen kommt — bereits ein Aufkommen auf den Knien gilt als Sturzereignis und muss dokumentiert werden.

Die Risikofaktoren teilen sich in drei Gruppen. Personenbezogene Faktoren sind beim Menschen selbst zu finden: Höheres Alter, Gleichgewichtsstörungen, Sehbeeinträchtigungen, kognitive Einschränkungen (z. B. Demenz), Kontinenzprobleme (der Weg zur Toilette wird unter Zeitdruck zum Risiko), Sturzangst und — besonders wichtig — ein Sturz in der Vorgeschichte. Medikamentenbezogene Faktoren spielen eine größere Rolle als oft angenommen: Polypharmazie (gleichzeitige Einnahme von fünf oder mehr Medikamenten), psychotrope Medikamente (Schlaf- und Beruhigungsmittel, Antidepressiva) und Antihypertensiva (Blutdrucksenker, die orthostatische Hypotonie verursachen können). Umgebungsbezogene Faktoren sind oft am leichtesten zu beheben: Stolperfallen wie Teppichkanten oder herumliegende Kabel, schlechte Beleuchtung — besonders nachts —, falsches Schuhwerk und nicht festgestellte Bettbremsen.

Eine alarmierende Zahl: Mehr als die Hälfte der Personen, die einmal zu Fall gekommen sind, erleben innerhalb der folgenden zwölf Monate einen weiteren Sturz (DNQP 2013). Stürze neigen also zur Wiederholung. Gerade deshalb sind sogenannte Beinahestürze — Situationen, in denen ein drohender Sturz im letzten Moment abgefangen werden konnte — sorgfältig festzuhalten. Sie gelten als Vorboten eines erhöhten Sturzrisikos und müssen in die Pflegeplanung einfließen.`,
        contentB1: `Frau Siebert ist 81 Jahre alt. Nachts will sie im Krankenhaus zur Toilette. Dabei kommt sie zu Fall. Es ist schon der zweite Sturz in wenigen Wochen. Den ersten Sturz hatte sie zu Hause. Sie ist über einen Teppichrand gestolpert. Dabei hat sie sich den Oberschenkelhals gebrochen. Solche Geschichten erleben Pflegefachpersonen oft. In Gesundheits-Einrichtungen gehören Stürze zu den häufigsten schlimmen Zwischenfällen. Die Folgen reichen von harmlosen Prellungen über ernste Knochenbrüche bis hin zu dauerhafter Immobilität und Tod.

Die fachliche Definition ist weiter, als viele denken. Der DNQP-Expertenstandard Sturzprophylaxe (2013) spricht von einem Sturz, wenn ein Mensch ohne Absicht den Halt verliert und auf dem Fußboden oder einer tiefer liegenden Fläche aufschlägt. Der Mensch muss dabei nicht ganz zum Liegen kommen. Auch wer auf den Knien landet, ist gestürzt. Der Vorfall muss dokumentiert werden.

Die Risikofaktoren teilen sich in drei Gruppen. Personenbezogene Faktoren liegen beim Menschen selbst: Höheres Alter. Gleichgewichts-Störungen. Seh-Beeinträchtigungen. Kognitive Einschränkungen (zum Beispiel Demenz). Inkontinenz — der Weg zur Toilette wird unter Zeitdruck zum Risiko. Sturzangst. Und besonders wichtig: ein früherer Sturz. Medikamentenbezogene Faktoren spielen eine große Rolle. Polypharmazie (= gleichzeitige Einnahme von fünf oder mehr Medikamenten). Psychotrope Medikamente (= Schlaf- und Beruhigungsmittel, Antidepressiva). Blutdruck-Senker, die orthostatische Hypotonie (= Blutdruckabfall beim Aufstehen) verursachen können. Umgebungsbezogene Faktoren sind oft am leichtesten zu beheben: Stolperfallen wie Teppichkanten oder herumliegende Kabel. Schlechte Beleuchtung, besonders nachts. Falsches Schuhwerk. Nicht festgestellte Bettbremsen.

Eine alarmierende Zahl: Mehr als die Hälfte aller gestürzten Personen stürzt innerhalb von zwölf Monaten erneut (DNQP 2013). Stürze neigen also zur Wiederholung. Deshalb ist auch die Dokumentation von Beinahestürzen wichtig. Ein Beinahesturz ist eine Situation, in der ein Sturz gerade noch abgefangen wurde. Er ist ein Frühwarnzeichen für ein erhöhtes Sturzrisiko. Er muss in die Pflege-Planung einfließen.`,
        quelle: "Vgl. DNQP 2013",
      },
    ],
  },

  // ── Kapitel 21: Sturzprophylaxe — Assessment und Maßnahmen ───────────
  {
    kapitelId: "le06-kap-21",
    titel: "Sturzprophylaxe: Assessment und Maßnahmen",
    titelB1: "Sturzprophylaxe: TUG-Test und Maßnahmen",
    tag: "pflege",
    geschaetzteDauer: 8,
    zusammenfassung:
      "TUG-Test (Podsiadlo/Richardson 1991): Aufstehen, 3 m gehen, umdrehen, zurück, setzen. <10 s = unauffällig, 10–19 s = leichte Einschränkung, ≥20 s = erhöhtes Sturzrisiko. Maßnahmen an allen drei Risikofaktor-Gruppen: Kraft-/Gleichgewichtstraining, Medikamentenüberprüfung, Schuhwerk, Haltegriffe, Beleuchtung, Stolperfallen beseitigen, Klingel in Reichweite. Sturzangst-Spirale: Sturz → Angst → weniger Bewegung → Muskelabbau → höheres Risiko.",
    zusammenfassungB1:
      "TUG-Test: Aufstehen, 3 Meter gehen, umdrehen, zurück, setzen. Unter 10 Sekunden = unauffällig. Ab 20 Sekunden = erhöhtes Sturzrisiko. Maßnahmen: Kraft- und Gleichgewichts-Training, Medikamente überprüfen, passendes Schuhwerk, Haltegriffe, Licht, Stolperfallen weg, Klingel in Reichweite. Sturzangst-Spirale: Sturz macht Angst — weniger Bewegung — Muskelabbau — noch höheres Sturzrisiko.",
    glossarBegriffe: [
      "timed-up-and-go-test",
      "sturzangst",
      "kraft-und-gleichgewichtstraining",
    ],
    bloecke: [
      {
        type: "text",
        contentC1: `Wie misst man eigentlich Sturzrisiko? Natürlich nicht, indem man wartet bis jemand fällt. Es gibt standardisierte Tests, und der bekannteste ist der Timed-Up-and-Go-Test, kurz TUG (Podsiadlo/Richardson, 1991).

Der Ablauf ist denkbar einfach: Der pflegebedürftige Mensch sitzt auf einem Stuhl mit Armlehne. Auf dein Signal steht er auf, geht drei Meter geradeaus, dreht um, geht zurück und setzt sich wieder. Du misst die Zeit. Unter zehn Sekunden: keine relevante Einschränkung. Zwischen zehn und neunzehn Sekunden: leichte Mobilitätseinschränkung, aber meist noch ausreichend für den Alltag. Ab zwanzig Sekunden: Das Sturzrisiko ist deutlich erhöht, und es besteht Handlungsbedarf.

Die Maßnahmen der Sturzprophylaxe setzen an allen drei Risikofaktor-Gruppen an. Bei den personenbezogenen Faktoren: Kraft- und Gleichgewichtstraining ist die evidenzbasiert wirksamste Einzelmaßnahme. Gezieltes Training stärkt die Muskulatur und verbessert die Balance — beides reduziert das Sturzrisiko nachweislich. Bei den medikamentenbezogenen Faktoren: Regelmäßige Überprüfung der Medikation durch den Arzt, insbesondere wenn mehr als fünf Medikamente gleichzeitig eingenommen werden. Sedativa und Schlafmittel sollten möglichst reduziert oder abgesetzt werden.

Bei den umgebungsbezogenen Faktoren geht es um praktische Maßnahmen: Geeignetes Schuhwerk — und zwar individuell passend, nicht pauschal „geschlossene Schuhe für alle". Haltegriffe und Handläufe auf dem Flur und im Bad. Ausreichende Beleuchtung, auch und gerade nachts (Nachtlicht auf dem Weg zur Toilette). Stolperfallen beseitigen: Teppichkanten, Kabel, nasser Boden. Bettbremsen konsequent feststellen. Klingel immer in Reichweite positionieren.

Ein besonderes Phänomen, das du verstehen musst, ist die Sturzangst-Spirale. Ein Sturz erzeugt Angst vor dem nächsten Sturz. Diese Angst führt dazu, dass der Mensch sich weniger bewegt. Weniger Bewegung bedeutet Muskelabbau und Gleichgewichtsverlust. Das erhöht das Sturzrisiko weiter — und beim nächsten Sturz wächst die Angst noch mehr. Gleichzeitig zieht sich der Mensch sozial zurück, verliert Antrieb und Motivation. Diese Spirale zu durchbrechen ist eine zentrale pflegerische Aufgabe: Ermutigung, schrittweise Mobilisation in sicherer Umgebung und das Vermitteln von Sicherheit helfen, den Teufelskreis aufzubrechen.`,
        contentB1: `Wie misst man Sturzrisiko? Natürlich nicht, indem man wartet, bis jemand hinfällt. Es gibt Tests dafür. Der bekannteste ist der Timed-Up-and-Go-Test, kurz TUG (Podsiadlo/Richardson, 1991).

Der Ablauf ist einfach. Der Mensch sitzt auf einem Stuhl mit Armlehne. Auf dein Signal steht er auf. Er geht drei Meter geradeaus. Er dreht um. Er geht zurück. Er setzt sich wieder. Du misst die Zeit. Unter zehn Sekunden: keine Einschränkung. Zwischen zehn und neunzehn Sekunden: leichte Einschränkung bei der Mobilität. Aber meistens reicht es noch für den Alltag. Ab zwanzig Sekunden: Das Sturzrisiko ist deutlich erhöht. Du musst handeln.

Die Maßnahmen der Sturz-Prophylaxe setzen an allen drei Risikofaktor-Gruppen an. Bei den personenbezogenen Faktoren: Kraft- und Gleichgewichts-Training ist die Maßnahme mit dem besten Beweis. Gezieltes Training stärkt die Muskulatur. Es verbessert die Balance. Beides reduziert das Sturzrisiko nachweislich. Bei den medikamentenbezogenen Faktoren: Der Arzt soll die Medikation regelmäßig überprüfen. Besonders wenn mehr als fünf Medikamente gleichzeitig eingenommen werden. Schlaf- und Beruhigungsmittel sollen wenn möglich reduziert oder abgesetzt werden.

Bei den umgebungsbezogenen Faktoren geht es um praktische Maßnahmen. Geeignetes Schuhwerk — individuell passend, nicht pauschal „geschlossene Schuhe für alle". Haltegriffe und Handläufe auf dem Flur und im Bad. Ausreichende Beleuchtung, auch und gerade nachts. Ein Nachtlicht auf dem Weg zur Toilette. Stolperfallen beseitigen: Teppichkanten, Kabel, nasser Boden. Bettbremsen immer feststellen. Klingel immer in Reichweite.

Ein besonderes Phänomen musst du verstehen: die Sturzangst-Spirale. Ein Sturz erzeugt Angst vor dem nächsten Sturz. Diese Angst führt dazu, dass der Mensch sich weniger bewegt. Weniger Bewegung bedeutet Muskelabbau und Gleichgewichtsverlust. Das erhöht das Sturzrisiko weiter. Beim nächsten Sturz wächst die Angst noch mehr. Gleichzeitig zieht sich der Mensch sozial zurück. Er verliert Antrieb und Motivation. Diese Spirale zu durchbrechen ist eine wichtige pflegerische Aufgabe. Ermutigung hilft. Schrittweise Mobilisation in sicherer Umgebung hilft. Das Vermitteln von Sicherheit hilft.`,
        quelle: "Vgl. DNQP 2013; Podsiadlo/Richardson 1991",
      },
    ],
  },

  // ── Kapitel 22: Kontrakturenprophylaxe — Wenn Gelenke versteifen ─────
  {
    kapitelId: "le06-kap-22",
    titel: "Kontrakturenprophylaxe: Wenn Gelenke versteifen",
    titelB1: "Kontrakturen: Wenn Gelenke versteifen",
    tag: "krankheitslehre",
    geschaetzteDauer: 6,
    zusammenfassung:
      "Kontraktur = dauerhafte Gelenkversteifung durch Schrumpfung von Muskeln, Sehnen, Bändern. Beginnt nach 4–14 Tagen Ruhigstellung, kann irreversibel werden. Besonders gefährdet: Sprunggelenk (Spitzfuß durch Bettdecke → Plantarflexion), Handgelenk/Finger (Krallenhand bei Spastik), Hüfte (Beugekontraktur), Knie (Streckkontraktur).",
    zusammenfassungB1:
      "Kontraktur = Gelenk versteift dauerhaft. Muskeln, Sehnen, Bänder schrumpfen. Beginnt schon nach 4–14 Tagen ohne Bewegung. Kann irreversibel werden (= man kann es nicht mehr rückgängig machen). Besonders gefährdet: Sprunggelenk (Spitzfuß durch Bettdecke), Hand/Finger (Krallenhand bei Spastik), Hüfte, Knie.",
    glossarBegriffe: ["kontraktur", "spitzfuss", "plantarflexion"],
    bloecke: [
      {
        type: "text",
        contentC1: `Stell dir ein Gummiband vor, das du in gedehnter Position fixierst und tagelang so lässt. Irgendwann verliert es seine Elastizität und kehrt nicht mehr in die ursprüngliche Form zurück. Genau das passiert mit Muskeln, Sehnen und Bändern, wenn ein Gelenk über längere Zeit nicht bewegt wird.

Eine Kontraktur ist die dauerhafte Versteifung eines Gelenks. Die Bindegewebsstrukturen rund um das Gelenk — Muskeln, Sehnen, Bänder, Gelenkkapsel — verkürzen sich und schrumpfen zusammen. Das betroffene Gelenk kann nicht mehr vollständig gebeugt oder gestreckt werden. Das Erschreckende: Dieser Prozess beginnt bereits nach vier bis vierzehn Tagen Ruhigstellung. Und wenn eine Kontraktur erst einmal voll ausgebildet ist, kann sie irreversibel sein — kein Training und keine Physiotherapie bringt das Gelenk dann zurück in seinen vollen Bewegungsumfang.

Bestimmte Gelenke sind besonders anfällig. Das Sprunggelenk ist das Paradebeispiel: Wenn ein pflegebedürftiger Mensch im Bett liegt, drückt die Bettdecke permanent auf den Fußrücken und schiebt den Fuß in eine Plantarflexion — der Fuß steht nach unten, wie bei einer Ballerina auf Spitzen. Bleibt diese Position über Tage bestehen, verkürzen sich die Wadenmuskulatur und die Achillessehne. Das Ergebnis ist ein Spitzfuß: Der Mensch kann den Fuß nicht mehr flach aufsetzen und damit nicht mehr sicher gehen oder stehen.

Weitere gefährdete Gelenke sind Handgelenk und Finger — besonders bei Schlaganfall-Patienten mit Spastik kann sich eine Krallenhand entwickeln, bei der die Finger dauerhaft gebeugt sind. Das Hüftgelenk neigt bei bettlägerigen Menschen zur Beugekontraktur: Das Gelenk versteift in gebeugter Position, sodass aufrechtes Stehen unmöglich wird. Am Knie kann eine Streckkontraktur entstehen, die das Beugen verhindert.

Die Botschaft ist klar: Kontrakturenprophylaxe muss früh beginnen — nicht wenn die ersten Anzeichen da sind, sondern vom ersten Tag der Immobilität an.`,
        contentB1: `Stell dir ein Gummiband vor. Du fixierst es in gedehnter Position. Du lässt es tagelang so. Irgendwann verliert es seine Elastizität. Es geht nicht mehr in die ursprüngliche Form zurück. Genau das passiert mit Muskeln, Sehnen und Bändern. Wenn ein Gelenk über längere Zeit nicht bewegt wird.

Eine Kontraktur (= Gelenk-Versteifung) ist die dauerhafte Versteifung eines Gelenks. Die Strukturen rund um das Gelenk verkürzen sich und schrumpfen zusammen. Muskeln, Sehnen, Bänder, Gelenkkapsel. Das betroffene Gelenk kann nicht mehr vollständig gebeugt oder gestreckt werden. Das Erschreckende: Dieser Prozess beginnt schon nach vier bis vierzehn Tagen Ruhigstellung. Und wenn eine Kontraktur voll ausgebildet ist, kann sie irreversibel (= nicht mehr rückgängig zu machen) sein. Kein Training und keine Physiotherapie bringt das Gelenk zurück in seinen vollen Bewegungsumfang.

Bestimmte Gelenke sind besonders anfällig. Das Sprunggelenk ist das beste Beispiel. Wenn ein Mensch im Bett liegt, drückt die Bettdecke auf den Fußrücken. Der Fuß wird nach unten gedrückt. In eine Plantarflexion (= der Fuß steht nach unten). Wie bei einer Ballerina auf Spitzen. Bleibt diese Position über Tage bestehen, verkürzen sich die Wadenmuskulatur und die Achillessehne. Das Ergebnis ist ein Spitzfuß. Der Mensch kann den Fuß nicht mehr flach aufsetzen. Er kann nicht mehr sicher gehen oder stehen.

Weitere gefährdete Gelenke sind Handgelenk und Finger. Besonders bei Schlaganfall-Patienten mit Spastik (= unwillkürliche Muskelanspannung) kann sich eine Krallenhand entwickeln. Die Finger sind dauerhaft gebeugt. Das Hüftgelenk neigt bei bettlägerigen Menschen zur Beugekontraktur. Das Gelenk versteift in gebeugter Position. Aufrechtes Stehen wird unmöglich. Am Knie kann eine Streckkontraktur entstehen. Sie verhindert das Beugen.

Die Botschaft ist klar: Kontrakturen-Prophylaxe muss früh beginnen. Nicht wenn die ersten Zeichen da sind. Sondern vom ersten Tag der Immobilität an.`,
        quelle: "Vgl. Fachliteratur Kontrakturenprophylaxe",
      },
    ],
  },

  // ── Kapitel 23: Kontrakturen Maßnahmen ──────────────────────────
  {
    kapitelId: "le06-kap-23",
    titel: "Kontrakturenprophylaxe: Maßnahmen und Übungen",
    titelB1: "Kontrakturen verhindern",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Prinzip: Jedes Gelenk regelmäßig durch den vollen physiologischen Bewegungsumfang führen — aktiv oder passiv. Hilfsmittel: Bettbogen (gegen Spitzfuß), Spitzfuß-Schiene, Schienen nach Verordnung. Funktionsstellung = Position mit meister Alltagsfunktion, Neutral-Null-Stellung = anatomische Ausgangsposition.",
    zusammenfassungB1: "Prinzip: Jedes Gelenk regelmäßig durch den ganzen Bewegungsumfang bewegen — aktiv oder passiv. Hilfsmittel: Bettbogen (gegen Spitzfuß), Schienen. Funktionsstellung = beste Alltags-Position. Neutral-Null-Stellung = anatomische Ausgangs-Position.",
    glossarBegriffe: ["Aktive / passive Bewegungsübungen", "Funktionsstellung", "Neutral-Null-Stellung", "Bettbogen"],
    bloecke: [
      {
        type: "text",
        contentC1: `Die Prophylaxe von Kontrakturen folgt einem klaren Prinzip: Jedes Gelenk muss regelmäßig durch seinen vollen physiologischen Bewegungsumfang geführt werden — entweder aktiv durch den pflegebedürftigen Menschen selbst oder passiv durch die Pflegefachperson.

Bei den aktiven Bewegungsübungen bewegt der Mensch seine Gelenke selbstständig. Du erklärst die Übung, zeigst sie vor und motivierst zur regelmäßigen Durchführung. Beispiel: Fußkreisen und Fußwippen gegen den Spitzfuß, Fingerübungen mit einem weichen Ball gegen die Krallenhand, Kniebeugung und -streckung im Bett. Aktive Übungen sind immer vorzuziehen, weil sie gleichzeitig Kraft, Koordination und Selbstwirksamkeit fördern.

Passive Bewegungsübungen werden nötig, wenn der Mensch ein Gelenk nicht selbst bewegen kann — etwa bei Bewusstlosigkeit, schwerer Parese oder nach bestimmten Operationen. Die Pflegefachperson führt das Gelenk langsam und vorsichtig durch den gesamten Bewegungsumfang, ohne Kraft anzuwenden und ohne Schmerzen zu verursachen. Dabei gilt: Nie über den Schmerzpunkt hinaus bewegen. Passive Übungen erhalten den Bewegungsumfang, bauen aber keine Muskelkraft auf.

Für die Spitzfußprophylaxe gibt es spezielle Hilfsmittel. Ein Bettbogen nimmt das Gewicht der Bettdecke vom Fuß und verhindert, dass die Decke den Fuß in Plantarflexion drückt. Eine Spitzfußprophylaxe-Schiene hält das Sprunggelenk in der gewünschten 90°-Stellung. Schienen für andere Gelenke werden nach ärztlicher Verordnung eingesetzt.

Zwei Begriffe begegnen dir in der Kontrakturenprophylaxe immer wieder. Die Funktionsstellung ist diejenige Gelenkposition, die dem Menschen im Alltag am meisten Funktion erhält. Für die Hand bedeutet das: leichte Beugung in Handgelenk und Fingern, Daumen in Opposition — die typische Greifstellung. Für den Fuß: 90° im Sprunggelenk — die Stellung zum Stehen und Gehen. Die Neutral-Null-Stellung dagegen ist die anatomische Ausgangsposition, von der aus der Bewegungsumfang eines Gelenks gemessen wird: Der Mensch steht aufrecht, Arme hängen seitlich, Handflächen zeigen nach vorn, Füße parallel. Sie dient als Referenz für die Dokumentation.`,
        contentB1: `Die Prophylaxe gegen Kontrakturen folgt einem klaren Prinzip: Jedes Gelenk muss regelmäßig durch seinen vollen Bewegungsumfang geführt werden. Entweder aktiv — der Mensch bewegt selbst. Oder passiv — die Pflege-Fachperson bewegt das Gelenk.

Bei den aktiven Bewegungs-Übungen bewegt der Mensch seine Gelenke selbstständig. Du erklärst die Übung. Du zeigst sie vor. Du motivierst zur regelmäßigen Wiederholung. Beispiel: Fußkreisen und Fußwippen gegen den Spitzfuß. Fingerübungen mit einem weichen Ball gegen die Krallenhand. Kniebeugung und Kniestreckung im Bett. Aktive Übungen sind immer besser. Denn sie fördern gleichzeitig Kraft, Koordination (= Zusammenspiel der Bewegungen) und Selbstwirksamkeit (= das Gefühl, etwas selbst zu können).

Passive Bewegungs-Übungen werden nötig, wenn der Mensch ein Gelenk nicht selbst bewegen kann. Zum Beispiel bei Bewusstlosigkeit. Oder bei schwerer Parese (= Lähmung). Oder nach bestimmten Operationen. Die Pflege-Fachperson führt das Gelenk langsam und vorsichtig durch den gesamten Bewegungsumfang. Ohne Kraft. Ohne Schmerzen. Wichtig: Nie über den Schmerzpunkt hinaus bewegen. Passive Übungen erhalten den Bewegungsumfang. Aber sie bauen keine Muskelkraft auf.

Für die Spitzfuß-Prophylaxe gibt es spezielle Hilfsmittel. Ein Bettbogen nimmt das Gewicht der Bettdecke vom Fuß. Er verhindert, dass die Decke den Fuß nach unten drückt. Eine Spitzfuß-Prophylaxe-Schiene hält das Sprunggelenk in 90°-Stellung. Schienen für andere Gelenke werden nach ärztlicher Verordnung eingesetzt.

Zwei Begriffe begegnen dir immer wieder. Die Funktionsstellung ist die Gelenk-Position, die dem Menschen im Alltag am meisten Funktion erhält. Für die Hand bedeutet das: leichte Beugung. Daumen in Greifstellung. Für den Fuß: 90° im Sprunggelenk. Das ist die Stellung zum Stehen und Gehen. Die Neutral-Null-Stellung ist die anatomische Ausgangs-Position. Von hier aus misst man den Bewegungsumfang eines Gelenks. Der Mensch steht aufrecht. Die Arme hängen seitlich. Die Handflächen zeigen nach vorn. Die Füße stehen parallel. Sie dient als Referenz für die Dokumentation.`,
        quelle: "Vgl. Fachliteratur Kontrakturenprophylaxe, Orthopädie",
      },
    ],
  },

  // ── Kapitel 24: Thrombose Virchow-Trias ──────────────────────────
  {
    kapitelId: "le06-kap-24",
    titel: "Thromboseprophylaxe: Die Virchow-Trias verstehen",
    titelB1: "Thrombose: Die Virchow-Trias",
    tag: "krankheitslehre",
    geschaetzteDauer: 5,
    zusammenfassung: "Virchow-Trias (1856): (1) verlangsamter Blutfluss (Immobilität → Muskelvenenpumpe), (2) Gefäßwandschädigung (OP, Trauma), (3) erhöhte Gerinnungsneigung (Dehydratation). Expositionelle (akut: OP) vs. dispositionelle (dauerhaft: Alter >60, Tumor). Tiefe Beinvenenthrombose oft symptomarm — Gefahr Lungenembolie.",
    zusammenfassungB1: "Virchow-Trias (3 Faktoren für Thrombose): Blut fließt langsamer, Gefäßwand ist beschädigt, Blut gerinnt leichter. Expositionelle Faktoren sind akut (OP). Dispositionelle Faktoren sind dauerhaft (Alter, Tumor). Gefahr: Lungenembolie — kann tödlich sein.",
    glossarBegriffe: ["Thrombose", "Virchow-Trias", "Muskelvenenpumpe", "Lungenembolie", "Expositionelle / dispositionelle Risikofaktoren"],
    bloecke: [
      {
        type: "text",
        contentC1: `Warum bilden sich Blutgerinnsel in den Venen? Diese Frage hat der Pathologe Rudolf Virchow bereits 1856 beantwortet — und seine Erklärung ist bis heute gültig. Die nach ihm benannte Virchow-Trias beschreibt drei Faktoren, die zusammen zur Thromboseentstehung führen.

Der erste Faktor ist ein verlangsamter Blutfluss. In den tiefen Beinvenen wird das Blut normalerweise durch die Muskelvenenpumpe herzwärts transportiert: Wenn sich die Wadenmuskulatur beim Gehen zusammenzieht, presst sie das Blut in den Venen nach oben. Bei immobilen Menschen fällt diese Pumpe aus — das Blut staut sich, fließt langsamer, und die Gefahr einer Gerinnselbildung steigt.

Der zweite Faktor ist eine Schädigung der Gefäßwand. Durch Operationen, Traumata oder Entzündungen wird die Innenwand der Vene verletzt. An der beschädigten Stelle lagern sich Blutplättchen an — der Beginn eines Gerinnsels.

Der dritte Faktor ist eine erhöhte Gerinnungsneigung des Blutes. Diese kann durch Dehydratation entstehen (das Blut wird „dicker", also visköser), durch Gerinnungsstörungen, durch hormonelle Einflüsse (z. B. Schwangerschaft, hormonelle Verhütung) oder durch bestimmte Medikamente.

Für die Risikoeinschätzung unterscheidet die S3-Leitlinie (AWMF, 2015) zwischen expositionellen und dispositionellen Risikofaktoren. Expositionelle Faktoren sind akut und zeitlich begrenzt: eine Operation, ein Trauma, Immobilisation durch Bettruhe, Schwangerschaft. Dispositionelle Faktoren sind dauerhaft vorhanden: Alter über 60 Jahre, Tumorerkrankung, eine frühere Thrombose, Adipositas. Das Gesamtrisiko ergibt sich aus der Kombination beider Gruppen — je mehr Faktoren zusammenkommen, desto höher die Gefahr.

Und die Gefahr ist real: Eine tiefe Beinvenenthrombose kann im Frühstadium symptomarm oder sogar symptomlos sein. Der betroffene Mensch merkt nichts — doch in seiner Beinvene wächst ein Gerinnsel. Wenn sich dieses Gerinnsel oder ein Teil davon löst, wandert es über den Blutkreislauf in die Lunge und kann dort eine Lungenembolie verursachen. Das ist ein akuter Notfall, der ohne sofortige Behandlung tödlich enden kann.`,
        contentB1: `Warum bilden sich Blutgerinnsel in den Venen? Diese Frage hat der Pathologe Rudolf Virchow schon 1856 beantwortet. Seine Erklärung gilt bis heute. Die nach ihm benannte Virchow-Trias beschreibt drei Faktoren. Zusammen führen sie zur Thrombose (= Blutgerinnsel).

Der erste Faktor ist ein verlangsamter Blutfluss. In den tiefen Beinvenen wird das Blut normalerweise durch die Muskel-Venenpumpe zum Herzen transportiert. Das funktioniert so: Wenn sich die Wadenmuskulatur beim Gehen zusammenzieht, presst sie das Blut in den Venen nach oben. Bei immobilen Menschen fällt diese Pumpe aus. Das Blut staut sich. Es fließt langsamer. Die Gefahr für ein Blutgerinnsel steigt.

Der zweite Faktor ist eine Schädigung der Gefäßwand. Durch Operationen, Verletzungen oder Entzündungen wird die Innenwand der Vene verletzt. An der beschädigten Stelle lagern sich Blutplättchen an. Das ist der Beginn eines Gerinnsels.

Der dritte Faktor ist eine erhöhte Gerinnungsneigung des Blutes. Das Blut gerinnt leichter als normal. Das kann durch Dehydratation (= zu wenig Flüssigkeit) entstehen. Das Blut wird „dicker". Auch Gerinnungsstörungen, Schwangerschaft, hormonelle Verhütung oder bestimmte Medikamente können die Ursache sein.

Für die Risiko-Einschätzung unterscheidet die S3-Leitlinie (AWMF, 2015) zwischen zwei Arten von Risikofaktoren. Expositionelle Faktoren sind akut und zeitlich begrenzt: eine Operation, eine Verletzung, Immobilisation durch Bettruhe, Schwangerschaft. Dispositionelle Faktoren sind dauerhaft vorhanden: Alter über 60 Jahre, Tumorerkrankung, eine frühere Thrombose, Adipositas (= starkes Übergewicht). Das Gesamtrisiko ergibt sich aus der Kombination. Je mehr Faktoren zusammenkommen, desto höher die Gefahr.

Die Gefahr ist real: Eine tiefe Beinvenen-Thrombose kann im Frühstadium ohne Symptome sein. Der Mensch merkt nichts. Aber in seiner Beinvene wächst ein Gerinnsel. Wenn sich dieses Gerinnsel oder ein Teil davon löst, wandert es über den Blutkreislauf in die Lunge. Dort kann es eine Lungenembolie (= ein Blutgerinnsel blockiert die Lungengefäße) verursachen. Das ist ein akuter Notfall. Ohne sofortige Behandlung kann es tödlich enden.`,
        quelle: "Vgl. Virchow 1856; AWMF S3-Leitlinie VTE-Prophylaxe 2015",
      },
    ],
  },

  // ── Kapitel 25: Thromboseprophylaxe MTS ──────────────────────────
  {
    kapitelId: "le06-kap-25",
    titel: "Thromboseprophylaxe: Maßnahmen — Von MTS bis Heparin",
    titelB1: "Thrombose verhindern: MTS und Heparin",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Frühmobilisation als wirksamste Maßnahme (AWMF 2015): Wadenaktivierung → Muskelvenenpumpe. MTS: Kompression distal→proximal, morgens vor dem Aufstehen anziehen, faltenfrei, Zehen frei. Medikamentös: niedermolekulares Heparin s.c. nach ärztlicher Anordnung. Flüssigkeit + leichte Hochlagerung.",
    zusammenfassungB1: "Bewegung ist die wichtigste Maßnahme. MTS (Thrombose-Strümpfe) morgens vor dem Aufstehen anziehen — faltenfrei, Zehen frei. Arzt kann Heparin-Spritze verordnen. Dazu: ausreichend trinken und Beine leicht hochlagern.",
    glossarBegriffe: ["MTS", "Kompression (distal → proximal)", "Niedermolekulares Heparin"],
    bloecke: [
      {
        type: "text",
        contentC1: `Auch bei der Thromboseprophylaxe gilt: Bewegung ist die wirksamste Maßnahme. Jede Aktivierung der Wadenmuskulatur fördert den venösen Rückfluss und wirkt damit der Blutstauung entgegen (AWMF, S3-Leitlinie VTE-Prophylaxe, 2015). Im Bett kann der pflegebedürftige Mensch die Füße kreisen, wippen und abwechselnd strecken und anziehen — das aktiviert die Muskelvenenpumpe auch ohne Aufstehen. Sobald es der Zustand erlaubt, ist Aufstehen und Gehen die beste Prophylaxe.

Ein wichtiges pflegerisches Instrument sind die Medizinischen Thromboseprophylaxe-Strümpfe (MTS). Sie erzeugen eine Kompression, die von den Zehen zum Oberschenkel hin abnimmt — also distal stärker als proximal. Dadurch wird das venöse Blut Richtung Herz gedrückt. Beim Anlegen gibt es Regeln, die du im Schlaf beherrschen solltest.

Zeitpunkt: MTS werden morgens angezogen, bevor der pflegebedürftige Mensch aufsteht. Im Liegen sind die Beine entlastet und die Venen weniger gefüllt — so lassen sich die Strümpfe leichter anziehen und ihre Wirkung entfaltet sich optimal. Technik: Strumpf umstülpen bis zur Ferse, über den Fuß ziehen (Zehenbereich frei lassen, damit du die Durchblutung kontrollieren kannst), dann faltenfrei nach oben ziehen. Falten sind gefährlich — sie erzeugen eine lokale Stauung, die genau das Gegenteil der gewünschten Wirkung bewirkt. Größe: Die richtige Strumpfgröße muss individuell ermittelt werden. Zu eng erzeugt Stauung, zu weit hat keinen Kompressionseffekt.

Zur medikamentösen Prophylaxe verordnet der Arzt in vielen Fällen niedermolekulares Heparin als subkutane Injektion. Das liegt in ärztlicher Verantwortung, aber als Pflegefachperson verabreichst du es und beobachtest mögliche Nebenwirkungen (Hämatome an der Einstichstelle, allergische Reaktionen).

Ergänzend ist eine ausreichende Flüssigkeitszufuhr wichtig: Dehydratation erhöht die Blutviskosität und damit die Gerinnungsneigung. Und die Hochlagerung der Beine fördert den venösen Rückstrom — allerdings nur leicht erhöht, nicht senkrecht nach oben.`,
        contentB1: `Auch bei der Thrombose-Prophylaxe gilt: Bewegung ist die wirksamste Maßnahme. Jede Aktivierung der Wadenmuskulatur fördert den Blutfluss in den Venen. Das wirkt gegen Blutstauung (AWMF, S3-Leitlinie VTE-Prophylaxe, 2015). Im Bett kann der Mensch die Füße bewegen: kreisen, wippen, abwechselnd strecken und anziehen. Das aktiviert die Muskel-Venenpumpe auch ohne Aufstehen. Sobald es der Zustand erlaubt, ist Aufstehen und Gehen die beste Prophylaxe.

Ein wichtiges pflegerisches Hilfsmittel sind MTS. MTS steht für Medizinische Thrombose-Prophylaxe-Strümpfe. Sie erzeugen eine Kompression (= Druck). Diese Kompression ist an den Zehen am stärksten und wird zum Oberschenkel hin schwächer. Man sagt: distal (= körperfern) stärker als proximal (= körpernah). Dadurch wird das Blut in den Venen zum Herzen gedrückt. Beim Anlegen gibt es Regeln. Du solltest sie im Schlaf beherrschen.

Zeitpunkt: MTS werden morgens angezogen. Bevor der Mensch aufsteht. Im Liegen sind die Beine entlastet. Die Venen sind weniger gefüllt. So lassen sich die Strümpfe leichter anziehen. Und sie wirken besser. Technik: Den Strumpf umstülpen bis zur Ferse. Über den Fuß ziehen. Den Zehenbereich frei lassen. So kannst du die Durchblutung kontrollieren. Dann faltenfrei nach oben ziehen. Falten sind gefährlich. Sie erzeugen eine örtliche Stauung. Das ist genau das Gegenteil von dem, was du willst. Größe: Die richtige Strumpfgröße muss individuell ermittelt werden. Zu eng erzeugt Stauung. Zu weit hat keinen Kompressions-Effekt.

Zur medikamentösen Prophylaxe verordnet der Arzt oft niedermolekulares Heparin. Das ist eine Spritze unter die Haut (= subkutan). Die Verordnung liegt beim Arzt. Aber du als Pflege-Fachperson gibst die Spritze. Und du beobachtest mögliche Nebenwirkungen. Zum Beispiel: blaue Flecken an der Einstichstelle oder allergische Reaktionen.

Zusätzlich ist eine ausreichende Flüssigkeitszufuhr wichtig. Dehydratation macht das Blut dicker. Das erhöht die Gerinnungsneigung. Und die Hochlagerung der Beine fördert den Blut-Rückstrom. Aber nur leicht erhöht. Nicht senkrecht nach oben.`,
        quelle: "Vgl. AWMF S3-Leitlinie VTE-Prophylaxe 2015",
      },
    ],
  },

  // ── Kapitel 26: Pneumonieprophylaxe LISA ──────────────────────────
  {
    kapitelId: "le06-kap-26",
    titel: "Pneumonieprophylaxe: Das LISA-Prinzip",
    titelB1: "Pneumonie verhindern: LISA",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "LISA-Akronym: L = Lungenbelüftung (Oberkörperhochlage, Atemübungen, Frühmobilisation), I = Infektionen vermeiden (Händehygiene, Mundpflege), S = Sekret mobilisieren (Flüssigkeit, Inhalation), A = Aspiration vermeiden (aufrechte Position beim Essen, Schluckstatus). 400.000–600.000 Pneumoniefälle/Jahr (RKI, Stand 2020er).",
    zusammenfassungB1: "LISA hilft dir, die vier Aufgaben der Pneumonie-Prophylaxe zu merken: L = Lunge belüften. I = Infektionen vermeiden. S = Sekret mobilisieren. A = Aspiration vermeiden. In Deutschland werden jährlich 400.000 bis 600.000 Pneumonie-Fälle behandelt.",
    glossarBegriffe: ["Pneumonie", "LISA-Prinzip", "Aspiration", "Dysphagie"],
    bloecke: [
      {
        type: "text",
        contentC1: `Eine Lungenentzündung gehört zu den Komplikationen, die bei immobilen pflegebedürftigen Menschen lebensbedrohlich werden können. In Deutschland werden jährlich zwischen 400.000 und 600.000 Pneumoniefälle behandelt (Stand 2020er, RKI). Für bettlägerige Menschen in Krankenhäusern und Pflegeeinrichtungen ist das Risiko besonders hoch. Die Pneumonieprophylaxe lässt sich mit dem Akronym LISA merken — vier Buchstaben für vier Handlungsfelder.

**L wie Lungenbelüftung verbessern.** Im Liegen werden die unteren Lungenabschnitte schlechter belüftet — dort sammelt sich Sekret, und Bakterien finden ideale Wachstumsbedingungen. Gegenmaßnahmen: Oberkörperhochlage (schon 30° verbessert die Belüftung), Atemübungen (tiefes Einatmen, bewusstes Ausatmen, Atemstimulierende Einreibung), und — am wirksamsten — Frühmobilisation. Wer aufrecht sitzt oder steht, belüftet seine Lunge automatisch besser.

**I wie Infektionen vermeiden.** Keime sind die Ursache einer Pneumonie. Die wichtigsten Maßnahmen: Händehygiene vor und nach dem Kontakt (auch beim Absaugen), steriles Arbeiten bei invasiven Atemwegszugängen und — oft unterschätzt — gründliche Mundpflege. Im Mundraum leben Millionen Bakterien. Bei immobilen Menschen mit eingeschränktem Hustenreflex können diese Keime in die tieferen Atemwege gelangen und dort eine Pneumonie auslösen. Regelmäßige Mundpflege reduziert die Keimbelastung erheblich.

**S wie Sekret mobilisieren.** Zähes Sekret in den Bronchien muss verflüssigt und abtransportiert werden. Ausreichende Flüssigkeitszufuhr ist die Basis. Zusätzlich helfen Inhalationen mit Kochsalzlösung, die das Sekret verflüssigen, und Vibrationsmassagen auf dem Brustkorb, die den Sekrettransport nach oben fördern.

**A wie Aspiration vermeiden.** Aspiration — das Eindringen von Nahrung, Flüssigkeit oder Speichel in die Atemwege unterhalb der Stimmritze — ist eine häufige Pneumonieursache. Besonders gefährdet sind Menschen mit Schluckstörungen (Dysphagie), Bewusstseinsstörungen oder nach einem Schlaganfall. Maßnahmen: Aufrechte Position beim Essen und Trinken, Schluckstatus vor der ersten Nahrungsaufnahme prüfen, auf Aspirationszeichen achten (Husten beim Essen, feuchte Stimme, Nahrungsreste im Mund).`,
        contentB1: `Eine Pneumonie (= Lungen-Entzündung) kann für immobile Menschen lebensbedrohlich sein. In Deutschland werden jährlich zwischen 400.000 und 600.000 Pneumonie-Fälle behandelt (Stand 2020er, RKI). Für bettlägerige Menschen in Krankenhäusern und Pflege-Einrichtungen ist das Risiko besonders hoch. Die Pneumonie-Prophylaxe kannst du dir mit dem Wort LISA merken. Vier Buchstaben für vier Handlungs-Felder.

**L wie Lungenbelüftung verbessern.** Im Liegen werden die unteren Lungen-Abschnitte schlechter belüftet. Dort sammelt sich Sekret (= Schleim). Bakterien finden dort gute Wachstumsbedingungen. Was hilft? Oberkörper-Hochlage. Schon 30° verbessern die Belüftung. Atemübungen: tiefes Einatmen, bewusstes Ausatmen, Atemstimulierende Einreibung (= den Rücken mit kreisenden Bewegungen einreiben). Und am wirksamsten: Früh-Mobilisation. Wer aufrecht sitzt oder steht, belüftet seine Lunge automatisch besser.

**I wie Infektionen vermeiden.** Keime sind die Ursache einer Pneumonie. Die wichtigsten Maßnahmen: Händehygiene vor und nach dem Kontakt. Steriles Arbeiten bei invasiven Atemwegs-Zugängen (= Schläuche in den Atemwegen). Und oft unterschätzt: gründliche Mundpflege. Im Mundraum leben Millionen Bakterien. Bei immobilen Menschen mit eingeschränktem Hustenreflex können diese Keime in die tieferen Atemwege gelangen. Dort lösen sie eine Pneumonie aus. Regelmäßige Mundpflege reduziert die Keimbelastung deutlich.

**S wie Sekret mobilisieren.** Zähes Sekret in den Bronchien (= Atemwegen) muss verflüssigt und abtransportiert werden. Ausreichend trinken ist die Basis. Zusätzlich helfen Inhalationen (= Einatmen) mit Kochsalz-Lösung. Sie verflüssigen das Sekret. Vibrations-Massagen auf dem Brustkorb fördern den Sekret-Transport nach oben.

**A wie Aspiration vermeiden.** Aspiration (= Eindringen von Essen, Flüssigkeit oder Speichel in die Atemwege) ist eine häufige Pneumonie-Ursache. Besonders gefährdet sind Menschen mit Dysphagie (= Schluckstörung). Oder mit Bewusstseins-Störungen. Oder nach einem Schlaganfall. Was hilft? Aufrechte Position beim Essen und Trinken. Vor der ersten Nahrungsaufnahme den Schluckstatus prüfen. Auf Aspirations-Zeichen achten: Husten beim Essen, feuchte Stimme, Nahrungsreste im Mund.`,
        quelle: "Vgl. RKI; Fachliteratur Pneumonieprophylaxe",
      },
    ],
  },

  // ── Kapitel 27: Prophylaxe-Bündel ──────────────────────────
  {
    kapitelId: "le06-kap-27",
    titel: "Prophylaxen im Zusammenhang: Das Prophylaxe-Bündel",
    titelB1: "Prophylaxen zusammen denken",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung: "Bei immobilen Menschen müssen alle Prophylaxen gleichzeitig bedacht werden (Dekubitus, Sturz, Kontraktur, Thrombose, Pneumonie). Zusammendenken = pflegerische Kernkompetenz. Frühmobilisation wirkt auf alle fünf Prophylaxen gleichzeitig (DNQP 2020).",
    zusammenfassungB1: "Bei immobilen Menschen musst du alle fünf Prophylaxen zusammen denken: Dekubitus, Sturz, Kontraktur, Thrombose, Pneumonie. Früh-Mobilisation ist die wichtigste Maßnahme — sie wirkt gegen alle fünf Probleme gleichzeitig.",
    glossarBegriffe: ["Prophylaxe-Bündel", "Frühmobilisation", "Immobilitätssyndrom"],
    bloecke: [
      {
        type: "text",
        contentC1: `In den letzten Kapiteln hast du fünf Prophylaxen einzeln kennengelernt: Dekubitus, Sturz, Kontraktur, Thrombose und Pneumonie. Im pflegerischen Alltag treten sie aber nie isoliert auf. Ein immobiler pflegebedürftiger Mensch ist fast immer gleichzeitig für mehrere dieser Komplikationen gefährdet.

Denk an Frau Siebert: 81 Jahre, Hüft-TEP, liegt seit zwei Tagen überwiegend im Bett, verweigert aus Angst die Mobilisation. Ihr Dekubitusrisiko ist erhöht (Immobilität, niedriger BMI). Ihr Thromboserisiko ist hoch (OP, Immobilität, Alter). Pneumoniegefahr besteht (flache Atmung durch Schonung, wenig Mobilität). Kontrakturgefahr — insbesondere Spitzfuß — droht (längere Bettruhe). Und paradoxerweise ist auch ihr Sturzrisiko erhöht, weil Muskeln abbauen und das Gleichgewicht nachlässt.

Fünf Risiken, ein Mensch. Die pflegerische Kernkompetenz besteht darin, alle Prophylaxen gleichzeitig zu denken und einen individuellen Plan zu erstellen, der möglichst viele Risiken gleichzeitig adressiert. Das nennt man ein Prophylaxe-Bündel.

Und hier zeigt sich die überragende Bedeutung der Frühmobilisation: Sie ist die einzige Maßnahme, die auf alle fünf Prophylaxen gleichzeitig wirkt. Durch Bewegung wird die Durchblutung gefördert — das entlastet die Haut und wirkt gegen Dekubitus. Die Muskelvenenpumpe wird aktiviert — das verhindert Blutstauung und wirkt gegen Thrombose. Die Lunge wird tiefer belüftet — das mobilisiert Sekret und wirkt gegen Pneumonie. Die Gelenke werden durch ihren Bewegungsumfang geführt — das verhindert Kontrakturen. Und die Muskulatur wird gekräftigt und das Gleichgewicht trainiert — das reduziert das Sturzrisiko (DNQP, Expertenstandard Mobilität, 2020).

Deshalb ist Frühmobilisation nicht eine von vielen Maßnahmen — sie ist die zentrale Maßnahme, um die sich alle anderen gruppieren. Ein guter Prophylaxe-Plan beginnt immer mit der Frage: Was kann dieser Mensch sich heute bewegen?`,
        contentB1: `In den letzten Kapiteln hast du fünf Prophylaxen (= Vorbeugungen) einzeln kennengelernt: Dekubitus, Sturz, Kontraktur, Thrombose und Pneumonie. Im Pflege-Alltag treten sie aber nie einzeln auf. Ein immobiler Mensch ist fast immer gleichzeitig für mehrere dieser Probleme gefährdet.

Denk an Frau Siebert: 81 Jahre, Hüft-TEP (= künstliches Hüftgelenk), liegt seit zwei Tagen überwiegend im Bett. Sie verweigert aus Angst die Mobilisation. Ihr Dekubitus-Risiko ist erhöht. Weil sie sich nicht bewegt und einen niedrigen BMI hat. Ihr Thrombose-Risiko ist hoch. Wegen der Operation, der Immobilität und dem Alter. Pneumonie-Gefahr besteht. Weil sie flach atmet und sich wenig bewegt. Kontraktur-Gefahr droht. Besonders der Spitzfuß, wegen der Bettruhe. Und auch das Sturzrisiko ist erhöht. Weil Muskeln abbauen und das Gleichgewicht nachlässt.

Fünf Risiken, ein Mensch. Die pflegerische Kernkompetenz ist: Alle Prophylaxen gleichzeitig denken. Einen individuellen Plan erstellen, der möglichst viele Risiken gleichzeitig anspricht. Das nennt man ein Prophylaxe-Bündel.

Und hier zeigt sich, warum Früh-Mobilisation so wichtig ist: Sie ist die einzige Maßnahme, die auf alle fünf Prophylaxen gleichzeitig wirkt. Durch Bewegung wird die Durchblutung gefördert. Das entlastet die Haut und wirkt gegen Dekubitus. Die Muskel-Venenpumpe wird aktiviert. Das verhindert Blutstauung und wirkt gegen Thrombose. Die Lunge wird tiefer belüftet. Das mobilisiert Sekret und wirkt gegen Pneumonie. Die Gelenke werden durch ihren Bewegungsumfang geführt. Das verhindert Kontrakturen. Und die Muskulatur wird gekräftigt. Das Gleichgewicht wird trainiert. Das reduziert das Sturzrisiko (DNQP, Expertenstandard Mobilität, 2020).

Deshalb ist Früh-Mobilisation nicht eine von vielen Maßnahmen. Sie ist die zentrale Maßnahme. Alle anderen gruppieren sich darum. Ein guter Prophylaxe-Plan beginnt immer mit der Frage: Was kann dieser Mensch sich heute bewegen?`,
        quelle: "Vgl. DNQP Expertenstandard Mobilität 2020",
      },
    ],
  },

  {
    kapitelId: "le06-kap-28",
    titel: "Schlaf als Ressource: Grundlagen des Schlafs",
    titelB1: "Schlaf: die Grundlagen",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung:
      "Schlaf verläuft in Zyklen von ~90 Minuten (Non-REM + REM). Im Alter werden Tiefschlafphasen kürzer — das ist normal. Schlafmangel und Schlafmedikamente erhöhen das Sturzrisiko direkt.",
    zusammenfassungB1:
      "Schlaf verläuft in Zyklen. Ein Zyklus dauert etwa 90 Minuten. Im Alter wird der Schlaf leichter. Das ist normal. Schlafmangel und Schlafmedikamente machen das Sturzrisiko höher.",
    glossarBegriffe: ["Schlafzyklus", "REM-Schlaf", "Non-REM-Schlaf"],
    bloecke: [
      {
        type: "text",
        contentC1: `Was hat Schlaf mit Mobilität zu tun? Mehr als du vielleicht denkst. Ein ausgeruhter Mensch bewegt sich sicherer, reagiert schneller und ist motivierter für die Mobilisation. Schlafmangel hingegen erhöht das Sturzrisiko direkt. Deshalb gehört das Thema Schlaf in eine Lerneinheit über Mobilität.

Schlaf verläuft in Zyklen von durchschnittlich 90 Minuten. Jeder Zyklus besteht aus zwei Hauptphasen: dem Non-REM-Schlaf (unterteilt in Leichtschlaf und Tiefschlaf) und dem REM-Schlaf (Rapid Eye Movement — die Traumschlafphase mit schnellen Augenbewegungen). Pro Nacht durchläuft ein Mensch vier bis sieben solcher Zyklen (ICSD-3, 2014). In der ersten Nachthälfte überwiegt der Tiefschlaf — hier regeneriert sich der Körper am stärksten. In der zweiten Nachthälfte werden die REM-Phasen länger — hier finden die meisten und intensivsten Träume statt.

Für die Pflege älterer Menschen ist eine Erkenntnis besonders wichtig: Im Alter verändert sich der Schlaf physiologisch. Die Tiefschlafphasen werden kürzer, ältere Menschen wachen häufiger auf und schlafen insgesamt leichter. Das ist keine Schlafstörung, sondern eine normale altersbedingte Veränderung. Trotzdem klagen viele ältere pflegebedürftige Menschen über schlechten Schlaf — und bekommen dann Schlafmedikamente verordnet. Hier entsteht ein gefährlicher Kreislauf.

Schlafmangel — ob durch gestörten Schlaf oder durch nächtliche Pflegemaßnahmen verursacht — führt tagsüber zu Müdigkeit, eingeschränkter Koordination und verminderter Aufmerksamkeit. Das Sturzrisiko steigt. Schlafmedikamente (Sedativa, Benzodiazepine) machen die Situation noch schlimmer: Sie verändern die natürliche Schlafarchitektur, machen abhängig und verursachen tagsüber Schläfrigkeit und unsicheren Gang. Der DNQP-Expertenstandard Sturzprophylaxe (2013) nennt psychotrope Medikamente ausdrücklich als Sturzrisikofaktor. Die pflegerische Konsequenz: Schlaf fördern durch nicht-medikamentöse Maßnahmen — das ist Thema des nächsten Kapitels.`,
        contentB1: `Was hat Schlaf mit Mobilität zu tun? Mehr als du vielleicht denkst. Ein ausgeruhter Mensch bewegt sich sicherer. Er reagiert schneller. Er ist motivierter für die Mobilisation. Schlafmangel dagegen erhöht das Sturzrisiko direkt. Deshalb gehört das Thema Schlaf in eine Lerneinheit über Mobilität.

Schlaf verläuft in Zyklen. Ein Zyklus dauert durchschnittlich 90 Minuten. Jeder Zyklus hat zwei Hauptphasen. Erstens: der Non-REM-Schlaf. Er besteht aus Leichtschlaf und Tiefschlaf. Zweitens: der REM-Schlaf. REM steht für „Rapid Eye Movement" (= schnelle Augenbewegungen). Das ist die Traumschlaf-Phase. Pro Nacht durchläuft ein Mensch vier bis sieben Zyklen (ICSD-3, 2014). In der ersten Nachthälfte überwiegt der Tiefschlaf. Hier regeneriert sich der Körper am stärksten. In der zweiten Nachthälfte werden die REM-Phasen länger. Hier finden die meisten Träume statt.

Für die Pflege älterer Menschen ist ein Punkt besonders wichtig: Im Alter verändert sich der Schlaf. Das ist normal. Die Tiefschlaf-Phasen werden kürzer. Ältere Menschen wachen häufiger auf. Sie schlafen insgesamt leichter. Das ist keine Schlafstörung. Es ist eine normale altersbedingte Veränderung. Trotzdem klagen viele ältere Menschen über schlechten Schlaf. Und dann bekommen sie Schlafmedikamente. Hier entsteht ein gefährlicher Kreislauf.

Schlafmangel — ob durch gestörten Schlaf oder durch nächtliche Pflege-Maßnahmen — führt tagsüber zu Müdigkeit. Die Koordination wird schlechter. Die Aufmerksamkeit sinkt. Das Sturzrisiko steigt. Schlafmedikamente (= Sedativa, Beruhigungsmittel) machen die Situation noch schlimmer. Sie verändern den natürlichen Schlaf. Sie machen abhängig. Und sie verursachen tagsüber Schläfrigkeit und unsicheren Gang. Der DNQP-Expertenstandard Sturzprophylaxe (2013) nennt diese Medikamente ausdrücklich als Sturzrisikofaktor. Die pflegerische Konsequenz: Schlaf fördern durch Maßnahmen ohne Medikamente. Das ist das Thema im nächsten Kapitel.`,
        quelle: "Vgl. ICSD-3 2014; DNQP 2013",
      },
    ],
  },

  {
    kapitelId: "le06-kap-29",
    titel: "Schlaf fördern: Schlafhygiene und pflegerische Maßnahmen",
    titelB1: "Guten Schlaf fördern: Schlafhygiene",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung:
      "Schlafhygiene berücksichtigt individuelle Gewohnheiten und minimiert Störfaktoren (Licht, Lärm, Schmerzen, Temperatur). Schlafmedikamente sind immer das letzte Mittel — sie verändern die Schlafarchitektur, machen abhängig und erhöhen das Sturzrisiko.",
    zusammenfassungB1:
      "Schlafhygiene heißt: Gewohnheiten beachten und Störfaktoren reduzieren. Licht, Lärm, Schmerzen und Raumtemperatur sind die häufigsten Schlafstörer. Schlafmedikamente sind immer das letzte Mittel.",
    glossarBegriffe: ["Schlafhygiene", "Schlafrituale", "Sedativa"],
    bloecke: [
      {
        type: "text",
        contentC1: `Guter Schlaf ist keine Selbstverständlichkeit — schon gar nicht im Krankenhaus oder Pflegeheim. Helle Flure, piepende Monitore, Mitpatienten die husten, und nächtliche Pflegemaßnahmen machen erholsamen Schlaf zur Herausforderung. Umso wichtiger ist es, dass du als Pflegefachperson die Grundsätze der Schlafhygiene kennst und umsetzt.

Schlafhygiene umfasst alle Maßnahmen, die einen gesunden Schlaf fördern. Das beginnt mit den individuellen Gewohnheiten: Manche Menschen brauchen ein offenes Fenster, andere absolute Dunkelheit. Manche trinken abends einen Tee, andere lesen. Diese Rituale geben Sicherheit und signalisieren dem Körper: Jetzt ist Schlafenszeit. In der Pflege solltest du diese Gewohnheiten erfragen und respektieren — soweit es der Stationsbetrieb zulässt.

Störfaktoren zu minimieren ist oft wirksamer als jede Tablette. Die vier häufigsten Schlafstörer in Gesundheitseinrichtungen: Licht — auch gedimmtes Licht im Flur, das unter der Tür durchscheint. Lärm — Alarme, Gespräche am Stützpunkt, quietschende Türen. Schmerzen — ein Mensch mit unkontrollierten Schmerzen kann nicht schlafen; Schmerzmanagement hat Priorität. Raumtemperatur — zu warm oder zu kalt verhindert Einschlafen.

Deine Verantwortung als Pflegefachperson im Nachtdienst: Störe nur, wenn es medizinisch notwendig ist. Vitalzeichenkontrolle, Medikamentengabe und Positionswechsel sollten nach Möglichkeit auf Zeiten verlegt werden, in denen der pflegebedürftige Mensch ohnehin wach ist — nicht mitten in der Tiefschlafphase. Leise Schuhe, gedimmte Taschenlampe statt Deckenlicht, und die Frage „Brauchen Sie noch etwas, bevor ich gehe?" kosten wenig Aufwand und machen einen großen Unterschied.

Schlafmedikamente sollten immer das letzte Mittel sein. Sie verändern die natürliche Schlafarchitektur — der Schlaf wird zwar länger, aber weniger erholsam, weil die Tiefschlaf- und REM-Phasen verkürzt werden. Viele Schlafmittel machen bei regelmäßiger Einnahme abhängig. Und sie erhöhen die Sturzgefahr durch Tagesschläfrigkeit und unsicheren Gang. Die pflegerische Empfehlung lautet: Zuerst alle nicht-medikamentösen Maßnahmen ausschöpfen.`,
        contentB1: `Guter Schlaf ist nicht selbstverständlich. Schon gar nicht im Krankenhaus oder Pflegeheim. Helle Flure. Piepende Monitore. Mitpatienten, die husten. Nächtliche Pflege-Maßnahmen. Das alles macht erholsamen Schlaf schwer. Deshalb ist es wichtig, dass du als Pflege-Fachperson die Grundsätze der Schlafhygiene (= Maßnahmen für gesunden Schlaf) kennst und umsetzt.

Schlafhygiene umfasst alle Maßnahmen, die gesunden Schlaf fördern. Das beginnt mit den individuellen Gewohnheiten. Manche Menschen brauchen ein offenes Fenster. Andere brauchen absolute Dunkelheit. Manche trinken abends einen Tee. Andere lesen. Diese Rituale geben Sicherheit. Sie sagen dem Körper: Jetzt ist Schlafenszeit. In der Pflege solltest du diese Gewohnheiten erfragen und respektieren. Soweit es der Stations-Betrieb zulässt.

Störfaktoren zu reduzieren ist oft wirksamer als jede Tablette. Die vier häufigsten Schlafstörer in Gesundheits-Einrichtungen: Licht — auch gedimmtes Licht im Flur, das unter der Tür durchscheint. Lärm — Alarme, Gespräche am Stützpunkt, quietschende Türen. Schmerzen — ein Mensch mit unkontrollierten Schmerzen kann nicht schlafen. Schmerz-Management hat Priorität. Raumtemperatur — zu warm oder zu kalt verhindert das Einschlafen.

Deine Verantwortung im Nachtdienst: Störe nur, wenn es medizinisch notwendig ist. Vitalzeichen-Kontrolle, Medikamentengabe und Positionswechsel sollten wenn möglich auf Zeiten verlegt werden, in denen der Mensch ohnehin wach ist. Nicht mitten in der Tiefschlaf-Phase. Leise Schuhe. Gedimmte Taschenlampe statt Deckenlicht. Die Frage „Brauchen Sie noch etwas, bevor ich gehe?" Das kostet wenig Aufwand. Aber es macht einen großen Unterschied.

Schlafmedikamente sollten immer das letzte Mittel sein. Sie verändern den natürlichen Schlaf. Der Schlaf wird zwar länger. Aber er ist weniger erholsam. Die Tiefschlaf- und REM-Phasen werden verkürzt. Viele Schlafmittel machen bei regelmäßiger Einnahme abhängig. Und sie erhöhen die Sturzgefahr durch Tagesschläfrigkeit und unsicheren Gang. Die pflegerische Empfehlung lautet: Zuerst alle Maßnahmen ohne Medikamente ausschöpfen.`,
        quelle: "Vgl. DNQP 2013; Fachliteratur Schlafmedizin",
      },
    ],
  },

  {
    kapitelId: "le06-kap-30",
    titel: "Assessments in der Mobilitätspflege: Barthel, Braden, TUG",
    titelB1: "Assessments in der Pflege: Barthel, Braden, TUG",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung:
      "Drei zentrale Assessments in der Mobilitätspflege: Barthel-Index (0–100, Selbstständigkeit bei 10 ATL), Braden-Skala (6–23, Dekubitusrisiko) und TUG-Test (Gehzeit, Sturzrisiko). Sie werden nicht einmalig, sondern regelmäßig wiederholt — das ist ihr Wert als Steuerungsinstrument.",
    zusammenfassungB1:
      "Drei wichtige Einschätzungs-Werkzeuge: Barthel-Index (Selbstständigkeit, 0–100 Punkte), Braden-Skala (Dekubitus-Risiko, 6–23 Punkte) und TUG-Test (Sturzrisiko). Du wiederholst sie regelmäßig. So siehst du, ob deine Maßnahmen wirken.",
    glossarBegriffe: [
      "Barthel-Index",
      "Braden-Skala",
      "Timed-Up-and-Go-Test",
      "Standardisiertes Assessment",
    ],
    bloecke: [
      {
        type: "text",
        contentC1: `Professionelle Pflege basiert auf Einschätzungen, die nachvollziehbar und überprüfbar sind — nicht auf Bauchgefühl. Dafür gibt es standardisierte Assessmentinstrumente. In der Mobilitätspflege sind drei besonders wichtig.

**Der Barthel-Index** (Barthel/Mahoney, 1965) misst die Selbstständigkeit eines pflegebedürftigen Menschen bei zehn Aktivitäten des täglichen Lebens: Essen, Baden, Körperpflege, An- und Auskleiden, Stuhlkontrolle, Harnkontrolle, Toilettenbenutzung, Transfer vom Bett in den Rollstuhl, Mobilität auf ebener Strecke und Treppensteigen. Jede Aktivität wird mit 0, 5, 10 oder 15 Punkten bewertet, der Gesamtscore reicht von 0 (vollständig abhängig in allen Bereichen) bis 100 Punkte (selbstständig). Der Barthel-Index zeigt dir auf einen Blick, wo ein Mensch Hilfe braucht und wo er selbstständig ist.

**Die Braden-Skala** (Braden/Bergstrom, 1987) wurde bereits in Kapitel 18 vorgestellt: Sechs Faktoren, je 1 bis 4 Punkte, Gesamtscore 6 bis 23. Niedriger Score bedeutet hohes Dekubitusrisiko. In der Praxis erhebst du die Braden-Skala bei Aufnahme und regelmäßig im Verlauf — so erkennst du, ob sich das Risiko verändert.

**Der Timed-Up-and-Go-Test** (Podsiadlo/Richardson, 1991) wurde in Kapitel 21 beschrieben: Aufstehen, drei Meter gehen, umdrehen, zurückkommen, setzen. Unter zehn Sekunden ist unauffällig, ab zwanzig Sekunden liegt ein erhöhtes Sturzrisiko vor.

Was alle drei Instrumente gemeinsam haben: Sie werden nicht einmalig erhoben, sondern regelmäßig wiederholt. Das ist der entscheidende Punkt für die Pflegepraxis. Ein steigender Barthel-Index nach einer Woche Mobilisation belegt, dass deine Maßnahmen wirken. Ein sinkender Braden-Score warnt dich, dass das Dekubitusrisiko zunimmt und du die Prophylaxe intensivieren musst. Ein langsamer werdender TUG zeigt, dass die Mobilität nachlässt.

Assessments sind keine Pflichtübung zum Abhaken — sie sind Steuerungsinstrumente für deine Pflegeplanung.`,
        contentB1: `Professionelle Pflege basiert auf Einschätzungen, die nachvollziehbar sind. Nicht auf Bauchgefühl. Dafür gibt es standardisierte Assessment-Instrumente (= Einschätzungs-Werkzeuge). In der Mobilitätspflege sind drei besonders wichtig.

**Der Barthel-Index** (Barthel/Mahoney, 1965) misst die Selbstständigkeit eines Menschen bei zehn Aktivitäten des täglichen Lebens. Diese zehn Aktivitäten sind: Essen, Baden, Körperpflege, An- und Auskleiden, Stuhlkontrolle, Harnkontrolle, Toilettenbenutzung, Transfer vom Bett in den Rollstuhl, Mobilität auf ebener Strecke und Treppensteigen. Jede Aktivität bekommt 0, 5, 10 oder 15 Punkte. Der Gesamtwert geht von 0 (komplett abhängig in allen Bereichen) bis 100 Punkte (selbstständig). Der Barthel-Index zeigt dir auf einen Blick: Wo braucht der Mensch Hilfe? Und wo ist er selbstständig?

**Die Braden-Skala** (Braden/Bergstrom, 1987) kennst du schon aus Kapitel 18. Sechs Faktoren. Je 1 bis 4 Punkte. Gesamtwert 6 bis 23. Ein niedriger Wert bedeutet hohes Dekubitus-Risiko. In der Praxis erhebst du die Braden-Skala bei der Aufnahme. Und regelmäßig im Verlauf. So erkennst du, ob sich das Risiko verändert.

**Der Timed-Up-and-Go-Test** (Podsiadlo/Richardson, 1991) kennst du aus Kapitel 21. Aufstehen, drei Meter gehen, umdrehen, zurückkommen, setzen. Unter zehn Sekunden ist unauffällig. Ab zwanzig Sekunden liegt ein erhöhtes Sturzrisiko vor.

Alle drei Instrumente haben etwas gemeinsam: Du erhebst sie nicht nur einmal. Du wiederholst sie regelmäßig. Das ist der wichtige Punkt für die Praxis. Ein steigender Barthel-Index nach einer Woche Mobilisation belegt: Deine Maßnahmen wirken. Ein sinkender Braden-Wert warnt dich: Das Dekubitus-Risiko nimmt zu. Du musst die Prophylaxe intensivieren. Ein langsamer werdender TUG zeigt: Die Mobilität lässt nach.

Assessments sind keine Pflichtübung zum Abhaken. Sie sind Steuerungs-Instrumente für deine Pflege-Planung.`,
        quelle:
          "Vgl. Barthel/Mahoney 1965; Braden/Bergstrom 1987; Podsiadlo/Richardson 1991",
      },
    ],
  },

  {
    kapitelId: "le06-kap-31",
    titel: "Dokumentation: Was, wann, warum",
    titelB1: "Dokumentation: Was, wann, warum",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung:
      "Drei Dokumentationsformen in der Mobilitätspflege: Mobilisationsplan, Positionierungsprotokoll (mit Hautbeobachtung und Fingertest), Sturzprotokoll nach jedem Sturzereignis. Assessments werden bei Aufnahme und im Verlauf wiederholt — sie sind dein wichtigstes Steuerungsinstrument.",
    zusammenfassungB1:
      "In der Mobilitätspflege gibt es drei Dokumentations-Formen: Mobilisationsplan, Positionierungs-Protokoll und Sturzprotokoll. Assessments wiederholst du regelmäßig. So siehst du, ob deine Maßnahmen wirken.",
    glossarBegriffe: [
      "Mobilisationsplan",
      "Positionierungsprotokoll",
      "Sturzprotokoll",
    ],
    bloecke: [
      {
        type: "text",
        contentC1: `Dokumentation ist für viele Pflegefachpersonen ein leidiges Thema — „Papierkrieg statt Pflege am Bett." Aber in der Mobilitätspflege hat die Dokumentation eine ganz konkrete Funktion: Sie macht deine pflegerischen Entscheidungen nachvollziehbar, sie sichert die Kontinuität der Versorgung über Schichtwechsel hinweg, und sie ist ein Instrument zur Qualitätssicherung.

Drei Dokumentationsformen begegnen dir in der Mobilitätspflege ständig. Der Mobilisationsplan beschreibt, welche Mobilisationsmaßnahmen geplant sind, wie häufig sie durchgeführt werden sollen, welche Hilfsmittel benötigt werden und welches Ziel verfolgt wird. Wenn du morgens die Schicht übernimmst und den Mobilisationsplan liest, weißt du sofort: Frau Siebert soll heute zweimal an die Bettkante mobilisiert werden, mit Unterarmgehstützen, Teilbelastung 20 kg rechts.

Das Positionierungsprotokoll dokumentiert jeden Positionswechsel: Zeitpunkt, welche Position, Ergebnis der Hautbeobachtung an den Prädilektionsstellen und das Fingertest-Ergebnis. Es zeigt im Verlauf, wie oft positioniert wurde und ob sich Hautveränderungen entwickeln. Die Dokumentation ist auch ein juristischer Schutz — wenn ein Dekubitus entsteht, muss die Einrichtung nachweisen können, dass angemessene Prophylaxe betrieben wurde (§ 4 PflBG).

Das Sturzprotokoll wird nach jedem Sturzereignis ausgefüllt: Datum, Uhrzeit, Ort, Umstände (was hat der Mensch getan, auf welchem Weg, mit welchem Schuhwerk), Zeugen, Verletzungen, Sofortmaßnahmen, Information des Arztes und die daraus abgeleiteten Folgeassessments und Maßnahmenanpassungen.

Alle Assessment-Ergebnisse — Barthel-Index, Braden-Skala, TUG — werden bei Aufnahme erhoben und in regelmäßigen Abständen wiederholt. Diese Re-Evaluation ist kein Selbstzweck, sondern liefert handfeste Informationen: Ein steigender Barthel-Index zeigt, dass die Mobilisation Wirkung zeigt. Ein sinkender Braden-Score signalisiert, dass das Dekubitusrisiko wächst. Diese Verlaufsdaten sind dein wichtigstes Steuerungsinstrument.`,
        contentB1: `Dokumentation ist für viele Pflege-Fachpersonen ein leidiges Thema. „Papierkrieg statt Pflege am Bett." Aber in der Mobilitätspflege hat die Dokumentation eine konkrete Funktion. Sie macht deine pflegerischen Entscheidungen nachvollziehbar. Sie sichert die Versorgung über Schichtwechsel hinweg. Und sie ist ein Werkzeug zur Qualitätssicherung.

Drei Dokumentationsformen begegnest du in der Mobilitätspflege ständig. Der Mobilisationsplan beschreibt: Welche Maßnahmen sind geplant? Wie oft sollen sie gemacht werden? Welche Hilfsmittel werden gebraucht? Welches Ziel wird verfolgt? Wenn du morgens die Schicht übernimmst und den Plan liest, weißt du sofort: Frau Siebert soll heute zweimal an die Bettkante mobilisiert werden. Mit Unterarm-Gehstützen. Teilbelastung 20 kg rechts.

Das Positionierungs-Protokoll dokumentiert jeden Positionswechsel. Du schreibst auf: Zeitpunkt. Welche Position. Ergebnis der Hautbeobachtung an den Prädilektionsstellen. Und das Ergebnis vom Fingertest. Im Verlauf zeigt es: Wie oft wurde positioniert? Haben sich Haut-Veränderungen entwickelt? Die Dokumentation ist auch ein juristischer Schutz. Wenn ein Dekubitus entsteht, muss die Einrichtung nachweisen können: Es wurde angemessene Prophylaxe betrieben (§ 4 PflBG).

Das Sturzprotokoll wird nach jedem Sturz ausgefüllt. Es enthält: Datum, Uhrzeit, Ort, Umstände. Was hat der Mensch getan? Auf welchem Weg war er? Welche Schuhe hatte er an? Gab es Zeugen? Welche Verletzungen gibt es? Welche Sofortmaßnahmen wurden gemacht? Wurde der Arzt informiert? Welche Folge-Maßnahmen sind nötig?

Alle Assessment-Ergebnisse — Barthel-Index, Braden-Skala, TUG — werden bei der Aufnahme erhoben. Und in regelmäßigen Abständen wiederholt. Diese Wiederholung ist kein Selbstzweck. Sie liefert wichtige Informationen. Ein steigender Barthel-Index zeigt: Die Mobilisation wirkt. Ein sinkender Braden-Wert signalisiert: Das Dekubitus-Risiko wächst. Diese Verlaufsdaten sind dein wichtigstes Steuerungs-Instrument.`,
        quelle: "Vgl. § 4 PflBG; DNQP-Expertenstandards",
      },
    ],
  },

  {
    kapitelId: "le06-kap-32",
    titel: "Arbeitsschutz: Der eigene Rücken zählt auch",
    titelB1: "Arbeitsschutz: Auch dein Rücken zählt",
    tag: "pflege",
    geschaetzteDauer: 5,
    zusammenfassung:
      "Pflegeberufe haben die höchste Rate an Rücken-/Muskel-Skelett-Beschwerden. Kinästhetik schützt auch dich. Konkrete Regeln (ArbSchG): Betthöhe = Hüfthöhe, aus den Beinen arbeiten, nah am Menschen, Hilfsmittel nutzen, bei schweren Menschen zu zweit arbeiten.",
    zusammenfassungB1:
      "Pflege-Berufe haben die meisten Rücken-Probleme. Kinästhetik schützt auch dich. Die wichtigsten Regeln: Bett auf Hüfthöhe, aus den Beinen arbeiten, nah am Menschen stehen, Hilfsmittel nutzen, zu zweit bei schweren Menschen.",
    glossarBegriffe: ["Arbeitsschutzgesetz (ArbSchG)", "BGW", "Rückenschonendes Arbeiten"],
    bloecke: [
      {
        type: "text",
        contentC1: `Es klingt paradox: Du lernst in dieser Lerneinheit, wie du pflegebedürftige Menschen bewegst und mobilisierst — aber wer sorgt eigentlich für deinen Rücken? Pflegeberufe gehören zu den Berufsgruppen mit den höchsten Raten an Rücken- und Muskel-Skelett-Beschwerden. Die Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege (BGW) dokumentiert seit Jahren, dass Pflegekräfte überdurchschnittlich oft wegen Rückenproblemen krankgeschrieben werden.

Die gute Nachricht: Kinästhetik schützt nicht nur die pflegebedürftigen Menschen, sondern auch dich. Wenn du kinästhetisch arbeitest — also Eigenbewegung unterstützt statt Gewicht zu heben —, reduziert sich deine Rückenbelastung erheblich. Ein pflegebedürftiger Mensch, der aktiv mitarbeitet, muss nicht komplett getragen werden. Das ist der beste Arbeitsschutz.

Zusätzlich gelten konkrete Regeln für rückenschonendes Arbeiten, die das Arbeitsschutzgesetz vorschreibt (ArbSchG). Die Betthöhe muss vor jeder Mobilisation angepasst werden: Die Oberkante der Matratze soll auf Hüfthöhe der Pflegeperson liegen. Zu niedrig bedeutet ständiges Bücken, zu hoch bedeutet Arbeiten über Schulterhöhe — beides belastet den Rücken. Arbeite aus den Beinen, nicht aus dem Rücken: In die Knie gehen statt den Oberkörper vorbeugen. Steh nah am pflegebedürftigen Menschen — je weiter entfernt du stehst, desto mehr Hebelkraft wirkt auf deine Wirbelsäule. Nutze Hilfsmittel konsequent: Rutschbrett, Drehscheibe, Aufrichthilfe. Bei schweren pflegebedürftigen Menschen oder bei fehlendem Eigenanteil grundsätzlich eine zweite Pflegekraft hinzuziehen.

Arbeitsschutz ist kein Luxus und kein Zeichen von Schwäche. Er ist die Voraussetzung dafür, dass du diesen Beruf langfristig und gesund ausüben kannst. Ein Bandscheibenvorfall im dritten Ausbildungsjahr ist vermeidbar — wenn du von Anfang an richtig arbeitest.`,
        contentB1: `Es klingt seltsam: Du lernst in dieser Lerneinheit, wie du pflegebedürftige Menschen bewegst und mobilisierst. Aber wer sorgt für deinen Rücken? Pflege-Berufe gehören zu den Berufsgruppen mit den meisten Rücken-Beschwerden und Muskel-Skelett-Problemen. Die BGW (= Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege) zeigt seit Jahren: Pflegekräfte werden überdurchschnittlich oft wegen Rücken-Problemen krankgeschrieben.

Die gute Nachricht: Kinästhetik schützt nicht nur die pflegebedürftigen Menschen. Sie schützt auch dich. Wenn du kinästhetisch arbeitest, unterstützt du Eigenbewegung statt Gewicht zu heben. Deine Rückenbelastung wird viel weniger. Ein Mensch, der aktiv mitarbeitet, muss nicht komplett getragen werden. Das ist der beste Arbeitsschutz.

Zusätzlich gibt es konkrete Regeln für rückenschonendes Arbeiten. Das Arbeitsschutzgesetz (ArbSchG) schreibt sie vor. Erstens die Betthöhe: Sie muss vor jeder Mobilisation angepasst werden. Die Oberkante der Matratze soll auf Hüfthöhe der Pflege-Person liegen. Zu niedrig bedeutet ständiges Bücken. Zu hoch bedeutet Arbeiten über Schulterhöhe. Beides belastet den Rücken. Zweitens: Arbeite aus den Beinen, nicht aus dem Rücken. Geh in die Knie statt den Oberkörper vorzubeugen. Drittens: Steh nah am pflegebedürftigen Menschen. Je weiter weg du stehst, desto mehr Hebelkraft wirkt auf deine Wirbelsäule. Viertens: Nutze Hilfsmittel. Immer. Rutschbrett, Drehscheibe, Aufrichthilfe. Fünftens: Bei schweren Menschen oder bei fehlendem Eigenanteil holst du eine zweite Pflege-Kraft dazu.

Arbeitsschutz ist kein Luxus. Er ist kein Zeichen von Schwäche. Er ist die Voraussetzung dafür, dass du diesen Beruf langfristig und gesund machen kannst. Ein Bandscheibenvorfall im dritten Ausbildungsjahr kann man vermeiden. Wenn du von Anfang an richtig arbeitest.`,
        quelle: "Vgl. ArbSchG; BGW-Statistiken",
      },
    ],
  },

];

