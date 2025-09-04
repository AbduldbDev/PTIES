import React from 'react';

type Highlight = {
    icon: string;
    text: string;
};

type Personality = {
    category: string;
    name: string;
    description: string;
    highlights_title: string;
    highlights_content: string;
    born?: string;
    died?: string;
    image: string;
    legacy: string;
};

interface Props {
    personality: Personality;
    index: number;
}

const PersonalityCard: React.FC<Props> = ({ personality, index }) => {
    const [catIcon, catLabel] = personality.category.split('|');
    const highlights: Highlight[] = JSON.parse(personality.highlights_content);
    const [lIcon, lTitle, lText] = personality.legacy.split('|');
    const isEvenIndex = index % 2 === 0;
    const paragraphs = (personality.description || '').split('\n').filter((p) => p.trim() !== '');

    return (
        <div className="mb-10 rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:p-6">
            <div className={`flex flex-col gap-6 md:gap-8 lg:flex-row ${!isEvenIndex ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-2/5">
                    <div className="group relative">
                        <div
                            className={`absolute -inset-1 rounded-xl md:-inset-2 ${isEvenIndex ? 'bg-primary/20' : 'bg-secondary/20'} blur-md transition duration-300 group-hover:blur-lg`}
                        ></div>
                        <img
                            src={`/storage/${personality.image}`}
                            alt={personality.name}
                            className="relative aspect-[3/4] h-auto w-full rounded-xl border-4 border-white object-cover shadow-xl"
                        />

                        <div
                            className={`absolute ${isEvenIndex ? '-right-3 -bottom-3 md:-right-4 md:-bottom-4' : '-bottom-3 -left-3 md:-bottom-4 md:-left-4'} rounded-xl border border-gray-100 bg-white p-2 shadow-lg md:p-3`}
                        >
                            <div className={`rounded-lg ${isEvenIndex ? 'bg-primary/10' : 'bg-secondary/10'} p-1.5 md:p-2`}>
                                <i className={`fas ${catIcon} text-lg md:text-xl ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}></i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-center md:mt-6">
                        <div className="inline-flex items-center space-x-3 text-sm text-gray-600 md:space-x-4">
                            {personality.born && (
                                <div>
                                    <div className={`font-semibold ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}>Born</div>
                                    <div>{personality.born}</div>
                                </div>
                            )}
                            {personality.born && personality.died && <div className="h-4 w-px bg-gray-300 md:h-6"></div>}
                            {personality.died && (
                                <div>
                                    <div className={`font-semibold ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}>Died</div>
                                    <div>{personality.died}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="lg:w-3/5">
                    <div className="mb-3 flex items-center md:mb-4">
                        <div className={`mr-2 h-1 w-6 rounded-full bg-secondary md:mr-3 md:w-8`}></div>
                        <h2 className={`text-xs font-semibold tracking-wider text-primary uppercase md:text-sm`}>{catLabel}</h2>
                    </div>

                    <h3 className="text-dark mb-2 text-xl font-bold md:text-3xl">{personality.name}</h3>
                    <div className="prose prose-base md:prose-lg mb-4 text-gray-700 md:mb-6">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-3 text-gray-800 md:mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div
                        className={`mb-4 rounded-r-lg border-l-4 md:mb-6 ${isEvenIndex ? 'border-primary bg-primary/5' : 'border-secondary bg-secondary/5'} p-3 md:p-4`}
                    >
                        <h4 className={`mb-1 flex items-center font-bold md:mb-2 ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}>
                            <i className="fas fa-trophy mr-2 text-sm md:text-base"></i> {personality.highlights_title}
                        </h4>
                        <ul className="space-y-1.5 text-gray-700 md:space-y-2">
                            {highlights.map((h, idx) => {
                                const iconClass = h.icon ? h.icon : 'fa-circle';

                                return (
                                    <li key={idx} className="flex items-start">
                                        <i
                                            className={`fas ${iconClass} mt-0.5 mr-2 text-sm md:mt-1 md:text-base ${isEvenIndex ? 'text-primary' : 'text-secondary'}`}
                                        ></i>
                                        <span className="text-sm md:text-base">{h.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-start">
                        <div className={`mr-3 rounded-lg md:mr-4 ${isEvenIndex ? 'bg-secondary/10' : 'bg-primary/10'} p-2 md:p-3`}>
                            <i className={`fas ${lIcon} text-base md:text-lg ${isEvenIndex ? 'text-secondary' : 'text-primary'}`}></i>
                        </div>
                        <div>
                            <h4 className="text-dark mb-1 text-base font-bold md:text-lg">{lTitle}</h4>
                            <p className="text-sm text-gray-600 md:text-base">{lText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalityCard;
