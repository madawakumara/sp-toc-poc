import { Component } from '@angular/core';
import { Book } from './lib/segment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: Book[] = [
    {
      id:1,
      title: 'Book',
      isExpand: false,
      pages:[
        {
          id:1,
          title: 'Introduction',
          url: '/sites/nylwiki/testwiki'
        }
      ],
      chapters: [
        {
          id:1,
          title: 'Chapter', 
          isExpand: false,   
          pages:[
            {
              id:2,
              title: 'The History of Grammar',
              url: '/sites/nylwiki/testwiki'
            }
          ],
          sections: [
            {
              id:1,
              title: 'Section',
              isExpand: false,
              pages:[
                {
                  id:3,
                  title: 'Overview',
                  url: '/sites/nylwiki/testwiki'
                },
                {
                  id:4,
                  title: 'Authentication',
                  url: '/sites/nylwiki/testwiki'
                },
                {
                  id:5,
                  title: 'Basic Function',
                  url: '/sites/nylwiki/testwiki'
                }
              ]
            },
            {
              id:2,
              title: 'Section',
              isExpand: false,
              pages:[
                {
                  id:3,
                  title: 'Parts of Speech',
                  url: '/sites/nylwiki/testwiki'
                }
              ]
            }
          ]
        },
        {
          id:2,
          title: 'Chapter',
          isExpand: false,
          pages:[
            {
              id:2,
              title: 'Sentences',
              url: '/sites/nylwiki/testwiki'
            }
          ],
          sections: [
            {
              id:2,
              title: 'Section',
              isExpand: false,
              pages:[
                {
                  id:3,
                  title: 'Complex Sentences',
                  url: '/sites/nylwiki/testwiki'
                },
                {
                  id:3,
                  title: 'Compound Sentences',
                  url: '/sites/nylwiki/testwiki'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id:2,
      title: 'Book',
      isExpand: false,
      pages:[
        {
          id:3,
          title: 'Paragraphs',
          url: '/sites/nylwiki/testwiki'
        }
      ],
      chapters: [
        {
          id:1,
          title: 'Chapter',
          isExpand: false,
          pages:[],
          sections: []
        }
      ]
    } 
  ];
}
