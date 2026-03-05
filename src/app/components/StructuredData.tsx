export default function StructuredData() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      name: "Pleasant Pharmacy",
      url: "https://pleasantpharmacy.com",
      telephone: "+265999925400",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Blantyre",
        addressCountry: "MW",
      },
      areaServed: "Blantyre, Malawi",
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }