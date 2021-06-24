import React from 'react';
import { Box } from '@material-ui/core';

const FAQ = () => {
  return (
    <div>
      <Box className="mainContainer faq">
        <h1 className="faq__h1">FAQ</h1>
        <h2 className="faq__header">Most frequently asked questions</h2>
        <div>
          <p className="faq__intro">
            If you can't find the answer you were looking for we encourage you
            to join our <strong>Telegram</strong> or
            <strong>Discord channel</strong> to get the support you seek
          </p>
        </div>

        {/* <div> */}
        <h3 className="faq__h3">What is Galaxy Protocol?</h3>
        <p className="faq__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        {/* </div> */}

        <div>
          <h3 className="faq__h3">What products do we offer?</h3>
          <p className="faq__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div >
          <div className="faq__indentedPara">
            <h4 className="faq__h4">Galaxyswap</h4>
            <p className="faq__body">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris
            </p>
          </div>

          <div className="faq__indentedPara">
            <h4 className="faq__h4">Galaxystation</h4>
            <p className="faq__body">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris
            </p>
          </div>

          <div className="faq__indentedPara">
            <h4 className="faq__h4">Nebula Launchpad</h4>
            <p className="faq__body">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>

        <div>
          <h3 className="faq__h3">
            I get an error everytime I try to trade on Galaxyswap, why is this?
          </h3>
          <p className="faq__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div className="faq__h3">
          <h3>How are prices determined?</h3>
          <p className="faq__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div className="faq__h3">
          <h3>How come prices are different on other exchanges?</h3>
          <p className="faq__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </Box>
    </div>
  );
};

export default FAQ;
