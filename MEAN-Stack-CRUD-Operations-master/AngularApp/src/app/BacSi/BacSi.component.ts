import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BacSiService } from '../shared/BacSi.service';
import { BacSi } from '../shared/BacSi.model';

declare var M: any;

@Component({
  selector: 'app-BacSi',
  templateUrl: './BacSi.component.html',
  styleUrls: ['./BacSi.component.css'],
  providers: [BacSiService]
})
export class BacSiComponent implements OnInit {

  constructor(private BacSiService: BacSiService) { }
  textSearch: any;
  dsBacSi: any;
  ngOnInit() {
    this.resetForm();
    this.refreshBacSiList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.BacSiService.selectedBacSi = {
      _id: "",
      MaBacSi: "",
      TenBacSi: "",
      SDT: "",
      GioiThieuChung: "",
      ChiPhiTuVan: null,
      ChucVi: "",
      Khoa: "",
      PhongKham: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "" || form.value._id == null) {
      this.BacSiService.postBacSi(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBacSiList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.BacSiService.putBacSi(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBacSiList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshBacSiList() {
    this.BacSiService.getBacSiList().subscribe((res) => {
      this.BacSiService.BacSis = res as BacSi[];
      this.dsBacSi = this.BacSiService.BacSis;
    });
  }

  onEdit(BS: BacSi) {
    this.BacSiService.selectedBacSi = BS;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.BacSiService.deleteBacSi(_id).subscribe((res) => {
        this.refreshBacSiList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  search(){
    this.dsBacSi = this.BacSiService.BacSis;
    if(this.textSearch){
     
      this.dsBacSi = this.dsBacSi.filter(
        t => t.MaBacSi.toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase()) ||
              t.TenBacSi.toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase()) ||
              t.PhongKham.toLocaleLowerCase().includes(this.textSearch.toLocaleLowerCase())
      )
    }
    
  }
  Reset(){
    this.dsBacSi = this.BacSiService.BacSis;
  }

}
