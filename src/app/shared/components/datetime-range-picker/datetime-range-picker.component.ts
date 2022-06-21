import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeriodRange } from '../../interfaces/period-range.interface';

@Component({
  selector: 'app-datetime-range-picker',
  templateUrl: './datetime-range-picker.component.html',
  styleUrls: ['./datetime-range-picker.component.scss']
})
export class DatetimeRangePickerComponent implements OnInit {

  @Input() initialPeriod?: PeriodRange;
  @Output() periodRange = new EventEmitter<PeriodRange>();

  controlStart = new FormControl(null, [Validators.required]);
  controlEnd = new FormControl(null, [Validators.required]);
  form = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    if (this.initialPeriod) {
      this.controlStart.setValue(this.initialPeriod.start);
      this.controlEnd.setValue(this.initialPeriod.end);
    }
  }

  public emitPeriod() {
    const periodRange: PeriodRange = {
      start: this.controlStart.value,
      end: this.controlEnd.value
    }

    this.periodRange.emit(periodRange);
  }

}
