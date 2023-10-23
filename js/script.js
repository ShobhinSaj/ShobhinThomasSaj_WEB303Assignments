/*
    Assignment 05
*/

$(document).ready(function () {
    
    class ContentItem{
        constructor(id,name,deScrp,catGen){   //Constructor for class ContentItem
            this.id=id;
            this.name=name;
            this.deScrp=deScrp;
            this.catGen=catGen;
        }
      updateContentitem=function(id,name,deScrp,catGen){    //user-defined function
        if(this.id===id){
            
            if(name!=null){
                this.name=name;
            }
            if(deScrp!=null){
                this.deScrp=deScrp;
            }
            if(catGen!=null){
                this.catGen=catGen;
            }
 
        }
        else{
            
            alert("no items matching id value passed exists!Please try again! ");
        }
      } 
      toString(){               //toString function definition override
        return `<div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.deScrp}</p>
                <div><b>Category:</b> ${this.catGen}</div>
                </div>`;
      }
      
    }
    contentItems = [
        new ContentItem(0, "SCAR-L", "The SCAR-L is the light variant of the FN SCAR (Special Operations Forces Combat Assault Rifle), a gas-operated short-stroke gas piston automated rifle chambered to a variety of cartridges.", "Assault Rifles"),
        new ContentItem(1, "SLR", "The SLR (Self Loading Rifle), is a DMR type weapon in BATTLEGROUNDS. A semi-automatic, British version of the venerable FN FAL battle rifle", "Designated Marksman Rifles"),
        new ContentItem(2, "Vector", "The Vector is a submachine gun type weapon in BATTLEGROUNDS. Introduced in the Early Access Month 1 Update of 2017, the Vector uses an unconventional delayed blowback system to mitigate recoil, making it easier to control automatic fire at close ranges.", "Submachine Guns"),
        new ContentItem(3, "M24", "The M24 Sniper Weapon System (SWS) is the military and police version of the Remington Model 700 rifle, M24 being the model name assigned by the United States Army after adoption as their standard sniper rifle in 1988", "Sniper Rifle"),
        new ContentItem(4, "DP-28", "The DP-28 is a light machine gun type weapon in BATTLEGROUNDS. Manufactured in Russia, its Russian name is 'Pulemyot Degtyaryova Pekhotny,' translating to 'Degtyaryov's infantry machine gun.'", "Light Machine Gun"),
      ];
      contentItems.forEach(element => {
       var $newContent=$(element.toString());
        $('#content-item-list').append($newContent);
        $('.content-item-wrapper').css({
            border: "1px solid #ccc",
            width: "300px",
            padding: "10px",
            margin: "10px auto",
          });
      });
      
      $('#updateItems').click(function(){           //Succesful array updation button
        const targetItem = contentItems.find(item => item.id === 1);
        
        targetItem.updateContentitem(1,"M426","One of the most preferred Assault Rifles, uses 5.56×45mm NATO ammo","Assault Rifle");
        alert("Item 1 updated Succesfully!");
        });
        
        $('#updateItemsfaild').click(function(){     //Failed array updation button
            const targetItem = contentItems.find(item => item.id === 1);
            targetItem.updateContentitem(10,"M426","One of the most preferred Assault Rifles, uses 5.56×45mm NATO ammo","Assault Rifle");
           });
      
});


