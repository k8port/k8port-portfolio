function buildPortfolioMailtoUrl({ to, name, email, message }) {
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    return `mailto:${to}?subject=${subject}&body=${body}`;
}

module.exports = {
    buildPortfolioMailtoUrl,
};
