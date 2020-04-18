import { Component, OnInit } from '@angular/core';
import { GrandextangeService } from 'src/app/core/grandextange.service';
@Component({
  selector: 'app-intro-text',
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.scss'],
})
export class IntroTextComponent implements OnInit {
  constructor(private geService: GrandextangeService) {}

  updateTime: string;

  ngOnInit() {
    this.getLastUpdateTime();
  }

  public async getLastUpdateTime(): Promise<void> {
    this.updateTime = await this.geService.getLastUpdateTime();
  }
}
