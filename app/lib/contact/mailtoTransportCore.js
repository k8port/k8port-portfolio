function buildPortfolioMailtoUrl({ to, name, email, message }) {
    const senderName = name?.trim() || 'anonymous sender';
    const subject = encodeURIComponent(`New inquiry from ${senderName}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    return `mailto:${to}?subject=${subject}&body=${body}`;
}

module.exports = {
    buildPortfolioMailtoUrl,
};
