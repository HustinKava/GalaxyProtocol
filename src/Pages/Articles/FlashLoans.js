import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
import FlashLoansHero from '../../Assets/articles/flash-loans.png';

const FlashLoans = () => {
  let content = {
    heroImage: FlashLoansHero,
    title: 'Flash Loans',
    body: [
      {
        subtitle: 'What is a Flash Loan?',
        paraContent: [
          'A flash loan is a type of uncollateralized lending which has recently gained popularity in the DeFi space. The loan is made with no background check, no credit check, and most importantly, no collateral backing it. There is, however, a catch. A flash loan must be paid back in the same transaction in which it was issued. This means the money is lent and returned in a matter of seconds. If the loan is not repaid within the same block, it is automatically voided and effectively never existed.',
        ],
      },
      {
        subtitle: 'How do Flash Loans Work?',
        paraContent: [
          'Flash loans are made possible by blockchain technology. An individual can take out a flash loan by submitting the transaction to the blockchain network. Once the transaction is submitted, the individual receives the funds and is able to use them for whatever purpose they see fit. The real implication of flash loans is what happens next. If the funds are not repaid in the same block as they were lent, the code will automatically revert the funds to the lender.',

          `Thanks to the innovation of blockchain technology, a flash loan is essentially a risk free venture for the lender. The recipient either borrows and returns the funds instantaneously, or the network rejects the loan and the funds are 'returned,' although, in reality, the lender always had the funds.`,

          'The ability to return the funds in a matter of seconds is made possible through smart contracts. The recipient borrows the funds and almost instantaneously funnels them into a smart contract, with the goal being to flip an immediate profit. After booking the profit, the flash loan is quickly repaid and the recipient pockets the difference',
        ],
      },
      {
        subtitle: '# Why Would You Need a Flash Loan?',
        paraContent: [
          'What possible use could a recipient have for a loan that lasts for seconds? While flash loans are still in their infancy, the main use case to date for a flash loan is to engage in arbitrage opportunities.',

          'Arbitrage is the process of taking advantage of small price fluctuations in the same currency across different exchanges in order to turn a profit. Think buy low on Exchange A and sell high on Exchange B. In theory, this is a fantastic way to make money. In reality, the margin of price differences across different exchanges may be a few pennies, which means profits are razor thin.',

          'Instead of creating an arbitrage opportunity with $100, imagine borrowing $1,000,000 for arbitrage, pocketing the difference and immediately returning the $1,000,000? Insert flash loans. In fact, in July 2020, that is exactly what one individual did, creating a profit of $16,000 in just seconds using a flash loan.',
        ],
      },
      {
        subtitle: 'Benefits of Flash Loans',
        paraContent: [
          'If arbitrage is possible using a loan, why not use a traditional loan instead of a flash loan? Mainly due to the lending protocol for traditional loans. If you want to borrow $1,000,000 from a bank, you can expect to undergo a serious background and credit check. ',

          'Furthermore, the bank will likely require collateral for the loan. Collateral is something of value, usually property, put up to secure a loan. For a mortgage, the collateral is your home, and for a car loan, your vehicle. If you do not repay, the bank simply takes the property.',

          `For flash loans the recipient does not need to put up any collateral, regardless of the size of the loan. Since the loan is essentially 'cancelled' if the funds are not paid back in the same block, there is no need for a lender to require collateral. `,

          'In addition, speed is the other main benefit of flash loans. That $1,000,000 loan from the bank? Expect a long and drawn out process for approval, before funds are transferred to your account (which will take several days to process). Flash loans occur instantaneously providing a huge benefit to those looking to take advantage of an immediate arbitrage opportunity. ',
        ],
      },
    ],
  };

  return (
    <div>
      <div className="mainContainer">
        <ArticleTemplate
          heroImage={content.heroImage}
          title={content.title}
          body={content.body}
        />
      </div>
    </div>
  );
};

export default getProgress(FlashLoans);
