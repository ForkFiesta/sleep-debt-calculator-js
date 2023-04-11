
// returns the number of hours slept on a given night

const getSleepHours = day => {

    day = day.toLowerCase();

    switch(day){
        case 'monday':
            return 8;
        case 'tuesday':
            return 4;
        case 'wednesday':
            return 7;
        case 'thursday':
            return 6;
        case 'friday':
            return 5;
        case 'saturday':
            return 4;
        case 'sunday':
            return 6; 
        }
}

// calculates total hours slept during the week returns value

const getActualSleepHours = () =>{

    let totalHours = 0;

    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    for (let i = 0; i<daysOfWeek.length; i++){
        totalHours += Number(getSleepHours(daysOfWeek[i]));
    }

    return totalHours;
}

// returns ideal number of hours to sleep per week based on preference; 8 is default value

const getIdealSleepHours = () => {
    const idealHours = 8 * 7;

    return idealHours;
}


const calculateSleepDebt = () => {

    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log('User got perfect amount of sleep');
    }
    else if(actualSleepHours > idealSleepHours){
        console.log('User got more sleep than needed');
        console.log(`User slept ${actualSleepHours-idealSleepHours} hours more than needed`);
    }
    else{
        console.log('User should get some rest');
        console.log(`User slept ${idealSleepHours-actualSleepHours} hours less than needed`);

    }
}

calculateSleepDebt();


