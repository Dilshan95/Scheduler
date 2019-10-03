import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-checkSchedule',
  templateUrl: './checkSchedule.component.html',
  styleUrls: ['./checkSchedule.component.css']
})
export class CheckScheduleComponent implements OnInit {
//   public scheduleObj: ScheduleComponent;
//   public setDate:Date =new Date(2019,5,5);
//   public data: object[] = [{
//     Id: 2,
//     Subject: 'It Field Visit',
//     Location:'Creative Software',
//     Faculty:'Faculty of Science',
//     StartTime: new Date(2019,5,5, 10, 0),
//     EndTime: new Date(2019,5,5, 12, 30),
//     IsBlock:true
// }];
  constructor() { }

  ngOnInit() {
  }
  // public eventObject: EventSettingsModel={
  //   dataSource: this.data
  // }

  //   public selectedDate: Date = new Date(2019, 3, 1);
  //   private selectionTarget: Element;
  //   public onPopupOpen(args: PopupOpenEventArgs): void {
  //       this.selectionTarget = null;
  //       this.selectionTarget = args.target;
  //   }
  //   public onDetailsClick(): void {
  //       this.onCloseClick();
  //       const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
  //       this.scheduleObj.openEditor(data, 'Add');
  //   }
  //   public onAddClick(): void {
  //     console.log("111111");
  //       this.onCloseClick();
  //       const data: Object = this.scheduleObj.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
  //       const eventData: { [key: string]: Object } = this.scheduleObj.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
  //       this.scheduleObj.eventWindow.convertToEventData(data as { [key: string]: Object }, eventData);
  //       eventData.Id = this.scheduleObj.eventBase.getEventMaxID() as number + 1;
  //       this.scheduleObj.addEvent(eventData);
  //       console.log("success");
  //   }
    // public onEditClick(args: any): void {
    //     if (this.selectionTarget) {
    //     let eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
    //     let currentAction: CurrentAction = 'Save';
    //     if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
    //         if (args.target.classList.contains('e-edit-series')) {
    //         currentAction = 'EditSeries';
    //         eventData = this.scheduleObj.eventBase.getRecurrenceEvent(eventData);
    //         } else {
    //         currentAction = 'EditOccurrence';
    //         }
    //     }
    //     this.scheduleObj.openEditor(eventData, currentAction);
    //     }
    // }
    // public onDeleteClick(args: any): void {
    //     this.onCloseClick();
    //     if (this.selectionTarget) {
    //     const eventData: { [key: string]: Object } = this.scheduleObj.getEventDetails(this.selectionTarget) as { [key: string]: Object };
    //     let currentAction: CurrentAction;
    //     if (!isNullOrUndefined(eventData.RecurrenceRule) && eventData.RecurrenceRule !== '') {
    //         currentAction = args.target.classList.contains('e-delete-series') ? 'DeleteSeries' : 'DeleteOccurrence';
    //     }
    //     this.scheduleObj.deleteEvent(eventData, currentAction);
    //     }
    // }
    // public onCloseClick(): void {
    //     this.scheduleObj.quickPopup.quickPopupHide();
    // }

}
