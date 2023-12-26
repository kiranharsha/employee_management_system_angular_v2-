import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { employee } from '../employeemodel';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employeeform:FormGroup | any;

  constructor(private formbuilder:FormBuilder, private router:Router, private api:ApiService){}

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      // firstname:'',
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      phonenumber:['', Validators.required],
      city:['', Validators.required],

    })
  }

  submitEmployee (data:employee){
    this.api.addEmployee(data).subscribe((res) =>{
      console.log(res)
      this.employeeform.reset();
    this.router.navigate(["/employeelist"])
    })
    
  }

}
