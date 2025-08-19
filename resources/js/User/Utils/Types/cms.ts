export type CmsContent = {
    [sectionKey: string]: {
        [contentKey: string]: string | string[] | Record<string, any>;
    };
};
