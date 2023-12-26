import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './component/employeemodel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //post method

  addEmployee(data: employee) {
    return this.http.post<employee>('http://localhost:3000/posts', data);
  }

  // get method

  getEmployee (){
    return this.http.get<employee[]>('http://localhost:3000/posts')
  }

  //delete method

  deleteEmployee (id: number){
    // return this.http.delete<employee>(`http://localhost:3000, ${id}`)
    return this.http.delete<employee>(`http://localhost:3000/posts/${id}`);
  }

  //Fetch data Edit
  
  fetchData (id: number){
    console.log(id)
    return this.http.get<employee>(`http://localhost:3000/posts/${id}`);
  }

  updateEmp (data:employee, id:number){
    return this.http.put<employee>(`http://localhost:3000/posts/${id}`, data)
  }


}
