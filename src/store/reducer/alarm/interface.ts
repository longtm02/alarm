interface AlarmReducerInterface {
  onetime: boolean;
  hours: number;
  seconds: number;
  statusOpen: boolean;
  uuid: string;
}
interface ListAlarmReducerInterface {
  listAlarm: AlarmReducerInterface[];
}

const initDataListAlarm: ListAlarmReducerInterface = {
  listAlarm: [
    {
      onetime: true,
      hours: 12,
      seconds: 12,
      statusOpen: true,
      uuid: "1234567",
    },
    {
      onetime: false,
      hours: 1,
      seconds: 14,
      statusOpen: true,
      uuid: "12345627",
    },
    {
      onetime: true,
      hours: 12,
      seconds: 12,
      statusOpen: false,
      uuid: "1234563437",
    },
    {
      onetime: false,
      hours: 9,
      seconds: 11,
      statusOpen: true,
      uuid: "123451234567",
    },
    {
      onetime: true,
      hours: 5,
      seconds: 12,
      statusOpen: false,
      uuid: "12345609876",
    },
    {
      onetime: true,
      hours: 12,
      seconds: 12,
      statusOpen: true,
      uuid: "12345609812376",
    },
    {
      onetime: true,
      hours: 12,
      seconds: 12,
      statusOpen: true,
      uuid: "1234560129812376",
    },
    {
      onetime: true,
      hours: 12,
      seconds: 12,
      statusOpen: true,
      uuid: "12345812376",
    },
    {
      onetime: true,
      hours: 12,
      seconds: 12,
      statusOpen: true,
      uuid: "123454342812376",
    },
  ],
};

export { ListAlarmReducerInterface, initDataListAlarm, AlarmReducerInterface };
