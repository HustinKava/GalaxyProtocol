import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import SmartContractHero from '../../Assets/articles/smart-contract.png';

const SmartContractEthVM = () => {
  let content = {
    heroImage: SmartContractHero,
    title: 'Smart Contracts and the Ethereum Virtual Machine',
    body: [
      {
        subtitle: 'How does the internet work?',
        paraContent: [
          `The internet is more or less designed like a massive call centre where people connect to each other via a central communication hub and are transferred elsewhere. Developers call this movement of data from a server to a user 'calls.' When one types in a URL and have an internet connection, what they tell their computer to do is to call this address and if it is successful, it sends data back in various forms. The theory is identical to calling someone from your cell phone.`,
        ],
      },
      {
        subtitle: 'What is a Virtual Machine or VM?',
        paraContent: [
          `A Virtual Machine is simply software that functions like a physical computer but is only software. Virtual Machines can have all the same characteristics of a physical computer.`,
        ],
      },
      {
        subtitle: 'What is a Smart Contract?',
        paraContent: [
          `A Smart Contract is an Object Oriented Computer program. Smart contracts are written in a programming language called Solidity. Solidity is used to code smart contracts on blockchains like the Ethereum Mainnet, Binance Smart Chain and Cosmos. Smart contracts can be coded in other languages such as C++, GoLang, Rust or Flow for other blockchains.`,
        ],
      },
      {
        subtitle: 'What is Object Oriented Computer Programming?',
        paraContent: [
          `Object oriented computer programming is a type of programming that is based on "objects." An object can be a data structure and or pieces of code that perform various tasks.`,

          `A smart contract is a computer program that can store data and or perform a task. Smart Contracts interact with the Ethereum Virtual Machine in order to execute a block of code. In simple terms, the Ethereum Network is like a giant cloud service, of which anyone can offer their physical computer's hardware to run software programs. Thus, any computer running a validator node, i.e. an Ethereum server, is actually allowing their computer to execute the program. This makes the Ethereum Network a decentralized super computer as anyone can offer their computer's hardware to perform the task that the code is designed to perform.`,

          `Let's look at this as an example. When one wants to swap a token on UniSwap, say ETH for USDT, the following sequence of events occur behind the scenes. One clicks the swapping button. This sends a message to the UniSwap Smart Contract to perform a task, which is to exchange your ETH for USDT. A miner of Ethereum offers their computational power to run the block of code, which in this case is to swap ETH for USDT. Once the miner's computer completes the task, the block of code is confirmed through the Proof of Work algorithm. The transaction is complete and one sees USDT in their wallet where they previously had ETH.`,

          `This is how the EVM and decentralization works. As opposed to you interacting with a specified, known computer to perform a block of code, the code block can be performed by anyone's computer.`,
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

export default getProgress(SmartContractEthVM);
