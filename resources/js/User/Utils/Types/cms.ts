export type CMSContent = {
    [sectionKey: string]: {
        [contentKey: string]: string | string[] | Record<string, any>;
    };
};
