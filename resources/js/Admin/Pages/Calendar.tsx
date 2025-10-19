import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Head, usePage } from '@inertiajs/react';
import ComponentCard from '../Utils/components/common/ComponentCard';

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };

    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    events: EventProps[];
};

type EventProps = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    schedules: Schedule[];
    admission: string;
    attire: string;
    contacts: string;
    long: string;
    lat: string;
    image: File[];
};

type Schedule = {
    title: string;
    date_time: string;
    desc: string;
};

export default function Home() {
    const { flash, errors, events } = usePage<PageProps>().props;

    const mappedEvents = events.map((event) => ({
        id: event.id.toString(),
        title: event.title,
        start: event.start_date,
        end: event.end_date,
        color: 'var(--primary)',
        textColor: '#fff',
        extendedProps: {
            description: event.description,
            location: `${event.lat},${event.long}`,
            event_id: `${event.id}`,
        },
    }));
    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                    <div className="col-span-4">
                        <ComponentCard title="Events Calendar">
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                events={mappedEvents}
                                headerToolbar={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                                }}
                                height="auto"
                                editable={false}
                                selectable={true}
                                dayMaxEvents={true}
                                eventDisplay="block"
                                eventTimeFormat={{
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true,
                                }}
                                windowResizeDelay={100}
                            />
                        </ComponentCard>
                    </div>
                </div>
            </AppWrapper>
        </>
    );
}
