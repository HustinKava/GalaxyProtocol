import React from 'react';

const Newsletter = () => {
  return (
    <div className="home-sub-container news">
      <span className="news__header">MONTHLY</span>
      <br />
      <p className="news__text">NEWSLETTER</p>
      <div>
        <form className="news-form">
          <input
            type="email"
            className="news-form__email"
            name="email"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your email"
          />
          <input
            type="submit"
            className="news-form__subscribe"
            value="Subscribe"
          />
        </form>
      </div>
      <span className="news-span news-span--light">
        By clicking Subscribe you agree with our&nbsp;
      </span>
      <span className="news-span news-span--bold">Terms of Use&nbsp;</span>
      <span className="news-span news-span--light">&&nbsp;</span>
      <span className="news-span news-span--bold">Privacy Policy</span>
    </div>
  );
};

export default Newsletter;
