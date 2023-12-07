class EmojiButton {

    constructor(emoji, x, y, index){
        this.emoji = emoji;
        this.x = x;
        this.y = y;
        this.index = index;

        this.tSize = 30;

        this.showSelection = false;
    }



    show(){
       
    text(this.emoji, this.x, this.y);
    if (this.index == selectedEmojiIndex){
   
            // cricle // green
            stroke(0, 180, 0); // the green cricle
            strokeWeight(4);
            noFill();
            ellipse(this.x, this.y, 40, 40);
          
    }
    }


//using the collide2D library to tell us if the mouse is over our button
    isMouseOver(){
        
        let hit = collidePointEllipse(mouseX, mouseY,this.x,this.y,40,40);

        if(hit){
    
            return true;
        } else {

            return false;
        }
        
    }





}