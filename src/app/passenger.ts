export class Passenger {

    passId?: number;
    passName!: string;
    phoneNumber!: string;
    emailId!: string;
    password!: string
    bus: BusDetails[] | undefined;
}
export class BusDetails {
    busNumber: number | undefined;
    source: any;
    destination: any;
    ticketPrice: any;

}
