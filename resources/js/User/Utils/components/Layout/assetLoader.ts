export function waitForAllAssets(): Promise<void> {
    return new Promise((resolve) => {
        const images = Array.from(document.images);
        const imagePromises = images.map((img) => {
            if (img.complete) return Promise.resolve();
            return new Promise<void>((resolve) => {
                img.addEventListener('load', () => resolve());
                img.addEventListener('error', () => resolve());
            });
        });

        const fontPromise = document.fonts ? document.fonts.ready.then(() => {}) : Promise.resolve();

        Promise.all([...imagePromises, fontPromise, new Promise((resolve) => setTimeout(resolve, 300))]).then(() => resolve());
    });
}