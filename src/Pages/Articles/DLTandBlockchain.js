import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import DLTandBlockchainHero from '../../Assets/articles/dlt-and-blockchain.png';

const DLTandBlockchain = () => {
  let content = {
    heroImage: DLTandBlockchainHero,
    title: 'DLT and Blockchain',
    body: [
      {
        subtitle: 'What is Distributed Ledger Technology?',
        paraContent: [
          `Distributed Ledger Technology (DLT) simply put is a database that anyone can see, so long as they are permitted to see the database.`,
        ],
      },
      {
        subtitle: 'What is a blockchain?',
        paraContent: [
          `A blockchain uses DLT to move data across the database. Each movement of data is considered a transaction. Transactions are grouped together into what is called a block. Blocks of transactions are chained together via a transaction hash in order to create the blockchain.`,

          `Satoshi Nakamoto, whoever they are, came up with a solution to use DLT in order to prevent double spend. Double spend occurs if code is copied and a 'fake' version of a token is put into circulation, which can be spent twice. Satoshi Nakamoto solved double spend via linking every single transaction to the previous transaction through something called a transaction hash. A transaction hash is basically a string of characters that is associated with a given transaction. Each hash on the blockchain is derived from the previous hash. This means that every single transaction is linked, or chained to the previous transaction. This in turn means that everything is always accounted for and double spend can’t happen. The byproduct of the solution was the birth of Bitcoin.`,

          `How did Satoshi Nakamoto make this safe? Through something called a Proof of Work Algorithm. In order to confirm the block of transactions, the blockchain requires a complex mathematical equation to be solved. The person, or computer, who solves the equation first gets to confirm that a group of transactions took place and is rewarded with Bitcoin. What makes this safe is that any person or computer can solve the equation. In order to change the transaction history, more than half of all people attempting to confirm blocks have to agree to rewrite the transaction history. Considering that most of the miners don't know each other, rewriting transactional history is highly unlikely and therefore safe.`,
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

export default getProgress(DLTandBlockchain);
