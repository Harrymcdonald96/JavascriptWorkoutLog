class WorkoutTracker {
    constructor() {
        this.workouts = [];
    }

    addWorkout(type, duration, intensity) {
        this.workouts.push({ type, duration, intensity });
        alert(`Added ${duration} minutes of ${type} at ${intensity} intensity.`);
    }

    summarizeWorkouts() {
        let summary = this.workouts.map(w => `${w.type}: ${w.duration} minutes at ${w.intensity} intensity`).join('\n');
        alert(`Workout Summary:\n${summary}`);
    }

    calculateCalories() {
        const calorieRates = {
            'low': 5,
            'medium': 8,
            'high': 12
        };
        let totalCalories = this.workouts.reduce((total, w) => total + (w.duration * calorieRates[w.intensity.toLowerCase()]), 0);
        alert(`Total Calories Burned: ${totalCalories}`);
    }
}

function runWorkoutApp() {
    const tracker = new WorkoutTracker();
    let keepGoing = true;

    while (keepGoing) {
        let type = prompt("Enter the type of workout (e.g., running, cycling):");
        let duration = parseInt(prompt("Enter the duration in minutes:"));
        let intensity = prompt("Enter the intensity (low, medium, high):");

        tracker.addWorkout(type, duration, intensity);

        keepGoing = confirm("Do you want to add another workout?");
    }

    tracker.summarizeWorkouts();
    tracker.calculateCalories();
}

runWorkoutApp();
