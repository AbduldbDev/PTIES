import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import { useState } from 'react';

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
interface CalendarProps {
    events: EventProps[];
}

const Calendar = ({ events }: CalendarProps) => {
    const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

    const handleEventClick = (info: any) => {
        setSelectedEvent({
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            location: info.event.extendedProps.location,
            description: info.event.extendedProps.description,
        });
    };

    const closeModal = () => setSelectedEvent(null);
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
        <section className="py-16">
            <div className="container mx-auto px-4">
                <PageTitle
                    title="Upcoming Events"
                    subtitle="Pakil Events Calendar"
                    desc="Discover upcoming festivals, cultural activities, and community gatherings in Pakil"
                />

                <div className="max-w-8xl mx-auto w-full rounded-xl bg-white p-6 shadow-lg">
                    <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Calendar Schedule</h1>

                    <div className="w-full overflow-hidden rounded-lg bg-white">
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
                            eventClick={handleEventClick}
                        />
                    </div>

                    {selectedEvent && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                            <div className="w-full max-w-md scale-100 transform rounded-lg border border-gray-100 bg-white p-6 shadow-xl transition-all duration-200 hover:scale-[1.02]">
                                {/* Header */}
                                <div className="mb-4 flex items-start justify-between">
                                    <h2 className="pr-4 text-xl font-bold text-gray-900">{selectedEvent.title}</h2>
                                    <button onClick={closeModal} className="rounded-full p-2 transition-colors duration-150 hover:bg-gray-100">
                                        <i className="fas fa-times text-gray-500 hover:text-gray-700"></i>
                                    </button>
                                </div>

                                {/* Date & Time */}
                                <div className="mb-4 flex items-center rounded-lg border border-blue-100 bg-blue-50 p-3">
                                    <i className="fas fa-calendar-day mr-3 text-lg text-primary"></i>
                                    <div className="text-sm">
                                        <span className="font-semibold text-primary">
                                            {new Date(selectedEvent.start).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <p className="rounded-lg border border-gray-200 bg-gray-50 p-2 leading-relaxed text-gray-700">
                                        {selectedEvent.description}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end space-x-3">
                                    <button
                                        onClick={closeModal}
                                        className="transform rounded-full bg-primary px-10 py-2 font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Calendar;
