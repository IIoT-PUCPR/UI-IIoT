import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AssetService } from 'src/app/asset/services/asset.service';
import { DatetimeRangePickerComponent } from 'src/app/shared/components/datetime-range-picker/datetime-range-picker.component';
import { PeriodRange } from 'src/app/shared/interfaces/period-range.interface';

@Component({
  selector: 'app-asset-consumption',
  templateUrl: './asset-consumption.component.html',
  styleUrls: ['./asset-consumption.component.scss']
})
export class AssetConsumptionComponent implements OnInit {

  @Input() assetId!: string;

  assetConsumption?: number;
  start!: Date;
  end!: Date;
  simulateCosts: boolean = false;
  form!: FormGroup;

  FIVE_MINUTES = 300000;

  DATE_PREVIEW_OPTIONS: any = {
    year: "numeric",
    month: "2-digit",
    day: "numeric"
  };

  constructor(private assetService: AssetService, private dialog: MatDialog) { }

  get fee() {
    return this.form.get('fee')!.value as number;
  }

  ngOnInit(): void {
    const now = new Date();
    this.start = new Date(now.getFullYear(), now.getMonth(), 1);
    this.end = now;

    this.getConsumption();

    setInterval(() => {
      this.getConsumption();
    }, this.FIVE_MINUTES);

    this.form = new FormGroup({});
    this.form.addControl('fee', new FormControl(0, [Validators.min(0)]))
  }

  public updateConsumption() {
    this.getConsumption();
  }

  private getConsumption() {
    const request = this.assetService.getAssetPowerConsumption(this.assetId, this.start.getTime(), this.end.getTime())
    request.subscribe(response => {
      this.assetConsumption = response;
    })
  }

  public getAmountConsumption(): string {
    const amount = this.fee * this.assetConsumption!;
    return amount.toFixed(2);
  }

  public changePeriod() {
    const dialogRef = this.dialog.open(DatetimeRangePickerComponent);

    const initialPeriod: PeriodRange = {
      start: this.start,
      end: this.end
    }
    dialogRef.componentInstance.initialPeriod = initialPeriod;

    dialogRef.componentInstance.periodRange.subscribe(periodRange => {
      this.start = periodRange.start;
      this.end = periodRange.end;
      this.getConsumption();
    });
  }

}
