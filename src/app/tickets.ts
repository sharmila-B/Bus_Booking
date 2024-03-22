export class Ticket {
  ticketId!: number;
  passName: string | undefined;
  passCount:number| undefined;
  busNumber: number | undefined;
  ticketPrice: number | undefined;
  source: string | undefined; 
  destination:string|undefined;
  journeyDate: string | undefined;
  journeyTime: string | undefined;
  passenger: Passenger | undefined;
  admin: Admin | undefined;
}
export class Passenger {
  passId: number | undefined;
  passName: string | undefined;
  source: string | undefined;
  destination: string | undefined;
passCount: any;
}

export class Admin {
  adminId: number | undefined;

}