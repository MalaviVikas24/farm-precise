import { Helmet } from "react-helmet-async";

const SEOFile = () => {
  return (
    <Helmet>
      <title>Welcome to the FarmPrecise</title>
      <meta
        name="description"
        content="Empowering farmers through the CrorePati FPO scheme, with access to news, market prices, weather forecasts, and agricultural resources."
      />
      <meta
        name="keywords"
        content="FPO, Farmer Producer Organization, agricultural schemes, CrorePati FPO, farmers, fertilizer, pesticides, irrigation, market prices, weather forecast, farm courses"
      />
      <meta name="author" content="FPO Portal" />
      <meta property="og:title" content="FarmPrecise - Empowering Farmers" />
      <meta
        property="og:description"
        content="Access FPO schemes, market prices, weather updates, and agricultural courses with the CrorePati FPO scheme."
      />
      <meta property="og:image" content="https://www.wotr.org.in/logo.png" />
      <meta property="og:url" content="https://www.farmprecise.org" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.farmprecise.org" />
    </Helmet>
  );
};

export default SEOFile;
