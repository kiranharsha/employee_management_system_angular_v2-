import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { employee } from '../employeemodel';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  public employeeId:any;
  public empData:employee = {} as employee;

  constructor(private api:ApiService, private activatedroute: ActivatedRoute, private route:Router){}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param: Params) => {
      this.employeeId = parseInt(param['id'])
    })
    this.api.fetchData(this.employeeId).subscribe((data:employee) => {
     console.log(data)
      this.empData = data;
      
    })
  }

  update(){
    this.api.updateEmp(this.empData, this.employeeId).subscribe((res:employee) => {
      alert("Data updated successfully...")
      this.route.navigate(["/employeelist"])
    })
  }

}
