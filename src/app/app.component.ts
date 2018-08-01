import { Component, HostListener, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  lastScrollTop: number = 0;
  direction: string;

  scrollDown() {
    var top = document.getElementById('wrap').offsetHeight;

    scrollTo({
      top,
      behavior: 'smooth'
    });
  }
  scrollUp() {

    scrollTo({
      top:0,
      behavior: 'smooth'
    });
  }
  hoverOnSideOver() {
    document.getElementById("openQTab").classList.add("hoverOnSide");
    document.getElementById("bottomChev").classList.add("colorWhite");
  }
  hoverOnSideOff() {
    document.getElementById("openQTab").classList.remove("hoverOnSide");
    document.getElementById("bottomChev").classList.remove("colorWhite");

  }

  openQuestions() {
    var questionsTab = document.getElementById("questionsTab");
    var topChev = document.getElementById("topChev");
    var bottomChev = document.getElementById("bottomChev");
    var qList = document.getElementById("qList");
    var body = document.getElementById("body");
    if (questionsTab.classList.contains("fullScreen")) {
      questionsTab.classList.remove("fullScreen");
      body.classList.remove("overflowHidden");
      document.getElementById("openQ").innerHTML = "Open Questions";
      topChev.classList.remove("rotate");
      bottomChev.classList.remove("rotate");
      
      qList.classList.remove("displayBlock");
    } else {
      questionsTab.classList.add("fullScreen");
      body.classList.add("overflowHidden");
      topChev.classList.add("rotate");
      bottomChev.classList.add("rotate");
      document.getElementById("openQ").innerHTML = "Close Questions";

      qList.classList.add("displayBlock");

    }
  

  }
  @HostListener('window:scroll', [])

  checkScroll() {
    var top = document.getElementById('wrap').offsetHeight;
    const scrollPosition = window.scrollY;
    var qHeader = document.getElementById('qHeader');
    var qHeaderText = document.getElementById('qHRow');
    var qHeaderLogo = document.getElementById('qHLogo');
    var qHeaderLogoImg = document.getElementById('qHeaderLogo');
    var questionBlock = document.getElementById('questionBlock').offsetHeight;

   
    if (scrollPosition >= top) {
      qHeader.classList.add('qHeaderScrollFx');
    }
    else {
      qHeader.classList.remove('qHeaderScrollFx');
    }
    if (scrollPosition >= questionBlock) {
      qHeaderText.classList.add('displayBlock');
      qHeaderLogo.classList.add('displayNone');
      qHeader.classList.add('qHeaderColor');
      qHeaderLogoImg.classList.remove('opacity1');

    }
    else {
      qHeaderText.classList.remove('displayBlock');
      qHeaderLogo.classList.remove('displayNone');
      qHeader.classList.remove('qHeaderColor');
      qHeaderLogoImg.classList.add('opacity1');

    }
     
    
  }
}
