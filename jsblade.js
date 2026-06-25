document .addEventListener ("DOMContentLoaded", function(){
    const menubar = document.querySelector('.menubar');
    const sec1 = document.querySelector('.sec_1');
    const line = document.querySelector('.line');
    
    function checkScroll() {
        if (!sec1) return;
        
        const sec1Bottom = sec1.offsetTop + sec1.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition + 50 > sec1Bottom - 100) {
            menubar.classList.add('scrolled');
        } else {
            menubar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    const bladeLink = document.querySelector('.menubar-link');
    const hautLink = document.querySelector('.haut_text a');
    const shopLink = document.querySelector('.shop_text a');
    const eventsLink = document.querySelector('.events_text a');
    const contactsLink = document.querySelector('.contacts_text a');
    const menubarContainer = document.querySelector('.menubar');
    
  
    function showLine(targetPosition) {
        if (!line) return;
        line.style.marginLeft = targetPosition;
        line.classList.add('show');
    }
    
  
    function showLine(targetElement) {
    if (!line || !targetElement) return;
    
    
    const menubarRect = document.querySelector('.menubar').getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    
   
    let leftPos = targetRect.left - menubarRect.left;
    let width = targetRect.width;
    
  
    const lineWidth = parseFloat(getComputedStyle(line).width) || 0;
    
  
    leftPos = leftPos + (width / 2) - (lineWidth / 2);
    
    
    line.style.marginLeft = leftPos + 'px';
    line.classList.add('show');
}


function hideLine() {
    if (!line) return;
    line.classList.remove('show');
}


 

if (hautLink) {
    hautLink.addEventListener('mouseenter', function() {
        showLine(this);
    });
}

if (shopLink) {
    shopLink.addEventListener('mouseenter', function() {
        showLine(this);
    });
}

if (eventsLink) {
    eventsLink.addEventListener('mouseenter', function() {
        showLine(this);
    });
}

if (contactsLink) {
    contactsLink.addEventListener('mouseenter', function() {
        showLine(this);
    });
}

if (menubarContainer) {
    menubarContainer.addEventListener('mouseleave', function() {
        hideLine();
    });
}
    
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        if (bladeLink) bladeLink.classList.add('active');
    } else if (currentPage === 'haut.html') {
        if (hautLink) hautLink.classList.add('active');
    } else if (currentPage === 'shop.html') {
        if (shopLink) shopLink.classList.add('active');
    } else if (currentPage === 'events.html') {
        if (eventsLink) eventsLink.classList.add('active');
    } else if (currentPage === 'contacts.html') {
        if (contactsLink) contactsLink.classList.add('active');
    }

    const modelImages = document.querySelectorAll('.models img');
    const modImages = document.querySelectorAll('.mod img');


function showModByIndex(index) {
    
    modImages.forEach(img => {
        img.classList.remove('show');
    });
    
    
    if (index >= 0 && index < modImages.length) {
        modImages[index].classList.add('show');
    }
}

modelImages.forEach((model, index) => {
    model.addEventListener('mouseenter', () => showModByIndex(index));
});


const modelsContainer = document.querySelector('.models');
if (modelsContainer) {
    modelsContainer.addEventListener('mouseleave', () => {
        modImages.forEach(img => {
            img.classList.remove('show');
        });
    });
}


console.log('Найдено обычных картинок:', modelImages.length);
console.log('Найдено модальных картинок:', modImages.length);

function checkScroll() {
   
    if (!sec1) {
        menubar.classList.add('scrolled');
        return;
    }
    
    const sec1Bottom = sec1.offsetTop + sec1.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition + 50 > sec1Bottom - 100) {
        menubar.classList.add('scrolled');
    } else {
        menubar.classList.remove('scrolled');
    }
}

(function() {
 
    const text1 = "Хаут кутюр нашего бренда это коллекции 3-х направлений нашей одежды, показывающей сердце нашей свободы.";
    const text2 = "Они — основа, на которой ориентируется наш бренд. Чтобы увидеть всю одежду, обязательно приходите на наши показы.";
    
    let index1 = 0, index2 = 0;
    let direction1 = 1, direction2 = 1; 
    let element1 = document.querySelector('.min_haut_1');
    let element2 = document.querySelector('.min_haut_2');
    
    if (!element1 || !element2) return;
    
  
    element1.innerHTML = '';
    element2.innerHTML = '';
    
   
    const cursor1 = document.createElement('span');
    cursor1.className = 'typed-cursor';
    const cursor2 = document.createElement('span');
    cursor2.className = 'typed-cursor';
    
    element1.appendChild(cursor1);
    element2.appendChild(cursor2);
    
   
    function typeWriter(el, text, index, direction, cursor) {
        if (direction === 1) {
          
            if (index <= text.length) {
                const textNode = document.createTextNode(text.substring(0, index));
               
                el.innerHTML = '';
                el.appendChild(textNode);
                el.appendChild(cursor);
                return index + 1;
            } else {
              
                return -1; 
            }
        } else {
            // Стираем символ
            if (index >= 0) {
                const textNode = document.createTextNode(text.substring(0, index));
                el.innerHTML = '';
                el.appendChild(textNode);
                el.appendChild(cursor);
                return index - 1;
            } else {
                
                return 1;
            }
        }
    }
    
   
    function animateTyping() {
        let result1 = typeWriter(element1, text1, index1, direction1, cursor1);
        if (typeof result1 === 'number') {
            if (result1 === -1) {
                direction1 = -1;
                index1 = text1.length;
            } else {
                index1 = result1;
            }
            if (result1 === 1 && direction1 === -1) {
                direction1 = 1;
                index1 = 1;
            }
        }
        
        let result2 = typeWriter(element2, text2, index2, direction2, cursor2);
        if (typeof result2 === 'number') {
            if (result2 === -1) {
                direction2 = -1;
                index2 = text2.length;
            } else {
                index2 = result2;
            }
            if (result2 === 1 && direction2 === -1) {
                direction2 = 1;
                index2 = 1;
            }
        }
        
        
        setTimeout(animateTyping, 70);
    }
    
   
    setTimeout(() => {
        index1 = 1;
        index2 = 1;
        direction1 = 1;
        direction2 = 1;
        animateTyping();
    }, 500);
})();


const segmentContainer = document.querySelector('.segment');
const miniIndicator = document.querySelector('.mini_segment');
const segmentItems = document.querySelectorAll('.ad_segment, .chist_segment, .rai_segment');

function moveIndicator(activeItem) {
    if (!miniIndicator || !activeItem || !segmentContainer) return;
    
   
    const containerRect = segmentContainer.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    
  
    let leftPosition = itemRect.left - containerRect.left;
    let itemWidth = itemRect.width;
    
   
    const horizontalPadding = 0.3 * 16; 
    leftPosition = leftPosition - horizontalPadding;
    itemWidth = itemWidth + (horizontalPadding * 2);
    
    
    miniIndicator.style.width = itemWidth + 'px';
    miniIndicator.style.left = leftPosition + 'px';
}


segmentItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        moveIndicator(item);
    });
    
    item.addEventListener('click', () => {
        moveIndicator(item);
        console.log('Выбран:', item.textContent);
    });
});


const defaultItem = document.querySelector('.ad_segment');
if (defaultItem) {
   
    setTimeout(() => moveIndicator(defaultItem), 100);
}


window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.ad_segment');
    if (currentActive) moveIndicator(currentActive);
});



const hellBlock = document.querySelector('.hell');
const limboBlock = document.querySelector('.limbo');
const heavenBlock = document.querySelector('.heaven');


const adSegmentItem = document.querySelector('.ad_segment');
const chistSegmentItem = document.querySelector('.chist_segment');
const raiSegmentItem = document.querySelector('.rai_segment');


function showContentBlock(activeBlock) {
    
    if (hellBlock) hellBlock.style.display = 'none';
    if (limboBlock) limboBlock.style.display = 'none';
    if (heavenBlock) heavenBlock.style.display = 'none';
    
   
    if (activeBlock) {
        activeBlock.style.display = 'flex';
    }
}


function setActiveSegment(activeItem, contentBlock) {
    if (!activeItem) return;
   
    moveIndicator(activeItem);
   
    showContentBlock(contentBlock);
   
    if (segmentItems) {
        segmentItems.forEach(item => {
            item.classList.remove('active-segment');
        });
    }
    activeItem.classList.add('active-segment');
}


if (adSegmentItem && hellBlock) {
   
    const newAdSegment = adSegmentItem.cloneNode(true);
    adSegmentItem.parentNode.replaceChild(newAdSegment, adSegmentItem);
    
    newAdSegment.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveSegment(newAdSegment, hellBlock);
        console.log('Выбран Ад');
    });
}

if (chistSegmentItem && limboBlock) {
    const newChistSegment = chistSegmentItem.cloneNode(true);
    chistSegmentItem.parentNode.replaceChild(newChistSegment, chistSegmentItem);
    
    newChistSegment.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveSegment(newChistSegment, limboBlock);
        console.log('Выбрано Чистилище');
    });
}

if (raiSegmentItem && heavenBlock) {
    const newRaiSegment = raiSegmentItem.cloneNode(true);
    raiSegmentItem.parentNode.replaceChild(newRaiSegment, raiSegmentItem);
    
    newRaiSegment.addEventListener('click', (e) => {
        e.stopPropagation();
        setActiveSegment(newRaiSegment, heavenBlock);
        console.log('Выбран Рай');
    });
}


const updatedSegmentItems = document.querySelectorAll('.ad_segment, .chist_segment, .rai_segment');


function updateMoveIndicator(activeItem) {
    if (!miniIndicator || !activeItem || !segmentContainer) return;
    
    const containerRect = segmentContainer.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    
    let leftPosition = itemRect.left - containerRect.left;
    let itemWidth = itemRect.width;
    
    const horizontalPadding = 0.3 * 16;
    leftPosition = leftPosition - horizontalPadding;
    itemWidth = itemWidth + (horizontalPadding * 2);
    
    miniIndicator.style.width = itemWidth + 'px';
    miniIndicator.style.left = leftPosition + 'px';
}


updatedSegmentItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        updateMoveIndicator(item);
    });
});


const defaultActiveItem = document.querySelector('.ad_segment');
if (defaultActiveItem && hellBlock) {
    setTimeout(() => {
        updateMoveIndicator(defaultActiveItem);
        showContentBlock(hellBlock);
        defaultActiveItem.classList.add('active-segment');
    }, 100);
}


const strelOne = document.querySelector('.strel_one');
const strelTwo = document.querySelector('.strel_two');

function checkStrelVisibility() {
    if (!strelOne || !strelTwo) return;
    
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
  
    const sec2Element = document.querySelector('.sec_2');
    if (!sec2Element) return;
    
    const sec2Top = sec2Element.offsetTop;
    const sec2Bottom = sec2Top + sec2Element.offsetHeight;
    
   
    if (scrollPosition + windowHeight / 2 > sec2Top && scrollPosition < sec2Bottom) {
        strelOne.classList.add('visible');
        strelTwo.classList.add('visible');
    }
}

window.addEventListener('scroll', checkStrelVisibility);
checkStrelVisibility();




const pageTransition = document.querySelector('.page-transition');
const transitionOverlay = document.querySelector('.transition-overlay');

function startNamedTransition(url) {
    if (!pageTransition) {
        window.location.href = url;
        return;
    }

    
    pageTransition.classList.add('active');
   
    setTimeout(() => {
        window.location.href = url;
    }, 450); 
}


document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && 
        href !== '' &&
        !href.startsWith('http') && 
        !href.startsWith('#') && 
        !href.startsWith('javascript') &&
        !link.hasAttribute('download')) {
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            startNamedTransition(href);
        });
    }
});


window.addEventListener('pageshow', () => {
    if (pageTransition) {
        pageTransition.classList.remove('active');
    }
});


function startGraffitiAnimation() {
    const letters = [
        { element: document.querySelector('.word_h'), delay: 200 },
        { element: document.querySelector('.word_a'), delay: 600 },
        { element: document.querySelector('.word_y'), delay: 1000 },
        { element: document.querySelector('.word_t'), delay: 1400 }
    ];
    
    letters.forEach(letter => {
        if (letter.element) {
            setTimeout(() => {
                letter.element.style.opacity = '1';
                letter.element.style.transform = 'scale(1) translateY(0)';
                letter.element.style.filter = 'blur(0)';
                
                letter.element.style.animation = 'sprayShake 0.3s ease-in-out';
                setTimeout(() => {
                    letter.element.style.animation = '';
                }, 300);
            }, letter.delay);
        }
    });
}


if (document.querySelector('.word_h')) {
   
    const allLetters = document.querySelectorAll('.word_h, .word_a, .word_y, .word_t');
    allLetters.forEach(letter => {
        letter.style.opacity = '0';
        letter.style.transform = 'scale(0.8) translateY(20px)';
        letter.style.filter = 'blur(4px)';
        letter.style.transition = 'all 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)';
    });
    
 
    startGraffitiAnimation();
}


function startEventsGraffitiAnimation() {
    const letters = [
        { element: document.querySelector('.word_p'), delay: 200 },
        { element: document.querySelector('.word_o'), delay: 500 },
        { element: document.querySelector('.word_k'), delay: 800 },
        { element: document.querySelector('.word_a2'), delay: 1100 },
        { element: document.querySelector('.word_z'), delay: 1400 }
    ];
    
    letters.forEach(letter => {
        if (letter.element) {
            setTimeout(() => {
                letter.element.style.opacity = '1';
                letter.element.style.transform = 'scale(1) translateY(0)';
                letter.element.style.filter = 'blur(0)';
               
                letter.element.style.animation = 'sprayShake 0.3s ease-in-out';
                setTimeout(() => {
                    letter.element.style.animation = '';
                }, 300);
            }, letter.delay);
        }
    });
}


if (document.querySelector('.word_p')) {
    
    const eventsLetters = document.querySelectorAll('.word_p, .word_o, .word_k, .word_a2, .word_z');
    eventsLetters.forEach(letter => {
        letter.style.opacity = '0';
        letter.style.transform = 'scale(0.8) translateY(20px)';
        letter.style.filter = 'blur(4px)';
        letter.style.transition = 'all 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)';
    });
    
    
    startEventsGraffitiAnimation();
}



(function() {
   
    const eventText1 = "Актуальные показы нашего бренда это возможность посетить истинную красоту.";
    const eventText2 = "Они станут прекрасным шансом для тех, кто ищет вдохновение и впечатления от красивых моделей.";
    
    let eventIndex1 = 0, eventIndex2 = 0;
    let eventDirection1 = 1, eventDirection2 = 1; 
    let eventElement1 = document.querySelector('.mini_event_1');
    let eventElement2 = document.querySelector('.mini_event_2');
    
    if (!eventElement1 || !eventElement2) return;
    
   
    eventElement1.innerHTML = '';
    eventElement2.innerHTML = '';
    
    
    const eventCursor1 = document.createElement('span');
    eventCursor1.className = 'typed-cursor';
    const eventCursor2 = document.createElement('span');
    eventCursor2.className = 'typed-cursor';
    
    eventElement1.appendChild(eventCursor1);
    eventElement2.appendChild(eventCursor2);
    
   
    function eventTypeWriter(el, text, index, direction, cursor) {
        if (direction === 1) {
            
            if (index <= text.length) {
                const textNode = document.createTextNode(text.substring(0, index));
               
                el.innerHTML = '';
                el.appendChild(textNode);
                el.appendChild(cursor);
                return index + 1;
            } else {
               
                return -1;
            }
        } else {
            
            if (index >= 0) {
                const textNode = document.createTextNode(text.substring(0, index));
                el.innerHTML = '';
                el.appendChild(textNode);
                el.appendChild(cursor);
                return index - 1;
            } else {
               
                return 1;
            }
        }
    }
    
 
    function animateEventTyping() {
        let result1 = eventTypeWriter(eventElement1, eventText1, eventIndex1, eventDirection1, eventCursor1);
        if (typeof result1 === 'number') {
            if (result1 === -1) {
                eventDirection1 = -1;
                eventIndex1 = eventText1.length;
            } else {
                eventIndex1 = result1;
            }
            if (result1 === 1 && eventDirection1 === -1) {
                eventDirection1 = 1;
                eventIndex1 = 1;
            }
        }
        
        let result2 = eventTypeWriter(eventElement2, eventText2, eventIndex2, eventDirection2, eventCursor2);
        if (typeof result2 === 'number') {
            if (result2 === -1) {
                eventDirection2 = -1;
                eventIndex2 = eventText2.length;
            } else {
                eventIndex2 = result2;
            }
            if (result2 === 1 && eventDirection2 === -1) {
                eventDirection2 = 1;
                eventIndex2 = 1;
            }
        }
        
        
        setTimeout(animateEventTyping, 70);
    }
    
    
    setTimeout(() => {
        eventIndex1 = 1;
        eventIndex2 = 1;
        eventDirection1 = 1;
        eventDirection2 = 1;
        animateEventTyping();
    }, 500);
})();



const sec2e = document.querySelector('.sec_2e');

function checkSec2eVisibility() {
    if (!sec2e) return;
    
    const sec2eRect = sec2e.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
   
    if (sec2eRect.top < windowHeight - 100 && sec2eRect.bottom > 0) {
        
        const elementsToShow = sec2e.querySelectorAll('.art_1, .art_2, .art_3, .art_4, .art_5, .t_1, .t_1_1, .t_1_1_1, .t_2, .t_2_2, .t_2_2_2, .t_3, .t_3_3, .t_3_3_3, .t_4, .t_4_4, .t_4_4_4, .t_5, .t_5_5, .t_5_5_5');
        
        elementsToShow.forEach((element, index) => {
           
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 50);
        });
    }
}


window.addEventListener('scroll', checkSec2eVisibility);

checkSec2eVisibility();


const artImages = document.querySelectorAll('.art_1, .art_2, .art_3, .art_4, .art_5');

artImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.08)';
        img.style.transition = 'transform 0.3s ease';
        img.style.zIndex = '20';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.zIndex = '';
    });
});


const ticket1 = document.querySelector('.ticket_1');
const ticket2 = document.querySelector('.ticket_2');
const ticket3 = document.querySelector('.ticket_3');


const vipContent = document.querySelector('.vip');
const vipMini = document.querySelector('.vip_mini');
const vipPrice = document.querySelector('.vip_price');

const guestContent = document.querySelector('.guest');
const guestMini = document.querySelector('.guest_mini');
const guestPrice = document.querySelector('.guest_price');

const specialContent = document.querySelector('.special');
const specialMini = document.querySelector('.special_mini');
const specialPrice = document.querySelector('.special_price');


function hideAllTexts() {
  
    if (vipContent) vipContent.style.display = 'none';
    if (vipMini) vipMini.style.display = 'none';
    if (vipPrice) vipPrice.style.display = 'none';
    
   
    if (guestContent) guestContent.style.display = 'none';
    if (guestMini) guestMini.style.display = 'none';
    if (guestPrice) guestPrice.style.display = 'none';
    
 
    if (specialContent) specialContent.style.display = 'none';
    if (specialMini) specialMini.style.display = 'none';
    if (specialPrice) specialPrice.style.display = 'none';
}


function showVipTexts() {
    if (vipContent) vipContent.style.display = 'block';
    if (vipMini) vipMini.style.display = 'block';
    if (vipPrice) vipPrice.style.display = 'block';
}


function showGuestTexts() {
    if (guestContent) guestContent.style.display = 'block';
    if (guestMini) guestMini.style.display = 'block';
    if (guestPrice) guestPrice.style.display = 'block';
}


function showSpecialTexts() {
    if (specialContent) specialContent.style.display = 'block';
    if (specialMini) specialMini.style.display = 'block';
    if (specialPrice) specialPrice.style.display = 'block';
}


function resetAllTickets() {
    if (ticket1) ticket1.classList.remove('active');
    if (ticket2) ticket2.classList.remove('active');
    if (ticket3) ticket3.classList.remove('active');
}


if (ticket1) {
    ticket1.addEventListener('click', () => {
        resetAllTickets();
        ticket1.classList.add('active');
        hideAllTexts();
        showVipTexts();
    });
}

if (ticket2) {
    ticket2.addEventListener('click', () => {
        resetAllTickets();
        ticket2.classList.add('active');
        hideAllTexts();
        showGuestTexts();
    });
}


if (ticket3) {
    ticket3.addEventListener('click', () => {
        resetAllTickets();
        ticket3.classList.add('active');
        hideAllTexts();
        showSpecialTexts();
    });
}


if (ticket1) {
    ticket1.classList.add('active');
    hideAllTexts();
    showVipTexts();
}


const chooseButton = document.querySelector('.choose');

function showConfirmation(message, ticketType) {
   
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#3529FF';
    notification.style.color = '#ffffff';
    notification.style.padding = '1vw 2vw';
    notification.style.borderRadius = '2vw';
    notification.style.fontFamily = 'Manrope-Regular';
    notification.style.fontSize = '1.2vw';
    notification.style.zIndex = '10000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => { notification.style.opacity = '1'; }, 10);
    
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

if (chooseButton) {
    chooseButton.addEventListener('click', () => {
        if (ticket1 && ticket1.classList.contains('active')) {
            showConfirmation('ВИП-билет выбран! Спасибо за покупку!', 'vip');
        } 
        else if (ticket2 && ticket2.classList.contains('active')) {
            showConfirmation('Обычный билет выбран! Спасибо за покупку!', 'guest');
        } 
        else if (ticket3 && ticket3.classList.contains('active')) {
            showConfirmation('Специальный билет выбран! Добро пожаловать!', 'special');
        }
        else {
            showConfirmation('Пожалуйста, выберите билет перед оформлением', 'error');
        }
    });
}

function startLectureGraffitiAnimation() {
    const letters = [
        { element: document.querySelector('.word_l'), delay: 200 },
        { element: document.querySelector('.word_e'), delay: 500 },
        { element: document.querySelector('.word_k2'), delay: 800 },
        { element: document.querySelector('.word_c'), delay: 1100 },
        { element: document.querySelector('.word_i'), delay: 1400 },
        { element: document.querySelector('.word_i2'), delay: 1700 }
    ];
    
    letters.forEach(letter => {
        if (letter.element) {
            setTimeout(() => {
                letter.element.style.opacity = '1';
                letter.element.style.transform = 'scale(1) translateY(0)';
                letter.element.style.filter = 'blur(0)';
                letter.element.style.animation = 'sprayShake 0.3s ease-in-out';
                setTimeout(() => {
                    letter.element.style.animation = '';
                }, 300);
            }, letter.delay);
        }
    });
}


const lectureLetters = document.querySelectorAll('.word_l, .word_e, .word_k2, .word_c, .word_i, .word_i2');


lectureLetters.forEach(letter => {
    letter.style.opacity = '0';
    letter.style.transform = 'scale(0.8) translateY(20px)';
    letter.style.filter = 'blur(4px)';
    letter.style.transition = 'all 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)';
});

const sec4e = document.querySelector('.sec_4e');
let lectureAnimationStarted = false;

function checkSec4eVisibility() {
    if (!sec4e || lectureAnimationStarted) return;
    
    const sec4eRect = sec4e.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
   
    if (sec4eRect.top < windowHeight - 100 && sec4eRect.bottom > 0) {
        lectureAnimationStarted = true;
        startLectureGraffitiAnimation();
    }
}

window.addEventListener('scroll', checkSec4eVisibility);
checkSec4eVisibility();

(function() {
    
    const lectText1 = "Открытая лекция нашего бренда является важным событием для людей, которые хотят связать свою жизнь с модой.";
    const lectText2 = "Это шанс для тех, кто хочет углубиться в наши приемы и техники для создания уникальной одежды.";
    
    let lectIndex1 = 0, lectIndex2 = 0;
    let lectDirection1 = 1, lectDirection2 = 1; 
    let lectElement1 = document.querySelector('.mini_lect_1');
    let lectElement2 = document.querySelector('.mini_lect_2');
    
    if (!lectElement1 || !lectElement2) return;
    
    
    lectElement1.innerHTML = '';
    lectElement2.innerHTML = '';
    
   
    const lectCursor1 = document.createElement('span');
    lectCursor1.className = 'typed-cursor';
    const lectCursor2 = document.createElement('span');
    lectCursor2.className = 'typed-cursor';
    
    lectElement1.appendChild(lectCursor1);
    lectElement2.appendChild(lectCursor2);
    
   
    function lectTypeWriter(el, text, index, direction, cursor) {
        if (direction === 1) {
            
            if (index <= text.length) {
                const textNode = document.createTextNode(text.substring(0, index));
               
                el.innerHTML = '';
                el.appendChild(textNode);
                el.appendChild(cursor);
                return index + 1;
            } else {
                
                return -1;
            }
        } else {
            
            if (index >= 0) {
                const textNode = document.createTextNode(text.substring(0, index));
                el.innerHTML = '';
                el.appendChild(textNode);
                el.appendChild(cursor);
                return index - 1;
            } else {
                
                return 1;
            }
        }
    }
    
    
    function animateLectTyping() {
        let result1 = lectTypeWriter(lectElement1, lectText1, lectIndex1, lectDirection1, lectCursor1);
        if (typeof result1 === 'number') {
            if (result1 === -1) {
                lectDirection1 = -1;
                lectIndex1 = lectText1.length;
            } else {
                lectIndex1 = result1;
            }
            if (result1 === 1 && lectDirection1 === -1) {
                lectDirection1 = 1;
                lectIndex1 = 1;
            }
        }
        
        let result2 = lectTypeWriter(lectElement2, lectText2, lectIndex2, lectDirection2, lectCursor2);
        if (typeof result2 === 'number') {
            if (result2 === -1) {
                lectDirection2 = -1;
                lectIndex2 = lectText2.length;
            } else {
                lectIndex2 = result2;
            }
            if (result2 === 1 && lectDirection2 === -1) {
                lectDirection2 = 1;
                lectIndex2 = 1;
            }
        }
        
        
        setTimeout(animateLectTyping, 70);
    }
    
    
    setTimeout(() => {
        lectIndex1 = 1;
        lectIndex2 = 1;
        lectDirection1 = 1;
        lectDirection2 = 1;
        animateLectTyping();
    }, 500);
})();


const sec5e = document.querySelector('.sec_5e');
const pict1 = document.querySelector('.pict_1');

function checkPict1Visibility() {
    if (!sec5e || !pict1) return;
    
    const sec5eRect = sec5e.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
  
    if (sec5eRect.top < windowHeight - 100 && sec5eRect.bottom > 0) {
        pict1.classList.add('visible');
    }
}


window.addEventListener('scroll', checkPict1Visibility);

checkPict1Visibility();


const for01 = document.querySelector('.for_01');
const for02 = document.querySelector('.for_02');
const sob1 = document.querySelector('.sob_1');
const pict1Element = document.querySelector('.pict_1');
const sob2 = document.querySelector('.sob_2');
const pict2Element = document.querySelector('.pict_2');


function restartAnimation(element) {
    if (!element) return;
    element.classList.remove('visible');
    
    void element.offsetHeight;
    
    element.classList.add('visible');
}


function showFirstBlock() {
   
    if (sob1) sob1.style.display = 'block';
    if (pict1Element) {
        pict1Element.style.display = 'block';
        restartAnimation(pict1Element);
    }
    

    if (sob2) sob2.style.display = 'none';
    if (pict2Element) {
        pict2Element.style.display = 'none';
        pict2Element.classList.remove('visible');
    }
}


function showSecondBlock() {
    
    if (sob1) sob1.style.display = 'none';
    if (pict1Element) {
        pict1Element.style.display = 'none';
        pict1Element.classList.remove('visible');
    }
    
    
    if (sob2) sob2.style.display = 'block';
    if (pict2Element) {
        pict2Element.style.display = 'block';
        restartAnimation(pict2Element);
    }
}


if (for01) {
    for01.addEventListener('click', () => {
        showFirstBlock();
        console.log('Выбран первый блок');
    });
}

if (for02) {
    for02.addEventListener('click', () => {
        showSecondBlock();
        console.log('Выбран второй блок');
    });
}


showFirstBlock();


const cards = document.querySelectorAll('.card');
const slider = document.querySelector('.slider');


let cardWidth = 0;

function getCardWidth() {
    if (cards.length > 0) {
        cardWidth = cards[0].offsetWidth;
    }
}

function getPositions() {
    const centerX = 0; 
    
    return [
        {
            x: -(cardWidth * 1.3),
            scale: 0.75,
            rotateY: 25,
            z: 1,
            opacity: 0.7
        },
        {
            x: -(cardWidth * 0.65),
            scale: 0.9,
            rotateY: 15,
            z: 2,
            opacity: 0.9
        },
        {
            x: 0,
            scale: 1,
            rotateY: 0,
            z: 5,
            opacity: 1
        },
        {
            x: cardWidth * 0.65,
            scale: 0.9,
            rotateY: -15,
            z: 2,
            opacity: 0.9
        },
        {
            x: cardWidth * 1.3,
            scale: 0.75,
            rotateY: -25,
            z: 1,
            opacity: 0.7
        }
    ];
}

let positions = [];

function render() {
    cards.forEach((card, index) => {
        const p = positions[index];
        if (!p) return;

        card.style.transform = `
            translateX(${p.x}px)
            scale(${p.scale})
            rotateY(${p.rotateY}deg)
        `;
        card.style.zIndex = p.z;
        card.style.opacity = p.opacity;
    });
}

function initSlider() {
    getCardWidth();
    positions = getPositions();
    render();
}


initSlider();


window.addEventListener('resize', () => {
    getCardWidth();
    positions = getPositions();
    render();
});


const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn) {
    nextBtn.onclick = () => {
        positions.unshift(positions.pop());
        render();
    };
}

if (prevBtn) {
    prevBtn.onclick = () => {
        positions.push(positions.shift());
        render();
    };
}


setTimeout(function() {
    const slides = [
        { img: document.querySelector('.reklama_1'), title: document.querySelector('.glamur'), desc: document.querySelector('.mini_glamur') },
        { img: document.querySelector('.reklama_2'), title: document.querySelector('.bunt'), desc: document.querySelector('.mini_bunt') },
        { img: document.querySelector('.reklama_3'), title: document.querySelector('.scream'), desc: document.querySelector('.mini_scream') }
    ];
    
    if (!slides[0].img) return;
    let current = 0;
    
    function showSlide(index) {
        slides.forEach(s => {
            if (s.img) s.img.classList.remove('active');
            if (s.title) s.title.classList.remove('active');
            if (s.desc) s.desc.classList.remove('active');
        });
        slides[index].img.classList.add('active');
        slides[index].title.classList.add('active');
        slides[index].desc.classList.add('active');
    }
    
    showSlide(0);
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 3000);
}, 100);


    const cont1 = document.querySelector('.cont1');
const cont2 = document.querySelector('.cont2');
const cont3 = document.querySelector('.cont3');

const contactImages = [cont1, cont2, cont3].filter(img => img !== null);


let isAnimating = false;


function showImagesSequentially() {
    if (isAnimating) return;
    isAnimating = true;

   
    contactImages.forEach(img => {
        img.style.transition = 'none';
        img.style.opacity = '0';
        img.style.transform = 'scale(0.3) translateY(50px)';
        img.style.pointerEvents = 'none';
    });

   
    setTimeout(() => {
        if (contactImages[0]) {
            contactImages[0].style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            contactImages[0].style.opacity = '1';
            contactImages[0].style.transform = 'scale(1) translateY(0)';
            contactImages[0].style.pointerEvents = 'auto';
        }
    }, 100);

   
    setTimeout(() => {
        if (contactImages[1]) {
            contactImages[1].style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            contactImages[1].style.opacity = '1';
            contactImages[1].style.transform = 'scale(1) translateY(0)';
            contactImages[1].style.pointerEvents = 'auto';
        }
    }, 350);

   
    setTimeout(() => {
        if (contactImages[2]) {
            contactImages[2].style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            contactImages[2].style.opacity = '1';
            contactImages[2].style.transform = 'scale(1) translateY(0)';
            contactImages[2].style.pointerEvents = 'auto';
        }
        isAnimating = false;
    }, 600);
}


function checkAllHidden() {
    const allHidden = contactImages.every(img => img.style.opacity === '0' || img.style.opacity === '');
    if (allHidden && !isAnimating) {
       
        setTimeout(() => {
            showImagesSequentially();
        }, 250);
    }
}


function handleClick(img, index) {
    if (!img) return;
    if (img.style.opacity === '0') return; 
    if (isAnimating) return; 

    
    img.style.transition = 'all 0.2s ease';
    img.style.opacity = '0';
    img.style.transform = 'scale(0.3) translateY(40px)';
    img.style.pointerEvents = 'none';

   
    checkAllHidden();
}


contactImages.forEach((img, index) => {
    if (img) {
        img.addEventListener('click', function() {
            handleClick(this, index);
        });
    }
});

if (contactImages.length > 0) {
   
    contactImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.3) translateY(50px)';
        img.style.pointerEvents = 'none';
        img.style.transition = 'none';
    });

    
    setTimeout(showImagesSequentially, 200);
}


function initMap() {
    const sec2c = document.querySelector('.sec_2c');
    if (!sec2c) return;

    sec2c.innerHTML = '';

    
    const iframe = document.createElement('iframe');
    iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Aca5a312c83fcb28293cf7bb00714823a0c9862040ef67755820ab1626284ec79&amp;source=constructor';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    
    sec2c.appendChild(iframe);
}


setTimeout(initMap, 200);

document.querySelector('.podval_brand').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './index.html#sec_2';
});


document.querySelector('.podval_shop').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './shop.html';
});

document.querySelector('.podval_haut').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './haut.html';
});

document.querySelector('.podval_events').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './events.html';
});

document.querySelector('.podval_tickets').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './events.html#sec_3e';
});

document.querySelector('.podval_registr').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './events.html#sec_6e';
});

document.querySelector('.podval_contacts').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = './contacts.html';
});

const hoverPairs = [
    { trigger: document.querySelector('.tshirt'), target: document.querySelector('.tshirt_1') },
    { trigger: document.querySelector('.ozh'), target: document.querySelector('.ozh_1') },
    { trigger: document.querySelector('.ballon'), target: document.querySelector('.ballon_1') },
    { trigger: document.querySelector('.shtan'), target: document.querySelector('.shtan_1') },
    { trigger: document.querySelector('.zipka'), target: document.querySelector('.zipka_1') },
    { trigger: document.querySelector('.perch'), target: document.querySelector('.perch_1') }
];


function setupHoverPair(trigger, target) {
    if (!trigger || !target) return;
    
   
    target.style.opacity = '0';
    target.style.transition = 'opacity 0.4s ease';
    
   
    trigger.addEventListener('mouseenter', () => {
        target.style.opacity = '1';
    });
    
    
    trigger.addEventListener('mouseleave', () => {
        target.style.opacity = '0';
    });
}


hoverPairs.forEach(pair => {
    setupHoverPair(pair.trigger, pair.target);
});

(function() {
    if (typeof THREE === 'undefined') {
        console.error('THREE.js не загружен');
        return;
    }

    const hero = document.getElementById('hero-404');
    const canvas = document.getElementById('c-404');
    
    if (!hero || !canvas) {
        console.error('элементы hero или canvas не найдены!');
        return;
    }

    console.log('запуск короче');

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    function resize() {
        const width = hero.offsetWidth;
        const height = hero.offsetHeight;
        renderer.setSize(width, height);
        
        const aspect = width / height;
        if (aspect > 1) {
            camera.left = -aspect;
            camera.right = aspect;
        } else {
            camera.top = 1 / aspect;
            camera.bottom = -1 / aspect;
        }
        camera.updateProjectionMatrix();
    }

    resize();

   
    const fallbackCanvas = document.createElement('canvas');
    fallbackCanvas.width = 1024;
    fallbackCanvas.height = 1024;
    const ctx = fallbackCanvas.getContext('2d');
    ctx.fillStyle = '#201AC3';
    ctx.fillRect(0, 0, fallbackCanvas.width, fallbackCanvas.height);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('404', fallbackCanvas.width/2, fallbackCanvas.height/2 - 30);
    ctx.font = '40px Arial';
    ctx.fillText('страница не найдена', fallbackCanvas.width/2, fallbackCanvas.height/2 + 80);
    
    let imageTexture = new THREE.CanvasTexture(fallbackCanvas);

  
    const uniforms = {
        uTexture: { value: imageTexture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,

        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `,

        fragmentShader: `
            uniform sampler2D uTexture;
            uniform vec2 uMouse;
            uniform float uTime;
            varying vec2 vUv;

            void main() {
                vec2 uv = vUv;
                float dist = distance(uv, uMouse);
                float ripple = sin(dist * 70.0 - uTime * 4.0) * 0.02;
                ripple *= smoothstep(0.4, 0.0, dist);
                uv += normalize(uv - uMouse) * ripple;
                vec4 color = texture2D(uTexture, uv);
                gl_FragColor = color;
            }
        `
    });

    const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        material
    );
    scene.add(mesh);

   
    const fonImage = document.getElementById('fon-image');
    
    if (fonImage) {
        
        try {
            const texture = new THREE.Texture(fonImage);
            texture.needsUpdate = true;
            uniforms.uTexture.value = texture;
            console.log('текстура ок');
        } catch(e) {
            console.warn('не получилоь блин');
        }
    } else {
       
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = './images/fon.png';
        
        img.onload = function() {
            console.log('все ок!');
            const texture = new THREE.Texture(img);
            texture.needsUpdate = true;
            uniforms.uTexture.value = texture;
        };
        img.onerror = function() {
            console.error('онееет');
        };
    }

   
    window.addEventListener("mousemove", function(e) {
        const rect = hero.getBoundingClientRect();
        uniforms.uMouse.value.x = (e.clientX - rect.left) / rect.width;
        uniforms.uMouse.value.y = 1.0 - (e.clientY - rect.top) / rect.height;
    });

    window.addEventListener("resize", function() {
        resize();
    });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
    }

    animate();

    console.log('3дшка есть!');
})();

const shopItems = document.querySelectorAll('.tshirt, .ozh, .ballon, .shtan, .zipka, .perch');

shopItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if (typeof startNamedTransition === 'function') {
            startNamedTransition('./404.html');
        } else {
            window.location.href = './404.html';
        }
    });
});

const returnButton = document.querySelector('.return');

if (returnButton) {
    returnButton.style.cursor = 'pointer';
    returnButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); 
        if (typeof startNamedTransition === 'function') {
            startNamedTransition('./shop.html');
        } else {
            window.location.href = './shop.html';
        }
    });
}
});