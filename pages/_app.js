import "../styles/globals.css";
import { COLORS } from "../pageStyles/globalStyles";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { enableBodyScroll } from "body-scroll-lock";
import { useRouter } from "next/router";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const [viewedHome, setViewedHome] = useState(false);
  const [homeButtonScaled, setHomeButtonScaled] = useState(false);
  const [viewedAbout, setViewedAbout] = useState(false);
  const [viewedContact, setViewedContact] = useState(false);
  const [viewedTravel, setViewedTravel] = useState(false);
  const [viewedTimer, setViewedTimer] = useState(false);
  const [viewedCinematography, setViewedCinematography] = useState(false);
  const [viewedMessaging, setViewedMessaging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsModalVisible(false), 500);
    enableBodyScroll(document);
  };

  const router = useRouter();

  useEffect(() => {
    window.gtag("config", "G-G92PPZPTMV", {
      page_path: router.route,
    });
  }, [router.route]);

  const GlobalStyles = createGlobalStyle`
  html {
    --color-text: ${isLightMode ? COLORS.light.textMain : COLORS.dark.textMain};
    --color-text-inverted: ${isLightMode ? "#FFFFFF" : COLORS.light.textMain};
    --color-text-light: ${
      isLightMode ? COLORS.light.textLight : COLORS.dark.textLight
    };
    --color-text-lightest: ${
      isLightMode ? COLORS.light.textLightest : COLORS.dark.textLightest
    };
    --color-accent: ${
      isLightMode ? COLORS.light.textAccent : COLORS.dark.textAccent
    };
    --color-accent-light: ${
      isLightMode ? COLORS.light.textAccentLight : COLORS.dark.textAccentLight
    };
    --color-accent-lightest: ${
      isLightMode
        ? COLORS.light.textAccentLightest
        : COLORS.dark.textAccentLightest
    };
    --color-invert: ${isLightMode ? COLORS.light.invert : COLORS.dark.invert};
    --color-background: ${
      isLightMode ? COLORS.light.background : COLORS.dark.background
    };
    --color-background-light: ${
      isLightMode ? COLORS.light.backgroundLight : COLORS.dark.backgroundLight
    };
  }
  html, body {
    background-color: ${
      isLightMode ? COLORS.light.background : COLORS.dark.background
    };
  }
  h1, h2, h3, h4, p {
    color: ${isLightMode ? COLORS.light.textMain : COLORS.dark.textMain};
  }
`;
  return (
    <div className="preload">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G92PPZPTMV"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-G92PPZPTMV');
        `,
          }}
        ></script>
      </Head>
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div style={{ minHeight: "80vh" }}>
        <GlobalStyles />
        <Component
          {...pageProps}
          setHomeButtonScaled={setHomeButtonScaled}
          homeButtonScaled={homeButtonScaled}
          isLightMode={isLightMode}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          viewedAbout={viewedAbout}
          viewedContact={viewedContact}
          viewedHome={viewedHome}
          viewedTravel={viewedTravel}
          viewedTimer={viewedTimer}
          viewedCinematography={viewedCinematography}
          viewedMessaging={viewedMessaging}
          setViewedAbout={setViewedAbout}
          setViewedCinematography={setViewedCinematography}
          setViewedContact={setViewedContact}
          setViewedHome={setViewedHome}
          setViewedMessaging={setViewedMessaging}
          setViewedTimer={setViewedTimer}
          setViewedTravel={setViewedTravel}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
