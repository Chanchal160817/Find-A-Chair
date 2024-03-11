function spareChairs(meetingRooms, need) {
    let totalChairs = 0;
    let chairsTaken = [];

    for (let i = 0; i < meetingRooms.length; i++) {
        const occupants = meetingRooms[i][0].length;
        const availableChairs = meetingRooms[i][1] - occupants;

        if (availableChairs >= need) {
            chairsTaken.push(need);
            return chairsTaken;
        } else if (availableChairs > 0) {
            chairsTaken.push(availableChairs);
            need -= availableChairs;
        } else {
            chairsTaken.push(0);
        }
    }

    return chairsTaken;
}

const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const need = 4;
console.log(spareChairs(meetingRooms, need));
