import React from 'react';
import BuybackInfo from '../Assets/buyback-infographic.png';
import { Container } from '@material-ui/core';

const ExternalLink = ({ href, text }) => {
  return (
    <a
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="migration-docs__link"
    >
      {text}
    </a>
  );
};

const MigrationDocs = () => {
  return (
    <div className="mainContainer migration-docs-container">
      <div className="migration-docs">
        <h1 className="migration-docs__header">Migration Documentation</h1>
        <p className="migration-docs__text">
          Hello, one and all! As our company evolves, our products need to
          evolve as well, for this reason and many others, it has become
          advantageous for us to upgrade to a stronger and more versatile token,
          Galaxia. This decision did not come easily, it involved many minds
          analyzing multiple problems over a handful of weeks. Ultimately, we
          believe this to be the best solution for everyone.
        </p>
        <p className="migration-docs__text">
          SafeGalaxy will be exchanged to Galaxia dollar for dollar plus an
          additional 15%.
        </p>
        <p className="migration-docs__text">
          Exchange is executed MANUALLY following the details below.
        </p>
        <p className="migration-docs__text">
          For more details on why we decided to upgrade our token, please check
          out{' '}
          <ExternalLink
            href="https://safegalaxy.medium.com/galaxyprotocol-roadmap-e8a49098dd7a"
            text="This"
          />{' '}
          medium article.
        </p>
        <h2 className="migration-docs__subheader">Migration dates:</h2>
        <div className="migration-docs__text">July 24th - Buyback starts</div>
        <div className="migration-docs__text">July 27th - Buyback ends</div>
        <div className="migration-docs__text">
          July 27th/29th - Team makes final preparations for launch
        </div>
        <div className="migration-docs__text">July 30th - Swap Launch</div>

        <h2 className="migration-docs__subheader">
          Steps to participate in migration:
        </h2>
        <div className="migration-docs__text">
          1. Navigate to{' '}
          <ExternalLink href="https://safegalaxy.net/" text="SafeGalaxy.net" />{' '}
          OR{' '}
          <ExternalLink
            href="http://galaxyprotocol.io/"
            text="GalaxyProtocol.io"
          />
        </div>
        <div className="migration-docs__text">
          2. Navigate to Buyback page, there will be a new link at the top of
          the home page
        </div>
        <div className="migration-docs__text">3. Connect Wallet</div>
        <div className="migration-docs__text">4. Click "EXCHANGE" button</div>
        <div className="migration-docs__text">
          5. Receive Galaxia and smile :)
        </div>
      </div>
      <Container maxwidth='xl'>

      <img
        src={BuybackInfo}
        alt="Buyback infographic"
        className="migration-docs-infographic"
      />

      </Container>
    </div>
  );
};

export default MigrationDocs;
