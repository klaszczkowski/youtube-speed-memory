chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);


class SpeedSetter {
    constructor() {
        this.player;
        this.buttons;
        this.settingsBtn;
        this.changeSpeedBtn;
        this.speedOptions;

        this.initSettings = [
            {
                channelName: 'codedamn',
                preferredSpeedSetManuallyInPannel: '1.5',
                latelySetSpeed: '1.25'
            },
            {
                channelName: 'Codevolution',
                preferredSpeedSetManuallyInPannel: '0.5',
                latelySetSpeed: '0.25'
            }
        ];

    

    }

    clickSettingsIcon () {

        setTimeout(() => {
            this.player = document.querySelectorAll('#player-theater-container');
    
            this.player = this.player[0];
            alert(this.player.length);
            
            if (this.player) {
                alert('in o00');
                setTimeout(() => {
                    this.buttons = this.player.querySelector('.ytp-chrome-bottom');
        
                    // var insertedNodes = ['asd'];
                    // var observer = new MutationObserver(function(mutations) {
                    //     mutations.forEach(function(mutation) {
                    //         console.log(mutation);
                    //         for (var i = 0; i < mutation.addedNodes.length; i++)
                    //             insertedNodes.push(mutation.addedNodes[i]);
                    //     })
                    // });
                    // observer.observe(this.buttons, {
                    //     attributes: true,
                    //     childList: true,
                    //     subtree: true,
                    //     characterData: true
                    // });
            
            
                
                    this.settingsBtn = this.buttons.querySelector('.ytp-settings-button');
                    this.settingsBtn.click();
            
                    alert('in o0');
                    this.openChangeSpeedMenu();
                }, 500);
           
            }
        }, 500)
        

    }

    openChangeSpeedMenu() {
        alert('in o');
        this.changeSpeedBtn = document.querySelectorAll('.ytp-menuitem');
        // alert(this.changeSpeedBtn.length);
    
        this.changeSpeedBtn = this.changeSpeedBtn[1];
        // alert(this.changeSpeedBtn.toString());
        // alert(typeof this.changeSpeedBtn);
        this.changeSpeedBtn.click();
    
        this.choose150();
    }

    choose150() {
        alert('in 1');
        this.speedOptions = document.querySelectorAll('.ytp-panel');
        // alert(this.speedOptions.length);
        if (this.speedOptions.length == 2) {
            alert('in 2');
            if (this.speedOptions) this.speedOptions = this.speedOptions[1];
            // alert(this.speedOptions.toString());
    
            var items = this.speedOptions.querySelectorAll('.ytp-menuitem');
            // alert(items.length);
    
            var random = Math.floor(Math.random() * 8);
    
            items[random].click();
    
            alert('all set' + random);
        } 
    }
}

var speedSetter = new SpeedSetter();

speedSetter.clickSettingsIcon();


// <div class="ytp-menuitem" aria-haspopup="true" role="menuitem" tabindex="0">
//     <div class="ytp-menuitem-icon"></div>
//     <div class="ytp-menuitem-label">Prędkość odtwarzania</div>
//     <div class="ytp-menuitem-content">Normalna</div>
// </div>


// var o = new MutationObserver(function(ms) {
//     console.log(ms);
// });

// o.observe(document, {
//     childList: true,
//     attributes: true,
//     characterData: true,
//     characterDataOldValue: true
// });