const CronJob = require('cron').CronJob;

const configDetails = {
    1: 5,
    2: 7,
    3: 10,
    4: 1
}
let subsDetails = {
    currentRecurringKey: null,
    nextRecurring: null,
    recurringStopOn: null,
    failedTime: Date.now(),
    retryEndsOn: Date.now() + 50000000
}

const addTime = (normalTime, addTime) => {

}

let time = 1
const timePeriod = () => {
    console.log( time++, 'You will see this message every second', Date.now());
    const currentRecurringKey = subsDetails.currentRecurringKey;
    const nextRecurring = subsDetails.nextRecurring;
    const recurringStopOn = subsDetails.recurringStopOn;
    const failedTime = subsDetails.failedTime;


}

const job = new CronJob('* * * * * *', () => {
  timePeriod();
}, null, true, 'America/Los_Angeles');

job.start();
