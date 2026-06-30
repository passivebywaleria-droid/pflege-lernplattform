import { SITE_NAME, SITE_URL, wissenUrl } from "@/lib/seo/site"
import type { WissenPage } from "@/lib/wissen/wissen-content"

/**
 * Server-Komponente: rendert JSON-LD als <script>. React escaped den Inhalt
 * von <script type="application/ld+json"> NICHT als Text — wir serialisieren
 * mit JSON.stringify und schützen gegen </script>-Injection.
 */
function JsonLdScript({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}

/** FAQPage + (optional) HowTo + BreadcrumbList für eine /wissen-Detailseite. */
export function WissenJsonLd({ page }: { page: WissenPage }) {
  const url = wissenUrl(page.slug)

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: { "@type": "Answer", text: f.antwort },
    })),
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/de` },
      { "@type": "ListItem", position: 2, name: "Wissen", item: wissenUrl() },
      { "@type": "ListItem", position: 3, name: page.frage, item: url },
    ],
  }

  const howTo = page.howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: page.howTo.name,
        step: page.howTo.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null

  return (
    <>
      <JsonLdScript data={faqPage} />
      <JsonLdScript data={breadcrumb} />
      {howTo && <JsonLdScript data={howTo} />}
    </>
  )
}

/** Organization + WebSite — einmalig auf der Hub-Seite. */
export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "de",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  }
  return <JsonLdScript data={data} />
}
