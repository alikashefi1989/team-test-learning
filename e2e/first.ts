import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
const name = 'ali rajayi'

    await t
        .setTestSpeed(.2)
        .typeText('#developer-name', name)
        // .wait(1000)
        // .resizeWindow(200, 200)
        // .wait(1000)
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql(`Thank you, ${name}!`);

        // const articleHeader = await Selector('.result-content').find('h1');

    // Obtain the text of the article header
    // let headerText = await articleHeader.innerText;

    // throw new Error('gholi')
    // alert('fileee');
});
