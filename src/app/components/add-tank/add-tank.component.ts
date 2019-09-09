import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Tank } from '../../models/tank.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CarteleraService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtank',
  templateUrl: './add-tank.component.html',
  styleUrls: ['./add-tank.component.scss']
})
export class AddTankComponent implements OnInit {

  public newTankForm: FormGroup;
  public error: { code: number, message: string } = null;
  public submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private corService: CarteleraService,
    private tank: Tank) { }

  ngOnInit() {
    this.newTankForm = this.formBuilder.group({
      name: ['', Validators.required],
      capacity: ['', ],
      content: ['', ],
    });
  }

  public submitCartelera(): void {
    this.submitted = true;
    this.error = null;
    if (this.newTankForm.valid) {
      this.corService.crear(new Tank(this.newTankForm.value)).subscribe(
        (res: HttpResponse<any>) => {
          this.router.navigate(['/home']);
        },
        (error: HttpErrorResponse) => {
          window.alert('El nombre del tanque ya está utilizado');
        }
      );
    }
  }

}
