        // This function for link to css and js file to html 
       function myFunction() {
           var btn = document.createElement("BUTTON");
           var attB = document.createAttribute("style");
           attB.value = "background-color:red";
           document.body.appendChild(btn);
           btn.innerHTML = "New button";
           // or different ways to add the text for button
           // btn.appendChild(document.createTextNode('New button'));
           btn.setAttributeNode(attB);
           // if you dont want to create the attribute, you can choice the diffrent ways to directly create set attributeNode
           btn.setAttribute('content', 'test content');
       }
