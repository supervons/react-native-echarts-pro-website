import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const images = [
    {
      alt: "version",
      imgSrc:
        "https://img.shields.io/npm/v/react-native-echarts-pro.svg?style=flat",
      jumpUrl: "https://www.npmjs.com/package/react-native-echarts-pro",
    },
    {
      alt: "down-month",
      imgSrc:
        "https://img.shields.io/npm/dm/react-native-echarts-pro.svg?style=flat",
      jumpUrl: "https://www.npmjs.com/package/react-native-echarts-pro",
    },
  ];
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1
          className="hero__title"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt={"log"}
            style={{ height: "100px" }}
            src={require("@site/static/img/logo.png").default}
          />
          {siteConfig.title}
        </h1>
        {images.map((res) => {
          return (
            <img
              key={res.alt}
              style={{ marginRight: 20, cursor: "pointer" }}
              alt={res.alt}
              onClick={() => {
                location.href = res.jumpUrl;
              }}
              src={res.imgSrc}
            />
          );
        })}
        <p className="hero__subtitle">
          <Translate>
            A React-Native charts based on Apache ECharts, support various
            charts and map.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate>Get Started️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`RNE-Pro docs`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
