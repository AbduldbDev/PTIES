import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState } from 'react';

const Calendar = () => {
    const [events, setEvents] = useState([
        { title: 'Birthday Ni Abdul', start: '2025-09-20T10:00:00', end: '2025-09-20T12:00:00', color: '#6366f1', textColor: '#fff' },
        { title: 'Birthday Ni John justine', start: '2025-09-22', end: '2025-09-25', color: '#10b981', textColor: '#fff' }, // 2-day event
        { title: 'Birthday Ni Ethan', start: '2025-09-22', end: '2025-09-25', textColor: '#fff' }, // single-day deadline
        { title: 'Birthday Ni Marc Legaspi', start: '2025-09-22', end: '2025-09-25', color: '#8b5cf6', textColor: '#fff' },
    ]);

    return (
        <div className="max-w-8xl mx-auto w-full rounded-xl bg-white p-6 shadow-lg">
            <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Calendar Schedule</h1>

            <div className="w-full overflow-hidden rounded-lg bg-white">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    themeSystem="standard"
                    height="auto"
                    editable={true}
                    selectable={true}
                    dayMaxEvents={true}
                    eventDisplay="block"
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    }}
                    windowResizeDelay={100}
                    dayHeaderClassNames="bg-indigo-50 font-semibold text-gray-700 py-2"
                    dayCellClassNames="hover:bg-gray-50 transition-colors"
                    eventClassNames="rounded-lg shadow-sm border-0 cursor-pointer"
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                    }}
                />
            </div>

            {/* Legend */}
            {/* <div className="mt-0 flex flex-wrap justify-center gap-4">
                <div className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-indigo-500"></div>
                    <span className="text-sm text-gray-600">Meetings</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600">Conferences</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm text-gray-600">Deadlines</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-violet-500"></div>
                    <span className="text-sm text-gray-600">Demos</span>
                </div>
            </div> */}
        </div>
    );
};

export default Calendar;
