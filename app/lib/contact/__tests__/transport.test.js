/* eslint-disable @typescript-eslint/no-require-imports */
const { buildPortfolioMailtoUrl } = require('../mailtoTransportCore');

describe('buildPortfolioMailtoUrl', () => {
    it('builds a mailto URL with encoded subject and body', () => {
        const redirectUrl = buildPortfolioMailtoUrl({
            to: 'k8@k8port.io',
            name: 'Jane Doe',
            email: 'jane@example.com',
            message: 'Hello world',
        });

        expect(redirectUrl).toContain('mailto:k8@k8port.io?');
        expect(redirectUrl).toContain('subject=Portfolio%20Contact%20Form');
        expect(redirectUrl).toContain(
            'body=From%3A%20Jane%20Doe%20(jane%40example.com)%0A%0AHello%20world'
        );
    });
});
