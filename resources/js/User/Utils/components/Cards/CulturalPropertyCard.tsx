import React from 'react';

type Highlight = {
    icon: string;
    text: string;
};

type Property = {
    category: string;
    name: string;
    description: string;
    culture_type: string | string[]; // Can be string or array
    highlights_title: string;
    highlights_content: string;
    image: string;
    legacy: string;
};

interface Props {
    Property: Property;
    index: number;
}

// Cultural type labels mapping
const CULTURE_TYPE_LABELS: Record<string, string> = {
    // By Physical Form
    tangible_cultural_property: 'Tangible Cultural Property',
    intangible_cultural_heritage: 'Intangible Cultural Heritage',

    // By Mobility
    movable_cultural_property: 'Movable Cultural Property',
    immovable_cultural_property: 'Immovable Cultural Property',

    // By Legal / Heritage Status (Philippines – RA 10066)
    important_cultural_property: 'Important Cultural Property (ICP)',
    national_cultural_treasure: 'National Cultural Treasure (NCT)',

    // By Nature or Use
    built_heritage: 'Built Heritage',
    cultural_landscape: 'Cultural Landscape',
    archaeological_heritage: 'Archaeological Heritage',
    ethnographic_heritage: 'Ethnographic Heritage',
    religious_sacred_heritage: 'Religious/Sacred Heritage',
    archival_documentary_heritage: 'Archival & Documentary Heritage',

    // By Cultural Meaning
    associative_cultural_property: 'Associative Cultural Property',
    natural_heritage_cultural_significance: 'Natural Heritage with Cultural Significance',

    // By Recognition Scope
    national_cultural_property: 'National Cultural Property',
    local_cultural_property: 'Local Cultural Property',
};

// Get clean label from type value
const getCultureTypeLabel = (type: string): string => {
    return CULTURE_TYPE_LABELS[type] || type.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
};

const PersonalityCard: React.FC<Props> = ({ Property: Property, index }) => {
    const [catIcon, catLabel] = Property.category.split('|');
    const highlights: Highlight[] = JSON.parse(Property.highlights_content);
    const [lIcon, lTitle, lText] = Property.legacy.split('|');
    const isEvenIndex = index % 2 === 0;
    const paragraphs = (Property.description || '').split('\n').filter((p) => p.trim() !== '');

    // Parse culture_type (could be JSON string, array, or comma-separated string)
    let cultureTypes: string[] = [];
    if (Property.culture_type) {
        if (Array.isArray(Property.culture_type)) {
            cultureTypes = Property.culture_type;
        } else if (typeof Property.culture_type === 'string') {
            try {
                // Try to parse as JSON first
                const parsed = JSON.parse(Property.culture_type);
                cultureTypes = Array.isArray(parsed) ? parsed : [parsed];
            } catch {
                // If not JSON, treat as comma-separated string
                cultureTypes = Property.culture_type
                    .split(',')
                    .map((t) => t.trim())
                    .filter((t) => t);
            }
        }
    }

    return (
        <div
            className="mb-10 rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:p-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 100}
        >
            <div className={`flex flex-col gap-6 md:gap-8 lg:flex-row ${!isEvenIndex ? 'lg:flex-row-reverse' : ''}`}>
                {/* IMAGE SECTION */}
                <div className="lg:w-2/5">
                    <div className="group relative" data-aos={isEvenIndex ? 'fade-right' : 'fade-left'} data-aos-delay={200 + index * 100}>
                        <div
                            className={`absolute -inset-1 rounded-xl md:-inset-2 ${isEvenIndex ? 'bg-primary/20' : 'bg-secondary/20'} blur-md transition duration-300 group-hover:blur-lg`}
                        ></div>
                        <img
                            src={`/storage/${Property.image}`}
                            alt={Property.name}
                            className="relative aspect-[3/4] h-auto w-full rounded-xl border-4 border-white object-cover shadow-xl"
                        />

                        <div
                            className={`absolute ${isEvenIndex ? '-right-3 -bottom-3 md:-right-4 md:-bottom-4' : '-bottom-3 -left-3 md:-bottom-4 md:-left-4'} rounded-xl border border-gray-100 bg-white p-2 shadow-lg md:p-3`}
                            data-aos="zoom-in"
                            data-aos-delay={400 + index * 100}
                        >
                            <div className={`rounded-lg ${isEvenIndex ? 'bg-primary/10' : 'bg-secondary/10'} p-1.5 md:p-2`}>
                                <i className={`fas ${catIcon} text-lg md:text-xl ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}></i>
                            </div>
                        </div>
                    </div>

                    {/* CULTURAL PROPERTIES SECTION - Added below image */}
                    {cultureTypes.length > 0 && (
                        <div className="mt-6" data-aos="fade-up" data-aos-delay={500 + index * 100}>
                            <div className="mb-3 flex items-center">
                                <div className={`mr-2 h-1 w-6 rounded-full ${isEvenIndex ? 'bg-primary' : 'bg-secondary'}`}></div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-700 uppercase">Cultural Properties</h3>
                            </div>

                            <div className="space-y-2">
                                {/* Group by categories for better organization */}
                                {Object.entries({
                                    'Physical Form': cultureTypes.filter((t) => t.includes('tangible') || t.includes('intangible')),
                                    Mobility: cultureTypes.filter((t) => t.includes('movable') || t.includes('immovable')),
                                    'Legal Status': cultureTypes.filter(
                                        (t) => t.includes('important_cultural') || t.includes('national_cultural_treasure'),
                                    ),
                                    'Nature/Use': cultureTypes.filter((t) => t.includes('heritage') && !t.includes('cultural_treasure')),
                                    'Cultural Meaning': cultureTypes.filter((t) => t.includes('associative') || t.includes('natural_heritage')),
                                    'Recognition Scope': cultureTypes.filter(
                                        (t) => t.includes('national_cultural_property') || t.includes('local_cultural_property'),
                                    ),
                                }).map(([category, types], catIndex) => {
                                    if (types.length === 0) return null;

                                    return (
                                        <div key={catIndex} className="rounded-lg border border-gray-200 p-3">
                                            <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {types.map((type, typeIndex) => {
                                                    const label = getCultureTypeLabel(type);
                                                    const iconMap: Record<string, string> = {
                                                        tangible_cultural_property: 'fa-landmark',
                                                        intangible_cultural_heritage: 'fa-music',
                                                        movable_cultural_property: 'fa-arrows-alt',
                                                        immovable_cultural_property: 'fa-anchor',
                                                        important_cultural_property: 'fa-certificate',
                                                        national_cultural_treasure: 'fa-crown',
                                                        built_heritage: 'fa-building',
                                                        cultural_landscape: 'fa-mountain',
                                                        archaeological_heritage: 'fa-shovel',
                                                        ethnographic_heritage: 'fa-users',
                                                        religious_sacred_heritage: 'fa-church',
                                                        archival_documentary_heritage: 'fa-file-alt',
                                                        associative_cultural_property: 'fa-link',
                                                        natural_heritage_cultural_significance: 'fa-tree',
                                                        national_cultural_property: 'fa-flag',
                                                        local_cultural_property: 'fa-map-marker-alt',
                                                    };

                                                    const icon = iconMap[type] || 'fa-tag';

                                                    return (
                                                        <span
                                                            key={typeIndex}
                                                            className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ${
                                                                isEvenIndex ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                                                            }`}
                                                            data-aos="fade-up"
                                                            data-aos-delay={550 + catIndex * 50 + typeIndex * 30}
                                                        >
                                                            <i className={`fas ${icon} mr-1.5`}></i>
                                                            {label}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Simple list version (alternative to grouped view) */}
                            <div className="mt-4 hidden">
                                <div className="flex flex-wrap gap-2">
                                    {cultureTypes.map((type, typeIndex) => (
                                        <span
                                            key={typeIndex}
                                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                                isEvenIndex
                                                    ? 'border border-primary/20 bg-primary/10 text-primary'
                                                    : 'border border-secondary/20 bg-secondary/10 text-secondary'
                                            }`}
                                            data-aos="fade-up"
                                            data-aos-delay={550 + typeIndex * 50}
                                            title={getCultureTypeLabel(type)}
                                        >
                                            <i className={`fas fa-${getCultureTypeIcon(type)} mr-1.5`}></i>
                                            {getCultureTypeLabel(type).split(' – ')[0]}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* CONTENT SECTION */}
                <div className="lg:w-3/5">
                    <div className="mb-3 flex items-center md:mb-4" data-aos="fade-down" data-aos-delay={200 + index * 100}>
                        <div className={`mr-2 h-1 w-6 rounded-full bg-secondary md:mr-3 md:w-8`}></div>
                        <h2 className={`text-xs font-semibold tracking-wider text-primary uppercase md:text-sm`}>{catLabel}</h2>
                    </div>

                    <h3 className="text-dark mb-2 text-xl font-bold md:text-3xl" data-aos="fade-down" data-aos-delay={250 + index * 100}>
                        {Property.name}
                    </h3>

                    <div className="prose prose-base md:prose-lg mb-4 text-gray-700 md:mb-6">
                        {paragraphs.map((paragraph, pIndex) => (
                            <p
                                key={pIndex}
                                className="mb-3 text-gray-800 md:mb-4"
                                data-aos="fade-up"
                                data-aos-delay={300 + pIndex * 50 + index * 100}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div
                        className={`mb-4 rounded-r-lg border-l-4 md:mb-6 ${isEvenIndex ? 'border-primary bg-primary/5' : 'border-secondary bg-secondary/5'} p-3 md:p-4`}
                        data-aos="zoom-in"
                        data-aos-delay={400 + index * 100}
                    >
                        <h4
                            className={`mb-1 flex items-center font-bold md:mb-2 ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}
                            data-aos="fade-down"
                            data-aos-delay={450 + index * 100}
                        >
                            <i className="fas fa-trophy mr-2 text-sm md:text-base"></i> {Property.highlights_title}
                        </h4>
                        <ul className="space-y-1.5 text-gray-700 md:space-y-2">
                            {highlights.map((h, hIndex) => {
                                const iconClass = h.icon ? h.icon : 'fa-circle';

                                return (
                                    <li
                                        key={hIndex}
                                        className="flex items-start"
                                        data-aos="fade-right"
                                        data-aos-delay={500 + hIndex * 50 + index * 100}
                                    >
                                        <i
                                            className={`fas ${iconClass} mt-0.5 mr-2 text-sm md:mt-1 md:text-base ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}
                                        ></i>
                                        <span className="text-sm md:text-base">{h.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-start" data-aos="fade-up" data-aos-delay={600 + index * 100}>
                        <div className={`mr-3 rounded-lg md:mr-4 ${isEvenIndex ? 'bg-secondary/10' : 'bg-primary/10'} p-2 md:p-3`}>
                            <i className={`fas ${lIcon} text-base md:text-lg ${isEvenIndex ? 'text-secondary' : 'text-primary'}`}></i>
                        </div>
                        <div>
                            <h4 className="text-dark mb-1 text-base font-bold md:text-lg" data-aos="fade-down" data-aos-delay={650 + index * 100}>
                                {lTitle}
                            </h4>
                            <p className="text-sm text-gray-600 md:text-base" data-aos="fade-up" data-aos-delay={700 + index * 100}>
                                {lText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const getCultureTypeIcon = (type: string): string => {
    if (type.includes('tangible')) return 'landmark';
    if (type.includes('intangible')) return 'music';
    if (type.includes('movable')) return 'arrows-alt';
    if (type.includes('immovable')) return 'anchor';
    if (type.includes('important_cultural')) return 'certificate';
    if (type.includes('national_cultural_treasure')) return 'crown';
    if (type.includes('built')) return 'building';
    if (type.includes('landscape')) return 'mountain';
    if (type.includes('archaeological')) return 'shovel';
    if (type.includes('ethnographic')) return 'users';
    if (type.includes('religious') || type.includes('sacred')) return 'church';
    if (type.includes('archival') || type.includes('documentary')) return 'file-alt';
    if (type.includes('associative')) return 'link';
    if (type.includes('natural_heritage')) return 'tree';
    if (type.includes('national_cultural_property')) return 'flag';
    if (type.includes('local_cultural_property')) return 'map-marker-alt';
    return 'tag';
};

export default PersonalityCard;
