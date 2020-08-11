import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  public folder: string;

  clients:any = [
    {
        name: 'Brett',
        designation: 'Software Engineer',
        company: [{
            id: 1,
            name: 'Apple1',
            date: 'Apr 20'
        },
        {
          id: 2,
          name: 'Apple2',
          date: 'Apr 21'
         },
        {
          id: 3,
          name: 'Apple3',
          date: 'Apr 22'
        }
      ]
    }, 
    {
        name: 'Steven',
        designation: 'Database Administrator',
        company: [{
            id: 3,
            name: 'Google1',
            date: 'Apr 25'
        },
        {
          id: 3,
          name: 'Google2',
          date: 'Apr 26'
       }]
    }, 
    {
        name: 'Jim',
        designation: 'Designer',
        company: [{
            id: 2,
            name: 'Facebook1',
            date: 'Apr 30'

        }
      ]
    }];

  constructor(private activatedRoute:ActivatedRoute) { 

      this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
  }

  viewItem2(com){
    console.log(com);
  }

  viewItem1(item){
    console.log(item);

  }

}
