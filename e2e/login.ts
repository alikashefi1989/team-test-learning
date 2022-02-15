import { Selector } from 'testcafe';

fixture`login page`
    .page`http://localhost:3005`;

test('submit login', async t => {
    const username = 'akbar';
    const password = '1400';

    await t
        .setTestSpeed(.2)
        .typeText('#username', username)
        .typeText('#password', password)
        .click(Selector('button').withAttribute('data-testid', 'submit-button'))
        .expect(Selector('pre').withAttribute('data-testid', 'data-response').exists).ok();
});
