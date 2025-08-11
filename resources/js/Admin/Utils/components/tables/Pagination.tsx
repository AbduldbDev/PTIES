import { Link } from '@inertiajs/react';
import React from 'react';

type Link = {
    url: string | null;
    label: string;
    active: boolean;
};

type PaginationProps = {
    links: Link[];
};

const Pagination: React.FC<PaginationProps> = ({ links }) => {
    return (
        <nav aria-label="Pagination navigation" className="my-4">
            <ul className="inline-flex space-x-1">
                {links.map((link, index) => {
                    if (!link.url) {
                        return (
                            <li
                                key={index}
                                className={`rounded px-3 py-1 ${link.active ? 'bg-blue-600 text-white' : 'text-gray-400'}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        );
                    }

                    return (
                        <li key={index}>
                            <Link
                                href={link.url}
                                className={`block rounded px-3 py-1 hover:bg-blue-100 ${link.active ? 'bg-blue-600 text-white' : 'text-blue-600'}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
