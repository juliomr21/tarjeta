import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  success = true;
  title = 'card';
  nombre = 'Jane Appleseed';
  numero = '0000 0000 0000 0000';
  mm = '00';
  yy = '00';
  cvc = '000';
  wrong_input = { "font-size": "12px", "color": "red" };
  style_input = { "font-size": "12px", "color": "transparent" };
  style_wrong_campo = { "border-color": "red" };
  style_ok_campo = { "border-color": "cadetblue", };
  style_nombre = this.style_ok_campo;
  style_number = this.style_ok_campo;
  style_mm = this.style_ok_campo;
  style_yy = this.style_ok_campo;
  style_cvc = this.style_ok_campo;
  label_nombre = this.style_input;
  label_numero = this.style_input;
  label_mm = this.style_input;
  label_yy = this.style_input;
  label_cvc = this.style_input;

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      mm: ['', [Validators.required]],
      yy: ['', [Validators.required]],
      CVC: ['', [Validators.required]]
    });
  }
  change() {

    if (!this.success) {
      this.success = true;
      this.nombre = 'Jane Appleseed';
      this.numero = '0000 0000 0000 0000';
      this.mm = '00';
      this.yy = '00';
      this.cvc = '000';
      this.form.reset();
      return;
    }
    this.style_nombre = this.style_ok_campo;
    this.style_number = this.style_ok_campo;
    this.style_mm = this.style_ok_campo;
    this.style_yy = this.style_ok_campo;
    this.style_cvc = this.style_ok_campo;
    this.label_nombre = this.style_input
    this.label_mm = this.style_input;
    this.label_yy = this.style_input;
    this.label_cvc = this.style_input;
    const controls = this.form.controls;
    let temp = true;
    //this.success = true;
    for (const name in controls) {
      if (controls[name].invalid) {
        switch (name) {
          case 'nombre': { this.style_nombre = this.style_wrong_campo; this.label_nombre = this.wrong_input } break;
          case 'numero': { this.style_number = this.style_wrong_campo; this.label_numero = this.wrong_input } break;
          case 'mm': { this.style_mm = this.style_wrong_campo; this.label_mm = this.wrong_input; } break;
          case 'yy': { this.style_yy = this.style_wrong_campo; this.label_yy = this.wrong_input } break;
          case 'CVC': { this.style_cvc = this.style_wrong_campo; this.label_cvc = this.wrong_input; } break;
        }

        temp = false;
      }

    }

    if (this.success && temp) {
      this.nombre = this.form.value.nombre;
      this.numero = this.form.value.numero;
      this.mm = this.form.value.mm;
      this.yy = this.form.value.yy;
      this.cvc = this.form.value.CVC;
      this.success = false;
    }

  }

  keyPress1(event: KeyboardEvent) {


    if (this.form.value.numero.length != 16) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        this.label_numero = this.wrong_input;
        this.style_number = { "border-color": "red" }
        // console.log(this.style_x);

        event.preventDefault();
      } else {
        this.label_numero = { "font-size": "12px", "color": "transparent" };
        this.style_number = { "border-color": "cadetblue" };
        //console.log(this.style_x);
      }

    }
  }

}
