import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @ViewChild('input', { static: false }) input: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  get text(): string {
    return this.input.nativeElement.value;
  }
}
