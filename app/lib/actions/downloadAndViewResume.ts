'use client';

const viewResume = () => {
    window.open('https://drive.proton.me/urls/35YHM5DT3W#q8cG6y5bmbYP', '_blank');
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
