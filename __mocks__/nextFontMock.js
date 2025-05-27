// __mocks__/nextFontMock.js
module.exports = new Proxy(
    {},
    {
        get: function () {
            return () => ({
                className: 'className',
                variable: 'variable',
                style: { fontFamily: 'fontFamily' },
            });
        },
    }
);
