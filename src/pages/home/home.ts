import { Component, ElementRef,ViewChild } from '@angular/core';
import { 
  Content, 
  Scroll } from 'ionic-angular';
import { AlphaBarComponent } from '../../alpha-bar/alpha-bar.component';
import { CSSEscape } from '../utils/util-classes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Scroll) _scrollEle: Scroll;
  @ViewChild(Content) content: Content;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  firstLetterList: Array<string> = [];
  groupedContacts = [];
   
  constructor( 
    //private _content: Content,
    private _elementRef: ElementRef ) {
    this.groupContacts();
    console.log(JSON.stringify(this.groupedContacts));
    this.getUniqueFirstLetters();
  }

  getUniqueFirstLetters() {
    this.contacts.forEach(c => {
      let firstLetter = c.name.charAt(0).toUpperCase();
      if(this.firstLetterList.indexOf(firstLetter) < 0) {
        this.firstLetterList.push(firstLetter);
      }
    });
  }

  groupContacts(){
 
    let sortedContacts = this.contacts.sort((contact1, contact2) => {
      if(contact1.name > contact2.name) {
        return 1;
      }

      if(contact1.name < contact2.name) {
        return -1;
      }

      return 0;
    }) ;
    let currentLetter;
    let currentContacts = [];

    sortedContacts.forEach((value, index) => {

        if(value.name.charAt(0) != currentLetter){

            currentLetter = value.name.charAt(0);

            let newGroup = {
                letter: currentLetter,
                contacts: []
            };

            currentContacts = newGroup.contacts;
            this.groupedContacts.push(newGroup);

        }

        currentContacts.push(value);

    });

}


navigateToLatter(letter) {
  console.log("Navigte to :" + letter)
  // if (!letter) {
  //   const selector: string = '.ion-alpha-scroll ion-item-divider';
  //   const letterDivider: any = this._elementRef.nativeElement.querySelector(selector);

  //   if (letterDivider) {
  //     const letterDividerId: string = letterDivider.id;
  //     letter = letterDividerId.replace('scroll-letter-', '');
  //   }
  // }

  if (letter) {
    const selector: string = '#scroll-letter-' + CSSEscape.escape(letter);
    const letterDivider: any = this._elementRef.nativeElement.querySelector(selector);

    if (letterDivider) {
      const offsetY = letterDivider.offsetTop;
      const _scrollContent: any = this._scrollEle._scrollContent.nativeElement;
      _scrollContent.scrollTop = offsetY;
      //this.highlightLetter(letter);
    }
  }
}

calculateScrollDimensions() {
  let dimensions = this.content.getContentDimensions();
  return {
    height: dimensions.contentHeight + 'px',
    width: (dimensions.contentWidth - 40) + 'px'
  };
}

calculateDimensionsForSidebar() {
  return {
    top: this.content.contentTop + 'px',
    height: (this.content.getContentDimensions().contentHeight - 20) + 'px'
  }
}

// highlightLetter(letter: string) {
//   if (!this.highlight) return;

//   let sidebarLetterElements: any = this._elementRef.nativeElement.querySelectorAll('.ion-alpha-sidebar li a');
//   for (var i = 0; i < sidebarLetterElements.length; i++) {
//     sidebarLetterElements[i].classList.remove("selected");
//   }

//   let letterEl: any = this._elementRef.nativeElement.querySelector('#sidebar-letter-' + letter);
//   letterEl.classList.add("selected");
// }

  contacts = [
    {
      id: 0,
      name: 'Ben Sparrow',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      address: '123 Fake St.',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    },{
      id: 2,
      name: 'Adam Bradleyson',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }, 
    {
      id: 4,
      name: 'Herry Poter',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }, {
      id: 5,
      name: 'Mike Harrington',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 6,
      name: 'Raushan Sinha',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 7,
      name: 'Reyansh Sinha',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 8,
      name: 'Sam Billings',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 9,
      name: 'MS Dhoni',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 10,
      name: 'Suresh Raina',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }, {
      id: 11,
      name: 'Rohit Sharma',
      address: '123 Fake St.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];
}
