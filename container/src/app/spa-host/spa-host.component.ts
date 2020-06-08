import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { SingleSpaService } from '../../service/single-spa.service';
import { zip } from 'rxjs';

@Component({
  selector: 'slb-spa-host',
  templateUrl: './spa-host.component.html',
  styleUrls: ['./spa-host.component.scss']
})
export class SpaHostComponent implements OnInit, OnDestroy {
  // items = ['app1', 'app2'];

  constructor(private service: SingleSpaService) { }

  // @ViewChild('app1', { static: true }) private app1: ElementRef;
  // @ViewChild('app2', { static: true }) private app2: ElementRef;
  // @ViewChild('app4', { static: true }) private app4: ElementRef;


  ngOnInit() {
    // this.service.mount('app1', this.app1.nativeElement).subscribe();
    // this.service.mount('app2', this.app2.nativeElement).subscribe();
    // this.service.mount('app4', this.app4.nativeElement).subscribe();
  }

  async ngOnDestroy() {
    await zip(
      // this.service.unmount('app1'),
      // this.service.unmount('app2'),
      // this.service.unmount('app4')
    ).toPromise();
  }
}
