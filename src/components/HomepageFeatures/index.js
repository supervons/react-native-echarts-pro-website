import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Easy to Use</Translate>,
    Svg: require('@site/static/img/home/easy.svg').default,
    description: (
      <>
          <Translate>If you used echarts, than you can learn it within 5 minutes. If not, you can fully learn it within 30 minutes.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Map Supported</Translate>,
    Svg: require('@site/static/img/home/map.svg').default,
    description: (
      <>
          <Translate>Support map</Translate>
      </>
    ),
  },
  {
    title: <Translate>Sustainable</Translate>,
    Svg: require('@site/static/img/home/update.svg').default,
    description: (
      <>
          <Translate>Continuous maintenance, continuous update, continuous upgrade.</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
