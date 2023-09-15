import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class PerformWorkoutService {
    constructor(private http: HttpClient) {}

    public currentWorkoutId: number = 2;

    getWorkoutId(): number {
        return this.currentWorkoutId;
    }

    setWorkoutId(workoutId: number): void {
        this.currentWorkoutId = workoutId;
    }
}