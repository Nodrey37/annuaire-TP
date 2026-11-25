import { Service, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { PeopleResponse, Person } from './person-model/person-model';

@Service()
export class PersonApiService {
    private readonly http = inject(HttpClient);
    private readonly url = 'https://randomuser.me/api/?seed=cda2&results=30&nat=fr';
    readonly count = computed(() => this.people().length);


    people = signal<Person[]>([]);
    loading = signal(true);
    error = signal(false);


    async getAll(): Promise<void> {
        try {
            const response = await firstValueFrom(this.http.get<PeopleResponse>(`${this.url}`));
            this.people.set(response.results);
            console.log(this.people());
        } catch { 
            this.error.set(true);
        } finally {
            this.loading.set(false)
        }
    }
    constructor() {
        this.getAll()
    };
}
