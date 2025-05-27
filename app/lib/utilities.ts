'use client';

export const viewResume = () => {
    window.open(
        'https://acrobat.adobe.com/id/urn:aaid:sc:us:1344bcfe-f30e-482b-b16c-88c5112e2f01',
        '_blank'
    );
};

export const downloadAndViewResume = () => {
    const shouldDownload = window.confirm(
        'Would you like to download a copy? Click OK to download, Cancel to view in browser.'
    );
    if (shouldDownload) {
        const a = document.createElement('a');
        a.href = '/resume_k8portalatin.pdf';
        a.download = 'resume_k8portalatin.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    viewResume();
};
