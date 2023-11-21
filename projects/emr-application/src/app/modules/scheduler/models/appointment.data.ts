import { CalendarEvent } from "calendar-utils";
import { Appointment } from "./appointment";

export interface AppointmentData {
    event: CalendarEvent,
    appointment: Appointment,
    isChange: boolean;
    isCreated: boolean;
    repeatId: number;
}