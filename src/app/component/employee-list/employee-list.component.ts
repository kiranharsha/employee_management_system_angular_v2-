import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { employee } from '../employeemodel';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  data: undefined | employee[]

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    this.api.getEmployee().subscribe(res => {
      console.log("getResponse",res)
      this.data = res;
    })
  }

  delete(id:any){
    // console.log("dlt Id", id)
    // let dltId:any =  this.data?.filter((data) => console.log(data.id !==id))
    // console.log(dltId)
    // // this.data = dltId
    this.api.deleteEmployee(id).subscribe(res =>{
      alert(`employee delete successfully, ${res}` );
      this.getEmployee()


    //   deleteEmployee(id: number): Observable<any> {
    //     return this._http.delete(`http://localhost:3000/employees/${id}`);
    //   }
    // }
     })
  }
}

