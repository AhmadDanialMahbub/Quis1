import { Component, OnInit } from '@angular/core';
import {Kuis} from '../shared/kuis';

@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {

  DaftarMahasiswa:Kuis[]=[];
  nim = '';
  nama = '';
  kelas= '';
  mahasiswa;
  constructor() { }

  ngOnInit() {
  }
  tambahData(){
    this.mahasiswa= new Kuis(this.nim, this.nama, this.kelas);
    this.DaftarMahasiswa.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}
 
