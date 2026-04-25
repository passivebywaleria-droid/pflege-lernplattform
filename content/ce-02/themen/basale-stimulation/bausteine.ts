// CE-02 Thema Basale Stimulation — Wissensbausteine (17 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/basale-stimulation/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_BASALE_STIMULATION_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: konzept-herkunft (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-konzept-herkunft",
    themaId: "basale-stimulation",
    titel: "Konzept-Herkunft: Basale Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum heißt es 'basale' Stimulation — was ist damit gemeint? Überlege: Was kann ein Mensch schon wahrnehmen, bevor er sehen oder sprechen kann?",
      antwort:
        "Basale Stimulation ist ein Förder- und Pflegekonzept. Entwickelt 1975 vom Sonderpädagogen Andreas Fröhlich für schwerstbehinderte Kinder. Ab den 1990er Jahren übertrug die Pflegewissenschaftlerin Christel Bienstein das Konzept auf die Pflege.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Basale Stimulation ist ein Förder- und Pflegekonzept. Entwickelt 1975 vom Sonderpädagogen Andreas Fröhlich für schwerstbehinderte Kinder. Ab den 1990er Jahren übertrug die Pflegewissenschaftlerin Christel Bienstein das Konzept auf die Pflege.",
      textB1:
        "Basale Stimulation ist ein Pflege-Konzept. Andreas Fröhlich hat es 1975 erfunden. Er hat zuerst mit schwer behinderten Kindern gearbeitet. Später hat Christel Bienstein das Konzept für die Pflege genutzt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["Fröhlich A. (1975)", "Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-konzept-herkunft",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Basale Stimulation — Konzept und Herkunft",
          body: "Die **Basale Stimulation** ist ein pflegerisches und pädagogisches Konzept für Menschen, deren Wahrnehmung, Bewegung oder Kommunikation stark eingeschränkt ist. Das Wort **'basal'** meint: Es geht um Fähigkeiten, die der Mensch schon im Mutterleib entwickelt — Tastsinn, Gleichgewicht, Wärme spüren. Diese Grundlagen sind auch bei sehr schwer Kranken oft noch erhalten.\n\nDer Sonderpädagoge **Andreas Fröhlich** entwickelte das Konzept 1975 an der Universität Landau für Kinder mit schwersten Mehrfachbehinderungen. In den frühen 1990er Jahren übertrug die Pflegewissenschaftlerin **Christel Bienstein** die Grundgedanken in die Kranken- und Altenpflege. Seitdem gehört das Konzept zum Standardwissen jeder Pflegekraft. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Basale Stimulation"],
        },
        contentB1: {
          title: "Basale Stimulation — was ist das?",
          body: "Basale Stimulation ist ein Konzept für die Pflege. Es hilft Menschen, die sich nicht gut bewegen oder sprechen können. Das Wort 'basal' bedeutet: **ganz grundlegend**. Gemeint sind Dinge, die wir schon im Bauch der Mutter lernen: Wärme spüren, Bewegung fühlen, Berührung merken.\n\nAndreas Fröhlich hat das Konzept 1975 erfunden. Er war Sonderpädagoge. Er hat mit schwer behinderten Kindern gearbeitet. In den 1990er Jahren hat Christel Bienstein das Konzept für die Pflege genutzt. Heute lernt jede Pflegekraft Basale Stimulation.",
          glossarBegriffe: ["Basale Stimulation"],
        },
      },
    },
    glossarBegriffe: ["Basale Stimulation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: drei-lebensthemen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-drei-lebensthemen",
    themaId: "basale-stimulation",
    titel: "Drei Lebensthemen nach Fröhlich",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du einen Menschen mit Wachkoma versorgst — welche drei Bereiche seines Lebens kannst du pflegerisch erreichen, auch ohne Worte? Überlege aus deinem Alltag.",
      antwort:
        "Fröhlich beschreibt drei zentrale Lebensthemen: Wahrnehmung, Bewegung, Kommunikation. Diese drei Säulen bleiben auch bei schwerstkranken Menschen erreichbar — und sind die Ansatzpunkte jeder basal stimulierenden Handlung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Fröhlich beschreibt drei zentrale Lebensthemen: **Wahrnehmung, Bewegung, Kommunikation**. Diese drei Säulen bleiben auch bei schwerstkranken Menschen erreichbar — und sind die Ansatzpunkte jeder basal stimulierenden Handlung.",
      textB1:
        "Es gibt **drei wichtige Lebensthemen**: Wahrnehmung (was der Mensch spürt), Bewegung (wie er sich bewegt) und Kommunikation (wie er Kontakt hat). Wir können diese drei Bereiche immer erreichen — auch bei schwer Kranken.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-02",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Fröhlich A. (1975)", "Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-drei-lebensthemen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Drei zentrale Lebensthemen",
          body: "Andreas Fröhlich formulierte **drei zentrale Lebensthemen**, die jeder Mensch braucht — auch wenn er schwerstkrank, beatmet oder im Wachkoma ist:\n\n**1. Wahrnehmung** — Die Welt mit allen Sinnen spüren: den eigenen Körper, Wärme, Bewegung, Berührung, Geräusche, Gerüche. Wahrnehmung ist die Grundlage für alles andere.\n\n**2. Bewegung** — Sich selbst spüren durch Bewegung, die Umgebung erkunden, Kontakt aufnehmen. Auch passive Bewegung durch die Pflegekraft zählt.\n\n**3. Kommunikation** — Kontakt zum Menschen und zur Umgebung. Sprache ist nur eine Form — Berührung, Blick, Mimik, Tonfall, Präsenz sind oft wichtiger.\n\nDiese drei Themen hängen zusammen: Wer sich bewegt, nimmt wahr. Wer wahrnimmt, kann kommunizieren. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Drei wichtige Lebensthemen",
          body: "Andreas Fröhlich hat **drei wichtige Lebensthemen** beschrieben. Jeder Mensch braucht sie — auch wenn er schwer krank ist:\n\n**1. Wahrnehmung** — Die Welt spüren mit den Sinnen. Der Mensch fühlt seinen Körper, Wärme, Berührung, Töne.\n\n**2. Bewegung** — Sich bewegen oder bewegt werden. So spürt der Mensch sich selbst.\n\n**3. Kommunikation** — Kontakt zu anderen haben. Sprache ist nur ein Weg. Berührung, Blick und ruhige Stimme sind oft wichtiger.\n\nDie drei Themen gehören zusammen: Bewegung macht Wahrnehmung möglich. Wahrnehmung macht Kontakt möglich.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: zentrale-beduerfnisse (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-zentrale-beduerfnisse",
    themaId: "basale-stimulation",
    titel: "Fünf zentrale Bedürfnisse",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du liegst im Wachkoma. Was würdest du dir am meisten wünschen — was muss die Pflege dir geben, damit du dich als Mensch gemeint fühlst?",
      antwort:
        "Bienstein und Fröhlich formulieren 5 zentrale Bedürfnisse basal stimulierbarer Menschen: Leben erhalten, sich sicher fühlen, sich selbst erleben, Geborgenheit spüren, Kontakt aufnehmen. Jede Pflegehandlung sollte mindestens eines davon bedienen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bienstein und Fröhlich formulieren **5 zentrale Bedürfnisse** basal stimulierbarer Menschen: **Leben erhalten, sich sicher fühlen, sich selbst erleben, Geborgenheit spüren, Kontakt aufnehmen**. Jede Pflegehandlung sollte mindestens eines davon bedienen.",
      textB1:
        "Es gibt **5 wichtige Bedürfnisse**: leben bleiben, sich sicher fühlen, sich selbst spüren, Geborgenheit spüren, Kontakt haben. Jede Pflegehandlung sollte mindestens eines dieser Bedürfnisse treffen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-zentrale-beduerfnisse",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Fünf zentrale Bedürfnisse",
          body: "Bienstein und Fröhlich beschreiben fünf **zentrale Bedürfnisse** basal stimulierbarer Menschen. Jede Pflegehandlung lässt sich daran prüfen:\n\n**1. Leben erhalten** — Die Grundfunktionen sichern: Atmung, Kreislauf, Ernährung, Schmerzfreiheit.\n\n**2. Sich sicher fühlen** — Der Mensch soll spüren: Ich bin nicht allein, ich bin nicht in Gefahr. Verlässlichkeit, Berechenbarkeit, Ankündigung.\n\n**3. Sich selbst erleben** — Eigene Körpergrenzen spüren, sich als abgegrenzte Person wahrnehmen. Oft zentral bei Wachkoma, Demenz.\n\n**4. Geborgenheit spüren** — Wärme, Nähe, vertraute Stimme, ruhige Hand.\n\n**5. Kontakt aufnehmen** — Austausch mit der Umgebung und anderen Menschen. Auch nonverbal.\n\nEine Pflegekraft, die nur 'Leben erhalten' ansteuert, pflegt technisch richtig — aber nicht basal stimulierend. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Wachkoma"],
        },
        contentB1: {
          title: "Fünf wichtige Bedürfnisse",
          body: "Bienstein und Fröhlich haben **5 wichtige Bedürfnisse** beschrieben. Jede Pflegehandlung kann diese prüfen:\n\n**1. Leben erhalten** — Atmen, Kreislauf, Ernährung, keine Schmerzen.\n\n**2. Sich sicher fühlen** — Der Mensch soll merken: 'Ich bin nicht allein. Es passiert nichts Schlimmes.'\n\n**3. Sich selbst erleben** — Der Mensch spürt seinen Körper. Er merkt: 'Das bin ich.' Wichtig bei Wachkoma oder Demenz.\n\n**4. Geborgenheit** — Wärme, Nähe, eine ruhige Stimme, eine feste Hand.\n\n**5. Kontakt haben** — Mit anderen verbunden sein. Auch ohne Worte.\n\nWer nur technisch pflegt, pflegt nicht basal stimulierend.",
          glossarBegriffe: ["Wachkoma"],
        },
      },
    },
    glossarBegriffe: ["Wachkoma"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: neun-wahrnehmungsbereiche (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-neun-wahrnehmungsbereiche",
    themaId: "basale-stimulation",
    titel: "Neun Wahrnehmungsbereiche",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Überlege: Mit welchen Sinnen nimmst du gerade wahr, dass du auf einem Stuhl sitzt? Zähle auf, was alles gleichzeitig passiert in deinem Körper.",
      antwort:
        "Basale Stimulation arbeitet mit 9 Wahrnehmungsbereichen: somatisch, vestibulär, vibratorisch (die drei 'basalen'), oral, olfaktorisch, auditiv, taktil-haptisch, visuell (Sinne) und kommunikativ (zwischenmenschlich). Jeder Bereich hat eigene Angebote.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Basale Stimulation arbeitet mit **9 Wahrnehmungsbereichen**: somatisch, vestibulär, vibratorisch (die drei 'basalen'), oral, olfaktorisch, auditiv, taktil-haptisch, visuell (Sinne) und kommunikativ (zwischenmenschlich). Jeder Bereich hat eigene Angebote.",
      textB1:
        "Es gibt **9 Wahrnehmungs-Bereiche**: somatisch, vestibulär, vibratorisch (die 3 grundlegenden), oral, olfaktorisch, auditiv, taktil-haptisch, visuell (Sinne) und kommunikativ. Für jeden Bereich gibt es eigene Angebote.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-04",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-neun-wahrnehmungsbereiche",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Neun Wahrnehmungsbereiche",
          body: "Das Konzept unterscheidet **9 Wahrnehmungsbereiche**. Die ersten drei gelten als **basal** — sie sind schon im Mutterleib aktiv:\n\n**Die drei basalen Bereiche:**\n- **Somatisch** — Wahrnehmung des eigenen Körpers über die Haut und Tiefensensibilität (Körpergrenzen, Druck, Wärme).\n- **Vestibulär** — Gleichgewichtssinn, Lage im Raum (Innenohr).\n- **Vibratorisch** — Schwingungen spüren (über Knochen, Brustkorb, Kehlkopf).\n\n**Die Sinnes-Bereiche:**\n- **Oral** — Schmecken, Saugen, Mundempfindungen.\n- **Olfaktorisch** — Riechen.\n- **Auditiv** — Hören.\n- **Taktil-haptisch** — Tastsinn der Hände, Greifen, Fühlen.\n- **Visuell** — Sehen.\n\n**Der zwischenmenschliche Bereich:**\n- **Kommunikativ** — Kontakt mit anderen Menschen (verbal, nonverbal, Präsenz).\n\nJede basal stimulierende Handlung wirkt meist in **mehreren Bereichen gleichzeitig** — eine beruhigende Waschung arbeitet z.B. somatisch, taktil-haptisch und kommunikativ. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Somatische Stimulation", "Vestibuläre Stimulation", "Vibratorische Stimulation"],
        },
        contentB1: {
          title: "Neun Bereiche der Wahrnehmung",
          body: "Es gibt **9 Bereiche der Wahrnehmung**. Die ersten drei sind **grundlegend** — sie arbeiten schon im Bauch der Mutter:\n\n**Die 3 grundlegenden Bereiche:**\n- **Somatisch** — den eigenen Körper spüren (über die Haut).\n- **Vestibulär** — Gleichgewicht, Lage spüren.\n- **Vibratorisch** — Schwingungen spüren.\n\n**Die Sinnes-Bereiche:**\n- **Oral** — Schmecken, Lippen, Mund.\n- **Olfaktorisch** — Riechen.\n- **Auditiv** — Hören.\n- **Taktil-haptisch** — Tasten mit den Händen.\n- **Visuell** — Sehen.\n\n**Der Kontakt-Bereich:**\n- **Kommunikativ** — Kontakt zu anderen Menschen.\n\nEine Pflegehandlung wirkt oft in **mehreren Bereichen gleichzeitig**. Zum Beispiel eine Waschung: somatisch, taktil-haptisch und kommunikativ.",
          glossarBegriffe: ["Somatische Stimulation", "Vestibuläre Stimulation", "Vibratorische Stimulation"],
        },
      },
    },
    glossarBegriffe: ["Somatische Stimulation", "Vestibuläre Stimulation", "Vibratorische Stimulation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: somatische-stimulation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-somatisch",
    themaId: "basale-stimulation",
    titel: "Somatische Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Mensch im Wachkoma fühlt seine Körpergrenzen oft nicht mehr — er weiß nicht, wo sein Körper aufhört. Welche Pflegehandlung könnte ihm helfen, seinen Körper wieder zu spüren?",
      antwort:
        "Die somatische Stimulation macht Körpergrenzen erfahrbar. Typische Angebote: Ganzkörperwaschung mit klarem Druck, Einreibungen, Abtasten mit fester Hand, warme Decken, 'Nest'-Positionierung. Wichtig: klarer, fester Druck statt leichtem Streicheln.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **somatische Stimulation** macht Körpergrenzen erfahrbar. Typische Angebote: Ganzkörperwaschung mit klarem Druck, Einreibungen, Abtasten mit fester Hand, warme Decken, 'Nest'-Positionierung. Ziel: Der Mensch soll spüren, wo sein Körper endet.",
      textB1:
        "Die **somatische Stimulation** hilft dem Menschen, seinen Körper zu spüren. Typische Angebote: Waschen mit festem Druck, Einreibungen, Decken einwickeln, 'Nest' aus Kissen. Ziel: Der Mensch spürt die Grenze seines Körpers.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-somatisch",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Somatische Stimulation",
          body: "Die **somatische Stimulation** spricht den ganzen Körper an — über Haut, Muskeln, Gelenke. Bei schwerstkranken Menschen sind Körpergrenzen oft 'diffus': Sie spüren nicht mehr, wo ihr Körper aufhört und die Umgebung beginnt.\n\n**Typische Angebote:**\n- **Ganzkörperwaschung** mit deutlichem, gleichmäßigem Druck (nicht zaghaft streicheln)\n- **Atemstimulierende Einreibung (ASE)** am Rücken\n- **Nest-Positionierung** — der Mensch wird mit Kissen und Decken fest umrahmt\n- **Abtasten** in langen, ruhigen Zügen mit fester Hand\n- **Wärme-Angebote** (warme Decke, Waschlappen)\n\n**Wichtig:** Nicht zu leicht berühren — leichte, unklare Reize können Stress auslösen. Lieber **fester, klarer Druck** und **wenige, deutliche Berührungen** statt vieler schwacher. Die Bewegung soll **durchgängig** sein, nicht abgehackt. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Somatische Stimulation", "Körperschema"],
        },
        contentB1: {
          title: "Somatische Stimulation",
          body: "Die **somatische Stimulation** spricht den ganzen Körper an — über die Haut. Bei schwer kranken Menschen ist oft unklar: Wo hört mein Körper auf? Das macht Angst. Somatische Angebote helfen.\n\n**Wichtige Angebote:**\n- **Ganzkörperwaschung** mit festem, gleichem Druck (nicht streicheln)\n- **Einreibung** am Rücken (ASE)\n- **Nest** aus Kissen und Decken um den Körper\n- **Abtasten** in langen, ruhigen Bewegungen\n- **Wärme** (warme Decke, warmer Waschlappen)\n\n**Wichtig:** Nicht zu leicht berühren. Leichte Berührungen können Stress machen. Lieber **fest und klar**. Bewegung soll **durchgängig** sein, nicht abgehackt.",
          glossarBegriffe: ["Somatische Stimulation", "Körperschema"],
        },
      },
    },
    glossarBegriffe: ["Somatische Stimulation", "Körperschema"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: vestibulaere-stimulation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-vestibulaer",
    themaId: "basale-stimulation",
    titel: "Vestibuläre Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient liegt seit Wochen bewegungslos. Er verliert das Gefühl für oben und unten. Wie kannst du ihm — ohne ihn ganz aufzusetzen — helfen, Lage im Raum wahrzunehmen?",
      antwort:
        "Die vestibuläre Stimulation spricht den Gleichgewichtssinn (Innenohr) an. Angebote: leichtes Wiegen, Kopfposition verändern, Oberkörper anheben, sanftes Schaukeln. Ziel: Der Mensch nimmt seine Lage im Raum wahr. Vorsicht bei erhöhtem Hirndruck.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **vestibuläre Stimulation** spricht den Gleichgewichtssinn (Innenohr) an. Angebote: leichtes Wiegen, Kopfposition verändern, Oberkörper anheben, sanftes Schaukeln. Ziel: Der Mensch nimmt seine Lage im Raum wahr. Vorsicht bei erhöhtem Hirndruck.",
      textB1:
        "Die **vestibuläre Stimulation** spricht den **Gleichgewichts-Sinn** an (Innenohr). Angebote: leichtes Wiegen, Kopf drehen, Oberkörper höher lagern, sanft schaukeln. Der Mensch spürt: Wo bin ich im Raum? Achtung bei Hirndruck.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-vestibulaer",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Vestibuläre Stimulation",
          body: "Die **vestibuläre Stimulation** aktiviert den Gleichgewichtssinn im Innenohr (Bogengänge). Bei lang immobilen Patienten verkümmert dieser Sinn — sie verlieren die Orientierung im Raum.\n\n**Typische Angebote:**\n- **Positionswechsel** (Seitenlage ↔ Rücken ↔ 30°-Lage)\n- **Kopfbewegungen** (sanft drehen, nach vorne/hinten neigen)\n- **Oberkörper anheben** (Bettkopfteil hochstellen)\n- **Leichtes Wiegen** im Sitzen oder im Arm\n- **Mobilisation an die Bettkante**\n\n**Wichtig:**\n- **Langsam** ausführen — schnelle Bewegungen lösen Übelkeit oder Schwindel aus\n- **Ankündigen** — vor der Bewegung Initialberührung und kurzes Wort\n- **Kontraindikationen** beachten: erhöhter Hirndruck, instabiler Kreislauf, Halswirbelverletzung\n- **Kleine Bewegungen reichen** — schon das Heben des Oberkörpers um 30° stimuliert\n\nVestibuläre Reize bringen oft erstaunliche Reaktionen: Patienten öffnen die Augen, werden wacher, atmen tiefer. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Vestibuläre Stimulation"],
        },
        contentB1: {
          title: "Vestibuläre Stimulation",
          body: "Die **vestibuläre Stimulation** spricht den **Gleichgewichts-Sinn** an. Der sitzt im Innenohr. Wenn ein Mensch lange liegt, verliert er das Gefühl für oben und unten.\n\n**Wichtige Angebote:**\n- **Position wechseln** (Seite ↔ Rücken ↔ 30°)\n- **Kopf sanft drehen** oder neigen\n- **Oberkörper hochstellen**\n- **Leicht wiegen** im Arm oder im Sitzen\n- **An die Bettkante mobilisieren**\n\n**Wichtig:**\n- **Langsam** machen — schnell macht Schwindel\n- **Ankündigen** (Initialberührung, kurzes Wort)\n- **Vorsicht** bei Hirndruck oder instabilem Kreislauf\n- **Kleine Bewegungen reichen**\n\nOft wirkt es stark: Patienten öffnen die Augen, atmen tiefer, werden wacher.",
          glossarBegriffe: ["Vestibuläre Stimulation"],
        },
      },
    },
    glossarBegriffe: ["Vestibuläre Stimulation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: vibratorische-stimulation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-vibratorisch",
    themaId: "basale-stimulation",
    titel: "Vibratorische Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum spüren wir unsere eigene Stimme nicht nur im Ohr, sondern auch in der Brust? Und wie könnte man diesen 'inneren' Sinn bei einem Patienten nutzen?",
      antwort:
        "Die vibratorische Stimulation nutzt Schwingungen, die über Knochen ins Körperinnere wandern. Angebote: sanftes Summen am Brustkorb, elektrische Zahnbürste, Vibrationsgeräte, Klangschalen. Kontraindiziert bei Frakturen, frischen OPs und Thrombose-Risiko.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **vibratorische Stimulation** nutzt **Schwingungen**, die über Knochen ins Körperinnere wandern. Angebote: sanftes Summen am Brustkorb, elektrische Zahnbürste, Vibrationsgeräte, Klangschalen. Ziel: den Körper von innen wahrnehmen.",
      textB1:
        "Die **vibratorische Stimulation** arbeitet mit **Schwingungen**. Die gehen durch die Knochen ins Innere. Angebote: Summen am Brustkorb, elektrische Zahnbürste, Vibrations-Gerät, Klangschale. Der Mensch spürt seinen Körper innen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-vibratorisch",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Vibratorische Stimulation",
          body: "Die **vibratorische Stimulation** nutzt Schwingungen, die über Knochen und Gewebe ins Körperinnere fortgeleitet werden. Dieser Reiz ist eindeutig und erreicht auch tief sedierte Patienten. Schon im Mutterleib spürt der Fötus die Stimme der Mutter über die Knochenleitung.\n\n**Typische Angebote:**\n- **Eigene Stimme summen** am Brustkorb oder Kopfkissen des Patienten\n- **Elektrische Zahnbürste** (gedämpft am Schlüsselbein oder Handballen)\n- **Vibrationskissen** oder Vibrationsgeräte\n- **Klangschalen** auf dem Körper (Bauch, Brustkorb)\n- **Atemstimulierende Einreibung (ASE)** kombiniert mit Summen\n\n**Wichtig:**\n- **Knochen als Leiter** — Vibration am Brustkorb, Kehlkopf, Schulter wirkt tief\n- **Dosiert** einsetzen — Vibration ermüdet schnell\n- **Nicht** bei Frakturen, frischen OPs, Thrombose-Risiko\n- **Ankündigen** — Vibration überrascht leicht\n\nBesonders wertvoll bei Menschen mit stark eingeschränktem Hören und Sehen. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Vibratorische Stimulation", "Knochenleitung"],
        },
        contentB1: {
          title: "Vibratorische Stimulation",
          body: "Die **vibratorische Stimulation** arbeitet mit **Schwingungen**. Die Schwingungen gehen durch die Knochen ins Körper-Innere. Das ist ein klares Signal — auch bei tief sedierten Menschen. Schon im Bauch der Mutter hört der Fötus die Stimme so.\n\n**Angebote:**\n- **Summen** am Brustkorb des Patienten\n- **Elektrische Zahnbürste** (am Schlüsselbein, Handballen)\n- **Vibrations-Kissen** oder Gerät\n- **Klangschale** auf den Körper legen\n\n**Wichtig:**\n- **Knochen leiten die Vibration** tief in den Körper\n- **Nicht zu viel** — Vibration macht schnell müde\n- **Nicht** bei Knochenbruch, frischer OP, Thrombose\n- **Ankündigen** — sonst erschrickt der Mensch",
          glossarBegriffe: ["Vibratorische Stimulation", "Knochenleitung"],
        },
      },
    },
    glossarBegriffe: ["Vibratorische Stimulation", "Knochenleitung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: beruhigende-gkw (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-gkw-beruhigend",
    themaId: "basale-stimulation",
    titel: "Beruhigende Ganzkörperwaschung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Kaya ist unruhig, sie zupft an den Laken, ihr Puls ist hoch. Sie soll zur Ruhe kommen. Wie gestaltest du ihre Waschung — Wassertemperatur, Tempo, Richtung?",
      antwort:
        "Beruhigende Ganzkörperwaschung: Wassertemperatur 37-40 °C, Waschrichtung mit der Haarwuchsrichtung, langsames Tempo, gleichmäßiger Druck, ruhige Atmosphäre (gedämpftes Licht, wenig Sprechen). Aktiviert den Parasympathikus: Puls sinkt, Muskeln entspannen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **beruhigende Ganzkörperwaschung**: Wassertemperatur **37-40 °C**, Waschrichtung **mit** der Haarwuchsrichtung, **langsames** Tempo, gleichmäßiger Druck, ruhige Atmosphäre (gedämpftes Licht, wenig Sprechen). Ziel: Puls sinkt, Muskeln entspannen.",
      textB1:
        "Die **beruhigende Waschung**: Wasser **warm** (37-40 °C), Waschrichtung **mit** dem Haarwuchs (z.B. am Arm: oben nach unten), **langsam**, gleichmäßiger Druck, ruhig. Ziel: Der Mensch wird ruhiger — Puls sinkt, Muskeln locker.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-08",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-gkw-beruhigend",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Beruhigende Ganzkörperwaschung",
          body: "Die **beruhigende Ganzkörperwaschung** ist eine der klassischen Anwendungen der Basalen Stimulation. Sie soll den Parasympathikus aktivieren — den 'Ruhe-Nerv'.\n\n**Kennzeichen:**\n- **Wassertemperatur:** 37-40 °C (hautwarm, angenehm)\n- **Richtung:** **mit** der Haarwuchsrichtung (rumpfwärts-auswärts, zur Peripherie)\n- **Tempo:** langsam, ohne Hast, lange Züge\n- **Druck:** mittelfest und gleichmäßig\n- **Atmosphäre:** gedämpftes Licht, wenig Sprechen, keine Nebenhandlungen\n- **Waschlappen:** anliegend, nicht abheben und wieder ansetzen\n\n**Indikationen:** Unruhe, Schlafstörungen, Schmerzen, Hypertonie, Angst, vor dem Zubettgehen.\n\n**Typische Reaktionen:** Puls sinkt, Atmung wird tiefer und langsamer, Muskeltonus nimmt ab, Bewohner schließt die Augen.\n\n**Kontraindikation:** Apathie, Wachkoma mit niedrigem Antrieb — hier wäre eine **belebende** Waschung passender. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Beruhigende Ganzkörperwaschung", "Parasympathikus", "Apathie"],
        },
        contentB1: {
          title: "Beruhigende Ganzkörperwaschung",
          body: "Die **beruhigende Waschung** soll den Menschen zur Ruhe bringen. Sie aktiviert den 'Ruhe-Nerv' (Parasympathikus).\n\n**So geht es:**\n- **Wasser:** 37-40 °C (hautwarm)\n- **Richtung: mit** der Haarwuchsrichtung (vom Körper weg nach außen)\n- **Tempo:** langsam, lange Züge, ohne Hast\n- **Druck:** mittelfest, gleichmäßig\n- **Umgebung:** gedämpftes Licht, wenig sprechen, ruhig\n- **Waschlappen:** immer an der Haut lassen, nicht absetzen\n\n**Wann:** Bei Unruhe, Schlafstörung, Schmerzen, hoher Puls, Angst, vor dem Einschlafen.\n\n**Was passiert:** Puls sinkt, Atmung wird tiefer, Muskeln entspannen.\n\n**Nicht** bei apathischen Menschen — die brauchen die **belebende** Waschung.",
          glossarBegriffe: ["Beruhigende Ganzkörperwaschung", "Parasympathikus", "Apathie"],
        },
      },
    },
    glossarBegriffe: ["Beruhigende Ganzkörperwaschung", "Parasympathikus", "Apathie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: belebende-gkw (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-gkw-belebend",
    themaId: "basale-stimulation",
    titel: "Belebende Ganzkörperwaschung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr Fischer ist apathisch, öffnet kaum die Augen, reagiert wenig. Du willst ihn wacher machen, damit er zum Mittagessen wach ist. Wie gestaltest du jetzt die Waschung — anders als zum Abend?",
      antwort:
        "Belebende Ganzkörperwaschung: Wassertemperatur 23-28 °C, Waschrichtung gegen die Haarwuchsrichtung (peripher zur Körpermitte), zügiges Tempo, frischer Duft möglich (Zitrus, Minze), helle Atmosphäre. Aktiviert den Sympathikus: Patient wird wacher, aktiver.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **belebende Ganzkörperwaschung**: Wassertemperatur **23-28 °C**, Waschrichtung **gegen** die Haarwuchsrichtung (peripher zur Körpermitte), **zügiges** Tempo, frischer Duft möglich (Zitrus, Minze), helle Atmosphäre. Ziel: Patient wird wacher, aktiver.",
      textB1:
        "Die **belebende Waschung**: Wasser **kühler** (23-28 °C), Richtung **gegen** den Haarwuchs (z.B. am Arm: Hand → Schulter), **zügig**, frischer Duft (Zitrone, Minze). Der Mensch wird **wacher**, aktiver, aufmerksamer.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-09",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-gkw-belebend",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Belebende Ganzkörperwaschung",
          body: "Die **belebende Ganzkörperwaschung** aktiviert den Sympathikus — den 'Aktivitäts-Nerv'. Sie wird eingesetzt, wenn der Bewohner wacher, aktiver und aufmerksamer werden soll.\n\n**Kennzeichen:**\n- **Wassertemperatur:** 23-28 °C (kühler als Hautoberfläche)\n- **Richtung:** **gegen** die Haarwuchsrichtung (Peripherie → Körpermitte)\n- **Tempo:** zügig, nicht hastig — aber deutlich schneller als beruhigend\n- **Druck:** klar und deutlich\n- **Atmosphäre:** Licht hell, Ansprache aktiv, ggf. Musik, frische Luft\n- **Zusatz:** Zitrus- oder Minzwaschlotion (keine ätherischen Öle ohne Prüfung)\n\n**Indikationen:** Apathie, Somnolenz, Wachkoma mit niedrigem Antrieb, morgens vor einer Aktivität, nach langer Bettruhe.\n\n**Typische Reaktionen:** Puls steigt leicht, Atmung wird aktiver, Augen öffnen sich, Gesicht wird lebendiger.\n\n**Kontraindikation:** Fieber, Hypertonie-Krise, akute Schmerzen, Unruhe. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Belebende Ganzkörperwaschung", "Sympathikus", "Apathie"],
        },
        contentB1: {
          title: "Belebende Ganzkörperwaschung",
          body: "Die **belebende Waschung** macht den Menschen **wacher und aktiver**. Sie aktiviert den 'Aktivitäts-Nerv' (Sympathikus).\n\n**So geht es:**\n- **Wasser:** 23-28 °C (**kühler** als die Haut)\n- **Richtung: gegen** den Haarwuchs (von außen zum Körper)\n- **Tempo:** zügig, aber nicht hastig\n- **Druck:** klar, deutlich\n- **Umgebung:** helles Licht, normale Ansprache, Musik möglich\n- **Duft:** Zitrone, Minze (kein ätherisches Öl ohne Prüfung)\n\n**Wann:** Bei Apathie, Schläfrigkeit, Wachkoma mit wenig Reaktion, morgens vor einer Aktivität.\n\n**Was passiert:** Puls steigt leicht, Atmung aktiver, Augen gehen auf, Gesicht wacher.\n\n**Nicht** bei Fieber, hohem Blutdruck, Schmerzen, Unruhe.",
          glossarBegriffe: ["Belebende Ganzkörperwaschung", "Sympathikus", "Apathie"],
        },
      },
    },
    glossarBegriffe: ["Belebende Ganzkörperwaschung", "Sympathikus", "Apathie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: neurophysiologische-gkw (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-gkw-neurophysiologisch",
    themaId: "basale-stimulation",
    titel: "Neurophysiologische Ganzkörperwaschung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr Weber hat einen Schlaganfall mit linksseitiger Hemiparese. Seine linke Seite 'vergisst' er oft. Warum wäre es falsch, bei der Waschung die gesunde rechte Seite zuerst und ausführlicher zu waschen?",
      antwort:
        "Die betroffene Seite muss bewusst einbezogen werden (zuerst oder gleichwertig) — sonst verstärkt sich der Neglect. Das Gehirn soll gerade die vernachlässigte Seite wieder lernen. Lange Züge über beide Körperhälften, Pflegekraft steht auf der betroffenen Seite.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **neurophysiologische GKW** (nach Bobath) bezieht die **betroffene Seite bewusst ein**. Lange, durchgängige Züge über beide Körperhälften, betroffene Seite wird mitgewaschen, mitgekleidet, mitbetrachtet. Ziel: Wahrnehmung der betroffenen Seite fördern.",
      textB1:
        "Die **neurophysiologische Waschung** (nach Bobath): Die **kranke Seite** wird **bewusst mit einbezogen**. Lange Züge über beide Seiten. Die betroffene Seite nicht 'vergessen'. Ziel: Der Mensch spürt auch seine kranke Seite wieder.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bobath B. (1971)", "Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-gkw-neurophysiologisch",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Neurophysiologische Ganzkörperwaschung",
          body: "Die **neurophysiologische Ganzkörperwaschung** ist eng mit dem **Bobath-Konzept** verknüpft. Sie richtet sich an Patienten mit Halbseitenlähmung (z.B. nach Schlaganfall), bei denen eine Körperhälfte in der Wahrnehmung 'fehlt' — das **Neglect-Phänomen**.\n\n**Kennzeichen:**\n- **Lange, durchgängige Züge** über die gesamte Körperachse (z.B. vom Fuß bis zur Schulter in einem Zug)\n- **Betroffene Seite zuerst** oder bewusst **gleichwertig** waschen\n- **Pflegekraft steht** auf der betroffenen Seite\n- **Betroffene Hand** in die Waschhandlung einbeziehen (Waschlappen halten, führen)\n- **Benennen**, welche Körperteile berührt werden ('jetzt dein linker Arm')\n- **Blickführung**: Patient wird ermutigt, zur betroffenen Seite zu schauen\n\n**Ziel:** Das Gehirn wieder an die betroffene Seite erinnern, sie ins Körperschema integrieren, Neglect reduzieren. (Bobath B., 1971; Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Neglect", "Körperschema"],
        },
        contentB1: {
          title: "Neurophysiologische Ganzkörperwaschung",
          body: "Die **neurophysiologische Waschung** kommt aus dem **Bobath-Konzept**. Sie ist für Menschen mit Halbseitenlähmung (z.B. nach Schlaganfall). Diese Menschen 'vergessen' oft eine Körperhälfte — das nennt man **Neglect**.\n\n**Kennzeichen:**\n- **Lange Züge** über die ganze Körperachse (z.B. vom Fuß bis zur Schulter)\n- **Kranke Seite zuerst** oder **gleich viel** waschen\n- Die Pflegekraft **steht auf der kranken Seite**\n- Die **kranke Hand mitnehmen** (Waschlappen halten, führen)\n- **Benennen:** 'Jetzt dein linker Arm'\n- Den Menschen ermutigen, zur kranken Seite zu **schauen**\n\n**Ziel:** Das Gehirn merkt wieder: Die kranke Seite gehört dazu.",
          glossarBegriffe: ["Neglect", "Körperschema"],
        },
      },
    },
    glossarBegriffe: ["Neglect", "Körperschema"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: entwicklungsfoerdernde-gkw (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-gkw-entwicklungsfoerdernd",
    themaId: "basale-stimulation",
    titel: "Entwicklungsfördernde Ganzkörperwaschung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Mensch im Wachkoma wirkt wie ein hilfloses Kind. Die Wahrnehmung ist auf einem frühen Stand. Wie könnte eine Waschung gestaltet sein, die sich an dieser frühkindlichen Erfahrung orientiert?",
      antwort:
        "Die entwicklungsfördernde GKW orientiert sich an der frühkindlichen Entwicklung: Berührungsfolge Kopf → Rumpf → Extremitäten, Beugung der Gelenke statt Streckung, Körper 'einpacken'. Für Kinder und Wachkoma-Patienten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **entwicklungsfördernde GKW** orientiert sich an der **frühkindlichen Entwicklung**: Berührungsfolge kopf-rumpf-extremitäten (wie die Entwicklung verläuft), Beugung der Gelenke statt Streckung, Körper **einpacken**. Für Kinder und Wachkoma-Patienten.",
      textB1:
        "Die **entwicklungsfördernde Waschung** ahmt die frühe Kindheit nach: **Kopf zuerst, dann Körper, dann Arme und Beine** (wie in der Entwicklung). **Beugung** statt Streckung. Den Körper **einpacken**. Für Kinder und Wachkoma.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fröhlich A. (1975)", "Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-gkw-entwicklungsfoerdernd",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Entwicklungsfördernde Ganzkörperwaschung",
          body: "Die **entwicklungsfördernde Ganzkörperwaschung** orientiert sich an der Reihenfolge der kindlichen Wahrnehmungsentwicklung: Erst nimmt das Kind seinen Kopf wahr, dann den Rumpf, dann Arme, zuletzt Beine. Bei schwerstkranken Menschen (Wachkoma, schwere Behinderung) ist die Wahrnehmung oft auf diesen frühen Stand zurückgeführt.\n\n**Kennzeichen:**\n- **Berührungsreihenfolge:** Kopf → Brust → Bauch → Arme → Beine\n- **Beugung vor Streckung:** Gelenke in leichter Beugestellung — entspricht fetaler Haltung\n- **'Einpacken'**: Rumpf mit einem Handtuch oder beiden Händen umschließen\n- **Begrenzung herstellen** (Nest): Kissen um den Körper\n- **Langsame, wiederholende Bewegungen** (wie Schaukeln)\n- **Bezugsperson** möglichst konstant (vertraute Stimme, vertraute Berührung)\n\n**Einsatz:** Kinder mit schweren Behinderungen, Menschen im Wachkoma, Schwerstpflegebedürftige. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Wachkoma"],
        },
        contentB1: {
          title: "Entwicklungsfördernde Ganzkörperwaschung",
          body: "Die **entwicklungsfördernde Waschung** macht es wie in der frühen Kindheit: Ein Baby spürt zuerst seinen Kopf, dann den Körper, dann Arme, dann Beine. Bei schwer kranken Menschen ist die Wahrnehmung oft auf diesem frühen Stand.\n\n**Kennzeichen:**\n- **Reihenfolge:** Kopf → Brust → Bauch → Arme → Beine\n- **Beugung** statt Streckung (wie im Mutterleib)\n- **Einpacken**: Rumpf mit Handtuch oder beiden Händen umschließen\n- **Nest**: Kissen um den Körper\n- **Langsame, wiederkehrende Bewegungen** (wie Schaukeln)\n- **Immer dieselbe Pflegekraft** — vertraute Stimme und Hand\n\n**Für wen:** Kinder mit schweren Behinderungen, Menschen im Wachkoma.",
          glossarBegriffe: ["Wachkoma"],
        },
      },
    },
    glossarBegriffe: ["Wachkoma"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: initialberuehrung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-initialberuehrung",
    themaId: "basale-stimulation",
    titel: "Initialberührung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du schläfst tief und jemand beginnt plötzlich, ohne Ankündigung, deinen Arm zu waschen. Wie reagierst du? Und warum ist das bei einem Patienten im Wachkoma besonders kritisch?",
      antwort:
        "Die Initialberührung ist eine feste, klare Handauflage auf Schulter, Oberarm oder Brustbein — immer dieselbe Stelle — mit kurzer Ansprache, vor jeder Pflegehandlung. Verhindert Überraschung, stellt Erstkontakt her, gibt dem Patienten Orientierung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Initialberührung** ist eine **feste, klare Handauflage** (meist Schulter oder Oberarm) mit kurzer Ansprache — **vor jeder Handlung**. Der Patient weiß: 'Jemand ist da, und gleich passiert etwas.' Erreichbarkeit herstellen, Überraschung vermeiden.",
      textB1:
        "Die **Initialberührung** ist eine **feste Handauflage** auf Schulter oder Oberarm mit kurzem Wort. Sie kommt **vor jeder Handlung**. Der Mensch weiß: 'Da ist jemand. Gleich passiert etwas.' Keine Überraschung für den Patienten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-initialberuehrung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Initialberührung",
          body: "Die **Initialberührung** (auch 'Erstberührung' oder 'Kontaktberührung') ist eine der wichtigsten Techniken der Basalen Stimulation. Sie stellt den **Erstkontakt** vor jeder Pflegehandlung her — mit dem Ziel, den Patienten **nicht zu überraschen** und ihm eine **bewusste Orientierung** zu ermöglichen.\n\n**So geht sie:**\n- **Stelle:** Feste Hand auf Schulter, Oberarm oder Brustbein (immer **dieselbe Stelle**)\n- **Druck:** Klar und deutlich spürbar (nicht leicht, nicht flüchtig)\n- **Dauer:** 3-5 Sekunden, ruhig halten\n- **Ansprache:** 'Frau Kaya, ich bin Anna. Ich wasche gleich deine Arme.' — Name zuerst, Handlung ankündigen\n- **Reaktion abwarten:** 1-2 Sekunden — kommt Blick, Veränderung der Mimik, Atemvertiefung?\n\n**Besonders wichtig bei:** Bewusstseinsstörungen, Demenz, Sehbehinderung, tief schlafenden Patienten. **Ohne Initialberührung** werden Handlungen als Übergriff erlebt — die Folge sind Abwehr, Unruhe, Stressreaktionen. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Initialberührung"],
        },
        contentB1: {
          title: "Initialberührung",
          body: "Die **Initialberührung** ist eine der wichtigsten Techniken. Sie kommt **vor jeder Handlung**. Ziel: Den Patienten nicht überraschen.\n\n**So geht es:**\n- **Stelle:** Feste Hand auf Schulter, Oberarm oder Brustbein (immer **dieselbe Stelle**)\n- **Druck:** Klar spürbar, nicht leicht\n- **Dauer:** 3-5 Sekunden, ruhig\n- **Wort:** 'Frau Kaya, ich bin Anna. Ich wasche gleich deine Arme.'\n- **Warten:** 1-2 Sekunden — kommt ein Blick, ein Atmen?\n\n**Wann besonders wichtig:** Wachkoma, Demenz, Sehbehinderung, tiefer Schlaf.\n\n**Ohne Initialberührung** fühlt sich der Mensch **überrascht** oder **überfallen**. Die Folge: Abwehr, Unruhe, Stress.",
          glossarBegriffe: ["Initialberührung"],
        },
      },
    },
    glossarBegriffe: ["Initialberührung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: atemstimulierende-einreibung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-ase",
    themaId: "basale-stimulation",
    titel: "Atemstimulierende Einreibung (ASE)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du selbst flach und unruhig atmest — was hilft dir? Jetzt übertrage das: Wie könnten Hände am Rücken helfen, eine tiefere, ruhigere Atmung zu fördern?",
      antwort:
        "Die Atemstimulierende Einreibung (ASE): beide Hände, symmetrisch am Rücken, langsame, rhythmische Züge von den Schulterblättern abwärts. Der Reiz läuft mit dem Ausatmen. Ziel: tiefere, ruhigere Atmung und Entspannung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Atemstimulierende Einreibung (ASE)**: beide Hände, symmetrisch am Rücken, **langsame, rhythmische Züge** von den Schulterblättern abwärts. Der Reiz läuft **mit dem Ausatmen**. Ziel: tiefere, ruhigere Atmung — und Entspannung. (Bienstein)",
      textB1:
        "Die **Atemstimulierende Einreibung (ASE)**: Beide Hände gleichzeitig auf dem Rücken. **Langsame, rhythmische** Bewegung von den Schultern nach unten. Im Takt der Atmung. Ziel: Der Mensch atmet **tiefer** und **ruhiger**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-ase",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Atemstimulierende Einreibung (ASE)",
          body: "Die **Atemstimulierende Einreibung (ASE)** ist eine der bekanntesten Techniken aus dem Konzept. Sie nutzt **symmetrische, rhythmische Berührungen am Rücken**, um die Atmung zu vertiefen und den Parasympathikus zu aktivieren.\n\n**Durchführung:**\n- **Position:** Patient sitzt oder liegt auf der Seite, Rücken zugänglich\n- **Mittel:** Hautöl oder -lotion (dünn), warm\n- **Hände:** beide Hände flach, parallel, **links und rechts** von der Wirbelsäule\n- **Bewegung:** Langsame Züge von den Schulterblättern nach unten — beim **Ausatmen** abwärts, beim Einatmen wird oben neu angesetzt\n- **Rhythmus:** An die Atmung des Patienten anpassen\n- **Dauer:** 5-10 Minuten, je nach Reaktion\n\n**Wirkung:** Atmung wird tiefer und langsamer, Puls sinkt, Muskeln entspannen, Patient kommt zur Ruhe.\n\n**Indikationen:** Unruhe, flache Atmung, Pneumonieprophylaxe, Einschlafhilfe, vor schmerzhaften Maßnahmen.\n\n**Kontraindikationen:** Wunden am Rücken, frische Wirbelsäulen-OP, offene Hautstellen. (Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Atemstimulierende Einreibung (ASE)", "Parasympathikus"],
        },
        contentB1: {
          title: "Atemstimulierende Einreibung (ASE)",
          body: "Die **ASE** ist eine bekannte Einreibung am Rücken. Sie macht die Atmung **tiefer** und **ruhiger**.\n\n**So geht es:**\n- **Position:** Patient sitzt oder liegt auf der Seite\n- **Mittel:** dünn Hautöl (warm)\n- **Hände:** beide flach, **links und rechts** von der Wirbelsäule\n- **Bewegung:** langsame Züge von den Schultern nach unten — **beim Ausatmen**\n- **Rhythmus:** dem Atem des Patienten folgen\n- **Dauer:** 5-10 Minuten\n\n**Was passiert:** Atmung wird tiefer, Puls sinkt, Muskeln entspannen.\n\n**Wann:** Bei Unruhe, flacher Atmung, zur Pneumonie-Vorbeugung, vor dem Einschlafen, vor schmerzhaften Handlungen.\n\n**Nicht bei:** Wunden am Rücken, frischer Wirbelsäulen-OP, offenen Hautstellen.",
          glossarBegriffe: ["Atemstimulierende Einreibung (ASE)", "Parasympathikus"],
        },
      },
    },
    glossarBegriffe: ["Atemstimulierende Einreibung (ASE)", "Parasympathikus"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: orale-olfaktorische-stimulation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-oral-olfaktorisch",
    themaId: "basale-stimulation",
    titel: "Orale und olfaktorische Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welcher Geruch oder Geschmack weckt bei dir sofort eine bestimmte Erinnerung? Warum könnten gerade diese Sinne bei Menschen mit Demenz oder im Wachkoma so wertvoll sein?",
      antwort:
        "Orale und olfaktorische Stimulation wirken direkt auf das limbische System (Emotion und Erinnerung). Orale Angebote auch ohne Schluckvermögen möglich. Gerüche müssen biografisch gewählt werden — Angehörige fragen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Orale Stimulation**: Lippen befeuchten, vertraute Geschmäcker am Löffel (Lieblingsgetränk, Zitronensaft), Zahnbürste. **Olfaktorische Stimulation**: vertraute Gerüche (Kaffee, Parfum des Ehepartners, Lavendel). Beide Sinne sind emotional stark verbunden.",
      textB1:
        "**Oral** = Mund: Lippen befeuchten, vertrauter Geschmack am Löffel, Zahnbürste. **Olfaktorisch** = Nase: vertraute Gerüche (Kaffee, Parfum, Lavendel). Beide Sinne sind stark mit **Erinnerungen** verbunden — besonders bei Demenz.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)", "DNQP (2018): Beziehungsgestaltung Demenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-oral-olfaktorisch",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Orale und olfaktorische Stimulation",
          body: "Der **orale** und der **olfaktorische** Sinn sind eng mit Emotion und Erinnerung verbunden — beide Sinne projizieren direkt ins limbische System.\n\n**Orale Stimulation:**\n- **Lippen befeuchten** (feuchter Waschlappen, Lippenpflege mit Geschmack)\n- **Geschmacksreize** am Löffel oder Tupfer: Zitrone, Tee, Lieblingsgetränk, vertrauter Geschmack aus der Biografie\n- **Zahnbürste** mit vertrauter Zahnpasta\n- **Eiswürfel** (bei erlaubter Schluckfähigkeit)\n- **Wichtig:** Aspirationsprophylaxe — nur bei sicherem Schluckakt\n\n**Olfaktorische Stimulation:**\n- **Vertraute Gerüche** aus der Biografie: Kaffee, Waschmittel, Parfum des Partners, Lavendel, Weihnachtsgewürze\n- **Duftlampe** mit neutralen Düften (Zitrus, Vanille)\n- **Keine ätherischen Öle** bei Atemwegserkrankungen, Neugeborenen, unklarer Anamnese\n\n**Besonders wertvoll bei:** Demenz, Wachkoma, Palliativpflege. Oft erstaunliche Reaktionen: Lächeln, erste Wortäußerung, Entspannung. (Bienstein C./Fröhlich A., 1991; DNQP Beziehungsgestaltung Demenz, 2018)",
          glossarBegriffe: ["Biografiearbeit"],
        },
        contentB1: {
          title: "Orale und olfaktorische Stimulation",
          body: "**Oraler** und **olfaktorischer** Sinn sind eng mit **Gefühlen und Erinnerungen** verbunden.\n\n**Oral (Mund):**\n- **Lippen befeuchten** (feuchter Lappen, Lippenpflege)\n- **Geschmack** am Löffel: Zitrone, Tee, Lieblingsgetränk, vertrauter Geschmack\n- **Zahnbürste** mit gewohnter Zahnpasta\n- **Eiswürfel** (nur wenn sicher schlucken kann)\n- **Wichtig:** Nicht bei Schluckstörung — Gefahr des Verschluckens\n\n**Olfaktorisch (Nase):**\n- **Vertraute Gerüche** aus dem Leben: Kaffee, Waschmittel, Parfum, Lavendel\n- **Duftlampe** (Zitrus, Vanille — neutral)\n- **Nicht** bei Atemwegserkrankung, Neugeborenen, unklarer Vorgeschichte\n\n**Besonders gut bei:** Demenz, Wachkoma, Palliativpflege. Oft große Reaktionen: Lächeln, sogar erste Worte.",
          glossarBegriffe: ["Biografiearbeit"],
        },
      },
    },
    glossarBegriffe: ["Biografiearbeit"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: auditive-visuelle-taktile-stimulation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-auditiv-visuell-taktil",
    themaId: "basale-stimulation",
    titel: "Auditive, visuelle und taktil-haptische Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du einen Menschen im Wachkoma über Hören, Sehen und Tasten erreichen willst — was würdest du ihm anbieten? Nenne je ein konkretes Beispiel aus seinem Leben.",
      antwort:
        "Auditiv: vertraute Stimmen oder Lieblingsmusik (keine Dauerbeschallung). Visuell: wenige bedeutungsvolle Fotos mit klaren Kontrasten. Taktil-haptisch: vertrauter Gegenstand zum aktiven Greifen (Holzkugel, Gebetskette, Stoff). Prinzip: immer biografisch und dosiert.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Auditiv:** vertraute Stimmen (Tonbandaufnahme), Lieblingsmusik, keine Hintergrundgeräusche. **Visuell:** Fotos, bekannte Gesichter, ruhige Farben, klare Kontraste, Blickziele. **Taktil-haptisch:** vertrauten Gegenstand in die Hand (Stoff, Holz, Gebetskette). Alles biografisch orientiert.",
      textB1:
        "**Auditiv (Hören):** vertraute Stimme, Lieblingsmusik, keine Nebengeräusche. **Visuell (Sehen):** Fotos, Gesichter, klare Farben. **Taktil-haptisch (Tasten):** vertrauter Gegenstand in die Hand (weicher Stoff, Holz, Gebetskette). Immer **biografisch**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-15",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Fröhlich A. (1975)", "DNQP (2018): Beziehungsgestaltung Demenz"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-auditiv-visuell-taktil",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Auditive, visuelle und taktil-haptische Stimulation",
          body: "Die drei weiteren Sinnesbereiche — **auditiv, visuell, taktil-haptisch** — werden oft in Kombination eingesetzt, immer **biografisch orientiert**.\n\n**Auditive Stimulation:**\n- **Vertraute Stimmen** — Tonbandaufnahme von Angehörigen, eigene Geschichten\n- **Lieblingsmusik** aus der Biografie (oft aus der Jugend)\n- **Ruhige Umgebung** — Hintergrundradio, Fernseher, Pieptöne **reduzieren**\n- **Ansprache**: langsam, ruhig, beim Namen nennen, nicht über den Kopf hinweg sprechen\n\n**Visuelle Stimulation:**\n- **Fotos** von Familie, Heimat, vertrauten Orten\n- **Klare Kontraste**: weiße Tasse auf schwarzer Unterlage\n- **Blickziele**: Mobile über dem Bett, Fenster, bewegliches Licht\n- **Licht dosieren**: keine grelle Deckenbeleuchtung, warmes Licht\n\n**Taktil-haptische Stimulation:**\n- **Vertrauter Gegenstand** in die Hand: weicher Stoff, Fellstückchen, Holzkugel, Gebetskette, Kuscheltier\n- **Greifen anbieten** — aktives Tasten statt nur passives Berühren\n- **Verschiedene Materialien**: weich, hart, warm, kühl\n\n**Prinzip:** Alle Angebote sind **biografisch** (was kannte der Mensch?) und **dosiert** (wenig, aber klar). (Fröhlich A., 1975; DNQP Beziehungsgestaltung Demenz, 2018)",
          glossarBegriffe: ["Biografiearbeit"],
        },
        contentB1: {
          title: "Auditive, visuelle und taktil-haptische Stimulation",
          body: "Drei weitere Sinne — **Hören, Sehen, Tasten** — werden oft zusammen angeboten. Immer **biografisch**: Was kannte der Mensch?\n\n**Auditiv (Hören):**\n- **Vertraute Stimme** (z.B. Tonbandaufnahme)\n- **Lieblingsmusik** aus dem Leben\n- **Ruhig:** kein Radio, kein Fernseher im Hintergrund\n- **Ansprache:** langsam, ruhig, mit Namen\n\n**Visuell (Sehen):**\n- **Fotos** von Familie, vertraute Orte\n- **Klare Farben:** weiße Tasse auf schwarzem Untergrund\n- **Blickziel:** Mobile, Fenster\n- **Licht:** kein grelles Deckenlicht\n\n**Taktil-haptisch (Tasten):**\n- **Vertrauter Gegenstand** in die Hand: weicher Stoff, Holz, Gebetskette\n- **Greifen lassen**, nicht nur berühren\n- **Verschiedene Materialien**: weich, hart, warm\n\n**Wichtig:** Immer **biografisch** und **wenig, aber klar**.",
          glossarBegriffe: ["Biografiearbeit"],
        },
      },
    },
    glossarBegriffe: ["Biografiearbeit"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: anwendungsgebiete (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-anwendungsgebiete",
    themaId: "basale-stimulation",
    titel: "Anwendungsgebiete der Basalen Stimulation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Bei welchen Patientengruppen hast du schon Basale Stimulation erlebt oder gelesen — und warum gerade bei diesen? Was haben sie gemeinsam?",
      antwort:
        "Basale Stimulation ist indiziert bei stark eingeschränkter Wahrnehmung, Bewegung oder Kommunikation: Wachkoma, schwere Demenz, schwere Behinderung, Palliativphase, Langzeit-Sedierte, Frühgeborene, Menschen nach schwerem Schlaganfall.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Basale Stimulation ist indiziert bei **stark eingeschränkter Wahrnehmung, Bewegung oder Kommunikation**: Wachkoma, schwere Demenz, schwere Behinderung, Palliativphase, Langzeit-Sedierte, Frühgeborene, Menschen nach schwerem Schlaganfall. Auch bei Unruhe.",
      textB1:
        "Basale Stimulation ist **wichtig** bei: Wachkoma, schwerer Demenz, schwerer Behinderung, Palliativ-Pflege, lang-sedierten Patienten, Frühgeborenen, nach schwerem Schlaganfall. Auch bei Unruhe oder Schmerzen. Gemeinsam: Wahrnehmung eingeschränkt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-16",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bienstein C./Fröhlich A. (1991)", "Nydahl P. (2018)", "DNQP (2018)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-anwendungsgebiete",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Anwendungsgebiete der Basalen Stimulation",
          body: "Basale Stimulation ist immer dann indiziert, wenn die **Wahrnehmung, Bewegung oder Kommunikation** stark eingeschränkt ist. Die klassischen Anwendungsgebiete:\n\n**Intensiv- und Akutpflege:**\n- **Wachkoma (apallisches Syndrom)** — klassische Indikation\n- **Langzeit-Sedierte, Beatmete**\n- **Schwerer Schlaganfall** mit Halbseitenlähmung\n- **Schädel-Hirn-Trauma**\n\n**Geriatrie und Langzeitpflege:**\n- **Schwere Demenz** (mittel- bis schwergradig)\n- **Apathie, Rückzug, 'Hospitalismus'**\n- **Schwerst-Pflegebedürftige**\n\n**Pädiatrie:**\n- **Frühgeborene** (adaptiert — 'Känguru-Methode')\n- **Kinder mit schweren Mehrfachbehinderungen**\n- **Kinder im Wachkoma**\n\n**Palliativpflege:**\n- **Sterbende** in der letzten Phase\n- **Schmerz-, Unruhe-Patienten**\n\n**Was Basale Stimulation NICHT ist:**\n- Kein Ersatz für medizinische Therapie\n- Keine Garantie auf Reaktion — aber ethisch geboten, weil Wahrnehmung nicht sichtbar sein muss, um da zu sein. (Bienstein C./Fröhlich A., 1991; DNQP Beziehungsgestaltung Demenz, 2018)",
          glossarBegriffe: ["Wachkoma", "Känguru-Methode"],
        },
        contentB1: {
          title: "Anwendungsgebiete der Basalen Stimulation",
          body: "Basale Stimulation ist **wichtig**, wenn **Wahrnehmung, Bewegung oder Kommunikation** stark eingeschränkt sind. Typische Bereiche:\n\n**Intensivstation und Akut-Pflege:**\n- **Wachkoma** — die klassische Anwendung\n- **Lang sedierte, beatmete Patienten**\n- **Schwerer Schlaganfall**\n- **Schädel-Hirn-Trauma**\n\n**Alten- und Langzeitpflege:**\n- **Schwere Demenz** (Stufe 2-3)\n- **Apathie, Rückzug**\n- **Schwerst-Pflegebedürftige**\n\n**Kinder:**\n- **Frühgeborene** ('Känguru-Methode')\n- **Kinder mit schweren Behinderungen**\n- **Kinder im Wachkoma**\n\n**Palliativ-Pflege:**\n- **Sterbende** in der letzten Phase\n- **Unruhe und Schmerzen**\n\n**Was Basale Stimulation NICHT ist:**\n- **Kein Ersatz** für medizinische Therapie\n- **Keine Garantie** auf Reaktion — aber ethisch wichtig",
          glossarBegriffe: ["Wachkoma", "Känguru-Methode"],
        },
      },
    },
    glossarBegriffe: ["Wachkoma", "Känguru-Methode"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 17: abgrenzung-sensorisch (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "basale-stimulation-abgrenzung-sensorisch",
    themaId: "basale-stimulation",
    titel: "Abgrenzung: Basal vs. Sensorisch",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum heißt es basale Stimulation und nicht sensorische Stimulation? Welcher Unterschied steckt im Wort 'basal' — und warum war das Fröhlich so wichtig?",
      antwort:
        "'Basal' meint: grundlegend, vor-sprachlich, vor-bewusst. Diese Wahrnehmungen entstehen schon im Mutterleib (somatisch, vestibulär, vibratorisch). 'Sensorisch' dagegen meint die fünf Sinne — später entwickelt. Basale Reize gehen bei schwerstkranken Menschen zuletzt verloren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "'**Basal**' meint: **Grundlegend**, vor-sprachlich, vor-bewusst. Diese Wahrnehmungen entstehen schon **im Mutterleib** (somatisch, vestibulär, vibratorisch). 'Sensorisch' dagegen meint die **fünf Sinne** — später entwickelt. Basale Stimulation ist die tiefere Ebene.",
      textB1:
        "'**Basal**' bedeutet: **ganz grundlegend**. Die basalen Wahrnehmungen entstehen schon im **Bauch der Mutter** (somatisch, vestibulär, vibratorisch). 'Sensorisch' ist was anderes — die 5 Sinne. Basale Stimulation geht **tiefer**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bs-wb-17",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Fröhlich A. (1975)", "Bienstein C./Fröhlich A. (1991)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-bs-abgrenzung-sensorisch",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Abgrenzung: Basal vs. Sensorisch",
          body: "Der Begriff **'basal'** stammt vom lateinischen *basis* — die Grundlage. Fröhlich wählte ihn bewusst, um den **Unterschied zur sensorischen Therapie** zu markieren:\n\n**Basale Wahrnehmung (vor-sprachlich, vor-bewusst):**\n- **Somatisch** — den eigenen Körper spüren (ab 8. Schwangerschaftswoche)\n- **Vestibulär** — Bewegung, Lage (ab 10. SSW)\n- **Vibratorisch** — Schwingungen (ab 25. SSW hörbar)\n\nDiese drei Wahrnehmungsbereiche sind **schon im Mutterleib aktiv** und gehen bei schwerstkranken Menschen **zuletzt verloren** — auch bei Wachkoma oder schwerer Demenz.\n\n**Sensorische Stimulation (sprachlich-bewusst):**\n- Fünf Sinne: Sehen, Hören, Riechen, Schmecken, Tasten\n- Spätere Entwicklung des Kindes\n- Erfordert Verarbeitung und Interpretation\n\n**Die Konsequenz:**\n- Sensorisch-komplexe Reize (komplexe Bilder, Sprache) erreichen schwerstkranke Menschen oft nicht mehr\n- **Basale Reize** (Berührung, Bewegung, Schwingung) erreichen sie fast immer\n\nDarum ist 'basal' der richtige Begriff: Wir arbeiten auf der Ebene, die **zuerst entsteht und zuletzt verloren geht**. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)",
          glossarBegriffe: ["Basale Stimulation"],
        },
        contentB1: {
          title: "Abgrenzung: Basal vs. Sensorisch",
          body: "'**Basal**' kommt aus dem Lateinischen und heißt **Grundlage**. Fröhlich hat das Wort mit Absicht gewählt — um den Unterschied zur **sensorischen** Therapie zu zeigen.\n\n**Basale Wahrnehmung (ganz grundlegend):**\n- **Somatisch** — den eigenen Körper spüren (ab 8. Schwangerschaftswoche)\n- **Vestibulär** — Bewegung, Lage (ab 10. Woche)\n- **Vibratorisch** — Schwingungen (ab 25. Woche)\n\nDiese drei Bereiche sind **schon im Bauch der Mutter** aktiv. Bei schwer kranken Menschen gehen sie als **letzte** verloren.\n\n**Sensorische Stimulation:**\n- Die **5 Sinne**: Sehen, Hören, Riechen, Schmecken, Tasten\n- Entwickeln sich **später**\n- Brauchen **Verarbeitung** und Verstehen\n\n**Warum das wichtig ist:**\n- Komplexe Reize (Sprache, Bilder) erreichen schwer kranke Menschen oft nicht\n- **Basale Reize** (Berührung, Schwingung, Bewegung) erreichen sie fast immer\n\nDeshalb ist **'basal'** der richtige Begriff.",
          glossarBegriffe: ["Basale Stimulation"],
        },
      },
    },
    glossarBegriffe: ["Basale Stimulation"],
    karteikarten: [],
  },
];
